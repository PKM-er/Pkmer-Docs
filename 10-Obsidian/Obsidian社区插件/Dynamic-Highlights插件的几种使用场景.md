---
uid: 20231209095421
title: Dynamic-Highlights 插件的几种使用场景
tags: [css, 美化, 高亮]
description: 利用Dynamic-Highlights插件，对一些信息进行突出显示
author: calmwaves
type: other
draft: false
editable: false
modified: 20231209101204
---

# Dynamic-Highlights 插件的几种使用场景

首先请阅读 Dynamic Highlights 插件的 readme 文档翻译，插件作者介绍了几种使用场景：[[obsidian-dynamic-highlights_readme]]

此前，[@Bon](https://pkmer.cn/authors/bon) 也详细介绍了 Dynamic Highlights 的配置教程和几种使用场景：[[obsidian-dynamic-highlights]]

而我在自行探索之后，也有几分使用心得，因此撰写本文来分享我个人的用法，希望对大家有所帮助。

> [!caution]
> 请先仔细阅读上面两篇文章，关于 Dynamic Highlights 如何使用已经讲解地十分清楚，本文不再赘述。
> 另外该插件的设置界面的保存按钮有一些问题，详情请按照 [这个issue](https://github.com/nothingislost/obsidian-dynamic-highlights/issues/72) 修改一下

## 高亮@

> 这个效果有另一个插件实现，同时附带有其他功能，可自行选择：[[obsidian-simple-mention_readme]]

Dynamic Highlights 实现的效果如下图，高亮@及其之后的内容，遇到空格结束
![image.png](https://cdn.pkmer.cn/images/20231209095735.png!pkmer)

配置如下：

![image.png](https://cdn.pkmer.cn/images/20231209095825.png!pkmer)

```
((?<=\s)@\S+|^@\S+)
```

以下 css 样式来自网站： www.lingdaima.com

```css
.atPeople {
 --green: #1BFD9C;
 font-size: 15px;
 padding: 0px 2px;
 margin:0 3px;
 letter-spacing: 0.06em;
 position: relative;
 font-family: inherit;
 border-radius: 0.6em;
 overflow: hidden;
 line-height: 1.1em;
 border: 2px solid var(--green);
 background: linear-gradient(to right, rgba(27, 253, 156, 0.1) 1%, transparent 40%,transparent 60% , rgba(27, 253, 156, 0.1) 100%);
 color: var(--green);
 box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.4), 0 0 9px 3px rgba(27, 253, 156, 0.1);
}
```

为此我配套写了 [[various-complements]] 的字典，和 [[obsidian-linter_readme]] 正则给@前面加空格

```json
      {"value": "@皮皮 ", "displayed": "@皮皮","aliases": ["@皮皮"]},
      {"value": "@熊猫 ", "displayed": "@熊猫","aliases": ["@熊猫"]},
      {"value": "@cuman ", "displayed": "@cuman","aliases": ["@cuman"]},
```

![image.png](https://cdn.pkmer.cn/images/20231209095838.png!pkmer)

## 仿妙笔的高亮对白功能

妙笔 WonderPen 是一款写小说的软件，其有一个高亮对白的功能，其实就是高亮 `“”` 中间的内容，这完全可以依靠插件的正则高亮功能来实现。

效果类似下图这样，当然你也可以发挥自己的能力，编写更好看的 css 样式。

![image.png](https://cdn.pkmer.cn/images/20231209095855.png!pkmer)

```
“.*?”
```

```css
.dialogue {
  font-size: 17px!important;
  color:#ffbf2c;
}
```

## 仿 vscode 的彩虹缩进

查看：[单插件+CSS 管理连续空格（2 空格、4 空格及以上） - 经验分享 - Obsidian 中文论坛](https://forum-zh.obsidian.md/t/topic/26298)

## 仿 vscode 的高亮所有全角符号

正则匹配常用的全角符号如 `！|，|。|《|》` 等，自己设置个高亮色

## 阅读模式下生效

该插件只在源码模式和实时预览下生效， @Bon 开发的一个插件 [Highlight In Preview](https://github.com/Quorafind/Obsidian-Highlight-In-Preview) 对此做了补充，让其可以在阅读模式下也生效，由于未上架官方市场，你需要自行到 github 下载，如果这个插件于你有帮助，请你不要吝于点个 star 哦！

Highlight In Preview 没有配置项，只要下载启用即可。

由于这个插件是 bon 为 [[00_Thino 用户指南|Thino]] 插件写的增强功能，会默认把时间格式高亮出来，如果你不需要，请到插件源码里按照下面的代码注释掉一些内容。

```js
      if (dynamicHighlightsPlugin && dynamicHighlightsPlugin.staticHighlighter[1].value.queries) {
        this.highlighters = Object.values(dynamicHighlightsPlugin.staticHighlighter[1].value.queries);
        this.highlighters = this.highlighters.filter((highlighter) => {
          var _a2;
          return !((_a2 = highlighter.class) == null ? void 0 : _a2.includes("light-time"));
        });
        // this.highlighters.push({
        //   class: "light-time",
        //   color: "#E45858",
        //   query: "\b(\d{1,2}:\d{1,2}(:\d{2})?)\b",
        //   regex: true
        // });
      // } else {
      //   this.highlighters.push({
      //     class: "light-time",
      //     color: "#E45858",
      //     query: "\b(\d{1,2}:\d{1,2}(:\d{2})?)\b",
      //     regex: true
      //   });
      }
```

## 结语

希望本文对大家能有所启发，发掘更多 Dynamic Highlights 插件的使用场景，如果有新的经验用法，也欢迎大家投稿，投稿流程：[[文档协作流程]]
