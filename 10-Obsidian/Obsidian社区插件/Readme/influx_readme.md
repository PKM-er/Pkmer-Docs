---
uid: 2023080322203495
title: Obsidian 插件：【Readme】Influx
tags: ['obsidian插件', 'readme']
description: 一个可以在笔记的页脚聚合简洁的反向链接剪辑的日记插件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Influx

> [!Note] 插件名片
> - 插件名称：Influx
> - 插件作者：Jens M Gleditsch
> - 插件说明：一个可以在笔记的页脚聚合简洁的反向链接剪辑的日记插件。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/jensmtg/influx)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?influx)

## 概述

一个可以在笔记的页脚聚合简洁的反向链接剪辑的日记插件。

![Influx](https://cdn.pkmer.cn/covers/influx.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/jensmtg/influx/master/README.md)
> 

---

## Readme(翻译）

下面是 [[influx]] 插件的自述翻译


> **警告**
> 很遗憾地说，我无法找到时间来维护这个插件。因此，问题将不会被阅读。我可能会不时地合并拉取请求。如果您认为您可以维护这个插件，请与我联系。
> 
![Obsidian Influx logo](https://user-images.githubusercontent.com/6455628/178807529-785b29cd-b1d7-4586-99de-5b4411d8fd17.png)

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/jensmtg/influx?style=for-the-badge&sort=semver)

类似于[Obsidian](https://obsidian.md/)的*backlinks*核心插件，但是它是根据提及在笔记的层次结构（项目级别缩进）中的位置来显示相关和格式化的摘录。

![screencap](https://user-images.githubusercontent.com/6455628/196566154-404086ad-9a6c-49b0-bb5c-f7335090e2fb.png)
### 建议的使用模式：
（或者：如何充分利用这个插件。）

* 信息主要应该写在日常笔记（或者Zettelkasten风格的笔记）中。主题笔记主要是从日常笔记中聚合而来的剪贴内容。
* 笔记应该以层次结构的形式进行，使用项目列表/任务列表的形式。这有助于保持剪贴内容简洁和相关。
* 链接应该作为存储库中唯一的组织原则 - 不使用标签、文件/文件夹。这有助于完整性；插件在聚合时只考虑链接。

### 发布说明

这次更新的重点是重新实现Influx插件核心的一部分，即生成摘要的功能。新的实现更加健壮、更加正确，并且具有广泛的测试覆盖，这使得更容易维护和修改功能而不会破坏其他功能。以下是新更新的主要功能：

* 许多事情通常应该更好地工作。比如：嵌套的callouts、有序列表、一般的不同缩进级别、表格和LaTex格式的块。
* 在输入时，文本出现在Influx组件下方的问题已经通过隐藏Influx来解决。
* 启用了阅读模式中的Influx。

感谢kenlim通过拉取请求为开发做出贡献！

感谢ericlpeterson、alranel、FilSalustri、Josh2K、mrkuramoto和Mat4m0的赞助和支持持续维护！



