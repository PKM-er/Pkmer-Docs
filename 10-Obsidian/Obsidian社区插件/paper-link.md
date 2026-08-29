---
uid: 1786577081234000
title: 'Obsidian 插件：Paper Link'
tags: ['模板与链接处理', '编辑工具', '学习与教育', '白板学术与科研', 'obsidian插件']
description: '把粘贴过来的论文链接（像arXiv、OpenReview、ACL Anthology等）替换成[标题（会议年份）](链接)这种链接形式。 - 这个插件还没经过Obsidian官方人员的人工审核呢。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Paper Link

> [!Note] 插件名片
> - 插件名称：Paper Link
> - 插件作者：Jiangnan Ye
> - 插件说明：把粘贴过来的论文链接（像arXiv、OpenReview、ACL Anthology等）替换成[标题（会议年份）](链接)这种链接形式。 - 这个插件还没经过Obsidian官方人员的人工审核呢。
> - 插件分类：['模板与链接处理', '编辑工具', '学习与教育', '白板学术与科研', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/jiangnan0522/paper-link)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?paper-link)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/jiangnan0522/paper-link/master/README.md)



## 概述

### Paper Link插件总结
1. **主要功能**：自动将粘贴的学术论文URL替换为带标题的Markdown链接，格式为`[Title (Venue Year)](url)`。支持arXiv、ACL Anthology、OpenReview等来源。
2. **适用场景**：适用于在Obsidian中撰写学术笔记，需要引用论文链接的场景。
3. **核心特色**：
    - 粘贴时自动转换，不延迟粘贴操作，获取元数据后迅速替换。
    - 仅处理纯论文URL，非论文URL或包含URL的文本不处理。
    - 支持多种学术资源来源，元数据缺失时链接格式可优雅降级。
4. **使用建议**：
    - 粘贴论文URL时，确保剪贴板只有一个URL，可自动转换。
    - 对于已有笔记中的论文URL，可通过命令面板运行“Paper Link: Convert paper URLs in current note”进行转换，会跳过已为链接、在前置元数据或代码块中的URL。需注意OpenReview因API限制，目前URL暂无法转换。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


