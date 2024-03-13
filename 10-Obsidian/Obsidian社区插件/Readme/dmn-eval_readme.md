---
uid: 2023080322172411
title: Obsidian 插件：DMN Eval
tags: ['obsidian插件', 'readme']
description: 该插件使得能够评估/执行DMN。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：DMN Eval

> [!Note] 插件名片
> - 插件名称：DMN Eval
> - 插件作者：joleaf
> - 插件说明：该插件使得能够评估/执行 DMN。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/joleaf/obsidian-dmn-eval-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dmn-eval)

## 概述

该插件使得能够评估/执行 DMN。

![DMN Eval](https://cdn.pkmer.cn/covers/dmn-eval_new.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/joleaf/obsidian-dmn-eval-plugin/main/README.md)

---

## Readme(翻译）

下面是 [[dmn-eval]] 插件的自述翻译

# Obsidian DMN-Eval-Plugin [![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/joleaf/obsidian-dmn-eval-plugin)](https://github.com/joleaf/obsidian-dmn-eval-plugin/releases) [![Release Obsidian Plugin](https://github.com/joleaf/obsidian-dmn-eval-plugin/actions/workflows/release.yml/badge.svg)](https://github.com/joleaf/obsidian-dmn-eval-plugin/actions/workflows/release.yml) ![GitHub all releases](https://img.shields.io/github/downloads/joleaf/obsidian-dmn-eval-plugin/total)

该插件允许您在 [Obsidian](https://www.obsidian.md) 笔记中评估（执行）DMN。

DMN 评估器基于 [dmn-engine](https://github.com/camunda/camunda-bpm-platform/tree/master/engine-dmn) 库，由 [Camunda](https://camunda.com/) 提供。

如果您想在笔记中查看 DMN，请查看 [DMN插件](https://github.com/joleaf/obsidian-dmn-plugin)。

安装。。

### .. 在 Obsidian 中自动执行（尚未）

1. 在 Obsidian 设置中转到**Community Plugins**并**禁用**安全模式
2. 点击**浏览**并搜索“DMN Eval Plugin”
3. 点击安装
4. 在**Community Plugins**选项卡中切换插件开启状态
5. **重要提示：**您需要安装 [Java](https://www.java.com/en/download/help/download_options_de.html) 14 或更高版本。

### .. 从此存储库手动安装

1. 下载最新的 [发布版本](https://github.com/joleaf/obsidian-dmn-eval-plugin/releases) 的 `*.zip` 文件。
2. 将 zip 文件解压到您的 Obsidian 保险库的 `.obsidian/plugins` 文件夹中。
3. **重要提示：** 您需要安装 [Java](https://www.java.com/en/download/help/download_options_de.html) 14 或更高版本。

要求

- [Java](https://www.java.com/en/download/help/download_options_de.html) 14 或更高版本

## 如何使用

1. 将有效的 `*.dmn` 文件添加到您的保险库中（例如，`my-diagram.dmn`）（例如，使用 [Camunda Modeler](https://camunda.com/de/download/modeler/) 建模）。
2. 将 DMN 添加到您的笔记中：

````
```dmn-eval
url: [[my-diagram.dmn]]
decisionId: Evaluator
variables:
  myValue1: 2
  myValue2: 3
```
````

1. 您的笔记的所有前置数据都将用作 DMN 评估的输入（除了 `variables` 的值）。
2. 如果没有发生错误，决策的输出将被评估并打印到您的笔记中。

### 参数

您可以使用以下参数自定义视图：

| 参数              | 描述                                                         | 值                                                         |
|-----------------|----------------------------------------------------------|----------------------------------------------------------|
| url             | *.dmn 文件的 URL（必需）。                                    | 相对/绝对路径，或 `[[*.dmn]]` 作为 markdown 链接。             |
| decisionId      | 要评估的决策表的 ID（必需）。                                   | 字符串值                                                     |
| title           | 在 DMN 输出之前呈现的可选标题。                                 | 字符串值                                                     |
| noresultmessage | 如果评估没有返回结果，则为可选消息。                             | 字符串值（默认值："No result"）                                 |
| variables  | 用作输入的变量的映射。                                          | YAML 对象                | - |

### 示例

![示例](example/dmn-eval-plugin.gif)

## 开发方式

1. 将此存储库克隆到（非生产）Vault 的插件文件夹中（`.obsidian/plugins/`）。
2. 构建 DmnEvaluator（如果有更改）：
   1. `cd DmnEvaluator && mvn --batch-mode --update-snapshots package && cd ..`
   2. `cp DmnEvaluator/target/DmnEvaluator*-jar-with-dependencies.jar DmnEvaluator.jar`
   3. 重新创建 `DmnEvaluator.ts` 文件
      - OSX：`echo "export const dmnEvaluatorBase64 = '$(base64 -i DmnEvaluator.jar)';" > DmnEvaluator.ts`
      - Linux：`echo "export const dmnEvaluatorBase64 = '$(base64 -w 0 DmnEvaluator.jar)';" > DmnEvaluator.ts`
3. 运行 `npm i`。
4. 运行 `npm run dev`。
5. 在**Community Plugins**选项卡中启用插件。

捐赠

<a href='https://ko-fi.com/joleaf' target='_blank'><img height='35' style='border:0px;height:46px;' src='https://az743702.vo.msecnd.net/cdn/kofi3.png?v=0' border='0' alt='在ko-fi.com给我买杯咖啡' />
