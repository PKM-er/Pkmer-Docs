---
uid: 20230428105320
title: Obsidian Dynamic ToC 为你的笔记创建目录
description: 
author: 
type: other
draft: false
editable: false
modified: 20230428142344
public: yes
---

# Obsidian Dynamic ToC 为你的笔记创建目录

## 概述

这个插件帮助你在笔记中生成对应的目录，该目录是动态目录，随着你在笔记中书写不同的标题等级，会自动进行变化。

> [!Note] 插件名片
> - 插件名称：Obsidian Dynamic ToC
> - 插件作者：Aidurber
> - 插件说明：帮助你在笔记中生成对应的目录
> - 插件项目地址：[点我跳转](https://github.com/Aidurber/obsidian-plugin-dynamic-toc)
> - 优点：自动将你新输入的标题，整合岛目录中

>[!Warning] 注意
>- 该插件的原作者已经在 2022 年 8 月 13 停止了对该插件的维护，所以可能会对未来版本的 Obsidian 出现兼容或其他问题。如果你十分在意这点，可以查看这个插件做为代替 [[floating-toc]]
>- 该插件下述功能，在 Obsidian 1.1.16 上运行稳定。

## 效果&特性

![image.png](https://s1.vika.cn/space/2023/04/28/c45108b683b34eeaaa2e0d3dbbf8aea1)

## 使用方法

### 使用目录的方法

- `[toc]`
- `[TOC]`
- `{{toc}}`
- `[[_TOC_]]`
- `[/toc/]`

### 目录显示深度控制

通过 `min_depth` `max_depth` 来控制目录中显示层级的深度。

```语法
min_depth: number (default: 2)
max_depth: number (default: 6)
```

### 控制目录显示名称

- 如果不设置，则不显示对应目录名称，仅显示目录内容
- 自定义目录名称的语法录下：

```语法
title: "## Table of Contents"
```

### 多种目录样式

插件提供了三种不同样式风格目录

- 圆点目录，也可以成为默认样式
- 语法：

````YAML
```toc
style: bullet
```
````

![image.png](https://s1.vika.cn/space/2023/04/28/07c572f8520e4772aa453d79e6469b62)

- 数字编号目录
- 语法：

````YAML
```toc
style: number
```
````

- 样式如图：
![image.png](https://s1.vika.cn/space/2023/04/28/de17372e04924ca28333b8cf7444a6a4)

- 标签/面包屑模式
- 语法：

````语法
```toc
style: inline
```
````

- 样式如图：
![image.png](https://s1.vika.cn/space/2023/04/28/a40ad8f81a4e48c28809f4809c6ff73e)
- 混合风格：你可以在生成的多级目录中使用不同的编号风格。比如数字和圆点混用
- 语法：

````语法
```toc
varied_style: boolean
```
````

- 样式如图：
![image.png](https://s1.vika.cn/space/2023/04/28/f729724df3244dd38cacc0a58946fb97)

![image.png](https://s1.vika.cn/space/2023/04/28/d3d6dddc287840e98bc4c1515c933aab)

### 需要注意的特殊情况

>[!Tips] 提示
>这个插件只能解析标准的 Markdown 语法标题，并提供有限的样式，可能无法适配全部的主题样式。

以下是标题深度不一致的示例。而不是 4 级标题，应该是 3 级标题。

```Markdown
## Level 2

#### Level 4
```

以下是一致的标题深度的示例。在 2 级前进之后，下一个级别是 3 级标题。

```Markdown
## Level 2

### Level 3
```

````YAML 语法
```toc
style: bullet | number | inline (default: bullet)
title: string (default: undefined)
allow_inconsistent_headings: boolean (default: false)
delimiter: string (default: |)
varied_style: boolean (default: false)
```
````

```toc
title: "## Table of Contents"
```