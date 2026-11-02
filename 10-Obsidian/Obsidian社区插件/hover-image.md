---
uid: 1793625613829000
title: "Obsidian 插件：Hover Image"
tags: ["图片与PDF", "界面优化", "效率工具", "obsidian插件"]
description: "Bind a vault image to selected text or a link and preview it on hover. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Hover Image

> [!Note] 插件名片
> - 插件名称：Hover Image
> - 插件作者：key
> - 插件说明：Bind a vault image to selected text or a link and preview it on hover. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/keyoneway/hover-image)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?hover-image)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/keyoneway/hover-image/master/README.md)



## 概述

Hover Image 允许将仓库中已有的图片绑定到笔记里的特定文字或链接上，实现鼠标悬浮时预览图片的功能。这种设计让笔记正文保持简洁，仅显示文字或链接，避免了大量图片嵌入导致的版面杂乱。当鼠标移开时，预览自动关闭，既保留了视觉参考，又不干扰阅读流。

典型场景如整理网站参考清单时，你只需在笔记中保留网址，将对应的首页截图绑定到该网址上。鼠标悬停即可快速查看页面样式，无需在正文中插入整张大图。另一个例子是整理产品原型图，将设计稿绑定到功能描述文字上，方便在回顾需求时随时对照视觉细节，而不必频繁切换窗口或滚动查找图片。

相比其他图片管理插件，Hover Image 的特色在于其轻量级存储机制，关联信息直接以 HTML 属性保存在 Markdown 笔记中，无需依赖额外数据库。此外，它支持智能预选择：如果选中的文字下方紧跟着图片嵌入，弹窗会优先选中该图；绑定当前笔记中单独占一行的图片时，会自动移除正文中的嵌入代码，但保留图片文件本身，保持笔记整洁。

使用前需注意，该插件仅能选择仓库内已存在的图片，不支持直接粘贴新截图或下载远程图片。图片被移动或重命名后，已保存的路径不会自动更新，需手动重新绑定。此外，源码模式和实时预览正在编辑的行可能会显示相关的 HTML 标记。如果你需要频繁处理新截图或依赖远程图片自动抓取，此插件可能不适合你的工作流。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


