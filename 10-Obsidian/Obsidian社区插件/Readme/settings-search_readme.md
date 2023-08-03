---
uid: 20230803204720
title: Obsidian 插件：【Readme】Settings Search
tags: ['obsidian插件', 'readme']
description: 在Obsidian.md中全局搜索设置
author: Jeremy Valentine
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Settings Search

> [!Note] 插件名片
> - 插件名称：Settings Search
> - 插件作者：Jeremy Valentine
> - 插件说明：在Obsidian.md中全局搜索设置
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/valentine195/obsidian-settings-search)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?settings-search)

## 概述

在Obsidian.md中全局搜索设置



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/javalent/settings-search/main/README.md)
> 

---

## Readme(翻译）

下面是 [[settings-search]] 插件的自述翻译


## 设置搜索

该插件为Obsidian设置添加了全局搜索功能。

就是这样。这就是插件。

### 键盘导航

您可以使用键盘导航搜索结果。上下箭头键可用于浏览结果，按下回车键将带您进入设置。

插件作者 - 动态添加设置

该插件通过渲染所有设置选项卡并获取任何已渲染的设置来工作。

有时，设置是动态渲染的，因此在渲染选项卡时不可用。如果您想与插件进行交互并动态添加设置，可以使用API来实现。它在`window`上作为`window.SettingsSearch`可用。

```ts
interface Resource {
    //您的设置选项卡的ID。这通常是在清单中定义的插件的ID。
    tab: string;
    //您的设置选项卡的名称。这通常是在清单中定义的插件的名称。在搜索时，此名称用于将设置组织到标题下。
    name: string;
    //要添加的设置的名称。
    text: string;
    //要添加到设置的可选描述字符串。
    desc: string;
}

/**
 * 向设置搜索中添加任意数量的资源。
 * 返回一个函数，可用于删除已注册的资源。
 */
SettingsSearch.addResources(...resources: Resource[]);

/**
 * 从设置搜索中删除任意数量的资源。
 */
SettingsSearch.removeResources(...resources: Resource[]);

/**
 * 删除与特定SettingTab ID相关联的所有资源。
 */
SettingsSearch.removeTabResources(id: string)

```



