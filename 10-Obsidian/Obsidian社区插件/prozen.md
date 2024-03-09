---
uid: 20240309140455
title: prozen 禅模式启动
tags: [obsidian, plugins, 禅模式]
description: 
author: Huajin
type: other
draft: false
editable: false
modified: 
---

# prozen 禅模式启动

> [!Note] 插件名片
> - 插件名称：ProZen
> - 插件作者：Moskvitin
> - 插件说明：进入禅模式，专注于写作。该插件将当前标签扩展到全屏，除内容外删除一切。
> - 项目地址：[点我访问](https://github.com/cmoskvitin/obsidian-prozen)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-prozen)

该插件可以在启动时隐藏掉除了你要键入的内容以外其他内容，让你不受干扰。包括各个图标、面板、滚动条等。

![prozen](https://cdn.pkmer.cn/covers/obsidian-prozen_1_0.gif)

## 插件设置

> [!note] 关灯
> 你可以设置屏幕的两侧变暗，将注意力集中在中间的文本上。
> - **不透明度**：使变暗效果更柔和或更深。0 表示关闭。
> - **缩放**：确定屏幕空间的多少被变暗。

> [!note] 启动动画：
> 你还可以为禅模式启动增加启动动画，也就是上面 gif 的效果。在设置中设置**淡入持续时间**即可。默认为两秒，0 表示关闭动画。

> [!note] 一个按钮
> 该插件还有一个用于显示/隐藏视图元素的各种切换按钮：
>
> - 滚动条
> - 头部
> - 图形视图中的图形控制按钮

> [!note] 强制内容居中（左右居中）
> 在 Obsidian 的设置中，有一个名为“缩减栏宽”的切换按钮。当它关闭时，文本内容将占据整个页面的宽度。而“强制内容居中”会使文本在禅模式下居中显示，忽略这个全局设置。

## 已知问题

- 使用 `Ctrl-Tab` 循环浏览窗格或使用 `Ctrl-G` 切换到图形视图时，Zen 模式的样式会关闭所有选项卡，但仍然保持在最初触发 Zen 模式的选项卡上。在未来的某个版本中，我希望能够在保持 Zen 模式的同时跳转到选项卡。