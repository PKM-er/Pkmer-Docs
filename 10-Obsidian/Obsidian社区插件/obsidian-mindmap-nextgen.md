---
uid: 20230504195614
title: Obsidian 插件：Obsidian Mindmap Nextgen
tags: [Obsidian, 插件, Obsidian Mindmap Nextgen, 思维导图, 代码块, 28F48D]
description: Obsidian Mindmap Nextgen 用于将笔记预览为 Markmap 思维导图
author: cuman
type: other
draft: false
editable: false
modified: 20230603020256
---

# Obsidian 插件：Obsidian Mindmap Nextgen

## 概述

使用 [markmap](https://markmap.js.org/) 库把你的笔记用思维导图的形式打开。跟 [[obsidian-enhancing-mindmap]] 插件不同的是，它可以用代码块的形式直接把思维导图嵌入到当前笔记中。

> [!Note] 插件名片
> - 插件名称：Obsidian Mindmap Nextgen
> - 插件作者：VeroCloud Pty Ltd (original by James Lynch)
> - 插件说明：用于将笔记预览为 Markmap 思维导图
> - 插件项目地址：[点我访问](https://github.com/verocloud/obsidian-mindmap-nextgen)

## 使用

打开命令面板 （cmd/ctrl-p），然后输入 mindmap 选择下面命令。

![image.png](https://cdn.pkmer.cn/images/202305042004599.png!pkmer)

打开固定 mindmap 会新建一个 md 文档，非固定就在当前文档插入 mindmap。

在文档中使用 mindmap 代码块即可生成思维导图。例如

```markmap
# Mindmap
## Mindmap
```

## 用法举例

- 支持 checkbox 的形式如

```markmap

# Housework
## Main
- [x] Dishes
- [ ] Cleaning the bathroom
- [x] Change the light bulbs
- [ ] something else
## [x] Also works on titles
```

会渲染成如下效果

![image.png](https://cdn.pkmer.cn/images/202305042009330.png!pkmer)

- 支持 latex 公式
  单行公式使用 `$` 包裹，多行公式使用 `$$` 包裹。
- 文档支持通过 yaml 进行设置参数比如

  ```yaml
  ---











markmap:
  screenshotTextColor: #28F48D
  highlight: true
  titleAsRootNode: true
---

```
这里设置了文字颜色，是否高亮，标题是否为根节点信息。详细的设置参数参考 [JSON options - markmap docs](https://markmap.js.org/docs/json-options)
其中  `extraJs` 和 `extraCss` 参数目前还不支持。

>[!Tip] 关联推荐
>- [[obsidian-enhancing-mindmap]]：让你在 Osidian 中绘制思维导图、大纲和 PDF 文件标注工具。包括多种模式，包括导图模式，表格模式，类白板模式。
