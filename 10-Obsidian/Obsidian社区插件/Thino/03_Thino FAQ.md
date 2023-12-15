---
uid: 20231109234444
title: Thino FAQ
tags: []
description: Thino FAQ 你想知道 Thino 的一切都在这里
author: Bon,PKMer
type: other
draft: false
editable: false
modified: 20231215231120
---

# Thino FAQ

以下作为收集 Thino 的相关

## Thino 更名原因

详见 [[05_Thino 的含义#Thino|Thino 更名]]，核心原因就是因为从 2.1 开始 Obsidian Memos 会脱离当前的 Memos 的发展路径，而是作为 Thino 进行更新。

## Thino 内测

- 当前 Thino 内测权限可以通过 [pkmer](https://pkmer.cn/products/productDetails/) 购买后获取。
- Thino 也作为社区优先贡献者的福利，目前已经发放多位社区优质贡献者。

激活步骤：[[04_Thino 内测资格激活步骤]]

## 为什么 Thino 内测要收费？

注意：这主要是支撑 Thino 本地版以及 Web 版本的开发（还有未来的 Thino 多端应用的基底开发）。如果你不希望付费享受优先权益，也可以考虑参与 PKMer 社区协作，参考 [[协作者指南]]，当你成为优秀贡献者时，PKMer 会赠予你相应的权限。

也可以等待 Thino 的公测版本，但公测版只会有稳定性更新，并不会带来新特性，如果想更快地体验 Thino 的新版本功能，进入内测优先是最佳选择。

P.S. 这个收费更类似于 Obsidian Insider 的逻辑，

## Thino 插件是否还会如同 1.x 版本开源？

会，但是仅开源公测版本，且公测版本可能只会包含稳定性更新，而且开源进度会根据开发情况调整，简称“延迟开源”。

## Thino 参加了早鸟/内测如何获得

- 早期为了激励 PKMer 社区作者，社区无条件相信了很多作者，免费发放 2.0.x 版本
- 2.1 更名 Thino 及以后，会以强调社区贡献质量和稳定性为主，针对优质贡献者发放。这主要是平衡贡献者的不均，或者是早鸟用户和贡献者不均的现象。

## Thino 与 PKMer 组织的关系？

Thino 本地版以及 Web 版本都是 PKMer 组织的产品，而 Thino 的发展离不开 PKMer 其它成员的鼎力支持：[[05_Thino 的含义#致谢|致谢]]

## Thino 与 Memos 开源项目的关系？

Thino 前身，也就是 Obsidian Memos 是基于开源项目 Memos 实现的，准确来说是基于 2021 年 12 月版本的 Memos 实现的。在 2.X 版本，Thino 界面以及底层代码都重构，逐渐脱离 Memos 的发展路径以及源码实现。

## 为什么要构建 Thino Web 项目？

解决外部内容进入到 Thino 的路径问题，目前规划中至少会有：

- 微信导入 Thino；
- Telegram、discord 导入 Thino；
- Web 端输入后同步到本地 Thino；
- 浏览器插件裁剪至 Thino;

而采用外部服务器的实现会更方便解决这些路径问题。

## Thino 是否有路线图？

暂时来说，Thino 新的 UI 还在火热设计中，你参与到群里的所有建议或者意见都可能影响 Thino 的发展，所以可以多点来参与到讨论中。

## 已知问题

### 设计思考

- 如果 Thino 已经开启了，为了保证不多侵占电脑资源，这时候使用卡其悬浮窗等命令会不生效
- 对于 poper windows 这样的命令，依赖 [[obsidian-hover-editor]] 插件配合

### 宿主相关

- 关闭 Obsidian 的所及所得模式（live-preview 模式），会导致 Thino 的所见即所得，悬浮编辑栏失效兼容性。

### 兼容性相关

- Pane Relief 不能共存，目前判断是 Pane Relief 的问题。