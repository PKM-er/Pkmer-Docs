---
uid: 2023080322201494
title: Obsidian 插件：Image Inserter
tags: ['效率', '图片', '搜索/排序', '第三方工具集成', 'obsidian插件', 'readme']
description: 这个插件可以帮助你在 Obsidian 内，就从 Unsplash 或 Pixabay 搜索并插入图像到笔记中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Image Inserter

> [!Note] 插件名片
> - 插件名称：Image Inserter
> - 插件作者：Ray Hao
> - 插件说明：这个插件可以帮助你在 Obsidian 内，就从 Unsplash 或 Pixabay 搜索并插入图像到笔记中。
> - 插件分类：[' 效率 ', ' 图片 ', ' 搜索/排序 ', ' 第三方工具集成 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/cloudy9101/obsidian-image-inserter)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?insert-unsplash-image)

## 概述

这个插件可以帮助你在 Obsidian 内，就从 Unsplash 或 Pixabay 搜索并插入图像到笔记中。

![Image Inserter](https://cdn.pkmer.cn/covers/insert-unsplash-image.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/cloudy9101/obsidian-image-inserter/master/README.md)
>

---

## Readme(翻译）

下面是 [[insert-unsplash-image]] 插件的自述翻译

# Obsidian 图像插入器

该插件帮助用户从一个或多个图像源轻松搜索和插入图像到编辑器中。

# 特点

- 从 Unsplash / Pixabay / Pexels 搜索图片（将来会支持更多来源）
- 本地插入图片（将其下载到资源文件夹中）或远程插入图片（仅插入图片 URL）
- 插入图片时设置首选质量
- 设置默认图片尺寸，仅支持宽度或宽度和高度
- 在搜索时设置首选图片方向
- 使用自定义的键和值格式将图片插入到前置元数据中

# 支持的图片来源

- [Unsplash](https://unsplash.com) Unsplash 提供超过 300 万张免费的高分辨率图片。
- [Pixabay](https://pixabay.com) 超过 280 万张高质量的库存图片、视频和音乐由我们才华横溢的社区共享。
- [Pexels](https://pexels.com) 最好的免费库存照片、免版税图片和视频由创作者共享。

# 用法

### 在当前位置插入图片

[demo.webm](https://user-images.githubusercontent.com/5436425/194984473-506249c2-b3ed-4c3d-835b-494f43c7684a.webm)

在编辑笔记并想要从 Unsplash 插入一张图片时：

1. 打开命令面板（⌘+P / Ctrl+P）。
2. 搜索命令“Image Inserter: Insert Image”。
3. 点击该命令，然后会打开一个模态框。
4. 输入一些描述你想要插入的图片的关键词，例如机器人。
5. 等待片刻，会显示来自 Unsplash / Pixabay / Pexels 的几张图片。
6. 点击你想要插入的图片。
7. 图片现在应该已经插入到你的笔记中。

### 将图片插入到前置元数据

关于 [前置元数据](https://help.obsidian.md/Advanced+topics/YAML+front+matter)。

一些插件或驱动站点生成器可以从前置元数据中读取元数据，并可能从元数据中提取标题图像或封面图像。

我们的将图片插入到前置元数据的功能在这些情况下应该很有用。

如果您想将图片插入到前置元数据中：

1. 在插件设置选项卡中设置前置元数据的键和值格式。
2. 打开要编辑的 Markdown 文件。
3. 打开命令面板（⌘+P / Ctrl+P）。
4. 搜索命令“Image Inserter: Insert Image in Frontmatter”并点击。
5. 在打开的模态框中搜索并点击要插入的图片。
6. 图片的 URL 应该以设置的键和值格式插入到您的文件的前置元数据中。

# 提示

您还可以为“图像插入器：插入图像”和“图像插入器：在正文中插入图像”命令设置热键，这样您就可以在不打开命令面板并搜索它的情况下激活该命令。[自定义热键](https://help.obsidian.md/Customization/Custom+hotkeys)

## 快捷键绑定

在图像搜索模态框中，有几个方便的快捷键绑定。

`Ctrl + n` -> 选择下一张图片

`Ctrl + p` -> 选择上一张图片

`Ctrl + u` -> 切换图像提供商

`Ctrl + i` -> 切换图像质量

# 安装

### 从社区插件列表中（推荐）

在 Obsidian 的社区插件浏览器中搜索“Image Inserter”。

在 Obsidian 设置中启用插件（在“社区插件”下找到“Image Inserter”）。

### 手动安装插件

将 main.js、styles.css 和 manifest.json 复制到您的 vault VaultFolder/.obsidian/plugins/insert-unsplash-image/ 目录中。

# 注意事项

### Unsplash API 代理

在您的编辑器和 Unsplash API 之间，有一个在我的服务器上运行的 HTTP 代理。这意味着您的所有搜索输入都会首先发送到我的服务器。如果您不能接受这一点，请不要使用此插件。

代理服务器是必需的，因为 Unsplash API 在从中获取数据时需要客户端 ID，并且 Unsplash 要求开发人员保密。

#### 自托管代理

如果您想自己托管代理服务器，请参考 [代理仓库](https://github.com/cloudy9101/obsidian-image-inserter-proxy)。

设置完代理服务器后，您可以在插件的设置选项卡中设置代理服务器地址。

### 前置内容值格式

您可以设置一个自定义的值格式来插入前置内容。

默认格式为 "{image-url}"。

# 如果键是 "image" 并且值的格式为 "{image-url}"，那么它将是

---
image: "https://some-random-image-url.com"
---

# 如果键是 "banner"，值的格式为 "![[{image-url}]]"，那么它将是

---
banner: "![[https://some-random-image-url.com]]"
---

# 开发

克隆仓库，运行 `npm install` 安装依赖，然后运行 `npm run dev` 编译插件并监听文件变化。

请参阅 <https://github.com/obsidianmd/obsidian-api> 获取 Obsidian 的 API 文档。

欢迎提交问题和 PR。

# 谢谢

- [@javiavid](https://github.com/javiavid)
- [@vovech](https://github.com/vovech)
- [@engage-results](https://github.com/engage-results)
- [@Bluemoondragon07](https://github.com/Bluemoondragon07)
- [@mxro](https://github.com/mxro)
- [@Explosion-Scratch](https://github.com/Explosion-Scratch)

# 许可证

该插件的代码和文档以 [MIT许可证](./LICENSE) 发布。
