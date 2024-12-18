---
uid: 20231225121109
title: zotero 使用常见 bug 及处理
tags: []
description: zotero使用常见bug及处理
author: wang
type: other
draft: false
editable: false
modified: 20241211104059
---

# zotero 使用常见 bug 及处理

> 本期介绍了在使用过程中的，以及在与同学交流过程中。zotero 的常见问题及处理方法。大部分是**zotero7**出现的问题，希望对大家有所帮助

## 1 基础问题

### 1 知网论文无法抓取

- 阶段 1
	- 使用茉莉花更新，**翻译器。并更新浏览器插件。全部重启**
- 阶段 2
	- 阶段 1 无效后，考虑**手动更新翻译器 js 文件**
	- 流程见第二期
- 阶段 3
	- 切换浏览器进行尝试
- 阶段 4
	- 前**往中文翻译器 github 项目查看最近更新**，确认是共性还是特性的问题。
	- 可能存在知网页面改版导致抓取失效。那就慢慢等适配

### 2 主页面列宽过窄无法调整

- 图示（主要出现在 zotero7 里）
![zotero使用常见bug及处理](https://cdn.pkmer.cn/images/d3aad2f9f55a4d8dff880fec68dc0c6e_MD5.png!pkmer)
- 查看软件保证是**最新版本**
- 考虑到有**列数设置相关的插件干扰**。（绿青蛙，zotero，茉莉花等。关闭插件后查看是否解决）
- 关闭插件解决后再慢慢打开插件，进行调整，考虑是否关闭哪个插件

### 3 插件禁用，显示安全模式

![zotero使用常见bug及处理](https://cdn.pkmer.cn/images/741a7039e432c875f7d767204b76169b_MD5.png!pkmer)

- 在主页面，**退出 zotero**，重新进入即可
![zotero使用常见bug及处理](https://cdn.pkmer.cn/images/268983068669bdfce438605179128959_MD5.png!pkmer)

### 4 word 参考文献插件无法使用

多在**zotero6 更新 zotero7 后出现**

![zotero使用常见bug及处理](https://cdn.pkmer.cn/images/3ce5ba50ce79cb368f6855f19c290556_MD5.png!pkmer)

- 其它：考虑对 zotero 软件右键，兼容性模式运行

### 5 插件版本回退，插件无法使用

- **更新最新版本插**件！见我的 18 期推文，zotero7 插件更新比较快。保持最新是顺利使用的保证
- 危：可能由于**坚果云同步**问题。同步时务必不要同步整个 zotero 文件夹（包含了配置文件的文件夹）。这样可能导致插件配置出问题。
- 正确配置（配置路径后会自动把附件上传到坚果云，**不要自己同步**）
![zotero使用常见bug及处理](https://cdn.pkmer.cn/images/8d39a4580da5a3da12a338d50447ddcf_MD5.png!pkmer)

## 2 插件使用问题

### 1 zotero-style 期刊标签不显示

需要**自行到 easyscholar 复制密钥**，到 zotero 里使用

![zotero使用常见bug及处理](https://cdn.pkmer.cn/images/800696d29a36d1382fd616edefd9e0c3_MD5.png!pkmer)

具体流程见我的第 6 期推文

### 2 translate 翻译插件无法使用

- 设置条目语言，**确保条目语言为英语**翻译插件才起作用
- 是否选择了谷歌翻译，因**网络问题**无法使用

### 3 无法添加条目笔记

- 需要自行添加条目，**单 pdf 不显示阅读信息，也不能添加笔记**
- 抓取不到时请务必自己添加
![zotero使用常见bug及处理](https://cdn.pkmer.cn/images/293d3407945e5af9d621a0029ce998fb_MD5.png!pkmer)

### 4 GPT 插件无法使用

- 如果使用官方密钥，**确保网络条件允许**
- 如果使用转发的国内密钥，请设置有用的**api 地址，可在购买界面查看到**

