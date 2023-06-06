# 目前公司内部用的自动转api工具

## 安装

```shell
npm i swagger2apis -D
# or
pnpm i swagger2apis -D
```

## 配置

在你项目里api相关的目录里新建一个脚本文件,还需要提供两个模板文件,内容可以是下边的示例:

```js
import wantedApi, { getCurrentDirName } from 'swagger2apis';
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

```

模板文件在example文件夹下有提供示例
[api生成模板]((https://github.com/pandavips/swagger2api/blob/main/example/apis.eta))

[interface生成模板]((https://github.com/pandavips/swagger2api/blob/main/example/apis.eta))

## 使用

### 自动挡

在项目里package.json里添加脚本

```json
"scripts": {
    ...,
    // +
    "gen:apis": "node ./src/api/swagger2api/index.mjs && prettier --write ./src/api/*"
  },
```

### 手动挡

手动使用node执行脚本文件,手动格式化

```shell
node ./src/api/swagger2api/index.mjs
```
