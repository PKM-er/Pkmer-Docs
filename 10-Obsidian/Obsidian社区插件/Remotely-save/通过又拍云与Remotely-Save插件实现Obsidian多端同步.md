---
uid: 20240429160053
title: 通过又拍云与 Remotely Save 插件实现 Obsidian 多端同步
tags: [Obsidian, 同步, remotely-save]
description: 通过又拍云与Remotely Save插件实现 Obsidian多端同步
author: 猫扑扑
type: other
draft: false
editable: false
modified: 20240429161400
---

# 通过又拍云与 Remotely Save 插件实现 Obsidian 多端同步

## 准备工作

在最开始，你需要准备以下：

- 又拍云账号
- Remotely Save 插件

> [!note] 阅读指引
> 又拍云账号注册免费，但是购买对应的服务，或者适合你的增量服务可能产生费用

## 又拍云设置

登陆注册之后，来到控制台，如下：

![upy1.png](https://cdn.pkmer.cn/images/upy1.png!pkmer)

选择**云存储**——创建服务

![upy2.png](https://cdn.pkmer.cn/images/upy2.png!pkmer)

服务名称按需填写，应用场景，存储类型，加速区域默认即可。

重点在**新建授权操作员**

![upy3.png](https://cdn.pkmer.cn/images/upy3.png!pkmer)

如图所示，这里自己填写，权限三个都勾上。记住操作员的 id 和密码。备注按需填写。

![upy4.png](https://cdn.pkmer.cn/images/upy4.png!pkmer)

创建服务。

![upy5.png](https://cdn.pkmer.cn/images/upy5.png!pkmer)

创建好之后进入配置。如下图

![upy6.png](https://cdn.pkmer.cn/images/upy6.png!pkmer)

选择存储管理——下拉到操作员授权——s3 凭证

![upy7.png](https://cdn.pkmer.cn/images/upy7.png!pkmer)

查看访问凭证

![upy8.png](https://cdn.pkmer.cn/images/upy8.png!pkmer)

ok，到这里又拍云配置基本完成。接下来进入 Remotely Save 插件的配置。

## Remotely Save 插件配置

插件下载安装好后，打开如下。

![rs1.png](https://cdn.pkmer.cn/images/rs1.png!pkmer)

远程服务选择 S3，服务地址 `s3.api.upyun.com` ，区域 `us-east-1` ，Access Key ID 就是又拍云 s3 访问凭证的 key，Secret Access Key 也是刚刚复制的。填入即可。

存储桶名字为云存储服务的服务名称，在本示例中为 savetest。

S3 URL style 选择 Path-Style。

在填写完成后，点击检查。

![rs2.png](https://cdn.pkmer.cn/images/rs2.png!pkmer)

如果上述操作无误，会有如下提示：

![rs3.png](https://cdn.pkmer.cn/images/rs3.png!pkmer)

这表明已经成功连上了云存储。接下来是一些设置。

![rs4.png](https://cdn.pkmer.cn/images/rs4.png!pkmer)

启动后第一秒运行一次，这可以保证每次打开时会同步一次。

保存时同步，建议选 10s。或按需设置。

![rs5.png](https://cdn.pkmer.cn/images/rs5.png!pkmer)

如图按需修改即可。

修改百分比按自己情况修改，如果改小的话会出现一次性更新大量文件后无法同步的问题。酌情修改吧。

ok 到这里基本已经设置完成了，可以在又拍云存储中发现自己的笔记已经被同步上去了。

![end.png](https://cdn.pkmer.cn/images/end.png!pkmer)

在之后使用时，只需要点击左侧工具栏的同步按钮，即可完成同步。

![end1.png](https://cdn.pkmer.cn/images/end1.png!pkmer)

## 手机平板同步

只需要在手机和平板上安装 remotely save 插件，和电脑一样的配置，就可以实现多端同步了。
