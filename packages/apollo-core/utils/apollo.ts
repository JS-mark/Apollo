import fs from 'node:fs'
import { wbLog } from '../utils/index'
import { ROOT_PATH } from './constant';
import { type RspackOptions } from "@rspack/core";
import type { ApolloConfigOptions } from '../types/index'
/**
 * 获取apollo config
 * @param configPath
 * @returns
 */
export const getApolloConfig = (configPath: string): ApolloConfigOptions | {} => {
  try {
    const config = fs.readFileSync(configPath, 'utf-8')
    return JSON.parse(config)
  } catch (error) {
    return {}
  }
}

/**
 * 将 apollo config 转换成 rspack config
 * @param config
 */
export const covertAC2RC = async (): Promise<RspackOptions> => {
  try {
    const apolloConfig = await getRolloConfig()
    return {
      ...apolloConfig,
      context: ROOT_PATH
    }
  } catch (error) {
    console.error("")
    wbLog("warn", "apollo config 转换失败")
    return {}
  }
}

/**
 * 获取配置
 * @returns
 */
export const getRolloConfig = (): Promise<ApolloConfigOptions> => {
  return new Promise( (resolve, reject) => {
    const root = ROOT_PATH
    const supportFile = ['.js', '.ts']
    let configPath = ''
    for (const k of supportFile) {
      configPath = `${root}/apollo.config${k}`
      if (fs.existsSync(configPath)) {
        break
      }
    }
    import(configPath).then((res => {
      resolve(res.default || {})
    })).catch((err => {
      reject(err)
    }))
  })
}
