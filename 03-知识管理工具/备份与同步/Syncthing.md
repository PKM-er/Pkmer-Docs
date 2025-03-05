---
uid: 20230508235538
title: Syncthing
tags: [同步]
description: 点对点文件同步工具
author: windilycloud
type: basic
draft: false
editable: false
modified: 20230518221003
---

# Syncthing

## 什么是 Syncthing

[Syncthing](https://syncthing.net/) 是一款开源免费跨平台的文件同步工具，是基于**P2P 技术**实现设备间的文件同步。具体以下特性：

1. 隐私和安全：除了计算机上之外，您的任何数据都不会存储在其他任何地方。没有可能受到合法或非法损害的中央服务器。所有通信都使用 TLS 进行保护。使用的加密包括完全的前向保密，以防止任何窃听者访问您的数据。每个设备都由强加密证书标识。
2. 开放：开放协议，开源，开放开发，开放社区。
3. 强大且易用：有命令行模式，界面模式，可以同步任意文件夹
4. 跨端：支持 Android、Mac、Windows、Linux。

## Syncthing如何进行同步

大致来说有两种方式，一种是有云服务器的，一种是无服务器的。

无服务器的，类似于远距离蓝牙。两台设备安装 Syncthing，配对好，就可以进行同步。缺点是两台设备同步时都得在线。

```mermaid
graph LR
A[手机] <--> B[电脑]
A1[手机] <--> B1[服务器] <--> C1[电脑]
```

有服务器的，服务器起到一个中转的功能，由于服务器不停机，所以其它设备可以在任意时刻同步内容。

## 安装

Syncthing 官方版本缺少各种功能，不太适合小白使用，因此推荐下列三种第三方客户端。

### PC 和 macOS 端

电脑端推荐使用 [Syncthing Tray](https://martchus.github.io/syncthingtray/)，它包括了后台自启、托盘菜单、快速打开 GUI 等功能，支持 Windows、macOS、Linux 操作系统，可自定义外观，且同样开源，项目依旧活跃。

Windows 端不推荐使用 qt5 版本，外观不够好看。想要深色主题，可按以下操作：

1. 打开 Syncthing Tray 的设置。
2. 按下图设置：![20250305_124113_149_copy](https://github.com/user-attachments/assets/dc235325-edfe-4815-8e1b-96a5c457b11b)
3. 上图中的字体为 [LXGW Bright](https://github.com/lxgw/LxgwBright)，如有需要请自行下载。
4. 新建临时文件 `darkTheme.ini`，并打开。
5. 将下方代码复制粘贴到刚打开的文件中，保存并关闭：
   ```ini
   [General]
   palette=@Variant(\0\0\0\x44\x1\x1\xff\xff\xff\xff\xff\xff\xff\xff\0\0\x1\x1\xff\xff&&&&&&\0\0\x1\x1\xff\xff\x39\x39\x39\x39\x39\x39\0\0\x1\x1\xff\xff//////\0\0\x1\x1\xff\xff\x13\x13\x13\x13\x13\x13\0\0\x1\x1\xff\xff\x19n\x19n\x19n\0\0\x1\x1\xff\xff\xff\xff\xff\xff\xff\xff\0\0\x1\x1\xff\xff\xff\xff\xff\xff\xff\xff\0\0\x1\x1\xff\xff\xff\xff\xff\xff\xff\xff\0\0\x1\x1\xff\xff&&&&&&\0\0\x1\x1\xff\xff&&&&&&\0\0\x1\x1\xff\xff\0\0\0\0\0\0\0\0\x1\x1\xff\xff\0\0LL\x86\x86\0\0\x1\x1\xff\xff\xff\xff\xff\xff\xff\xff\0\0\x1\x1\xff\xff\0\0>>\x92\x92\0\0\x1\x1\xff\xff\0\0\x1a\x1ahh\0\0\x1\x1\xff\xff\x13\x13\x13\x13\x13\x13\0\0\x1\x1\xff\xffyyyyyy\0\0\x1\x1\xff\xff&&&&&&\0\0\x1\x1\xff\xff\x39\x39\x39\x39\x39\x39\0\0\x1\x1\xff\xff//////\0\0\x1\x1\xff\xff\x13\x13\x13\x13\x13\x13\0\0\x1\x1\xff\xff\x19n\x19n\x19n\0\0\x1\x1\xff\xffyyyyyy\0\0\x1\x1\xff\xff\xff\xff\xff\xff\xff\xff\0\0\x1\x1\xff\xffyyyyyy\0\0\x1\x1\xff\xff&&&&&&\0\0\x1\x1\xff\xff&&&&&&\0\0\x1\x1\xff\xff\0\0\0\0\0\0\0\0\x1\x1\xff\xff\0\0LL\x86\x86\0\0\x1\x1\xff\xff\xff\xff\xff\xff\xff\xff\0\0\x1\x1\xff\xff\0\0\0\0\xff\xff\0\0\x1\x1\xff\xff\xff\xff\0\0\xff\xff\0\0\x1\x1\xff\xff&&&&&&\0\0\x1\x1\xff\xff\xff\xff\xff\xff\xff\xff\0\0\x1\x1\xff\xff&&&&&&\0\0\x1\x1\xff\xff\x39\x39\x39\x39\x39\x39\0\0\x1\x1\xff\xff//////\0\0\x1\x1\xff\xff\x13\x13\x13\x13\x13\x13\0\0\x1\x1\xff\xff\x19n\x19n\x19n\0\0\x1\x1\xff\xff\xff\xff\xff\xff\xff\xff\0\0\x1\x1\xff\xff\xff\xff\xff\xff\xff\xff\0\0\x1\x1\xff\xff\xff\xff\xff\xff\xff\xff\0\0\x1\x1\xff\xff&&&&&&\0\0\x1\x1\xff\xff&&&&&&\0\0\x1\x1\xff\xff\0\0\0\0\0\0\0\0\x1\x1\xff\xff\x1b\x1b\x1b\x1b\x1b\x1b\0\0\x1\x1\xff\xff\xff\xff\xff\xff\xff\xff\0\0\x1\x1\xff\xff\0\0>>\x92\x92\0\0\x1\x1\xff\xff\0\0\x1a\x1ahh\0\0\x1\x1\xff\xff\x13\x13\x13\x13\x13\x13\0\0)
   ```
6. 点击上图中“调色板”右侧的“选择...”按钮。
7. 点击“加载...”按钮，并选中上面新建的 `darkTheme.ini` 文件。
8. 一直确认/应用。
9. 设置完成。
10. 删除临时文件 `darkTheme.ini`。

### 安卓端

在安卓端中，官方是有提供各项功能的，但因为某些原因，官方目前已放弃维护安卓端，所以即使官方安卓端暂时还可以用，也不再推荐了。更推荐使用 [Syncthing Fork](https://github.com/Catfriend1/syncthing-android)。

该第三方客户端同样开源，且更加好用。安装包可以在 GitHub 官网下载，也可以在 [F-Droid](https://f-droid.org/) 中下载。

F-Droid 是一个第三方软件商店，软件本体开源，商店内的所有软件也都是开源的。官方源在国内会比较慢，推荐换成清华源，具体换源方法很简单，请自行搜索。

### 苹果移动端

该端比较特殊，目前笔者只知道一个非开源且付费的第三方客户端：[Möbius Sync](https://mobiussync.com/)。Möbius Sync 当前可以直接在苹果官方应用商店下载。

不过考虑到该端只能安装官方应用商店的软件，而且软件上架商店还要付费，也能理解就是了。

## 云端搭建

> [!tips] 前提条件
> 1. 打开防火墙对应端口，这个在买服务器的控制台可以打开
> 2. 安装docker

- 官方参考资料：[syncthing/README-Docker.md](https://github.com/syncthing/syncthing/blob/main/README-Docker.md)
- [使用腾讯云搭建Syncthing来同步obsidian by 软通达](https://zhuanlan.zhihu.com/p/433024400)：山鸡哥的实践分享。安装完docker其实只需要一行命令，山鸡哥用它熟悉的宝塔面板安装的，可以优化有一下

==运行 docker 命令==

```bash
docker run -d -p 8384:8384 -p 22000:22000/tcp -p 22000:22000/udp -p 21027:21027/udp \
    -v /wherever/st-sync:/var/syncthing \
    --hostname=my-syncthing \
    syncthing/syncthing:latest
```

其中 `-d` 参数是后台运行 docker， 8384 是 UI 界面端口，22000 和 21027 是上传下载端口， hostname 是主机名称，可随意更改。

确保服务器打开三个端口后，访问 `<服务器地址>:8384` 便可打开 UI 界面。点击右上角操作按钮，获得设备 ID，添加到其他设备，则会在远程设备中显示已有设备。点击添加文件夹，便可创建一个同步文件夹，展开这个文件夹，便可有选项进行配置。如下图所示：

![Pasted image 20230508235815](https://cdn.pkmer.cn/images/Pasted%20image%2020230508235815.png!pkmer)

## 踩坑

- 同步文件夹里有mklink的文件夹，syncthing无法识别，但mklink文件夹的子文件夹，可以作为syncthing的根文件夹
