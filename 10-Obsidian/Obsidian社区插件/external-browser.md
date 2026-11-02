---
uid: 1793625612756000
title: "Obsidian 插件：External Browser"
tags: ["第三方工具集成", "效率工具", "界面优化", "obsidian插件"]
description: "Open external links in your preferred browser instead of the system default. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：External Browser

> [!Note] 插件名片
> - 插件名称：External Browser
> - 插件作者：Radek Svítil
> - 插件说明：Open external links in your preferred browser instead of the system default. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '效率工具', '界面优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/radouch/obsidian-external-browser)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?external-browser)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/radouch/obsidian-external-browser/master/README.md)



## 概述

External Browser 允许用户在 Obsidian 桌面版中独立指定打开 HTTP 和 HTTPS 链接的浏览器，无需依赖操作系统的默认设置。它支持选择 Firefox、Chrome、Edge、Brave 或自定义可执行文件，并允许在按住 Alt、Ctrl、Shift 或 Meta 键时切换至第二浏览器。该插件通过无 Shell 进程启动方式处理链接点击，确保安全性，同时兼容 HTML 锚点及用户点击后短时间内的 `window.open()` 调用。

典型场景包括：日常阅读笔记时希望用 Chrome 打开外部链接，但系统默认是 Edge；或者在编辑模式下按住修饰键快速用 Firefox 预览特定网页。例如，你可以将主浏览器设为 Chrome，备用浏览器设为 Edge，这样在需要对比不同浏览器渲染效果时，只需按住 Alt 键点击链接即可切换，无需更改系统全局设置。

相比同类插件，其特色在于支持修饰键切换备用浏览器，且明确区分了主备浏览器的诊断命令。它仅拦截 HTTP/HTTPS 链接，不干扰 Obsidian 内部链接或非 Web 协议。此外，插件采用无 Shell 启动机制，避免了命令注入风险，并在启动失败时自动回退到系统默认浏览器，提供了较好的容错性。

使用前需注意，该插件目前处于公共 Beta 阶段，仅在 Windows 上经过充分测试，Linux 和 macOS 尚未验证。它无法拦截通过其他 API、纯键盘触发或自定义插件处理的链接。自定义浏览器路径仅接受可执行文件，不支持额外命令行参数。若你依赖 Obsidian 自身的修饰键点击行为（如选择文本），可能会产生冲突，建议在阅读模式和实时预览模式下分别验证修饰键效果。不适合需要复杂命令行参数传递或跨平台统一体验的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


