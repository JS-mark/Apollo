import { LOG_NAME } from "./constant";
/**
 * 日志输出
 * @param type
 * @param args
 */
export const wbLog = (type: "log" | "warn" | "error", ...args: any[]) => {
  const { log, warn, error } = global.console;
  switch (type) {
    case "log":
      log("\r\n", LOG_NAME, ...args);
      break;
    case "error":
      error("\r\n", LOG_NAME, ...args);
      break;
    case "warn":
      warn("\r\n", LOG_NAME, ...args);
      break;

    default:
      log("\r\n", LOG_NAME, ...args);
      break;
  }
};
