---
uid: 20230329145846
title: Obsidian 社区插件的安装
tags: [Obsidian, 社区插件, 安装, 基础使用]
description: Obsidian 社区插件的安装，社区插件安装教程，第三方插件安装方法
author: OS
type: basic
draft: false
editable: false
modified: 20240201112250
---

# Obsidian 社区插件的安装

## 最简单的方式（也可能是最困难）

通过 Obsidian 内置的“第三方插件”-“社区插件”直接进行下载。但会不可预测的遇到“无法打开”的情况，即存在网络问题。

![](https://cdn.pkmer.cn/images/4141b98fb96d57bafd005f7ad7bbb943_MD5.png!pkmer)

> [!推荐]
> 使用 我们的 Obsidian PKMer ，一劳永逸的解决该问题

也可以通过 PKMer 安装的手把手教程，用同样的方法安装其他插件

- [[PKMer插件电脑端安装手把手教程]]
- [[PKMer插件安卓端安装手把手教程]]

## 手动安装

### 全插件列表查找插件链接

可以通过 OB 官方的列表： [https://obsidian.md/plugins](https://obsidian.md/plugins)，来查询 OB 插件的下载链接（以下选一即可）。

### 下载插件安装包

上一步获得是该插件官方认可的（ Github 地址），在插件地址页面，点击右侧的“release”

![](https://cdn.pkmer.cn/images/f7c8f5661d79491658024083a89b7dcc_MD5.png!pkmer)

之后就能看到该插件不同的发行版本，例如下图显示的有 0.1.2 版本、0.1.1 版本。

![](https://cdn.pkmer.cn/images/f7cedd89bbd3a58c50a616f34646f788_MD5.png!pkmer)

请注意上图红框部分，OB 的插件主要由 3 类文件，命名为 `main.js`、`manifest.json`、`styles.css`，也有些插件可能没有其中的某个文件。请将上述 3 个文件下载到本地，请勿重命名，然后新建一个文件夹将上述的文件放入。

文件夹的名字需要是英文。一般我是以库的名称中非 Obsidian 的字段来命名，例如这个库叫 `obsidian-kanban`，我就把这文件夹命名为 `kanban`。

### 将插件文件夹拷贝到 Obsidian 仓库文件夹内

1. 需要将 Obsidian 的插件文件夹拷贝到 OB 库文件夹内。 以上述的 kanban 插件文件夹为例。需要在你仓库的文件夹中找到 `.obsidian` 文件夹
2. 在 `.obsidian` 文件夹内新建一个 `plugins` 的文件夹。（如果已有可忽略这步）
3. 将刚刚 kanban 文件夹（或者你下载好的文件）复制到 `plugins` 的文件夹内。（你也可以在这里新建插件的文件夹，将上一步下载的文件都放进去）

### 重启 Obsidian

第一次启动插件，需要重启 Obsidian。重启后，在第三方插件中就能看到更多信息。

![image.png](https://cdn.pkmer.cn/images/20230515233240.png!pkmer)

上图刷新图标代表刷新插件文件夹，这样以后就不用重启 OB 也能刷新插件。

上图文件夹图标可以直接打开插件文件夹放置位置。

最后一步，我们还要点击插件右边的开关按钮，启动插件。这样插件就能正常运行了。

## 通过 BRAT 插件维护

通过 [[obsidian42-brat]] 第三方插件进行维护，可以安装官方市场未上架的插件
