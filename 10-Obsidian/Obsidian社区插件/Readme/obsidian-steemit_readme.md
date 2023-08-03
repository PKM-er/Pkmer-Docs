---
uid: 2023080322251196
title: Obsidian 插件：【Readme】Publish to Steemit
tags: ['obsidian插件', 'readme']
description: 一个用于将Obsidian文档发布到Steemit的插件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Publish to Steemit

> [!Note] 插件名片
> - 插件名称：Publish to Steemit
> - 插件作者：anpigon
> - 插件说明：一个用于将Obsidian文档发布到Steemit的插件。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/anpigon/obsidian-steemit-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-steemit)

## 概述

一个用于将Obsidian文档发布到Steemit的插件。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/anpigon/obsidian-steemit-plugin/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-steemit]] 插件的自述翻译


# Obsidian Steemit 插件

直接从 Obsidian 发布到你的 Steemit。

## 指示

- 从插件设置页面添加您的凭据
- 确保您的 Steemit 用户具有创建帖子的能力
- 从插件设置页面验证您的设置是否正常工作
- 使用“发布到 Steemit”命令将当前页面上传到您的 Steemit 网站

## 插件选项

- 在前置元数据中，您可以为您的帖子指定各种元数据：
  - 类别和标签可以是slug或ID。
  - 如果您希望为您的帖子指定特定的URL，请指定“permlink”。

### 示例前置信息：

```yml
---
title: 这是一个标题
permlink: 这是一个永久链接
category: hive-137029
tags: kr-dev steemit
---
```

### 注释

被HTML注释标签包围的文本（见下文）将被忽略，不会发布到Steemit。如果有一些你想从Steemit中排除但保留在同一个Obsidian markdown文件中的内容，这将非常方便。

```plaintext
%%
这是一个多行注释，很酷！
%%
```

```plaintext
%% 这是一个行内注释。%%
```



