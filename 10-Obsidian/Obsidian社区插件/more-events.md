---
uid: 1791709368711000
title: 'Obsidian 插件：More Events'
tags: ['编程与脚本', '第三方工具集成', '自动化与AI', 'obsidian插件']
description: 'Publishes named, typed workspace events the public API does not expose, so other plugins can react without patching internals. A growing set, starting with core and community plugins being enabled and disabled. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：More Events

> [!Note] 插件名片
> - 插件名称：More Events
> - 插件作者：Michael Naumov
> - 插件说明：Publishes named, typed workspace events the public API does not expose, so other plugins can react without patching internals. A growing set, starting with core and community plugins being enabled and disabled. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编程与脚本', '第三方工具集成', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/mnaoumov/obsidian-more-events)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?more-events)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/mnaoumov/obsidian-more-events/master/README.md)



## 概述

**1. 主要功能**
More Events 插件旨在补全 Obsidian 公共 API 中缺失的工作区事件。它发布命名、类型化且基于主题的事件，允许其他插件在无需修补内部代码或依赖未公开文档的情况下，安全地监听特定状态变化。目前核心功能聚焦于插件生命周期，即准确捕捉核心插件（如 Backlinks、Canvas）和社区插件的启用与禁用状态。

**2. 适用场景**
适用于需要与其他插件进行深度集成的开发场景。当你的插件需要感知另一个插件（无论是核心还是社区插件）的加载、卸载或状态切换时，该插件提供了必要的触发机制，避免了直接操作内部对象带来的风险。

**3. 核心特色**
*   **类型安全与标准化**：提供明确命名和类型定义的事件，取代了原生 API 中无类型的 `change` 或 `changed` 事件。
*   **消除猴子补丁**：解决了多个插件同时修补 `InternalPlugin.prototype` 导致的冲突问题，通过统一发布事件实现解耦。
*   **零额外依赖**：订阅事件仅需依赖 `obsidian` 核心库，无需额外安装依赖包。
*   **可扩展性**：采用“名称与类型契约”设计，未来将按此标准持续增加更多事件集。

**4. 使用建议**
开发者在编写需要响应其他插件状态变化的逻辑时，应优先订阅 More Events 发布的事件，而非直接监听 `app.internalPlugins` 或 `app.plugins` 的原始事件，也不建议手动修补原型方法。这能显著提升插件间的兼容性与代码健壮性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


