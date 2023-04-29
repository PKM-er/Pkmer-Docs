---
uid: 20230329145808
title: Obsidian 插件：Projects
description: 
tags: 
author: OS
type: other
draft: false
editable: false
modified: 20230429181108
public: yes
---

# Obsidian 插件：Projects

## 概述

Obsidian Projects 插件是一款项目管理插件，由于支持多种视图模式，所以你也可以把他当作一个文档陈列，或者书籍陈列架使用。

> [!Note] 插件名片
> - 插件名称：Projects
> - 插件作者：Marcus Olsson
> - 插件说明：提供多视图的项目管理，包括 表格、看板、日历、画廊等多种视图样式，以适应不同组织需求
> - 插件项目地址：[点我跳转](https://github.com/marcusolsson/obsidian-projects)

## 效果&特性

提供多视图的项目管理，包括 表格、看板、日历、画廊等多种视图样式，以适应不同组织需求

- 画廊模式
![image.png](https://cdn.pkmer.cn/images/80acb2021fedbba8d36f14996b830fab_MD5.png)

- 表格模式
![image.png](https://cdn.pkmer.cn/images/ba38a1c66dfeb8329634503761959f67_MD5.png)

- 日历视图
![image.png](https://cdn.pkmer.cn/images/eb9b97454d67f93e568debc7bf120389_MD5.png)

## 安装

1. 进入 Obsidian 社区插件
2. 搜索 Projects
3. 安装
4. 开启插件

## 设置

Obsidian Projects 的使用步骤相当简单，在安装后你只需要在左侧栏点击 Projects 的图标、在命令中输出 Show Projects 就可以打开对应的窗口。或者你也可以直接在文件夹上右键点击  `Create project in folder`  来创建新的 Project。

初次打开 Projects 现在应该已经提示你可以选择一个文件夹，或者尝试使用 Projects 内置的 Demo Projects，打开后可以看到以下的界面

![image.png](https://cdn.pkmer.cn/images/b0c142fd84b8094b5bb60e608c8a6d0e_MD5.png)

### 选择示例（Try a demo project）

你看到插件作者内置的一个示例，作者很贴心的用这个示例，为你展示了该插件的四种视图能力：

- 表格视图（Table）：以表格方式展示文档中的内容，key-value 或者 frontmatter 中的内容；
- 看板视图（Board）：以卡片形式管理你的文章或者待办事项；
- 日历视图（Calendar）：日历形式展示你不同时间需要完成的事情，或者已经完成的事情；
- 画廊视图（Gallery）：以画廊方式，让你的文章，可以用头图模式瀑布流一样展现在页面里面；

### 选择新建

在 Obsidian 插件窗口中你可以看到以下的一些配置项：

1、你的 Project 命名，会显示在你选择不同的 Project 时候的下拉列表中；

2、使用 Dataview 来索引数据，当你没有安装 Dataview 的时候会默认不显示；

3、使用文件夹地址来索引数据，当留空的时候是索引根目录（也即理解成可以索引全库）；

4、包括子路径，如果不包括的话，仅索引指定文件夹的内容，而不会索引指定文件夹下的子文件夹内容；

5、默认的笔记名；

6、模板，你可以设置多个模板；

全都配置好后点创建 Project 就可以进入到 Projects 的窗口了。

## 使用方法

### 项目管理

1、切换项目：在 Porjects 界面左上角，下拉选矿中选择自己要切换到的项目；

2、编辑：在 Porjects 界面左上角，下拉选框右侧的 更多按钮（三个竖向排列的圆点图标）上，编辑项目，复制项目，或者删除当前的 Project ；

3、新建项目：用于选择新建 Project、视图或者笔记；

### 视图管理

1、可以在视图顶部加号中选择新增不同视图。你可以理解为使用同样的数据，但是展示方式做了切换。

2、单击已有视图的下拉箭头，可以选择复制或者删除该视图。

3、视图的操作不会影响你的笔记数据，仅仅展示样式变化。

### 样式管理

![image.png](https://cdn.pkmer.cn/images/4334bc9fc045f441d8df86fee96c89a4_MD5.png)

1、支持通过条件、组合条件，为不同数据进行标记不同样式。比如某给数据为空的笔记特别颜色标记出来。

### 筛选管理

![image.png](https://cdn.pkmer.cn/images/e6ec972caef4f71a92bf3537b99968e3_MD5.png)

1、支持通过条件、组合条件，筛选出来特定的笔记数据。

### 表格视图

1、表格中的列：可以重命名、删除。

>[!Warrning] 删除操作会对所有笔记进行处理
>除了笔记 Name 无法操作外，其他数据项删除，都是可以批量删除的，并且会影响你的笔记内容。

2、表格中的列：隐藏表格中的列、或者排序。

3、表格类型 -Tag 列：当你在索引的笔记中任一 YAML 中填入 Tag 字段的时候，你就可以在这个表格中看到对应的列，而 Tag 列是相对特殊的，你可以在这个单元格中添加或者删除标签；

7、表格类型 -Number 列：你可以填入数字，当对应的 YAML 属性是 number 类型的时候，这里面就只能填入数字了；

8、表格类型 -Boolean 列：当你设置，例如 published: true 或者 false 的时候就可以直接在表格中点击切换；

9、表格类型 - 日期列：当你的 YAML 数据是 YYYY-MM-DD 或者 YYYY/MM/DD 的时候，这里就会显示成日期的属性，你点选的时候可以直接选择新的日期；

10、表格类型 - 文本列：你在这里填入你的文本内容；

11、添加新的笔记

### 日历视图

![image.png](https://cdn.pkmer.cn/images/eb9b97454d67f93e568debc7bf120389_MD5.png)

1、你点击这里可以添加笔记；

2、点击事件，可以直接修改事件的元数据；

3、选择基于什么日期来排序事件；

4、选择基于什么属性来确定已经完成；

5、你可以选择：日、月、周、双周视图来看所有的事件

### 看板视图

![image.png](https://cdn.pkmer.cn/images/5d911f78191b108c8632b3d3078d8da0_MD5.png)

1、添加新的笔记，而且附带对应的状态作为 YAML ；

2、优先级，根据 4 来调整变化；

3、调整状态，Kanban 根据这个来生成不同的列；

4、调整权重，Kanban 根据这个来排序不同的卡片。

### 画廊视图

如果你喜欢其他笔记软件的画廊模式，一个个大大的卡片，和精美的图片让你很舒服，你可以尝试画廊视图。

![image.png](https://cdn.pkmer.cn/images/80acb2021fedbba8d36f14996b830fab_MD5.png)
