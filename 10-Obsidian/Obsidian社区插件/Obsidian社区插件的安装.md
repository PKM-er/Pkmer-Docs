---
uid: 20230329145808
title: Obsidian 社区插件的安装
description: 
tags: 
author: OS
type: other
draft: false
editable: false
modified: 20230429181107
public: yes
---

# Obsidian 社区插件的安装

## 最简单的方式（也可能是最困难）

通过 Obsidian 内置的“第三方插件”-“社区插件”直接进行下载。但会不可预测的遇到“无法打开”的情况，即存在网络问题。

![](https://cdn.pkmer.cn/images/4141b98fb96d57bafd005f7ad7bbb943_MD5.png)

> [!推荐]
> 使用 我们的 Obsidian Lite ，一劳永逸的解决该问题

## 手动安装

### 全插件列表查找插件链接

可以通过 OB 官方的列表： [https://obsidian.md/plugins](https://obsidian.md/plugins)，来查询 OB 插件的下载链接（以下选一即可）。

### 下载插件安装包

上一步获得是该插件官方认可的（ github 地址），在插件地址页面，点击右侧的“release”

![](https://cdn.pkmer.cn/images/f7c8f5661d79491658024083a89b7dcc_MD5.png)

之后就能看到该插件不同的发行版本，例如下图显示的有 0.1.2 版本、0.1.1 版本。

![](https://cdn.pkmer.cn/images/f7cedd89bbd3a58c50a616f34646f788_MD5.png)

请注意上图红框部分，OB 的插件主要由 3 类文件，命名为 `main.js`、`manifest.json`、`styles.css`，也有些插件可能没有其中的某个文件。请将上述 3 个文件下载到本地，请勿重命名，然后新建一个文件夹将上述的文件放入。

文件夹的名字需要是英文。一般我是以库的名称中非 Obsidian 的字段来命名，例如这个库叫 `obsidian-kanban`，我就把这文件夹命名为 `kanban`。

### 将插件文件夹拷贝到 ob 库文件夹内

1. 需要将 Obsidian 的插件文件夹拷贝到 OB 库文件夹内。 以上述的 kanban 插件文件夹为例。需要在你仓库的文件夹中找到 `.obsidian` 文件夹
2. 在 `.obsidian` 文件夹内新建一个 `plugins` 的文件夹。（如果已有可忽略这步）
3. 将刚刚 kanban 文件夹（或者你下载好的文件）复制到 `plugins` 的文件夹内。（你也可以在这里新建插件的文件夹，将上一步下载的文件都放进去）

### 重启 obsidian

第一次启动插件，需要重启 Obsdiain。重启后，在第三方插件中就能看到更多信息。

![[Pasted image 20230127224149.png]]

上图左箭头代表刷新插件文件夹，这样以后就不用重启 OB 也能刷新插件。

上图右箭头可以直接打开插件文件夹放置位置。

最后一步，我们还要点击插件右边的开关按钮，启动插件。这样插件就能正常运行了。

## 通过 BRAT 插件维护

通过 [[Obsidian 插件：Obsidian42-BRAT（安装测试版插件）]]
