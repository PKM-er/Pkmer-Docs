---
uid: 20240523233314
title: 实时预览 Templater 插件的模板应用结果
tags: []
description: 调试复杂的模板笔记的时候很头疼？别担心，救星来了。
author: Moy
type: tutorial
draft: false
editable: false
modified: 20240523233603
---

# 实时预览 Templater 插件的模板应用结果

在编写 Templater 插件的模板代码的时候，你会怎么测试它？

找一个空的笔记，应用这个模板看效果，如果不行，再改，再应用？

——我以前就是这么干的。

但我觉得这**太 麻 烦 了！**

Obsidian 用户应该用于对「麻烦的重复」Say No。

所以我找出了一个方法，可以==快速预览 TP 模板的结果==。

## 方法

为了预览 Templater 插件，你得先安装一个 Dataview 插件。

然后，输入这样的代码块：

````
```dataviewjs
// 用来做 Templater 测试的代码

// 引入 tp 的函数库
const tp = app.plugins.plugins["templater-obsidian"].templater.current_functions_object;

// 这里开始，写你的 TP 模板代码，可以直接调用 tp.xxx 的功能
let tR = "";
tR += tp.date.now();

// 这行是打印结果的
dv.paragraph(tR)

```
````

就这么简单。

现在你把需要测试的代码填进这里，然后可以直接借助 dv 来查看模板应用后的效果：

![[240523_Templater插件实时测试的方法-img-240523_233010.gif]]

## 原理

使用 `const tp = app.plugins.plugins["templater-obsidian"].templater.current_functions_object;` 代码就可以获取到 Templater 插件的函数对象。

这样一来，目标被调用时的 `tp.date()` 之类的函数功能都可以原样复刻。

所以我们先用一个字符串把模板内容都存进去，然后用 `dv.paragraph` 把结果显示出来，就可以查看这个模板最终会输出的文本是什么样的了。
