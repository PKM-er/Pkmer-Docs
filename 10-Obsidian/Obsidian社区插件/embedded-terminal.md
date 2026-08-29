---
uid: 1786577077560000
title: 'Obsidian 插件：Embedded Terminal'
tags: ['第三方工具集成', '编程与脚本', '效率工具', '编辑工具', 'obsidian插件']
description: '在Obsidian里实现类似VS Code的终端功能——这款插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Embedded Terminal

> [!Note] 插件名片
> - 插件名称：Embedded Terminal
> - 插件作者：NoVarYe
> - 插件说明：在Obsidian里实现类似VS Code的终端功能——这款插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['第三方工具集成', '编程与脚本', '效率工具', '编辑工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/no4var2ye/ObsidianEmbeddedTerminal)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?embedded-terminal)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/no4var2ye/ObsidianEmbeddedTerminal/master/README.md)



## 概述

### 嵌入式终端插件总结
1. **主要功能**：在Obsidian中嵌入真正的系统终端，支持实时交互、ANSI输出、Shell会话保持及窗口自适应，可执行和管理命令行工作流。
2. **适用场景**：适用于编程开发、Git操作、数据分析、项目管理、命令行工具调用等场景。
3. **核心特色**：采用真实PTY架构（xterm.js + node - pty + Windows ConPTY），支持交互式Shell、ANSI彩色输出、光标控制、Tab补全、Ctrl + C等，还支持Python、Node、Git CLI等。
4. **使用建议**：安装时先执行`npm install`和`npm run build`，再将插件文件复制到`.obsidian/plugins/embedded - terminal/`，重新加载Obsidian。可通过命令面板或默认快捷键（Ctrl + `）打开。默认Shell为`cmd.exe`，可按需修改。目前主要支持Obsidian Desktop，Windows + ConPTY体验最佳，不支持移动和Web版本。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


