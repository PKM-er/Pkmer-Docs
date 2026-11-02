---
uid: 1793625624025000
title: "Obsidian 插件：Vault HTML Preview"
tags: ["文件管理", "界面优化", "效率工具", "obsidian插件"]
description: "Preview local HTML files from your vault in a dedicated view, styles and scripts included. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vault HTML Preview

> [!Note] 插件名片
> - 插件名称：Vault HTML Preview
> - 插件作者：chengmiaofan
> - 插件说明：Preview local HTML files from your vault in a dedicated view, styles and scripts included. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '界面优化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/serena-sheng/obsidian-html-preview)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vault-html-preview)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/serena-sheng/obsidian-html-preview/master/README.md)



## 概述

Vault HTML Preview 解决了 Obsidian 中 HTML 文件仅被当作纯文本处理的问题。它注册了专门的视图，允许用户直接在应用内渲染 `.html` 和 `.htm` 文件。核心功能在于完整执行页面中的脚本和样式，确保自包含的网页内容如表单、仪表盘或报告能按原样呈现，无需切换至外部浏览器。

典型使用场景包括查看本地生成的数据报告或交互式仪表盘。例如，当你有一个包含图表和交互逻辑的 HTML 报告时，点击文件即可在侧边栏直接查看动态效果。另一个例子是测试本地开发的网页片段，通过右键菜单选择“在 HTML 预览中打开”，可以快速验证样式和脚本是否正常工作，而无需启动完整的开发服务器。

相比其他预览工具，该插件的特色在于对相对路径的自动处理。它通过注入 `<base href>` 标签，确保与 HTML 文件同目录下的图片、CSS 和 JS 文件能正确加载。此外，插件提供了两个关键的安全开关：默认关闭 `backdrop-filter` 以避免滚动时的视觉模糊，以及默认禁用 `allow-same-origin` 以隔离预览环境与 Obsidian 主程序，防止预览页面访问你的笔记库或应用数据。

使用前需注意，预览会执行页面自身的 JavaScript，因此仅建议预览你信任的 HTML 文件。如果页面需要访问 `localStorage` 或剪贴板，需手动开启同源权限，但这会放宽沙箱限制。该插件不适合需要完全离线且无网络请求的严格安全环境，因为预览页面本身可能引用远程资源。它也不适合需要编辑 HTML 源码的场景，仅用于只读预览。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


