import { getNamespace } from 'continuation-local-storage';
import winston from 'winston';

const options = {
  console: {
    level: 'info',
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    ),
    prettyPrint: true,
    colorize: process.stdout.isTTY,
  },
};

const Logger = winston.createLogger({
  transports: [new winston.transports.Console(options.console)],
  exitOnError: false,
});

const formatMessage = (message: string) => {
  const namespace = getNamespace('request');
  const id = namespace && namespace.get('id');
  return id ? `[${id}] ${message}` : message;
};

const logger = {
  log: (message: string): winston.Logger => Logger.info(message),
  info: (message: string, obj?: object): winston.Logger =>
    Logger.info(formatMessage(message), obj),
  error: (message: string, obj?: object): winston.Logger =>
    Logger.error(formatMessage(message), obj),
  warn: (message: string, obj?: object): winston.Logger =>
    Logger.warn(formatMessage(message), obj),
  debug: (message: string, obj?: object): winston.Logger =>
    Logger.debug(formatMessage(message), obj),
  silly: (message: string, obj?: object): winston.Logger =>
    Logger.silly(formatMessage(message), obj),
};
export default logger;
