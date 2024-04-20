---
uid: 20240417173638
title: QuickAdd 脚本 - 自动插入文档中的第 n 张图片至 Banner 属性
tags: [banners, 图片处理]
description: 自动插入文档中的第 n 张图片至 Banner 属性
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240420160203
---

# QuickAdd 脚本 - 自动插入文档中的第 n 张图片至 Banner 属性

![2024-04-17_QuickAdd脚本-自动插入文档中的第n张图片至Banner属性_IMG-2](https://cdn.pkmer.cn/images/202404171748573.png!pkmer)

## 使用背景

![image.png](https://cdn.pkmer.cn/images/202404201612500.png!pkmer)


我编辑 Project 时经常忘记添加 Banner 属性值，尤其当图片修改后，我也不想去手动更新。通常文章的第一张图片就是这篇文章的 Banner。为了偷懒，我写了这个脚本并与 Linter 配合使用。 通过 `Ctrl + S` 快捷键自动刷新文档的 Banner。

![2024-04-17_QuickAdd脚本-自动插入文档中的第n张图片至Banner属性_IMG-1](https://cdn.pkmer.cn/images/202404171748574.png!pkmer)

## QuickAdd Macro 脚本

### 脚本设置设置

![2024-04-17_QuickAdd脚本-自动插入文档中的第n张图片至Banner属性_IMG-2](https://cdn.pkmer.cn/images/202404171748573.png!pkmer)

```js
module.exports = {
  entry: async (QuickAdd, settings, params) => {
    // 获取当前活动文件和缓存的元数据
    const file = app.workspace.getActiveFile();
    const cachedMetadata = app.metadataCache.getFileCache(file);

    // 提取嵌入的图片或gif
    let embedImgs = [];
    if (cachedMetadata?.embeds) {
      embedImgs = cachedMetadata.embeds.map(e => e.link).filter(l => /\.(png|gif|jpe?g)$/.test(l));
    }
    if (embedImgs.length < 1) return;

    // 设置显示第几个图片，如果不存在则会自动选择第1张图片
    let num = parseInt(settings["显示第几张图片"], 10) || 1;
    if (num > embedImgs.length) {
      num = 1;
    }

    // 插入banner属性
    const banner = settings["图片属性"] ? settings["图片属性"] : "banner";
    await app.fileManager.processFrontMatter(file, fm => {

      // 如果不存在banner属性，则插入，如果不是特别需要的话，可以注释这段
      if (!fm[banner]) {
        fm[banner] = "";
        fm[banner] = `[[${embedImgs[num - 1]}]]`;
        new Notice(`自动插入Banner：🖼${embedImgs[num - 1]}`);
        return;
      }

      if (settings["是否强制更新"] && (fm[banner] !== `[[${embedImgs[num - 1]}]]`)) {
        fm[banner] = `[[${embedImgs[num - 1]}]]`;
        new Notice(`更新Banner：🖼${embedImgs[num - 1]}`);
        return;
      }
    });
  },
  settings: {
    name: "自动插入图片到Yaml中",
    author: "熊猫别熬夜",
    options: {
      "图片属性": {
        type: "text",
        defaultValue: "banner",
      },
      "是否强制更新": {
        type: "toggle",
        defaultValue: true,
        description: "如果文档的第一张图片更改了，该选项会强制刷新"
      },
      "显示第几张图片": {
        type: "text",
        defaultValue: "1",
        description: "设置显示第几个图片，如果不存在则会自动选择第1张图片"
      }
    }
  }
};
```

## Reference

- [[QuickAdd脚本-插入文档的编辑或创建时间]]