---
uid: 2023120719440826
title: Obsidian 插件：【Readme】TagFolder
tags: ['文件管理', '标签', 'obsidian插件', 'readme']
description: 将标签变为文件夹形式，管理你的笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】TagFolder

> [!Note] 插件名片
> - 插件名称：TagFolder
> - 插件作者：vorotamoroz
> - 插件说明：将标签变为文件夹形式，管理你的笔记。
> - 插件分类：[' 文件管理 ', ' 标签 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/vrtmrz/obsidian-tagfolder)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-tagfolder)

## 概述

将标签变为文件夹形式，管理你的笔记。

![TagFolder](https://cdn.pkmer.cn/covers/obsidian-tagfolder.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/vrtmrz/obsidian-tagfolder/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-tagfolder]] 插件的自述翻译

## 标签文件夹

这是一个将您的标签显示为文件夹的插件。

![截图](https://cdn.pkmer.cn/covers/obsidian-tagfolder_2_0.png!pkmer)

### 如何使用

安装这个插件，按下 `Ctrl+p`，然后选择 "Show Tag Folder"。

### 行为

该插件通过标签排列创建一棵树。

就像这样，

### 简单案例

如果你有文档，

```
Apple : #食物 #红色 #甜
Pear  : #食物 #绿色 #甜
Tuna  : #食物 #红色
```

![](https://cdn.pkmer.cn/covers/obsidian-tagfolder_2_1.png!pkmer)

...还有更多显示。

### 尊重嵌套标签的情况

嵌套标签对于标签文件夹非常有效。

标签文件夹尊重嵌套标签并创建专用的层次结构。嵌套的子标签不会泄漏到父标签之外。

```
标签文件夹自述：#dev #readme #2021/12/10 #status/draft
技术信息：#dev #note #2021/12/09 #status/draft
自托管实时同步自述：#dev #readme #2021/12/06 #status/proofread
旧笔记：#dev #readme #2021/12/10 #status/abandoned
```

#### 状态的标签层次结构

![](https://cdn.pkmer.cn/covers/obsidian-tagfolder_2_2.png!pkmer)

#### 日期的标签层次结构

![](https://cdn.pkmer.cn/covers/obsidian-tagfolder_2_3.png!pkmer)

#### 搜索标签

您可以搜索标签。就像这样：

```
甜 -红 | 食物 -甜
```

使用此过滤器时，此插件仅显示“梨”（甜但不是红色）和“金枪鱼”（食物但不是甜的）。

### 设置

行为

始终打开

将 TagFolder 放置在左侧窗格，并在每次启动 Obsidian 时激活它。

使用固定标签

如果我们启用此选项，我们可以固定标签。

当启用此功能时，固定信息将保存在下一个配置中设置的文件中。

固定标签按照 `taginfo.md` 的 `frontmatter` 中的 `key` 进行排序。

##### 标签信息文件

我们可以更改保存标签信息的文件名。

这也可以通过上下文菜单进行配置。

| 项目     | 值的含义                                                                                          |
| -------- | ------------------------------------------------------------------------------------------------- |
| key      | 如果存在，则标签已固定。                                                                          |
| mark     | 代替 `📌` 显示的标签。                                                                             |
| alt      | 标签将显示为此值。但它们不会合并到同一个标签中。不需要 `#`。                                       |
| redirect | 标签将被重定向到配置的标签，并进行合并。不需要 `#`。                                               |

禁用缩小范围

TagFolder 通过收集在同一笔记中使用的标签组合来创建文件夹结构，以便我们更容易找到笔记。

当启用此功能时，收集到的组合将不再按照我们组织的方式进行结构化显示。

#### 文件

显示方法

您可以配置条目的显示方式。

##### 订购方式

您可以按以下方式订购项目：

- 按名称显示
- 按文件名
- 按修改时间
- 按文件的完整路径

##### 使用标题

当您启用此选项时，将显示正文或一级标题中的值，而不是 `NAME`。

##### 前置路径

从前置数据中检索标题的点路径。

#### 标签

##### 订购方式

您可以按以下方式订购标签：

- 文件名
- 项目数量

使用虚拟标签

当我们启用此功能时，我们的笔记将自动标记为它们的新鲜度。

| 图标 | 编辑时间 ...            |
| ---- | --------------------- |
| 🕐    | 一小时内        |
| 📖    | 6 小时内        |
| 📗    | 3 天内         |
| 📚    | 7 天内         |
| 🗄    | 7 天前或更早 |

#### 动作

点击标签时，我们可以在 TagFolder 中搜索标签，而不是打开默认的搜索窗格。

使用控制键和 Shift 键，我们可以从搜索条件中删除标签，或者将其排除在外。

启用后，文件将显示在一个单独的窗格中。

#### 安排

##### 隐藏项目

配置隐藏项目。

- 不隐藏任何内容
- 仅隐藏嵌套标签的中间项
- 隐藏所有中间项

如果您有以下项目：

```
2021-11-01 : #daily/2021/11 #status/summarized
2021-11-02 : #daily/2021/11 #status/summarized
2021-11-03 : #daily/2021/11 #status/jot
2021-12-01 : #daily/2021/12 #status/jot
```

此设置的影响如下所示。

- 不隐藏任何内容

```
daily
    → 2021
        → 11
            status
                → jot
                    2021-11-03
                → summarized
                    2021-11-01
                    2021-11-02
                2021-11-01
                2021-11-02
                2021-11-03
            2021-11-01
            2021-11-02
            2021-11-03
        2021-11-01
        2021-11-02
        2021-11-03
        2021-12-01
        → 12
            :
    2021-11-01
    2021-11-02
    2021-11-03
    2021-12-01
```

- 仅隐藏嵌套标签的中间项
仅隐藏嵌套标签的中间项，因此仅在嵌套标签的最后或中断处显示项目。

```
daily
    → 2021
        → 11
            status
                → jot
                    2021-11-03
                → summarized
                    2021-11-01
                    2021-11-02
            2021-11-01
            2021-11-02
            2021-11-03
        → 12
            :
```

- 隐藏所有中间项
隐藏所有中间项，因此仅显示最深层的项目。

```
daily
    → 2021
        → 11
            status
                → jot
                    2021-11-03
                → summarized
                    2021-11-01
                    2021-11-02
        → 12
            :
```

合并冗余组合

当启用此功能时，如果没有中间项，a/b 和 b/a 将合并为 a/b。

不要简化空文件夹

保留空文件夹，即使它们可以被简化。

不要将嵌套标签视为独立的级别

如果您启用此选项，每个嵌套标签都会被拆分为普通标签。

`#dev/TagFolder` 将被视为 `#dev` 和 `#TagFolder`。

##### 减少嵌套标签中的重复父级

如果我们有一个带有嵌套标签的文档（例如，`example note`），这些标签具有相同的父级，比如 `#topic/calculus`，`#topic/electromagnetics`：

- 禁用

```
topic
     - > calculus
         topic
               - > electromagnetics
                   example note
         example note 
```

- 启用

```
topic
     - > calculus
          - > electromagnetics
              example note
         example note 
```

#### 过滤器

##### 目标文件夹

如果我们设置了这个选项，插件将只会针对其中的文件进行操作。

忽略特定文件夹中的文档。

##### 忽略备注标签

如果备注具有在此处设置的标签，则将视为不存在该备注。

忽略标签

在这里设置的标签将被视为不存在。

##### 存档标签