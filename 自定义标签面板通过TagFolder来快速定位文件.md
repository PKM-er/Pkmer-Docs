---
uid: 20230907123156
title: 自定义标签面板通过 TagFolder 来快速定位文件
tags: []
description: 
author: 
type: other
draft: false
editable: false
modified: 20230907123811
---

# 自定义标签面板通过 TagFolder 来快速定位文件

![[Pasted image 20230907122056.png]]

## 前言

最近发现一款特别好用的标签插件：[Tag Folder](https://github.com/vrtmrz/obsidian-tagfolder)，可以像文件夹一样显示 Obsidian 的标签：

![[Pasted image 20230907101457.png]]

最主要的功能是通过它获取的标签文件列表可以快速定位到某一个文件，如何设置下图，不想 Obsidian 自带的标签点击后要搜索一会儿才会出结果，这个是直接列出存在标签的文件。

![[Pasted image 20230907122138.png]]

### 关闭未标记文档归类到根目录下的选项

默认设置是会把没有打标签的文档归类到根目录下，像我这种一开始没有怎么打标签的人，这种空白的标签的文档有很多，在设置里面可以把这个选项关了。

![[Pasted image 20230907102245.png]]

它会把没打标记的文档归类到 `_untagged` 的虚拟标签文件下，并不会真的给你的文档打上 `_untagged` 标签。

### 排除不想要的标签

不过如果你不喜欢这个 `_untagged` 标签，不想把它显示在界面下，或者不想让某个的标签显示到界面上时，同样可摘设置里面设置排除标签选项：

![[Pasted image 20230907102657.png]]

这里面的其他的一些选项就不逐一介绍了，插件本身设置选项就介绍的很清楚了。

## 建立标签分级面板

我主要关注的功能是这个功能："**点击标签时，在标签文件夹内搜索标签**"：

![[Pasted image 20230907103018.png]]

并且当你按住 `Ctrl` 键继续单击其他标签时，它会继续加上该标签达到多重标签筛选的效果，这就引起我的兴趣了，就是说如果我建立了一个类似标签面的存在，我只需要通过点击我想要的标签就可以快速筛选，我个人比较喜欢 Zotero 一行行排序起来的标签，不过 Obsidian 里面大多数是嵌套，排序的话就太多了，于是就想利用 Catllout 来对每个标签等级为一级的标签作为一个 Catllout 收集，然后下面就是它的子标签，且并不显示父标签，就是像 Zotero 那样直接单独显示一个子标签，实现结果如下：

![[Pasted image 20230907112926.png]]

## dataviewjs 代码

````
```dataviewjs
let tags = {};
dv.pages("").file.etags.distinct()
  .filter(t => {
    const levels = t.split("/");
    return levels.length >= 1 // 选择标签等级大于等于1的标签
  })
  .filter(t => dv.pages(t).length >= 1) // 去除长度小于1的标签
  .filter(t => t.trim() !== '') // 去除等于空的标签
  .filter(t => /电脑编程|知识管理|可视化|软件工具|科研绘图/.test(t)) // 只显示包含指定内容的标签(|：或，&&：与)
  .forEach(t => {
    const levels = t.split("/");
    const firstLevel = levels[0];
    const lastLevel = levels[levels.length - 1].replace('#', ''); // 获取最后一级的标签并去除 "#"
    if (!tags[firstLevel]) {
      tags[firstLevel] = [];
    }
    tags[firstLevel].push(`[#${lastLevel}](${t})`+"("+dv.pages(t).length+")"); // 给每个标签加上 "#"
  });

let result = '';
for (let firstLevel in tags) {
  result += '> [!example]- '+firstLevel + '\n\t> ' + tags[firstLevel].join('、') + '\n\n';
}

dv.paragraph(result);
```
````

### 标签面板的一些微调

我这边规定了只显示我想要显示的一级标签，如果你想要显示 Obsidian 笔记中所有的标签，请删除这段：

```js
.filter(t => /电脑编程|知识管理|可视化|软件工具|科研绘图/.test(t)) // 只显示包含指定内容的标签(|：或，&&：与)
```

还有如果你想要 1 到 2 级的标签，也可以进行修改，将 `return levels.length >= 1; // 选择标签等级大于等于1的标签` 替换为下面的代码：

```js
return levels.length >= 1 && levels.length <= 2;// 选择标签等级大于等于1小于2的的标签
```

如果你不希望标签数量很少的标签进行显示则修改 `.filter(t => dv.pages(t).length >= 1) // 去除长度小于1的标签` 为：

```js
.filter(t => dv.pages(t).length >= 5) // 去除标签数量小于5的标签
```

## 其他一些优化设置

### 缩小指定面板的字体

如果你先把该标签面板固定到一侧，当字体不想太大，也不想随着鼠标滚轮变动，同时如果你开了 **显示标签页标题栏** 的选项时，页面也不想显示，这里有一个 CSS Snippets 可以帮助你解决这个问题，需要在该笔记的 yaml 区的 cssclass 声明 `.small-font`：

```md
---
cssclasses:
  - small-font

---
```

```css
/* 输定字体大小 */
.small-font.markdown-preview-view {
  font-size: 16px !important;
  line-height: 180%;
}

/* 关闭显示标签页标题栏。 */
.small-font.markdown-preview-view .mod-header .inline-title {
  display: none;
  line-height: 0px;
  /* text-align: right; */
}

```

### 如何设定笔记图标

当你固定到到一侧时，又有一个问题出现了，自带的笔记页面的图标不好看，你想换个好看点的，没问题！[Icon Folder 插件](https://github.com/FlorianWoelki/obsidian-icon-folder) 完美解决你的问题，它提供可以给笔记或者文件夹更换 ICON，可以在插件市场进行下载安装。

第一次安装要手动下载它提供的 icon 包：

![[Pasted image 20230907120422.png]]

之后对着你要更改图标的笔记右键的下拉菜单中选择 `Change Icon` 在弹窗中你想要图标就行了

![[Pasted image 20230907123810.png]]

### 推荐一个标签样式 by serenity 主题

![[Pasted image 20230907122615.png]]

改标签样式片段来自 [serenity 主题](https://github.com/Bluemoondragon07/Obsidian-Serenity)

```css
/* ================== tags ==================== */
body {
  --tag-radius: var(--radius-s);
  --tag-padding-x: 6px;
  --tag-padding-y: 2px;
  --tag-opacity: 0.25;
  --tag-opacity-hover: 0.2;
}


a.tag,
.cm-hashtag {
  background-color: var(--tag-rb) !important;
}
a.tag:hover {
  background-color: var(--tag-rb-hover) !important;
}

.theme-light a.tag,
.theme-light .cm-hashtag {
  color: var(--tag-rb-text-light) !important;
}
.theme-dark a.tag,
.theme-dark .cm-hashtag {
  color: var(--tag-rb-text-dark) !important;
}

a.tag:nth-child(7n+1), /*reading mode*/
:is(.cm-hashtag:nth-child(14n+1), /*live preview*/
.cm-hashtag:nth-child(14n+2)) {
  --tag-rb-text-light: hsl(var(--accent-h), 60%, 30%);
  --tag-rb-text-dark: hsl(var(--accent-h), 40%, 80%);
  --tag-rb: hsl(var(--accent-h), 50%, 60%, var(--tag-opacity));
  --tag-rb-hover: hsl(var(--accent-h), 50%, 60%, var(--tag-opacity-hover));
}

a.tag:nth-child(7n + 2),
:is(.cm-hashtag:nth-child(14n + 3), .cm-hashtag:nth-child(14n + 4)) {
  --tag-rb-text-light: hsl(calc(var(--accent-h) + 51), 60%, 30%);
  --tag-rb-text-dark: hsl(calc(var(--accent-h) + 51), 40%, 80%);
  --tag-rb: hsl(calc(var(--accent-h) + 51), 50%, 60%, var(--tag-opacity));
  --tag-rb-hover: hsl(
    calc(var(--accent-h) + 51),
    50%,
    60%,
    var(--tag-opacity-hover)
  );
}

a.tag:nth-child(7n + 3),
:is(.cm-hashtag:nth-child(14n + 5), .cm-hashtag:nth-child(14n + 6)) {
  --tag-rb-text-light: hsl(calc(var(--accent-h) + 102), 60%, 30%);
  --tag-rb-text-dark: hsl(calc(var(--accent-h) + 102), 40%, 80%);
  --tag-rb: hsl(calc(var(--accent-h) + 102), 50%, 60%, var(--tag-opacity));
  --tag-rb-hover: hsl(
    calc(var(--accent-h) + 102),
    50%,
    60%,
    var(--tag-opacity-hover)
  );
}

a.tag:nth-child(7n + 4),
:is(.cm-hashtag:nth-child(14n + 7), .cm-hashtag:nth-child(14n + 8)) {
  --tag-rb-text-light: hsl(calc(var(--accent-h) + 153), 60%, 30%);
  --tag-rb-text-dark: hsl(calc(var(--accent-h) + 153), 40%, 80%);
  --tag-rb: hsl(calc(var(--accent-h) + 153), 50%, 60%, var(--tag-opacity));
  --tag-rb-hover: hsl(
    calc(var(--accent-h) + 153),
    50%,
    60%,
    var(--tag-opacity-hover)
  );
}

a.tag:nth-child(7n + 5),
:is(.cm-hashtag:nth-child(14n + 9), .cm-hashtag:nth-child(14n + 10)) {
  --tag-rb-text-light: hsl(calc(var(--accent-h) + 204), 60%, 30%);
  --tag-rb-text-dark: hsl(calc(var(--accent-h) + 204), 40%, 80%);
  --tag-rb: hsl(calc(var(--accent-h) + 204), 50%, 60%, var(--tag-opacity));
  --tag-rb-hover: hsl(
    calc(var(--accent-h) + 204),
    50%,
    60%,
    var(--tag-opacity-hover)
  );
}

a.tag:nth-child(7n + 6),
:is(.cm-hashtag:nth-child(14n + 11), .cm-hashtag:nth-child(14n + 12)) {
  --tag-rb-text-light: hsl(calc(var(--accent-h) + 255), 60%, 30%);
  --tag-rb-text-dark: hsl(calc(var(--accent-h) + 255), 40%, 80%);
  --tag-rb: hsl(calc(var(--accent-h) + 255), 50%, 60%, var(--tag-opacity));
  --tag-rb-hover: hsl(
    calc(var(--accent-h) + 255),
    50%,
    60%,
    var(--tag-opacity-hover)
  );
}

a.tag:nth-child(7n + 7),
:is(.cm-hashtag:nth-child(14n + 13), .cm-hashtag:nth-child(14n + 14)) {
  --tag-rb-text-light: hsl(calc(var(--accent-h) + 306), 60%, 30%);
  --tag-rb-text-dark: hsl(calc(var(--accent-h) + 306), 40%, 80%);
  --tag-rb: hsl(calc(var(--accent-h) + 306), 50%, 60%, var(--tag-opacity));
  --tag-rb-hover: hsl(
    calc(var(--accent-h) + 306),
    50%,
    60%,
    var(--tag-opacity-hover)
  );
}

```

最后你自己设定的标签面板就大功告成了！希望本文对您有所帮助。
