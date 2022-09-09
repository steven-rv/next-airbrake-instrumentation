include .make.env
IMAGE_NAME := $(ORGANIZATION)/$(LP_SERVICE_ID)

# ================================================================================
# Required Make targets
# ================================================================================

.PHONY: echo-image-name dev test build check mock clean

echo-image-name:
	@echo $(IMAGE_NAME)

dev: cp-env rm-containers
	docker-compose up

test: cp-env
	docker-compose exec -T app npm run test

build: cp-env
	docker image build --no-cache -t $(IMAGE_NAME) .

check: cp-env
	@$(MAKE) mock MOCK_DOCKER_ARGS='-d'
	./bin/check $(HOST_PORT) $(LP_SERVICE_ID)
	@$(MAKE) clean

mock: clean
	@docker network create mock --label lp-service-id=$(LP_SERVICE_ID)
	@docker run $(MOCK_DOCKER_ARGS) --name $(LP_SERVICE_ID) --network mock --rm -it --env-file ".env" -p $(HOST_PORT):$(CONTAINER_PORT) $(IMAGE_NAME)

clean: rm-containers rm-images rm-networks

# ================================================================================
# Custom (helper) Make targets go below here
# ================================================================================

.PHONY: rm-containers rm-images cp-env

cp-env:
	@rm -rf .env
	@cp -n .env.example .env
	@echo "NEXT_PUBLIC_COMMIT_HASH=`git rev-parse HEAD`" >> .env

rm-containers:
	-@ docker container ls -aq -f "status=running" -f "label=lp-service-id=$(LP_SERVICE_ID)" | xargs -I {} docker container kill {}
	-@ docker container ls -aq -f "status=exited" -f "label=lp-service-id=$(LP_SERVICE_ID)" | xargs -I {} docker container rm {}
	-@ docker-compose down --remove-orphans

rm-images:
	-@ docker image ls -aq -f "dangling=true" -f "label=lp-service-id=$(LP_SERVICE_ID)" | xargs -I {} docker image rm -f {}

rm-networks:
	-@ docker network ls -q -f "label=lp-service-id=$(LP_SERVICE_ID)" | xargs -I {} docker network rm {}
