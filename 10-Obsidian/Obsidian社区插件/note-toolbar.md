---
uid: 2024052909204751
title: Obsidian 插件：Note Toolbar
tags: ['编辑工具', '界面优化', 'obsidian插件']
description: Note toolbar 插件的详细介绍和使用教程。
author: Moy
type: basic
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Note Toolbar

> [!Note] 插件名片
> - 插件名称：Note Toolbar
> - 插件作者：Chris Gurney
> - 插件说明：Add customizable toolbars to your notes.
> - 插件分类：[' 编辑工具 ', ' 界面优化 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/chrisgurney/obsidian-note-toolbar)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?note-toolbar)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/chrisgurney/obsidian-note-toolbar/master/README.md)

## 先听我一顿吹

你，不会，还没用过 Note Toolbar 吧？

这可是 **Obsidian 最不可或缺的插件** 之一！（我评的）

来来，我先快速介绍一下这个插件是什么、有啥用：

1. 它可以在你的笔记上方固定一个自定义工具栏
2. 工具栏的内容可以根据笔记而变化
3. 在移动端也可以显示成一个浮动按钮
4. 工具栏的功能包括但不限于：「打开笔记」、「执行任意命令」、「根据笔记属性打开关联笔记」、「运行脚本」……
5. 工具栏里甚至可以再嵌套工具栏

如图：

![](https://cdn.pkmer.cn/images/202409110954888.png!pkmer)

> 中间的这一排按钮就是 **NoteToolbar** 的工具栏

我的 DailyNote 一般会在最上方生成「前一天」和「后一天」的链接，以及「月、周、年度」笔记的链接。

但现在，借助 Note Toolbar 插件可以轻松实现这样简洁美观的跳转工具栏：

![](https://cdn.pkmer.cn/images/202409110954781.png!pkmer)

只有如此吗？不不不。

这款「工具栏」插件之所以与众不同，最大的优势就在于——

**它可以根据不同的笔记来切换工具栏的内容**

在晨间日记的页面，可以快速打开晨间日记的首页，或是插入新日记的模板：

![](https://cdn.pkmer.cn/images/202409110954709.png!pkmer)

在 Obsidian 文件夹的笔记里，可以快速跳转到 Obsidian 相关的常用页面：

![](https://cdn.pkmer.cn/images/202409110955251.png!pkmer)

在年度一览中，可以点开菜单快速跳到不同的月份：

![](https://cdn.pkmer.cn/images/202409110955385.png!pkmer)

甚至，可以显示一个悬浮按钮，放上常用的命令，随时点击调用：

![](https://cdn.pkmer.cn/images/202409110955030.png!pkmer)

——在移动端同样能显示这个浮动小按钮，让你在小屏幕上也能如鱼得水！

![](https://cdn.pkmer.cn/images/202409110955470.png!pkmer)

这，就是 NoteToolbar 的功能一瞥，一旦你用过，你就会离不开它，因为它实在是太方便、也太实用了。

_（当然，真要是用不上也不用专门来杠一句 hhh）_

## 再教你怎么用

### 零、安装插件

首先，前往插件商城搜索 Note Toolbar 并安装：

![](https://cdn.pkmer.cn/images/202409110955083.png!pkmer)

> 也可以前往 Github 仓库手动下载安装：[chrisgurney/obsidian-note-toolbar](https://github.com/chrisgurney/obsidian-note-toolbar)

然后进入插件的设置页面：

![](https://cdn.pkmer.cn/images/202409110955519.png!pkmer)

### 一、创建第一个工具栏

首先，点击 **+New toolbar** 按钮创建一个新的工具栏：

![](https://cdn.pkmer.cn/images/202409110955627.png!pkmer)

然后命名工具栏，并点击 **+ Add tooblar item** 按钮增加一个新的选项：

![](https://cdn.pkmer.cn/images/202409110955271.png!pkmer)

举个例子，我们想创建一个快速跳转到 _Guides_ 笔记的按钮，就这样配置：

![](https://cdn.pkmer.cn/images/202409110955401.png!pkmer)

1. 左上角的方块可以选择图标，右边的输入框可以输入按钮文本
2. 左下角的选单选择 **File** ，然后在右边输入笔记的路径

OK，这样就创建完你的第一个工具栏了！

但是还没完，还需要第二个步骤才能看到它！

### 二、映射工具栏

为了知道这个工具栏**在什么时候显示**，你需要给它创建一个映射：

![](https://cdn.pkmer.cn/images/202409110955682.png!pkmer)

这里可以先选择第一项星号，代表「所有文件夹」：

![](https://cdn.pkmer.cn/images/202409110955851.png!pkmer)

然后右边选择我们刚创建好的工具栏，这样映射关系就建立完成了！

它代表：「在所有文件夹的笔记中都显示这个工具栏」

![](https://cdn.pkmer.cn/images/202409110955534.png!pkmer)

> 如果有多个映射关系，会从上到下选择，越上面的映射优先级越高。

这时候回到笔记，你就能在最上方看到刚刚创建的工具栏：

![](Resource/Images/6f884a042fc0d173aaea49872a9880f5.png)

点击按钮就可以跳转到对应的笔记，是不是超级方便！

## 进阶使用

### 映射文件夹的专属工具栏

聪明的小伙伴看到这里应该已经意识到了——

只要在刚才的第二步「映射」里，选择特定的文件夹，就可以让这个文件夹拥有自己专属的工具栏！

很多时候，我们在 A 类笔记里需要跳转到 A 相关的页面，在 B 类笔记里则需要一些快捷的脚本……这就可以通过创建不同的笔记映射来完成。

例如我目前就有这些映射：

![](https://cdn.pkmer.cn/images/202409110955452.png!pkmer)

可以看到，我给不同的周期笔记都创建了各自的工具栏，非常好用！

### 编辑工具栏

在工具栏右键就可以快速编辑当前工具栏：

![](https://cdn.pkmer.cn/images/202409110955551.png!pkmer)

第三项可以切换工具栏显示的位置（属性下方/页面最顶端）。

有时候可能会因为插件冲突（比如 Hover Editor）出现工具栏闪烁的情况，切换成 Top (fixed) 顶端固定就能解决。

在编辑工具栏的时候，你还可以在 **Position** 选择更多的位置选项——Floating button 就是悬浮小按钮。

下面的 **Styles** 则是工具栏的样式设置，包括是否描边、是否均匀分布按钮，等等。

![](https://cdn.pkmer.cn/images/202409110955770.png!pkmer)

### 更多功能

在编辑 Item 的时候，其实有 4 个选项：

![](https://cdn.pkmer.cn/images/202409110956311.png!pkmer)

- `Command`：即 Obsidian 里的指令，点击即可运行对应命令
- `File`：打开指定笔记
	- 如果选择文件夹，则会聚焦到文件浏览器中
	- 可以用 `鼠标中键` 或者 `Ctrl+左键点击` 来在新标签页中打开
- `Item Menu`：项目菜单，可以选择另一个工具栏，作为菜单显示
- `URI`：网址，点击后可以打开对应的网站
	- 你也可以配合 `obsidian://` 形式的 URL 链接使用
	- 配合 AdvancedURI 的话，还可以发挥更强大的功能

这里只是最基础地介绍了按钮的基本，更多拓展功能可以查看插件文档：

[Home · chrisgurney/obsidian-note-toolbar Wiki](https://github.com/chrisgurney/obsidian-note-toolbar/wiki)

另外，在 [Examples](https://github.com/chrisgurney/obsidian-note-toolbar/wiki/Examples) 中，作者也提供了一些用法示例，包括怎么打开书签、怎么调用模板，甚至如何运行电脑中的其他软件。

## 品质保障，值得信赖

说完了插件的功能，我们再来聊聊这款插件本身。

Note Toolbar 在今年 3 月 20 日推出了 v1.0 版本。

现在（24 年 8 月）5 个月过去，已经发布了 100 多个版本，最新版更新到了 v1.9.12（内测版是 1.10）：

![](https://cdn.pkmer.cn/images/202409110956024.png!pkmer)

这期间作者一直在高强度地持续维护和接收反馈更新。

~~光是我自己就提了不下 5 个反馈和建议，现如今都已经完成了~~

和年久失修的老插件比起来，这种作者还抱有非常高的开发热情的插件，显得难能可贵。

并且，作为崭新的插件，它在半年不到的时间里下载量已经达到 1W9——这也充分说明了它击中非常多用户的痛点：

OK，那么关于这款插件的介绍到这里。

感兴趣了吗？点击仓库前往体验：[chrisgurney/obsidian-note-toolbar](https://github.com/chrisgurney/obsidian-note-toolbar)

你也可以在这里点击 Install 直接安装插件： [Plugins - Obsidian](https://obsidian.md/plugins?id=note-toolbar)

## 关联文档

- [[Obsidian插件样式-修改note toolbar插件布局像cmenu那样显示]]