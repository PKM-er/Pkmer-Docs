---
uid: 20230803212454
title: Obsidian 插件：【Readme】GitHub Issue Augmentation
tags: ['obsidian插件', 'readme']
description: 增加了GitHub问题ID
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：GitHub Issue Augmentation

> [!Note] 插件名片
> - 插件名称：GitHub Issue Augmentation
> - 插件作者：samprintz
> - 插件说明：增加了GitHub问题ID
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/samprintz/obsidian-issue-augmentation-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?github-issue-augmentation)

## 概述

增加了GitHub问题ID

![GitHub Issue Augmentation](https://cdn.pkmer.cn/covers/github-issue-augmentation.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/samprintz/obsidian-issue-augmentation-plugin/main/README.md)
> 

---

## Readme(翻译）

下面是 [[github-issue-augmentation]] 插件的自述翻译



# Obsidian GitHub Issue Augmentation Plugin

这是一个为 [Obsidian.md](https://obsidian.md/) 设计的插件，它可以通过添加标题来增强 GitHub 问题的 ID。

例如，以下 Markdown 文本

```
- Finished #5432
- Working on #5433
- Next: #5434, #5435
```

渲染为：

![20230413-185428-screenshot](https://user-images.githubusercontent.com/7581457/231971667-c5ed7591-21a5-4f3f-9ae4-b90cbbb1ac08.png)

每个问题标题都是指向 GitHub 仓库的链接。

## 配置

有两个来源可以用来增加问题ID与描述性问题文本：

1. GitHub
2. 自定义标题列表。

### GitHub集成

要从GitHub获取有关问题ID的信息，请在插件设置中指定存储库所有者和存储库名称。
此外，需要一个GitHub个人访问令牌（PAT）。
[生成它](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)并将其添加到插件设置中。

### 自定义问题标题文件

或者，还可以在设置中指定一个CSV文件，用于提供问题ID到问题标题的映射。
它应该像这样：

```
5432,我的问题
5433,另一个问题
5434,一些错误
5435,酷炫功能
```

在设置中指定的CSV文件路径必须相对于存储库的基本目录。

同时使用GitHub和自定义标题列表作为问题ID增强的源是可能的。
当一个问题ID在两个源中都有标题时，自定义列表的标题优先于GitHub的标题。



