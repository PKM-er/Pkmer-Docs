---
uid: 1786577076803001
title: 'Obsidian 插件：Central Vault Sync'
tags: ['第三方工具集成', '备份与恢复', '效率工具', '安全与隐私', 'obsidian插件']
description: '与自托管的权威仓库服务器进行安全版本同步。——此插件尚未经过Obsidian工作人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Central Vault Sync

> [!Note] 插件名片
> - 插件名称：Central Vault Sync
> - 插件作者：WebObsidian contributors
> - 插件说明：与自托管的权威仓库服务器进行安全版本同步。——此插件尚未经过Obsidian工作人员的人工审核。
> - 插件分类：['第三方工具集成', '备份与恢复', '效率工具', '安全与隐私', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/picassio/central-vault-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?central-vault-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/picassio/central-vault-sync/master/README.md)



## 概述

### 主要功能
实现Obsidian库与自托管WebObsidian服务器之间的双向同步，确保版本安全。服务器具有权威性，每次变更都会有稳定的条目标识、版本、内容哈希和有序日志序列。

### 适用场景
适用于需要在不同设备间同步Obsidian笔记，且希望使用自托管服务器保障数据安全与隐私的用户。

### 核心特色
1. 安全可靠：不会默默覆盖旧版本，采用多种验证机制保障数据完整性，通过Obsidian SecretStorage保护凭证。
2. 冲突处理：独立文本编辑使用确定性三方合并，冲突时生成副本。
3. 进度可见：实时显示同步进度，不暴露路径和笔记内容。
4. 并发控制：最多支持四个并发上传，旧服务器可安全回退到单操作请求。

### 使用建议
当前版本`0.1.22`处于社区审核阶段，未列入社区插件。使用[验证清单](https://github.com/picassio/central-vault-sync/issues/1)反馈问题，切勿发布凭证、私人库内容或未编辑的诊断信息。需Obsidian 1.11.4及以上版本，支持桌面、安卓和iOS系统，服务器需支持Central Sync Protocol 1.0且使用HTTPS。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


