---
uid: 20231220115812
title: Obsidian 插件：【Readme】DMN Plugin
tags: ['obsidian插件', 'readme']
description: 该插件可以使用dmn-js查看DMN。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】DMN Plugin

> [!Note] 插件名片
> - 插件名称：DMN Plugin
> - 插件作者：joleaf
> - 插件说明：该插件可以使用 dmn-js 查看 DMN。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/joleaf/obsidian-dmn-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dmn-plugin)

## 概述

该插件可以使用 dmn-js 查看 DMN。

![DMN Plugin](https://cdn.pkmer.cn/covers/dmn-plugin.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/joleaf/obsidian-dmn-plugin/main/README.md)

---

## Readme(翻译）

下面是 [[dmn-plugin]] 插件的自述翻译

# Obsidian DMN 插件 [![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/joleaf/obsidian-dmn-plugin)](https://github.com/joleaf/obsidian-dmn-plugin/releases) [![Release Obsidian Plugin](https://github.com/joleaf/obsidian-dmn-plugin/actions/workflows/release.yml/badge.svg)](https://github.com/joleaf/obsidian-dmn-plugin/actions/workflows/release.yml) ![GitHub all releases](https://img.shields.io/github/downloads/joleaf/obsidian-dmn-plugin/total)

该插件允许您在 [Obsidian](https://www.obsidian.md) 笔记中交互地查看 DMN。

该查看器基于 [dmn-js](https://github.com/bpmn-io/dmn-js) 库。

如果您想在笔记中评估/执行您的 DMN，请查看 [DMN Eval插件](https://github.com/joleaf/obsidian-dmn-eval-plugin)。

安装。。

### .. 在 Obsidian 中自动化

1. 在 Obsidian 设置中转到**社区插件**并**禁用**安全模式
2. 点击**浏览**并搜索“DMN 插件”
3. 点击安装
4. 在**社区插件**选项卡中切换插件开启状态

### .. 从此存储库手动操作

1. 下载最新的 [发布版本](https://github.com/joleaf/obsidian-dmn-plugin/releases) 的 `*.zip` 文件。
2. 将 zip 文件解压到您的 Obsidian 保险库的 `.obsidian/plugins` 文件夹中。

## 如何使用

1. 将有效的 `*.dmn` 文件添加到您的保险库中（例如，`my-diagram.dmn`）（例如，使用 [Camunda Modeler](https://camunda.com/de/download/modeler/) 建模）
2. 将 DMN 添加到您的笔记中：

````
```dmn
url: [[my-diagram.dmn]]
```
````

### 参数

您可以使用以下参数自定义视图：

| 参数                  | 描述                                                         | 值                                                       |
|----------------------|------------------------------------------------------------|----------------------------------------------------------|
| url                  | *.dmn 文件的 URL（必需）。                                    | 相对/绝对路径，或者使用 markdown 链接的 `[[*.dmn]]`。     |
| decisionid           | 要打开的决策表的 ID（如果为空，则打开 DRD）。                  | 字符串值                                                 |
| height               | 渲染画布的高度。                                              | [300..1000]                                              |
| opendiagram          | 显示指向 *.dmn 文件的链接。                                   | True/False                                               |
| showzoom             | 在画布下方显示缩放按钮。                                      | True/False                                               |
| zoom                 | 设置缩放级别。默认为 'fit-viewport'。                          | 0.0 - 10.0                                               |
| x                    | 如果设置了缩放值，则设置 x 坐标。                               | 0 - ...（默认值：0）                                      |
| y                    | 如果设置了缩放值，则设置 y 坐标。                               | 0 - ...（默认值：0）                                      |
| forcewhitebackground | 强制使用白色背景。                                            | True/False                                               |

### 示例

![示例](https://cdn.pkmer.cn/covers/dmn-plugin_2_0.gif)

## 如何进行开发

1. 将此存储库克隆到（非生产）Vault 的插件文件夹中（`.obsidian/plugins/`）
2. 运行 `npm i`
3. 运行 `npm run dev`
4. 在**Community Plugins**选项卡中启用插件

捐赠

<a href='https://ko-fi.com/joleaf' target='_blank'><img height='35' style='border:0px;height:46px;' src='https://az743702.vo.msecnd.net/cdn/kofi3.png?v=0' border='0' alt='在ko-fi.com给我买杯咖啡' />
