---
uid: 1793625611155000
title: "Obsidian 插件：Config Sync with WebDAV"
tags: ["文件管理", "备份与恢复", "第三方工具集成", "obsidian插件"]
description: ""
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Config Sync with WebDAV

> [!Note] 插件名片
> - 插件名称：Config Sync with WebDAV
> - 插件作者：rosswang
> - 插件说明：
> - 插件分类：['文件管理', '备份与恢复', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/yanqingwang/personal-config-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?personal-config-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/yanqingwang/personal-config-sync/master/README.md)



## 概述

Config Sync with WebDAV 专为解决 Obsidian 配置跨设备同步难题而设计，核心功能是将 `.obsidian/` 目录下的设置文件通过 WebDAV 协议同步至坚果云、Nextcloud 等服务器。它独立于笔记内容同步，确保你的主题、快捷键及插件配置在多设备间保持一致，同时严格隔离笔记数据，避免不同步或冲突。

典型场景包括：当你在新笔记本上安装 Obsidian 后，希望快速恢复旧设备的界面布局与插件设置；或者在多台电脑间切换工作时，确保所有设备使用相同的字体、外观及核心插件配置。例如，你只需在设置中填入坚果云账号和应用密码，即可自动同步所有已启用插件的配置，无需手动复制粘贴。

相比通用同步工具，该插件内置了精细的安全规则，自动排除 `workspace.json` 等仅属于当前设备的本地状态文件，防止同步后导致界面错乱。它支持按插件粒度排除同步范围，并采用 diff3 三方合并策略处理文本冲突，保留双方副本以应对非文本文件差异。此外，每次同步前会自动进行网络连通性测试，明确报告失败原因，提升同步可靠性。

使用前请注意，密码字段必须填写 WebDAV 服务的应用密码而非登录密码，且该插件仅同步配置，不处理笔记内容。如果你需要同时同步笔记和配置，建议搭配专用的笔记同步插件使用，并在笔记同步插件中排除 `.obsidian` 目录，以避免两个插件互相干扰。不适合需要版本历史管理或复杂文件锁定机制的用户。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


