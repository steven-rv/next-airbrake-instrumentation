const pino = require("pino");

const transport = {
  targets: [
    {
      target: "pino-airbrake-transport",
      options: {
        airbrake: {
          projectId: process.env.AIRBRAKE_PROJECT_ID,
          projectKey: process.env.AIRBRAKE_KEY,
          environment: "production",
        },
      },
      level: "info", // minimum log level that should be sent to airbrake
    },
    {
      target: "pino-pretty",
      level: "info",
    },
  ],
};

const logger = defaultConfig =>
  pino({
    ...defaultConfig,
    transport,
  });

module.exports = {
  logger,
};
