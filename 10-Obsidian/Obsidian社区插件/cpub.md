---
uid: 1793625611388000
title: "Obsidian 插件：cpub for Confluence"
tags: ["第三方工具集成", "发布工具", "效率工具", "obsidian插件"]
description: "Publish the current note to Confluence Cloud with the cpub command-line tool: replace a page or create a child page, preview first, and only update pages cpub already manages. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：cpub for Confluence

> [!Note] 插件名片
> - 插件名称：cpub for Confluence
> - 插件作者：Ronny Pacheco
> - 插件说明：Publish the current note to Confluence Cloud with the cpub command-line tool: replace a page or create a child page, preview first, and only update pages cpub already manages. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '发布工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/rpacheco-tc/confluence-publisher-obsidian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cpub)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/rpacheco-tc/confluence-publisher-obsidian/master/README.md)



## 概述

cpub for Confluence 将当前 Obsidian 笔记一键发布至 Confluence Cloud，核心功能是通过调用外部命令行工具 cpub 实现 Markdown 到 Confluence 页面的安全转换。它支持替换现有页面内容或创建子页面，并在执行前提供预览功能，确保只有由 cpub 管理的页面才会被更新，绝不删除或移动任何内容，从而保障知识库的稳定性。

典型场景包括团队技术文档的同步更新。例如，你在 Obsidian 中修改了 API 文档笔记，只需绑定快捷键即可将其推送到 Confluence 对应页面，无需手动复制粘贴；或者在发布前使用“预览”命令，查看 Markdown 中的代码块、Mermaid 图表和内部链接在 Confluence 中的渲染效果，确认无误后再正式提交，避免格式错乱。

相比其他直接调用 API 的插件，该插件的最大特色在于其“薄前端”架构与严格的安全边界。它本身不处理网络请求或存储凭证，所有敏感操作均由独立的 cpub 工具完成，且插件通过 Node.js 直接调用程序而非 Shell，彻底杜绝了命令注入风险。此外，它具备严格的权限控制，永远不会接管非 cpub 发布的页面，这种保守策略虽然限制了灵活性，但极大降低了误操作风险。

使用前需注意，该插件仅支持桌面版 Obsidian，且必须预先在终端安装并配置好 cpub 工具。每个页面首次发布时，必须从终端手动运行一次以确认接管，插件无法自动完成此步骤。因此，如果你希望完全自动化、无需人工干预的发布流程，或者需要在移动端使用，该插件并不适合你的需求。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


