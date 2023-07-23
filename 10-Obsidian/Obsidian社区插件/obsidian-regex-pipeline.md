---
uid: 20230525124444
title: Obsidian 插件推荐：Regex Pipeline
tags: [Obsidian, 插件, 正则表达式, 文档格式化]
description: Regex Pipeline 是一款让用户用自定义的正则表达式进行格式化文本的插件，相比 Obsidian 自带的搜索替换，Regex Pipeline 利用正则表达式这个强大的文本处理技术可以执行更复杂的文本操作。
author: 致九
type: other
draft: false
editable: false
modified: 20230715000813
---

# Obsidian 插件推荐：Regex Pipeline

> [!Note] 插件名片
> - 插件名称：Regex Pipeline
> - 插件版本：1.4.0
> - 插件作者：[No3371](https://github.com/No3371)
> - 插件描述：Regex Pipeline 是一款让用户用自定义的正则表达式进行格式化文本的插件，相比 Obsidian 自带的搜索替换，Regex Pipeline 利用 **正则表达式** 这个强大的文本处理技术可以执行更复杂的文本操作。
> - 插件项目地址：<https://github.com/No3371/obsidian-regex-pipeline>

## Regex Pipeline 是什么？

Regex Pipeline 是一款让用户用自定义的正则表达式进行格式化文本的插件，相比 Obsidian 自带的搜索替换，Regex Pipeline 利用 **正则表达式** 这个强大的文本处理技术可以执行更复杂的文本操作。

以下是 [Regex Pipeline](https://github.com/No3371/obsidian-regex-pipeline) 对自己的介绍：

> Regex Pipeline is an [Obsidian](https://obsidian.md/) plugin that allows users to setup custom regex rules to automatically format notes, this is especially useful in scenerios like building personal knowledge database, because you often clip webpage from same sources.

## 如何用 Regex Pipeline

通过在 Obsidian 插件市场安装或者手动安装后，在左侧边栏就会出现 Regex Pipeline 的图标：

![](https://cdn.pkmer.cn/images/Pasted%20image%2020230525124727.png!pkmer)

点击该图标，就会弹出一个与下图类似的对话框：

![](https://cdn.pkmer.cn/images/Pasted%20image%2020230525124749.png!pkmer)

然后点击**加号**，将会显示定义具体规则的对话框：

![](https://cdn.pkmer.cn/images/Pasted%20image%2020230525124804.png!pkmer)

在该对话框中，按照 Regex Pipeline 的语法可以定义具体的某项规则和为它取名。（Regex Pipeline 规则在后面小节中讲解)

点击 save 保存完定义的规则后，就可以再次点击侧边栏的图标，这时的对话框就有了自己定义的规则，单击规则后文档就会按照定义的规则格式化文档。

举个例子，我的文档中存在很多类似的字符串 `<!--ID: 1234565656-->`，熟悉的朋友知道这是 Flashcards 插件留下的注释文字，但是当我没有再使用 Flashcards 插件的需求后，这些文字就变成了污染文档的字符，难点在在于这里面的数字是不确定的，无法通过原生的搜索替换来去除所有类似的字符串。所以为了去除类似的污染字符，就可以利用 Regex Pipeline 去除文档中所有类似字符。

我在定义具体规则的对话框中填入以下内容：

![](https://cdn.pkmer.cn/images/Pasted%20image%2020230525124825.png!pkmer)

点击 `save` 保存后，一个规则就被定义好了，每当在需要去除注释文字的地方，就可以通过点击侧边栏的图标，执行该规则，达到去除注释文字的目的。

## Regex Pipeline 规则集

在上述的案例中，我们其实是定义了一个 Regex Pipeline 的规则集（ruleset），ruleset 中可以包含多条规则，这些规则将会顺序执行，这也是插件名字中为什么会有 Pipeline 这个单词。

规则集中每条规则的语法类似下面的格式：

```js
"SEARCH"->"REPLACE"
```

1. `->` 左边是填写正则表达式，需要用双引号包裹
2. `->` 右边是被替换的字符，也可以填写正则表达式中的 `$1` 这个命名匹配
3. 要注意，`->` 符号后面不能是一个空行，但是可以与 `"REPLACE"` 不同行。

官方文档中分别给出了可运行的格式和不可运行的格式。

✅ 可运行：

```
"SEARCH"->"REPLACE"
```

```
"SEARCH"
->"REPLACE"
```

```
"SEARCH"
->
"REPLACE"
```

```
"SEARCH"->
"REPLACE"
```

❌ 不可运行

```
"SEARCH"

->
"REPLACE"
```

```
"SEARCH"->

"REPLACE"
```

```
"SEARCH"
->

"REPLACE"
```

## 修改 Regex Pipeline 规则集

如果需要修改自己之前写的规则集，需要去 `.obsidian/regex-rulesets/` 文件夹修改自己定义的规则集，这里是一个不方便的点，但是可以在设置中更改规则集存储的位置。

## 设置

![](https://cdn.pkmer.cn/images/Pasted%20image%2020230525124844.png!pkmer)

插件的设置暂时只有三个。

第一个设置是调整在编辑窗口时点击右键的命令菜单中能够显示的规则集条数。

![](https://cdn.pkmer.cn/images/Pasted%20image%2020230525124902.png!pkmer)

第二个设置是调整在命令窗口能够显示的规则集条数。

![](https://cdn.pkmer.cn/images/Pasted%20image%2020230525124911.png!pkmer)

第三个设置是将存放规则集的文件夹设置在仓库根目录下，以后创建的规则将会在这个目录下存放。

## 不足之处

虽然通过 Regex Pipeline 已经可以处理复杂的文字模式，更好的格式化自己的文档，但是现在该插件还只是局限于单个文档的处理，不能将规则应用于全局，面对需要将所有文件都处理的情况，还是要借助 vscode 这种更加成熟的软件中的搜索替换工具，

还是期待一下作者的更新，能够满足这个需求。

> [!Tip] 相关推荐
> - [[attachment-management]]：可以基于一些建议规则，自动化归类你笔记中的附件内容
> - [[find-unlinked-files]]：遍历整个仓库，搜索没有反向链接的文件。它将创建一个文件，其中包含指向这些未链接文件的链接列表
> - [[settings-search]]：提供搜索 Obsidian 设置和插件设置选项的能力
> - [[nl-fast-image-cleaner]]：快速删除笔记中图片和引用链接
> - [[oz-clear-unused-images]]：清除笔记中不再使用的图像以节省空间
> - [[obsidian-regex-pipeline]]：让用户用自定义的正则表达式进行格式化文本的插件，相比 Obsidian 自带的搜索替换，Regex Pipeline 利用正则表达式这个强大的文本处理技术可以执行更复杂的文本操作