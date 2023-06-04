---
uid: 20230604160949
title: Obsidian 插件：Metadata Menu 图形化的 Frontmater 管理器
tags: [Obsidian, 插件, 编辑工具, 效率, YAML, 定制属性，修改，属性预览]
description: Obsidian 插件：Metadata Menu插件是基于dataview的一个功能增强的插件。它基于`属性::值`的一种结构，可以很方便的修改一个特定属性的值。比如：`性别::男`。通过插件，就可以通过鼠标点击，来直接修改为`女`
author: 宏沉一笑
type: basic
draft: false
editable: false
modified: 20230604171021
---

# Obsidian 插件：Metadata Menu 图形化的 Frontmater 管理器

> [!Note] 插件名片
> - 插件名称：Metadata Menu
> - 插件版本：0.4.21
> - 插件作者：mdelobelle
> - 插件说明：Metadata Menu 是方便修改 YAML 值的一个工具
> - 插件分类：编辑工具, 效率, YAML, 定制属性，修改，属性预览
> - 插件项目地址：[点我访问](https://github.com/mdelobelle/metadatamenu)

## 概述

Metadata Menu 插件是基于 dataview 的一个功能增强的插件。它基于 `属性::值` 的一种结构，可以很方便的修改一个特定属性的值。比如：`性别::男`。通过插件，就可以通过鼠标点击，来直接修改为 `女`。

## 插件配置

![Pasted image 20230604145024](https://cdn.pkmer.cn/images/Pasted%20image%2020230604145024.png!pkmer)

在五个配置项中，我们只关注 `Preset Fields settings`。在这里面定义的功能，可以在任意一个文档中使用。

现在我们添加一个字段，来进行使用。

## 全局属性修改

### 添加全局字段

![Pasted image 20230604150251](https://cdn.pkmer.cn/images/Pasted%20image%2020230604150251.png!pkmer)

1. 点击 `Add new`，打开字段配置界面

![Pasted image 20230604150306](https://cdn.pkmer.cn/images/Pasted%20image%2020230604150306.png!pkmer)

1. 将自己想要管理的字段输入到 `Field Name` 后面的输入框中，点击√即可完成。

![Pasted image 20230604150311](https://cdn.pkmer.cn/images/Pasted%20image%2020230604150311.png!pkmer)

1. 完成效果图

![Pasted image 20230604150321](https://cdn.pkmer.cn/images/Pasted%20image%2020230604150321.png!pkmer)

### 全局字段使用

1. 新建一个文档，点开右键菜单

![Pasted image 20230604150351](https://cdn.pkmer.cn/images/Pasted%20image%2020230604150351.png!pkmer)

1. 选择 `Add field at cursor`，将数据添加到当前行。

![Pasted image 20230604150355](https://cdn.pkmer.cn/images/Pasted%20image%2020230604150355.png!pkmer)

1. 选择 `名称` 这个选项，并在其中输入想要输入的内容

![Pasted image 20230604150400](https://cdn.pkmer.cn/images/Pasted%20image%2020230604150400.png!pkmer)

1. 结果显示

![Pasted image 20230604150405](https://cdn.pkmer.cn/images/Pasted%20image%2020230604150405.png!pkmer)

这样，我们就可以在任何一个文档中，对自己定义的属性进行添加。

## 文件类

接下来，我们讲解一下新功能**文件类**。

下面是它的功能说明：

- 可以只针对单个文件
- 可以修改的属性由引用的模板决定
- 可以针对某一种类型，定制需要的属性

### 设置

对面板进行设置

![Pasted image 20230604150434](https://cdn.pkmer.cn/images/Pasted%20image%2020230604150434.png!pkmer)

1. 文件类的存放的文件夹
2. fileclass 的自定义名称（可以使用任何名字）

已经设置好的配置如下：

![Pasted image 20230604150440](https://cdn.pkmer.cn/images/Pasted%20image%2020230604150440.png!pkmer)

### 建立一个文件类模板

1. 在模板文件夹中建立一个文件 `笔记类`

![Pasted image 20230604150449|370](https://cdn.pkmer.cn/images/Pasted%20image%2020230604150449.png!pkmer)

1. 输入想要创建的文件类名字，并点击创建

![Pasted image 20230604150454](https://cdn.pkmer.cn/images/Pasted%20image%2020230604150454.png!pkmer)

1. 打开命令界面，选择下面提示的命令

![Pasted image 20230604150458](https://cdn.pkmer.cn/images/Pasted%20image%2020230604150458.png!pkmer)

1. 输入要添加的属性名称，点击√即可

![Pasted image 20230604150503](https://cdn.pkmer.cn/images/Pasted%20image%2020230604150503.png!pkmer)

![Pasted image 20230604150515](https://cdn.pkmer.cn/images/Pasted%20image%2020230604150515.png!pkmer)

1. 按照前面提到的方式，继续添加自己想要添加的属性

![Pasted image 20230604150520](https://cdn.pkmer.cn/images/Pasted%20image%2020230604150520.png!pkmer)

接下来，我们就可以使用刚才创建的 `笔记类` 模板了。

### 使用文件类模板

1. 在想要使用文件类的文档中，点击右键

![Pasted image 20230604150526](https://cdn.pkmer.cn/images/Pasted%20image%2020230604150526.png!pkmer)

1. 选择想要添加的文件类

![Pasted image 20230604150533|433](https://cdn.pkmer.cn/images/Pasted%20image%2020230604150533.png!pkmer)

![Pasted image 20230604150538](https://cdn.pkmer.cn/images/Pasted%20image%2020230604150538.png!pkmer)

1. 添加预设置的属性

![Pasted image 20230604150543](https://cdn.pkmer.cn/images/Pasted%20image%2020230604150543.png!pkmer)

1. 选择要添加的属性

![Pasted image 20230604150549](https://cdn.pkmer.cn/images/Pasted%20image%2020230604150549.png!pkmer)

1. 输入对应属性的值

![Pasted image 20230604150555](https://cdn.pkmer.cn/images/Pasted%20image%2020230604150555.png!pkmer)

![Pasted image 20230604150941](https://cdn.pkmer.cn/images/Pasted%20image%2020230604150941.png!pkmer)

1. 按照上面的 3-5 步，添加其他的属性值

![Pasted image 20230604150604](https://cdn.pkmer.cn/images/Pasted%20image%2020230604150604.png!pkmer)

## 总结

这就是 Metadata Menu 的基础教程了。一共介绍了两种文件类的方式，全局文件类与模板文件类。全局文件类，可以适用于任何文档中的属性修改（使用了模板文件类的除外）。但是这些属性，只能是一些很通用、很常用的属性，且数量不会很多，10 个以内。而模板文件类，只能应用于单个文档。它的好处就是可以定制于专属的属性，可以将一个物品的属性列到很详细，几十个没有问题。
