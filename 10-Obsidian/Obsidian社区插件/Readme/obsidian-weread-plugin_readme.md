---
uid: 2023080322293012
title: Obsidian 插件：Weread Plugin
tags: ['第三方工具集成', '编辑工具', '信息收集', 'obsidian插件', 'readme']
description: 可以让你的 Obsidian 和微信阅读联动，获取相关阅读标注，笔记信息。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Weread Plugin

> [!Note] 插件名片
> - 插件名称：Weread Plugin
> - 插件作者：hank zhao
> - 插件说明：可以让你的 Obsidian 和微信阅读联动，获取相关阅读标注，笔记信息。
> - 插件分类：[' 第三方工具集成 ', ' 编辑工具 ', ' 信息收集 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/zhaohongxuan/obsidian-weread-plugin)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-weread-plugin)

## 概述

可以让你的 Obsidian 和微信阅读联动，获取相关阅读标注，笔记信息。

![Weread Plugin](https://cdn.pkmer.cn/covers/obsidian-weread-plugin.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/zhaohongxuan/obsidian-weread-plugin/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-weread-plugin]] 插件的自述翻译

# Obsidian 微信读书插件

[![](https://github.com/zhaohongxuan/obsidian-weread-plugin/actions/workflows/CI.yml/badge.svg)](https://github.com/zhaohongxuan/obsidian-weread-plugin/actions/workflows/CI.yml)

[![发布Obsidian插件](https://github.com/zhaohongxuan/obsidian-weread-plugin/actions/workflows/release.yml/badge.svg)](https://github.com/zhaohongxuan/obsidian-weread-plugin/actions/workflows/release.yml)

[![GitHub许可证](https://badgen.net/github/license/Naereen/Strapdown.js)](https://github.com/zhaohongxuan/obsidian-weread-plugin/blob/main/LICENSE)

[![Github所有版本下载量](https://img.shields.io/github/downloads/zhaohongxuan/obsidian-weread-plugin/total.svg)](https://GitHub.com/zhaohongxuan/obsidian-weread-plugin/releases/)

[![GitLab最新版本发布](https://badgen.net/github/release/zhaohongxuan/obsidian-weread-plugin/)](https://github.com/zhaohongxuan/obsidian-weread-plugin/releases)

Obsidian 微信读书插件是一个社区插件，用来同步微信读书中书籍的 `元信息`、`高亮标注`、`划线感想`、`书评` 等，并将这些信息转换为 markdown 格式保存到 Obsidian 的文件夹中。初次使用时，如果笔记数量较多，更新可能会比较慢，但后续更新时只会更新 `划线数量` 或者 `笔记数量` 有变化的书籍，一般速度很快。

## 功能

- Synchronize book metadata, such as book cover, author, publisher, ISBN, publication date, etc.
- Synchronize highlights and underlines from WeChat Reading.
- Reading notes are divided into "underlining notes," "page notes," "chapter notes," and "book reviews."
- Support WeChat QR code login, theoretically can stay online for a long time like a browser.
- Automatically refresh the validity period of the cookie by verifying the cookie.
- Customize the note generation template.
- Support multiple formats for file names.
- Customize FrontMatter, you can add your own fields in the header YAML file, such as tags, reading status, etc.
- Synchronize underlines and notes from public accounts.
- Support mobile synchronization, can be used on mobile phones and tablets with this plugin.
- Support Daily Notes, synchronize daily reading notes to Daily Notes, already supported in [0.4.0](https://github.com/zhaohongxuan/obsidian-weread-plugin/releases/tag/0.4.0).
- Synchronize popular underlines to notes (TBD).

## 安装方法

插件市场直接搜索 `weread`，找到 `Weread Plugin` 点击 `install` 安装，安装完成后点击 `Enable` 使插件启用。

<img width="1872" alt="image" src="https://user-images.githubusercontent.com/8613196/177021391-60000ee5-a2ef-4391-98d6-875e63de8180.png">

## 设置

1. Open Obsidian and click on "Settings" to enter the settings interface. Find "Obsidian Weread Plugin" and enter the plugin settings page.
2. Click on the "Login" button on the right side and scan the QR code on the pop-up login page to log in. After logging in, your nickname will be displayed.
3. Logging out will clear the cookie information of the Obsidian plugin. To log out, click on the avatar in the upper right corner and click on "Log out", just like on the web version of WeChat Reading.
4. Set the note saving location, minimum underline count for notes, and note folder classification.

## 使用

⚠️ 本插件是覆盖式更新，请不要在同步的文件里修改内容，写 `永久笔记`（为什么写永久笔记参考 [《卡片笔记写作法》](https://book.douban.com/subject/35503571/)）的时候可以使用 [Block引用](https://help.obsidian.md/How+to/Link+to+blocks) 的方式，在外部引用进行批注。

### 基础使用

1. Click on the WeChat Reading button on the left Ribbon, or use command+P (Windows: ctrl+P) to bring up the Command Palette and enter "Weread" to find "Sync Weread command" for synchronization.
![sync|50](https://cdn.jsdelivr.net/gh/zhaohongxuan/picgo@master/20220522222015.png)
2. Default template effect (theme: minimal) ![](https://cdn.jsdelivr.net/gh/zhaohongxuan/picgo@master/20220522221449.png)
Using dataview+minimal cards display effect, [refer here](https://github.com/zhaohongxuan/obsidian-weread-plugin/wiki/%E4%BD%BF%E7%94%A8Dataview%E8%BF%9B%E8%A1%8C%E4%B9%A6%E7%B1%8D%E7%AE%A1%E7%90%86):
![](https://cdn.jsdelivr.net/gh/zhaohongxuan/picgo@master/20220529135016.png)

### 同步笔记到 Daily Notes

1. Open the switch to sync to Daily Notes in the settings, and then set the directory and file format for Daily Notes separately.
2. If Daily Note is managed by Periodic Notes, you can change it to the format of Periodic Notes. For example, the format I use is `YYYY/[W]ww/YYYY-MM-DD`, which will search for Daily Notes in the folder based on the dimensions of year/week/day.
3. Set the specific interval to insert in Daily Notes. You can modify the default value to the markdown format content you want, such as inserting between `two headings`. Note that 📢 the content within the interval will be overwritten, so do not modify the text within the interval.

## Known Issues

- The plugin's cookie may expire if not used for a long time, requiring re-login.
- Occasionally, there may be network connection issues. Simply click on sync again, and the synchronized notes will not be updated again.

## TODO

- [x] Solve the CORS issue in Obsidian
- [x] Set the note saving path in the interface
- [x] Optimize the file synchronization logic, no need to delete and rebuild every time, can be determined based on the number of notes
- [x] Passively refresh the Cookie to extend its validity period
- [x] Fix the issue of Cookie becoming invalid due to multiple logins
- [x] Automatically obtain Cookie by popping up the QR code login box
- [x] Synchronization failure due to duplicate book names
- [x] Support setting Template format in the settings page
- [x] File name template
- [x] Adaptation for mobile devices
- [ ] Export popular underlines <https://github.com/zhaohongxuan/obsidian-weread-plugin/issues/42>
- [ ] Optimize the directory selection in the settings page <https://github.com/zhaohongxuan/obsidian-weread-plugin/issues/39>

[微信读书 API](./docs/weread-api.md)

## 星星历史

[![星星历史图表](https://api.star-history.com/svg?repos=zhaohongxuan/obsidian-weread-plugin&type=Date)](https://star-history.com/#zhaohongxuan/obsidian-weread-plugin&Date)

免责声明

## 感谢

- [wereader](https://github.com/arry-lee/wereader)
- [Kindle Plugin](https://github.com/hadynz/obsidian-kindle-plugin)
- [Hypothesis Plugin](https://github.com/weichenw/obsidian-hypothesis-plugin)
- [Obsidian Plugin Developer Docs](https://marcus.se.net/obsidian-plugin-docs/)
- [http proxy middleware](https://github.com/chimurai/http-proxy-middleware)
- [nunjucks](https://github.com/mozilla/nunjucks)



