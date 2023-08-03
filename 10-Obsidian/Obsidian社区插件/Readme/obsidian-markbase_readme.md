---
uid: 2023080322215671
title: Obsidian 插件：【Readme】Markbase for Obsidian
tags: ['obsidian插件', 'readme']
description: 官方Markbase插件，可以在您自己的数字花园中在线共享Obsidian笔记
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Markbase for Obsidian

> [!Note] 插件名片
> - 插件名称：Markbase for Obsidian
> - 插件作者：Markbase
> - 插件说明：官方Markbase插件，可以在您自己的数字花园中在线共享Obsidian笔记
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/markbase-obsidian/obsidian-markbase)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-markbase)

## 概述

官方Markbase插件，可以在您自己的数字花园中在线共享Obsidian笔记

![Markbase for Obsidian](https://cdn.pkmer.cn/covers/obsidian-markbase_new.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/markbase-obsidian/obsidian-markbase/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-markbase]] 插件的自述翻译


# Obsidian的Markbase

官方[Markbase](https://markbase.xyz)插件，可以在您自己的数字花园中在线共享Obsidian笔记

![演示GIF](./src/assets/demo.gif)

## 指南

1. 安装插件
2. 从[Markbase应用](https://app.markbase.xyz)的仪表板或设置部分中复制您的个人令牌，并将其粘贴到Obsidian中的Markbase插件设置中
3. 在Obsidian插件的设置中，创建一个项目并选择一个文件夹/文件以在线上传
4. **完成！**该文件夹应该在您自己的数字花园中以https://<project-slug>.markbase.xyz的形式在线上运行（如果指定了自定义域名，则可以在自定义域名上运行）

### 可选项

1. *如果您更新了项目的内容，您可以在Obsidian插件的设置、功能区（侧边栏）或命令面板中按下同步按钮来重新同步您的项目。如果您是免费用户，每小时可以执行一次此操作；如果您是付费用户，每分钟可以执行一次此操作。*
2. *要删除一个项目，您可以在Obsidian插件的设置中按下删除按钮，或者前往[Markbase应用](https://app.markbase.xyz)。*
3. *要将您的项目更新到最新的主题/版本，请删除并重新创建您的项目。主题更新/错误修复会定期进行！*

## 注意事项

*该插件目前处于**alpha**开发阶段，仅在桌面上进行了测试*

可以在[Markbase首页](https://markbase.xyz)上找到**显著的错误**

要提出功能请求或查看/投票将在未来添加到Markbase的内容，请查看[公共路线图](https://markbase.featurebase.app/)。

要报告错误或请求使用插件的帮助，请[创建问题](https://github.com/markbaseteam/obsidian-markbase)，查看[帮助中心](https://markbase.tawk.help/)或使用[Markbase应用](https://app.markbase.xyz)中的实时聊天/帮助和支持表单。

## 更新日志

- 0.1.3
  - 恢复API URL到原始状态
- 0.1.2
  - 暂时更改API URL
- 0.1.1
  - 移除自动同步功能（由于服务器负载过重）
- 0.1.0
  - 仅在令牌有效时自动同步
  - 增加错误通知次数
- 0.0.9
  - 限制免费会员每小时创建/同步一次，付费会员每分钟创建/同步一次
  - 以上是因为服务器被人们频繁点击创建/同步按钮而过载
- 0.0.8
  - 付费会员每5分钟自动同步一次
  - 修复大型部署时未显示错误消息的错误
- 0.0.7
  - 添加命令和功能按钮，以便每次无需转到设置页面即可同步所有项目
- 0.0.6
  - 修复创建项目按钮永久禁用的问题
- 0.0.5
  - 更清晰的创建项目流程（如果不满足条件，则更明显地禁用按钮）
- 0.0.4
  - 更新API URL
- 0.0.3
  - 在创建之前检查正确的slug格式
  - 在不卸载插件的情况下刷新项目
  - 在不重新加载Obsidian的情况下检查有效的令牌
- 0.0.2
  - 添加查看实时URL的按钮
  - 在上传之前压缩项目zip文件
  - 其他小的用户体验改进
- 0.0.1
  - 初始版本
  - 在自己的数字花园中在线共享Obsidian笔记



