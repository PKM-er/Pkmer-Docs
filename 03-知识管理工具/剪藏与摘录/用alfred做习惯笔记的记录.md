---
uid: 20250304160440
title: 用 alfred 做习惯笔记的记录
tags: [alfred, 效率]
description: 用 alfred 做习惯笔记的记录
author: Dusk
type: other
draft: false
editable: false
modified: 20250304161732
---

# 用 alfred 做习惯笔记的记录

## 概述

- 某人说过：要持续做一件事的首要原则，是这件事情本身要足够简单
- 某人说过：他对「简单」这个词的定义是：可以在三个步骤内完成

我说：悟了，开 alfred。

今天本来要讨论的话题是：如何坚持一个习惯？某人说：做习惯笔记。

当然，今天我要谈的不是如何编写习惯笔记，而是：**如何快速进入这个习惯笔记的编写界面，以让自己可以快速进入笔记的编写状态？**

结合刚才说的「简单」定义，按以下三个步骤进行：（以 mac 电脑为例）

- step1：双击 cmd 键——弹出 alfred 对话框
- step2：输入 dd——弹出习惯笔记的列表
- step3：上下选择，按回车进入笔记页面

## 配置方法

核心界面如下：

![Pasted image 20250304152043.png|800](https://cdn.pkmer.cn/images/Pasted%20image%2020250304152043.png!pkmer)

我现在是用 dayone 这个软件在记录相关的笔记，你当然可以选用其他支持 url 跳转的笔记软件就行，比如 obsidian。

各软件的配置方式都差不多，我这里仅以 dayone 的配置为例：

1. 在 dayone 里，新建一个「日记集」——这里我以「20 习惯笔记」为例。在里面建一个「习惯笔记」——这里以「🍅总结文章」为例。

话说，你看噻，我以日期为条例做流水帐，其中那一条有个 obsidian 的链接，就可以在 dayone 中直接跳到 obsidian 中的本文页面，以便我继续编写或回顾本篇文章。

![Pasted image 20250304151540.png|800](https://cdn.pkmer.cn/images/Pasted%20image%2020250304151540.png!pkmer)

1. 在「🍅总结文章」这个笔记上，右键双击，取得笔记的链接

![Pasted image 20250304151617.png|800](https://cdn.pkmer.cn/images/Pasted%20image%2020250304151617.png!pkmer)

可以得到如下的“日记链接”：

`dayone://view?entryId=4BA057C000C049CCBFDBB766AFF330A7`

其中，以上面的这个链接为例，有两处，我们都是需要的：

1）在一会儿要讲的「块 1」中，需要这段字符串：`4BA057C000C049CCBFDBB766AFF330A7`

2）在一会儿要讲的「块 3」中，需要这段字符串：`dayone://view?entryId=`

好，让我们来到 alfred 的界面中，进行 workflows 的编辑，各编辑块就如下截图所述了（alfred 的版本日期为 2025-03-04）

![Pasted image 20250304153247.png|800](https://cdn.pkmer.cn/images/Pasted%20image%2020250304153247.png!pkmer)

各编辑块的内容如下：

块 1：

![Pasted image 20250304153336.png|800](https://cdn.pkmer.cn/images/Pasted%20image%2020250304153336.png!pkmer)

块 2：

![Pasted image 20250304153400.png|800](https://cdn.pkmer.cn/images/Pasted%20image%2020250304153400.png!pkmer)

块 3：

![Pasted image 20250304153409.png|800](https://cdn.pkmer.cn/images/Pasted%20image%2020250304153409.png!pkmer)

然后在块 1 里，按以下方式进行操作与填写：

![Pasted image 20250304151921.png|800](https://cdn.pkmer.cn/images/Pasted%20image%2020250304151921.png!pkmer)

![Pasted image 20250304152008.png|800](https://cdn.pkmer.cn/images/Pasted%20image%2020250304152008.png!pkmer)

好了，按图操作就可以，很简单吧？

接下来，在日常的生活记录中——来，one two three——三步走，打开你的「习惯笔记」，来更好地让你想养成的习惯培养起来吧

- step1：双击 cmd 键
- step2：输入 dd
- step3：上下选择，按回车进入笔记页面

Bingo！

![Pasted image 20250304152043.png|800](https://cdn.pkmer.cn/images/Pasted%20image%2020250304152043.png!pkmer)

## 附录

这个话题可以自行网上查找，Esor 写了很多博客文章，聊了很多类似的生产力问题，网址是<https://www.playpcesor.com/>，有兴趣的可以自行查看，我觉得挺有意思的