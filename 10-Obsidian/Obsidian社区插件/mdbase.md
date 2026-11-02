---
uid: 1793625616062000
title: "Obsidian 插件：MD Base64"
tags: ["图片与PDF", "文件管理", "效率工具", "obsidian插件"]
description: ""
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：MD Base64

> [!Note] 插件名片
> - 插件名称：MD Base64
> - 插件作者：Hadesr
> - 插件说明：
> - 插件分类：['图片与PDF', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/hadesls/MDbase64)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?mdbase)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/hadesls/MDbase64/master/README.md)



## 概述

MD Base64 旨在解决笔记分享时图片链接失效的痛点。它将当前笔记中引用的本地图片转换为 Base64 编码并直接内联到文本中，生成一个完全自包含的单文件 Markdown。无论接收方使用何种阅读器或设备，都能正常显示图片，且原笔记内容保持原样，不会被修改。

典型场景包括通过微信或邮件发送包含大量截图的技术文档，或需要将笔记导入不支持本地图片路径的其他编辑器。例如，当你撰写一篇包含多张架构图的教程时，使用该插件可一键导出，确保对方打开文件时所有图片均正常加载，无需额外传输图片文件夹。

相比同类插件，MD Base64 兼容 Wiki 嵌入与标准 Markdown 两种图片语法，并保留图片宽度等语义信息。其核心优势在于零依赖且支持移动端，无需 Electron 环境，iOS 与 Android 均可使用。此外，插件具备幂等性，重复导出不会导致文件二次膨胀，并能明确列出未找到的图片，避免静默失败。

使用前需注意，Base64 编码会使文件体积增加约 33%，适合图片数量适中的笔记。若笔记包含大量高清大图，导出过程可能耗时较长。该插件不适合需要频繁编辑导出后文件的场景，因为内联后的 Base64 文本难以直接修改图片内容。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


