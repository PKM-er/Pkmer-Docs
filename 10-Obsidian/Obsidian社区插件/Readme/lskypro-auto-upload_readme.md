---
uid: 20230803231105
title: Obsidian 插件：Image To Lskypro
tags: ['obsidian插件', 'readme']
description: 自动将剪贴板中的图像上传到Lskypro。
author: AI
type: readme
draft: false
editable: false
modified: 20230803232547
---

# Obsidian 插件：Image To Lskypro

> [!Note] 插件名片
> - 插件名称：Image To Lskypro
> - 插件作者：NekouTarou
> - 插件说明：自动将剪贴板中的图像上传到 Lskypro。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/NekoTarou/lskypro-auto-upload)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?lskypro-auto-upload)

## 概述

自动将剪贴板中的图像上传到 Lskypro。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/NekoTarou/lskypro-auto-upload/main/README.md)
>

---

## Readme(翻译）

下面是 [[lskypro-auto-upload]] 插件的自述翻译

# Obsidian LskyPro 自动上传插件

这是一个工具，基于 [renmu123/obsidian-image-auto-upload-plugin](https://github.com/renmu123/obsidian-image-auto-upload-plugin.git) 的修改，支持直接将图片上传到图床 [Lsky](https://github.com/lsky-org/lsky-pro)。

**更新插件后请记得重新启动 Obsidian**。

# 开始

1. 安装 LskyPro 图床并进行配置。配置方法请参考 [官方网站](https://www.lsky.pro/)
2. 打开 LskyPro 的界面
3. 使用授权界面获取 Token 并记录下来
4. 打开插件配置项，设置 LskyPro 的域名（例如：<https://lsky.xxx.com）>
5. 设置 LskyPro 的 Token
6. 存储策略 ID 是可选配置，根据 LskyPro 的策略和自身需求进行配置。如果只有一个策略，则无需设置。

# 特点

从剪贴板粘贴图片时，支持直接上传，并且目前支持复制系统中的图片并直接上传。

通过设置 `frontmatter` 控制单个文件的上传，其默认值为 `true`，请将值设置为 `false` 以控制关闭。

支持 ".png", ".jpg", ".jpeg", ".bmp", ".gif", ".svg", ".tiff"（因为它直接调用了 LskyPro 接口，理论上支持图片床支持的文件都可以）。

```yaml
---
image-auto-upload: true
---
```

通过命令上传所有本地图片文件

按下 ctrl+P 并输入 upload all images，然后按回车，将自动上传所有本地图片

路径解析优先级将按照以下顺序进行搜索：

1. 绝对路径，指的是基于库的绝对路径
2. 相对路径，以./或../开头
3. 最短可能形式

下载整个互联网到本地

按下 ctrl+P，输入上传所有图片，然后按回车，将自动上传所有本地图片。

支持拖放操作

允许拖放多个文件

# TODO

# 谢谢

[renmu123/obsidian-image-auto-upload-plugin](https://github.com/renmu123/obsidian-image-auto-upload-plugin.git)
