---
uid: 20230516224434
title: Obsidian 插件：Meta Bind Plugin 让你的笔记具有交互性
tags: [Obsidian, 插件, metadata, 交互, 效率, 神奇]
description: Obsidian 插件：Meta Bind Plugin 让你的笔记具有交互性
author: OS
type: other
draft: false
editable: false
modified: 20230603020347
---

# Obsidian 插件：Meta Bind Plugin 让你的笔记具有交互性

## 概述

还记得我们说的 frontmatter，做为笔记的前页，或者叫页头，他应该能承载帮我快速概览笔记概况的内容。但当我们的笔记是研究性质，需要经常更新里面的数据，或者修改里面的一些重要细节时，每次返回到 frontmatter 一点点维护，显得有些低效。

那么有没有一种方法能够让这些变动元素，快速同步到 frontmatter 又能让我们在笔记中轻松维护呢？Meta Bind Plugin 就是为了实现这个目标，可以在笔记中创建像下拉框等控件，并当下拉框被勾选时改变一个元数据字段，例如完成时设为已完成。或者在你的电影笔记中创建一个滑块，它可以与一个名为评分的元数据字段同步。

> [!Note] 插件名片
> - 插件名称：Meta Bind Plugin
> - 插件作者：Moritz Jung
> - 插件说明：让你的笔记具有交互性，通过各种控件修改笔记信息
> - 插件项目地址：[点我跳转](https://github.com/mProjectsCode/obsidian-meta-bind-plugin)

## 效果&特性

## 使用

- 通过插件的语法格式，可以生成可交互的控件，比如单选、多选、进度条、文本输入域等。你不用去学习复杂的 dataview 插件了，这个插件直接集成了一些简单的控件而且可以活用到很多地方。
- 这些控件在阅读模式和实时编辑模式时可以图形化操作的。
- 操作的结果和修改的数值，会直接反馈到笔记的 frontmatter 区域，配合我们之前介绍过的 [[obsidian-metatable]] 插件优化 frontmatter 区域，展示效果会更好。

### 进度条使用

当我想要统计一个笔记中某件事情的进度，比如对应今天的人中是否完成了我的运动计划。

- 使用方法：

````YAML
```meta-bind
INPUT[slider(addLabels, minValue(1), maxValue(10)):slider1]
```
````

- `INPUT[slider`：表示了你选择控件类型是进度条形式
- `addLables`：表示需要在进度条首尾增加最大值最小值文案
- `minValue(1)，maxValue(10)`：表示进度条的最小值和最大值，且只能是整数数字。
- `:slider1`：表示需要写入到 frontmatter 的参数名，支持中文和英文，比如你可以填写读书进度。
- 展示效果：

![image.png](https://cdn.pkmer.cn/images/20230517112037.png!pkmer)

### 时间和日期

时间和日期是我们笔记，日记和生活中经常要用到的元素，那么对于有时候需要变更的内容，或者是频繁修改的内容，图形化方式或许更加方便。比如一个工程最终的完成时间，或者里程碑时间，需要变动时。

#### 日期

- 使用方法：

````YAML
```meta-bind
INPUT[date(showcase):date1]
```
````

- 展示效果
![image.png](https://cdn.pkmer.cn/images/20230517122033.png!pkmer)

#### 万年历

- 使用方法：

````YAML
```meta-bind
INPUT[date_picker(showcase):date2]
```
````

- 展示效果
![image.png](https://cdn.pkmer.cn/images/20230517122359.png!pkmer)

#### 时间选择器

- 选择使用方法

````YAML
```meta-bind
INPUT[time(showcase):time]
```
````

![image.png](https://cdn.pkmer.cn/images/20230517122454.png!pkmer)

### 单选的使用

在笔记中生成单选，这个单选，不光是可以在本页面生效，还可以修改其他页面的结果。比如你想给自己做一份考题，那么可以利用这个特性，将档案快速同步到另外一个笔记中，或者你在做教案的时候，快速输出整理一份单选题结果。

- 使用方法：

````YAML
```meta-bind
INPUT[select(
title(单选题：选择下列答案中的一个),
option(option a),
option(option b),
option(option c),
option(option d)
):select]
```
````

- 点击具体选项，即为选中，再次点击变为取消选择
- `INPUT[select`：表示了你选择控件类型是单选形式
- `title(单选题：选择下列答案中的一个)`：设置单选的标题，你可以设置你自己需要的题目，支持多语言；
- `option(option a)`：表示单选项的数量和对应的值，写多少就是多少个单选项。
- `:select`：直接修改当前笔记的参数，参数名 select，当然你可以换成其他的。
- `:other note#select`：修改具体笔记（比如：other note）下面的某个具体参数名（比如：select）
- 展示效果：

![image.png](https://cdn.pkmer.cn/images/20230517120804.png!pkmer)

### 多选

同上面单选，人生中有单选题，自然也会有多选题，那么你需要了解下面的使用方式。

- 使用方法：

````YAML
```meta-bind
INPUT[multi_select(
title(多选题：选择下列答案中的一个或多个),
option(option a),
option(option b),
option(option c),
option(option d)
):other note#multi-select]
```
````

- 点击具体选项，即为选中，再次点击变为取消选择
- `INPUT[multi_select`：表示了你选择控件类型是多选形式
- `title(多选题：选择下列答案中的一个或多个),`：设置多选的标题，你可以设置你自己需要的题目，支持多语言；
- `option(option a)`：表示单选项的数量和对应的值，写多少就是多少个选项。
- `:select`：直接修改当前笔记的参数，参数名 select，当然你可以换成其他的。
- `:other note#select`：修改具体笔记（比如：other note）下面的某个具体参数名（比如：select）：
- 展示效果：
![image.png](https://cdn.pkmer.cn/images/20230517111559.png!pkmer)

### 文本域

有时候我们需要在一段文本里面记录一些关键信息，这个宽肩信息还不确定，但是需要多个地方引用，那么你就可以采用这样的方法。

- 使用方法

````YAML
```meta-bind
INPUT[text:nested["object"]]
```
````

- `INPUT[text`：表示了你选择控件类型是文本域
- `nested["object"]`：表示你建立的这个文本域，会存储在 nested 参数的 object 子参数下，如果你有多个文本域想要设置，也可以自己设定的不同的名称。
- 展示效果
比如我把一个公式放在这里，当要讲解这个公式特点的时候，我去修改对应的位置，那么所有位置中内容只需要修改一次，其他地方就都会跟随变化。
![image.png](https://cdn.pkmer.cn/images/20230517114259.png!pkmer)

### 文本框

实际引用中往往我们修改的东西，不是一个简单的句子，单词词组，或者公式那么简短的内容。而是一段较长的文本或者其他内容，文本框模式就是为了这个目的。

- 使用方法：

````YAML
```meta-bind
INPUT[text_area(
title(text area),
class(meta-bind-full-width),
class(meta-bind-high)
):note]
```
````

- `INPUT[text_area`：表示了你选择控件类型是文本域
- `title(text area),`：用于表示你这段文本内容的标题
- `nested["object"]`：表示你建立的这个文本域，会存储在 nested 参数的 object 子参数下，如果你有多个文本域想要设置，也可以自己设定的不同的名称。
- `:note`：直接修改当前笔记的参数，参数名 note，当然你可以换成其他的。
- `:other note#note`：修改具体笔记（比如：other note）下面的某个具体参数名（比如：note）：
- 展示效果：
![image.png](https://cdn.pkmer.cn/images/20230517111704.png!pkmer)

### 编辑器

比文本框更进一步，支持简单的 markdown 语法甚至是内链，有了这个方式，你可以制作一个自己的灵感手机框，直接写入到具体的笔记中。

````YAML
```meta-bind
INPUT[editor(showcase):editor]
```
````

- 展示效果
![image.png](https://cdn.pkmer.cn/images/20230517122855.png!pkmer)

#### 开关

有时候我们会遇到是否这样逻辑，比如这篇内容是否已经检查过了，或者你有一个复杂的任务清单，放在不同笔记中，那么你可以利用这个特性，在不同笔记中，设置好开关，并在一个总览笔记中统一查看，是否每篇笔记中的任务都完成了。

- 使用方法

````YAML
```meta-bind
INPUT[toggle(showcase):toggle]
```
````

- 展示效果

![image.png](https://cdn.pkmer.cn/images/20230517123256.png!pkmer)

> [!Tip] 推荐阅读
> - [[frontmatter-alias-display]]：让你的笔记名下直接看到别名
> - [[obsidian-metatable]]：美化 frontmatter 的显示样式
> - [[obsidian-view-mode-by-frontmatter]]：自定义每个笔记的视图
> - [[metaedit]]：帮你快捷管理 Obsidian 的元数据，可以预设 YAML 区域的值
> - [[obsidian-meta-bind-plugin]]：让你的笔记具有交互性，通过各种控件修改笔记信息