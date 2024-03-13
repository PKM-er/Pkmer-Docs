---
uid: 2023080322200421
title: Obsidian 插件：Icon Folder
tags: ['笔记文件处理', 'obsidian插件', 'readme']
description: 此插件允许您向文件夹添加图标。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Icon Folder

> [!Note] 插件名片
> - 插件名称：Icon Folder
> - 插件作者：FlorianWoelki
> - 插件说明：此插件允许您向文件夹添加图标。
> - 插件分类：[' 笔记文件处理 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/FlorianWoelki/obsidian-icon-folder)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-icon-folder)

## 概述

此插件允许您向文件夹添加图标。

![Icon Folder](https://cdn.pkmer.cn/covers/obsidian-icon-folder.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/FlorianWoelki/obsidian-icon-folder/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-icon-folder]] 插件的自述翻译

# Obsidian 图标文件夹

![预览图片](https://raw.githubusercontent.com/FlorianWoelki/obsidian-icon-folder/main/docs/preview-image.png)

这个黑曜石插件允许您将**任何**自定义图标（类型为 `.svg`）或来自图标包的图标添加到您的文件夹或文件中。

如何使用

有不同的功能可以为您的文件夹或文件显示图标。

首先，您需要进入设置并下载预定义的图标包或创建自己的图标包。

![图标包预览](https://raw.githubusercontent.com/FlorianWoelki/obsidian-icon-folder/main/docs/icon-pack-preview.png)

目前，默认支持并可以立即下载以下图标包：

* [Remixicon](https://remixicon.com/)
* [Fontawesome](https://fontawesome.com/)
* [IconBrew](https://iconbrew.com/)
* [SimpleIcons](https://simpleicons.org/)
* [LucideIcons](https://lucide.dev/)

但是，您可以随意添加自定义图标包，或者通过创建拉取请求更新 [iconPacks.ts](https://github.com/FlorianWoelki/obsidian-icon-folder/blob/main/src/iconPacks.ts) 文件并将图标的 zip 文件上传到 [此目录](https://github.com/FlorianWoelki/obsidian-icon-folder/tree/main/iconPacks) 来提交新的图标包。

除了自定义图标包外，还可以将多个文件拖放或选择到您的自定义图标包中。

此外，您还可以调整所有图标的一些样式设置，如边距、颜色甚至图标大小。

### 更改文件夹的图标

很简单就可以给文件夹添加图标：

1. 右键单击要添加图标的文件夹
2. 选择“更改图标”菜单项（前面有一个 `#` 图标）
3. 选择您想要的图标，然后就完成了！

要删除图标，只需点击“删除图标”（前面有一个 `trash` 图标）菜单项即可。

### 继承图标

此功能允许您为特定文件夹定义一个“继承图标”。当您将文件添加到此文件夹时，创建的文件将继承此图标。此外，文件夹中的所有文件都将具有此特定的继承图标。

应用继承图标的方法：

1. 右键单击文件夹
2. 使用“继承图标”菜单项
3. 要移除继承图标：再次右键单击，然后点击“移除继承图标”

### 自定义规则自动添加图标

此功能允许您根据正则表达式或简单的字符串比较添加自定义规则，以在满足特定条件时始终添加图标。

要使用自定义规则，请转到插件的设置，添加一个简单的规则和一个图标。现在，满足此条件的每个文件或文件夹都将具有该图标。

### 使用 Twemoji 作为文件夹的表情符号

[Twemoji](https://github.com/twitter/twemoji) 是一个流行的库，可以将通用的表情符号添加到您的应用程序中。借助这个库的帮助，您现在可以将表情符号设置为文件夹图标。只需按照以下步骤操作：

1. 右键单击文件夹
2. 点击“更改图标”
3. 打开您操作系统特定的表情符号对话框
    1. Mac OSX：`Control + Command + Space`
    2. Windows：`Windows + ;`
4. 选择“使用 twemoji 表情符号”选项

### 迁移

假设您之前使用过此插件的旧版本。请按照此指南迁移到最新版本，该版本允许自定义图标包。

只要您尚未进行迁移，迁移脚本就会运行。因此，您的保险库中的所有图标都应该消失。

但是，您可以轻松安装或创建您使用的图标包。例如，当您使用 `font-awesome-solid` 包时，您可以在设置中轻松下载它并重新启动您的保险库。现在，该图标包中的每个图标都应该可见。

### 同步问题

关于图标包的同步问题已经出现了一些 [同步问题](https://github.com/FlorianWoelki/obsidian-icon-folder/issues/52)。您可以将图标包路径更改为 `.obsidian/icons` 以解决此问题。转到设置，选择插件，并将其路径更改为先前描述的路径。

### 使用其他图标插件与图标包

假设您正在使用具有下载功能的其他图标包插件。在这种情况下，通常会将图标包路径更改为更公共的文件夹，以便在不同设备之间同步图标时不会出现问题。

因此，如果您进入插件的设置，可以指定每个图标包可以下载的公共文件夹。它将自动检查图标包是否已存在于此目录中。

## 开发

要根据您的需求自定义此项目，您可以克隆它，然后安装所有依赖项：

```sh
$ git clone https://github.com/FlorianWoelki/obsidian-icon-folder
$ cd obsidian-icon-folder
$ pnpm i
```

安装完成后，您需要在根目录中创建一个 `env.js` 文件。将以下内容填入文件中：

```js
export const obsidianExportPath =
  '<path-to-obsidian-vault>/.obsidian/plugins/obsidian-icon-folder/';
```

之后，您可以使用以下命令启动 rollup 开发服务器：

```sh
$ pnpm dev
```

此命令将在每次更改时自动构建必要的文件以进行测试和开发。此外，它会将所有必要的文件复制到您指定的插件目录。

最后，您可以自定义插件并将其添加到您的插件中。
