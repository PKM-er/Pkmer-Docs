---
uid: 20230329145808
title: Obsidian 插件：Number Headings
description: 
tags: 
author: OS
type: other
draft: false
editable: false
modified: 20230507015054
public: yes
---

# Obsidian 插件：Number Headings

#标题 #排序 #Headings

功能：支持给各级正文标题自动编号，【1.1、1.2、······11.1.1、1.1.2】 以此类推

Tips：如果发现没有自动变更编号，可以使用保存快捷，保存当前笔记

> [!Note] 插件名片
> - 插件名称：Number Headings
> - 插件作者：onlyafly
> - 插件说明：给笔记中的标题自动编号。
> - 插件项目地址：[点我跳转](https://github.com/onlyafly/number-headings-obsidian)

## 效果

使用 **Number headings** 的命令或者开启自动编号后，我们就可以编辑文档了。无论你怎么编辑文档，它都会自动更新章节标题。

> [!Note]
> 如果发现没有刷新标题编号，可以稍等，或者手动保存文档，以触发标题编号的刷新

![Pasted image 20230120233859](https://cdn.pkmer.cn/images/d4d33e896b1006d15513725cab7fa095_MD5.png)

## 安装

1. 打开 社区插件市场
2. 搜索“Number Headings”
3. 点击下载，并在完成后启用

## 设置

安装完成以后，我们还需要对它进行设置，让它符合您的需求。**Number headings** 的设置界面如下图所示。

![Pasted image 20230120233246](https://cdn.pkmer.cn/images/9921c92fc0cb37c3fa38a7436aa21645_MD5.png)

可以设置的内容不是很多，笔者对 **Number headings** 的设置进行了解释。

### 设置选项

- Skip top heading level：是否跳过最高级标题，默认关闭。
    - 我自己的设置中跳过第一级（#），具体原因可以参见 [[文档的写作规范#标题]]
- First heading level：设定编号从第 X 级标题等级开始
    - 对应上面的选项，我自己设置的 1。默认为 1
- Start numbering at：编号从什么位置计数
    - 比如我设置为 1，那么编号，就是从 1.1 开始，以此类推。
- Maximum heading level：设定编号的最大标题等级
    - 默认  `6`，可不关注，因为 Markdown 也默认支持 6 级标题
- Style for level 1 headings：第一级标题编号样式
    - 默认是试用数字 1，可以根据自己参考的编写规范来自己定义
- Style for lower level headings (below level 1)：最低级标题编号样式
- Automatic numbering：是否自动编号
    - 默认开启，不建议大家关闭，关闭后需要手动触发才会刷新编号
- Separator style：分隔符样式
    - 默认使用 `.`（英文句号）
- Table of Contents Anchor：添加目录，带跳转（锚点）
    - 我自己使用的配置是 `^TOC`

## 使用方法

### 给标题添加编号

#### 方法一

1. 打开命令面板（键入 CMD + P 快速启动命令面板）。搜索 Number Headings
2. 开始输入其中一项操作的名称。见下图。3. 您还可以将命令分配给快捷键以便于使用。

#### 方法二

1. 在文档的 front matter (前页) 添加一行代码 1. 例如 number headings:first-level 1,max 6,1.1,auto,contents 'toc。

   ![Pasted image 20230120233657](https://cdn.pkmer.cn/images/40e7d86c10af5c9c198b3c9fb429b734_MD5.png)

   ![Pasted image 20230120233657](https://s1.vika.cn/space/2023/03/15/64eb9417d94648279368c16b74ef2b64)

### 去除标题编号

1. 打开命令面板（键入 CMD + P 快速启动命令面板）。搜索 Number Headings
2. 开始输入其中一项操作的名称。选择  `Number Headings: Remove numbering from all headings in document`

### 给不同笔记增加不同编号风格

除了默认的设置外，还可以为单页设置不同的方式。使用 frontmatter 的 yaml 控制，格式如下：

```YAML
number headings: first-level l, start-at 2, max 6, l.l, auto, contents ^toc
```