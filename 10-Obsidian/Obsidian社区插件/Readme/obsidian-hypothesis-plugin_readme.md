---
uid: 2023080322200221
title: Obsidian 插件：Hypothes.is
tags: ['obsidian插件', 'readme']
description: and notes同步您的假设重点和笔记
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Hypothes.is

> [!Note] 插件名片
> - 插件名称：Hypothes.is
> - 插件作者：weichenw
> - 插件说明：and notes 同步您的假设重点和笔记
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/weichenw/obsidian-hypothesis-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-hypothesis-plugin)

## 概述

and notes 同步您的假设重点和笔记

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/weichenw/obsidian-hypothesis-plugin/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-hypothesis-plugin]] 插件的自述翻译

## Obsidian Hypothesis 插件（社区插件）

Obsidian Hypothesis（社区插件）是一个非官方插件，用于将 [Hypothesis](https://hypothes.is/) 的**网页**文章的高亮/注释同步到你的 Obsidian Vault 中。

### 特点

- 在 Obsidian 启动或手动触发时同步网络文章的高亮和注释
- 使用新的高亮和注释更新现有文章
- 通过 [Nunjucks](https://mozilla.github.io/nunjucks) 模板自定义高亮

## 使用方法

安装插件后，配置插件的设置，然后手动启动第一次同步。之后，可以将插件配置为自动同步或手动同步。

使用侧边图标栏上的 Hypothesis 图标或命令来触发手动同步。

### 设置

- `连接`：输入 [API令牌](https://hypothes.is/account/developer) 以从 Hypohesis 获取高亮显示内容
- `断开连接`：从 Obsidian 中删除 API 令牌
- `自动同步间隔`：设置以分钟为单位的 Hypothesis 高亮自动同步间隔
- `高亮文件夹`：指定 Hypothesis 文章的文件夹位置
- `使用域文件夹`：根据注释 URL 的域将生成的文件分组到文件夹中
- `启动时同步`：打开 Obsidian 时自动同步高亮显示内容
- `高亮模板`：用于渲染高亮显示内容的 Nunjuck 模板
- `群组`：添加/删除要同步的群组
- `重置同步`：清除同步历史记录。不会删除之前从您的保险库同步的任何高亮显示内容。

### 同步自上次更新以来的所有新的亮点

- 点击：Hypothesis 功能区图标
- 命令：同步新的亮点
- 命令：重新同步已删除的文件

  >（注意：在 v0.1.5 之前同步的文件需要重置同步历史并删除所有同步的文件，以使此功能正常工作）

## 限制和注意事项

- 初始同步时，高亮限制为 1000 个，以提高性能。后续增量同步的高亮限制为 200 个，因为结果集的分页与 API 的 search_after 参数不兼容。
- 仅在 Obsidian Mac OSX 和 Windows 10 上进行了测试。
- 不支持对 PDF 进行批注。

## 致谢

本项目受到 Hady Ozman 的 [Obsidian Kindle插件](https://github.com/hadynz/obsidian-kindle-plugin) 的启发。

你觉得这个插件有用吗？

感谢您的支持 🙏
