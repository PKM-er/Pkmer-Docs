---
uid: 20231201030456
title: PKMer 插件安卓端安装手把手教程
tags: [PKMer, Obsidian, 插件, 下载, 插件安装, 教程, PKMer插件]
description: PKMer插件安卓端安装手把手教程
author: ProudBenzene
type: tutorial
draft: false
editable: false
modified: 20231213100951
---

# PKMer 插件安卓端安装手把手教程

## 原理概述

由于移动端 Obsidian 本体并不向桌面端一样，在「设置」→「第三方插件」中存在一键进入 Ob 插件文件夹的入口，因此插件安装方式相比桌面端也略有波折。

> [!note] 会用到的东西
> - 安卓/鸿蒙系统的终端设备
> - Obsidian
> - 可以==查看隐藏文件==的文件管理器，如手机自带文件管理器、es 文件管理器等。在本文中，本人使用的是开源文件管理器**质感文件**。
> - 浏览器
> - PKMer 账号及 PKMer 插件文件夹

让我们先从材料准备开始。

> [!warning] 注意
> 以下操作全部在安卓/鸿蒙系统的终端设备上完成。

## 新建插件文件夹

如果你的 Obsidian 库中已经安装了其他插件，可以跳过这一步。如果你的 Obsidian 库是一个新库，没有安装过任何插件，请继续阅读此步骤。

1. 用 Obsidian 打开你的库
2. 打开质感文件，点击右上角三个点，在弹出的菜单中勾选「显示隐藏文件」选项![PKMer插件安卓端安装手把手教程 | 500 ](https://cdn.pkmer.cn/images/202312010430353.JPEG!pkmer)
3. 进入你的库文件夹，不知道在哪里就点击右上角放大镜按钮搜索库名。进入库文件夹后找到 `.obsidian` 文件夹，点击进入
4. 在 `.obsidian` 文件夹中新建 `plugins` 文件夹

## 下载 PKMer 插件

1. 在浏览器中输入 PKMer 插件下载地址 <https://pkmer.cn/products/market/> ，点击下载按钮开始下载插件![PKMer插件安卓端安装手把手教程|500](https://cdn.pkmer.cn/images/202312010423543.JPEG!pkmer)
2. 下载完成后，打开质感文件，在 Download 文件夹中找到 `obsidian-pkmer.zip` 文件![PKMer插件安卓端安装手把手教程|500](https://cdn.pkmer.cn/images/202312010424377.jpg!pkmer)

## 解压 pkmer 文件夹

1. 点击 `obsidian-pkmer.zip` 文件右侧的三点，选择「提取」
![PKMer插件安卓端安装手把手教程|500](https://cdn.pkmer.cn/images/202312010425864.JPEG!pkmer)
2. 回到你的库文件夹，依次进入 `.obsidian` 文件夹、`plugins` 文件夹
3. 点击右下角的粘贴符号，将解压完成的插件文件夹粘贴到此目录下
![PKMer插件安卓端安装手把手教程|500](https://cdn.pkmer.cn/images/202312010425170.JPEG!pkmer)
4. 回到 Obsidian 中，进入「设置」→「第三方插件」，点击刷新按钮，此时插件应正常显示在插件列表中
   ![PKMer插件安卓端安装手把手教程|500](https://cdn.pkmer.cn/images/202312010425823.JPEG!pkmer)
5. 在插件列表中找到新安装好的 PKMer 插件，点击旁边的按钮将其开启
   ![PKMer插件安卓端安装手把手教程|500](https://cdn.pkmer.cn/images/202312010426700.JPEG!pkmer)

## 登录 PKMer 账号

1. 回到 Obsidian 初始页（显示笔记的页面），手指下滑呼出命令面板，输入「PKMer」，回车，即可打开 PKMer 插件界面。点击「点此登录」按钮进入 PKMer 插件设置页
   ![PKMer插件安卓端安装手把手教程|500](https://cdn.pkmer.cn/images/202312010426699.JPEG!pkmer)
   ![PKMer插件安卓端安装手把手教程|500](https://cdn.pkmer.cn/images/202312010430357.JPEG!pkmer)
   ![PKMer插件安卓端安装手把手教程|500](https://cdn.pkmer.cn/images/202312010427665.JPEG!pkmer)
2. 点击页底的个人中心，跳转到浏览器中的 PKMer 个人中心网页
   ![PKMer插件安卓端安装手把手教程|500](https://cdn.pkmer.cn/images/202312010428817.JPEG!pkmer)
3. 点击「获取 Token」按钮，复制个人专属 Token 到剪贴板
   ![PKMer插件安卓端安装手把手教程|500](https://cdn.pkmer.cn/images/202312010427326.JPEG!pkmer)
4. 回到 Obsidian，将 Token 粘贴到刚刚 PKMer 设置页中的「Token」框中
5. 返回 PKMer 插件页面，点击绿色按钮「刷新」，即可完成登录，畅享 PKMer 插件带来的便利及 Obsidian 插件、主题市场。
   ![PKMer插件安卓端安装手把手教程|500](https://cdn.pkmer.cn/images/202312010432544.JPEG!pkmer)
   # 安装疑难解答

- Q：已经将 PKMer 插件文件夹放到 `.obsidian` 文件夹下了，为什么依然没有在插件列表中显示 PKMer 插件？
	- 可能性 1：没有刷新插件列表，建议刷新插件列表或者重启 Obsidian 再查看
	- 可能性 2: 部分解压缩软件解压压缩包后，会将解压完的文件再套一层父文件夹，即 PKMer QQ 群友 @不评判遇到的情况。此时应该将文件夹下的三个文件 `manifest.json`、`main.js` 及 `style.css` 从 `.obsidian/obsidian-pkmer/obsidian-pkmer` 文件夹移动到 `.obsidian/obsidian-pkmer` 文件夹中，删去多余的空文件夹和空嵌套文件夹。 ![](https://cdn.pkmer.cn/images/202404201705044.jpg!pkmer)