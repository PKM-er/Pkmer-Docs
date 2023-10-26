---
uid: 2023102611072320
title: Obsidian 插件：【Readme】autoLiterature
tags: ['obsidian插件', 'readme']
description: 协助您记录文学笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】autoLiterature

> [!Note] 插件名片
> - 插件名称：autoLiterature
> - 插件作者：hucorz
> - 插件说明：协助您记录文学笔记。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/hucorz/obsidian-autoLiterature)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?auto-literature)

## 概述

协助您记录文学笔记。

![autoLiterature](https://cdn.pkmer.cn/covers/auto-literature.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/hucorz/obsidian-autoLiterature/master/README.md)
> 

---

## Readme(翻译）

下面是 [[auto-literature]] 插件的自述翻译


Obsidian AutoLiterature

Obsidian插件旨在帮助您记录文献笔记。改编自此[仓库](https://github.com/wilmerwang/autoLiterature)。

欢迎任何建议。
如何使用

从Obsidian社区插件中下载：

- 打开设置
- 打开社区插件并浏览插件
- 搜索“autoliterature”并安装

下载源代码：

- 将此存储库克隆到路径：vault/.obsidian
- 在Obsidian中打开社区插件
- 启用autoLiterature
## 屏幕截图

该插件支持arXiv ID，boi ID，medRXiv ID，BioRXiv ID。

该插件将自动检测字符串“- {xxx}”。

当笔记文件包含“- {paper_id}”时，该文献的信息将被替换。

![](./imgs/screenshot.gif)
## 设置

**输出格式**：允许您自定义paperInfo的格式。
- ${title} 将被替换为论文的标题
- ${url}、${author}、${journal}、${pubDate} 保持不变
- \n 表示换行，\t 表示制表符

>注意：不同的主题会有不同的效果

示例1（默认设置）：
```
- **${title}** ([link](${url}))\n\t- *${author} et.al.*\n\t- ${journal}\n\t- ${pubDate}
```

![Alt text](./imgs/format_example1.png)

示例2：
```
------\n**${title}** ([link](${url}))\n\t- *${author} et.al.*\n\t- ${journal}\n\t- ${pubDate}\n\n------\n
```

![Alt text](./imgs/format_example2.png)



