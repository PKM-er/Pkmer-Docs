---
uid: 1793625621897000
title: "Obsidian 插件：Super Pin"
tags: ["界面优化", "导航与状态栏", "效率工具", "obsidian插件"]
description: "Keep chosen notes pinned as tabs in the right sidebar so they are never replaced, with optional enforced reading view. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Super Pin

> [!Note] 插件名片
> - 插件名称：Super Pin
> - 插件作者：opswhisperer
> - 插件说明：Keep chosen notes pinned as tabs in the right sidebar so they are never replaced, with optional enforced reading view. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '导航与状态栏', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/opswhisperer/obsidian-superpin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?super-pin)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/opswhisperer/obsidian-superpin/master/README.md)



## 概述

Super Pin 旨在解决 Obsidian 原生侧边栏固定功能的不稳定性问题。当你在侧边栏固定笔记后，点击链接、使用快速切换器或运行其他插件时，Obsidian 往往会复用该标签页或打开新标签，导致你的参考笔记被意外替换或丢失。该插件通过拦截这些操作，确保你选定的笔记始终保留在右侧边栏的独立标签中，不会被其他内容覆盖，从而提供一个稳定、持久的参考窗口。

典型的使用场景包括查阅长文档或代码库时，将核心参考笔记固定在侧边栏，同时在主编辑区自由浏览相关笔记或执行搜索，无需担心参考内容消失。另一个场景是进行多任务写作，例如一边在侧边栏固定“写作大纲”或“术语表”，一边在主区域撰写正文，即使频繁切换文件，侧边栏的大纲依然保持可见且处于阅读视图，方便随时对照。

与 Pinned Files 等仅显示链接列表的插件不同，Super Pin 直接保持笔记本身在侧边栏打开并可读，而非仅仅是一个入口。它支持同时固定多个笔记，每个笔记拥有独立标签。此外，插件具备“强制阅读视图”功能，可防止固定笔记因误触进入编辑模式，且固定状态在重启软件、重命名文件后依然有效，仅在文件被删除时才会移除。

使用前需注意，该插件通过底层代码拦截实现保护，虽然仅在管理特定标签时生效，但仍建议了解其工作原理。它不适合那些希望侧边栏仅作为快速跳转入口、而不需要常驻显示完整笔记内容的用户。如果你只需要一个链接列表来快速访问常用笔记，原生功能或轻量级链接插件可能更合适，Super Pin 的核心价值在于“常驻可见”的稳定性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


