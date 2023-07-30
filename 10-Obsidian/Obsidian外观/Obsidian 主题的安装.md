---
uid: 20230329145846
title: Obsidian 主题的安装
tags: [Obsidian, 主题, 安装]
description: Obsidian 社区主题的安装，社区主题安装教程，第三方主题安装方法
author: cuman
type: other
draft: false
editable: false
modified: 20230730214911
---

# Obsidian 主题的安装

## 最简单的方式（也可能是最困难）

通过 Obsidian 内置的“外观”-“主题”直接进行下载。但会不可预测的遇到“无法打开”的情况，即存在网络问题。

![image.png](https://cdn.pkmer.cn/images/202307302124408.png!pkmer)

> [!推荐]
> 使用 我们的 Obsidian Pkmer ，一劳永逸的解决该问题

## 手动安装

### 查找并下载主题

可以通过 [主题集市 (pkmer.cn)](https://pkmer.cn/products/theme/themeMarket/)，来查询 OB 主题，并可以直接下载压缩包。

![image.png](https://cdn.pkmer.cn/images/202307302128324.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/202307302129322.png!pkmer)

如上图所示，OB 的主题主要由 2 个文件组成，分别为 `manifest.json`、`theme.css`，也有些主题可能没有 `manifest.json` 文件,但至少包含一个 css 扩展名结尾的文件。

### 将主题文件夹拷贝到 ob 库文件夹内

如下图点击打开主题文件夹，会自动进入 `themes` 的文件夹，如果没有进入 `themes`，按如下步骤手动建立 `themes` 文件夹。

![image.png](https://cdn.pkmer.cn/images/202307302137213.png!pkmer)

> 1. 在你库的文件夹中找到 `.obsidian` 文件夹
> 2. 在 `.obsidian` 文件夹内新建一个 `themes` 的文件夹。（如果已有可忽略这步）
找到 `themes` 文件夹后，下面我们以的 Blue Topaz 主题为例讲一下如何安装下载的主题。

1. 在 `themes` 文件夹中新建一个 `Blue Topaz` 文件夹。（按自己实际下载的主题名称）
2. 将刚刚下载的压缩包的内容解压到 `Blue Topaz` 的文件夹内。
![image.png](https://cdn.pkmer.cn/images/202307302135084.png!pkmer)

### 应用新主题

重启 Obsdiain 后，在外观 -- 主题中就可以选择刚才下载的主题。

![image.png](https://cdn.pkmer.cn/images/202307302143847.png!pkmer)

这样新主题就应用成功了。

## 自动安装（国内推荐）

为了解决插件和主题下载困难的问题，pkmer 通过阿里云加速，建立了一个官方市场镜像，可以通过 Obsidian-pkmer 插件，下载并自动安装。做到了跟官方市场一样的体验，又不用担心网络问题。

## 通过 BRAT 主题维护

通过 [[obsidian42-brat]] 第三方主题进行维护，可以安装官方市场未上架的主题

## 通过 github 安装

原理跟手动安装一致，关键是从 github 仓库中找到这两个文件下载

![image.png](https://cdn.pkmer.cn/images/202307302145455.png!pkmer)
