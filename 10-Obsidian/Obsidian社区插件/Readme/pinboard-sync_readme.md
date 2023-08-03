---
uid: 20230803213020
title: Obsidian 插件：【Readme】Pinboard Sync
tags: ['obsidian插件', 'readme']
description: 将Pinboard.in链接与每日笔记同步
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Pinboard Sync

> [!Note] 插件名片
> - 插件名称：Pinboard Sync
> - 插件作者：Mathew Spolin
> - 插件说明：将Pinboard.in链接与每日笔记同步
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Automatt/obsidian-pinboard-sync)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?pinboard-sync)

## 概述

将Pinboard.in链接与每日笔记同步



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Automatt/obsidian-pinboard-sync/master/README.md)
> 

---

## Readme(翻译）

下面是 [[pinboard-sync]] 插件的自述翻译



# Obsidian Pinboard同步

Obsidian插件，将您在[Pinboard](http://Pinboard.in)上保存的链接添加到您的Obsidian每日笔记中，并定期进行同步。

为什么？

多年来，我一直使用Pinboard来存储来自互联网的有趣网站的链接，并借助于出色的应用程序[Pinner](http://pinnerapp.net)在iOS设备上使用。我希望Obsidian能够将这些链接作为我的每日笔记的一部分存储起来，以便提醒我回顾它们，并且我还可以添加一些关于每个网站的笔记。

## 免责声明 🚨

初始同步将会将您在Pinboard上的最近帖子回填到Obsidian中。这可能意味着创建/修改多达一百个文件。我建议您首先在一个新的保险库中测试此插件，以确保您对结果满意。您可能不希望将带有Pinboard链接的每日笔记追溯到那么久以前。

使用方法

该插件将获取您在Pinboard上发布的最新链接，并将它们转储到与链接存储日期对应的每日笔记中。

它还会显示与链接相关联的任何标签。

它将在指定的时间间隔内重新获取帖子。

## 设置

| 设置项         | 描述                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------ |
| Token           | 你的Pinboard账户的API令牌。可以在[设置/密码](https://pinboard.in/settings/password)中找到|
| 标题部分 | 控制链接在你的每日笔记中显示的位置。默认为`## Pinboard`    |
| 同步频率  | 你希望多久从Pinboard API中获取一次帖子                                      |
| 标签前缀      | 你可以在Pinboard标签前加上父标签（例如`#pinboard/work` `#pinboard/school`）   |
| 最近的帖子    | 同步时要使用的最近帖子数量。最多可以检索到最近的100个帖子。           |

限制

该插件目前只同步最近的xx篇文章，其中xx <100。为什么？因为我刚刚从Roam切换到使用Obsidian，我不想要1000个只是旧的Pinboard链接的每日笔记。

该插件目前不支持“Pinboard笔记”，因为我从未使用过。

感激之情 🙏

这个插件的实现离不开[liamcain](https://github.com/liamcain/obsidian-things-logbook)和[mrled](https://github.com/mrled/pinboardtool)的出色工作。非常感谢！

## 贡献

要对此插件进行更改，请先确保已安装所需的依赖项。

```
yarn install
```

### 开发

要启动带有启用模式的插件构建，请运行以下命令：

```
yarn dev
```

_注意：如果您尚未安装热重载插件，系统将提示您安装。在开始热重载之前，您需要在Obsidian Vault中启用该插件。您可能需要刷新插件列表才能看到它。_

### 发布

要开始发布构建，请运行以下命令：

```
yarn build
```

---

<sub>此插件由 (create-obsidian-plugin)[https://www.npmjs.com/package/create-obsidian-plugin] 生成</sub>



