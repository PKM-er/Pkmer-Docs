---
uid: 20240611114630
title: Obsidian 插件：Obsidian-II-Quicker
tags: ['编辑工具', '自定义命令', '快捷键', 'obsidian插件']
description: 快速插入常见的Markdown代码和HTML代码，并自定义您自己的插入命令。
author: jenemy
type: auto
draft: false
editable: false
modified: 20240611115109
---

# Obsidian 插件：Obsidian-II-Quicker

> [!Note] 插件名片
> - 插件名称：ii
> - 插件作者：Wilson
> - 插件说明：快速插入常见的 Markdown 代码和 HTML 代码，并自定义您自己的插入命令。
> - 插件分类：[' 编辑工具 ', ' 自定义命令 ', ' 快捷键 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/wish5115/obsidian-ii-quicker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?ii-quicker)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/wish5115/obsidian-ii-quicker/main/README.md)


![ii](https://cdn.pkmer.cn/covers/ii-quicker.png!pkmer)

今天向大家推荐一款新上架 Obsidian 插件市场的插件：[[ii-quicker]]，目前版本：1.1.6。

这个插件的主要功能是快速插入常见 Markdown 代及 HTML 代码，包括 Sup，Sub，Audio，Video，Iframe，左中右对齐，变量，脚注，Callout，锚点，HTML 注释等。

有人可能会想问，我们有强大的插件 [[editing-toolbar]]，还需要用这个插件不多此一举吗？你看下面这个装了 Editing Toolbar 的界面要什么 Markdown 功能都能可视操作。

!![24.png](https://cdn.pkmer.cn/images/202406111231183.png!pkmer)

我想插件作者肯定也知道 Editing Toolbar 这个插件，也可能自己日常就在使用，但是造轮子总是造福社区，存在必定有其可取之处，一定是解决特定的问题或目前使用上的一些痛点。

这个插件的安装我就不说了，中文功能界面的配置也很清晰明了，这里主要介绍几个我认为不错的功能点，这里不保证会和别的插件有类似的功能，我们现在就局限在这个插件。

## 增强插入图片

在【选项】->【ii】中开启【显示图片和链接选项对话框】后，我们在插入图片时会弹出一个图片设置对话框。

在任意文档正文区域右健【II-Quicker】->【Image（图片）】会弹出设置对话框：

 
![Pasted image 20240607174736.png](https://cdn.pkmer.cn/images/202406111231764.png!pkmer)

输入图上地址，并设置相关属性后，会得到下面的图片链接数据：

````
![内联字段|100x100](https://pic4.zhimg.com/80/v2-51617deaf1f4269aba8b1568bfed8c73_720w.webp "内联字段示例输出")
````

> [!Tip]
> 图片插入后，我们不能再次使用这个设置对话框进行二次编辑。

此外我们还可以开启【显示媒体选项对话框】来插入视频、音频或者使用 Frame 嵌入网页，这里就不展开了。

## 配置命令面板和右键菜单

在插件的配置中有【选择开启哪些命令】和【选择哪些命令添加到右键菜单】两个面板，我们只需要勾选或者取消勾选相关的功能。

作者在这里命令只保留了【日期】和【时间】，右键菜单保留了【标题 4/5/6】、图片、Callout、日期和时间。


![Pasted image 20240607181743.png](https://cdn.pkmer.cn/images/202406111233894.png!pkmer)


对于作者来说【日期】和【时间】的功能很有用，因为我们在设置属性时，比如创建一个 `created_at` 属性其类型为【日期 & 时间】，要么自己直接输入日期和时间（被视为文本类型），不然就先选择属性类型再通过【日期 & 时间】面板来选择。对于插入当前日期和时间都需要花费一定的时间。

手动输入示例：

 ![动画2 37.gif](https://cdn.pkmer.cn/images/202406111230970.gif!pkmer)



使用【日期 & 时间】选择器：

![动画2 38.gif](https://cdn.pkmer.cn/images/202406111229702.gif!pkmer)


> [!Tip]
> 截图动画中显示的快捷键 <kbd>CapsLock</kbd> 被我改成 <kbd>Ctrl</kbd> 键。

下面我们来使用 II 插入时间，我这里没有使用右键工菜单，因为相较于快捷键还是慢了点，直接将 【ii: Time（时间）】指定快捷键 <kbd>Alt + D</kbd>，快速又高效，同样建议将【切换实时阅览/源码模式】设置为 <kbd>Ctrl + \</kbd> 免得在【更多选项】中进行切换。

![动画2 39.gif](https://cdn.pkmer.cn/images/202406111229154.gif!pkmer)

## 实用自定义

这个自定义功能很实用，但是由于插件较新所以并不能满足用户的特定使用场景，就我目前的需求来看在写 Obsidian 插件教程时经常会用到：

- 插入键盘输入元素 `<kbd>`。
- 插入特定的 Dataview 内联属性，如：`(from:: 弹评)`。
- 插入特定的 Callout，如 `>[!Tip] xxx`。
- 插入 4 个 \ 的代码块。

在【用户自定义命令】设置即可，其语法为 `Name::Code::menu`，在配置中有详细说明就不复述了。

下面是我设置的：

````
快捷键标签::<kbd>{selection}</kbd>::插入快捷键标签<kbd>
知乎弹评::(from\:\: 弹评)::知乎读书中的评注
提示::>[!Tip] {selection}::关键处提示
警告::>[!Warning] {selection}::操作有危险
````

效果：

 ![动画2 40.gif](https://cdn.pkmer.cn/images/202406111230033.gif!pkmer)


可以看到文本内容是正确的，但是执行后会额外插入多余的空行，这在列表中是一个破坏操作。此外还有一个问题，如果我想定义一个插入 4 个 \` 的代码块，这个插入无法处理换行和光标位置：

````
Obsidian代码块::````\n{selection}\n````::在Obsidian中插入大代码块
````

应用后会变成：

````
````\n提示内容\n````
````

当然我们也不是没有别的选择的，强大的 Templater 插件可以轻松搞定，我们创建一个模板并粘贴以下内容：

````
<%*
let content = tp.file.cursor()
if (tp.file.selection()) {
  content = tp.file.selection() + content
}
-%>
\`\`\`\`
<% content %>
\`\`\`\`
````

>[!Tip] 注意：在使用时将 \` 转义去掉。

下面来看一下成果：

 ![动画2 41.gif](https://cdn.pkmer.cn/images/202406111230767.gif!pkmer)


## 总结

相信经过作者的一番介绍大家也想在自己的仓库中一试，也希望插件作者能够看到本文，提供更加强大的功能和不断完善插件，造福社区。

---



