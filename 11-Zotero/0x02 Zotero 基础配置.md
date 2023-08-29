---
uid: 20230609145230
title: Zotero 基础配置
tags: [zotero, 教程]
description: 
author: darkluna999
type: other
draft: false
editable: false
modified: 20230726232858
---

# Zotero 基础配置

> 使用 6Beta 版的话启动会弹出这个提示，如果想要升 7 的话需要手动检查更新，但这里，至少暂时还不建议更新到 7

![[source/Pasted image 20230720074856.png]]

## 首选项

编辑 - 首选项 打开配置页

![[source/Pasted image 20230720080504.png]]

### 常规

1. 建议**关闭**基于关键词和主题词自动为条目添加标签，此功能虽然可以方便的引入自动标签，但其也会导致标签面板中膨胀混乱，因为众所周知，文献的关键词都很 ~~随意~~ 精准
2. 建议**不要修改为**使用第三方软件打开 PDF ，使用 Zotero 内置的好处是，可以触发插件的注释变更扳机以获得更多的扩展功能，此处需要注意的是如果在 Zotero 内部批注的话可能遇到以下几点要点
    - [[1x01 修复 PDF 图像黑角显示问题]]
    - [[1x03 PDF 注释的导入导出]]
3. 关于重命名链接的文件，此功能一般由 ZotFile 插件替代而不勾选，但其暂时声明不支持 Zotero7 请斟酌对待
![[source/Pasted image 20230720080610.png]]

### 同步

首先需要 [注册 Zotero 账户](https://www.zotero.org/user/register) 而后在本页内登录

- 登陆后先不要急着去点 [[#触发手动同步]]
![[source/Pasted image 20230720082053.png]]

#### 官方同步

登录之后如下，默认会启动官方的 Zotero 同步方式

- 官方同步采用空间制，免费有 300M 的空间额度，如果初次上手，是推荐体验一下的
- 如果文件量不是特别大或担心磁盘读写的话，**建议勾选同步时下载文件**，这样能确保每次使用的时候均可以直接打开而不需等待文件下载
- 如果希望按需下载，更改为按需下载即可随用随下
- 如果需要使用 [[0x09 Zotero 群组协作]] 功能的话，其存储空间由群组的组织者的空间决定，具体见该篇

![[source/Pasted image 20230720082258.png]]

#### WebDAV 同步方案

下拉同步方式切换为 WebDAV，填写你在对应 WebDAV 服务商提供的地址、账户、密码，点击验证，一些扩展和报错解决见下文，使用坚果云 WebDAV 同步的话，尤其注意**地址不要输入错误**已经提供了 `https` 与 `/zotero/`，当然 `https` 可以按照提供的地址进行更改，最后点击验证

- [[0x05 Zotero 备份与同步]]
- [[1x02 关于 Zotero 备份同步的一些问题]]

![[source/Pasted image 20230720082456.png]]

#### 重置

![[source/Pasted image 20230720082312.png]]

#### 触发手动同步

![[source/Pasted image 20230720082353.png]]

### 搜索

![[source/Pasted image 20230720080803.png]]

### 导出

![[source/Pasted image 20230720081124.png]]

### 引用

![[source/Pasted image 20230720081141.png]]

### Zotero 样式编辑器

![[source/Pasted image 20230720082605.png]]

#### CSL 样式预览器

![[source/Pasted image 20230720082631.png]]

#### 文档编辑软件

![[source/Pasted image 20230720081233.png]]

### 高级

![[source/Pasted image 20230720081250.png]]

### 文件和文件夹

![[source/Pasted image 20230720081303.png]]

### RSS 订阅

![[source/Pasted image 20230720102135.png]]

![[source/Pasted image 20230720102231.png]]