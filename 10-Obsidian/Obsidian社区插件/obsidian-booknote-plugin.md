---
uid: 20230329145808
title: Obsidian 插件：Obsidian Banners 为你的笔记添加头图
description: 
tags: 
author: OS
type: other
draft: false
editable: false
modified: 20230429181108
public: yes
---

# Obsidian 插件：Obsidian Banners 为你的笔记添加头图

## 概述

为你笔记添加头图，以及和头图相关的一系列装饰元素。

> [!Note] 插件名片
>
> - 插件名称：Banners
> - 插件作者：noatpad
> - 插件说明：在 Obsidian 的预览模式下创建包含多列内容的 Markdown 文档。
> - 插件项目地址：[点我跳转](https://github.com/noatpad/obsidian-banners)

## 效果

![banners](https://cdn.pkmer.cn/images/327fce9e5662b114dfdb022a4937b8b9_MD5.gif)

## 使用

### 创建 Banners

- 在打开的笔记中，您可以使用 命令面板搜索并选择
    Add/Change banner with local image 命令选择本地图像作为笔记的头图；
- 或者您可以选择“**Paste banner from clipboard**”命令，将复制图像 URL 粘体为头图图像。
- 还可以拖动横幅图像以重新定位图像，以及使用“锁定/解锁横幅位置”命令将横幅的位置“锁定”到位，反之亦然。

以上方法插件会自动帮你写入 YAML 语法到你笔记的 Frontmatter 区域。

### 设置

这个插件使用 YAML 语法，在笔记的 Frontmatter/元数据 区域来存储关于头图的信息。

因此，也可以手动输入或使用其他插件输入。

到目前为止，您可以使用以下字段（使用默认的 frontmatter 字段前缀）：

````语法
#头图图像的源路径可以是URL或图像的内部链接。
#注意：请确保它用引号括起来，以避免分析错误，例如“![[file]]”
banner: string

# 头图的中心位置，number 在0-1之间的整数
banner_x: number
banner_y: number

# 头图是否锁定位置，不允许拖动更改聚焦的位置，比如你是一张海报，想定位到具体位置
banner_lock: boolean

# 横幅图标。string 可以是表情符号或任何字符串
banner_icon: string
```
````

### 样式

- **height**：头图高度，指定每个头图图像应该有多高。
- **style**：更改头图在笔记中的外观。目前有 2 个选项： - Solid：简单、轮廓清晰的头图图像。 - Gradient：一个渐变为透明的头图。
    ![Pasted image 20230310121511](https://cdn.pkmer.cn/images/eed105d4b9e597fbb2c044729d2ccae6_MD5.png)

- Frontmatter：如果已设置，可使用自定义的 Frontmatter 字段用于头图设置。例如，默认值 banner 将使用字段 banner_x、banner_y ，他们决定头图聚焦的具体位置。
- 头图拖动：拖动头图的位置，也会自动修改头图的坐标值（banner_x、banner_y ）。拖动头图需要按住 Shift 拖动，才能移动它。这有助于避免意外的头图移动。
- Banner Icons：可以通过此参数项，为 banner 增加 icon，一般接受标准的 emoji 做为 icon。
    - **Horizontal alignment**：水平对齐，在头图边界内水平对齐图标。如果设置为“自定义”，则可以输入相对于头图左边界的自定义偏移距离。输入可以是任何有效的 CSS 长度值。
    - **Vertical alignment**：垂直对齐，将 icon 相对于头图的底部边缘垂直对齐。如果设置为“自定义”，也可以输入相对于头图下边缘中心的自定义偏移（如果有）。输入可以是任何有效的 CSS 长度值。
    - **Use Twemoji**：如果设置了，它将使用 Twemoji（Twitter 的表情符号集），而不是您设备上的常用表情符号。默认情况下，此选项处于启用状态，因为使用此选项可以更好地支持表情符号。


> [!WARNING]
> 此选项会导致一个问题，参见 [[为什么 Obsidian 的头图 或者 banners 插件显示异常]]

### 高级样式

- **Show banner in internal embed**:：选择头图是否应显示在文件的内联内部嵌入中。
- **Preview internal banner height**：如果启用“在内部嵌入中显示头图”，此设置将确定嵌入中横幅图像的高度。
    ![Pasted image 20230310122215](https://cdn.pkmer.cn/images/9a6192ee7983f75c5fa2711da0a6e1ef_MD5.png)
