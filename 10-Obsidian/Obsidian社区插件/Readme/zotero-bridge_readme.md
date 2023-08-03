---
uid: 2023080322295773
title: Obsidian 插件：【Readme】Zotero Bridge
tags: ['obsidian插件', 'readme']
description: 通过 ZotServer 连接到 Zotero
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Zotero Bridge

> [!Note] 插件名片
> - 插件名称：Zotero Bridge
> - 插件作者：Shmavon Gazanchyan
> - 插件说明：通过 ZotServer 连接到 Zotero
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/vanakat/zotero-bridge)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?zotero-bridge)

## 概述

通过 ZotServer 连接到 Zotero



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/vanakat/zotero-bridge/main/README.md)
> 

---

## Readme(翻译）

下面是 [[zotero-bridge]] 插件的自述翻译


# Obsidian Zotero桥接插件

Obsidian-Zotero集成插件，为其他插件提供与Zotero集成的API。

**需要在Zotero中安装[ZotServer](https://github.com/MunGell/ZotServer)插件**

如何使用

Zotero Bridge提供了API，供其他插件与安装了[ZotServer](https://github.com/MunGell/ZotServer)插件的Zotero连接。

这样的消费者插件示例是[Zotero Link](https://github.com/vanakat/zotero-link)。

该插件的API使用Obsidian [plugin api](https://github.com/vanakat/plugin-api)库发布，并可在Obsidian的任何地方使用。

在[Templater](https://github.com/SilentVoid13/Templater)的[用户脚本](https://silentvoid13.github.io/Templater/user-functions/script-user-functions.html)中使用Zotero Bridge API的示例：

`zotero.js`用户脚本：

```js
module.exports = async function () {
    const item = await PluginApi.ZoteroBridge.v1().search();
    return (prop) => dotAccess(prop, item.getValues());
}

function dotAccess(str, obj) {
    return str.split('.').reduce((previousValue, currentValue) => previousValue[currentValue], obj);
}
```

现在可以在模板中使用此函数：

_(此示例取自https://github.com/vanakat/zotero-bridge/pull/2)_

```
<%* const zi = await tp.user.zotero() %>


<% zi('firstAuthor.lastName') %><%* if (zi('authors.length')  == 2) { %> and <% zi('authors')[1].lastName %><%* } else if (zi('authors.length') > 2) { %> et al.<%* } %> <% zi('date.year') %> <% zi('title') %>
```

## 如何贡献

1. Fork并克隆此存储库
2. 将此目录链接到您的插件目录：`ln -sfn <this-directory> <your-test-vault>/.obsidian/plugins/obsidian-zotero`
3. 运行`npm install`以安装所有依赖项
4. 运行`npm run dev`以启动开发服务器
5. 在打开测试库的情况下重新加载Obsidian

请参考以下有用的资源：

* [非官方Obsidian API文档](https://marcus.se.net/obsidian-plugin-docs/)
* [官方Obsidian API定义文件](https://github.com/obsidianmd/obsidian-api/blob/master/obsidian.d.ts)
* [ZotServer存储库](https://github.com/MunGell/ZotServer)以获取API文档
* [Zotero搜索API代码](https://github.com/zotero/zotero/blob/master/chrome/content/zotero/xpcom/data/search.js)以获取最新的搜索API文档

其他Zotero集成插件

在开发这个插件的过程中，我发现了另一个名为[Zotero Integration](https://github.com/mgmeyers/obsidian-zotero-integration)的Zotero集成插件。
如果你正在寻找与Zotero的引用/文献集成，这可能是一个不错的选择。

## 许可证

MIT



