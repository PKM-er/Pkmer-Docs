---
uid: 1786577081344001
title: 'Obsidian 插件：PDF Resize'
tags: ['图片与PDF', '编辑工具', '效率工具', 'obsidian插件']
description: '可以通过维基链接尺寸调整嵌入的PDF文件大小。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：PDF Resize

> [!Note] 插件名片
> - 插件名称：PDF Resize
> - 插件作者：puhhh
> - 插件说明：可以通过维基链接尺寸调整嵌入的PDF文件大小。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['图片与PDF', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/puhhh/pdf-resize)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pdf-resize)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/puhhh/pdf-resize/master/README.md)



## 概述

### PDF Resize插件总结
1. **主要功能**：可使用与图片相同的维基链接宽度语法，调整Obsidian中嵌入PDF文件的大小。
2. **适用场景**：适用于在Obsidian笔记中嵌入PDF文件，且需要调整其显示宽度的场景，无论是阅读视图还是实时预览都能使用。
3. **核心特色**：
    - 采用熟悉的语法，如`![[file.pdf|500]]`。
    - 支持1 - 4096像素的整数宽度，最小渲染宽度为100px。
    - 嵌入的PDF能自适应，不超过笔记的可用宽度。
    - 不进行网络请求，也不修改保险库文件。
4. **使用建议**：
    - 安装时，需下载`main.js`、`manifest.json`和`styles.css`，创建对应插件文件夹并复制文件，重新加载Obsidian后启用插件。
    - 使用时，在PDF文件名后添加像素宽度，如`![[documents/example.pdf|500]]`。注意宽度值需为1 - 4096的整数，不符合要求的值会被忽略。在源模式下不进行调整。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


