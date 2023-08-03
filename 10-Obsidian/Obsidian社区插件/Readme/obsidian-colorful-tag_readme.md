---
uid: 2023080322161315
title: Obsidian 插件：【Readme】Colorful Tag
tags: ['界面相关', '效率', '美化', 'obsidian插件', 'readme']
description: 你可以轻松地为标签添加前缀或后缀图标/符号，也可以更改标签的背景或文本颜色，边框样式
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Colorful Tag

> [!Note] 插件名片
> - 插件名称：Colorful Tag
> - 插件作者：RieN7
> - 插件说明：你可以轻松地为标签添加前缀或后缀图标/符号，也可以更改标签的背景或文本颜色，边框样式
> - 插件分类：['界面相关', '效率', '美化', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/rien7/obsidian-colorful-tag)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-colorful-tag)

## 概述

你可以轻松地为标签添加前缀或后缀图标/符号，也可以更改标签的背景或文本颜色，边框样式

![Colorful Tag](https://cdn.pkmer.cn/covers/obsidian-colorful-tag.PNG!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/rien7/obsidian-colorful-tag/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-colorful-tag]] 插件的自述翻译


# 多彩标签

![](./assets/setting.png)

让你的标签更加**美丽**和**强大**！

## 特点

- 添加多个设置来自定义标签样式
- 全局设置适用于所有标签
- 通过拖放重新排序标签设置
- 每个标签的标签详细信息
- 为标签详细信息添加默认值
- 为每个标签添加阴影文本

您可以在标签详细信息的默认值中使用`{{DATE}}`，它将被当前日期替换。

所有支持的变量包括：
- `{{DATE}}`
- `{{TIME}}`
- `{{DATETIME}}`
- `{{TAG}}`
- `{{FILE}}`
- `{{PATH}}`

如何安装

### 社区插件
您可以从Obsidian的社区插件页面安装此插件。

在社区插件页面中搜索“Colorful Tag”，或点击[这里](https://obsidian.md/plugins?search=colorful%20tag#)。

您现在可以通过[BRAT](https://github.com/TfTHacker/obsidian42-brat)安装此插件。

这是此插件的存储库：`rien7/obsidian-colorful-tag`

使用方法

### 全局设置

您可以使用全局设置来更改所有标签的默认设置。

**但是**它将被每个标签的设置**覆盖**。

### 按标签设置

您可以使用按标签设置来更改特定标签的设置。

设置列表：
- `前缀`
- `后缀`
- `半径`
- `背景颜色`
- `文本颜色`
- `文本大小`
- `边框`：更改标签的边框。使用有效的CSS值，如`none`，`1px solid #fff`，`1px solid rgb(255, 255, 255)`，`1px solid hsl(0, 0%, 100%)`...
- `字体粗细`：更改标签的字体粗细。
- `嵌套标签`：将设置应用于嵌套标签。
- `移除井号`：移除标签中的井号（“#”）。
- `移除标签名称`：移除标签中的标签名称。

### 标签详情（测试版）

您可以使用标签详情来添加更多信息到标签中。

您需要在“常规”设置中**启用**它。然后在每个标签的设置中添加键。之后，在编辑模式下将鼠标悬停在相应的标签上以修改详情。

### 阴影文本（测试版）

您可以使用阴影文本为标签添加阴影文本。

您需要在“标签详细设置”中设置模板。注意：模板必须包含`{{TAG}}`。

例如，您有一个名为`TODO`的标签，其详细信息如下：

```yaml
colorful-tag:
    - color: red
      priority: ⭐⭐
      text: colorful tag
```

然后，您将`[{{priority}}] {{TAG}} {{text}}`设置为模板，标签将呈现为`[⭐⭐] #TODO colorful tag`。

## 路线图

- 添加文本阴影功能
- 新增页面以查询标签和标签详情
- 在标签详情中链接到另一个笔记/标签
- 调整和移动弹出窗口

## 灵感来源

- [Shimmering Focus ⟡](https://github.com/chrisgrieser/shimmering-focus)：一个面向以键盘为中心的用户的极简主义和有主见的 Obsidian 主题。
- [Supercharged Links](https://github.com/mdelobelle/obsidian_supercharged_links)：为内部链接添加目标笔记的前置属性值。

支持我

您的支持将是我改进Colorful Tag的动力。如果您喜欢这个插件，请考虑给我买杯咖啡。谢谢！
    
[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/rien7)



