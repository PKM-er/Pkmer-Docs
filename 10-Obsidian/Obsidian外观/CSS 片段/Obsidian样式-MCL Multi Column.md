---
uid: 20231213101057
title: 通过 CSS 和Callout实现分栏样式 -MCL Multi Column
tags: [Obsidian, 多栏, 布局, callout]
description: 使用 CSS 方法和基本 callout 语法也可以实现多栏布局效果
author: Chenghuang
type: other
draft: false
editable: false
modified: 20231213152212
---

# 通过 CSS 和 Callout 实现分栏样式 -MCL Multi Column

使用 CSS 方法和基本 callout 语法也可以实现多栏布局效果

下载地址：[Releases · efemkay/obsidian-modular-css-layout (github.com)](https://github.com/efemkay/obsidian-modular-css-layout/releases)

官方文档：[efemkay.github.io/obsidian-modular-css-layout/multi-column/](https://efemkay.github.io/obsidian-modular-css-layout/multi-column/)

- 首先从下载页面下载最新版本 css 并启用之，至于如何启用 css，详见 [Obsidian 的 CSS 代码片段]( https://pkmer.cn/show/20230329145845 )
- 根据官方文档，该 css 可实现的效果有：
    - [[#基本分栏语法|callout或代码块分栏效果]]
    - [[#侧边批注语法|侧边批注效果]]
    - [[#无边框 callout 语法|无边框包裹多列表效果]]
    - [[#无序列表分栏语法|笔记或块层面的项目符号列表分栏效果]]
- 用户可通过 `style setting` 插件对部分内容进行自定义，也可通过一定手段使部分 css 在实时预览模式下生效，在此不做详述，详见官方文档

>[!note] 注意
> - 不要混淆 callout 类型（callout type）`e.g.>[!Summary]` 和 callout 元数据（callout metadata）`e.g.|wide-2`
> - 本文中基本代码块所举出的子 callout 类型如 `[!note]/[!warning]/[!summary]等` 仅为随机示例并非强制要求，可根据需求自由调整，至于 obsidian 默认支持的 callout 类型，详见 [Callouts - supported types - Obsidian Help](https://help.obsidian.md/Editing+and+formatting/Callouts#Supported%20types)
> - 官方文档说有部分效果除非进行特殊设定，否则不会在实时预览模式中显示，但笔者没有做特殊设定就复现了，由于笔者不使用实时预览模式，故请自行查阅官方文档

## 基本分栏语法

> [!example] 示例
> 该 css 的基本语法本质上就是将多个子 callout 嵌套在 `> [!multi-column]` 这个主 callout 下实现分栏效果，可在 `> [!multi-column]` 后加 `|center-fixed/right-fixed/left-fixed` 来控制居中或左右对齐
>**代码示例**
>
> ```
>> [!multi-column]
>>
>>> [!note] 第一栏标题
>>> 第一栏内容
>>
>>> [!warning] 第二栏标题
>>> 第二栏内容
>>
>>> [!summary] 第三栏标题
>>> 第三栏内容
>```

![MCL Multi Column图1.png](https://cdn.pkmer.cn/images/MCL%20Multi%20Column%E5%9B%BE1.png!pkmer)

---

> [!example] 示例
> 如需自定义分栏宽度，可在子 callout 类型后加 `|min-0` 以规定最小栏宽，或加 `|wide-2/wide-3/wide-4/wide-5` 设置默认栏宽（200px）2-5 倍不等的栏宽
> **代码示例**
>
>```
>> [!multi-column]
>>
>>> [!note|wide-3] 第一栏标题
>>> 第一栏内容
>>
>>> [!warning|wide-2] 第二栏标题
>>> 第二栏内容
>>
>>> [!summary|min-0] 第三栏标题
>>> 第三栏内容
>```

![MCL Multi Column图2.png](https://cdn.pkmer.cn/images/MCL%20Multi%20Column%E5%9B%BE2.png!pkmer)

## 侧边批注语法

>[!example] 示例
>如需利用 callout 实现类 word 侧边批注的效果，可在 callout 类型后加 `|left/right-small/medium/large`，其中 `left/right` 元数据控制批注框是靠右还是靠左；`small/medium/large` 元数据控制批注框的大小，可加可不加；callout 一定要放在需要批注的文字的上方，之间空一行
> **代码示例**
>
>```
> 正文
>> [!note|right-small]
>>批注内容
>
> 需要批注的文字
> ```

![MCL Multi Column图3.png](https://cdn.pkmer.cn/images/MCL%20Multi%20Column%E5%9B%BE3.png!pkmer)

## 无边框 callout 语法

>[!example] 示例
>如需实现无边框 callout 的效果，可将主 callout 类型设置为 `[!blank]` 或 `[!blank-container]`
> **代码示例**
>
>```
>> [!blank]
>> 无边框callout内容文字，注意这段文字实际上还是包裹在callout中，只是渲染出来没有这样的效果
>```

![MCL Multi Column图4.png](https://cdn.pkmer.cn/images/MCL%20Multi%20Column%E5%9B%BE4.png!pkmer)

## 无序列表分栏语法

>[!example] 示例
>如需实现无序列表的分栏，可在最高级列表项后空一格接 `#mcl/list-grid`（注意有的辅助排版插件会自动在 `list` 和 `-` 之间添加空格，需要删掉空格否则不会渲染样式，下同），如在最后加上 `-wide` 字样，则分栏默认最小宽度为 350px，否则默认为 250px，每行容许的分栏数由分栏的最小宽度和笔记的宽度决定，下同，除此之外亦可通过或在文档属性的 cssclass 中申明实现，但因这样会影响整篇笔记，不够灵活，故此文不做推荐，有意者可见官方文档，下同
> **代码示例**
>
>```
>- 第一军 #mcl/list-grid
>     - 第一师
>     - 第二师
>     - 第三师
>         - 直属军部
>     - 炮兵旅
> - 第二军
>     - 第四师
>     - 第五师
>     - 第六师
> - 第三军
>     - 第七师
>     - 第八师
>```

![MCL Multi Column图5.png](https://cdn.pkmer.cn/images/MCL%20Multi%20Column%E5%9B%BE5.png!pkmer)

---

>[!example] 示例
>`list-card` 可实现类卡片视图，另外最高级列表项似乎必须是小标题，其他均与 `list-grid` 同
> **代码示例**
>
>```
> - #### 第一军 #mcl/list-card
>     - 第一师
>     - 第二师
>     - 第三师
>         - 直属军部
>     - 炮兵旅
> - #### 第二军
>     - 第四师
>     - 第五师
>     - 第六师
> - #### 第三军
>     - 第七师
>     - 第八师
>```

![MCL Multi Column图6.png](https://cdn.pkmer.cn/images/MCL%20Multi%20Column%E5%9B%BE6.png!pkmer)

## 拓展用法（更多示例请见官方文档）

>[!example]
>**代码示例**
>
>```
>> [!multi-column]
>>
>>> [!blank|pw2]
>>> 在这个例子中，原作者嵌套了多个callout，首先是最顶层的[!multi-column]，它包裹了[!blank]和第二个[!multicolumn]；第二个[!multicolumn]又包裹了[!tldr][!info][!tip]三个callout，至于callout元数据中的pw指代什么，恕笔者愚钝，不得而知
>>
>>> [!multi-column]
>>>
>>>> [!tldr]- Manifest
>>>> contents
>>>
>>>> [!info]- Backlog
>>>> Contents
>>>
>>>> [!tip] Project
>>>> - ### Project A
>>>> 	- completed
>>>> - ### Project B
>>>> 	- ongoing
> ```

![MCL Multi Column图7.png](https://cdn.pkmer.cn/images/MCL%20Multi%20Column%E5%9B%BE7.png!pkmer)

## 总结

- `mcl-multi-column css` 提供了多种分栏样式，无需 cssclass 申明即可实现，不会影响到整篇笔记
- 分栏的本质是多重嵌套，在书写 callout 之前，可以通过画层级图来厘清思路，永远记住同一层级的 callout 前的 `>` 数量是一致的，每增加一个层级，`>` 就要相应增加