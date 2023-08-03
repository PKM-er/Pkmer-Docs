---
uid: 2023080322220643
title: Obsidian 插件：【Readme】Markdown Tree
tags: ['obsidian插件', 'readme']
description: 使用基于Markdown的代码风格，使用制表符、空格和换行符创建一个美观且直观的目录树。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Markdown Tree

> [!Note] 插件名片
> - 插件名称：Markdown Tree
> - 插件作者：carvah
> - 插件说明：使用基于Markdown的代码风格，使用制表符、空格和换行符创建一个美观且直观的目录树。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/carvah/markdown-tree-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?markdown-tree)

## 概述

使用基于Markdown的代码风格，使用制表符、空格和换行符创建一个美观且直观的目录树。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/carvah/markdown-tree-plugin/master/README.md)
> 

---

## Readme(翻译）

下面是 [[markdown-tree]] 插件的自述翻译


# Markdown Tree 插件

要使用 Markdown Tree 插件创建具有更具视觉吸引力的格式的目录树，请按照以下步骤进行操作：

1. 从根目录开始。
2. 使用空格或制表符进行缩进，表示嵌套目录。
3. 将文件直接放置在它们各自的目录下。

考虑以下目录结构：

```
root
    second
        third
            fourth
                file1.jpg
                file2.txt
                file3.pdf
```

要使用**Markdown Tree**插件将此结构转换为更漂亮的目录树，请使用以下输入：

``` 
```markdown-tree
root
    second
        third
            fourth
                file1.jpg
                file2.txt
                file3.pdf
```

渲染后的输出将为：

```plaintext
.
└── root
    └── second
        └── third
            └── fourth
                ├── file1.jpg
                ├── file2.txt
                └── file3.pdf
```

感谢https://gitlab.com/nfriend制作了最常用的目录插件，可以在https://tree.nathanfriend.io/上在线使用。



