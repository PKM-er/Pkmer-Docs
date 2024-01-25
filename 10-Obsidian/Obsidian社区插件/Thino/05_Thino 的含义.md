---
uid: 20231109234453
title: Thino
tags: [Obsidian, Obsidian插件, Thino]
description: Thino 的含义
author: Bon,OS,PKMer
type: other
draft: false
editable: false
modified: 20240107003508
id: e65065a97b7bb6ec
---

# Thino

Thino（其标准音标读音为 `θɪŋoʊ` ），基于 2.x 版本的产品设想，我们选定了几个关键字 ：

- info：我们认为一切的创造力都离不开信息，汇聚不同地方的信息
- thought：想到这个词的时候，让我们想到哈利·波特众的冥想盆，希望在你回顾灵感的时候，能够产生更多思考。
- innovation：我们希望 信息、思考，最终会变为属于你的创造力

## 发展历史

Thino ，也就是社区更熟知的 Obsidian Memos，来源于自社区开源项目 [Memos](https://github.com/usememos/memos)，基于 2021.12.08 时的 Memos 0.x 版本的代码以及基本界面设计，将其完整从 Web 前端代码剥离且改写成 Obsidian 的专属插件。

### 技术细节

尽管彼时 Memos 本身是一个前后端分离项目，其前端代码也通过良好的 API 设计与后端进行交互，但其依旧存在了部分与本地较难匹配的问题，包括但不限于原有 API 设计的时候所有数据处理都是在后端进行的，前端更多是时候只负责了展示实现；而 Obsidian 本地插件加载后，一般情况下只能通过缓存数据库或者实时加载 Obsidian 库内所有内容来实现数据交互，也就是相当于将后端的内容完全挪到了中间层，且 Obsidian 成为了后端的本体。

所以在 1.0 阶段中，作者重写了所有的 API 获取以及修改内容的代码，但也由于编写 Memos 代码时，我的 Web 代码功底非常差，尽管 Memos 1.9.7 阶段已经达到了稳定且能用的程度，但也留下了非常多的历史包袱。

### 现在

在 PKMer 的孵化下，本计划 Thino 继续沿用社区 Memos 的代码，但发现其前端的实现代码和一年多以前的代码已经存在较大的差异。于是，考虑到用户惯性以及重做一次适配的时间长度问题等，在 PKMer 组织的全力协助以及支持下，Thino 决定基于 1.0 阶段的代码进行性能以及功能重构，接着在 2.0.X 阶段的历时六个多月的开发中，Memos 2 终于进入到了重构后期。由于现有的代码与最开始使用的 Memos 版本代码有着极大的差异，而且和社区 Memos 的界面也存在较大差异，考虑到后续发展路径并不相同，目标也不同，在 2.1 版本，Obsidian-Memos 将正式更名成 Thino 。

# 致谢

感谢 [usememos/memos](https://github.com/usememos/memos) 在两年多以前创造了开源项目 Memos ，没有这个开源项目，我不会爱上写 Web 前端也不会有 Obsidian Memos 项目的诞生；

而从 Memos 脱胎至 Thino 脱离不了 [PKMer](https://pkmer.cn) 组织的协力，也脱离不了所有愿意付费众筹或者内测的 PKMer 用户的帮助；同时还有非常热心的愿意在版本为 1.9.7 ~ 2.0.6 期间内，即使面对非常卡顿的 Thino 都愿意给我提出意见的所有社区用户。

- PKMer 社区完成了对应 usermemos 开源项目的捐助
- 希望 usememos 和 PKMer 都越走越好

![image.png](https://cdn.pkmer.cn/images/20240107003430.png!pkmer)
