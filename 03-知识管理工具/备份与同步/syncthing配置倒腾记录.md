---
uid: 20231123213403
title: Syncthing 配置倒腾记录
tags: [同步, Syncthing, 配置经验]
description: 在Mac、iPad和华为手机之间建立Syncthing同步的经验
author: ProudBenzene
type: tutorial
draft: false
editable: false
modified: 20231124220200
---

# Syncthing 配置倒腾记录

Syncthing 是一款开源免费跨平台的文件同步工具，是基于**P2P 技术**实现设备间的文件同步。

十一月以来，我用将近一周的碎片时间慢慢倒腾，终于配置好了 Syncthing 同步 Obsidian 库，以及使用 Syncthing 后出现的大部分问题。本篇文章作为一个经验贴，记录我配置 Syncthing 的全过程，包括我踩过的坑以及使用感想。、

> [!warning] 背景须知
> ==我的设备==：Mac, iPad & Andriod Phone (HarmonyOS)
> ==同步内容==：两个 Obsidian 库
> ==理想要求==：
> - 所有笔记**三端迅速同步**，插件、CSS 、工作区、Obsidian 基本设置等**三端全部同步**
> - 插件与 CSS 的启停情况不同步，三端互相保持独立
>
> ==同步方式==：使用手机作为**同步中枢**（因为手机的在线时间最长），串起同步网络：![Syncthing 配置倒腾记录](https://cdn.pkmer.cn/images/202311232239394.png!pkmer)

## Syncthing 同步的优缺点

高大上的官话我也不会，我就说说感知最为明显的几点：

==优点==：

1. 相比我之前用来同步 Mac 与华为手机的 **Folder Sync+Remotely Save+WebDAV (Teracloud) 方案**，同步速度非常迅猛，在局域网下，库的同步速度基本是几兆到十几兆每秒左右；
2. 相比我之前用来同步 Mac 与 iPad 的 **iCloud** 方案：
	- 传输速度非常快
	- 由于 iCloud 同步的文件夹默认存在云上不会下载到本地，因此 iPad 上每次打开 iCloud 库都会加载很长时间，体验非常不好；Syncthing 则会将库下载到本地，因此相比 iCloud 方案， Obsidian app 打开库的速度会有质的提升。

==缺点==：

1. 出现的冲突文件非常多，处理方法在文末有介绍
2. 相比 iCloud 方案，由于 Syncthing 会将库完全同步到本地，因此会占用更多的内存空间

## Syncthing 配置过程

### Syncthing 服务操作系统集成

- ==macOS==：[**Syncthing-macos**](https://github.com/Syncthing/Syncthing-macos)，官方维护的开源 macOS 图形客户端
- ==Andriod/HarmonyOS==：[**Syncthing app**](https://play.google.com/store/apps/details?id=com.nutomic.Syncthingandroid)，可以通过 Google Play 下载
- ==iPadOS==：[**Möbius Sync**](https://apps.apple.com/us/app/m%C3%B6bius-sync/id1539203216?ign-itscg=30200&ign-itsct=apps_box)，可以通过 App Store 下载，但是需要 38 大洋

分别在三个终端安装好对应的服务集成 app 后，在 Mac 端通过托盘图标或直接在浏览器输入网址打开 Syncthing 界面： <http://127.0.0.1:8384/>

![Syncthing 配置倒腾记录](https://cdn.pkmer.cn/images/202311232159875.png!pkmer)

在右下角「远程设备」栏目中，分别给自己的三个终端互相添加其他两个终端作为远程设备。添加方式可以选择：

- 设备上的 Syncthing 服务集成会自动识别同一个局域网下其他的 Syncthing 在线设备
- 直接复制设备 ID 添加
- 通过设备的摄像头扫描目标设备的 ID 二维码添加

设备 ID 及二维码可以从这里获得：

![Syncthing 配置倒腾记录](https://cdn.pkmer.cn/images/202311232205950.png!pkmer)

接下来按照时间顺序讲述配置过程，首先从电脑端开始操作，因为我的笔记在电脑端永远最新、最全。

### Mac

首先，从 Mac 端开始添加文件夹：

1. 点击左边「文件夹」区域的「添加文件夹」，弹出如下窗口：![Syncthing 配置倒腾记录](https://cdn.pkmer.cn/images/202311232208450.png!pkmer)
2. 文件夹 ID 和文件夹路径必须填写。为了方便起见，建议文件夹 ID 就填写为要进行同步的文件夹名称，文件夹路径填写该文件夹在电脑上的路径。
3. 共享选项中，勾选想要共享此文件夹的设备。![Syncthing 配置倒腾记录](https://cdn.pkmer.cn/images/202311232210093.png!pkmer)
4. 勾选开启忽略模式。![Syncthing 配置倒腾记录](https://cdn.pkmer.cn/images/202311232212638.png!pkmer)
5. 点击右下角的保存按钮。

> [!important] 忽略模式
> 之后会立马弹出一个界面，要求用户填入需要的忽略模式。忽略模式的规则是这样的：
>
> > 正则文件名可自行匹配，例如，模式 `foo` 可匹配文件 `foo` 、 `subdir/foo` 以及任何名为 `foo` 的目录。空格被视为正则字符，但前导空格和尾部空格会被自动修剪。
>
> 根据 Syncthing 官方的忽略模式通配符说明，我们可以自由地设置筛选哪些文件或文件夹要进行同步，哪些不需要进行同步。
> 在我的配置过程中，由于我要达成我在开头提到的==理想要求==，因此在我的配置过程中，我还会多次变更自己的忽略模式。

下面是我输入的==第一批忽略模式==：

> // 常规
> .git
> .trash
> .pandoc
> _remotely-save-metadata-on-remote.json
> .smart-connections
> .DS_Store

在这一批忽略模式中，我将 `.git`、`.trash` 等对于移动端没什么用但是空间占用量不小的文件/文件夹全部剔除，以免影响同步速度或污染移动端文件系统。

至此，Mac 电脑端的同步设置告一段落。

### Andriod/HarmonyOS Phone

接下来，手机的 Syncthing app 中，点击左上角三道杠打开侧边栏，在侧边栏中点击「网页管理页面」：![Syncthing 配置倒腾记录](https://cdn.pkmer.cn/images/202311232242082.jpg!pkmer)

进入后，顶上会有显眼的黄色边框弹窗，询问是否接受电脑共享过来的两个库文件夹。点击接受，并按照在 Mac 电脑端中设置的同步设置重新设置一遍（包括忽略模式），手机即会自动开始从 Mac 获取同步的文件夹并高速下载。

### iPad

之后设置 iPad 端，与之类似，在点击「接受」后，iPad 会从手机获取要进行同步的文件夹并下载。

需要注意的事是，由于 iOS 系统使用沙盒机制，一个 app 不能够操作在这个 app 所属的文件夹之外的文件。也就是说，**Möbius Sync 原本不应该可以将文件直接同步到属于 Obsidian app 的 Obsidian 文件夹，而是只能将 Syncthing 同步的文件夹下载到 Möbius Sync 自己拥有的 Möbius Sync 文件夹下**：![Syncthing 配置倒腾记录](https://cdn.pkmer.cn/images/202311232253843.png!pkmer)

但是 Möbius Sync 的作者最终实现了将同步文件夹直接下载到 Obsidian 文件夹的功能，从而打破了全平台 Syncthing 同步的最后壁垒。当然这个功能不是没有代价的，要想使用的话需要支付 38 大洋。

支付成功后，便可以在选择目标文件夹位置时，选中 Möbius Sync 以外的文件夹。其他的设置步骤与上面手机的类似，不再赘述。

### 分别设置好三端

到此，==理想要求==中的第一条「**三端同步**」已经实现。接下来倒腾第二条。

现在，三台设备上所有的插件、CSS，以及它们的启停模式全部都是完全一样的。现在，我需要让他们分化，比如移动端我不想打开 git 插件，我想使用编辑/阅读模式按钮 CSS 等，电脑上则保持原样。

因此我们需要先在三台设备的文件夹忽略模式中添加新的忽略模式，以隔绝它们之间插件、css 启停等设置的同步，此即为第二批忽略模式：

> //.obsidian 第一批
> .obsidian-git-data
> .obsidian/plugins/obsidian-git/data.json
> .obsidian/appearance.json
> .obsidian/community-plugins.json
> .obsidian/plugins/obsidian-style-settings/data.json

> //.obsidian 第二批
> .obsidian/app.json
> .obsidian/command-palette.json
> .obsidian/core-plugins-migration.json
> .obsidian/core-plugins.json
> .obsidian/graph.json
> .obsidian/hotkeys.json
> .obsidian/templates.json
> .obsidian/text-generator.json
> .obsidian/vault-stats.json
> .obsidian/workspace-mobile.json
> .obsidian/workspace.json

之后，你便可以着手在 iPad 与 Andriod/HarmonyOS Phone 上进行 Obsidian 的相关配置了。不用的插件关闭、打开需要的 css 片段等等……这些操作通通不会被同步到其他设备上。

需要注意的是，应用上面的同步规则后，Obsidian 的插件安装情况、CSS 片段安装情况、工作区情况依然是三端同步的。如果不想同步，你可以自行追加规则。

到这里，第二个==理想目标==也已经达成。Syncthing 的配置基本结束。

## 踩过的坑

下面聊聊我踩过的坑：

1. 库名里面不要包含 emoji，否则在安卓上会出现乱码��，导致同步文件夹出现偏差，从而造成同步失败。
2. 若 Syncthing 报错 `folder marker missing`，在同步文件夹中新建 `.stfolder` 文件夹，重新扫描即可。
3. 如若设备间分享文件夹时，没有出现询问是否接收文件夹的弹窗，则在 Syncthing 页面的右下方，点击「设备→选项→共享」，重试勾选目标设备授权即可。
4. 在同步过程中，`.obsidian` 配置文件夹中的文件极其容易出现文件冲突，造成其中产生许多冗余文件。我自己在配置时，第一次忽略模式没有加入后面的 `.obsidian第二批` 文件，后面发现问题后才加上，算是亡羊补牢。
5. 对于 Syncthing 在同步过程中产生的冲突文件，Windows 用户可以用 everything 搜索「conflict」关键字，我是直接在 Obsidian 内置的搜索中检索「conflict」关键字，找到冲突文件后比对删除即可。
