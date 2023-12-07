---
uid: 2023120719301648
title: Obsidian 插件：【Readme】Halo
tags: ['obsidian插件', 'readme']
description: Halo的Obsidian集成支持将内容发布到Halo网站。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Halo

> [!Note] 插件名片
> - 插件名称：Halo
> - 插件作者：Ryan Wang
> - 插件说明：Halo 的 Obsidian 集成支持将内容发布到 Halo 网站。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/halo-sigs/obsidian-halo)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?halo)

## 概述

Halo 的 Obsidian 集成支持将内容发布到 Halo 网站。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/halo-sigs/obsidian-halo/main/README.md)
>

---

## Readme(翻译）

下面是 [[halo]] 插件的自述翻译

# Halo 的 Obsidian 插件

该插件允许您将 Obsidian 文档发布到 [Halo](https://github.com/halo-dev/halo)。

[中文文档](./README.zh-CN.md)

## 安装

1. 在 Obsidian 的插件浏览器中搜索 "Halo"。
2. 点击 **安装**。

## 待办事项

- [x] 国际化
- [ ] 上传图片
- [x] 将此插件发布到 Obsidian 社区

## 预览

![设置](https://cdn.pkmer.cn/covers/halo_2_0.png!pkmer)

![命令](https://cdn.pkmer.cn/covers/halo_2_1.png!pkmer)

## 开发

1. [创建一个新的 Obsidian vault](https://help.obsidian.md/Getting+started/Create+a+vault) 用于开发。
2. 将此仓库克隆到新创建的 vault 的 **plugins 文件夹**中。

   ```bash
   cd path/to/vault/.obsidian/plugins

   git clone https://github.com/ruibaby/obsidian-halo
   ```

3. 安装依赖项

   ```bash
   cd obsidian-halo

   npm install
   ```

4. 构建插件

   ```bash
   npm run dev
   ```

5. 重新加载 Obsidian 并在设置中启用插件。

## 鸣谢

- [obsidian-wordpress](https://github.com/devbean/obsidian-wordpress)：这个仓库提供了原始的想法。



