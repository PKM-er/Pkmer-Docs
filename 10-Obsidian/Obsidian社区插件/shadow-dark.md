---
uid: 1791709369900000
title: 'Obsidian 插件：Shadowdark Tools'
tags: ['效率工具', '自定义命令', '数据处理', 'obsidian插件']
description: 'An expansive toolkit for Shadowdark GMs - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Shadowdark Tools

> [!Note] 插件名片
> - 插件名称：Shadowdark Tools
> - 插件作者：Luis Vierroth
> - 插件说明：An expansive toolkit for Shadowdark GMs - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['效率工具', '自定义命令', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/p-mercury/obsidian-shadow-dark)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?shadow-dark)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/p-mercury/obsidian-shadow-dark/master/README.md)



## 概述

**Shadowdark Tools** 是一款专为《Shadowdark》游戏主持人（GM）设计的 Obsidian 插件，旨在简化战役准备与执行流程。

**主要功能**：支持玩家与 NPC 角色卡的随机生成及编辑，商店内容的随机生成，以及核心的遭遇表（Encounter Tables）管理。

**适用场景**：适用于使用 Obsidian 作为战役笔记库的《Shadowdark》GM，特别是在需要快速构建随机遭遇、管理怪物数据或准备冒险内容时。

**核心特色**：
1. **模块化遭遇表**：通过定义骰子类型（如 1d6）和结果范围，灵活配置遭遇事件。
2. **怪物关联系统**：支持创建独立的怪物模板（含唯一 ID），并在遭遇表中通过 ID 引用怪物及其数量，实现数据复用。
3. **动态内容展示**：遭遇表支持标题、描述及怪物列表，点击可查看详细信息，提升游戏互动性。

**使用建议**：
1. 首先通过右键菜单创建“New Monster”模板，填写怪物信息并保留默认 ID。
2. 在笔记中插入“Insert Encounter Table”，设定掷骰规则。
3. 在遭遇条目中，通过 `monsters` 字段引用已创建的怪物 ID 和数量（支持骰子表达式如 `1d4`），以实现自动化的遭遇生成。
4. 注意该插件为开发中状态，建议定期更新以获取新功能。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


