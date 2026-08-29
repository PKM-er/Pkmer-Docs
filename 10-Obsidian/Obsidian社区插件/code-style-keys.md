---
uid: 1786577076976005
title: 'Obsidian 插件：Code Style Keys'
tags: ['编辑工具', '快捷键', '编程与脚本', '效率工具', 'obsidian插件']
description: '为代码块添加反引号快捷键。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Code Style Keys

> [!Note] 插件名片
> - 插件名称：Code Style Keys
> - 插件作者：Aiday Marlen Kyzy
> - 插件说明：为代码块添加反引号快捷键。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['编辑工具', '快捷键', '编程与脚本', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/aiday-mar/code-style-keys)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?code-style-keys)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/aiday-mar/code-style-keys/master/README.md)



## 概述

### 《Code Style Keys插件总结》
1. **主要功能**：在编辑笔记时，快速将选中的文本用反引号包裹。单行选中文本会变成行内代码，多行选中则变为代码块，还能防止原按键操作产生的多余尾随反引号。
2. **适用场景**：适用于经常需要格式化代码片段的用户，可通过一键操作代替手动输入包裹符号。
3. **核心特色**：监听 `beforeinput` 事件，当输入反引号且有文本选中时，取消默认输入，替换为代码语法，并进行简单清理，去除多余反引号；支持桌面和移动设备。
4. **使用建议**：开发时需安装 Node.js 18+，按步骤安装依赖并启动监听构建，在 Obsidian 中重新加载应用并启用插件；生产环境可使用 `npm run build` 进行构建；也可手动复制相关文件到指定路径启用。此版本暂无配置选项。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


