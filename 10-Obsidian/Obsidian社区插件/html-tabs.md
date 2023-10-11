---
uid: 20231011111619
title: Obsidian 插件：HTML Tabs 在标题间自由跳转
tags: [关系图谱, 美化, obsidian插件]
description: 把 关系图谱 3D化，效果很绚丽
author: OS
type: basic
draft: false
editable: false
modified: 20231011164943
---

# Obsidian 插件：HTML Tabs 在标题间自由跳转

## 概述

可以轻松地将 HTML 中选项卡样式嵌入笔记中。

> [!Note] 插件名片
> - 插件名称：HTML Tabs
> - 插件作者：Patrick Tournet
> - 插件说明：在笔记中创建和渲染选项卡和标签面板
> - 插件分类：[' 标题 ', ' 效率 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/oin/obsidian-gotoheading)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gotoheading)

如果你对这个效果感兴趣，还可以查看这个插件 [[obsidian-code-tab]]

## 效果&特性

![image.png](https://cdn.pkmer.cn/images/20231011112609.png!pkmer)

## 使用

以包含 3 个选项卡的样式为例，需要通过特定语句生成，具体如下：

````语法
```tabs
---tab <label-of-first-tab>
<content-of-first-tab>
---tab <label-of-second-tab>
<content-of-second-tab>
---tab <label-of-third-tab>
<content-of-third-tab>
```
````

或者

```语法
~~~tabs
---tab <label-of-first-tab>
<content-of-first-tab>
---tab <label-of-second-tab>
<content-of-second-tab>
---tab <label-of-third-tab>
<content-of-third-tab>
~~~
```

选项卡的 `<label>` 是纯文本，不能包含 markdown 语法，而 `<content>` 可以使用完整的 Obsidian 语法。特别有可能嵌入另一个 callout 语法 `![[note -to-embed]]``) 或代码块。

### 自定义样式

目前，如果您想更改此插件生成选项卡外观，则必须使用 CSS 片段。

为此，首先需要在 snippets 目录中创建 html-tabs.css 文件。如果不知道它在硬盘驱动器上的位置，则可以在 Obsidian 设置中的外观页面底部找到它。

然后，可以在 styles.css 文件中定义的 html-tab* 类在插件目录中定义。