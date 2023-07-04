---
uid: 20230616204512
title: Obsidian 插件：Hidden Folder 快速隐藏文件夹
tags: [Obsidian, 插件, 隐藏, 文件管理]
description: Obsidian 插件：Hidden Folder 快速隐藏文件夹
author: OS
type: basic
draft: false
editable: false
modified: 20230705000648
---

# Obsidian 插件：Hidden Folder 快速隐藏文件夹

> [!Note] 插件名片
> - 插件名称：Hidden Folder
> - 插件版本：1.0.7
> - 插件作者：ptrsvltns
> - 插件描述：在文件管理器中快速隐藏文件夹
> - 插件项目地址：[点我跳转](https://github.com/ptrsvltns/hidden-folder-obsidian)

## 效果&特性

- 通过正则表达式来隐藏 Obsidian 文件管理器中的目录/文件夹

## 使用

- 需要使用插件自带的设置，来完成设定。
- 首先，书写好正则表达式，定义你要隐藏的文件夹
- 其次，开启选项，选择是隐藏这些文件夹，还是恢复已经隐藏的文件夹
![image.png](https://cdn.pkmer.cn/images/20230616211439.png!pkmer)

### 一些简单正则表示方式

- 隐藏文件夹

> `^folder1`

```结果
- folder1 <- match
  - folder1
  - folder2
- folder2
  - folder1
  - folder2
```

- 匹配文件中文件名内容

> `abc`

```结果
- folder1
  - folder1
    - subabcfolder1 <- match
  - folderabc2 <- match
- folder2
  - foldabcer1 <- match
  - folder2abc <- match
```

- 匹配

> `\/folder$`

```结果
- folder1
  - folder1
  - folder2
- folder2
  - folder1 <- match
  - folder2
```

> `\/?folder$`

```结果
- folder1 <- match
  - folder1
  - folder2
- folder2
  - folder1 <- match
  - folder2
```

> `folder1\/folder`

```结果
- folder1
  - folder1 <- match
  - folder2
- folder2
  - folder1
  - folder2
```