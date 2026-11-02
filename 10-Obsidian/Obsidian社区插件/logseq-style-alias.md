---
uid: 1793625615115000
title: "Obsidian 插件：Logseq Style Alias"
tags: ["模板与链接处理", "效率工具", "obsidian插件"]
description: "Make [[alias]] links open the page that has the alias, the way Logseq does, instead of creating an empty page. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Logseq Style Alias

> [!Note] 插件名片
> - 插件名称：Logseq Style Alias
> - 插件作者：马自立
> - 插件说明：Make [[alias]] links open the page that has the alias, the way Logseq does, instead of creating an empty page. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['模板与链接处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/matsurimw/logseq-style-alias)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?logseq-style-alias)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/matsurimw/logseq-style-alias/master/README.md)



## 概述

Logseq Style Alias 旨在解决 Obsidian 中别名链接无法正确解析的痛点。在原生环境中，手动输入 `[[别名]]` 往往会导致链接未解析，甚至误创建空文件，使后续链接指向错误位置。该插件让别名链接直接打开拥有该别名的真实页面，还原了 Logseq 中“别名即页面”的逻辑，确保点击、悬停预览、嵌入及反向链接均指向正确内容，且不会修改任何笔记文件。

典型场景如将长标题页面 `Retrieval-Augmented Generation` 设置别名 `RAG`。以往手动输入 `[[RAG]]` 会生成空文件，现在则直接跳转至原页面。若库中已存在名为 `RAG` 的空文件，插件也会优先指向真实页面；但若存在有内容的同名文件，则始终优先打开该文件，避免覆盖真实数据。

相比同类插件，其特色在于对“空文件”的智能处理：默认情况下，若别名对应一个仅含空白字符的文件，插件会将其视为无效并指向真实页面，但仅含 Frontmatter 的页面被视为有效。此外，它提供命令清理误建的空别名文件，并支持通过属性控制大小写敏感性。所有重定向均在 Obsidian 内部完成，关闭插件后链接行为立即恢复原状，不影响其他依赖相同 API 的插件。

需注意，该重定向仅对 Obsidian 有效，直接读取 Markdown 文件的脚本或静态站点导出工具仍会将 `[[RAG]]` 视为指向 `RAG.md` 的链接。因此，若你依赖外部工具处理笔记，或需要在多台设备间保持完全一致的未解析状态，此插件可能不适用。此外，需在所有使用 Obsidian 的设备（包括移动端）上安装，否则部分设备上的别名链接将保持未解析状态。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


