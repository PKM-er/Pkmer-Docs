---
uid: 20230509104823
title: Obsidian 插件：BookNote 让你在 Obsidian 中阅读标注 PDF
tags: [Obsidian, 插件, pdf标注, 阅读标注, 读书笔记]
description: Obsidian 插件：BookNote 让你在 Obsidian 中阅读标注 PDF
author: OS
type: other
draft: false
editable: false
modified: 20230703163621
---

# Obsidian 插件：BookNote 让你在 Obsidian 中阅读标注 PDF

## 概述

支持在 Obsidian 中阅读 PDF，并在上面标注记录在 OB 的笔记文档中。

>[!插件名片]
>- 插件名称：BookNote
>- 插件作者：围城
>- 插件说明：Obsidian 读书标注软件，适用 PDF，MS Office 等
>- 插件项目地址：[点我跳转](https://kknwfe6755.feishu.cn/docs/doccnBfbtETItLHMmbDBGBRdPrh)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-booknote-plugin)

## 效果&特性

- 目前支持可以对 pdf、office 等文档进行标注和管理。
- 可以用来管理指定目录下的文档，这个目录可以是库外目录，电脑上的任意路径都可以。
- 点击记录的回链笔记，可以跳转到 对应的文档位置。【前提：你的文档没有做路径移动】

## 准备

1.webview 安装包

2.booknote 插件压缩包

## 安装

下面演示使用**本地服务**如何部署，以 Windows 为例：

1. 安装 webview

因为插件使用 webview 服务，所以需要先安装 webview 环境。

解压到电脑任意目录即可，这里要记住解压的路径目录。

1. 安装 booknote 插件

通过项目地址，手动安装插件，手动安装参考 [[Obsidian社区插件的安装]]

## 软件设置

1. 插件设置
   注意开启使用本地服务器，其中 webview 路径就是安装步骤 1 中的解压路径。
   ![Pasted image 20230122232511](https://cdn.pkmer.cn/images/e37b4a5143089ca063d491769f9afd36_MD5.png!pkmer)

2. 重启 OB

## 使用方法

1. OB 页面按 Ctrl+P
![Pasted image 20230122232525](https://cdn.pkmer.cn/images/23ac31100fc97e6574269fcf10d05fb3_MD5.png!pkmer)

2. 开启后侧边栏出现 B 图标
![Pasted image 20230122232529](https://cdn.pkmer.cn/images/0b471490bc6f2596dccc56e39f29efa0_MD5.png!pkmer)


3. 点击即可看到你的书库目录，目前支持显示 pdf，xlsx，docx，pptx 文档显示。

**双击**文件即可在 OB 中打开。

![Pasted image 20230122232555](https://cdn.pkmer.cn/images/a5baae18381c480d57d5c66f4b8f302a_MD5.png!pkmer)

1. 浏览添加注释，高亮段落
![Pasted image 20230122232600](https://cdn.pkmer.cn/images/af09733e3b7834b89ee54563cb4d9787_MD5.png!pkmer)

2. 回链到 md 文档

目前两种方式

- 复制回链，在任意文档手动粘贴。
- 按住 ctrl 点击 复制回链 可以在当前激活的文档中**所在光标处**自动添加回链。

![Pasted image 20230122232621](https://cdn.pkmer.cn/images/75596842f49a9e9bda5b41d1170078ce_MD5.png!pkmer)

md 文档中的回链信息

![Pasted image 20230122232628](https://cdn.pkmer.cn/images/53991662833e81b55d082e03f6ed0c41_MD5.png!pkmer)

![Pasted image 20230122232633](https://cdn.pkmer.cn/images/a295dcf9fab4ca305794b8dc70aaef9e_MD5.png!pkmer)

1. pdf，office 文档添加 Obsidian 链接
![Pasted image 20230122232638](https://cdn.pkmer.cn/images/82c7900a82ea217cdf3497676498ec5c_MD5.png!pkmer)
![](https://kknwfe6755.feishu.cn/space/api/box/stream/download/asynccode/?code=MDljZTIwOWQ2MzE5MjA3ZjI2YTI5NDNiNWY5NDZmMWZfVHo1Z2tjVkQ3aUJjSGNHTkh5TWVtamxpUEtYYVBnVnFfVG9rZW46Ym94Y25wU0xiRmhPblEyQW8zaXlSQ1gxelFoXzE2NzQ0MDEwNDc6MTY3NDQwNDY0N19WNA)

即可实现 pdf 跳转 Ob

1. 可以添加维护，书籍对应文档的 yaml 信息
    1. ctrl+p 开启高级浏览器
![Pasted image 20230122232647](https://cdn.pkmer.cn/images/1231d8b4b76bcf36dc4f0774bce24933_MD5.png!pkmer)

2. 点击文档，选择编辑
![Pasted image 20230122232652](https://cdn.pkmer.cn/images/cc3c8a317d229b9d6cd80e58c7fd828a_MD5.png!pkmer)
![](https://kknwfe6755.feishu.cn/space/api/box/stream/download/asynccode/?code=YjRiNzAyZmY0ZGE0YmUyYjM2OTczYmY0ODc1MjczYWVfUXpCc2hRVkFXVGh4bGY3RWd6bXE1MEtlcHJ4eGkxUElfVG9rZW46Ym94Y25HUnlxcm54S1ZTSEpXS0UxalphaE1kXzE2NzQ0MDEwNDc6MTY3NDQwNDY0N19WNA)

3. 添加字段
![Pasted image 20230122232658](https://cdn.pkmer.cn/images/c6958ce45a77aa9b4b77c62618ecf2b3_MD5.png!pkmer)

4. md 文档自动填充 yaml 信息

在 ob 库的 booknote 目录 会生成 md 文档并添加 yaml 信息，这个文档跟文件是关联的。

![Pasted image 20230122232708](https://cdn.pkmer.cn/images/63796daeb61ecf4c96eb186059ac9db6_MD5.png!pkmer)

### 截图标注

目前截图标注只针对 pdf 文档有效，框选后复制回链即可把图片插入 md 文档中

1. 手动截图标注。
2. 自动截图标注

标注的内容格式可以根据设置的模板变量自定义

![Pasted image 20230122232839](https://cdn.pkmer.cn/images/c0789f3c879f3c5a2dee0ae4436b8e28_MD5.png!pkmer)

目前支持的模板变量有

| 模板变量名称  | 解释      |
|---------|---------|
| page    | 页码      |
| url     | 回链链接    |
| content | 选文摘录的内容 |
| img     | 区域摘录的截图 |
| comment | 注释      |
| width   | 截图宽度    |
| height  | 截图高度    |

>[!Tip] 提示
>- 如果你对读书感兴趣：[[obsidian-weread-plugin]]
>- 如果你对你豆瓣的读书记录感兴趣：[[obsidian-douban-plugin]]
