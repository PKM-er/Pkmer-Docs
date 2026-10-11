---
uid: 1791709369372000
title: 'Obsidian 插件：Python Panel'
tags: ['编程与脚本', '第三方工具集成', '效率工具', 'obsidian插件']
description: 'Run Python scripts from a sidebar - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Python Panel

> [!Note] 插件名片
> - 插件名称：Python Panel
> - 插件作者：Dwight Ivany
> - 插件说明：Run Python scripts from a sidebar - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编程与脚本', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/dwightivany/python-panel)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?python-panel)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/dwightivany/python-panel/master/README.md)



## 概述

**1. 主要功能**
Python Panel 为 Obsidian 侧边栏提供专用面板，允许用户通过点击按钮直接运行 Vault 内的 Python 脚本。支持脚本执行状态显示、成功/错误通知反馈，以及自动检测系统 Python 环境。

**2. 适用场景**
适用于桌面端（Obsidian 1.13.0+）用户，特别是需要自动化处理笔记、批量修改文本或执行自定义数据脚本的场景。不支持移动端。

**3. 核心特色**
*   **可视化操作**：侧边栏按钮式界面，支持通过分隔符和组标签整理脚本，操作直观。
*   **选区交互**：特定命名脚本（如 `reflow_prose_selection.py`）可接收当前编辑器选中文本，并用脚本输出替换，实现即时文本处理。
*   **自动化体验**：启动时自动打开面板，自动寻找 `python3`/`python`/`py` 解释器，无需手动配置路径。

**4. 使用建议**
*   确保电脑已安装 Python 3.x 并加入系统 PATH。
*   在设置中配置脚本路径（相对于 Vault 根目录），建议利用分隔符将功能相似的脚本分组，以提升查找效率。
*   利用“选区脚本”功能可快速实现文本格式化或转换，无需切换窗口。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


