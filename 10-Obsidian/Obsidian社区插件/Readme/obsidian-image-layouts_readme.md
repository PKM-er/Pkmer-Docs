---
uid: 2023080322201611
title: Obsidian 插件：【Readme】Image Layouts
tags: ['obsidian插件', 'readme']
description: 在您的笔记中添加美丽的图像布局
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Image Layouts

> [!Note] 插件名片
> - 插件名称：Image Layouts
> - 插件作者：Luke Chadwick
> - 插件说明：在您的笔记中添加美丽的图像布局
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/vertis/obsidian-image-layouts)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-image-layouts)

## 概述

在您的笔记中添加美丽的图像布局



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/vertis/obsidian-image-layouts/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-image-layouts]] 插件的自述翻译


# Obsidian 图片布局

我希望能够以一种“美丽”的方式在 Obsidian 笔记中布置图片。这是我第一次尝试。它还有些不完善，因为它还很新，但我希望它在展示图片密集的笔记时有用。我希望能够通过视觉方式讲述故事，这是一个很好的第一步。

## 用法

为了获取图像布局，请使用\`\`\`后跟您想要的布局，例如\`\`\`image-layout-a

图像可以以wikilink格式`![[imagename]]`，这样它将从本地vault加载，或者以`![](url)`格式，这样它将从远程加载。

图像的数量因布局而异。如果您没有足够的图像，它将显示一个占位符。如果您有太多图像，它们将被隐藏。

## 路线图

当我有时间时，我希望添加以下功能：

- 在图片上叠加文字
- 图片标题
- 通用图库，支持浏览照片
- 拖放支持
- 可视化选择空布局

## 可用布局

以下是可用的布局。如果您能想到其他可能包含的布局，请随时提出建议（或提出PR）。

### image-layout-a

    ```image-layout-a
    ![](https://images.unsplash.com/photo-1543726969-a1da85a6d334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3636&q=80)
    ![](https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN0b3J5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60)
    ```

![](docs/layout-a.png)

### image-layout-b

    ```image-layout-b
    ![](https://images.unsplash.com/photo-1452065656801-6c60b6e7cbc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3174&q=80)
    ![](https://images.unsplash.com/photo-1592634244339-809d45f1dd25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHNhaWxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60)
    ```

![](docs/layout-b.png)

### 图片布局-C

    ```image-layout-c
    ![](https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80)
    ![](https://images.unsplash.com/photo-1667778679906-ca90d133c0c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80)
    ```

![](docs/layout-c.png)

### image-layout-d

```image-layout-d
![](https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60)
![](https://images.unsplash.com/photo-1500313830540-7b6650a74fd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcmlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60)
![](https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3846&q=80)
```

![](docs/layout-d.png)

### image-layout-e

    ```image-layout-e
    ![](https://images.unsplash.com/photo-1667115309281-d6cd9ba57f62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80)
    ![](https://images.unsplash.com/photo-1617802690992-15d93263d3a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHZpcnR1YWwlMjByZWFsaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60)
    ![](https://images.unsplash.com/photo-1592477725143-2e57dc728f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3206&q=80)
    ```

![](docs/layout-e.png)

### image-layout-f

    ```image-layout-f
    ![](https://images.unsplash.com/photo-1554378739-200b04da4e8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGltZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=900&q=60)
    ![](https://images.unsplash.com/photo-1619167801419-bfeca51bdfba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2360&q=80)
    ![](https://images.unsplash.com/photo-1603574670812-d24560880210?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2360&q=80)
    ![](https://images.unsplash.com/photo-1610298324710-5a73230400c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFsbSUyMHRyZWV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60)
    ```

![](docs/layout-f.png)

### image-layout-g

    ```image-layout-g
    ![](https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80)
    ![](https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80)
    ![](https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3546&q=80)
    ![](https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3174&q=80)
    ```

![](docs/layout-g.png)

### image-layout-h

    ```image-layout-h
    ![](https://images.unsplash.com/photo-1608734265656-f035d3e7bcbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80)
    ![](https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1568&q=80)
    ![](https://images.unsplash.com/photo-1498757581981-8ddb3c0b9b07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80)
    ```

![](docs/layout-h.png)

### 图片布局-i

    ```image-layout-i
    ![](https://images.unsplash.com/photo-1493589976221-c2357c31ad77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80)
    ![](https://images.unsplash.com/photo-1557434440-d4d48e6578b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80)
    ![](https://images.unsplash.com/photo-1541956064527-8ec10ac76c31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFsbHxlbnwwfDF8MHx8&auto=format&fit=crop&w=900&q=60)
    ![](https://images.unsplash.com/photo-1522043436628-a4bd7867030b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdpbnRlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=900&q=60)
    ```

![](docs/layout-i.png)

砖砌布局的初步支持

### 砌体 2

    ```image-layout-masonry-2
    ![](https://images.unsplash.com/photo-1493589976221-c2357c31ad77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80)
    ![](https://images.unsplash.com/photo-1557434440-d4d48e6578b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80)
    ![](https://images.unsplash.com/photo-1541956064527-8ec10ac76c31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFsbHxlbnwwfDF8MHx8&auto=format&fit=crop&w=900&q=60)
    ![](https://images.unsplash.com/photo-1522043436628-a4bd7867030b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdpbnRlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=900&q=60)
    ![](https://images.unsplash.com/photo-1608734265656-f035d3e7bcbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80)
    ![](https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1568&q=80)
    ![](https://images.unsplash.com/photo-1498757581981-8ddb3c0b9b07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80)
    ![](https://images.unsplash.com/photo-1543726969-a1da85a6d334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3636&q=80)
    ![](https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN0b3J5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60)
    ```

![](docs/masonry-2.png)

### 砌体3

    ```image-layout-masonry-3
    ![](https://images.unsplash.com/photo-1493589976221-c2357c31ad77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80)
    ![](https://images.unsplash.com/photo-1557434440-d4d48e6578b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80)
    ![](https://images.unsplash.com/photo-1541956064527-8ec10ac76c31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFsbHxlbnwwfDF8MHx8&auto=format&fit=crop&w=900&q=60)
    ![](https://images.unsplash.com/photo-1522043436628-a4bd7867030b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdpbnRlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=900&q=60)
    ![](https://images.unsplash.com/photo-1608734265656-f035d3e7bcbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80)
    ![](https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1568&q=80)
    ![](https://images.unsplash.com/photo-1498757581981-8ddb3c0b9b07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80)
    ![](https://images.unsplash.com/photo-1543726969-a1da85a6d334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3636&q=80)
    ![](https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN0b3J5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60)
    ```

![](docs/masonry-3.png)

### Masonry 4

    ```image-layout-masonry-4
    ![](https://images.unsplash.com/photo-1493589976221-c2357c31ad77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80)
    ![](https://images.unsplash.com/photo-1557434440-d4d48e6578b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80)
    ![](https://images.unsplash.com/photo-1541956064527-8ec10ac76c31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFsbHxlbnwwfDF8MHx8&auto=format&fit=crop&w=900&q=60)
    ![](https://images.unsplash.com/photo-1522043436628-a4bd7867030b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdpbnRlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=900&q=60)
    ![](https://images.unsplash.com/photo-1608734265656-f035d3e7bcbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80)
    ![](https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1568&q=80)
    ![](https://images.unsplash.com/photo-1498757581981-8ddb3c0b9b07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80)
    ![](https://images.unsplash.com/photo-1543726969-a1da85a6d334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3636&q=80)
    ![](https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN0b3J5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60)
    ```

![](docs/masonry-4.png)

### Masonry 5

    ```image-layout-masonry-5
    ![](https://images.unsplash.com/photo-1493589976221-c2357c31ad77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80)
    ![](https://images.unsplash.com/photo-1557434440-d4d48e6578b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80)
    ![](https://images.unsplash.com/photo-1541956064527-8ec10ac76c31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFsbHxlbnwwfDF8MHx8&auto=format&fit=crop&w=900&q=60)
    ![](https://images.unsplash.com/photo-1522043436628-a4bd7867030b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdpbnRlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=900&q=60)
    ![](https://images.unsplash.com/photo-1608734265656-f035d3e7bcbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80)
    ![](https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1568&q=80)
    ![](https://images.unsplash.com/photo-1498757581981-8ddb3c0b9b07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80)
    ![](https://images.unsplash.com/photo-1543726969-a1da85a6d334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3636&q=80)
    ![](https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN0b3J5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60)
    ```

![](docs/masonry-5.png)

### 砌体 6

    ```image-layout-masonry-6
    ![](https://images.unsplash.com/photo-1493589976221-c2357c31ad77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80)
    ![](https://images.unsplash.com/photo-1557434440-d4d48e6578b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80)
    ![](https://images.unsplash.com/photo-1541956064527-8ec10ac76c31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFsbHxlbnwwfDF8MHx8&auto=format&fit=crop&w=900&q=60)
    ![](https://images.unsplash.com/photo-1522043436628-a4bd7867030b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdpbnRlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=900&q=60)
    ![](https://images.unsplash.com/photo-1608734265656-f035d3e7bcbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80)
    ![](https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80)
    ![](https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80)
    ![](https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3546&q=80)
    ![](https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3174&q=80)
    ![](https://images.unsplash.com/photo-1554378739-200b04da4e8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGltZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=900&q=60)
    ![](https://images.unsplash.com/photo-1619167801419-bfeca51bdfba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2360&q=80)
    ![](https://images.unsplash.com/photo-1603574670812-d24560880210?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2360&q=80)
    ![](https://images.unsplash.com/photo-1610298324710-5a73230400c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFsbSUyMHRyZWV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60)
    ![](https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1568&q=80)
    ![](https://images.unsplash.com/photo-1498757581981-8ddb3c0b9b07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80)
    ![](https://images.unsplash.com/photo-1543726969-a1da85a6d334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3636&q=80)
    ![](https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN0b3J5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60)
    ```

![](docs/masonry-6.png)



