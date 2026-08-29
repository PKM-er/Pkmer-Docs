---
uid: 1786577081708003
title: 'Obsidian 插件：Publish to Git Repo'
tags: ['第三方工具集成', '图片与PDF', '发布工具', '效率工具', 'obsidian插件']
description: '这是一款Obsidian插件，能把仓库里的笔记**连同图片一起**发布到GitHub仓库。它支持增量操作，每次更新是独立的，而且可以安全地重复运行。——这款插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Publish to Git Repo

> [!Note] 插件名片
> - 插件名称：Publish to Git Repo
> - 插件作者：Novelty Liu
> - 插件说明：这是一款Obsidian插件，能把仓库里的笔记**连同图片一起**发布到GitHub仓库。它支持增量操作，每次更新是独立的，而且可以安全地重复运行。——这款插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['第三方工具集成', '图片与PDF', '发布工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/satlxq/obsidian-publish-to-git-repo)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?publish-to-git-repo)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/satlxq/obsidian-publish-to-git-repo/master/README.md)



## 概述

### Publish to Git Repo 插件总结
1. **主要功能**：将 Obsidian 保险库中的笔记及关联图片发布到 GitHub 仓库，以纯文件同步方式，生成干净的 Markdown 文件和图片文件。
2. **适用场景**：适用于将 Obsidian 笔记备份到 GitHub 仓库，搭配 Jekyll、Hugo 等静态网站生成器搭建网站，或单纯作为 Markdown 存档。与 Amytis 数字花园设置配合良好。
3. **核心特色**：
    - 资源共定位：含图片的笔记生成文件夹（`index.md` + `images/`），纯文本笔记为单个 `.md` 文件。
    - 增量更新：仅上传新增和有更改的笔记，可重复运行且无重复上传。
    - 原子性：每次更改在单个提交中完成，中断或失败无部分提交。
4. **使用建议**：先创建目标 GitHub 仓库，再创建具有“内容读写”权限的 GitHub 令牌（建议使用细粒度令牌），最后通过社区插件安装该插件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


