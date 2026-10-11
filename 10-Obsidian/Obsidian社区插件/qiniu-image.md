---
uid: 1791709369384000
title: 'Obsidian 插件：Qiniu Image'
tags: ['图片与PDF', '第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
description: 'Upload pasted or dropped images to Qiniu object storage and insert the CDN link instead of a local attachment. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Qiniu Image

> [!Note] 插件名片
> - 插件名称：Qiniu Image
> - 插件作者：chenxuan
> - 插件说明：Upload pasted or dropped images to Qiniu object storage and insert the CDN link instead of a local attachment. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['图片与PDF', '第三方工具集成', '文件管理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/chenxuan520/obsidian-qiniuimage)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?qiniu-image)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/chenxuan520/obsidian-qiniuimage/master/README.md)



## 概述

**主要功能**：该插件允许用户在 Obsidian 中粘贴或拖入图片时，自动将其上传至七牛云对象存储，并在笔记中插入 CDN 链接，替代本地附件存储。

**适用场景**：适用于希望保持笔记库轻量化、避免本地存储大量图片占用空间，或需要跨设备同步且图片可在线访问的用户。

**核心特色**：
1. **无缝体验**：支持粘贴和拖入两种操作，上传期间显示占位文字，完成后自动替换为链接。
2. **高可靠性**：上传失败时自动回退至 Obsidian 默认行为（存本地），确保图片不丢失。
3. **灵活配置**：支持直连七牛或通过自建 `qiniuserver` 转发；提供丰富的文件名模板（时间戳、随机串等）及 CDN 域名绑定，支持图片处理后缀。

**使用建议**：
1. 前往七牛云控制台获取 Access Key、Secret Key、Bucket 及 Region 信息。
2. 在插件设置中填入上述参数，并绑定 CDN 域名。
3. 务必点击“Run test”验证配置是否正确。
4. 若使用私有云或代理，需配置 Custom upload host；若需更高级控制，可部署 `qiniuserver` 并选择转发模式。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


