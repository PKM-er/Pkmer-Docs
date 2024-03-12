---
uid: 20230901084916
title: Obsidian 插件：【Readme】Quail
tags: ['obsidian插件', 'readme']
description: 通过Quail.ink将保存、发布和交付笔记作为通讯和博客。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Quail

> [!Note] 插件名片
> - 插件名称：Quail
> - 插件作者：Lyric
> - 插件说明：通过 Quail.ink 将保存、发布和交付笔记作为通讯和博客。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/lyricat/obsidian-quail)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?quail)

## 概述

通过 Quail.ink 将保存、发布和交付笔记作为通讯和博客。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lyricat/obsidian-quail/master/README.md)

---

## Readme(翻译）

下面是 [[quail]] 插件的自述翻译

这是一个 [Quail.ink](https://quail.ink) 的插件。

## 特点

- [x] 将笔记发布/取消发布到 Quail.ink
- [x] 将已发布的笔记发送给订阅者
- [x] 自动生成笔记的元数据
手动安装

克隆插件。

```bash
git clone https://github.com/quail-ink/obsidian-quail.git
cd obsidian-quail
```

构建插件。

```bash
npm install
npm run build
```

将插件复制到您的保险库。

```
mkdir $VAULT_PATH/.obsidian/plugins/obsidian-quail
mv main.js styles.css manifest.json $VAULT_PATH/.obsidian/plugins/obsidian-quail
```