---
uid: 2023080322200938
title: Obsidian 插件：【Readme】Icons
tags: ['样式工具', '美化', 'obsidian插件', 'readme']
description: 将图标添加到您的 Obsidian 中，扩充默认支持的图标集。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Icons

> [!Note] 插件名片
> - 插件名称：Icons
> - 插件作者：Camillo Visini
> - 插件说明：将图标添加到您的 Obsidian 中，扩充默认支持的图标集。
> - 插件分类：['样式工具', '美化', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/visini/obsidian-icons-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-icons-plugin)

## 概述

将图标添加到您的 Obsidian 中，扩充默认支持的图标集。

![Icons](https://cdn.pkmer.cn/covers/obsidian-icons-plugin.PNG!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/visini/obsidian-icons-plugin/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-icons-plugin]] 插件的自述翻译


# Obsidian图标插件

![Obsidian图标插件](https://github.com/visini/obsidian-icons-plugin/blob/main/docs/banner.png?raw=true)

> **注意**: 如果遇到任何错误，请在GitHub上开启一个新的问题报告。

为您的Obsidian笔记添加图标。支持的图标集包括：

- [Remix Icon](https://remixicon.com/) - 2172个图标
- [FontAwesome (Free)](https://fontawesome.com/) - 1560个图标
- _路线图中包括更多的图标集_

您可以在_图标插件_设置中切换要显示的图标集。

该插件使用[react-icons](https://github.com/react-icons/react-icons)通过Markdown后处理器来渲染图标。灵感来自于[obsidian-citation-plugin](https://github.com/hans/obsidian-citation-plugin)，基于[obsidian-sample-plugin](https://github.com/obsidianmd/obsidian-sample-plugin)。

## 演示和截图

![演示](https://github.com/visini/obsidian-icons-plugin/blob/main/docs/demo.gif?raw=true)
> 一个演示视频，展示了图标选择器和渲染的Markdown。

![选择器截图](https://github.com/visini/obsidian-icons-plugin/blob/main/docs/screenshot-picker.png?raw=true)
> 从图标选择器中选择任何图标（在设置中选择性地激活图标包）。

![渲染截图](https://github.com/visini/obsidian-icons-plugin/blob/main/docs/screenshot-rendered.png?raw=true)
> 渲染的Markdown将相应地显示图标。

如何报告错误

由于这是一个实验性的插件，预计会出现错误。请在该存储库中打开一个问题，并详细描述您遇到的错误。

图标集|许可证|版本|数量
---|---|---|---
[Font Awesome](https://fontawesome.com/)|[CC BY 4.0许可证](https://creativecommons.org/licenses/by/4.0/)|5.12.1|1560
[Remix Icon](https://github.com/Remix-Design/RemixIcon)|[Apache License Version 2.0](http://www.apache.org/licenses/)|2.5.0|2172

自定义图标

为了自定义图标以更改其颜色、大小等，您应该创建一个CSS片段。

要做到这一点，请按照以下步骤操作：

1. 转到设置->外观->CSS片段
2. 打开CSS片段选项，然后单击文件夹以导航到其文件夹。
3. 创建一个名为icons.css的新文件
4. 在您喜欢的文本编辑器中打开icons.css
5. 添加以下内容：
   ```
   .obsidian-icon {
     ...更改在此处进行。
   }
   ```
6. 返回到设置->外观->CSS片段
7. 单击重新加载按钮
8. 应该出现一个名为“icons”的按钮，将其打开。

您的更改现在将被应用，并且您可以在需要时编辑该文件。

## 开发

## 开发步骤

- 将此仓库克隆到 `./your-obsidian-vault/.obsidian/plugins/`
- 运行 `yarn` 安装依赖
- 运行 `npm run dev` 以启动编译并进入监听模式。

### 发布新版本

- 使用新的版本号更新你的 `manifest.json`，例如 `1.0.1`，并指定你的插件所需的最低 Obsidian 版本。
- 在你的 `versions.json` 文件中更新 `"new-plugin-version": "minimum-obsidian-version"`，这样旧版本的 Obsidian 就可以下载与其兼容的旧版本插件。
- 使用你的新版本号作为 "Tag version" 创建新的 GitHub 发布。使用精确的版本号，不要包含前缀 `v`。参考这里的示例：https://github.com/obsidianmd/obsidian-sample-plugin/releases
- 将 `manifest.json`、`main.js`、`styles.css` 文件作为二进制附件上传。
- 发布该版本。
- 为方便起见，使用 `make release` 命令。

### 手动安装插件

- 将 `main.js`、`styles.css`、`manifest.json` 复制到你的 vault 文件夹 `VaultFolder/.obsidian/plugins/obsidian-icons-plugin/` 中。

### API文档

请参阅https://github.com/obsidianmd/obsidian-api



