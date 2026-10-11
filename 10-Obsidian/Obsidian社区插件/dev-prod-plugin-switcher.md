---
uid: 1791709366508000
title: 'Obsidian 插件：Dev-Prod Switcher'
tags: ['编程与脚本', '效率工具', '第三方工具集成', 'obsidian插件']
description: 'Register your installed plugins, link each to a local dev build, and hot-reload between the dev build and the live version. Desktop only, requires Hot Reload. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Dev-Prod Switcher

> [!Note] 插件名片
> - 插件名称：Dev-Prod Switcher
> - 插件作者：Dan
> - 插件说明：Register your installed plugins, link each to a local dev build, and hot-reload between the dev build and the live version. Desktop only, requires Hot Reload. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编程与脚本', '效率工具', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/danrfletcher/obsidian-plugin-dev-prod-switcher)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dev-prod-plugin-switcher)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/danrfletcher/obsidian-plugin-dev-prod-switcher/master/README.md)



## 概述

**1. 主要功能**
Dev-Prod Switcher 是一款专为 Obsidian 插件开发者设计的工具插件。它允许用户将已安装的插件关联到本地开发构建（Dev build），并通过一键切换在“生产环境（Prod）”和“开发环境（Dev）”之间快速切换。切换时会自动触发热重载，并支持直接在 Obsidian 设置中运行、终止或重启本地的 `npm run dev` 等构建命令。

**2. 适用场景**
适用于正在积极开发 Obsidian 插件的开发者。它解决了在本地调试代码与正式版本之间频繁手动切换、重新加载的痛点，特别适合需要频繁迭代和测试插件功能的场景。

**3. 核心特色**
*   **一键切换与热重载**：点击即可在 Dev 和 Prod 版本间切换，自动触发 Hot Reload 机制。
*   **集成构建控制**：无需离开 Obsidian 即可管理本地开发服务器的生命周期（启动/停止/重启）。
*   **依赖明确**：必须配合 pjeby 的 Hot Reload 插件使用，若未安装则自动隐藏相关功能并提示。
*   **仅限桌面端**：由于依赖 Node.js 的 `child_process` 进行进程管理，移动端仅显示注册列表，无法进行构建控制。

**4. 使用建议**
*   务必先安装并启用 **Hot Reload** 插件，否则本插件的核心功能不可用。
*   目前尚未上架社区插件列表，需通过 BRAT 工具手动添加 Beta 插件进行安装。
*   仅建议在桌面端使用以获得完整体验。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


