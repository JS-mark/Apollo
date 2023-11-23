import { defineConfig } from '@rspack/cli'
import { covertAC2RC } from '../utils/index'
import webpackMerger from 'webpack-merge'
import baseConfig from './rspack.base.config'


const apolloConfig = await covertAC2RC()
// 导出配置
export default defineConfig(webpackMerger(apolloConfig, baseConfig))
