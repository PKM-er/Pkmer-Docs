---
uid: 1793625624207000
title: "Obsidian 插件：Vault Validator"
tags: ["数据处理", "文件管理", "效率工具", "obsidian插件"]
description: "Audit note properties against your vault's conventions, preview safe cleanup fixes, and undo the last batch. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Vault Validator

> [!Note] 插件名片
> - 插件名称：Vault Validator
> - 插件作者：davison
> - 插件说明：Audit note properties against your vault's conventions, preview safe cleanup fixes, and undo the last batch. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['数据处理', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/chrisdavison/vault-validator)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vault-validator)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/chrisdavison/vault-validator/master/README.md)



## 概述

Vault Validator 专注于审计笔记属性（Frontmatter）是否符合库的既定规范，并提供安全的清理修复预览及撤销功能。它完全在本地运行，不发起任何网络请求，且绝不在保存或后台静默修改笔记。开箱即用状态下，它仅检查 Obsidian 内置属性及库中保存的属性类型；所有自定义规范检查（如允许的状态、受控标签或必需章节）均需手动配置后才会生效，确保审计范围完全由用户掌控。

典型使用场景包括清理杂乱的前置元数据或统一项目笔记格式。例如，你可以批量移除可选属性中的空值、清除列表属性中的空白项，或去除完全重复的标签，同时保留大小写和顺序。另一个场景是检查带有特定标签的笔记是否拥有有效的状态值，或确保某些属性仅包含未别名的维基链接。审计报告会列出所有问题，你可以搜索、筛选并单独选择需要修复的项目，预览具体编辑内容后再应用，整个过程透明可控。

相比同类插件，Vault Validator 的核心特色在于其“安全写入”机制与精细的规范控制。它利用原子化 API 进行写入，若文件在审计后发生变动、删除或重命名，会自动跳过而非覆盖，防止数据丢失。此外，它支持复杂的规范检查，如受控标签命名空间、互斥属性组、每日笔记特定属性限制，以及 Base 视图模板排除检查。对于 YAML 注释、锚点等复杂结构，插件会将其标记为需人工审查，而非强行修改，确保数据完整性。

使用前需注意，该插件仅保留最后一批修复的撤销记录，新批次会覆盖旧记录，且单批次序列化字符数超过一千万会被拒绝。`data.json` 文件包含设置及上一批修复笔记的原始内容，请勿分享。它不适合需要自动后台同步、移动端使用（未测试）或依赖复杂 Bases 逻辑过滤的场景。若你的库结构极其简单，无需自定义规范，其价值可能有限；但对于追求元数据整洁与一致性的用户，它是强有力的审计工具。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


