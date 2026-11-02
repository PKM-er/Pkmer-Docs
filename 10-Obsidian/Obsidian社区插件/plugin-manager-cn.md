---
uid: 1793625611134000
title: "Obsidian 插件：Community Manager CN Legacy"
tags: ["社交与社区", "文件管理", "效率工具", "obsidian插件"]
description: "Legacy plugin manager retained at 0.1.16. New installations should use Wujie Hub with ID wujie-hub. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Community Manager CN Legacy

> [!Note] 插件名片
> - 插件名称：Community Manager CN Legacy
> - 插件作者：adventurer
> - 插件说明：Legacy plugin manager retained at 0.1.16. New installations should use Wujie Hub with ID wujie-hub. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['社交与社区', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/adventurer2008/plugin-manager-cn)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?plugin-manager-cn)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/adventurer2008/plugin-manager-cn/master/README.md)



## 概述

Wujie Hub 是一款专为国内网络环境优化的 Obsidian 社区插件管理器，旨在解决因网络限制导致的插件搜索、下载和更新困难问题。它通过内置的多个 GitHub 加速镜像源，让用户能够便捷地检索、安装及升级社区插件。除了基础的插件管理功能，该工具还集成了“无界同步”专属模块，支持查看版本清单、校验 SHA-256 摘要，并允许用户将经过验证的本机代码版本标记为正常状态，以便在需要时进行离线回退，确保核心同步功能的稳定性。

典型使用场景包括日常维护与故障恢复。例如，当用户发现某个插件更新后出现兼容性问题时，无需重新下载旧版，只需在“无界同步”区域选择之前标记为“正常”的版本，点击回退即可快速恢复代码，且该过程会保留当前的配置数据。另一个场景是批量更新，用户可在“已安装插件”列表中一键执行“全部加速更新”，系统会自动通过镜像源加速下载，并智能保留各插件原有的启用状态与设置，避免手动逐个操作带来的繁琐。

相比官方插件管理器，Wujie Hub 的核心特色在于其针对国内网络的加速能力与精细化的版本控制。它内置了六个候选加速源，具备自动故障切换机制，能显著提升下载成功率。此外，其独有的“标记当前版本正常”功能，允许用户建立本地代码快照，这种基于 SHA-256 校验的回退机制比单纯的文件备份更可靠，特别适合对数据一致性要求较高的无界同步用户。界面全中文设计也降低了使用门槛，使非技术背景用户也能轻松管理插件。

使用前需注意，该插件仅管理插件的发行文件（如 main.js），启用、禁用或卸载插件仍需通过 Obsidian 官方设置完成。它不上传任何笔记或配置数据，但依赖第三方代理访问 GitHub，因此代理方可见请求 URL。此版本尚未完成所有移动端的实机验收，且回退功能仅恢复代码，无法撤销配置变更或远端数据迁移。若你主要使用国际网络环境，或不需要复杂的版本回退功能，官方管理器可能已足够，无需额外安装此插件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


