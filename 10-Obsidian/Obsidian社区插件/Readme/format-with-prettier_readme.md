---
uid: 20240312193744
title: Obsidian 插件：【Readme】Format with Prettier
tags: ['obsidian插件', 'readme']
description: 使用Prettier在您的保险库中格式化文件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Format with Prettier

> [!Note] 插件名片
> - 插件名称：Format with Prettier
> - 插件作者：Alex Gavrusev
> - 插件说明：使用 Prettier 在您的保险库中格式化文件。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/alexgavrusev/obsidian-format-with-prettier)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?format-with-prettier)

## 概述

使用 Prettier 在您的保险库中格式化文件。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/alexgavrusev/obsidian-format-with-prettier/master/README.md)

---

## Readme(翻译）

下面是 [[format-with-prettier]] 插件的自述翻译

# 使用 Prettier 格式化您的 Obsidian 存储库中的文件

## 安装

将 `format-with-prettier.zip` 从 [最新版本](https://github.com/alexgavrusev/obsidian-format-with-prettier/releases/latest) 解压到您的保险库的 `.obsidian/plugins` 文件夹中。

请注意，您可能需要重新打开您的保险库，以便插件显示在“已安装插件”下面。

## 用法

默认情况下启用了保存时格式化功能，并可以在插件设置下进行更改

此外，还提供了一个“格式化当前文件”[命令](https://help.obsidian.md/Plugins/Command+palette)。

## 自定义

该插件将在您的存储库的根文件夹中查找一个 `prettierrc.json` 文件（请注意文件开头没有 `.`）。在其中，您可以按照通常的方式 [配置Prettier](https://prettier.io/docs/en/configuration)。

## 一次性格式化整个保险库

使用 Prettier [CLI](https://prettier.io/docs/en/cli):

```console
$ cd YOUR_VAULT_FOLDER
$ echo '**/.obsidian' > .prettierignore
$ npx prettier . --write --config prettierrc.json
```

## 许可证

MIT © Aliaksandr Haurusiou.
