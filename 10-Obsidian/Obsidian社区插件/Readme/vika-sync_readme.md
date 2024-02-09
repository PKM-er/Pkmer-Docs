---
uid: 2023080322291638
title: Obsidian 插件：Vika Sync
tags: ['obsidian插件', 'readme']
description: 将你的笔记同步到Vika
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Vika Sync

> [!Note] 插件名片
> - 插件名称：Vika Sync
> - 插件作者：romantic-black
> - 插件说明：将你的笔记同步到 Vika
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/romantic-black/obsidain-vika-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?vika-sync)

## 概述

将你的笔记同步到 Vika

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/romantic-black/obsidain-vika-sync/master/README.md)
>

---

## Readme(翻译）

下面是 [[vika-sync]] 插件的自述翻译

受 Johnny Obsidian 的 [与Vika同步脚本](https://milinshushe.feishu.cn/docs/doccnSwkXMw7tEQJwmBg72yzpLb) 的启发 | [使用前请看使用说明](https://github.com/romantic-black/obsidain-vika-sync/blob/master/README_zh.md)

Vika 是一款中国的基于云的数据库软件，可以减轻您在管理笔记方面的负担。Vika 具有类似的功能和 API，因此这个插件将来将与 airtable 兼容。

如何使用？

- 下载此插件。
- 设置您的 Vika 令牌、数据表 ID 和视图 ID
  - 例如，在您的 Vika 表中右键单击一个项目，复制其 URL `https://vika.cn/workbench/dstqMqKoMfmqwKcyGd/viwWEJsRNKaej/recso6avo3jrs`
  - 数据表 ID 应为 `dstqMqKoMfmqwKcyGd`，视图 ID 应为 `viwWEJsRNKaej`
- 设置您的自定义字段。
  - `update` 是从 frontmatter 上传到 Vika 的字段
  - `recover` 是从 Vika 下载到 frontmatter 的字段
- 在您的 Vika 中添加默认字段。
- 在社区中下载高级 URI。

我能做什么？

- 在 Vika 中创建/更新/删除记录
- 从 Vika 中恢复笔记
- 更新当前文件夹中的所有笔记
- 更新保险库中的所有笔记
- 自定义您自己的字段

## 默认字段

Vika Sync 有几个默认字段，通过 Obsidian Api 获取。在使用 Vika 之前，请确保以下字段在您的 Vika 中可用。

- 标题：str
- ID：str
- Vault：str
- 内容：str
- 创建时间：str
- 更新时间：str
- OBURI：str
- 文件夹：str
- 别名：str[]
- 标签：str[]
- 外部链接：str[]
- 反向链接：str[]
- 未解决的外部链接：str[]

`uid`、`vikaLink`、`Tags`、`Aliases` 被设置为可恢复。您应避免使用重复的字段。`uid` 指示笔记在 vika 中的存储位置。

## 待办事项

- 找到错误。



