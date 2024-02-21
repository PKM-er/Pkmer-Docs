---
uid: 2024022117263880
title: Obsidian 插件：【Readme】Better Export PDF
tags: ['obsidian插件', 'readme']
description: 将您的笔记导出为PDF，支持导出预览，添加书签大纲和页眉/页脚。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Better Export PDF

> [!Note] 插件名片
> - 插件名称：Better Export PDF
> - 插件作者：l1xnan
> - 插件说明：将您的笔记导出为PDF，支持导出预览，添加书签大纲和页眉/页脚。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/l1xnan/obsidian-better-export-pdf)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?better-export-pdf)

## 概述

将您的笔记导出为PDF，支持导出预览，添加书签大纲和页眉/页脚。



> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/l1xnan/obsidian-better-export-pdf/master/README.md)
> 

---

## Readme(翻译）

下面是 [[better-export-pdf]] 插件的自述翻译

【机翻】
# Obsidian Better Export PDF

Better Export PDF 是一个 Obsidian PDF 导出增强插件，与官方的 PDF 导出功能相比，它增加了导出书签大纲、导出预览和添加页码到 PDF 的功能。
## 特点

与官方的导出PDF功能相比：

- 🚀支持导出预览
- 🎉导出大纲书签
- 🛩️自定义边距
- ✨导出页码
- 💥支持从正文添加PDF元数据;
- 🎇导出文件内部链接;
- ... ...
## 安装

当前插件尚未发布到官方插件商店，需要手动安装：

1. 从[最新版本](https://github.com/l1xnan/obsidian-better-export-pdf/releases)或其他版本中下载.zip文件。
2. 解压缩到：`{VaultFolder}/.obsidian/plugins/`
3. 重新加载Obsidian并启用插件。

或者使用[BRAT插件](https://obsidian.md/plugins?id=obsidian42-brat)。
## 用法

1. 在当前 Markdown 视图的右上角，点击“更多选项”，选择 `Better Export PDF`;
2. 打开命令面板，选择 `Better Export PDF: Export Current File to PDF`。

如果导出的 PDF 页面异常，尝试在外观中更改颜色将会切换到浅色。
### 设置

使用`Header Template`和`Footer Template`设置页面数字，例如：
```html
<div style="width: 100vw;font-size:10px;text-align:center;">
    <span class="pageNumber"></span> / <span class="totalPages"></span>
</div>
```
查看详情[`<webview>.printToPDF(options)`](https://www.electronjs.org/docs/latest/api/webview-tag#webviewprinttopdfoptions)。


如果您想进一步自定义PDF导出样式，可以在`Appearance > CSS Snippet`中添加自定义CSS，例如自定义字体和大小：

```css
@media print {
  body {
    font-size: 20px !important;
    font-family: "Times New Roman" !important;
  }
}
```
### 导出预览

![导出预览](https://cdn.pkmer.cn/covers/better-export-pdf_2_0.png!pkmer)
### 效果图片

![导出预览](https://cdn.pkmer.cn/covers/better-export-pdf_2_1.png!pkmer)
## 待办事项

- [ ] 自动将内部链接内容添加到脚注/附录;
- [ ] 支持pagedjs美化;
- [x] 支持打印预览;
- [ ] 将多个Markdown文件导出为一个PDF文件;
- [ ] 改进默认的`@media print` css样式;
- [x] 支持从正文中添加PDF元数据;
- [x] 导出文件内部链接;
## 支持这个插件

维护和持续添加功能需要大量工作。如果您想资助这个插件的持续开发，可以在这里进行：





