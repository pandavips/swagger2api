import wantedApi, { getCurrentDirName } from '../dist/main.esm.mjs';
import { join } from 'path'

wantedApi([
  {
    url: 'http://10.200.100.14:8294/v2/api-docs?group=proxy',
    outDir: join(getCurrentDirName(import.meta.url), './a'),
    apiUrlPrefix: '/proxy',
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


