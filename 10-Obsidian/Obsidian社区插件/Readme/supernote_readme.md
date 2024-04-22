---
uid: 2024042221312847
title: Obsidian 插件：【Readme】Unofficial Supernote by Ratta Integration
tags: ['obsidian插件', 'readme']
description: 查看Supernote笔记，从笔记生成markdown并捕获屏幕镜像。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Unofficial Supernote by Ratta Integration

> [!Note] 插件名片
> - 插件名称：Unofficial Supernote by Ratta Integration
> - 插件作者：philips
> - 插件说明：查看 Supernote 笔记，从笔记生成 markdown 并捕获屏幕镜像。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/philips/supernote-obsidian-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?supernote)

## 概述

查看 Supernote 笔记，从笔记生成 markdown 并捕获屏幕镜像。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/philips/supernote-obsidian-plugin/main/README.md)

---

## Readme(翻译）

下面是 [[supernote]] 插件的自述翻译

【机翻】

# Supernote Obsidian 插件

我使用我的 Supernote 来记录手写笔记和阅读文件。

但是，我已经在使用 Obsidian 来组织和记录所有我的数字笔记。

这个插件使我（现在也是你！）能够将手写笔记导入到 Obsidian 中，并在桌面、手机或平板电脑上查看它们。

这个插件有三个主要功能：

- 📝 在你的 Obsidian Vault 中查看 Supernote `*.note` 文件。你也可以从你的 Markdown 笔记中链接到这些笔记 `[我的笔记](example.note)`。
- ➡️ 将 Supernote `*.note` 文件导出为 PNG 图像和/或 markdown 文件，并附加到你的 Vault 中。
- 📺 通过 [屏幕镜像](https://support.supernote.com/en_US/organizing-managing/1791924-screen-mirroring) 从 Supernote 复制图像到你当前的笔记中，使用“插入 Supernote 镜像图像”命令（[演示视频](https://youtu.be/Ih_NW-z_aLw)）

**视频演示**

[![观看视频](https://cdn.pkmer.cn/covers/supernote_1_0.jpeg!pkmer)](https://www.youtube.com/watch?v=tEoW35fYVew)

## 通过社区插件商店安装

该插件可通过 [Obsidian社区插件商店](https://obsidian.md/plugins?id=supernote) 获取。点击上面的链接或搜索“Unofficial Supernote by Ratta Integration”进行安装。

## 通过 BRAT 安装

要测试此插件的 Beta 版本，请按照以下步骤操作：

- 通过 Community Plugin Search 安装 BRAT 插件
- [阅读文档](https://tfthacker.com/BRAT)
- 添加 `https://github.com/philips/supernote-obsidian-plugin`
- 将 `main.js`、`manifest.json` 复制到您的保险库 `VaultFolder/.obsidian/plugins/obsidian-plugin-supernote/` 中，从 [https://github.com/philips/supernote-obsidian-plugin/releases](https://github.com/philips/supernote-obsidian-plugin)。

## 已知问题

- 暂无。您需要 [创建一个新问题](https://github.com/philips/supernote-obsidian-plugin/issues) 吗？

## 路线图 / 想法

- 🔗 笔记链接
- 🎛️ 设置面板，用于控制文件布局、链接等

## 谢谢

感谢 [Tiemen Schuijbroek](https://gitlab.com/Tiemen/supernote) 开发了我分叉的初始 supernote Typescript 库。

## 常见问题

**Q** 为什么生成的 Markdown 文件中没有目录？

**A** 因为 [Obsidian 大纲](https://help.obsidian.md/Plugins/Outline) 侧边栏实现了相同的功能。

## 相关资源

- [Brandon Boswell的Obsidian / Notion中的E-Ink笔记](https://www.youtube.com/watch?v=kW8I8B-eCRk)
- [pixel leaves的OBSIDIAN中的手写学术笔记，配备Supernote](https://www.youtube.com/watch?v=lzYCPkVnqIM)

## 其他有用的插件

这些并不是推荐，但可能与这个插件搭配使用。

- [Ozan's Image in Editor Plugin](https://github.com/ozntel/oz-image-in-editor-obsidian)
- [Obsidian OCR Plugin](https://github.com/schlundd/obsidian-ocr-plugin)

## 资金

我个人不接受这个项目的资金或捐赠。然而，如果你感兴趣的话，考虑捐赠给 [Signal基金会](https://signal.org/donate/)。

## 开发者笔记

### 如何使用

- 确保您的 NodeJS 至少是 v16 (`node --version`)。
- 克隆这个仓库。
- 设置依赖项

```
git submodule init
git submodule update
cd supernote-typescript/
npm run build
npm link
cd ..
npm link supernote-typescript/
```

- 运行 `npm i` 或 `yarn` 来安装依赖项。
- 运行 `npm run dev` 来启动监视模式下的编译。



