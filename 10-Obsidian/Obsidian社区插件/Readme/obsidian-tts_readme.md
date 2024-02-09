---
uid: 2023120719443596
title: Obsidian 插件：【Readme】Text to Speech
tags: ['效率', '第三方工具集成', '转换工具', 'obsidian插件', 'readme']
description: Obsidian 的语音合成功能。听取您的笔记。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Text to Speech

> [!Note] 插件名片
> - 插件名称：Text to Speech
> - 插件作者：Johannes Theiner
> - 插件说明：Obsidian 的语音合成功能。听取您的笔记。
> - 插件分类：[' 效率 ', ' 第三方工具集成 ', ' 转换工具 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/joethei/obsidian-tts)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-tts)

## 概述

Obsidian 的语音合成功能。听取您的笔记。

![Text to Speech](https://cdn.pkmer.cn/covers/obsidian-tts.PNG!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/joethei/obsidian-tts/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-tts]] 插件的自述翻译

# 🗣️文本转语音

[Obsidian](https://obsidian.md) 的插件

![Maintenance](https://shields.joethei.xyz/maintenance/yes/2023)
![GitHub manifest.json dynamic (path)](https://shields.joethei.xyz/github/manifest-json/minAppVersion/joethei/obsidian-tts?label=lowest%20supported%20app%20version)
[![libera manifesto](https://shields.joethei.xyz/badge/libera-manifesto-lightgrey.svg)](https://liberamanifesto.com)
---

功能：

- 从状态栏和工具栏开始播放笔记
- 仅在编辑模式下朗读所选文本：
  ![Selection Demo](https://cdn.pkmer.cn/covers/obsidian-tts_1_3.png!pkmer)
- 可与其他插件一起使用（目前包括 [RSS Reader](https://github.com/joethei/obsidian-rss)）

您可以创建特定语言的语音，

插件将尝试识别所使用的语言。

如果识别不正确，您可以覆盖此行为

通过在 [Frontmatter](https://help.obsidian.md/Advanced+topics/YAML+front+matter) 中添加

`lang: {languageCode}`。语言代码可以在

设置中查看，是一个两个字母的 [ISO 639-1](https://www.loc.gov/standards/iso639-2/php/English_list.php) 代码。

由于 [Webview中的此错误](https://bugs.chromium.org/p/chromium/issues/detail?id=487255)，此插件**无法**在 Android 上工作。

添加语言

该插件使用操作系统的本机 API，要添加新的语言，请根据文档进行相应操作：

- [Windows 10](https://support.microsoft.com/en-us/topic/how-to-download-text-to-speech-languages-for-windows-10-d5a6b612-b3ae-423f-afa5-4f6caf1ec5d3)
- [MacOS](https://support.apple.com/guide/mac-help/change-the-system-language-mh26684/mac)
- [iOS](https://support.apple.com/guide/iphone/change-the-language-and-region-iphce20717a3/ios)

<!--- [Android](https://support.google.com/accessibility/android/answer/6006983?hl=en)--->

## 安装插件

- `设置 > 第三方插件 > 社区插件 > 浏览`，搜索 `Text to Speech`
- 使用 [Beta Reviewers Auto-update Tester](https://github.com/TfTHacker/obsidian42-brat) 插件与仓库路径
  `joethei/obsidian-tts`
- 将发布版本中的 `main.js`、`styles.css`、`manifest.json` 复制到你的
  vault `VaultFolder/.obsidian/plugins/obsidian-tts/`。

## API

您可以使用此插件的 API 将文本转语音功能添加到您的插件中。

这使用了 [@vanakat/plugin-api](https://www.npmjs.com/package/@vanakat/plugin-api) 包。

您可以在这里找到 API 文档：[API文档](https://joethei.github.io/obsidian-tts/interfaces/TTSService.html)

```js
const tts = pluginApi('tts');
await tts.say(title, text, language);//language是可选的，使用ISO 639-1代码
tts.pause();
tts.resume();
tts.stop();
tts.isSpeaking();
tts.isPaused();
```