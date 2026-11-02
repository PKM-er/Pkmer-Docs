---
uid: 1793625607847000
title: "Obsidian 插件：Bases Read Only"
tags: ["界面优化", "效率工具", "安全与隐私", "obsidian插件"]
description: "Lock chosen bases to block clicks, keys and drags that change cells, cards or view settings. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Bases Read Only

> [!Note] 插件名片
> - 插件名称：Bases Read Only
> - 插件作者：theluckystrike
> - 插件说明：Lock chosen bases to block clicks, keys and drags that change cells, cards or view settings. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '效率工具', '安全与隐私', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/theluckystrike/bases-read-only)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bases-read-only)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/theluckystrike/bases-read-only/master/README.md)



## 概述

Bases Read Only 旨在解决 Obsidian 中 Bases 视图容易被误触修改的问题。它通过拦截点击、键盘输入和拖拽事件，将选定的 Base 文件锁定为只读状态。在锁定期间，单元格编辑、复选框切换、粘贴及视图设置变更均被禁止，但文件链接保持可点击，确保你仍能通过链接跳转阅读笔记内容。免费版支持手动锁定特定文件，适合需要临时固定视图状态的用户。

典型场景包括向他人展示项目进度或进行个人复盘。例如，在周会演示时，你可以锁定项目看板，防止观众或自己意外点击改变任务状态；或者在撰写周报时，嵌入一个锁定的项目 Base 和一个未锁定的草稿 Base，前者用于展示最终结果，后者用于实时记录新想法，两者互不干扰。

相比其他仅隐藏界面的插件，该工具能精准拦截底层编辑事件，包括数字单元格的步进键和卡片拖拽，并支持在锁定状态下保留视图切换菜单以便阅读不同视角。Pro 版本还引入了文件夹规则、特定属性例外（如仅允许勾选“完成”）以及全库 Kiosk 模式，提供了更细粒度的控制能力，确保关键数据在展示过程中绝对稳定。

需要注意的是，该插件仅拦截 Obsidian 界面内的操作，无法阻止外部编辑器、同步服务或其他插件直接修改文件。因此，它不适用于需要严格权限控制或防篡改的安全场景。此外，移动端触控交互、第三方看板布局及大型库性能未经充分测试，建议在桌面端使用，并在依赖此功能前做好数据备份。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


