import { createRequire } from "module";

import pino from "pino";

import handleError from "./handlers/error";
const require = createRequire(import.meta.url);

const isEdge = process.env.NEXT_RUNTIME === "edge";
const isProduction = process.env.NODE_ENV === "production";

let transport;
if (!isEdge && isProduction) {
  try {
    // Check if "pino-pretty" is installed.
    require.resolve("pino-pretty");
    transport = {
      target: "pino-pretty",
      options: {
        colorize: true,
        ignore: "pid, hostname",
        translateTime: "SYS:standard",
      },
    };
  } catch (err) {
    handleError(err);
    transport = undefined;
  }
}

const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  transport,
  formatters: {
    level: (label) => ({ level: label.toUpperCase() }),
  },
  timestamp: pino.stdTimeFunctions.isoTime,
});

export default logger;
