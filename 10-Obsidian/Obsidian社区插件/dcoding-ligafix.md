---
uid: 1791709366376000
title: 'Obsidian 插件：D2 LigaFix'
tags: ['样式与美化', '编程与脚本', '文字处理', 'obsidian插件']
description: 'Enables D2Coding programming ligatures (->, =>, !=, <=, >=) in Hangul context, including headings, by fixing the theme letter-spacing that disables ligatures. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：D2 LigaFix

> [!Note] 插件名片
> - 插件名称：D2 LigaFix
> - 插件作者：spark
> - 插件说明：Enables D2Coding programming ligatures (->, =>, !=, <=, >=) in Hangul context, including headings, by fixing the theme letter-spacing that disables ligatures. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['样式与美化', '编程与脚本', '文字处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/spark00000/D2_LigaFix)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dcoding-ligafix)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/spark00000/D2_LigaFix/master/README.md)



## 概述

**1. 主要功能**
该插件通过纯 CSS 修复 Obsidian 中 D2Coding 字体在韩文语境下（特别是标题 H1-H6）编程连字（如 `->`, `=>`, `!=` 等）无法显示的问题。它通过将标题的 `letter-spacing` 重置为 `normal`，解决 Chromium 渲染器因非零字间距禁用连字特性（LIGA）的技术缺陷。

**2. 适用场景**
适用于使用 D2Coding 字体且经常在韩文笔记中编写代码片段、公式或技术文档的用户，尤其是需要保持标题中箭头和比较符号美观连字效果的场景。

**3. 核心特色**
*   **纯 CSS 实现**：无 JavaScript 运行时逻辑，轻量且无性能开销。
*   **精准修复**：仅针对标题调整样式，不影响正文及其他主题风格。
*   **配套工具**：仓库包含 Python 转换脚本，可基于官方 D2Coding 字体生成支持正确连字路由的衍生字体 `D2_LigaFix`，并具备哈希校验机制以确保字体完整性。

**4. 使用建议**
*   **字体安装**：插件本身不含字体。需从 NAVER 下载 D2Coding 1.3.3 官方包，运行仓库中的 `converter` 脚本生成 TTF 文件并安装到系统。
*   **配置设置**：在 Obsidian 外观设置中，将等宽字体（Monospace）指定为生成的 `D2_LigaFix`。
*   **验证效果**：输入如 `한 -> 한` 或 `x => y` 进行测试，确认连字正常渲染。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


