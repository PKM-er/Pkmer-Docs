---
uid: 20230803204214
title: Obsidian 插件：【Readme】Kill and Yank
tags: ['obsidian插件', 'readme']
description: 在编辑器中启用杀死和抢夺（如Emacs）
author: INOUE Takuya
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Kill and Yank

> [!Note] 插件名片
> - 插件名称：Kill and Yank
> - 插件作者：INOUE Takuya
> - 插件说明：在编辑器中启用杀死和抢夺（如Emacs）
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/inouetakuya/obsidian-kill-and-yank)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?kill-and-yank)

## 概述

在编辑器中启用杀死和抢夺（如Emacs）



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/inouetakuya/obsidian-kill-and-yank/main/README.md)
> 

---

## Readme(翻译）

下面是 [[kill-and-yank]] 插件的自述翻译


Obsidian杀死和复制

Obsidian插件，使编辑器中的杀死和复制功能类似于Emacs。

Obsidian https://obsidian.md

使用方法

### 删除行

从光标位置删除到行尾。

默认快捷键：`Control + k`

### 删除区域

剪切所选内容。

默认快捷键：`Control + w`

粘贴删除环。

默认：`Control + y`

### 设置标记

切换选择的起始位置。

默认：`Control + Space`

注意

该插件在编辑器中启用了kill和yank功能，但不会在标题中启用kill和yank功能。

如果您希望继续在标题中使用kill和yank功能，请更改默认的键映射。

开发

### 设置

```shell
yarn install
```

### 格式

```shell
yarn format:check
yarn format:fix
```

### Lint

```shell
yarn lint
yarn lint:fix
```

### 构建

```shell
yarn build
```

### 手动安装此插件

将 `main.js`、`styles.css`、`manifest.json` 复制到您的 vault 文件夹 `VaultFolder/.obsidian/plugins/kill-and-yank/` 中。



