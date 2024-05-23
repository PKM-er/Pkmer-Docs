---
uid: 20240506222202
title: zettelkasten-navigation
tags: [关系图谱, 卡片笔记]
description: 可视化和导航一个卢曼风格的笔记库
author: Terry
type: basic
draft: false
editable: false
modified: 20240506222543
---

# zettelkasten-navigation

> [!NOTE] 插件名片
> - 插件名称：Zettelkasten Navigation
> - 插件作者：terrychenzw
> - 插件说明：可视化和导航一个卢曼风格的笔记库
> - 插件分类：[' 关系图谱 ', 'Obsidian 插件 ', ' 卡片笔记 ']
> - 项目地址：[点我访问](https://github.com/terrychenzw/obsidian-zettelkasten-navigation)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?zettelkasten%20navigation)

## 插件界面

![image.png](https://cdn.pkmer.cn/images/202405062223660.png!pkmer)

## 插件演示

![328003991-3aa738cd-4306-495c-bd13-3f575f562309.gif](https://cdn.pkmer.cn/images/202405062224313.gif)

## 为什么创建这个插件

此插件对标的是 Obsidian 核心插件“关系图谱”，旨在提供另一种关系图谱，是基于卢曼卡片盒原理所产生的图谱。

核心插件“关系图谱”，可以可视化笔记之间的关系。但这种图谱只是基于笔记之间的链接/引用（入链与出链）而形成，很难识别一条特定的长思维链路。哪个笔记是这个思维链路的起点、中间包含哪些笔记，哪个笔记又是它的终点。不同的思维链路在全局图谱中的交叉会使图谱变得混乱不堪。

卢曼卡片盒是：

> "combination of disorder and order, of clustering and unpredictable combinations emerging from ad hoc selection."
>
> Johannes F.K. Schmidt, [Niklas Luhmann’s Card Index](https://sociologica.unibo.it/article/view/8350/8270)
>
> 机翻：“无序和有序的结合，集群和不可预测的组合从特设选择中出现。”

由笔记链接/引用所形成的图谱，其形象在某些层面可以表示卢曼卡片盒”无序“的方面。但关于卢曼卡片盒的”有序“方面是什么？

>"The absence of a fixed system of order and, in consequence, a table of contents turned the index into the key tool for using the file – how else should one be able to find certain notes again and thus gain access to the system of references? Not wanting to rely on pure chance requires being able to identify at least one point from which the respective web of references can be accessed. This is the purpose of the keyword index."
>
> Johannes F.K. Schmidt, [Niklas Luhmann’s Card Index](https://sociologica.unibo.it/article/view/8350/8270)
>
> 机翻：“由于缺乏固定的顺序系统，因此，目录将索引变成了使用文件的关键工具——否则，如何才能再次找到某些笔记，从而访问参考文献系统？不想纯粹依靠偶然性，需要能够识别出至少一个可以访问相应参考文献网的点。这就是关键词索引的目的。”

根据我的理解，卢曼卡片盒中的”有序“方面是由他的笔记 ID 和关键词索引所组成的。

到目前为止，我还没有发现任何笔记软件/插件提供基于卢曼式的笔记 ID 和他的关键词索引而形成的图谱功能——这就是为什么我创建此插件。

此插件提供了另外一种图谱，用于可视化和导航一个使用卢曼式笔记 ID 和关键字索引的笔记库。我认为这个插件代表了真正卢曼式的想法检索和笔记浏览的数字化版本。

## 使用该插件的前提条件

1. 卢曼式笔记 ID，该插件支持以下三种类卢曼风格的笔记 ID
	1. **100% 卢曼 ID**: 比如 21/3a1p5c4aA11 , 12.5.1. (参考 [Niklas Luhmann-Archiv](https://niklas-luhmann-archiv.de/bestand/zettelkasten/inhaltsuebersicht#ZK_1_editor_I_1))
	2. **Folgezettel**: 比如 13.8c1c1b3. (参考 [How to Use Folgezettel in Your Zettelkasten](https://writing.bobdoto.computer/how-to-use-folgezettel-in-your-zettelkasten-everything-you-need-to-know-to-get-started/))
	3. **Antinet**: 比如 3306/2A/12. (参考 [Introducing the Antinet Zettelkasten](https://zettelkasten.de/posts/introduction-antinet-zettelkasten/))
2. 卢曼式的关键词索引
	1. 每个关键词索引是由关键词与若干（1 个或少量几个）主笔记组成的
	2. 在这个插件里，一个有效的关键词索引是一个单独的关键词文件，里面包含若干主笔记链接

## 插件设置

![image.png](https://cdn.pkmer.cn/images/202405062225685.png!pkmer)

1. 指定主笔记的文件夹或/和主笔记标签，以识别哪些笔记文件是主笔记（必须）
2. 指定关键词索引文件夹，以识别哪些笔记文件是关键词索引（必须）
3. 选择一种主笔记 ID 字段（ID 存放在哪个字段）：（必须）
	1. 文件名就是笔记 ID，并指定一个属性字段作为笔记标题
	2. 某一属性是笔记 ID（文件名为笔记标题）
	3. 文件名的前缀是笔记 ID（后面部分为笔记标题）， 并选择一个分隔符来截取 ID
4. 其它设置（可选）