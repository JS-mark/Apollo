import { type RspackOptions } from "@rspack/core";
export type JsbridgeBuildType = "wap" | "app" | string

export interface ApolloConfigOptions extends Omit<RspackOptions, "context">{
  // ftp 配置
  ftp: {
    host: string,
    port: number,
    user: string,
    password: string,
    openBrowser: boolean,
    hybridAutoVersion: boolean,
    // 远程路径配置
    remotePath: {
      version: boolean,
    },
  }
  // 是否使用 https
  https: boolean,
  publicPath: string, //线上amd绝对路径文件夹
  // 全局环境变量
  globalEnv: {
    jsbridgeBuildType: JsbridgeBuildType,
    [key: string]: string
  },
}
