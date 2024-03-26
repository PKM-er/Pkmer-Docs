---
uid: 20240325153616
title: Obsidan 插件 Thino- 基础工作流 - 日记周记速记的自动化汇总
tags: [Obsidian, Obsidian插件, Thino, memos, calendar]
description: Obsidan 插件 Thino- 基础工作流 - 日记周记速记的自动化汇总
author: 上善若水
type: other
draft: false
editable: false
modified: 
---

# Obsidan 插件 Thino- 基础工作流 - 日记周记速记的自动化汇总

## 前情提要

- 本文章主要介绍了基于 Thino 插件的基础工作流 - 日记、周记速记的自动化汇总。

## 简要介绍

- 通过 Thino 的输入端以及 Thino 数据保存方式，搭配上 Calendar 插件的日历功能与 Dataview 插件的数据汇总功能，便可轻松实现日、周速记的快速汇总展示。

## 流程图

![91dbe46a0c9a5af7b85a637110b4b4b3_MD5.png](https://cdn.pkmer.cn/images/91dbe46a0c9a5af7b85a637110b4b4b3_MD5.png!pkmer)

## 效果展示

1. 在 Thino 输入端进行速记，并标签。如下图：
![e09271b92187e20da6e545a3e4ed10a4_MD5.png](https://cdn.pkmer.cn/images/e09271b92187e20da6e545a3e4ed10a4_MD5.png!pkmer)

2. 日记内展示内容，如下图：
![83deb6ee26fb5cf76e61b9c49a582c53_MD5.png](https://cdn.pkmer.cn/images/83deb6ee26fb5cf76e61b9c49a582c53_MD5.png!pkmer)

3. 周期内展示内容，如下图：
![64b9c456a53f6b81c0292fabe04d67a8_MD5.png](https://cdn.pkmer.cn/images/64b9c456a53f6b81c0292fabe04d67a8_MD5.png!pkmer)

## 实现方法

1. **第一阶段**，首先下载 Thino，确认设置如图下所示：
	1. ![Pasted image 20240323210522.png](https://cdn.pkmer.cn/images/Pasted%20image%2020240323210522.png!pkmer)
2. **第二阶段**，建立 Thino 速记内容的保存锚点，如图所示操作界面：
		1. 第一步，打开日记的设置界面，如下图所示：
		2. ![14a7754ba8ea7680e7acd65415a11385_MD5.png](https://cdn.pkmer.cn/images/14a7754ba8ea7680e7acd65415a11385_MD5.png!pkmer)
		3. 在指定标题后插入 Thino 的填空段落内，输入保存锚点，如下图所示：
		4. ![8b79dd9fb8a879dff7c41e79deaa7391_MD5.png](https://cdn.pkmer.cn/images/8b79dd9fb8a879dff7c41e79deaa7391_MD5.png!pkmer)
		5. **注意事项**：保存锚点名称仅做参考，可自行定义。
3. **第三阶段**，我们先创建日记模板，为接下来的工作打下基础。
	1. 首先在模板文件夹内创建一个日记模板文件。
	2. 在文档属性里增加日记文档数据，如下图：
		1. ![648269d03379f892e977be08269e338e_MD5.png](https://cdn.pkmer.cn/images/648269d03379f892e977be08269e338e_MD5.png!pkmer)
	3. 在文档内容里构建速记内容保存锚点，如下图：
		1. ![ab55db80077a5b69ea167fdc595b6ce0_MD5.png](https://cdn.pkmer.cn/images/ab55db80077a5b69ea167fdc595b6ce0_MD5.png!pkmer)
4. **第四阶段**，接下来检查 obsidian 核心插件 - 日记 是否开启并运作。
5. 若未开启 obsidian 核心插件 - 日记 并运作，则：
	1. 打开 obsidian 设置界面，进入核心插件区域 - 日记的界面内，如下图所示：
	2. ![1a6eda9b101ee20db319dc30cd8b1a70_MD5.png](https://cdn.pkmer.cn/images/1a6eda9b101ee20db319dc30cd8b1a70_MD5.png!pkmer)
	3. 将日记保存位置与使用的日记模板路径点填写进去，如下图所示：
	4. ![28485d00fc207eecf6b8bbf85ec7d584_MD5.png](https://cdn.pkmer.cn/images/28485d00fc207eecf6b8bbf85ec7d584_MD5.png!pkmer)
	5. 此处**注意事项**：
		1. 日期格式为生成日记的存储路径与其文件名，在此处可实现文件夹与文件的对应格式自动化创建。
		2. 新建日记的存放位置，为日记总文件夹路径。
		3. 日记模板位置，为日记模板的路径。
6. 若已开启 obsidian 核心插件 - 日记 并运作，则当天的速记，会自动化汇总到日记模板所创建的每一篇日记当天的速记保存锚点里。
7. **第五阶段**，则是实现 周速记的自动化汇总，实现方法如下：
	1. 下载 Calendar 插件与 dataview 插件，并开启。
	2. 为后续操作打下铺垫，我们先创建周期模板文件
	3. 增加周期模板文件的文档属性，如下图：
	4. ![9f7bcbabedba2707b7342ac55ca708fb_MD5.png](https://cdn.pkmer.cn/images/9f7bcbabedba2707b7342ac55ca708fb_MD5.png!pkmer)
	5. 在文档内容里输入 dataview 语法，用以汇总周期速记数据，如下：
	6. ![01be86c43690e303612dd83feeffd970_MD5.png](https://cdn.pkmer.cn/images/01be86c43690e303612dd83feeffd970_MD5.png!pkmer)
	7. 接下来，我们打开 obsidian 设置界面，进入 Calendar 插件 的设置界面。
	8. 在 Calendar 插件的界面内，进行每周笔记设置的设定填写，如下图：
	9. ![a389c737075dfb1b752ef12c325446ec_MD5.png](https://cdn.pkmer.cn/images/a389c737075dfb1b752ef12c325446ec_MD5.png!pkmer)
	10. **注意事项**：此处仅供参考，可自行定义设置。
	11. 设置完毕后，返回主页面。
8. **第六阶段**，开始运行并使用 Calendar 插件。
	1. 打开命令面板，输入 Calendar，点击 Open 字段，如下图所示：
	2. ![77483a28470f547bb71b51cc1f27ce8d_MD5.png](https://cdn.pkmer.cn/images/77483a28470f547bb71b51cc1f27ce8d_MD5.png!pkmer)
	3. 正常状态下你会得到一个这样的界面显示如下：
	4. ![bb03b580fa3e5235f64600b897f005a5_MD5.png](https://cdn.pkmer.cn/images/bb03b580fa3e5235f64600b897f005a5_MD5.png!pkmer)
	5. 然后点击此列，便可创建周度速记汇总，如下图：
	6. ![4330b4e4046ec2b0fa09c2db88af25ee_MD5.png](https://cdn.pkmer.cn/images/4330b4e4046ec2b0fa09c2db88af25ee_MD5.png!pkmer)

## 可参考语法模板

可参考的日记模板日期格式：

- YYYY 年/MMM/YYYY-MM-DD_dddd

可参考的周期模板日期格式：

- YYYY 年/MMM/gggg-MM-[W]ww

周期 dataview 语法模板：

````
```dataview
table without id 
file.link as ⏰记录的日期,
L.text as 📝今天在ob里的速记
from "【日记】"
where 创建日期.weekyear = this.创建日期.weekyear
flatten file.lists as L
where !L.parent
where meta(L.section).subpath = "今天在ob里的速记"
sort file.link asc
```
````

如果想要筛选汇总指定标签内容，则：

````
```dataview
table without id 
file.link as ⏰记录的日期,
L.text as 📝今天在ob里的速记
from "【日记】"
where 创建日期.weekyear = this.创建日期.weekyear
flatten file.lists as L
where !L.parent
where meta(L.section).subpath = "今天在ob里的速记"
where contains(L.tags, "#标签")
sort file.link asc
```
````
