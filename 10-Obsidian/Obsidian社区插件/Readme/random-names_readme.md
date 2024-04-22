---
uid: 2024042221331672
title: Obsidian 插件：【Readme】Random names
tags: ['obsidian插件', 'readme']
description: 生成随机名称。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Random names

> [!Note] 插件名片
> - 插件名称：Random names
> - 插件作者：Tom Parker-Shemilt
> - 插件说明：生成随机名称。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/palfrey/obsidian-random-names)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?random-names)

## 概述

生成随机名称。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/palfrey/obsidian-random-names/main/README.md)

---

## Readme(翻译）

下面是 [[random-names]] 插件的自述翻译

# 黑曜石随机名称

这是一个用于 [Obsidian](https://obsidian.md) 的插件，可以在文档中插入随机名称。有很多类别的名称（包括人名和物品名）。我们在内部使用<https://github.com/xaroth8088/random-names>来获取这些名称，他们的 [完整列表](https://github.com/xaroth8088/random-names?tab=readme-ov-file#full-list) 包含了完整的名称集合。

## 如何使用

1. 克隆这个仓库。
2. 确保你的 NodeJS 至少是 v16 (`node --version`)。
3. 运行 `./pnpm i` 来安装依赖。
4. 运行 `./pnpm dev` 来启动监视模式下的编译。

## 手动安装插件

1. 运行 `./pnpm build`
2. 将 `main.js` 和 `manifest.json` 复制到您的保险库 `VaultFolder/.obsidian/plugins/obsidian-random-names/`。

# 发布

1. 在 `package.json` 中更新版本号
2. 运行 `./pnpm run version` 并提交更改
3. 创建一个带注释的标签（例如 `git tag -a 1.0.1 -m "1.0.1"`）
4. 前往 github，[等待新版本发布](https://github.com/palfrey/obsidian-random-names/releases)，然后将其标记为已发布。



