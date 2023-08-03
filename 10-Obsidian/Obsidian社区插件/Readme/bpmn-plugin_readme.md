---
uid: 20230803203550
title: Obsidian 插件：【Readme】BPMN Plugin
tags: ['图表生成', 'obsidian插件', 'readme']
description: 这个插件使用bpmn-js可以查看BPMN图。
author: joleaf
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：BPMN Plugin

> [!Note] 插件名片
> - 插件名称：BPMN Plugin
> - 插件作者：joleaf
> - 插件说明：这个插件使用bpmn-js可以查看BPMN图。
> - 插件分类：['图表生成', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/joleaf/obsidian-bpmn-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?bpmn-plugin)

## 概述

这个插件使用bpmn-js可以查看BPMN图。

![BPMN Plugin](https://cdn.pkmer.cn/covers/bpmn-plugin.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/joleaf/obsidian-bpmn-plugin/main/README.md)
> 

---

## Readme(翻译）

下面是 [[bpmn-plugin]] 插件的自述翻译


# Obsidian的BPMN插件 [![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/joleaf/obsidian-bpmn-plugin)](https://github.com/joleaf/obsidian-bpmn-plugin/releases) [![Release Obsidian Plugin](https://github.com/joleaf/obsidian-bpmn-plugin/actions/workflows/release.yml/badge.svg)](https://github.com/joleaf/obsidian-bpmn-plugin/actions/workflows/release.yml) ![Obsidian下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%238b6cef&label=downloads&query=%24%5B%22bpmn-plugin%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

该插件允许您在[Obsidian](https://www.obsidian.md)笔记中交互式地查看BPMN图表。
该查看器基于[bpmn-js](https://github.com/bpmn-io/bpmn-js)库。
此外，还提供了基本的BPMN编辑功能。

安装。。

### .. 在 Obsidian 中自动化

1. 在 Obsidian 设置中转到**社区插件**并**禁用**安全模式
2. 点击**浏览**并搜索"[BPMN 插件](obsidian://show-plugin?id=bpmn-plugin)"
3. 点击安装
4. 在**社区插件**选项卡中切换插件开启状态

### .. 从此存储库手动操作

1. 下载最新的[发布版本](https://github.com/joleaf/obsidian-bpmn-plugin/releases)的 `*.zip` 文件。
2. 将zip文件解压到您的Obsidian保险库的 `.obsidian/plugins` 文件夹中。

## 如何使用（CodeBlock）

1. 将有效的 `*.bpmn` 文件添加到您的保险库中
    1. 例如，使用 [Camunda Modeler](https://camunda.com/de/download/modeler/) 进行建模
    2. 使用功能区操作图标创建一个新的 BPMN 文件
2. 将 BPMN 图表添加到您的笔记中：

````
```bpmn
url: [[my-diagram.bpmn]]
```
````

### 参数

您可以使用以下参数自定义视图：

| 参数                  | 描述                                       | 值                                                         |
|----------------------|-------------------------------------------|-----------------------------------------------------------|
| url                  | *.bpmn 文件的 URL（必需）。                | 相对/绝对路径，或者使用 Markdown 链接的 "[[*.bpmn]]"。       |
| height               | 渲染画布的高度。                           | [200..1000]                                               |
| opendiagram          | 显示一个链接到 *.bpmn 文件。                | True/False                                                |
| showzoom             | 在画布下方显示缩放按钮。                   | True/False                                                |
| enablepanzoom        | 在代码块视图中启用平移和缩放。              | True/False                                                |
| zoom                 | 设置缩放级别。默认为 'fit-viewport'。       | 0.0 - 10.0                                                |
| x                    | 如果设置了缩放值，则设置 x 坐标。           | 0 - ...（默认值：0）                                      |
| y                    | 如果设置了缩放值，则设置 y 坐标。           | 0 - ...（默认值：0）                                      |
| forcewhitebackground | 强制使用白色背景。                         | True/False                                                |

### 示例

![示例](example/bpmn-plugin.gif)

如何使用（打开BPMN文件）

只需在您的黑曜石保险库中打开BPMN文件，即可在全屏模式下进行编辑。

## 如何进行开发

1. 将此存储库克隆到（非生产）Vault的插件文件夹中（`.obsidian/plugins/`）
2. 运行 `npm i`
3. 运行 `npm run dev`
4. 在**社区插件**选项卡中启用插件的切换按钮

捐赠

<a href='https://ko-fi.com/joleaf' target='_blank'><img height='35' style='border:0px;height:46px;' src='https://az743702.vo.msecnd.net/cdn/kofi3.png?v=0' border='0' alt='在ko-fi.com给我买杯咖啡' />



