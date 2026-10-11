---
uid: 1791709367941000
title: 'Obsidian 插件：Knowledge Regression'
tags: ['编程与脚本', '效率工具', '自动化与AI', 'obsidian插件']
description: 'Define and run deterministic tests against your vault to catch knowledge regressions. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Knowledge Regression

> [!Note] 插件名片
> - 插件名称：Knowledge Regression
> - 插件作者：bhushan agrawal
> - 插件说明：Define and run deterministic tests against your vault to catch knowledge regressions. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['编程与脚本', '效率工具', '自动化与AI', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/bhushan4work/obsidian-knowledge-regression)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?knowledge-regression)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/bhushan4work/obsidian-knowledge-regression/master/README.md)



## 概述

**Knowledge Regression** 是一款为 Obsidian 知识库提供自动化测试的插件，旨在防止知识体系随时间推移而“腐化”。

**主要功能**：允许用户以 Markdown 格式编写测试规则，自动检查笔记是否存在、链接是否有效、反向链接数量是否达标以及 Frontmatter 元数据是否完整。

**适用场景**：适用于需要长期维护、结构复杂或多人协作的个人知识库，特别是当笔记频繁重命名、新增或修改时，能有效防止断链和元数据缺失等隐性错误。

**核心特色**：
1. **CI 理念**：将持续集成思想引入笔记管理，通过定义“健康”标准实现自动验证。
2. **增量执行**：仅在笔记发生编辑、重命名或删除时，重新运行受影响的测试，而非全量扫描，效率极高。
3. **本地运行**：完全在 Obsidian 内部本地执行，无需外部服务或云端同步，保护隐私且响应迅速。
4. **直观反馈**：通过侧边栏清晰展示通过/失败数量及具体原因。

**使用建议**：建议在 Vault 中建立专门的测试文件夹（如 `_knowledge-tests`），为核心概念、关键链接和必要元数据编写基础测试规则。定期查看测试结果，将修复断链和补全元数据纳入日常维护流程，确保知识库的长期健壮性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


