---
uid: 20231229194628
title: Excalidraw 如何安装脚本 + 脚本设置介绍
tags: [Excalidraw脚本]
description: 介绍Excalidraw 如何安装脚本 + 脚本设置介绍
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240116194514
---

# Excalidraw 如何安装脚本 + 脚本设置介绍

## Excalidraw 脚本市场

Excalidraw 插件有专门的脚本市场：

![Excalidraw 如何安装脚本 + 脚本设置介绍](https://cdn.pkmer.cn/images/202312291948901.png!pkmer)

### 如何打开脚本市场

#### 从标签页的工具栏中打开

![Excalidraw 如何安装脚本 + 脚本设置介绍](https://cdn.pkmer.cn/images/202312291948902.png!pkmer)

#### 从 Obsidian 工具面板中打开

![Excalidraw 如何安装脚本 + 脚本设置介绍](https://cdn.pkmer.cn/images/202312291948903.png!pkmer)

#### 从 Excalidraw 页面设置中打开

![Excalidraw 如何安装脚本 + 脚本设置介绍](https://cdn.pkmer.cn/images/202312291948904.png!pkmer)

### 脚本的安装和更新

在**Excalidraw 脚本市场**中点击<button>安装此脚本</button>安装即可：

![Excalidraw 如何安装脚本 + 脚本设置介绍](https://cdn.pkmer.cn/images/202312291948905.png!pkmer)

如果存在更新的脚本会出现提示：`有可用更新-点击安装`，点击更新即可

![Excalidraw 如何安装脚本 + 脚本设置介绍](https://cdn.pkmer.cn/images/202312291948906.png!pkmer)

> [!tip] 可以在 Ex 脚本市场中搜索**关键词**来定位脚本位置
> ![Excalidraw 如何安装脚本 + 脚本设置介绍](https://cdn.pkmer.cn/images/202312291948907.gif!pkmer)

## Excalidraw 脚本配置和运行

### Excalidraw 脚本路径

![Excalidraw 如何安装脚本 + 脚本设置介绍](https://cdn.pkmer.cn/images/202312291948908.png!pkmer)

在 Excalidraw 的插件设置里面的 **Basic** 选项中有个 `Excalidraw自动化脚本的文件夹（大小写敏感！）` 的设置，默认的路径为：`Excalidraw/Scripts`。

该配置文件夹路径是用来存放从 `Excalidraw脚本市场` 安装的脚本文件以及 SVG 图标，注意从 `Excalidraw脚本市场` 安装的脚本在 `Scripts` 的子目录 `Downloaded` 的文件夹中。

![Excalidraw 如何安装脚本 + 脚本设置介绍](https://cdn.pkmer.cn/images/202312291948909.png!pkmer)

> [!tip] 如何修改脚本图标
> `md` 文件是 Excalidraw 的脚本文件，相同名称的 `svg` 文件则是脚本对应的图标，修改脚本图标 `svg` 文件即可修改脚本图标，**如果不存在同名的 SVG 文件，则图标为齿轮形状 (⚙)**。
> ![Excalidraw 如何安装脚本 + 脚本设置介绍](https://cdn.pkmer.cn/images/202312291948910.png!pkmer)

### 调用脚本

#### 从命令面板调用脚本

可以在 "Obsidian 命令面板 " 中执行这些脚本，默认快捷键为 `Ctrl + P`。

![Excalidraw 如何安装脚本 + 脚本设置介绍](https://cdn.pkmer.cn/images/202312291948911.png!pkmer)

==还可以为喜欢的脚本分配快捷键，就像为其他 Obsidian 命令分配快捷键一样。==

![Excalidraw 如何安装脚本 + 脚本设置介绍](https://cdn.pkmer.cn/images/202312291948912.png!pkmer)

#### 从 Obsidian 工具面板中调用脚本

在 Excalidraw 的 "Obsidian 工具面板 " 中，可以直接点击图标按钮直接运行 Excalidraw 的脚本：

![Excalidraw 如何安装脚本 + 脚本设置介绍](https://cdn.pkmer.cn/images/202312291948913.png!pkmer)

#### Tip：固定按钮到侧边栏

可以通过**“鼠标右键/鼠标左键长按”** "Obsidian 工具面板 " 的按钮，将按钮固定到 Excalidraw 侧边栏，==再次在**侧边栏**或者**工具面板**中针对按钮**“鼠标右键/鼠标左键”** 长按即可取消固定。==

![Excalidraw 如何安装脚本 + 脚本设置介绍](https://cdn.pkmer.cn/images/202312291948914.png!pkmer)

## 脚本的分类管理

从 [[2023-12-29 PKMer-Excalidraw如何安装脚本+脚本设置介绍#Excalidraw 脚本路径]] 中我们知道了我们安装的脚本存在于 Obsidian 的文件目录的 `Excalidraw/Scripts` 文件夹中，且从**脚本市场**安装的脚本在子目录 `Downloaded` 文件夹中。*如何对安装的脚本进行分类？* 只需要我们将脚本文件放到 `Excalidraw/Scripts` 文件夹的**不同文件夹**中即可，注意 `md` 和 `svg` 要放在同一个目录下：

![Excalidraw 如何安装脚本 + 脚本设置介绍](https://cdn.pkmer.cn/images/202312291948915.png!pkmer)

## 如何安装自定义脚本以及脚本设置选项

### 安装自定义脚本

其实只要将脚本 (.md) 文件放到 Excalidraw 脚本路径 (默认为 `Excalidraw/Script`) 的文件夹中即可：

![Excalidraw 如何安装脚本 + 脚本设置介绍](https://cdn.pkmer.cn/images/202312291948916.png!pkmer)

### 设置脚本配置

有些脚本有自带的配置选项，==❗需要单击第一次运行后，Excalidraw 才会加载到 Excalidraw 的插件设置里的**已安装脚本的设置**选项中==，这里面可以看到不同脚本的设置选项：

![Excalidraw 如何安装脚本 + 脚本设置介绍](https://cdn.pkmer.cn/images/202312291948917.png!pkmer)

如何配置 Excalidraw 的脚本的配置可以参考：[[Excalidraw脚本的基本配置]]。
