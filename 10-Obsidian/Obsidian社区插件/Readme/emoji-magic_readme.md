---
uid: 2023080322174753
title: Obsidian 插件：Emoji Magic
tags: ['obsidian插件', 'readme']
description: 轻松添加表情符号，使用强大的关键字搜索。🔮 ✨ 🐇
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Emoji Magic

> [!Note] 插件名片
> - 插件名称：Emoji Magic
> - 插件作者：simplgy
> - 插件说明：轻松添加表情符号，使用强大的关键字搜索。🔮 ✨ 🐇
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/SimplGy/obsidian-emoji-magic)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?emoji-magic)

## 概述

轻松添加表情符号，使用强大的关键字搜索。🔮 ✨ 🐇

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/SimplGy/obsidian-emoji-magic/main/README.md)

---

## Readme(翻译）

下面是 [[emoji-magic]] 插件的自述翻译

这个插件可以通过增强的关键字搜索功能，让你更轻松地在 Obsidian 笔记中添加表情符号。

它拥有一个庞大的关键字词典，因此你可以找到其他情况下找不到的表情符号：

* 像 "car" 这样的广义词 -> `🚓🚋🚔🏎️🚐🚕🚖`
* 像 "orange" 这样的颜色 -> `📙🧡🍊🥕🚼`

动态截图：

![gif in action](./screenshots/emoji-magic-obsidian-2.gif?raw=true)

静态截图：

![screenshot](./screenshots/emoji-magic-blue.png?raw=true)

## 特点

1. 安全 - 仅本地使用，无需互联网
2. 丰富的关键字搜索 - 该词典包含 `1,812` 个表情符号，具有 `199,658` 个可搜索的关键字和同义词条目。
3. 快速 - 只需使用键盘快捷键和点击即可
4. 键盘友好 - 箭头键，制表符，您想要的任何方式。

> 注意：这是我编写的 [Emoji Magic](https://github.com/SimplGy/emoji-magic) Chrome 扩展的 [Obsidian](https://obsidian.md/) 兼容分支。

## 安装这个插件

1. 打开设置。（如果你还没有，第一次：第三方插件 -> 禁用安全模式）
2. 点击“浏览社区插件” -> 搜索“Magic File Hotkey”
3. 安装它，然后点击“启用”
4. 添加一个热键。我喜欢使用 `cmd + shift + e`（“e”代表“表情符号”）。

## 指导原则

> 目标和非目标

* 易于查找
  * 努力包含尽可能多的可能匹配项
  * 例如：颜色“绿色”或感觉“快乐”
* 键盘友好
  * 例如：`键盘快捷键` -> `搜索短语` -> `回车` 完成
  * 因为这个插件显示了一个二维网格的表情符号，所以支持使用二维箭头键进行导航
* 实际的表情符号，没有图片
  * 这意味着：没有自定义表情符号
  * 也意味着：将呈现适合平台的版本。您看到的视觉效果可能因您查看文件的位置而有所不同
  * 也意味着：您可能会看到一些空的方块，表示您的设备不支持但已定义的表情符号（例如：🦩“火烈鸟”在旧版 Mac 上不会显示）

## 相似的 Obsidian 插件

> 也可以称为：“为什么我需要构建这个插件？”

* [Emoji Shortcodes](https://github.com/phibr0/obsidian-emoji-shortcodes)
  * 优秀的插件，似乎工作得很好，但我更喜欢使用弹出式搜索面板，而不是使用 `:smile:` 这种语法
* [Emoji Toolbar](https://github.com/oliveryh/obsidian-emoji-toolbar)
  * 目前最受欢迎的 Obsidian “emoji” 插件
  * 使用图像而不是文本表情符号本身。这意味着在选择器中某些表情符号的外观可能与实际插入文件时不同。有一个可能相关的设置，但我无法使其工作。（更新：在 [v0.4.0](https://github.com/oliveryh/obsidian-emoji-toolbar/releases/tag/0.4.0) 中似乎已修复）
  * 对我来说开始出现问题（可能只是“实时预览”中的错误）。会在文件开头插入表情符号，而不是在光标所在位置插入。（更新：在 [v0.4.0](https://github.com/oliveryh/obsidian-emoji-toolbar/releases/tag/0.4.0) 或更早版本中似乎已修复）

开发这个插件

建筑物

# npm install

npm run dev

```

（用于自动刷新）安装 `git clone https://github.com/pjeby/hot-reload.git` 并启用它

### （一次性）从开发环境创建到Obsidian插件目录的符号链接

右键单击Obsidian插件文件夹，选择“在文件夹中新建终端”。然后执行以下命令：

```

ln -s /Users/eric/Projects/obsidian-emoji-magic obsidian-emoji-magic

```

### （很少）与上游项目同步

```

rm -rf lib/emoji-magic

git clone <https://github.com/SimplGy/emoji-magic.git> lib/emoji-magic

```

### 发布

1. 仅更新`package.json`中的版本号
2. 运行`npm run version`

> 这将触发`.github/workflows/release.yml`。
> 
> 在[这里](https://github.com/SimplGy/obsidian-emoji-magic/actions)验证工作流是否正在运行。
> 在[这里](https://github.com/SimplGy/obsidian-emoji-magic/releases)验证发布情况。

（完成）只需发布到GitHub并运行release.yml，新版本的插件将在Obsidian市场上可用。很好！

## 待办事项
欢迎提交PR。

- [x] 将所需的字符数从3更改为2以查看搜索结果，并在初始输入时清空默认值，以免看起来像是有错误。
- [ ] 提高启动时间 - 2023年3月18日：我看了一下，但没有看到明显的问题。我认为我必须找到一种延迟解析大型`emojilib_thesaurus.js`文件的方法。据我所知，启动时没有实际的处理过程，只是JS解析时间拖延了一些事情。
- [ ] 解决`zwj`问题（例如："plane"）
- [ ] （上游）改进一些排名（car, plane）
- [ ] （上游）修复缺乏"stemming"问题（例如："race car"）
- [ ] （上游）使无头部分更易于重用。

## 未来
- [ ] 考虑使用Obsidian的原生[SuggestModal](https://marcus.se.net/obsidian-plugin-docs/reference/typescript/classes/SuggestModal)或[FuzzySuggestModal](https://marcus.se.net/obsidian-plugin-docs/reference/typescript/classes/FuzzySuggestModal) -- https://marcus.se.net/obsidian-plugin-docs/user-interface/modals -- 我以为这不能与网格界面一起使用，但是这里有[先例](https://github.com/oliveryh/obsidian-emoji-toolbar/commit/1b8f7624f575cb183271a3d969ee5939c4763f8a)。

## 贡献

欢迎贡献。请参阅 CONTRIBUTING.md。

免责声明

这不是一个官方支持的谷歌产品。



