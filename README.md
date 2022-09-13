## Getting Started

First, duplicate the `.env.example` file and rename to `.env`. Update `.env` to include the correct airbrake project ID and api key.

```bash
AIRBRAKE_PROJECT_ID=[replace with project ID]
AIRBRAKE_KEY=[replace with api key]
```

Then, run the development server to verify the stdout logging is working:

```bash
npm run dev:logger
```

Open [http://localhost:3000/fail-server](http://localhost:3000/fail-server) with your browser to see a server error log.

## Testing the build

First run a local production build

```bash
npm run build:dev
```

Then start up the production server

```bash
npm run start:dev
```

You can also use the included makefile

```bash
make build
```

```bash
make dev
```

You can attach the node instance to a debugger to monitor the pino worker threads that are created.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next Logger](https://github.com/atkinchris/next-logger) - a pino wrapper for nextjs
- [Pino Airbrake Transport](https://github.com/pinojs/pino/blob/master/docs/transports.md#pino-airbrake-transport) - a pino transport for airbrake
