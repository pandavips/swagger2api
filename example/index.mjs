import wantedApi, { getCurrentDirName } from '../dist/main.esm.mjs';
import { join } from 'path'

wantedApi([
  {
    // json来源
    url: 'http://10.200.100.14:8294/v2/api-docs?group=proxy',
    // 输出目录
    outDir: join(getCurrentDirName(import.meta.url), './a'),
    // 公共路径前缀
    apiUrlPrefix: '/proxy',
    // 模板地址
    templatePath: {
      api: join(getCurrentDirName(import.meta.url), './apis.eta'),
      interface: join(getCurrentDirName(import.meta.url), './interface.eta')
    }
  },
  {
    url: 'http://10.200.100.14:8294/v2/api-docs?group=proxy',
    outDir: join(getCurrentDirName(import.meta.url), './b'),
    apiUrlPrefix: '/proxy',
    needJS: true,
    templatePath: {
      api: join(getCurrentDirName(import.meta.url), './apis.eta'),
      interface: join(getCurrentDirName(import.meta.url), './interface.eta')
    }
  }
])

