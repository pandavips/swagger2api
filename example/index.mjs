import wantedApi, { getCurrentDirName } from '../dist/main.esm.mjs';
import { join } from 'path'
wantedApi([
  {
    // json来源
    rawJson: 'https://petstore.swagger.io/v2/swagger.json',
    // 输出目录
    outDir: join(getCurrentDirName(import.meta.url), './api/a'),
    // 公共路径前缀
    needJS: true,
    apiUrlPrefix: '/proxy',
  },
])


