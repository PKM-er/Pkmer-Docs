---
uid: 20230803212934
title: Obsidian 插件：【Readme】Open File by Magic Date
tags: ['obsidian插件', 'readme']
description: 为你最重要的文件（例如：每日/每周/每月笔记）定义一个热键和Moment.js模式。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Open File by Magic Date

> [!Note] 插件名片
> - 插件名称：Open File by Magic Date
> - 插件作者：simplgy
> - 插件说明：为你最重要的文件（例如：每日/每周/每月笔记）定义一个热键和Moment.js模式。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/simplgy/obsidian-open-file-by-magic-date)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-open-file-by-magic-date)

## 概述

为你最重要的文件（例如：每日/每周/每月笔记）定义一个热键和Moment.js模式。

![Open File by Magic Date](https://cdn.pkmer.cn/covers/obsidian-open-file-by-magic-date.png!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/SimplGy/obsidian-open-file-by-magic-date/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-open-file-by-magic-date]] 插件的自述翻译



# Obsidian - 根据魔术日期打开文件

[Obsidian](https://obsidian.md)的插件

## 概述

允许您打开与灵活日期模式匹配的特定文件。

我使用它来打开日期为“最近的星期一”的笔记，但您也可以用它来打开任何带有日期标记的文件。

![屏幕截图](./magic-date-screenshot.png)

## 使用案例

- [x] 通过单个按键打开具有特定日期模式的文件，例如`{YYYY-MM-DD} foo.md`
- [x] 支持在这些模式中指定“最近的星期一”以满足每周笔记的需求。例如：通过单个按键打开`weekly notes/{mon: YYYY-MM-DD} week.md`
- [ ] 支持指定搜索查询，然后打开与查询匹配的第一个文件

## 安装

1. 打开设置 -> 第三方插件 -> 禁用安全模式
1. 点击“浏览社区插件” -> 搜索“Magic File Hotkey”
1. 安装它，然后点击“启用”

技术细节

关键代码片段在这里，其中输入文件模式由`moment.js`根据今天的日期或其他日期进行解析：

```js
// 将花括号中的任何内容"{mon:...}"发送到moment.format以获取上一个星期一的日期
// 例如：`Weekly Notes/{mon:YYYY-MM-DD} week.md`
str = str.replace(/{mon:(.*)}/g, (match, captured) => priorMonday.format(captured));

// 将花括号中的任何内容"{...}"发送到moment.format
// 例如：`Daily Notes/{YYYY-MM-DD}.md`
str = str.replace(/{(.*)}/g, (_match, captured) => now.format(captured));
```

开发中

### 构建

```
npm install
npm run dev
```

（用于自动刷新）安装 `git clone https://github.com/pjeby/hot-reload.git` 并启动它

### 待办事项

- [x] 修复：当您编辑路径时，快捷键无法正确重命名（需要重新启动Obsidian）
- [x] 修复：当您编辑路径时，快捷键无法正确保留（需要在重新启动后再次选择快捷键）
- [x] 检测文件是否存在，以帮助人们轻松检查语法。（[示例实现](https://github.com/SilentVoid13/Templater/commit/e4273b706465df012648b8a0163018f4925b5808)来自模板插件的file.exists）

### 发布

1. 在 `manifest.json` 和 `package.json` 中更新版本号。
2. 提交并推送。
3. 要放到 GitHub 上，执行以下标签操作：

（用新的版本号替换）

```
git tag -a 0.1.0 -m "0.1.0"
git push origin 0.1.0
```

> 这将触发 `.github/workflows/release.yml`。
> 
> 在[这里](https://github.com/SimplGy/obsidian-open-file-by-magic-date/actions)验证工作流是否正在运行。
> 在[这里](https://github.com/SimplGy/obsidian-open-file-by-magic-date/releases)验证发布情况。

4. （完成）只需发布 GitHub 版本并运行 release.yml，新版本的插件将在 Obsidian 市场上可用。不错！

感谢和致谢

最初从[Hotkeys for specific files](https://github.com/Vinzent03/obsidian-hotkeys-for-specific-files)进行了fork并学习。感谢[Vinzent03](https://github.com/Vinzent03)。

## 相似插件

* [主页](https://github.com/mirnovov/obsidian-homepage) - 在启动时打开特定的笔记
* [标记文件的快捷键](https://github.com/Vinzent03/obsidian-shortcuts-for-starred-files)
* [特定文件的快捷键](https://github.com/Vinzent03/obsidian-hotkeys-for-specific-files)



