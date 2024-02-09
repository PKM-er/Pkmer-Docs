---
uid: 20231210134333
title: crush reference 配置全教程
tags: [zotero, 插件]
description: crushreference 配置教程
author: wang
type: other
draft: false
editable: false
modified: 20231210154129
---
# crush reference 配置全教程

> 本期主要介绍 zotero 插件 crush reference 的使用和配置；实现一键抓取当前论文的参考文献。

## 插件效果

- 当前页面论文抓取**所有参考文献**
- 参考文献的**信息抓取**
- 参考文献的**摘要标题预览及翻译预览**
- **快捷添加参考文献到当前路径或指定路径**
- ![67db913e609b8e1d3d0d67ccba7e820f_MD5](https://cdn.pkmer.cn/images/202312202039758.gif!pkmer)

## 插件安装

### 安装网址

[MuiseDestiny/zotero-reference](https://github.com/MuiseDestiny/zotero-reference/releases)

![c1bd17c4b5b29dd6d5912394c860f547_MD5](https://cdn.pkmer.cn/images/202312202039622.png!pkmer)

注意：**github 部分区域需要稳定网络访问**。[Zotero 插件集市 (pkmer.cn)](https://pkmer.cn/products/zotero/zoteroMarket/) 可实现稳定下载

### 安装方式

工具 - 附加组件 -**Install Add-on From Files**- 选择下载的 xpi 文件进行安装

![e390afb96a92e0f86e6bdaafc5ad7296_MD5](https://cdn.pkmer.cn/images/202312202039780.png!pkmer)

## 插件配置

- 进行设置 ![f973fff37aa0b3f34d95f58d36733957_MD5](https://cdn.pkmer.cn/images/202312202039043.png!pkmer)
- 注意事项
	- 基本设置的点很少，**默认即可**
	- 储存处可打开，下次使用就不用再刷新
	- 来源不要选 API，容易抓取不到条目

## 插件使用

### 抓取参考文献

点击阅读器侧栏 - 点击参考文献 -**点击刷新**

![crushreference](https://cdn.pkmer.cn/images/202312202040251.gif!pkmer)

### 预览参考文献信息

- 鼠标在参考文献处**悬浮**即可预览
- 参考文献有多个来源，可以调换，建议使用第二个数据源（**一般带有摘要可预览**）
- **crtl 点击**参考文献内容即可进行翻译（调用**translate 插件**的引擎）
- ![crush-reference](https://cdn.pkmer.cn/images/202312202040091.gif!pkmer)

### 抓取参考文献

- 直接点击“＋”号进行抓取（默认抓取到**未分类条目**）
- ctrl + 抓取到选定路径
- ![22e7b647a63671816db2eeaa7ba76949_MD5](https://cdn.pkmer.cn/images/202312202040739.gif!pkmer)

## 更多快捷键

### 刷新时快捷键与效果

|操作|触发|说明|
|---|---|---|
|点击|解析/获取当前 PDF 的参考文献|第一次点击会从首选项设置的优先源获取，再次点击刷新会切换到另一个源|
|长按|如果本地有当前 PDF 的参考文献缓存，默认是会读取它的，长按则不读取重新解析|所有源都适用|
|`Ctrl` + 点击/长按|从当前所在页向前解析参考文献|适用于 PDF 源，对 API 源无效，建议解析硕博论文时使用，需要提前将 PDF 滚动到最后一条参考文献所在页面|
|双击上图 `参考文献` 文字|复制当前所有参考文献到剪贴板|

### 参考文献

|操作|触发|说明|
|---|---|---|
|单击蓝色区域|复制参考文献信息|连同标识符一起复制，如 DOI|
|长按蓝色区域|编辑参考文献信息|建议中文参考文献使用编辑功能以精简条目，提高导入成功率|
|`Ctrl`+ 单击蓝色区域|用系统浏览器打开文献 URL|偶尔会查询文献地址消耗一定的时间|
|单击 `+`|添加参考文献到正在阅读文献所在的所有文件夹下，并双向关联||
|`Ctrl`+ 单击 `+`|添加到 `Zotero主面板` 选择的文件夹下，并双向关联|如上图的 GEE|
|单击 `-`|取消双向关联|但是不会删除该文献，它仍在 `我的文库`|

## 其它

### 插件适用条件

适用于英文文献（**中文论文非常不支持**）

适用于可选中的优质论文

### bug 及其它

参考文献过多（**超过 500 篇后**）可能会显示不全

论文 pdf 质量差，或论文引用格式混乱，可能会导致抓取错误（**抓到的论文不是需要的论文**）

### bug 及反馈

参考文献过多一般也能匹配到将近 500，之后的篇目只能自己手动去搜索

论文 pdf 质量差：适用**abbyfinereader**等进行再次 OCR

如果抓取到毫不相关的论文，可以切换来源查看。如果所有来源都不对，可能插件本身不适配。**[前往官网](https://github.com/MuiseDestiny/zotero-reference/issues/6) 进行反馈**，或者**放过吧**
