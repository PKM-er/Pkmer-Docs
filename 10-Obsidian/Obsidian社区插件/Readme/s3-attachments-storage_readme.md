---
uid: 2023080322261661
title: Obsidian 插件：【Readme】S3 attachments storage
tags: ['obsidian插件', 'readme']
description: 一个Obsidian插件，用于在S3兼容服务上存储和检索媒体附件。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：S3 attachments storage

> [!Note] 插件名片
> - 插件名称：S3 attachments storage
> - 插件作者：TechTheAwesome
> - 插件说明：一个Obsidian插件，用于在S3兼容服务上存储和检索媒体附件。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/TechTheAwesome/obsidian-s3)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?s3-attachments-storage)

## 概述

一个Obsidian插件，用于在S3兼容服务上存储和检索媒体附件。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/ttax00/obsidian-s3/master/README.md)
> 

---

## Readme(翻译）

下面是 [[s3-attachments-storage]] 插件的自述翻译


# S3附件存储

![GitHub](https://img.shields.io/github/license/TechTheAwesome/obsidian-s3?style=for-the-badge)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/TechTheAwesome/obsidian-s3/ci.yml?style=for-the-badge)
[![wakatime](https://wakatime.com/badge/user/4312729e-bc28-4bc0-9074-161a64a7ad20/project/83a03e69-c8e0-49a9-ac01-a80c5ef7c96f.svg?style=for-the-badge)](https://wakatime.com/badge/user/4312729e-bc28-4bc0-9074-161a64a7ad20/project/83a03e69-c8e0-49a9-ac01-a80c5ef7c96f)

一个用于在S3兼容服务上存储和检索媒体附件的[Obsidian](https://obsidian.md/)插件。

![](assets/welcome.gif)

## 开始使用
- 克隆这个仓库。
- 运行 `npm i` 安装依赖。
- 运行 `npm run build` 编译成 `main.js`。

## 手动安装插件
- 将 `main.js` 和 `manifest.json` 复制到你的 vault 中的 `VaultFolder/.obsidian/plugins/your-plugin-id/` 目录下。

## 功能列表
支持的文件类型（受Obsidian允许链接的文件类型限制）：
- 图像文件（.ico, .png, .jpg, .gif）。
- 视频文件（.mp4）。
- 音频文件（.mp3, .wav）。

### 上传
- [x] 粘贴时上传。
- [x] 拖放时上传。
- [ ] 添加附件时上传。

### 检索
- [x] 为图像生成链接。
- [x] 为视频生成链接。
- [x] 为音频生成链接。
- [x] 返回不支持的资源的下载链接？（pdf，txt，...）。

### 助手/杂项
- [x] 命令：删除未使用的资源。
- [x] 命令：显示存储桶大小。
- [ ] 在端口/文件夹名称更改时重命名链接。

### 未计划的
- [ ] 命令：上传现有的兼容附件。
- [ ] 并行上传。
- [ ] 重试次数和延迟。
- [ ] 上传静态HTML网站。
- [ ] 为静态HTML生成链接。
- [ ] 资源本地缓存（可能增加与移动设备的不兼容性）。

非常感谢
灵感来自：
- [obsidian-paste-png-to-jpeg](https://github.com/musug/obsidian-paste-png-to-jpeg)
- [Obsidian Imgur Plugin](https://github.com/gavvvr/obsidian-imgur-plugin)
- [Obsidian Static File Server](https://github.com/elias-sundqvist/obsidian-static-file-server)



