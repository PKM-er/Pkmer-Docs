---
uid: 1786577080020002
title: 'Obsidian 插件：MD Export Pro'
tags: ['图片与PDF', '文字处理', '编程与脚本', '发布工具', 'obsidian插件']
description: '修复了PDF导出时Mermaid图表截断的问题，还新增了由Python驱动的Word导出功能。——此插件尚未经过Obsidian官方人员的手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：MD Export Pro

> [!Note] 插件名片
> - 插件名称：MD Export Pro
> - 插件作者：alan
> - 插件说明：修复了PDF导出时Mermaid图表截断的问题，还新增了由Python驱动的Word导出功能。——此插件尚未经过Obsidian官方人员的手动审核。
> - 插件分类：['图片与PDF', '文字处理', '编程与脚本', '发布工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/alanqin888/obsidian-pdf-mermaid-fix)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pdf-mermaid-fix)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/alanqin888/obsidian-pdf-mermaid-fix/master/README.md)



## 概述

### MD Export Pro插件总结
1. **主要功能**：修复Obsidian原生“导出为PDF”时宽Mermaid图表水平截断问题，还增加了基于Python的Word导出功能。
2. **适用场景**：适用于包含宽Mermaid图表（如序列图）的Markdown文件，在需要将其导出为PDF或Word格式时使用。
3. **核心特色**：超轻量级插件，通过临时注入`@media print` CSS规则，让Mermaid SVG元素自适应缩放，保证图表完美适配A4等页面大小。同时保留Obsidian原生丰富的PDF导出对话框。
4. **使用建议**：使用时，打开含宽Mermaid图表的Markdown文件，在文件资源管理器或编辑器内右键，选择“Export to PDF (Mermaid Fix)”，在弹出的原生PDF导出对话框中点击导出即可。手动安装时，在保险库的`.obsidian/plugins/`目录下创建`obsidian-pdf-mermaid-fix`文件夹，放入`main.js`和`manifest.json`文件，重新加载Obsidian并在社区插件中启用。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


