---
uid: 8162
title: 我写了个插件，一键从 Obsidian 发布到公众号后台
tags: [obsidian, 插件]
description: 我写了个插件，一键从 Obsidian 发布到公众号后台
author: joeytoday
type: other
draft: false
editable: false
modified: 20260214193435
forum_url: https://forum.pkmer.net/t/7341
---

# 我写了个插件，一键从 Obsidian 发布到公众号后台

> [!INFO] 本文档由 PKMer 论坛导入  
> - 作者: joeytoday
> - 原始链接: [我写了个插件，一键从 Obsidian 发布到公众号后台](https://forum.pkmer.net/t/7341)

---


![](https://img.joeytoday.com/2026/iShot_2026-02-05_21.52.11.png)

每次从 Obsidian 写完内容都要手动复制到公众号后台，然后再调整格式，这个过程经常耗费我很长时间，深感这是毫无意义的工作，我希望能直接从 obsidian 写完通过插件直接发布到公众号后台草稿，搜索了一番之后发现了符合我要求的两个开源项目：

- MP Preview[1]：markdown 内容转公众号格式预览，可以自定义主题，但不能发布。
- Enhance Publisher[2]：支持直接发布 markdown 内容到公众号后台，但不能自定义主题。

我想要的刚好是这两个项目的结合，**能自定义主题且能一键发布到公众号后台**，于是在 AI 的辅助下，我整合了两个项目，自己写了一个满足需求的插件。具体实现效果如下：

<video src="https://img.joeytoday.com/2026/mycase-mp-publisher-start.mp4" controls></video>

此项目已在 GitHub 上开源，欢迎大家给个 star：

🔗 https://github.com/joeytoday/obsidian-mp-publisher

## 如何安装

1. 在 release 页面下载压缩包

![](https://img.joeytoday.com/2026/20260205222911059.png)

2. 解压压缩包之后，拖动文件夹到：`你的Obsidian仓库/.obsidian/plugins` 文件夹中。

![](https://img.joeytoday.com/2026/20260205222911060.png)

3. 在 Obsidian 设置刷新第三方插件，并启用 MP Publisher。

![](https://img.joeytoday.com/2026/20260205222911061.png)

*⚠️ 配置参考两个基础插件，欢迎大家也给她们点个 star。*

> 本内容完全由作者撰写，**无任何 AI 辅助创作**，内容仅代表创作者个人观点。

1. GitHub - Yeban 8090/mp-preview: 一个帮助你快速将 Obsidian 笔记转换为微信公众号格式的插件： https://github.com/Yeban8090/mp-preview
2. GitHub - chararch/obsidian-enhanced-publisher: 增强的 Obsidian 发布插件，支持图片自动存储、HTML 预览和发布到微信公众号等内容平台： https://github.com/chararch/obsidian-enhanced-publisher
