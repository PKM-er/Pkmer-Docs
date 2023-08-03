---
uid: 20230803203915
title: Obsidian 插件：【Readme】Etherpad Lite
tags: ['obsidian插件', 'readme']
description: .复制并与Etherpad Lite服务器同步笔记，以解锁与他人的简单基于网络的协作。
author: egradman
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Etherpad Lite

> [!Note] 插件名片
> - 插件名称：Etherpad Lite
> - 插件作者：egradman
> - 插件说明：.复制并与Etherpad Lite服务器同步笔记，以解锁与他人的简单基于网络的协作。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/egradman/obsidian-etherpad-lite)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-etherpad-plugin)

## 概述

.复制并与Etherpad Lite服务器同步笔记，以解锁与他人的简单基于网络的协作。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/egradman/obsidian-etherpad-lite/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-etherpad-plugin]] 插件的自述翻译


# Etherpad-lite Obsidian 插件

我所有的初稿都是在 Obsidian 中完成的。通常，第二稿是与他人合作完成的。我发现自己将我的工作剪切并粘贴到 Google 文档中，与同事共享 URL，并用 Google 文档的链接替换原始文档。这使得我的工作无法搜索、无法标记和无法链接。

该插件使用 Etherpad-Lite 服务器作为轻量级协作工具。Etherpad-Lite 是一个没有花哨功能的基于 web 的编辑器。我一直认为它是“编辑器中的粘贴板”。通过这个插件，你可以将任何笔记上传到 Etherpad-Lite 服务器，分享 URL，并允许他人进行协作编辑。文档仍然保存在你的 vault 中。每次打开它时，其内容将被来自 Etherpad-Lite 服务器的最新版本替换。

当你对结果满意并且不想再进行同步时，只需从 frontmatter 中删除 `etherpad_id` 键。

有三个命令：

将当前笔记转换为Etherpad

此命令将当前笔记的文本上传到您的Etherpad-Lite服务器。服务器上的笔记ID将与您的保险库中的笔记的基本名称相同。此命令会在您的文档的正文前添加一个元数据键（`etherpad_id`），以向插件表明此笔记的正式位置在云端。

### 从Etherpad替换笔记内容

该命令会显式地用服务器上的版本替换当前笔记的内容。它使用`etherpad_id`前置数据键来确定从哪里获取。如果不存在这样的键，则该命令不执行任何操作。

这与打开具有`etherpad-id`键的笔记时的行为完全相同。

在系统浏览器中访问Etherpad的笔记

此命令将在您的系统浏览器中打开Etherpad-Lite服务器。复制URL并与他人分享！

## 配置

设置服务器的 `host`、`port` 和 `apikey`。

API密钥可以在服务器安装根目录下的 `APIKEY.txt` 文件中找到。

设置一个Etherpad-Lite服务器

“等等...我必须设置自己的服务器吗？”

比听起来容易。可以在AWS上使用免费的EC2机器，甚至在Heroku上完成。大约需要2分钟，但超出了本文档的范围。您可以保持所有默认设置，以获得一个功能齐全（但不安全）的系统。按照[Etherpad-Lite说明](https://github.com/ether/etherpad-lite)进行操作。

别忘了从`APIKEY.txt`中获取您的API密钥！

我知道。这部分感觉像是一个诱饵和转换。

## 待办事项

- 断开文档与Etherpad的连接并删除远程版本的命令
- 当文档打开时自动更新？
- 选择偏好随机的pad_id的选项

## 注意事项

- 哎呀！由于我使用的某个库存在一些错误的依赖关系，目前在移动设备上无法正常工作。我会尽快修复！

https://user-images.githubusercontent.com/103129/158699049-6d7801d9-82d0-416a-bcdb-dcdb6fd14987.mp4



