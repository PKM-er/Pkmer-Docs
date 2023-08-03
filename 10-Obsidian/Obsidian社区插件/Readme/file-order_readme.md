---
uid: 20230803212405
title: Obsidian 插件：【Readme】File Order
tags: ['obsidian插件', 'readme']
description: 在文件名中使用数字前缀来定义自定义顺序，并拖放文件以更新该顺序。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：File Order

> [!Note] 插件名片
> - 插件名称：File Order
> - 插件作者：lukasbach
> - 插件说明：在文件名中使用数字前缀来定义自定义顺序，并拖放文件以更新该顺序。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/lukasbach/obsidian-file-order)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?file-order)

## 概述

在文件名中使用数字前缀来定义自定义顺序，并拖放文件以更新该顺序。

![File Order](https://cdn.pkmer.cn/covers/file-order_new.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lukasbach/obsidian-file-order/main/README.md)
> 

---

## Readme(翻译）

下面是 [[file-order]] 插件的自述翻译



# 文件顺序 Obsidian 插件

> 使用文件名中的数字前缀来定义自定义顺序，并使用文件资源管理器中的拖放来更新该顺序。

- 在 Obsidian 的社区插件列表中找到插件 "文件顺序" 并安装。

安装后，您可以右键单击任何文件夹或项目，然后点击 "重新排序项目" 打开重新排序对话框。在那里，您可以拖放项目来自定义它们的顺序。通过点击 "文件" 或 "文件夹" 标题旁边的向下箭头，您可以访问其他选项。在那里，您可以自定义前缀长度的最小值（例如，使所有前缀数字至少为 3 个字符长），自定义分隔符（默认为一个空格，但可以是任何字符）或起始索引。

重新排序项目将自动更新您正在重新排序的任何文件的所有引用。

您还可以随时清除过去创建的自定义排序，这将从文件名中删除前缀并恢复默认排序。

当您将来再次在您之前自定义过的文件夹上打开重新排序对话框时，插件将自动从设置的文件名中推断出这些选项。这意味着插件本身不保留任何设置，使用的每个排序信息都存储在文件名中，这意味着即使在卸载插件后，您仍然可以继续使用有序文件，并且插件还可以读取和允许您编辑过去手动创建的排序。

在插件设置中，您还可以定义前缀长度、分隔符和起始索引的默认值。

![obsidian-order-files-demo1.gif](obsidian-order-files-demo1.gif)

![obsidian-order-files-demo2.gif](obsidian-order-files-demo2.gif)

## 截图

![img.png](img.png)

![img_1.png](img_1.png)

![img_2.png](img_2.png)

## 贡献

要对此插件进行更改，请首先确保您已安装所需的依赖项。

```
yarn
```

### 开发

要启动带有启用模式的插件构建，请运行以下命令：

```
yarn dev
```

_注意：如果您尚未安装热重载插件，系统将提示您安装。在开始热重载之前，您需要在Obsidian Vault中启用该插件。您可能需要刷新插件列表才能看到它。_

### 发布

运行 `yarn release` 来发布一个新版本。

---

<sub>这个插件是由 (create-obsidian-plugin)[https://www.npmjs.com/package/create-obsidian-plugin] 生成的</sub>



