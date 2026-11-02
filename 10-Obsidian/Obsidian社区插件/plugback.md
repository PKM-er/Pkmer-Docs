---
uid: 1793625620142001
title: "Obsidian 插件：Plugback"
tags: ["备份与恢复", "文件管理", "效率工具", "obsidian插件"]
description: "Keep your plugins and themes in sync across devices. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Plugback

> [!Note] 插件名片
> - 插件名称：Plugback
> - 插件作者：Muhtasham Nawr al-Mahmud
> - 插件说明：Keep your plugins and themes in sync across devices. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['备份与恢复', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mnalmahmud/obsidian-plugback)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?plugback)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mnalmahmud/obsidian-plugback/master/README.md)



## 概述

Plugback 旨在解决多设备间 Obsidian 插件与主题配置不一致的痛点。它通过同步一份保存的插件列表，确保你在任意一台设备上安装或移除社区插件后，其他设备在库同步完成后能自动执行相同的操作。该插件不直接传输插件文件，而是依赖你现有的库同步机制（如 Git 或 iCloud）来传递配置清单，各设备再根据清单自行下载所需的插件和主题，从而实现跨设备的环境统一。

典型场景包括：你在笔记本电脑上发现并安装了一个新的写作辅助插件，随后在手机上打开库时，Plugback 会自动检测并安装该插件，无需手动重复操作。另一个例子是当你决定移除某个不再使用的主题时，只需在桌面端删除，同步后手机端也会自动清理该主题，保持所有设备界面风格一致。

相比手动管理或仅同步文件，Plugback 的特色在于其“清单驱动”机制。它不锁定特定版本，新安装时默认使用最新兼容版本，且具备自动修复能力，若检测到插件文件损坏或缺失，会尝试恢复或重新下载。此外，它会自动生成并同步一个名为 Plugback Seed 的小型加载器，确保新设备能自动安装 Plugback 本身，简化了多设备初始化的流程。

使用前需注意，Plugback 要求 Obsidian 版本不低于 1.8.7，且必须正确配置库同步以包含特定的配置文件，同时排除插件实体文件。它不适合需要不同设备启用不同插件组合的用户，因为所有设备共享同一份安装列表。此外，它无法管理未列入社区目录的私有插件，且若你修改了插件源码，同步过程可能会覆盖这些修改，因此不建议用于管理经过深度定制的插件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


