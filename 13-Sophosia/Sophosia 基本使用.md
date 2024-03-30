---
uid: 20240228150000
title: Sophosia 基本使用
tags: [sophosia, sophosia使用手册, sophosia指导手册]
description: Sophosia 基本使用
author: QuantumRose
type: other
draft: false
editable: false
modified: 20240317091902
---

# Sophosia 基本使用

## 下载与安装

想要下载小助手，可以到官网 [sophosia.app](https://sophosia.app) 下载。

![official-site](https://cdn.pkmer.cn/images/202403062127114.png!pkmer)

如果官网访问不了，可以到 [Sophosia GitHub](https://github.com/sophosia/sophosia-releases) 上，点击发布，选择最新的发布，下载对应自己平台的安装包进行安装。

![github-release](https://cdn.pkmer.cn/images/202403062127082.png!pkmer)

我已经为小助手购买了电子证书。一般来说在安装的时候是不会再出现警告弹窗说无法验证开发者了。但项目目前知名度不高，Windows 的基于声誉的保护系统（reputation-based protection）仍有可能会出现弹窗，提醒用户该软件不是网络上常见的软件。这是正常的现象，这不是病毒。Mac 和 Linux 用户则可以正常使用。如果想自己编译程序，可以按照 [Github](https://github.com/sophosia/sophosia-releases) 上的做法来。
**小助手直到v0.8.3版本都是开源的，需要代码的可以下载相对应版本的代码进行编译。目前团队正在商讨代码可以开源到什么版本。**

## 仓库管理

### 选择文件夹

初次使用小助手的用户会看这样一个页面。

- 可以在这里调整语言。
- 点击中央的输入框以选择一个文件夹作为日后储存文献和笔记的地方
- 左侧是已经拥有的仓库，可以改变其路径
- 文件夹可以是 One Drive 等云盘的位置

![workspace-management](https://cdn.pkmer.cn/images/202403062127674.png!pkmer)

## 文献管理

点击工具栏的加号，选择第三项按文件创建项目即可导入文献。

- PDF 文件导入之后小助手会检测文件内的 DOI
- 检测到 DOI 后会自动下载文献信息
- 用户也可以手动输入文献信息

![project-management](https://cdn.pkmer.cn/images/202403062127225.png!pkmer)

- 在左侧栏，我们可以为当前仓库增添分类。
- 子分类的深度并没有限制
- 要导出文献时，选择要导出的分类。右键打开菜单栏，选择导出文献

![export-references](https://cdn.pkmer.cn/images/202403062127455.png!pkmer)

## 文献阅读

在 PDF 的阅读上，小助手做了一点针对文献优化。

- 鼠标右键点击超链接，将会出现弹窗显示链接的内容
- 支持暗模式
- 支持划词翻译

![pdf-peeker](https://cdn.pkmer.cn/images/202403062127962.png!pkmer)

![pdf-translator](https://cdn.pkmer.cn/images/202403062127574.png!pkmer)

对于注释，小助手也有一定的优化

- 除了自由画笔，所有注释均支持 LaTeX 输入
- 注释可以拖拽/复制到 Markdown 笔记中

![pdf-annotation](https://cdn.pkmer.cn/images/202403062127762.png!pkmer)

## 笔记管理

在左侧的当前项目栏中，我们可以管理自己的笔记

- 小助手支持 Markdown 笔记以及 Excalidraw 画板
- 输入两个方括号 ‘\[\[’ 之后，会有弹窗出现让用户选择要链接的笔记/文献
- 相关的链接在左下角的相关项目/文献中显示

![note-taking](https://cdn.pkmer.cn/images/202403062127108.png!pkmer)

![linking](https://cdn.pkmer.cn/images/202403062128602.png!pkmer)

## 与 Obsidian 协作

- 在 Obsidian 的仓库页面中选择小助手存放文献和笔记的文件夹

![obsidian-vault](https://cdn.pkmer.cn/images/202403062128688.png!pkmer)

在设置中，只需要调整以下两个设置即可完美兼容小助手：

- 关闭 wiki 链接
- 链接格式选择“从根目录开始的绝对路径”

![obbsidian-settings](https://cdn.pkmer.cn/images/202403062128256.png!pkmer)

在 Obsidian 中，

- 左侧文件树显示了小助手仓库中拥有的所有文献与笔记
- 根目录下文件夹的名称则是每一份文献的 ID
- 每一个文献文件夹中都装有最多 1 份 PDF 以及若干份笔记
- 使用 `[link text](sophosia://open-item/item-id)` 这种链接样式，则可以从外部唤起小助手

![obsidian-sophosia](https://cdn.pkmer.cn/images/202403062128874.png!pkmer)

![deep-link](https://cdn.pkmer.cn/images/202403062128043.gif!pkmer)
