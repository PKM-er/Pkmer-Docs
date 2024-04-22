---
uid: 20240401221709
title: QuickAdd 脚本 - 双语文档的中英文视图切换显示
tags: [quickadd脚本, 双语文档]
description: " 双语文档的中英文视图切换显示"
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240422162919
---

# QuickAdd 脚本 - 双语文档的中英文视图切换显示

## 效果演示

![](https://cdn.pkmer.cn/images/202404221628818.gif!pkmer)

不改变原文的情况下实现中英文双语文档的切换显示，需求来源于 PKMer 群友 @五星一杠瓢虫

## 设计思路

配合 Dynamic Highlight 插件、Highlight In Preview 插件使用，参考文档 [Dynamic-Highlights 插件的几种使用场景]( https://pkmer.cn/show/20231209095421 )

## Dynamic Highlight 动态高亮的正则

![](https://cdn.pkmer.cn/images/202404221628819.png!pkmer)

- chDisplay：
	- `^[\s0-9>\-\[\]*?[\u4e00-\u9fa5].*[。？；！\u4e00-\u9fa5]$`
- enDisplay：
	- `^[\s0-9>\-\[\]]*?[A-z0-9].*[\.\?\sA-z0-9\d]$`

## CSS Snippets

```css
/* 中英文锻炼切换 */
.yamlDisplay,
.chDisplay,
.enDisplay {
  background: transparent !important;
}

.英文视图 .chDisplay,
.中文视图 .enDisplay {
  display: none !important;
  opacity: 0.2;
}

/* 鼠标悬浮式显示 */
.英文视图 .chDisplay:hover,
.中文视图 .enDisplay:hover {
  opacity: 1;
}

:root {
  --anim-duration-fast: 0.3s;
  --anim-duration-superfast: 0.1s;
  --anim-delay: 0.6s;
}

/* 拓展视图 */
/* .拓展视图 span.cm-highlight, */
.拓展视图 mark:not(:hover) {
  color: transparent !important;
  transition: var(--anim-duration-fast) var(--anim-delay);
  /* 添加悬浮延迟 */
}

/* .拓展视图 span.cm-highlight:hover, */
.拓展视图 mark:hover {
  color: initial !important;
  transition: var(--anim-duration-fast) var(--anim-duration-superfast);
}

/* .拓展视图 .cm-strikethrough, */
.拓展视图 del{
  display: none !important;
}
```

## QuickAdd Macro

```js
/*
 * @Author: 熊猫别熬夜 
 * @Date: 2024-03-25 16:01:58 
 * @Last Modified by: 熊猫别熬夜
 * @Last Modified time: 2024-03-25 16:35:24
 */
const activeFile = app.workspace.getActiveFile();
const choices = ["默认视图", "拓展视图", "中文视图", "英文视图"];
module.exports = async (params) => {
  const quickaddApi = app.plugins.plugins.quickadd.api;
  const choice = await quickaddApi.suggester(choices, choices);

  await app.fileManager.processFrontMatter(activeFile, fm => {
    if (!fm["cssclasses"]) fm["cssclasses"] = [];
    // 清除所有选项
    fm["cssclasses"] = fm["cssclasses"].filter(item => !choices.includes(item));

    // 根据选择的选项添加对应的视图
    for (let i = 1; i < choices.length; i++) {
      if (choice === choices[i]) {
        fm["cssclasses"].push(choices[i]);
        return;
      }
    }
  });
  console.log("运行完成");
};
```

![](https://cdn.pkmer.cn/images/202404221628820.png!pkmer)

## 吐槽

- 2024-03-22_23:39：本想着需要配合 Style setting 的样式控制来设置，测试了半天无法获取当前状态，最后居然用 CssClasses 来设置就好了。
	- ![](https://cdn.pkmer.cn/images/202404221628821.gif!pkmer)
- 2024-03-23_00:07：或者设置透明度，错误要少点
	- ![](https://cdn.pkmer.cn/images/202404221628822.gif!pkmer)
- 2024-03-25_16:34：添加一个拓展视图
	- 阅读视图下，高亮线会变成无文字状态，悬浮预览
	- 阅读视图下，删除线内的文字会直接不显示
	- ![](https://cdn.pkmer.cn/images/202404221628823.gif!pkmer)

## References

1. [PKMer：Dynamic-Highlights 插件的几种使用场景]( https://pkmer.cn/show/20231209095421 )
2. [正则匹配中文 - 知乎](https://zhuanlan.zhihu.com/p/99790819?utm_psn=1754588187287277568)