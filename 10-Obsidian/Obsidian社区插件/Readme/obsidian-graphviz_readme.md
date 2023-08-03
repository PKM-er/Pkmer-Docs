---
uid: 2023080322232477
title: Obsidian 插件：【Readme】Obsidian Graphviz
tags: ['图表生成', 'obsidian插件', 'readme']
description: 渲染Graphviz图表
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Obsidian Graphviz

> [!Note] 插件名片
> - 插件名称：Obsidian Graphviz
> - 插件作者：Feng Peng
> - 插件说明：渲染Graphviz图表
> - 插件分类：['图表生成', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/QAMichaelPeng/obsidian-graphviz)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-graphviz)

## 概述

渲染Graphviz图表

![Obsidian Graphviz](https://cdn.pkmer.cn/covers/obsidian-graphviz.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/QAMichaelPeng/obsidian-graphviz/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-graphviz]] 插件的自述翻译


# Obsidian Graphviz

![GitHub package.json version](https://img.shields.io/github/package-json/v/QAMichaelPeng/obsidian-graphviz)
![GitHub manifest.json dynamic (path)](https://img.shields.io/github/manifest-json/minAppVersion/QAMichaelPeng/obsidian-graphviz?label=lowest%20supported%20app%20version)
![GitHub](https://img.shields.io/github/license/QAMichaelPeng/obsidian-graphviz)
[![libera manifesto](https://img.shields.io/badge/libera-manifesto-lightgrey.svg)](https://liberamanifesto.com)

在 [Obsidian](https://obsidian.md) 中渲染 [Graphviz](https://graphviz.org/) 图表

---

该插件使用本地的 graphviz dot 可执行文件进行渲染。

## 用法
1. 如果尚未安装graphviz，请安装它，或使用实验性的d3-graphviz支持。
   要下载和安装graphviz，请按照[官方说明](https://graphviz.org/download/)进行操作。
1. 在Obsidian选项对话框中，`PLUGIN OPTIONS > Obsidian Graphviz > Dot Path`，设置路径为您的dot文件。
1. 使用`dot`作为语言创建一个围栏代码块。
   在内部指定您的graphviz代码。然后预览它。
   Graphviz的文档可以在[graphviz.org](https://graphviz.org/documentation/)上找到。

```yaml
    ``` dot
    digraph G {

      subgraph cluster_0 {
        style=filled;
        color=lightgrey;
        node [style=filled,color=white];
        a0 -> a1 -> a2 -> a3;
        label = "process #1";
      }

      subgraph cluster_1 {
        node [style=filled];
        b0 -> b1 -> b2 -> b3;
        label = "process #2";
        color=blue
      }
      start -> a0;
      start -> b0;
      a1 -> b3;
      b2 -> a3;
      a3 -> a0;
      a3 -> end;
      b3 -> end;

      start [shape=Mdiamond];
      end [shape=Msquare];
    }
    ```
```
结果为：

![](doc/asset/image/example.png)

安装

### 在 Obsidian 内部

`设置 > 第三方插件 > 社区插件 > 浏览` 并搜索 `Graphviz`。

### 手动安装插件
``` bash
git clone https://github.com/QAMichaelPeng/obsidian-graphviz.git
cd obsidian-graphviz
npm i
VAULT_FOLDER=<你的笔记库文件夹>
PLUGIN_FOLDER=$VAULT_FOLDER/.obsidian/plugins/obisidan-graph-viz
[ -d "$PLUGIN_FOLDER" ] || mkdir -p $PLUGIN_FOLDER
npm run build && cp  ./{main.js,styles.css,manifest.json} $PLUGIN_FOLDER
```

## 鸣谢
- 受 Johannes Theiner 的 **[obsidian-plantuml](https://github.com/joethei/obsidian-plantuml)** 启发。

## 作者
Feng Peng(@QAMichaelPeng)

贡献者：
- Dos Santos(@d0ssant0s)
- ebdavison(@ebdavison)



