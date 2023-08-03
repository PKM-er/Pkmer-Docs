---
uid: 2023080322155228
title: Obsidian 插件：【Readme】Chevereto Image Uploader
tags: ['obsidian插件', 'readme']
description: 这个插件可以将你剪贴板中的图片上传到Chevereto。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Chevereto Image Uploader

> [!Note] 插件名片
> - 插件名称：Chevereto Image Uploader
> - 插件作者：kkzzhizhou
> - 插件说明：这个插件可以将你剪贴板中的图片上传到Chevereto。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/kkzzhizhou/obsidian-chevereto-image-uploader)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-chevereto-image-uploader)

## 概述

这个插件可以将你剪贴板中的图片上传到Chevereto。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/kkzzhizhou/obsidian-chevereto-image-uploader/main/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-chevereto-image-uploader]] 插件的自述翻译


<p align="center">
  <img src="/logo.gif" height="300" />
</p>
<p align="center">
  Obsidian Chevereto 图片上传器
</p>
<p align="center">
  
  
  
  
</p>
## 国际化

[简体中文](README.md) | [English](README.en-US.md)

## 介绍

能够将剪贴板的图片在粘贴到Obsidian时上传至chevereto，并支持上传时调整图像大小。

## 新手入门

### 设置

1. Api Endpoint: Chevereto API链接, 示例：https://your_domain/api/1/upload
2. Chevereto API Token: Chevereto API令牌, 获取方法：https://your_domian/dashboard/settings/api
3. Enable Resize: 是否开启上传前大小调整
4. Max Width: 调整最大宽度，示例：4096

### 常见问题解答

当使用Ctrl+Shift+i打开Obsidian开发者控制台时，如果在上传时出现CORS跨域提示，解决方法是在nginx反向代理时开启CORS支持。

```nginx
...(省略)
    location / {
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
        add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
...(省略)
```

## 特别感谢

1. [gavvvr/obsidian-imgur-plugin](https://github.com/gavvvr/obsidian-imgur-plugin)
2. [create-obsidian-plugin](https://www.npmjs.com/package/create-obsidian-plugin)
3. [Creling/obsidian-image-uploader](https://github.com/Creling/obsidian-image-uploader)
4. [jordanhandy/obsidian-cloudinary-uploader](https://github.com/jordanhandy/obsidian-cloudinary-uploader)



