---
uid: 2023120719361168
title: Obsidian 插件：【Readme】Markdown Image Caption
tags: ['obsidian插件', 'readme']
description: 生成基于Markdown的图像标题
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Markdown Image Caption

> [!Note] 插件名片
> - 插件名称：Markdown Image Caption
> - 插件作者：Hananoshika Yomaru
> - 插件说明：生成基于 Markdown 的图像标题
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/HananoshikaYomaru/obsidian-image-caption)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?md-image-caption)

## 概述

生成基于 Markdown 的图像标题

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/HananoshikaYomaru/obsidian-image-caption/main/README.md)
>

---

## Readme(翻译）

下面是 [[md-image-caption]] 插件的自述翻译

# Obsidian Markdown 图片标题

轻松生成图片标题。完全基于 Markdown。与 Obsidian Publish 和任何 Markdown 编辑器兼容。

![](https://cdn.pkmer.cn/covers/md-image-caption_1_0.gif)

演示： <https://www.youtube.com/watch?v=dee_OzcibLI>

> [!CAUTION]
> 此插件仅适用于外部图片。我不使用本地图片，因此没有支持的意图。但我欢迎贡献。

## 用法

```md
%% caption ![alt](src) %%

%% lightbox ![alt](src) %%

%% lightbox-{group} ![alt](src) %%
```

然后在执行“在当前文件上生成图像标题”命令时，它将生成一个包含 `<figcaption>` 元素的 `<figure>` 元素。

> [!TIP]
> 您将希望与自定义保存插件一起使用此功能，在保存时生成图像标题。
它是如何工作的？

该插件将识别语法，然后检查是否在其下方有一个图像元素。如果没有，则会生成一个。如果有，则图像元素将被生成的结果替换。

安装

### Obsidian 市场

您可以在社区插件商店上安装它。

### 通过 BRAT

1. 安装 BRAT 插件
2. 进入插件选项，添加 beta 插件，复制并粘贴此存储库的链接
3. 插件将自动出现在已安装的社区插件列表中，启用此插件

### 手动安装

1. 切换到 `.obsidian/plugins` 目录
2. 克隆该仓库
3. 运行 `cd obsidian-tag-generator && bun install && bun run build`
4. 完成！🎉

### 更新

1. 切换到 `.obsidian/plugins/obsidian-tag-generator` 目录
2. 执行 `git pull`
3. 执行 `bun install && bun run build`
4. 完成 🎉

## 注意事项

1. 如果您想要做出贡献，请先在 GitHub 上开启一个问题。
2. 您可以使用 CSS 来为标题添加样式。

## 支持

如果您喜欢这个插件，请通过在 <https://www.buymeacoffee.com/yomaru> 上给我买杯咖啡来支持我的工作和热情。
