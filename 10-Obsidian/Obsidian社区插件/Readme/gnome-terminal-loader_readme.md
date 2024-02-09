---
uid: 2023102611075545
title: Obsidian 插件：【Readme】Gnome Terminal Loader
tags: ['obsidian插件', 'readme']
description: 将侧边栏操作图标添加到快速打开Gnome终端或让Gnome终端运行Python模块。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Gnome Terminal Loader

> [!Note] 插件名片
> - 插件名称：Gnome Terminal Loader
> - 插件作者：David Carmichael
> - 插件说明：将侧边栏操作图标添加到快速打开 Gnome 终端或让 Gnome 终端运行 Python 模块。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/CheeseCake87/gnome-terminal-loader)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gnome-terminal-loader)

## 概述

将侧边栏操作图标添加到快速打开 Gnome 终端或让 Gnome 终端运行 Python 模块。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/CheeseCake87/gnome-terminal-loader/master/README.md)
>

---

## Readme(翻译）

下面是 [[gnome-terminal-loader]] 插件的自述翻译

# Gnome 终端加载器

一个 Obsidian 插件，用于加载 Gnome 终端。它还具有一个 Python 脚本入口加载器，通过在 vault 的根目录中放置一个名为 main.py 的文件。（仅与安装了 gnome-terminal 和 python3 的 Linux 兼容）

最好使用 CLI 菜单与 `main.py`，这是一个示例：

```python
def menu():
	menu = -1
    while menu != 0:
        menu = int(input('1. 打印Hello \n 2. 打印World \n 0. 退出 \n'))
        if menu == 1:
            Print("Hello")
        elif menu == 2:
            Print("World")
        elif menu == 0:
            break
        else:
            print('null')
            

if __name__ == '__main__':
    menu()
    
```