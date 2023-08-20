---
uid: 2023082011355529
title: Obsidian 插件：【Readme】LDS Scriptures Reference
tags: ['obsidian插件', 'readme']
description: 轻松地插入对LDS经文的引用
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】LDS Scriptures Reference

> [!Note] 插件名片
> - 插件名称：LDS Scriptures Reference
> - 插件作者：pacokwon
> - 插件说明：轻松地插入对LDS经文的引用
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/pacokwon/obsidian-lds-scriptures-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?lds-scriptures-reference)

## 概述

轻松地插入对LDS经文的引用

![LDS Scriptures Reference](https://cdn.pkmer.cn/covers/lds-scriptures-reference.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/pacokwon/obsidian-lds-scriptures-plugin/main/README.md)
> 

---

## Readme(翻译）

下面是 [[lds-scriptures-reference]] 插件的自述翻译


# Obsidian的LDS经文参考插件

轻松在Obsidian中插入您最喜爱的经文节！
### 目录
- [特性](#features)
- [快速入门](#quickstart)
- [书名参考](#book-names-reference)
- [本地书籍安装](#local-book-installation)
- [开发](#development)
# 特点
## 引用经文
使用以下语法插入对经文的引用：`+<书名> <章节号>:<经节号>`

示例：

![verse-completion](https://github.com/pacokwon/obsidian-lds-scriptures-plugin/assets/31656049/a4d0397d-deb1-4e3b-bbce-cd6661742572)

插入的引用示例：

![verse-insertion](https://github.com/pacokwon/obsidian-lds-scriptures-plugin/assets/31656049/8fc59255-f845-4b99-86be-edaee94c16a7)
参考范围
您还可以使用以下语法插入对一系列经文的引用：`+<书名> <章节号>:<起始经节>-<结束经节>`

示例：

![范围完成](https://github.com/pacokwon/obsidian-lds-scriptures-plugin/assets/31656049/655004bc-1a11-4ad2-a887-7983cfb4f82f)

插入引用示例：

![范围插入](https://github.com/pacokwon/obsidian-lds-scriptures-plugin/assets/31656049/095bbbf0-ca70-4380-98e4-2988175b6bd4)
多语言支持
目前，提供以下翻译：

* `deu` - 德语，
* `eng` - 英语，
* `jpn` - 日本语，
* `kor` - 韩语，
* `spa` - 西班牙语，

如果您想使用其他翻译，请随时在[翻译存储库](https://github.com/pacokwon/lds-scripture-translations/)提交问题。
多种经典支持
耶稣基督后期圣徒教会正式接受的经典卷册，即[标准作品](https://www.churchofjesuschrist.org/study/manual/gospel-topics/standard-works?lang=eng)，可供使用。

* 圣经（英王詹姆斯版）
* 摩门经
* 教义与盟约
* 珍珠大卷
# 快速入门
## 要求
您只需要安装Obsidian！
## 安装
### 社区插件
可以在Obsidian的社区插件列表中找到此插件。打开Obsidian的设置 > 社区插件，点击“浏览”来搜索此插件的名称并安装。
### 手动安装
该插件也可以通过以下方式手动安装：
1. 在您的vault的`.obsidian/plugins`目录下创建一个名为`lds-scriptures-reference`的文件夹
2. 从该插件的[Releases页面](https://github.com/pacokwon/obsidian-lds-scriptures-plugin/releases)下载并将`main.js`、`manifest.json`和`styles.css`放入`.obsidian/plugins/lds-scriptures-reference`中
3. 重新加载Obsidian并导航到`Community Plugins`选项卡，以查看安装是否成功
# 书名参考
本插件使用的书名列表可以在[此页面](docs/BOOKS.md)上找到。
# 本地书籍安装
目前，除了圣经之外，没有可用的选项通过API检索LDS经文。因此，该插件将经文数据存储在本地。英文翻译的大小为14MB，但请注意大小可能因翻译而异。

该插件在底层使用[env-paths](https://github.com/sindresorhus/env-paths)来解析翻译数据目录。根据您的平台，翻译将存储在不同的位置。

* 对于Windows：`C:\Users\<USERNAME>\AppData\Roaming\lds-scriptures-reference\Config\translations`
* 对于macos：`~/Library/Preferences/lds-scriptures-reference/translations`
* 对于linux：`$XDG_CONFIG_HOME/lds-scriptures-reference/translations`

还请注意，由于这些经文有100多种官方翻译版本，因此经文数据不包含在插件本身中，而是在您在插件首选项选项卡中选择语言时进行延迟安装。
# 开发
## 构建
安装依赖：
```bash
$ yarn
```

运行构建脚本：
```bash
$ yarn build
```

在根目录下将会创建3个文件：`main.js`、`manifest.json`、`styles.css`
版本控制
该插件遵循[语义化版本](https://semver.org/)。

要发布新版本，请使用`git tag -a <major.minor.patch> -m <message>`进行标记。



