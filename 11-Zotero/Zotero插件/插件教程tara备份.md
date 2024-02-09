---
uid: 20240115151801
title: 插件教程 tara 备份
tags: [Zotero, Zotero插件]
description: 插件教程 tara 备份
author: wang
type: other
draft: false
editable: false
modified: 20240115154355
---

# 插件教程 tara 备份

>本期介绍 zotero 的备份插件 tara（蒲公英）
>插件的主要功能是一键备份 **zotero 插件，zotero 插件配置，zotero 引用样式，zotero 翻译器**
>同时介绍一下如何 win 系统实现**手动备份**zotero 的全数据

## 效果展示

### 配置导出

![dxng6.png](https://cdn.pkmer.cn/images/dxng6.png!pkmer)

### 配置导入及恢复

![pmew5.png](https://cdn.pkmer.cn/images/pmew5.png!pkmer)

## 插件安装

- 安装网址： Releases · l0o0/tara (github.com)(<https://github.com/l0o0/tara/releases>)
	- 下载 xpi 文件（图示为 zotero7 版本）
	- ![zqcd2.png](https://cdn.pkmer.cn/images/zqcd2.png!pkmer)
	- 注意：**github 部分区域需要稳定网络访问**
	- 在线访问： [Zotero 插件集市 (pkmer.cn)](https://pkmer.cn/products/zotero/zoteroMarket/)
- 进入 zotero- 工具 - 附加组件 -**Install Add-on From Files**- 选择下载的 xpi 文件进行安装

## 插件使用（zotero7 为例）

### 创建备份

![7ukx6.png](https://cdn.pkmer.cn/images/7ukx6.png!pkmer)

### 导出备份

数据会保存在数据文件夹的**backup 目录**中（用于转移到另一台电脑中使用该备份恢复）

![jp6oc.png](https://cdn.pkmer.cn/images/jp6oc.png!pkmer)

### 导入备份

用于不同电脑的 zotero 的**快速设置与恢复**

在新的 zotero 里**安装 tara 插件**

在新电脑使用 tara 插件选择**导入**，并选中**zip 备份包**

![jyhvl.png](https://cdn.pkmer.cn/images/jyhvl.png!pkmer)

### 恢复备份

在同一设备中点击恢复，选中时间节点

在不同设备中**首先要导入，再点击恢复**

![yh7dt.png](https://cdn.pkmer.cn/images/yh7dt.png!pkmer)

## 如何手动设置备份（无奈的时候用 tara 已经挺好用）

手动备份可以实现数据的无损备份，包括但不仅限于**账户、插件、设置、文献**等数据。

首先您需要在新电脑上安装 Zotero，然后将旧电脑的**配置文件夹及数据文件夹**拷贝到新电脑的同一位置。

配置文件夹的转移确保是**同一位置**，同时要做好备份工作（是的，**备份的备份**）

### win 系统配置文件夹

**zotero 数据源目录：C:\\Users<用户名>\\AppData\\Roaming\\Zotero\\Zotero\\Profiles\\\*\.default 中文件**

注意事项

- AppData 是隐藏目录，需要设置**显示隐藏文件夹**后进入
- 转移的过程中务必保证，两个电脑的 zotero 都是**关闭的**，避免出现无法访问的情况

### win 系统数据文件夹

包含了**zotero 的翻译器，数据文件等**

注意事项

- 数据文件夹复制的时候务必**复制完整**
- 转移的过程中务必保证，两个电脑的 zotero 都务必**关闭的**，避免出现无法访问的情况，导致**传输不全**
![tnl7b.png](https://cdn.pkmer.cn/images/tnl7b.png!pkmer)

## 注意事项

### 跨系统间的恢复还不完整

如从 mac 到 win 的恢复，或者 mac 到 win 的恢复

可能会出现**恢复不完整**的情况

建议**同系统内的恢复**

### 帮别人配置的时候注意自己的信息

如果帮同学或老师配置插件的过程中**省事使用了 tara**

会一起将自己的可能的**有价值信息**给一起备份

包括但不限于

- **gpt 密钥**
- **easyscholar 密钥等**


