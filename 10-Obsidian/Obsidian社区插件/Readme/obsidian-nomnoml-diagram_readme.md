---
uid: 20231220115812
title: Obsidian 插件：【Readme】Nomnoml Diagram
tags: ['图表生成', 'obsidian插件', 'readme']
description: 在Obsidian笔记中绘制nomnoml图表
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Nomnoml Diagram

> [!Note] 插件名片
> - 插件名称：Nomnoml Diagram
> - 插件作者：Daeik Kim
> - 插件说明：在 Obsidian 笔记中绘制 nomnoml 图表
> - 插件分类：[' 图表生成 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/Daeik/obsidian-nomnoml-diagram)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-nomnoml-diagram)

## 概述

在 Obsidian 笔记中绘制 nomnoml 图表

![Nomnoml Diagram](https://cdn.pkmer.cn/covers/obsidian-nomnoml-diagram.gif)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Daeik/obsidian-nomnoml-diagram/main/README.md)

---

## Readme(翻译）

下面是 [[obsidian-nomnoml-diagram]] 插件的自述翻译

## Obsidian nomnoml Diagram

![nomnoml图表示例](https://cdn.pkmer.cn/covers/obsidian-nomnoml-diagram_1_0.gif)

这个 [Obsidian](https://obsidian.md/) 插件允许你在 Obsidian 笔记中绘制 [nomnoml](https://www.nomnoml.com/) 图表。

绘制 nomnoml 图表

要在笔记中绘制 nomnoml 图表，您可以使用带有 `nomnoml` 关键字的围栏代码块语法。 （或使用 *[Nomnoml Diagram: New Diagram]* 命令插入自动生成的围栏代码块）

    ```nomnoml
    [Example] -> [Diagram]
    ```

nomnoml 指令也支持根据图表设置图表样式。

（可以在 *[Plugin Options > Nomnoml Diagram]* 中设置默认指令设置。）

    ```nomnoml
    #background: #000000
    #arrowSize: 0.5

    [Example] -> [Diagram]
    ```

请查看 nomnoml 的 [官方网站](https://www.nomnoml.com/) 和 [GitHub存储库](https://github.com/skanaar/nomnoml) 以获取完整的语法参考和更多示例！

## 注意事项

- 所有的图表都以 SVG（可缩放矢量图形）格式生成。
- Obsidian 默认的“导出为 PDF”功能包括生成的 SVG 图表（每个文本节点都可以在 PDF 中进行注释！）。
- 使用 *[Nomnoml Diagram: New Diagram]* 命令（通过 [热键](https://help.obsidian.md/How+to/Use+hotkeys) 或 [`/`斜杠命令（`v0.12.17+`）](https://forum.obsidian.md/t/obsidian-release-v0-12-17/25270)）将更容易插入新的图表。

## 兼容性

- 支持 Obsidian 桌面版和移动版
- 经过 Obsidian `v0.12.15+` 版本测试

## 许可证

[MIT](./LICENSE)
