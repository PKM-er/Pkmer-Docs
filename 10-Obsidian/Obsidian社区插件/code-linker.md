---
uid: 1786577076976002
title: 'Obsidian 插件：Code Linker'
tags: ['编程与脚本', '第三方工具集成', '模板与链接处理', '效率工具', 'obsidian插件']
description: '把你的笔记和源代码深度关联起来。自动补全符号后，能直接跳转到你的集成开发环境（如 VS Code、JetBrains 系列）里对应的精确行，或者跳转到 GitHub/GitLab 的永久链接。还能嵌入实时代码片段哦。——这个插件还没经过Obsidian官方人员手动审核呢。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Code Linker

> [!Note] 插件名片
> - 插件名称：Code Linker
> - 插件作者：max-fluff
> - 插件说明：把你的笔记和源代码深度关联起来。自动补全符号后，能直接跳转到你的集成开发环境（如 VS Code、JetBrains 系列）里对应的精确行，或者跳转到 GitHub/GitLab 的永久链接。还能嵌入实时代码片段哦。——这个插件还没经过Obsidian官方人员手动审核呢。
> - 插件分类：['编程与脚本', '第三方工具集成', '模板与链接处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/max-fluff/obsidian-code-linker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?code-linker)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/max-fluff/obsidian-code-linker/master/README.md)



## 概述

### Code Linker插件总结
1. **主要功能**：自动补全对源代码的引用，插入 Markdown 链接，点击链接可在编辑器（如 VS Code、Rider 等）中打开文件并定位到指定行。还能嵌入实时代码片段。
2. **适用场景**：适用于需要在 Obsidian 笔记中引用代码，且希望能快速跳转至代码具体位置的场景，如程序员记录代码相关笔记、技术文档编写等。
3. **核心特色**：输入触发字符（默认 `@@`）后输入类或文件名可自动补全代码引用；笔记中使用 `{root}` 加相对路径，保证链接可移植性，打开链接时 `{root}` 自动填充；内置语言配置文件在构建时集成到 `main.js`，安装即可使用。
4. **使用建议**：可先在插件设置中配置扫描文件夹，在笔记中输入 `@@` 触发自动补全功能引用代码，点击生成的链接快速定位代码。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


