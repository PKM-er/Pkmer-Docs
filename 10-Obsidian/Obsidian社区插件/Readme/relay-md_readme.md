---
uid: 2024022121234312
title: Obsidian 插件：【Readme】Relay.md
tags: ['obsidian插件', 'readme']
description: 快速轻松地与团队分享笔记。使用主题来限制范围，这样只有订阅您的主题的团队成员才会自动收到共享的笔记，直接存入他们的保险库！
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Relay.md

> [!Note] 插件名片
> - 插件名称：Relay.md
> - 插件作者：xeroc
> - 插件说明：快速轻松地与团队分享笔记。使用主题来限制范围，这样只有订阅您的主题的团队成员才会自动收到共享的笔记，直接存入他们的保险库！
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/relay-md/relay-md-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?relay-md)

## 概述

快速轻松地与团队分享笔记。使用主题来限制范围，这样只有订阅您的主题的团队成员才会自动收到共享的笔记，直接存入他们的保险库！

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/relay-md/relay-md-obsidian-plugin/master/README.md)
>

---

## Readme(翻译）

下面是 [[relay-md]] 插件的自述翻译

# Relay.md Obsidian 插件

这个仓库包含了一个用于 [Obsidian](https://obsidian.md) 的插件，用于 [relay.md](https://relay.md)。

relay.md 的目的是让分享 markdown 文件再次变得有趣。特别是，我们想建立“团队的 Markdown 工作流”。

Relay.md 让向团体、人员或个人发送文档变得容易，并允许订阅整个团队及其文档。这将允许个人团队成员从 Obsidian 内部与整个团队分享他们的知识。不再需要复制粘贴并编辑成一些奇怪的维基语法。

此外，那些处理不同项目、团队或客户的人可以在 Obsidian 中将他们的信息聚合起来，并从 Obsidian 内部向相应的人发送他们的文档。准备好了 *新创业功能 -A* 的规格，将它们发送给创业公司的技术团队。为 *商业 B* 撰写了咨询合同，通过 relay.md 通过 Obsidian 将文档发送给他们。

最重要的是，你可以将你的东西整合在一起！

# 如何操作

在 Obsidian 中使用 relay.md 非常简单。您只需要在 frontmatter 中指定接收者，如下所示：

```
relay-to:
 - label@team
 - @funnyfriend49
```

更新文档后，文件将使用您的个人访问令牌发送到 relay.md。一旦您的朋友打开他们的 Obsidian，relay.md 插件将自动检索所有已创建或更新的文档。

# 开发者部分

下面的内容是为开发者和维护者准备的。

## 发布新版本

发布完全在 github actions 中管理，只需要针对 `master` 发起一个拉取请求即可合并。与传统提交结合的语义化版本将负责版本控制。

## 如何构建

- 克隆这个仓库。
- 确保你的 NodeJS 至少是 v16（`node --version`）。
- 运行 `npm i` 或 `yarn` 安装依赖。
- 运行 `npm run dev` 以启动监视模式下的编译。
- （可选）运行 `npm run lint` 检查编码风格。
将 `main.js`、`styles.css` 和 `manifest.json` 复制到您的保险库 `VaultFolder/.obsidian/plugins/relay-md/` 中。



