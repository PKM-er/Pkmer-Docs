---
uid: 20240730205546
title: Obsidian 插件：virtual-linker，也许是 Obsidian 双链最强辅助
tags: [双链, 内链, 社区插件]
description: 提供了类似思源笔记虚拟引用的功能，自动为笔记中的文本生成虚拟链接
author: calmwaves
type: awesome
draft: false
editable: false
modified: 20240803173419
---

# Obsidian 插件：virtual-linker，也许是 Obsidian 双链最强辅助

Virtual Linker 是一款 Obsidian 插件，提供了类似思源笔记虚拟引用的功能，能够自动为笔记中的文本生成虚拟链接，这些链接与保管库中其他笔记的标题或别名匹配。

> [!Note] 插件名片
> - 插件名称：Virtual Linker / Glossary
> - 插件作者：Valentin Schröter
> - 插件说明：自动为笔记中的文本生成虚拟链接
> - 插件分类：['obsidian 插件 ', ' 双链 ']
> - 项目地址：[点我访问](https://github.com/vschroeter/obsidian-virtual-linker)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?virtual-linker)

插件会自动探测潜在链接，当笔记正文中包含的与其他笔记名或别名匹配的文本时，这些潜在链接将自动以特殊格式显示，这种直观的视觉提示，让你能够迅速识别笔记之间的联系，从而更加高效地管理和组织你的知识库。

除了能够突出显示外，插件还会建立虚拟链接，能够点击跳转到链接的文件，也支持悬浮预览。虚拟链接不会出现在图谱视图和引用计数中，但可以在右键中将虚拟链接转换为真实链接。

就比如下图，左边是我在记事本中打开笔记文件，可以看到没有任何的链接标记，但是右边在 obsidian 中，`虚拟引用` 和 `潜在链接` 被突出显示出来，那是因为我有一个笔记文件的别名与之匹配。

而且我可以点击跳转到这个笔记，也可以按住 ctrl 悬浮预览。

![](https://cdn.pkmer.cn/images/20240730204932.png!pkmer)

obsidian 本体的核心插件中有【出链面板】，其中有一个功能【当前笔记中潜在的链接】，并且也可以允许手动确认，将潜在链接转换为真正的链接。

但是，出链面板还是不够直观，无法在正文中直接提示，而这个插件就是自动在正文中高亮显示潜在链接。

## 设置界面

（待完善）

## 链接样式

链接样式可以自定义修改，从而与真实链接区分开，下面是自用的一个 css 片段。

```css
span.virtual-link>a.internal-link{
  background-color: rgba(206, 195, 94, 0.1);
  border-bottom: 2px rgba(238, 190, 34, 0.69);
  border-bottom-style: dashed;
  color: var(--text-normal) !important;
  text-decoration-line:none;
}

.virtual-link-default {
  filter: none;
}
```
