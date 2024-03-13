---
uid: 2023080322233604
title: Obsidian 插件：Obsidian OCR
tags: ['obsidian插件', 'readme']
description: 使用光学字符识别技术在您的图像和PDF文件中搜索文本
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Obsidian OCR

> [!Note] 插件名片
> - 插件名称：Obsidian OCR
> - 插件作者：Jonas Mohr
> - 插件说明：使用光学字符识别技术在您的图像和 PDF 文件中搜索文本
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/MohrJonas/obsidian-ocr)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-ocr)

## 概述

使用光学字符识别技术在您的图像和 PDF 文件中搜索文本

![Obsidian OCR](https://cdn.pkmer.cn/covers/obsidian-ocr.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/MohrJonas/obsidian-ocr/master/README.md)

---

## Readme(翻译）

下面是 [[obsidian-ocr]] 插件的自述翻译

![Obsidian](https://img.shields.io/badge/Obsidian-%23483699.svg?style=for-the-badge&logo=obsidian&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

![WebStorm](https://img.shields.io/badge/webstorm-143?style=for-the-badge&logo=webstorm&logoColor=white&color=black)
![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)

![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)

![macOS](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=macos&logoColor=F0F0F0)

# **⚠️ 仍处于早期开发阶段 ⚠️**

Obsidian OCR 允许您在图像和 PDF 中搜索文本。

### 安装

#### 依赖项

- `tesseract` 用于 OCR
- `imagemagick` 用于将 pdf 转换为 png 格式

##### Windows

###### 手动安装

❗确保可执行文件在您的路径中。如果您不知道如何操作，请查看这里：<https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/>❗

- 安装 [tesseract](https://github.com/UB-Mannheim/tesseract/wiki)
- 安装 [imagemagick](https://imagemagick.org/index.php)
- 如果您想使用英语以外的其他语言，您需要手动安装它。（非常简单）
    - 前往<https://github.com/tesseract-ocr/tessdata_fast/>
    - 下载适用于您的语言的文件（例如，对于德语，请下载 ger.traineddata）
    - 将文件移动到 `C:\Program Files\Tesseract-OCR\tessdata`

###### 自动安装

❗自动安装功能仍处于早期开发阶段，请预期存在错误❗

ℹ️ Obsidian OCR 使用 [chocolatey](https://chocolatey.org/) 进行自动安装 ℹ

- 安装并启用插件
- 在“设置”中，点击“自动安装”按钮

##### MacOS

- 安装 tesseract：`brew install tesseract`
- 安装 tesseract-lang：`brew install tesseract-lang`
- 安装 imagemagick：`brew install imagemagick`

对于路径：检查二进制文件的位置，并将其添加到 "/private/etc/paths" 中

（我还将它们添加到了~/.zshrc 中，不确定是否需要）

- `brew list tesseract` 在我的情况下：`/opt/homebrew/Cellar/tesseract/5.2.0/bin/`
- `brew list tesseract-lang` 在我的情况下：`/opt/homebrew/Cellar/tesseract/5.2.0/bin/`
- `brew list imagemagick` 在我的情况下：`/opt/homebrew/Cellar/imagemagick/7.1.0-43/bin/`

##### Ubuntu

###### 手动安装

- 运行 `sudo apt install -y tesseract-ocr imagemagick`
- 通过安装相应的包（通常命名为 `tesseract-ocr-<lang>`）来安装所需的任何语言。

###### 自动安装

❗自动安装功能仍处于早期开发阶段。请预期可能会有错误❗

- 安装并启用插件
- 在“设置”下，点击“自动安装”按钮

##### Arch / Manjaro

###### 手动安装

- 运行 `sudo pacman -S tesseract imagemagick`
- 通过安装相应的包（通常命名为 `tesseract-data-<lang>`）安装所需的任何语言

###### 自动安装

❗自动安装功能仍处于早期开发阶段。请预期可能会有错误❗

- 安装并启用插件
- 在“设置”下，点击“自动安装”按钮

如果 Obsidian 是通过 Flatpak 安装运行的（例如在 Pop！_OS 中默认提供的），那么这个插件将无法运行。Flatpak 沙箱会改变文件路径，即使提供了主机访问权限，仍然会出现问题。如果您使用的是 Flatpak 安装，您需要通过其他方法重新安装才能成功使用此插件。

#### 插件安装

- 只需从社区插件中安装插件即可。

### 使用方法

- 启用插件后，您将在右下角看到一个进度条，表示您的保险库正在处理中。
  ![索引](indexing.png)
- 完成后，您可以使用 `Search OCR` 命令或工具栏中的 `放大镜图标` 打开搜索菜单。
  ![搜索模态框](search-modal.png)
- 当向您的保险库添加新的 PDF / PNG 时，文件会自动被搜索文本。
- 启动 Obsidian 时，您现在将看到另一个进度条，表示所有转录正在被缓存。
  ![缓存](caching.png)

### 设置

Obsidian OCR 提供了多种您可以自行配置的设置。

|            名称             |                                                           描述                                                           | 默认值 |
|:---------------------------:|:-------------------------------------------------------------------------------------------------------------------------------:|:-------:|
|      最大 OCR 进程数      |  同时运行的最大 OCR 进程数。增加此值可以加快索引速度，但也会增加 CPU 使用率  |    1    |
|    最大缓存进程数    | 同时运行的最大缓存进程数。增加此值可以加快缓存速度，但也会增加 CPU 使用率 |   10    |
|          OCR 图片          |                                   决定是否对图片（.png，.jpg，.jpeg）进行 OCR                                   |  true   |
|           OCR PDF           |                                          决定是否对 PDF（.pdf）进行 OCR                                           |  true   |
|        图片密度        |            生成的 PNG 的密度，以 dpi 为单位。增加此值有助于 OCR 较小的文本，但会增加 CPU 使用率            |   300   |
|        图片质量        |                生成的 PNG 的质量。增加此值有助于 OCR 较小的文本，但会增加 CPU 使用率                 |   98    |
| 额外的 imagemagick 参数 |                     在将 PDF 转换为 PNG 时传递给 imagemagick 的额外命令行参数                      |         |
|   额外的搜索路径   |  在查找外部依赖项时将搜索的额外路径。在安装到自定义目录时非常有用  |         |
|        OCR 提供者         |                          将使用的 OCR 提供者。有关提供者的描述，请参见下文                           |  NoOp   |

OCR 提供商

#### OCR 提供商列表

| 名称       | 描述                                                                                                                                                                 |
|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| NoOp       | NoOp（无操作）提供商如其名，什么也不做，只是一个虚拟提供商。要获得真正的 OCR 功能，您必须切换到另一个提供商。                                                               |
| Tesseract  | OCR 提供商使用 [tesseract](https://tesseract-ocr.github.io/) 在您的计算机上本地进行 OCR 文档识别。                                                                           |

##### Tesseract

默认情况下，Tesseract 提供两种可供选择的语言：`eng` 和 `osd`。

- `osd` 不是一种语言，而是代表 `方向和脚本检测`，因此对我们的使用没有用处。
- `eng` 代表英语，如果您的文档是用英语编写的，应选择此选项。

ℹ 切换语言后，只有新索引的文档才会使用新语言。您可以使用 `删除所有转录` 命令重新索引已添加的文档 ℹ

Tesseract 支持 `langs` 和 `scripts` 进行文本识别。

- `Langs` 支持单一语言。
- `Scripts` 支持具有相似字符的多种语言。例如，拉丁语支持所有基于拉丁字母的语言（英语、德语、意大利语、法语等），但不包括越南语。

#### 自定义 OCR 提供者

要添加自定义的 OCR 提供者，创建一个新的类，该类扩展 `OCRProvider` 并使用 `OCRProviderManager.registerOCRProviders(new MyCustomProvider())` 进行注册。
