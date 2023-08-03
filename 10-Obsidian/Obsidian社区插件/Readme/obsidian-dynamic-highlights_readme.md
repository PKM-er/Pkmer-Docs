---
uid: 2023080322173300
title: Obsidian 插件：【Readme】Dynamic Highlights
tags: ['obsidian插件', 'readme']
description: 根据光标选择或搜索查询动态突出显示文本，支持完整的正则表达式、移动端和实时预览。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Dynamic Highlights

> [!Note] 插件名片
> - 插件名称：Dynamic Highlights
> - 插件作者：nothingislost
> - 插件说明：根据光标选择或搜索查询动态突出显示文本，支持完整的正则表达式、移动端和实时预览。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/nothingislost/obsidian-dynamic-highlights)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-dynamic-highlights)

## 概述

根据光标选择或搜索查询动态突出显示文本，支持完整的正则表达式、移动端和实时预览。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/nothingislost/obsidian-dynamic-highlights/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-dynamic-highlights]] 插件的自述翻译


动态高亮

一款基于选择或搜索查询动态高亮文本的 Obsidian 插件。

该插件目前仅适用于源代码或实时预览编辑器模式。暂时不会影响阅读模式或传统编辑器。

### 选择高亮

如果没有活动选择，则会高亮显示当前光标位置下的单词的所有出现次数
- 单词匹配不区分大小写
- 当前光标下的单词将用 `.cm-current-word` 标记
- 在文档的其他位置找到的当前单词的出现次数将用 `cm-matched-word` 标记
- 所有出现次数将接收 `data-contents` 数据属性，该属性将保存当前单词的值

如果有活动选择，则会高亮显示选择内的所有文本的所有出现次数。
- 字符串匹配不区分大小写
- 默认情况下，当前选择的字符串将用 `.cm-selection` 标记
- 在文档的其他位置找到的当前选择的字符串的出现次数将用 `cm-matched-string` 标记
- 所有匹配项将接收 `data-contents` 数据属性，该属性将保存所选字符串的值

### 持久高亮

通过定义搜索查询并关联CSS类名和颜色，可以创建持久高亮。一旦定义，任何与搜索查询匹配的字符串都将被标记为关联的CSS类，并将获得与所选颜色相匹配的背景颜色。

搜索查询可以使用正则表达式编写，只要为查询切换正则选项即可。

只要类名是唯一的，您可以定义任意数量的唯一高亮器。当创建大量复杂的正则表达式查询时，性能可能会受到影响，因此请注意您的正则表达式复杂性。

您可以使用插件设置页面右上角的“导入”按钮导入这些示例。

##### 可视化代码检查
突出显示双空格、空列表标记、双列表标记、前导空格和尾随空格。

```json
{
  "Mini-Linting": {
    "class": "Mini-Linting",
    "color": "#A70F0F38",
    "regex": true,
    "query": " {2,}(?!\\|| |$)|- - |^\\s*- \\n|^ +(?![0-9-`])",
    "mark": [
      "match"
    ],
    "css": ".cm-line .Mini-Linting {\n  background: none;\n}\n\n.cm-line:not(.cm-active) .Mini-Linting {\n  outline: 1px solid var(--text-error);\n}"
  },
}
```

```json
{
  "填充词": {
    "class": "填充词",
    "color": "#2D801838",
    "regex": true,
    "query": "\\b([Aa] bit|[Aa]bsolutely|[Aa]ctually|[Aa]nd all that|[Aa]nd so forth|[Aa]nyway|[Bb]asically|[Cc]ertainly|[Cc]learly|[Cc]ompletely|[Dd]efinitely|[Ee]ffectively|[Ee]ntirely|[Ee]ssentially|[Ee]vidently|[Ee]xtremely|[Ff]airly|[Ff]rankly|[Ff]requently|[Gg]enerally|[Hh]opefully|[Kk]ind of|[Ll]argely|[Ll]iterally|[Mm]ore or less|[Mm]ostly|[Oo]ccasionally|[Oo]ften|[Oo]verall|[Pp]articularly|[Pp]erhaps|[Pp]ossibly|[Pp]ractically|[Pp]recisely|[Pp]resumably|[Pp]retty|[Pp]rimarily|[Pp]robably|[Pp]urely|[Qq]uite|[Rr]arely|[Rr]ather|[Rr]eally|[Rr]elatively|[Ss]eriously|[Ss]ignificantly|[Ss]imply|[Ss]lightly|[Ss]omehow|[Ss]ort of|[Ss]pecifically|[Ss]trongly|[Ss]upposedly|[Ss]urely|[Tt]he fact that|[Tt]otally|[Tt]ruly|[Tt]ypically|[Uu]ltimately|[Uu]sually|[Vv]ery|[Vv]irtually|[Ww]idely)\\b",
    "mark": [
      "match"
    ],
    "css": ".cm-line .填充词{\n\ttext-decoration: line-through;\n\tbackground: none;\n\tcolor: var(--text-muted);\n}\n\n/* where to disable */\n.HyperMD-quote.cm-line .填充词,\n.pdf-annotations .cm-line .填充词 {\n\ttext-decoration: none;\n\tcolor: unset;\n}"
  }
}
```

##### 在Pandoc导出中突出显示自定义样式（`:::`）

```json
{
  "Pandoc-Syntax": {
    "class": "Pandoc-Syntax",
    "color": "#77787C4A",
    "regex": true,
    "query": "::: \\{.*?\\}[\\s\\S]*?:::",
    "mark": [
      "match",
      "group"
    ],
    "css": ""
  }
}
```

### 设置

延迟在移动光标后应用高亮之前。

#### 忽略的单词

一个逗号分隔的单词列表，这些单词不会被突出显示。

默认列表可以在这里找到：https://gist.github.com/sebleier/554280

### 限制

- 目前在阅读/预览模式下不支持动态高亮。
- 只有包含3个或更多字符的字符串才会在选择高亮模式下被突出显示。

### 致谢
感谢@chrisgrieser，也就是@pseudometa，提供了插件的想法和反馈。
感谢@chetachiezikeuzor提供的插件设置UI代码，灵感来自https://github.com/chetachiezikeuzor/highlightr-Plugin/。



