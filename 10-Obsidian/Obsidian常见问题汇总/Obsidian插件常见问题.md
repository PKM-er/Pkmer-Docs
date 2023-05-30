---
uid: 20230521004800
title: Obsidian 插件常见问题
tags: []
description: Obsidian 插件常见问题
author: cuman
type: other
draft: false
editable: false
modified: 20230524151300
---

# Obsidian 插件常见问题

## 社区插件

### 如何打开社区插件

默认情况下，Obsidian 将打开安全模式，以保护用户免受潜在的伤害。在安全模式下，Obsidian 不会运行任何第三方插件。

请注意，第三方插件可以访问你电脑上的文件，连接互联网，甚至安装额外的程序。了解更多关于插件安全性的信息，请阅读 [此部分](app://obsidian.md/index.html#%E6%8F%92%E4%BB%B6%E5%AE%89%E5%85%A8%E6%80%A7)。

为了安装第三方插件，你需要在 `设置` -> `第三方插件` -> `安全模式` 中关闭安全模式。

### 插件社区不能加载

![Pasted image 20230123233401](https://cdn.pkmer.cn/images/b47e268997386b5fd862d46c5758b903_MD5.png!pkmer)

如果留意的化你会发现，OB 右上角提示了“Failed to load xxxxx（插件名）”

- 原因：
	- 你的网络环境不够稳定，无法访问到官方的插件市场
	- 你的 OB 安装了不稳定的插件（proxy GitHub），导致获取其他插件失败/不完整
	- 一些插件无法适配移动端，假设你只在移动端看到对应现象的话。

由于 Obsidian 的插件都是在 Github 上托管的，国内访问存在问题，需要一些科学上网的手段。常见解决办法有：

1. 科学上网，详细使用可以自行尝试解决。
2. 下载开源 [Watt Toolkit](https://steampp.net/) ，这个软件能通过修改 Host 和 DNS 实现访问 Github，可能不稳定。
3. 通过 Github 镜像站下载，这个一般都是在网上搜，我就不提供了，这玩意儿有安全风险，需要核对下载文件的哈希值，确保没被人中途篡改。
4. [obsidian-proxy-github](https://gitee.com/juqkai/obsidian-proxy-github) ，这个插件就的原理就是 Github 镜像站代理下载。缺点依然是安全风险以及会时常弹出提醒框 (可手动删除文件中的 `Notice` 语句)。

### 插件下载后不能启用

1. 不支持移动端：PC 端的插件可能不能在移动端使用，这是不同平台的硬限制，不好解决。
2. 可能是由于网络原因下载没下全：只下载全了 `manifest.json` 文件，导致插件列表有开启选项，但不能开启。解决办法就是卸载插件重新下。
3. 插件代码有问题：这种情况很少很少，一般开发者都是调试好了的。解决办法是在 Github 向插件开发者反馈。

## Calendar

### 打开 Calendar 后侧边栏不显示对应图标

1. 先检查是否已经关闭了 OB 的社区插件安全模式
2. 检查下载的插件是否已经成功开启

> [!注意]
> 这个问题主要来自两个方面
>  - 你的网络可能无法访问 Ob 的社区下载源
>  - 你可能听到网络上的教程，安装了一些插件，导致无法访问或者下载完整的插件
>  - 遇到以上问题，想永久稳定的解决请参考这个：[[Obsidian 插件：Obsidian Lite]]

1. 以上都不是，但是还看不到 Calendar 插件
	- 这可能是因为面板上的功能图标过多，新开启的插件会排放在尾部。
		- 你可以鼠标指向 功能图标后，使用滚轮来滚动时期出现
		- 或者把对应 Calendar 图标转过来。
		- 或者减少一些不需要功能图标

## banners

### 为什么 Obsidian 的头图 或者 banners 插件显示异常

1. 开启了 banners 插件
2. 在页面头部映入 banner icon
3. banner icon 虽然显示了，但是多了一个裂开的图标（图裂、叉烧包）

![banners 异常](https://cdn.pkmer.cn/images/2015216e183baf2e52ca06b1fb506953_MD5.png!pkmer)

原因：1. 这是因为你本身设备的网络原因导致的现象，banners 插件无法获取对应的 emoji 表情。

解决：

1. 在设置 -> 第三方插件 -> 插件中，找到 banners 插件
2. 点击 banners 插件的设置
3. 按照下图所示，关闭【Use Twemoji】，即可解决问题。【当然可能有人会觉得 Twemoji 比默认系统 emoji 更美观】

![banners设置](https://cdn.pkmer.cn/images/066c9f4b1cad89a77853126e9f51b05f_MD5.png!pkmer)

## Excalidraw

### Obsidian 插件 Excalidraw 的橡皮擦在哪里

- 按 Ctrl/Cmd+Z 就能取消上最近一次的操作；
- 点击对应的形状（shape）后有刪除可用；

![image.png](https://cdn.pkmer.cn/images/20230522215014.png!pkmer)

## EasyTyping

### 数字后面的中文字词会重复两次

- 现象
	- 如输入“2018 年“
	- 显示会变为“2018 年年“
	- 关闭插件后问题消失。重启主程序，重新加载插件均无效。
- 解决
	- 方案一：更换输入法，此问题一般出现在你的输入法是微软拼音输入法
	- 方案二：关闭微软拼音中的【兼容性】选项
	![image.png](https://cdn.pkmer.cn/images/20230524151250.png!pkmer)

## Templater