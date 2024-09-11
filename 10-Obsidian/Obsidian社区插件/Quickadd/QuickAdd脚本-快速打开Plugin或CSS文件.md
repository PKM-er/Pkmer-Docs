---
uid: 20240908205100
title: QuickAdd 脚本 - 快速打开 Plugin 或 CSS 文件
tags: [quickadd脚本]
description: 快速打开 Plugin 或 CSS 文件
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240909125937
---

# QuickAdd 脚本 - 快速打开 Plugin 或 CSS 文件

## 实现功能

用于快速打开 Plugin 文件夹 或 CSS 文件，运行后会打开 PluginId 选择框，通过关键词筛选后，选择需要打开的插件 Id，则会自动找到对应 Plugin 或 CSS 文件。

![24.09.08_QuickAdd脚本-快速打开Plugin文件夹.md](https://cdn.pkmer.cn/images/202409082051297.gif)

### 用途

有时候要排查某个插件是否跟其他插件有冲突，就需要找到对应文件夹，但在 plugins 的文件夹里面来找的话，我眼睛都花了还找不到，且文件夹管理器的搜索又慢，就需要用到这个办法了。

## QuickAdd Capture 代码

````
```js quickadd
const quickAddApi = this.app.plugins.plugins.quickadd.api;
const path = require("path");
const options = ["插件", "CSS"];
let option = await quickAddApi.suggester(options, options);

switch (option) {
case "插件":
  const manifests = app.plugins.manifests;
  const count = Object.keys(manifests).length;
  console.log(`ob插件的个数是: ${count}`);
  const pluginOptions = Object.keys(manifests);
  option = await quickAddApi.suggester(pluginOptions, pluginOptions);
  const pluginPath = manifests[option].dir + "/" + "main.js";
  console.log(pluginPath);
  app.showInFolder(pluginPath);
  break;
case "CSS":
  const cssCache = app.customCss.csscache;
  const keys = Array.from(cssCache.keys());;
  console.log(`自定义CSS的个数是: ${keys.length}`);
  option = await quickAddApi.suggester(keys.map(i => path.basename(i)), keys);
  app.openWithDefaultApp(option);
  break;
}
```
````

## Capture 脚本设置

![24.09.08_QuickAdd脚本-快速打开Plugin文件夹.md](https://cdn.pkmer.cn/images/202409082051014.png!pkmer)

![24.09.08_QuickAdd脚本-快速打开Plugin文件夹.md](https://cdn.pkmer.cn/images/202409082051675.png!pkmer)
