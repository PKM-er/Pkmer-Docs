---
uid: 2023080322262424
title: Obsidian 插件：Script Launcher
tags: ['obsidian插件', 'readme']
description: 这个插件允许您从Obsidian应用程序启动脚本。您可以在底部栏上添加脚本快捷方式，并只需一次点击即可启动它们！
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Script Launcher

> [!Note] 插件名片
> - 插件名称：Script Launcher
> - 插件作者：Alessandro Ruggiero
> - 插件说明：这个插件允许您从 Obsidian 应用程序启动脚本。您可以在底部栏上添加脚本快捷方式，并只需一次点击即可启动它们！
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/AlessandroRuggiero/script-launcher)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?script-launcher)

## 概述

这个插件允许您从 Obsidian 应用程序启动脚本。您可以在底部栏上添加脚本快捷方式，并只需一次点击即可启动它们！

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/AlessandroRuggiero/script-launcher/master/README.md)

---

## Readme(翻译）

下面是 [[script-launcher]] 插件的自述翻译

# 脚本启动器

这是一个 Obsidian 插件，允许您直接从应用程序中轻松运行任何语言编写的脚本。

如何安装它

前往最新的标签并下载 script-launcher 的 zip 文件，解压并提取 script-launcher 文件夹（其中应包含 3 个文件：main.js、manifest.json 和 styles.css）

将此文件夹移动到 `path_to_your_vault/.obsidian/plugins/`（如果插件文件夹不存在，请创建它）

请记得在 Obsidian 设置中启用 [Commpunity Plugins](https://help.obsidian.md/Advanced+topics/Community+plugins#:~:text=In%20order%20to%20install%20community,Community%20plugin%20%2D%3E%20Safe%20Mode.)。

如何使用它

### 添加一个新的脚本

进入插件设置，点击“+”图标

您需要填写一些关于要添加的脚本的信息：

1. `脚本名称` → 您想要添加的脚本的名称（对脚本本身没有影响）
2. `脚本路径` → 要启动的脚本的绝对路径（可以是任何东西：二进制文件、可执行文件、Python 脚本、Shell 脚本、Bash 脚本等）
3. `显示在底部栏` → 这是一个复选框，如果选中，脚本将显示在底部栏上，点击它将启动脚本
4. `图标` → 是显示在底部栏上的图标，如果留空，则显示名称。

点击要删除的脚本设置上的“删除”按钮。

### 启动脚本

在 Obsidian 应用的底部工具栏上点击脚本图标。

如果脚本没有显示为图标，请进入设置并选择“在底部工具栏上显示”。

您还可以使用“运行脚本”Obsidian 命令来运行脚本，系统会提示您一个带有搜索栏的脚本列表，选择一个脚本将会运行它。

脚本的输出将以通知的形式显示在 Obsidian 应用中。

## 示例

### Google Drive 备份

这个脚本的例子可以在点击按钮时同步所有保险库中的文件。

```bash
 (cd $path_to_vaults && grive -s $vaults_folder)
```

![演示示例插件如何工作的GIF](https://github.com/AlessandroRuggiero/script-launcher/blob/master/docs/images/launching-scipt-example.gif)

如果你想编写一个仅备份保险库中文件的脚本，你可以使用 `$1` 参数：

插件将保险库的路径作为第一个参数传递给脚本。

```bash
 (cd $path_to_script && grive -s $1)
```

## 高级设置

脚本信息保存在 `.obsidian/plugins` 文件夹下的 `data.json` 文件中。

正常情况下，它的样子是这样的：

```json
[
    {
        "name": "Example",
        "path": "/home/user/Documents/obsi/s.sh",
        "showOnBottomBar": true,
        "icon": "☁",
    }
]
```

但是如果需要，您可以手动添加一些在用户界面中不显示的选项：

1. 显示退出代码 → 在 json 中添加此字段

    ```json
    "showExitCode": true
    ```

    退出代码将显示为 Obsidian 通知：

    ![exit code notice](https://github.com/AlessandroRuggiero/script-launcher/blob/master/docs/images/exit-code-notice.png)
