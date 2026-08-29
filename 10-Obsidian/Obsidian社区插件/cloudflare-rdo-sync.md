---
uid: 1786577082074001
title: 'Obsidian 插件：R2DO Sync'
tags: ['第三方工具集成', '备份与恢复', '效率工具', 'obsidian插件']
description: '支持将版本化的仓库同步到Cloudflare R2，采用内容寻址快照和序列化提交方式。——此插件尚未经过Obsidian官方人员的手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：R2DO Sync

> [!Note] 插件名片
> - 插件名称：R2DO Sync
> - 插件作者：pc418
> - 插件说明：支持将版本化的仓库同步到Cloudflare R2，采用内容寻址快照和序列化提交方式。——此插件尚未经过Obsidian官方人员的手动审核。
> - 插件分类：['第三方工具集成', '备份与恢复', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/pc418/cloudflare-r2do-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?cloudflare-rdo-sync)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/pc418/cloudflare-r2do-sync/master/README.md)



## 概述

### R2DO Sync插件总结
1. **主要功能**：实现Obsidian库在用户自有Cloudflare账户上的双向同步，每次同步会将整个库的内容地址快照发布到R2，插件进行拉取、合并和提交操作，文件在设备端加密。
2. **适用场景**：适用于日常日志场景，两台设备在同一天向同一笔记追加内容时，能按日期顺序合并为一条笔记。
3. **核心特色**：无需第三方服务和订阅，Cloudflare免费计划即可满足文本库需求；采用端到端加密，主密钥不离开设备；冲突处理不会丢失数据，不可合并的内容会并列保留。
4. **使用建议**：需准备Cloudflare账户（免费计划）、Node.js 20+和Obsidian。按以下步骤设置：克隆仓库，安装依赖，运行`node scripts/setup.mjs`；若未登录，使用`./worker/node_modules/.bin/wrangler login`登录。设置过程会打印要部署的账户并等待确认，完成后会输出需手动输入到Obsidian的两个值，每次运行都会生成新的访问令牌。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


