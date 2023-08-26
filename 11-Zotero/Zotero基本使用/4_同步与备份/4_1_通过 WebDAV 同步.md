---
uid: 20230817142727
title: 4.1- 通过 WebDAV 同步
tags: [zotero]
description: 
author: windingwind
type: other
draft: false
editable: false
modified: 20230817185042
---

# 4.1- 通过 WebDAV 同步

## 同步方案的选取建议

### 官方/WebDAV 方案：大多数人的首选

> 👍鉴于 Zotero6 以来新增的内置阅读器、批注、笔记、IOS 客户端等功能对 WebDAV 同步方式较友好，推荐大多数用户使用 WebDAV 同步方式。

对于大多数用户，**强烈建议使用 WebDAV 的同步方案** ：

* 设置简单、不易出错；
* 大多数用户无需费用支出（免费额度较多）；
* 支持 Zotero 移动端 APP

### ZotFile + 同步盘方案

ZotFile + 同步盘的主要作用是可自己决定目录的整理方式。仅在此情况下建议使用 zotfile 同步方式：经常需要在没有 Zotero 客户端的情况下访问文献附件，例如经常使用没有安装 Zotero 的公用电脑或者无法安装 Zotero 的设备，此时可根据文件夹名来查找文件。

这一方法 **对于大多数人来说都是非常非常折腾的，而且玩不好可能把自己绕进去** 。如果你确定要选择这一方案， **请务必完整阅读本文的全部内容，以及后面推荐的两篇 Zotfile + 同步盘 方案的介绍文档，认真了解这一方案的原理和特点** ，然后再操作。否则，你很可能在未来 **因操作不当导致附件无法打开** 。有太多案例了。

### 犹豫了？

**只要你还在犹豫，请你直接选择前者：WebDAV 方案** 。Zotfile 方案玩不好可能会带来很多麻烦事，而且前面提到的删除附件的问题也绝对算不上优雅。

* 如果你选择了 Zotfile 方案，然而在使用中设置或操作不当，可能会遇到以下多种报错：

    ![8ca7af91c7aebe48ab453083aa368f0d_MD5](https://cdn.pkmer.cn/images/202308171529255.png!pkmer)

    ![dcd3e60ed0d690e0f2345e2e44f6fe10_MD5](https://cdn.pkmer.cn/images/202308171529256.png!pkmer)

    ![769d178f31df3ebe20ce914888740726_MD5](https://cdn.pkmer.cn/images/202308171529257.png!pkmer)

    ![8b4fa3fdab1b79a20eb920fe3a01b042_MD5](https://cdn.pkmer.cn/images/202308171529258.png!pkmer)

    ![d2dd9cff5e8bae24a2c2dda8ce77cb77_MD5](https://cdn.pkmer.cn/images/202308171529259.png!pkmer)

以上仅仅是较为常见的报错节选，还可能遇到其他种种问题。正因如此， **新上手的朋友请尽量不要选择这一同步方案** 。

此外， **使用 Zotfile + 同步盘 方案会导致 iPhone/iPad 上的 Zotero 客户端里无法打开 PDF 附件这件事是板上钉钉的！**

下一篇 [[4_2_通过 Zotfile 与第三方网盘备份]]