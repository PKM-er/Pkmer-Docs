---
uid: 20231130141032
title: 在手机上用 Alist 搭建 webdav 服务
tags: []
description: 在手机上用 Alist 搭建 webdav 服务
author: cyl
type: other
draft: false
editable: false
modified: 20231130142151
---

# 在手机上用 Alist 搭建 webdav 服务

使用笔记软件，或者进行知识管理的过程中，一定会遇到同步和云端存储的问题，被大家问到最多的也是各种云端服务的优缺点。下面的文章是基于常见 webdav 服务如何在手机端应用的指南，希望对你有帮助。

## 安装下载 Termux

下载地址 [FDroid](https://f-droid.org/en/packages/com.termux/) [GitHub](https://github.com/termux/termux-app/releases)

Termux 是一个在安卓上模拟 Linux 环境的一个工具，需要在这个平台安装运行命令行软件。

## 安装软件并获取存储权限

第一次进入软件会慢一点，会安装一些额外的包，然后先更新源和软件

```bash
apt update &&  apt upgrade -y
```

中间如果弹出来什么问题就一路回车， 安装 alist

```bash
apt  install alist
```

获取系统存储权限

```bash
termux-setup-storage
```

在弹窗里选择允许

## 配置

先生成一个随机的管理员密码

```bash
alist admin
```

![845686567d0fb799539c5f9a3e25c9f5_MD5.png](https://cdn.pkmer.cn/images/845686567d0fb799539c5f9a3e25c9f5_MD5.png!pkmer)

记住这个密码，它只出现一次，不过忘了也可以重置

```bash
alist admin set  <new passwd>
```

​

我们要远程连接需要知道内网地址，安装 net-tools 用 ifconfig 查看

```bash
apt  install net-tools ifconfig  |  grep inet
```

​

可以看到我这个手机内网地址是 10.181.248.33

![f1e8e04e4e4e3119b39dc507744d9818_MD5.png](https://cdn.pkmer.cn/images/f1e8e04e4e4e3119b39dc507744d9818_MD5.png!pkmer)

然后启动服务，

```bash
alist server
```

![7d48621afe933bc59796827e18483079_MD5.png](https://cdn.pkmer.cn/images/7d48621afe933bc59796827e18483079_MD5.png!pkmer)

如果要启动并放到后台

```bash
nohup alist server &
```

此时服务已经运行起来，通过日志可以看到它运行在 5244 端口。

用同一个 wifi 下的手机或者电脑登录 <http://10.181.248.33:5244>

![86442e7b80ee393e4b066fd9cfbf6588_MD5.png](https://cdn.pkmer.cn/images/86442e7b80ee393e4b066fd9cfbf6588_MD5.png!pkmer)

输入账号 admin， 和刚刚记下的密码，我们进入了一个比较图形化的管理界面，右下角三个点可以修改语言，然后点击下面的 Manage， 这里管理员用户密码都可以重置，建议改一下别用默认的 admin，点击 Storage，这里可以设置存储路径，我这里用最简单 Local 作为例子，具体的挂载网盘获取 token 见 [官方文档](https://alist.nn.ci/guide/drivers/)，基本上主流网盘都支持。

![f36b17c625f90e1700056edff52eb041_MD5.png](https://cdn.pkmer.cn/images/f36b17c625f90e1700056edff52eb041_MD5.png!pkmer)

需要配置的是两个地方，Mount Path 指的是挂载到 alist 上面的路径，Root folder path 指的是相对于网盘的路径，简单来说就是把网盘的一个目录和 alist 的目录映射起来，比如我要把手机上的/sdcard/Documents/webdav 目录映射到 alist 根目录就把 Mount Path 填成/， Root folder path 写成 /sdcard/Documents/webdav，然后手机上/sdcard/Documents/webdav 里面的文件出现在 alist 里都是在最外层级。一个 alist 可以挂载很多个网盘，简单理解就是 alist 是个桥，把多个网盘的文件以一个树形目录呈现出来。

![c738b75b677aa24ba651bb44feaef6da_MD5.png](https://cdn.pkmer.cn/images/c738b75b677aa24ba651bb44feaef6da_MD5.png!pkmer)

到此已经设置完成，要使用 webdav，到软件里，webdav 地址写 [http://10.181.248.33:5244/dav/](http://10.181.248.33:5244/dav/)，用户 admin，密码写登录密码，如果用户名修改了改成对应的即可，如果想同步到根目录下的子目录在上面那个地址后面拼接上即可，如我要把 App 数据同步到我设置的 notes 文件夹，webdav 地址就是 <http://10.181.248.33:5244/dav/notes>

![6d099e70602dae16cf1e6d92c867a66c_MD5.png](https://cdn.pkmer.cn/images/6d099e70602dae16cf1e6d92c867a66c_MD5.png!pkmer)

在 App 上同步之后可以看到多了个文件夹，里面放着同步的数据文件。

![0f9914b3b3bd2b7604577547dc4e53c6_MD5.png](https://cdn.pkmer.cn/images/0f9914b3b3bd2b7604577547dc4e53c6_MD5.png!pkmer)

## 最后

最后，别忘了给 Termux 加锁让它保持后台运行。

如果要在 PC 端或者别的平台也是类似方法，只是需要从 GitHub 下载软件，其他配置都一样。
