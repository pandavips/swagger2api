
<p align='center'>
根据json快速生成api定义文件,拒绝低级重复工作,关注身心健康~
<br>
</p>

<br>

## 特性

- ⚡️ 同时支持ts与js的方式

- 📑 支持自定义模板

- ☁️ 支持远程采集json,同时支持本地json

<br>

## 安装

```shell
npm i swagger2apis -D
# or
pnpm i swagger2apis -D
```

## 使用

在你的项目随意一个地方新建一个`*.mjs`文件,填充以下内容:

```js
import wantedApi, { getCurrentDirName } from '../dist/main.esm.mjs';
import rawJson from './apiJSON.js';
import { join } from 'path'

wantedApi({
  // json地址来源,可以是本地json,也可以是地址远程采集
  // rawJson: 'https://github.com/pandavips/swagger2api',
  rawJson: rawJson,
  // 定义文件输出目录目录
  outDir: join(getCurrentDirName(import.meta.url), './api'),
  // 公共路径前缀,最终输出会擦除掉这个前缀
  apiUrlPrefix: '/proxy',
  // 是否需要js
  needJS: true,
  // 是否需要模块化分组输出文件
  modular:true,
  // 模板文件地址,如果省略将使用自带模板,若有需要可以将模板放置到本地然后进行修改,然后采用本地模板
  // templatePath:{
    // api模板
    // api:'xxx',
    // interface模板
    // dtx:'xxx'
  // },
  // axios实例引入路径,可省略;如果发现路径报错,请自行检查输出文件相对于axios实例文件的路径后调整此项(如果你使用的是本地模板,那么可以直接更改模板内容)
  // axiosPath: '../request'
})
```

在package.json里添加脚本

```json
"scripts": {
  // 使用node执行你刚刚新建的脚本文件,并借助prettier格式化输出文件
  "gen:apis": "node xxx.mjs && prettier --write xxx/*"
},
```

最后一步执行脚本

```shell
npm run gen:apis
```

如果没有出意外,你将会看到类似的以下输出内容,这意味着你成功了,good luck~

```shell
开始生成api...
完成工作,enjoy it!
src\api\apis.js 73ms
src\api\apis.ts 200ms
src\api\genApis.mjs 10ms
src\api\httpError.js 12ms
src\api\interfaces.d.ts 613ms
src\api\request.js 40ms
```

## 如果你的项目有多个不同JSON来源怎么办?

注意到我们有时候会需要生成多个来源的接口定义,那么我们可以直接传入一个数组项的配置,看下方示例:

```js
import wantedApi, { getCurrentDirName } from '../dist/main.esm.mjs';
import { join } from 'path'
wantedApi([
  {
    rawJson: '来源一',
    outDir: join(getCurrentDirName(import.meta.url), './api/a'),
    apiUrlPrefix: '/proxy',
  },
  {
    rawJson: '来源二',
    outDir: join(getCurrentDirName(import.meta.url), './api/b'),
    apiUrlPrefix: '/proxy',
  }
])
```

我们通常只需要更改`outDir`的输出路径来放置不同来源的输出文件,这样我们就可以很方便的生成了.

## 模板文件哪里找?

如果你已经在项目里安装,会在这个路径下找到模板文件
`\node_modules\swagger2apis\dist\template`

或者来到github仓库(可能需要留意版本差异):

- [api定义文件模板(apis)](https://github.com/pandavips/swagger2api/blob/main/src/static/template/apis.eta)
- [interface模板(dts)](https://github.com/pandavips/swagger2api/blob/main/src/static/template/dts.eta)

## 更简单的使用方案,访问下边的网站

[swagger2apis辅助工具](https://dainty-meerkat-f932e6.netlify.app/swagger2apis/tool)

注意,这个页面使用了`showDirectoryPicker`api,需要留意你的浏览器是否支持这个api;并且,最好在进行操作前保证git工作空间是干净的,这样即使产生了错误的信息,也更方便你进行回滚.

你需要提供至多两个参数就可以把这个小工具集成到你的项目:一个是json采集的地址,一个是api路径公共前缀.

这个页面在你选择项目根目录之后执行的流程:

- 找到src下的api目录,写入生成脚本(如果有这个文件会进行覆盖哈)
- 修改package.json,添加依赖和执行脚本

可能这个目录结构并不是通用的,你可以做一定修改来使用,不论你是修改本页面(ctrl+s),还是修改你的项目结构.
