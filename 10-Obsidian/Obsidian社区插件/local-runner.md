---
uid: 1786577079644004
title: 'Obsidian 插件：Local Runner'
tags: ['编程与脚本', '第三方工具集成', '自定义命令', '效率工具', 'obsidian插件']
description: ''
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Local Runner

> [!Note] 插件名片
> - 插件名称：Local Runner
> - 插件作者：joke-lx
> - 插件说明：
> - 插件分类：['编程与脚本', '第三方工具集成', '自定义命令', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/joke-lx/ob-ps)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?local-runner)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/joke-lx/ob-ps/master/README.md)



## 概述

### Local Runner插件总结
1. **主要功能**：可在Obsidian侧边栏启动本地命令并实时查看输出，支持并行处理多个命令。具备进程管理和维基链接工具功能，如管理命令进程、显示未解析的维基链接、清理未解析链接等。
2. **适用场景**：适用于在记录笔记时需要运行本地命令的场景，如运行`npm run dev`、`npx vite`等开发命令，适合桌面端使用。
3. **核心特色**：支持并行进程，每个命令有独立输出面板；有快速启动栏，通过状态点显示命令状态；实时输出日志，可展开或折叠查看；能正确终止进程；可列出未解析的维基链接并清理。
4. **使用建议**：在设置中定义好要运行的命令，利用快速启动栏方便地启动和停止命令。当需要清理未解析的维基链接时，可使用相应按钮和命令。注意该插件仅支持桌面端，因移动端沙箱环境无法使用Node的`child_process`。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


