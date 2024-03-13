---
uid: 2023082011360604
title: Obsidian 插件：【Readme】Password Protection
tags: ['obsidian插件', 'readme']
description: 用密码保护您的私人笔记和日记，无需加密，无需解密。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Password Protection

> [!Note] 插件名片
> - 插件名称：Password Protection
> - 插件作者：Qing Li
> - 插件说明：用密码保护您的私人笔记和日记，无需加密，无需解密。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/qing3962/password-protection)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?password-protection)

## 概述

用密码保护您的私人笔记和日记，无需加密，无需解密。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/qing3962/password-protection/master/README.md)

---

## Readme(翻译）

下面是 [[password-protection]] 插件的自述翻译

# 密码保护插件

目的

我开发了这个插件来防止我的女朋友偷看我的私人笔记或日记。

这个插件是做什么的？

不加密，不解密，这个插件不会修改你的笔记，它不会对你的笔记做任何操作。

当你启动 Obsidian 时：

如果你设置的受保护文件夹是根文件夹（/），会出现一个密码验证框，输入正确的密码，你就可以打开一个笔记。

如果你设置的受保护文件夹是一个子文件夹（/xxx），当你打开位于子文件夹中的笔记时，会弹出一个密码验证框，输入正确的密码，你就可以打开这个笔记。

一旦你输入了正确的密码，当打开其他受保护的笔记时，就不会再要求你输入密码。

如果你想再次启用保护，你可以调用命令面板，输入 "pass"，找到命令 - "Password Protection: Open"，运行它，当你打开一个受保护的笔记时，密码验证框会再次弹出。

在 Windows 版的 Obsidian 中，密码保护按钮位于左侧栏。点击它执行保护或取消保护的操作。

我已经在 2023.5 年使用 Obsidian 在 Windows 和 iOS（iPhone、iPad）上测试了这个插件。

安装、配置和使用

如果你无法从社区插件市场安装插件，可以按照以下步骤进行操作：

1. 下载最新版本：password-protection-1.x.x.zip，该包已在 Windows 和 iOS 上进行了跨平台测试；[下载](https://github.com/qing3962/password-protection/releases)。
2. 打开 Obsidian 的社区插件文件夹，通常位于你的 vault 文件夹的.obsidian/plugins 目录中。
3. 解压缩发布的 zip 文件，会出现一个名为 "password-protection" 的新文件夹，文件夹中有两个文件：main.js 和 manifest.json。
4. 重新启动 Obsidian，点击 " 设置 "，选择 " 社区插件 "，你可以在已安装插件列表中看到 "Password Protection"，启用该插件。
5. 在设置的左下方，会出现 "Password Protection"，点击它，打开插件的设置页面，输入你想要保护的路径，默认路径为根路径。
6. 启用密码保护按钮，会弹出一个密码输入框，输入你的密码，点击 " 确定 "。
7. 密码保护插件开始工作，当你打开一个位于你设置的受保护路径下的笔记时，会弹出一个密码验证框，输入正确的密码，你就可以打开这个笔记了。

## 许可证

本项目使用 [MIT许可证](LICENSE) 进行许可。

------

# 中文版说明 (For chinese)

目的

What does this plugin do?

This plugin does not encrypt or decrypt your notes, nor does it modify your notes. It does not do anything to your notes.

When you start Obsidian:

If the protected path you set is the root path (/), you will see a password verification box. Only by entering the correct password can you open any note.

If the protected path you set is a subpath (/xxx), when you try to open a note located in this subpath, a password verification box will pop up. Only by entering the correct password can you continue to open this note.

Once you have entered the correct password once, you will not be asked to enter it again when opening other protected notes.

If you want to enable protection again, you can bring up the command palette, enter "pass", find the command - "Password Protection: Enable Password Protection", and execute it. Then, when you want to open a protected note, the password verification box will pop up again.

In the Windows version of Obsidian, a password protection button will appear in the left toolbar. Clicking on it can also perform the actions of protection or non-protection.

已测试的系统

这个插件已经在 Windows 和 iOS (iPhone、iPad) 系统上通过测试，使用 2023 年 5 月下载的 Obsidian。

## 安装、配置和使用

如果你不能从社区插件市场安装这个插件，你可以用下面的方法：

1. 下载这个插件的最新 Release 版本: password-protection-1.x.x.zip，这个包可以跨平台使用，已经在 Windows 和 iOS 上完成测试； [GitHub](https://github.com/qing3962/password-protection/releases)
[Gitee](https://gitee.com/qing3962/password-protection/)

2. 找到你的 Obsidian 配置文件夹的插件文件夹：plugins，一般在你的笔记库所在的目录：.obsidian/plugins；
3. 在插件文件夹中，解压这个插件 zip 包，得到一个目录：.obsidian/plugins/password-protection，里面有两个文件: main.js 和 manifest.json；
4. 重新启动 Obsidian，在 Settings 中选择“第三方插件”，在右侧下方的“已安装插件”中，可以看到 Password Protection，点击右侧的启用按钮；
5. 在 Settings 中左侧下方“第三方插件”列表中，可以看到“Password Protection”，点击后右侧打开插件设置页面，设置一个要保护的路径，默认是根路径（/）；
6. 点击插件的启用按钮，弹出密码设置框，输入两遍密码，插件启用成功;
7. 当你打开一个位于保护路径下的笔记，将弹出密码验证弹窗，只有输入正确的密码，你才能继续打开笔记。

## 许可证

本插件使用 MIT 许可证。 [MIT 许可证](LICENSE)

------

![Obsidian 下载量](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=下载量&query=%24%5B%22password-protection%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

------





