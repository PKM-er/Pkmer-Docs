---
uid: 20240115151808
title: 软件使用 zotero 抓取知网文献
tags: [Zotero,Zotero插件]
description: 软件使用 zotero 抓取知网文献
author: wang
type: other
draft: false
editable: false
modified: 20240115153909
---

# 软件使用 zotero 抓取知网文献

> **第 2 期**介绍过关于知网文献抓取失败的各种因素及处理
> 但经过跟同学朋友的交流后发现过程中还存在各种**问题**
> 本期从**新视角**着手介绍如何实现知网文献的**确定抓取**

## 抓取流程

zotero 抓取知网文献的**流程**大致是

- 安装**浏览器的插件**
- 浏览器插件与 zotero 建立联系
- 当特定的翻译器文件识别到**目标网址**（例如知网）
- 抓取知网中的**条目信息**并获取全文

## 抓取报错

当**抓取流程错误，配置不完全时**，会出现如下 bug

- 无法抓取，**显示翻译器故障**
	- 翻译器**文件错误**
	- **茉莉花版本**不是最新
- 可以抓取蓝色网页，**无全文，无条目信息**
	- 未检测到**知网翻译器**
- 显示可以抓取，**但无全文，无条目信息**
	- 浏览器与翻译器不匹配
	- VPN 网址
- 可以抓取到条目信息，**但无全文**
	- 茉莉花版**本非最新**

## 抓取五要素

### 概览

![2ldoh.png](https://cdn.pkmer.cn/images/2ldoh.png!pkmer)

### 浏览器插件

- 每次更新翻译器后都需要**同步更新浏览器插件**
![catcj.png](https://cdn.pkmer.cn/images/catcj.png!pkmer)

### 浏览器设置

- 在使用过程中，**edge 浏览器 bug 最少（个人遇到的）**
- mac 的 safari**无法使用 zotero 插件**
- **谷歌浏览器 bug: 近期（12.25）**：谷歌浏览器在**120 版本**后无法抓取到条目信息和全文。暂时无法解决，需要切换浏览器

### 茉莉花版本

- 由于知网近期进行了**较大的更新**
- 务必确保茉莉花的插件（截至 23-12-25）最新才能抓取**知网条目**
- zotero 7 **1.0.0-10**
- zotero 6 **0.28**

### 茉莉花配置

- 安装茉莉花后，**要手动在设置里更新才可以获取最新翻译器**
- ![jqdfs.png](https://cdn.pkmer.cn/images/jqdfs.png!pkmer)

### 网络条件

- 校园 VPN 的环境下**可能无法正常抓取**
- 会**显示翻译器抓取错误**
- 请切换到**知网的官方网址进入，或使用校外访问**
- 如果可以抓取到条目信息无法抓取全文，**可通过插件抓取条目信息并手动下载全文拖动到 zotero 里**
- 如果是特殊网络的 vpn 导致无法抓取条目，自行查阅**是否是知网流量走了代理**，设置好正确的规则可以解决错误
![e81hz.jpg](https://cdn.pkmer.cn/images/e81hz.jpg!pkmer)

## 其它

### 茉莉花插件安装

在线访问： [Zotero 插件集市 (pkmer.cn)](https://pkmer.cn/products/zotero/zoteroMarket/)

### 如何反馈插件错误

Issues · l0o0/jasminum (github.com)(<https://github.com/l0o0/jasminum/issues>)