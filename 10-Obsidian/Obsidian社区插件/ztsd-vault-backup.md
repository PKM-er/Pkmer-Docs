---
uid: 1786577083931001
title: 'Obsidian 插件：Ztsd Vault Backup'
tags: ['备份与恢复', '数据处理', '效率工具', '安全与隐私', 'obsidian插件']
description: '利用原生Zstandard压缩流、SHA256完整性检查和GFS时间分层保留策略，实现高性能的仓库备份。——此插件尚未经过Obsidian官方人员的手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Ztsd Vault Backup

> [!Note] 插件名片
> - 插件名称：Ztsd Vault Backup
> - 插件作者：aplikofi
> - 插件说明：利用原生Zstandard压缩流、SHA256完整性检查和GFS时间分层保留策略，实现高性能的仓库备份。——此插件尚未经过Obsidian官方人员的手动审核。
> - 插件分类：['备份与恢复', '数据处理', '效率工具', '安全与隐私', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/aplikofi/Obsidian-bckp-Plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ztsd-vault-backup)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/aplikofi/Obsidian-bckp-Plugin/master/README.md)



## 概述

### Ztsd Vault Backup插件总结
1. **主要功能**：为Obsidian创建压缩且经加密验证的保险库备份，采用tar归档和Zstandard压缩。支持备份、恢复操作，生成SHA - 256校验和文件验证备份完整性。
2. **适用场景**：适用于需要定期备份Obsidian保险库，防止数据丢失或损坏的用户，跨Windows、macOS和Linux系统均可使用。
3. **核心特色**：
    - 纯JS/TS压缩栈，无需外部命令行二进制文件，确保跨平台可移植性。
    - 非破坏性恢复，将备份提取到指定时间戳文件夹，可先查看再合并。
    - 可配置备份数量，节省磁盘空间。
    - 有简单GUI控件，操作方便。
4. **使用建议**：在设置中合理配置备份数量限制，定期检查备份校验和文件确保数据完整性。恢复时，先在独立文件夹查看备份内容，确认无误后再合并到主保险库，避免数据覆盖风险。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


