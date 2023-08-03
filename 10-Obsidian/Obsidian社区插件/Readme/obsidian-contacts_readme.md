---
uid: 2023080322162772
title: Obsidian 插件：【Readme】Contacts
tags: ['obsidian插件', 'readme']
description: 允许管理和组织联系人。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Contacts

> [!Note] 插件名片
> - 插件名称：Contacts
> - 插件作者：vbeskrovnov
> - 插件说明：允许管理和组织联系人。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/vbeskrovnov/obsidian-contacts)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-contacts)

## 概述

允许管理和组织联系人。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/vbeskrovnov/obsidian-contacts/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-contacts]] 插件的自述翻译


# Obsidian联系人插件
介绍一下[Obsidian](https://obsidian.md/)联系人插件！通过这个插件，您可以轻松地在[Obsidian](https://obsidian.md/)中组织和管理您的联系人。只需创建一个包含联系人信息的笔记，并使用插件的功能快速搜索和排序您的联系人。联系人插件还可以帮助您记住联系人的生日，并跟踪您上次见面的时间。

<img width="600" alt="Obsidian Contacts plugin image" src="https://user-images.githubusercontent.com/9114994/209868806-e4d8c95e-e144-4a7f-8b8f-52f036cd2df8.png">

安装

### 自动的

#### 在Obsidian中禁用“安全模式”以安装社区插件：
1. 转到“设置”菜单，选择“社区插件”。
2. 在“社区插件”菜单中，禁用“安全模式”。

#### 安装并启用“联系人”插件：
1. 从“社区插件”菜单中，点击“浏览”。
1. 搜索“联系人”插件。
1. 点击“安装”按钮以添加插件。
1. 在“社区插件”菜单中，启用“联系人”插件。

### 手册
1. 从最新的[发布页面](https://github.com/vbeskrovnov/obsidian-contacts/releases)下载`main.js`、`manifest.json`和`styles.css`。
2. 在Obsidian的插件目录`<VaultFolder>/.obsidian/plugins/`中创建一个名为`obsidian-contacts`的文件夹。最终路径应为`<VaultFolder>/.obsidian/plugins/obsidian-contacts`。
3. 将下载的文件(`main.js`、`manifest.json`和`styles.css`)移动到新创建的文件夹中(```<VaultFolder>/.obsidian/plugins/obsidian-contacts```)。
4. 重新启动Obsidian应用程序。
5. 在“社区插件”设置选项卡中启用“Contacts”插件。

## 使用方法
在设置菜单中启用插件后，您应该会看到联系人按钮出现在左侧边栏中。点击它以在右侧边栏中打开联系人视图。

插件会读取您的联系人文件夹（可以在设置中更改），以在右侧边栏中呈现所有联系人。

### 更改联系人文件夹
1. 进入设置。
2. 找到“联系人”选项卡。
3. 将“联系人文件夹位置”的值更改为一个已存在的文件夹。

### 创建新联系人
1. 在左侧边栏中点击"联系人"图标。联系人视图应该会在右侧边栏中打开。
1. 在右侧边栏中打开的联系人视图中点击"创建"按钮。
1. 填写创建的模板。参考下面的示例：
```
/---contact---/
| key       | value                    |
| --------- | ------------------------ |
| Name      | carl                     |
| Last Name | johnson                  |
| Phone     | +1 555 555 5555          |
| Telegram  | @carlj567                |
| Linkedin  | linkedin.com/in/carlj567 |
| Birthday  | 1966-12-06               |
| Last chat | 2022-12-06               |
| Friends   | [[Bob]] [[Sue]]          |
/---contact---/
```
可以随意添加更多行，并将现有行留空。**请不要重命名**现有的键，因为插件可能会使用它们。

https://user-images.githubusercontent.com/9114994/209380539-7fe10d19-5d73-4435-a0de-f2c5805e0771.mov

### 搜索联系人
您可以使用不同的排序选项来查找所需的联系人：
- 使用按生日排序来查找最近生日的联系人。
- 使用按最后联系日期排序来查找长时间未与之交谈的联系人。
- 使用按姓名排序来查找特定的联系人。

https://user-images.githubusercontent.com/9114994/209383369-d7fc0a42-d1df-4980-93e0-46a8541b00b5.mov

## 联系人文件格式
可以使用以下任何格式来存储Obsidian文件中的联系人数据。新联系人的默认格式是“自定义格式”，但可以在设置中使用“联系人文件模板”菜单项更改此行为。

###（默认）自定义格式
该插件使用的默认格式是用于存储联系人数据的Markdown表格。
```
/---contact---/
| 键         | 值                       |
| --------- | ------------------------ |
| 名字      | 卡尔                     |
| 姓氏      | 约翰逊                   |
| 电话      | +1 555 555 5555          |
| 电报      | @carlj567                |
| 领英      | linkedin.com/in/carlj567 |
| 生日      | 1966-12-06               |
| 最后聊天  | 2022-12-06               |
| 朋友      | [[鲍勃]] [[苏]]           |
/---contact---/
```

### 前置格式

[前置格式](https://help.obsidian.md/Advanced+topics/YAML+front+matter)是Obsidian用于文件的元数据格式，也被[Dataview](https://github.com/blacksmithgu/obsidian-dataview)插件支持，允许您为联系人构建查询。

> :warning: **请勿更改或删除`type`字段**。它用于检测当前文件是否为联系人。

> :warning: **它需要放置在文件的最顶部**。在这里要非常小心！

```
---
name:
  first: carl
  last: johnson
phone: +1 555 555 5555
telegram: @carlj567 
linkedin: linkedin.com/in/carlj567
birthday: 1966-12-06 
last_chat: 2022-12-06 
friends: "[[Bob]] [[Sue]]"
type: contact
---
```



