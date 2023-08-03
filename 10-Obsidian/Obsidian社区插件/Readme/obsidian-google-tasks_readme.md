---
uid: 2023080322192215
title: Obsidian 插件：【Readme】Google Tasks
tags: ['obsidian插件', 'readme']
description: 从Obsidian内部与你的Google Tasks互动
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Google Tasks

> [!Note] 插件名片
> - 插件名称：Google Tasks
> - 插件作者：YukiGasai
> - 插件说明：从Obsidian内部与你的Google Tasks互动
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/YukiGasai/obsidian-google-tasks)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-google-tasks)

## 概述

从Obsidian内部与你的Google Tasks互动



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/YukiGasai/obsidian-google-tasks/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-google-tasks]] 插件的自述翻译


# Obsidian Google Tasks

在Obsidian内管理您的Google任务

请确保安装最新版本的插件（至少1.5.0），以防止附件可能损坏（抱歉🙇‍♂️）。感谢@carlosrusso。

## 特点

- 列出任务
- 创建任务
- 编辑任务（将创建一个新任务并删除旧任务）
- 标记为已完成/待办
- 删除已完成的任务

> 不支持使用Google API处理特定时间 :(

## 安装

- 从最新的[发布版本](https://github.com/YukiGasai/obsidian-google-tasks/releases/)下载google-tasks
- 将zip文件解压到`.obsidian/plugins`文件夹中
- 重新启动Obsidian
- 在Obsidian设置页面中激活插件
- [创建Google Cloud项目](https://console.cloud.google.com/projectcreate?)
- [激活Google Tasks API](https://console.cloud.google.com/marketplace/product/google/tasks.googleapis.com?q=search&referrer=search&project=iron-core-327018)
- [配置OAUTH屏幕](https://console.cloud.google.com/apis/credentials/consent?)
    - 选择Extern
    - 填写必要的输入
    - 如果使用"@gmail"，请将您的电子邮件添加为测试者，并添加gmail和googlemail
- [添加API令牌](https://console.cloud.google.com/apis/credentials)
- [添加OAUTH客户端](https://console.cloud.google.com/apis/credentials/oauthclient)
    - 选择Web客户端
    - 将`http://127.0.0.1:42813`添加为JavaScript来源
    - 将`http://127.0.0.1:42813/callback`添加为重定向URI
- 在插件设置下的字段中添加密钥
- 点击登录

### 在移动设备上使用插件（解决方法）

- 在桌面设备上登录
- 在该设备上使用“将 Google 刷新令牌复制到剪贴板”命令
- 在手机上安装插件
- 在手机上的刷新令牌字段中粘贴来自桌面设备的令牌，而不是登录

## 用法

### Google任务视图

- 通过在左侧边栏中点击复选标记图标来打开视图
- 视图将打开并列出您的任务
   - 通过点击复选框来完成任务
   - 通过长按任务来编辑任务
   - 通过点击标题文本来显示和隐藏待办和已完成列表
   - 通过点击Google任务来强制更新列表
   - 列表将在一定时间间隔内检查更改（可在设置中更改）
   - 点击加号按钮创建新任务
   - 使用下拉菜单在不同列表之间切换

### 命令

#### 列出 Google 任务

显示所有未完成的任务列表，选择一个任务将会完成该任务。

创建Google任务

将打开一个弹出窗口以创建新任务

#### 插入Google任务

将所有未完成的任务列表插入到当前文件中。在文件中勾选任务将完成/未完成它。



