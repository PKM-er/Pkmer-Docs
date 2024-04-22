---
uid: 2024042221334388
title: Obsidian 插件：【Readme】Update Time Updater
tags: ['obsidian插件', 'readme']
description: 手动更新前置数据中的修改日期字段。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Update Time Updater

> [!Note] 插件名片
> - 插件名称：Update Time Updater
> - 插件作者：MURATAGAWA Kei
> - 插件说明：手动更新前置数据中的修改日期字段。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/muratagawa/update-time-updater)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?update-time-updater)

## 概述

手动更新前置数据中的修改日期字段。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/muratagawa/update-time-updater/main/README.md)

---

## Readme(翻译）

下面是 [[update-time-updater]] 插件的自述翻译

# 更新时间更新器

手动更新前置元数据中的修改日期字段。

## 如何使用

- 从左侧功能区的按钮
- `手动更新修改日期时间` 的命令面板

## 设置

- `目标键`：要更新的键
- `日期时间格式`：[Moments.js](https://momentjscom.readthedocs.io/en/latest/moment/04-displaying/01-format/) 格式

## 开发

```sh
cd <temporary_vault_path>/.obsidian/plugins
git clone git@github.com:muratagawa/update-time-updater.git
cd update-time-updater

npm i
nom run dev
```

## 许可证

该插件根据 MIT 许可证获得许可。
