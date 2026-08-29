---
uid: 1786577082858007
title: 'Obsidian 插件：Style HTML Viewer'
tags: ['样式与美化', '编程与脚本', '模板与链接处理', '安全与隐私', 'obsidian插件']
description: '能在Obsidian工作区的标签页里原生渲染HTML文档，还能处理本地CSS、图片和脚本资源，具备内容安全策略（CSP）保障安全，并且能拦截链接。——这款插件尚未经过Obsidian官方人员的人工审核哦。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Style HTML Viewer

> [!Note] 插件名片
> - 插件名称：Style HTML Viewer
> - 插件作者：Robin Tan
> - 插件说明：能在Obsidian工作区的标签页里原生渲染HTML文档，还能处理本地CSS、图片和脚本资源，具备内容安全策略（CSP）保障安全，并且能拦截链接。——这款插件尚未经过Obsidian官方人员的人工审核哦。
> - 插件分类：['样式与美化', '编程与脚本', '模板与链接处理', '安全与隐私', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/taihoe/obisidian-html-viewer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?style-html-viewer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/taihoe/obisidian-html-viewer/master/README.md)



## 概述

### Style HTML Viewer插件总结
1. **主要功能**：可在Obsidian工作区标签页直接渲染`.html`文件，支持在自定义视图标签中打开，能在沙盒渲染预览和原始HTML源代码间切换。自动解析HTML，转换相对资源为本地有效URI；内联本地样式表，拦截本地文件链接并在Obsidian中打开，外部链接在默认浏览器打开。具备安全沙盒和CSP，文件修改时自动重新渲染预览。
2. **适用场景**：适用于在Obsidian中查看和编辑HTML文件，处理包含本地资源（如图像、脚本、样式表）的HTML文档。
3. **核心特色**：集成工作区视图，支持预览与源码编辑切换；自动处理相对资源和本地样式表；严格的安全沙盒和CSP保障；文件修改实时更新预览。
4. **使用建议**：安装依赖后，可使用`npm run dev`进行开发编译，`npm run build`进行生产构建，`npm test`运行测试套件。开发者可参考相关文档了解详细技术规范。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


