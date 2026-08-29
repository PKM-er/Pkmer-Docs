---
uid: 1786577081693001
title: 'Obsidian 插件：Proxmox VM List'
tags: ['表格', '第三方工具集成', '数据处理', '效率工具', 'obsidian插件']
description: '从Proxmox VE主机/集群中获取虚拟机和容器信息，并将其写入仓库里的一个Markdown表格中。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Proxmox VM List

> [!Note] 插件名片
> - 插件名称：Proxmox VM List
> - 插件作者：Pawel Salkiewicz
> - 插件说明：从Proxmox VE主机/集群中获取虚拟机和容器信息，并将其写入仓库里的一个Markdown表格中。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['表格', '第三方工具集成', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/psalkiewicz/obsidian-proxmox-vm-list)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?proxmox-vm-list)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/psalkiewicz/obsidian-proxmox-vm-list/master/README.md)



## 概述

### Proxmox VM List插件总结
1. **主要功能**：连接Proxmox VE API，通过单一命令获取集群中所有节点的QEMU虚拟机和LXC容器信息，生成包含VMID、名称、类型等详细信息的Markdown表格笔记。
2. **适用场景**：适用于管理Proxmox VE主机或集群的用户，方便记录和查看虚拟机及容器的库存信息。
3. **核心特色**：支持API令牌或用户名 + 密码认证；可处理默认自签名证书，TLS验证可选；能标记模板和显示运行/停止状态；可配置目标文件夹和笔记名称，每次更新都会重新生成笔记。
4. **使用建议**：在配置时，先在Proxmox中创建API令牌（仅需读取权限，PVEAuditor角色即可），将令牌信息填入插件设置；使用“Test connection”按钮验证凭据；对于自签名证书，可关闭TLS验证。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


