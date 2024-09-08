---
uid: 20240908205100
title: QuickAdd 脚本 - 快速打开 Plugin 文件夹
tags: [quickadd脚本]
description: 用于快速打开 Plugin 文件夹
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240908210050
---

# QuickAdd 脚本 - 快速打开 Plugin 文件夹

## 实现功能

用于快速打开 Plugin 文件夹，运行后会打开 PluginId 选择框，通过关键词筛选后，选择需要打开的插件 Id，则会自动找到对应插件的文件夹。

![24.09.08_QuickAdd脚本-快速打开Plugin文件夹.md](https://cdn.pkmer.cn/images/202409082051297.gif)

### 用途

我也不知道，但有时候需要找到对应文件夹，然后排查它是否跟其他插件有冲突，自带的文件夹来找的话，我眼睛都花了还找不到，为文件夹管理器的搜索又慢，就想了这个办法了。

## QuickAdd Capture 代码

````
```js quickadd
const manifests = app.plugins.manifests;
const count = Object.keys(manifests).length;
console.log(`总ob插件的个数是: ${count}`);
const quickAddApi = this.app.plugins.plugins.quickadd.api;
const options = Object.keys(manifests);
const option = await quickAddApi.suggester(options, options);
if (!option) return;
// const pluginPath = manifests[option].dir + "/" + "main.js";
const pluginPath = manifests[option].dir;
console.log(pluginPath);
app.showInFolder(pluginPath);
```
````

## Capture 脚本设置

![24.09.08_QuickAdd脚本-快速打开Plugin文件夹.md](https://cdn.pkmer.cn/images/202409082051014.png!pkmer)

![24.09.08_QuickAdd脚本-快速打开Plugin文件夹.md](https://cdn.pkmer.cn/images/202409082051675.png!pkmer)
