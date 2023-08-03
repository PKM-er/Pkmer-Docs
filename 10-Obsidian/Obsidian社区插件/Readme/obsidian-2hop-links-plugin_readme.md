---
uid: 2023080322132788
title: Obsidian 插件：【Readme】2Hop Links Plugin
tags: ['界面相关', 'obsidian插件', 'readme']
description: 这个插件将显示前面2跳链接的页面。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：2Hop Links Plugin

> [!Note] 插件名片
> - 插件名称：2Hop Links Plugin
> - 插件作者：Tokuhiro Matsuno
> - 插件说明：这个插件将显示前面2跳链接的页面。
> - 插件分类：['界面相关', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/tokuhirom/obsidian-2hop-links-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-2hop-links-plugin)

## 概述

这个插件将显示前面2跳链接的页面。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/tokuhirom/obsidian-2hop-links-plugin/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-2hop-links-plugin]] 插件的自述翻译


# Obsidian 2Hop Links 插件

该插件将显示与当前页面链接的下两个页面。
它将链接显示在 Markdown 编辑器的底部。
通过使用该插件，您可以自由地在数字花园中漫游。

在编辑器下方显示链接。

<img src="https://raw.githubusercontent.com/tokuhirom/obsidian-2hop-links-plugin/master/docs/img.png" alt="links">

预览模式也受支持。

## 命令

您可以使用以下命令。您可以将这些命令绑定到键盘快捷键。

| 命令                | 描述                          |
| ------------------ | ---------------------------- |
| 启用2跳链路        | 临时启用2跳链路              |
| 禁用2跳链路        | 临时禁用2跳链路              |

感谢

这个插件受到了[scrapbox](https://scrapbox.io/)的启发
(另请参阅[2 ホップリンクの考察（日语）](https://scrapbox.io/masui/2%E3%83%9B%E3%83%83%E3%83%97%E3%83%AA%E3%83%B3%E3%82%AF%E3%81%AE%E8%80%83%E5%AF%9F)
)

[2hop链接的发明者masui san](https://twitter.com/masui/status/1035090656371175424)

这个插件由[lishid](https://github.com/obsidianmd/obsidian-releases/pull/263)进行了审查

## 变更

- 0.9.0 (2022-06-16)
  - 由uxiun++添加在实时预览中显示
- 0.6.0 (2021-05-20)
  - 实验性功能：在面板顶部显示两跳链接。[#25](https://github.com/tokuhirom/obsidian-2hop-links-plugin/issues/25)
    （您可以通过设置面板启用此功能）
    由danraymond++提出的请求
- 0.4.0 (2021-05-17)
  - 无变更
- 0.3.0 (2021-05-17)
  - 将外部链接和内部链接分开。[#16](https://github.com/tokuhirom/obsidian-2hop-links-plugin/issues/16)
    gh16683170报告
  - 修复“包含PDF链接时Obsidian崩溃”问题。[#15](https://github.com/tokuhirom/obsidian-2hop-links-plugin/issues/15)
    gh16683170报告
  - 不吞噬非主鼠标按钮的mousedown事件。[#19](https://github.com/tokuhirom/obsidian-2hop-links-plugin/pull/19)
- 0.2.0 (2021-05-12)
  - 通过命令临时启用/禁用2hop插件视图。https://github.com/tokuhirom/obsidian-2hop-links-plugin/pull/13（由@autonomygaps提出的请求）
- 0.1.0 (2021-05-12)
  - 修复插件安装失败问题。https://github.com/tokuhirom/obsidian-2hop-links-plugin/pull/11（由gorilla、iiz报告）
  - 使框的大小可配置（由iiz提出的请求）
- 0.0.10 (2021-05-11)
  - 重新启用可解析的2hop链接。https://github.com/tokuhirom/obsidian-2hop-links-plugin/pull/7（由@kdmsnr报告）

## 许可证

MIT许可证（MIT）

版权所有 © 2021 Tokuhiro Matsuno, http://64p.org/ <tokuhirom@gmail.com>

特此免费授予任何获得本软件及相关文档文件（以下简称“软件”）副本的人，无偿使用本软件，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售软件的副本，以及允许获得软件的人员这样做，但需遵守以下条件：

上述版权声明和本许可声明应包含在所有副本或实质部分的软件中。

软件按“原样”提供，不提供任何明示或暗示的保证，包括但不限于适销性、特定用途适用性和非侵权性的保证。无论是在合同诉讼、侵权行为还是其他方面，作者或版权持有人均不对任何索赔、损害或其他责任负责，无论是因使用软件或与软件的使用或其他交易有关。



