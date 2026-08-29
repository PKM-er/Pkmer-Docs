---
uid: 1786577082244000
title: 'Obsidian 插件：resize-pics'
tags: ['图片与PDF', '样式与美化', '编辑工具', '效率工具', 'obsidian插件']
description: '将图片缩放至与文字字体大小相匹配。——此插件尚未经过Obsidian工作人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：resize-pics

> [!Note] 插件名片
> - 插件名称：resize-pics
> - 插件作者：QuincyLeo
> - 插件说明：将图片缩放至与文字字体大小相匹配。——此插件尚未经过Obsidian工作人员的人工审核。
> - 插件分类：['图片与PDF', '样式与美化', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/quincy-leo/obsidian-resize-pics)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?resize-pics)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/quincy-leo/obsidian-resize-pics/master/README.md)



## 概述

### resize - pics插件总结
1. **主要功能**：自动识别图片内文字字体大小，改写图片引用语法中的宽度数字，使图片内文字与笔记正文文字视觉上大小一致。
2. **适用场景**：适用于在笔记中粘贴图片或从网页裁剪图片后，图片尺寸与正文文字不协调的场景。
3. **核心特色**：仅处理Markdown语法，不改动图片文件；利用Tesseract.js进行OCR识别图片文字高度；采用20%修剪均值计算文字像素高度；通过公式调整图片宽度；使用原子写入，若笔记在检测时变化则放弃写入；依赖按需下载，有SHA - 256验证；支持中英双语界面；可一键清理依赖。
4. **使用建议**：首次使用前，从设置页面一键缓存语言模型和其他资源；仅支持桌面端，Obsidian版本需在1.4.0及以上；若检测时笔记有变化，按提示重试。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


