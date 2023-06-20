import wantedApi, { getCurrentDirName } from '../dist/main.esm.mjs';
import { join } from 'path'

wantedApi([
  {
    // json来源
    url: 'http://10.200.100.14:8293/v2/api-docs?group=boss',
    // 输出目录
    outDir: join(getCurrentDirName(import.meta.url), './api/a'),
    // 公共路径前缀
    needJS: true,
    apiUrlPrefix: '/proxy',
  },
  {
    // json来源
    url: 'http://10.200.100.14:8293/v2/api-docs?group=boss',
    // 输出目录
    outDir: join(getCurrentDirName(import.meta.url), './api/b'),
    // 公共路径前缀
    apiUrlPrefix: '/proxy',
    needJS: true,
    needGroup: false,
    axiosPath: '../hahaha'
  }
])


