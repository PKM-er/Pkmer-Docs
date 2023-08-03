---
uid: 20230803204021
title: Obsidian 插件：【Readme】Footnote Shortcut
tags: ['编辑工具', '快捷键', '效率', 'obsidian插件', 'readme']
description: 方便你增加脚注更加方便，可以通过快捷键快速在脚注和脚注解释内容之间快速切换。
author: Alexis Rondeau, Micha Brugger
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Footnote Shortcut

> [!Note] 插件名片
> - 插件名称：Footnote Shortcut
> - 插件作者：Alexis Rondeau, Micha Brugger
> - 插件说明：方便你增加脚注更加方便，可以通过快捷键快速在脚注和脚注解释内容之间快速切换。
> - 插件分类：['编辑工具', '快捷键', '效率', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/MichaBrugger/obsidian-footnotes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-footnotes)

## 概述

方便你增加脚注更加方便，可以通过快捷键快速在脚注和脚注解释内容之间快速切换。

![Footnote Shortcut](https://cdn.pkmer.cn/covers/obsidian-footnotes.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/MichaBrugger/obsidian-footnotes/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-footnotes]] 插件的自述翻译


# Obsidian脚注插件
![Obsidian下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%27obsidian-footnotes%27%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json) [![活跃开发](https://img.shields.io/badge/Maintenance%20Level-Actively%20Developed-brightgreen.svg)](https://gist.github.com/cheerfulstoic/d107229326a01ff0f333a1d3476e068d) ![发布版本](https://img.shields.io/github/v/release/MichaBrugger/obsidian-footnotes)

此快捷键可让您：

- 在文本中插入一个新的编号脚注标记（例如`[^1]`），并自动递增索引
- 在文本中插入一个新的命名脚注标记（例如`[^Citation]`）
- 在文本底部添加相应的脚注详细信息（例如`[^1]: `或`[^Citation]: `）
- 将光标放置在您可以快速填写详细信息的位置
- 从脚注跳转到脚注详细信息
- 从脚注详细信息返回到脚注

![概览](https://user-images.githubusercontent.com/68677082/228686351-fe71a0ec-be56-4d70-93c1-01925dd6380f.gif)

## 重要提示：您必须设置脚注热键

安装并激活此插件后，您仍然需要设置您的热键。这很简单和快速：

`设置 -> 热键 -> 搜索"Footnote" -> 自定义命令 -> 您喜欢的热键`

我个人使用：
- <kbd>Alt</kbd>+<kbd>0</kbd> 作为我的自动编号脚注热键
- <kbd>Alt</kbd>+<kbd>-</kbd> 作为我的命名脚注热键

![热键](https://user-images.githubusercontent.com/68677082/228659877-8ea81271-37c4-4fdf-99de-1d4b6ca1c85f.png)

## 默认功能详细信息

### 编号脚注

场景：不存在之前的编号脚注（例如“[^1]”）：

- 假设我的光标在我想要存在编号脚注的位置（例如`Foo bar baz▊`）
- 当我按下“自动编号脚注热键”
- 那么一个新的脚注标记（例如`[^1]`）会插入到我的光标所在的位置（例如`Foo bar baz[^1]`）
- 并且一个新的脚注详细信息标记（例如`[^1]: `）会插入到文档的最后一行
- 并且我的光标现在被放置在详细信息标记的末尾（例如`[^1]: ▊`）

场景：存在之前的编号脚注（例如“[^1]”）：

- 假设我的文本中有一个或多个编号脚注
- 并且我的光标在我想要插入编号脚注的位置（例如`Foo bar[^1] baz▊`）
- 当我按下“自动编号脚注热键”
- 那么一个新的脚注标记将插入到我的光标所在的位置，具有下一个编号索引（例如`[^2]`）（例如`Foo bar[^1] baz[^2]`）
- 并且一个新的脚注详细信息标记（例如`[^2]: `）将插入到文档的最后一行
- 并且我的光标现在放置在详细标记的末尾（例如`[^2]: ▊`）

### 命名脚注

场景：添加一个命名的脚注：
- 假设我的光标在我想要存在命名脚注的位置（例如`Foo bar baz▊`）
- 当我按下`命名脚注热键`
- 那么一个空的脚注标记（例如`[^]`）会插入到我的光标周围（例如`Foo bar baz[^▊]`）
- 然后，我填写我想要的名称（例如`Foo bar baz[^customName]`）
- 当我再次按下`命名脚注热键`
- 一个匹配的脚注详细信息标记（例如`[^customName]: `）会插入到文档的最后一行
- 并且我的光标现在放置在详细标记的末尾（例如`[^customName]: ▊`）

### 通用

#### 场景：跳转到脚注详细信息
- 假设我在脚注详细信息行上（例如`[^1]: ▊`）
- 当我按下“自动编号脚注热键”或“命名脚注热键”
- 那么我的光标将被放置在文本中此脚注的*第一个*出现之后（例如`[^1]▊`）

#### 场景：跳转回脚注
- 假设我在文本中的脚注上方或旁边（例如`[^1]▊`）
- 当我按下“自动编号脚注热键”或“命名脚注热键”
- 那么我的光标将被放置在脚注右侧（例如`[^1]: ▊`）

### 已知限制或未经测试的场景

索引没有更新
在两个现有脚注之间插入新的自动编号脚注将插入下一个数字索引（例如`1, 3, 2`）。

它不会根据它们的自然顺序更新索引（例如`1, 2, 3`）。

```markdown
Example sentence[^1] with two▊ footnotes[^2] already.
  
[^1]: Foo
[^2]: Bar
```

插入后：

```markdown
Example sentence[^1] with two[^3] footnotes[^2] already.
  
[^1]: Foo
[^2]: Bar
[^3]: Baz
```

有关建议功能“自动重新索引脚注”，请参见下文。

## 未来可能的功能点子

### 建议使用现有的命名脚注
在添加新的命名脚注时，通过EditorSuggest弹出窗口提供现有脚注的建议。如果您想重复使用现有的脚注，您可以通过箭头键从建议中选择，以节省输入的时间。

**在Templater中的自动建议演示** ![Suggest](https://user-images.githubusercontent.com/68677082/228691255-f0d8b5ad-f98d-473a-8260-44919c117462.png)

### 自动重新索引编号的脚注
当您在一个或多个现有的编号脚注之间插入一个新的脚注时，重新索引和重新排序所有自动编号的脚注：

```markdown
已经有两个脚注[^1]的示例句子▊。
  
[^1]: Foo
[^2]: Bar
```

#### 基本场景
- 假设已经有两个编号的脚注
- 当我在这两个脚注之间输入一个新的编号脚注
- 那么新的脚注索引为"2"
- 并且之前的第二个脚注索引为"3"
- 并且新的脚注详细信息被插入为底部的第二个条目
- 并且底部的之前第二个脚注详细信息被更新为"3"
- 并且底部的之前第二个脚注详细信息被更新为第三个位置

```markdown
已经有两个脚注[^1]的例句[^2]。

[^1]: Foo
[^2]: Baz
[^3]: Bar▊
```

#### 要考虑的边缘情况（"如果...会怎样？"）

##### 如果...在第一个脚注之前插入新的脚注会怎样？
  ```markdown
  一些带有现有注释[^1]的句子
  
  [^1]: 详细信息
  ```

##### 如果...文本在多个地方有相同的脚注会怎样？
  ```markdown
  一些带有现有注释[^1]的句子，然后相同的▊脚注在后面再次出现[^1]。

  
  [^1]: 详细信息
  ```

##### 如果...脚注细节分散在文本中？
  ```markdown
  一些带有现有注释的句子[^1]一些更多的文本▊ 
  
  [^1]: 内联脚注细节
  
  另一部分文本▊
  ```

##### 如果...脚注的详细信息在底部是多行的呢？
  ```markdown
  一些带有现有注释[^1]的句子一些更多的文本▊ 
  
  [^1]: 跨越多行的详细信息
  ```

## 背景
该插件基于[jacob.4ristotle](https://forum.obsidian.md/u/jacob.4ristotle/summary)在["Footnote Shortcut"](https://forum.obsidian.md/t/footnote-shortcut/8872)主题中提出的伟大想法。

> **用例或问题：**
>
> 我使用Obsidian来做学校笔记、写论文等等，我发现自己经常需要添加脚注。目前，要添加一个新的脚注，我需要：
> - 滚动到底部检查我已经有多少脚注
> - 在笔记正文中输入[^n]，其中n是下一个数字
> - 移动到笔记末尾，再次输入[^n]，然后添加我的引用。
>
> **建议的解决方案：**
>
> 有一个快捷方式来自动化这些步骤会很方便。特别是，我设想这个快捷方式会：
> 使用尚未用于脚注的最小自然数n
> - 在插入点处添加`[^n]`
> - 在笔记末尾添加`[^n]: `，并将插入点移动到那里。



