---
uid: 2023080322181904
title: Obsidian 插件：File Publisher
tags: ['obsidian插件', 'readme']
description: 将文件发布到给定的POST api。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：File Publisher

> [!Note] 插件名片
> - 插件名称：File Publisher
> - 插件作者：Devin Sackett
> - 插件说明：将文件发布到给定的 POST api。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/yiglas/obsidian-file-publisher)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?file-publisher)

## 概述

将文件发布到给定的 POST api。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/yiglas/obsidian-file-publisher/master/README.md)
>

---

## Readme(翻译）

下面是 [[file-publisher]] 插件的自述翻译

# Obsidian 文件发布器

Obsidian 插件，允许您将文件发布到一个 POST 端点。

# 配置

输入 POST 端点的 URL

输入端点的 API 密钥

输入端点的 API 密钥秘钥

# 创建一个新文件进行发布

1. 创建一个包含以下前置信息的模板

   ```
   ---
   title:
   excerpt: ''
   timestamp: {{date:MMM D, YYYY}}
   ---
   ```

2. 创建一个新的笔记。
3. 通过执行 `Templates: Insert template` 命令插入模板。
4. 编写你的笔记。
5. 右键点击笔记，选择 `Publish file` 进行发布。



