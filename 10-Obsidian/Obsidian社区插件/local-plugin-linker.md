---
uid: 1791709368193000
title: 'Obsidian 插件：Local Linker'
tags: ['文件管理', '第三方工具集成', '编程与脚本', '效率工具', 'obsidian插件']
description: 'Link plugin folders on disk or from Github PR into the vault, and reload the plugins when they rebuild. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Local Linker

> [!Note] 插件名片
> - 插件名称：Local Linker
> - 插件作者：Zach Hannum
> - 插件说明：Link plugin folders on disk or from Github PR into the vault, and reload the plugins when they rebuild. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '第三方工具集成', '编程与脚本', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/zachhannum/obsidian-local-plugin-linker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?local-plugin-linker)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/zachhannum/obsidian-local-plugin-linker/master/README.md)



## 概述

**Local Linker** 是一款专为 Obsidian 插件开发者设计的工具，主要实现本地文件夹或 GitHub 构建产物的动态链接与热重载。

**适用场景**：适用于插件开发调试、测试 GitHub Pull Request 或分支构建，以及在移动端验证未合并的代码变更。

**核心特色**：
1. **热重载**：在本地开发时，通过符号链接将插件文件夹接入 Vault，当 `main.js` 等文件更新时自动重载，无需重启 Obsidian。
2. **GitHub 集成**：支持从 GitHub Actions 工件安装特定 PR 或分支的构建版本，方便在桌面端和移动端进行远程测试。
3. **无缝切换**：可覆盖商店或 BRAT 安装的版本，关闭链接后自动恢复原安装版本，实现开发版与稳定版的灵活切换。

**使用建议**：
- 桌面端开发需先配置 `npm run dev` 等监听构建命令，并输入插件文件夹路径进行链接。
- 使用 GitHub 功能前，需确保仓库配置了上传插件工件的 Actions 工作流，并完成 GitHub 账号授权。
- 注意文件夹链接仅限桌面端使用，而 GitHub 构建安装则兼容移动端。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


