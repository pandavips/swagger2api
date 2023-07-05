import wantedApi, { getCurrentDirName } from '../dist/main.esm.mjs';
import { join } from 'path'
import rawJson from './apiJSON.js';

wantedApi([
  {
    // json来源
    rawJson,
    // 输出目录
    outDir: join(getCurrentDirName(import.meta.url), './api/a'),
    // 公共路径前缀
    needJS: true,
    apiUrlPrefix: '/proxy',
  },
  {
    // json来源
    rawJson: 'http://xxxxxxxx/api',
    // 输出目录
    outDir: join(getCurrentDirName(import.meta.url), './api/b'),
    // 公共路径前缀
    apiUrlPrefix: '/proxy',
    needJS: true,
    modular: false,
    axiosPath: '../hahaha'
  }
])


