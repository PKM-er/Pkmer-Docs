---
uid: 2023080322172090
title: Obsidian 插件：Dirtreeist
tags: ['obsidian插件', 'readme']
description: 从代码块中的markdown列表渲染出目录结构图。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Dirtreeist

> [!Note] 插件名片
> - 插件名称：Dirtreeist
> - 插件作者：kasahala
> - 插件说明：从代码块中的 markdown 列表渲染出目录结构图。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/k4a-l/obsidian-dirtreeist)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-dirtreeist)

## 概述

从代码块中的 markdown 列表渲染出目录结构图。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/k4a-l/obsidian-dirtreeist/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-dirtreeist]] 插件的自述翻译

# Obsidian Dirtreeist

从代码块中的 markdown 列表中渲染一个目录结构图。

## 注意

该插件依赖于 [dirtreeist](https://github.com/k4a-l/dirtreeist) 库的功能。请将功能请求发送到该库。

## 特点

### 基本

如果你编写的代码块如下所示，

````
```dirtree
- /components
	- App.tsx
	- App.css
- config.json
- /utils
	- converter.ts
	- parser.ts
```
````

它将被渲染为以下形式，

```
├─ /components
│　├─ App.tsx
│　└─ App.css
├─ config.json
└─ /utils
　　├─ converter.ts
　　└─ parser.ts
```

### 其他

#### 顺序列表

```
- a
  - b
  - c
- d

- 1
  - 2
    - 3
      - 4
```

```
├─ a
│　├─ b
│　└─ c
├─ d
└─ 1
　　└─ 2
　　　　└─ 3
　　　　　　└─ 4
```

#### 另一个元素插入其中

```
- a
  - b
  - c
- d

一些文本

- 1
  - 2
    - 3
      - 4
```

```
├─ a
│　├─ b
│　└─ c
└─ d

└─ 1
　　└─ 2
　　　　└─ 3
　　　　　　└─ 4
```

## 设置

请参阅 [选项描述](https://github.com/k4a-l/dirtreeist#description-of-options)。
