---
uid: 20240808235819
title: 如何创建动态的笔记目录
tags: [Obsidian/插件, Obsidian, OB分享]
description: 
author: Moy
type: other
draft: false
editable: false
modified: 20240816004203
aliases: []
create_date: 2024-08-08T23:58
modified_date: 2024-08-09T11:59
plugin_name: [使用Dataview创建笔记目录]
done: true
finished_date: 2024-08-09
output: [OB中文论坛]
output_urls: [https://forum-zh.obsidian.md/t/topic/38371]
---

# 如何创建动态的笔记目录

> 本帖的想法来自 [DataviewJS 的提取与汇总 - 经验分享 - Obsidian 中文论坛](https://forum-zh.obsidian.md/t/topic/28337/6) 以及 [使用 Dataview 读取文件中所有标题 - 经验分享 - Obsidian 中文论坛](https://forum-zh.obsidian.md/t/topic/36955/2)
> 感谢前人的经验分享，希望也能对你有所帮助。

## 效果

![](Resource/Images/0eb1b90c00533a8e500f98d515161d62.png)

其中，**目录** 里的链接是使用 Dataview JS 脚本自动生成的，会随着笔记内容自动更新。

和其他方案的对比：

1. 和 **Automatic Table of Content** 等插件相比，使用了大部分人都在用的 Dataview 插件，减少额外的插件安装
2. 和 **Table of Contents** 插件相比，优势是可以自动实时更新，劣势是并非实际的 Markdown 文本，无法脱离插件使用

## 使用方法

将 dataviewjs 代码粘贴进笔记，开启 Dataview 插件的脚本渲染功能的情况下，直接会生效。

生成的目录本质是 `[[#标题]]` 形式的链接，可以直接点击跳转。

## 代码

![](Resource/Images/84a97f08f5808afe8f44527e2b102dd7.png)

第一版：纯列表形式

````javascript
```dataviewjs
const startHeadinglevel = 2;
const file = app.workspace.getActiveFile();
const { headings } = app.metadataCache.getFileCache(file);

// 全列表的形式
const raws = headings.map( p => {
    let repeatCount = Math.max((p.level - startHeadinglevel) * 4, 0);
    let spacesPrefix = ' '.repeat( repeatCount + 4 );
    let listSign = repeatCount > 0 ? '- ' : '';
    let linkText = `[[#${p.heading}]]`;
    let headingList = (p.level < startHeadinglevel) ? `- ${linkText}` : `${spacesPrefix}- ${linkText}`;
    return headingList;
  }
)

let result = raws.join('\n');
// 添加行距
dv.container.style.lineHeight = "1.5em";
dv.paragraph(result)
```
````

第二种：分层形式

````javascript
```dataviewjs
// 尝试另一种形式，个人更喜欢让一级列表特殊一点

const startHeadinglevel = 2;
const file = app.workspace.getActiveFile();
const { headings } = app.metadataCache.getFileCache(file);

let output = '';
const additionalAttr = {attr: {style: 'margin-block-start: 0 !important; margin-block-end: 0 !important;'}};

// 整个 dv 容器的样式调整
dv.container.style.marginBlockStart = "0em";

headings.forEach ( h => {
    if (h.level < startHeadinglevel) {
        // 先输出之前的子列表内容
        if (output) dv.paragraph(output, additionalAttr);

        // 将一级标题输出成单独的段落
        output = `[[#${h.heading}]]\n`;
        dv.paragraph(output);
        output = '';
    } else {
        output += `${' '.repeat((h.level - startHeadinglevel) * 4)}- [[#${h.heading}]]\n`;
    }
})

// 把最后的残余内容输出出来
if (output) dv.paragraph(output, additionalAttr);

```
````

## 脚本要点

- 最初的难点就是 ==怎么用 Dataview 输出有层级的列表==，因为直接加空格前缀会导致文本内容被识别成「代码」而非「嵌套列表」
    - 查看 @PlayerMiller 的代码发现可以通过 **将所有文本一起输出成 paragraph** 的方式渲染成正确的列表
    - 但是对第二版来说，没法让作为「非列表」的一级标题很好地共同渲染，所以分段进行单独渲染
- DV 样式调整
	- 为了调整行间距等样式，使用 `dv.container.style` 直接给 dv 容器指定样式
	- 针对列表的段落，用 `dv.paragraph(output,  {attr: {style: 'margin-block-start: 0 !important; margin-block-end: 0 !important;'}} )` 单独指定样式
