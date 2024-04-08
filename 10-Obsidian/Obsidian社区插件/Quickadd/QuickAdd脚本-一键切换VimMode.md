---
uid: 20240221011001
title: QuickAdd 脚本 - 一键切换 VimMode
tags: [Vim相关, quickadd脚本]
description: 通过Quickadd脚本设置快捷键便捷切换Vim模式，无需插件
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240221011051
---

# QuickAdd 脚本 - 一键切换 VimMode

如何便捷的切换 Vim Mode，而不是返回 Obsidian 的设置界面切换，在插件市场有 Vim Toggle 插件 (作者：Conner Ohnesorge)，可以控制 Vim 模式的开关，不过这需要额外安装一个插件，在中文论坛看到了这篇 [使用User Plugins插件实现Vim Mode的命令/快捷键切换 - 经验分享 - Obsidian 中文论坛](https://forum-zh.obsidian.md/t/topic/29676)，直接用 JS 脚本来控制，这里采用他的代码，直接用 QuickAdd 插件设置脚本就可以了。

> PS：Quikadd 插件算是必装的一个插件了，而不是为了切换 Vim Mode 而单独安装的，如果不想安装 Quikadd，那就采用 Vim Toggle 插件吧。

## 配置 QuickAdd 的 Capture

### 第一步：添加 VimToggle Capture 选项

![2024-02-20_QuickAdd脚本-一键切换VimMode_IMG-1](https://cdn.pkmer.cn/images/202402210110774.png!pkmer)

### 第二步：配置 VimToggle Capture

![2024-02-20_QuickAdd脚本-一键切换VimMode_IMG-2](https://cdn.pkmer.cn/images/202402210110775.png!pkmer)

> [!tip] 防止报错：
> 上述配置会导致当文档不出编辑或者无法正常插入文本时会报错，可以采用下述配置，@PlayerMiller
> ![2024-02-20_QuickAdd脚本-一键切换VimMode_IMG-3](https://cdn.pkmer.cn/images/202403232103958.png!pkmer)

````md
```js quickadd
if (app.vault.getConfig("vimMode")) {
	app.vault.setConfig("vimMode", false);
	new Notice("🔴已关闭Vim模式");
} else {
	app.vault.setConfig("vimMode", true);
	new Notice("🟢已启动Vim模式");
}
```
````

### 第三步：配置 VimToggle 快捷键

配置快捷键需要把 Quickadd 中勾选⚡的符号来注册快捷键，然后在 Obsidian 设置中配置快捷键：

![2024-02-20_QuickAdd脚本-一键切换VimMode_IMG-3](https://cdn.pkmer.cn/images/202402210110776.png!pkmer)

## Reference

- [使用User Plugins插件实现Vim Mode的命令/快捷键切换 - 经验分享 - Obsidian 中文论坛](https://forum-zh.obsidian.md/t/topic/29676)