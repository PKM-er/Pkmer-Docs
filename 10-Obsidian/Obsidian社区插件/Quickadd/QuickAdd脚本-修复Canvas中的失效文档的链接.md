---
uid: 20240106235941
title: QuickAdd 脚本 - 修复 Canvas 中的失效文档的链接
tags: [Canvas, quickadd脚本]
description: 针对 Canvas 中大量失效的笔记或文件进行修复的脚本，借用 Quickadd 的 Capture 进行运行。
author: 熊猫别熬夜,calmwaves
type: other
draft: false
editable: false
modified: 20240107000410
---

# QuickAdd 脚本 - 修复 Canvas 中的失效文档的链接

针对 Canvas 中大量失效的笔记或文件进行修复的脚本，借用 Quickadd 的 Capture 进行运行。

![QuickAdd 脚本 - 修复 Canvas 中的失效文档的链接](https://cdn.pkmer.cn/images/202401070003406.gif!pkmer)

## 背景

我一般采用 Obsidian 的尽可能简短形式的 Wiki 的链接形式，这样 Obsidian 里面的笔记链接不容易失效：

![QuickAdd 脚本 - 修复 Canvas 中的失效文档的链接](https://cdn.pkmer.cn/images/202401070003407.png!pkmer)

**Canvas 中笔记失效的原因**：因为我对 Obsidian 的文件夹列表操作实在不感冒，所以经常会在系统的**资源管理器**中对 `文件夹` 和 `笔记` 进行一定修改移动 (PS：千万不要更改 md 的名称，不然你会后悔的)，==虽然 `简短的 Wiki 链接` 会保持 md 笔记间的联系不会失效，但是 Canvas 则会直接失效，因为 Canvas 里面采用的是基于 Obsidian 库的相对路径，而不支持 Wiki 链接。==

![QuickAdd 脚本 - 修复 Canvas 中的失效文档的链接](https://cdn.pkmer.cn/images/202401070003408.png!pkmer)

所以有一次我从**资源管理器**进行一番操作后，发现 Canvas 中大量的笔记失效，也没有备份记录，能修复的方法只有手动操作，但一个 Canvas 中有几十甚至上百个小卡片笔记，为了节省时间，写了这个修复 Canvas 失效的笔记或者文件的脚本。

## Quickadd 的脚本配置

> [!caution] 脚本运行的注意事项
> 1. Canvas 中的笔记不要有相同文件名的其他笔记存在，如果有则该脚本会跳过修复。
> 	1. [[#Tip：DataViewJS- 检测库内重复文件名的笔记]]
> 2. 脚本只是从文件列表性质上的检索，所以会对 Canvas 中的所有笔记进行检测，如果你发现脚本运行后出现特别多的改变，请通过 `Ctrl + Z` 退回。

### 添加 Quickadd 的 Capture 选项

![QuickAdd 脚本 - 修复 Canvas 中的失效文档的链接](https://cdn.pkmer.cn/images/202401070003409.png!pkmer)

### Capture：♻FixCanvas 的配置

![QuickAdd 脚本 - 修复 Canvas 中的失效文档的链接](https://cdn.pkmer.cn/images/202401070003410.png!pkmer)

### Capture：♻FixCanvas 的脚本

````md
```js quickadd
const path = require('path');
const fs = require('fs');

// 获取笔记的基本路径
const file = app.workspace.getActiveFile();
const fileFullPath = app.vault.adapter.getFullPath(file.path);
const isFixCanvasFileLink = confirm(`是否强制修复\n${fileFullPath}\n的内部文件链接`);
if (isFixCanvasFileLink && file.extension == 'canvas') {
    new Notice('🔴修复 Canvas 中失效的文件');

    // 获取库所有文件列表
    const files = app.vault.getFiles();
    // wikiPath = getFilePath(files, selectionEmbed); // 匹配Wiki链接
    // console.log(wikiPath);

    // 读取JSON格式的canvas文件并修改nodes中的object.file后再写回原文件
    fs.readFile(fileFullPath, 'utf8', (err, data) => {
        if (err) throw err;
        const canvasData = JSON.parse(data);

        // 处理nodes中的object.file，例如将其替换为其他文件
        canvasData.nodes.forEach(node => {
            // 进行处理，例如替换为其他文件
            const baseName = path.basename(String(node.file));
            const filePath = getFilePath(files, baseName);

            if ((filePath.length > 1 || !filePath) && (baseName.length > 1)) {
                new Notice(`🟡文件：${baseName}，有${filePath.length}个重复文件，因此跳过修复`, 5000);

            } else if (baseName.length > 1) {
                node.file = String(filePath);
            }

        });
        // 将修改后的canvasData写回原文件
        fs.writeFile(fileFullPath, JSON.stringify(canvasData, null, 2), 'utf8', (err) => {
            if (err) throw err;
            new Notice('🟢Canvas失效文档已更新');
        });
    });

}

function getFilePath(files, baseName) {
    let files2 = files.filter(f => path.basename(f.path) === baseName);
    let filePath = files2.map((f) => f.path);
    console.log(filePath);
    return filePath;
}
```
````

## Tip：DataViewJS- 检测库内重复文件名的笔记

该 DataViewJS 片段由 @Calmwaves 提供。

![QuickAdd 脚本 - 修复 Canvas 中的失效文档的链接](https://cdn.pkmer.cn/images/202401070003411.png!pkmer)

````md
```dataviewjs
// 假设您的对象数组为 data
const data = dv.pages();

let countMap = {}; // 用于存储计数的对象
let duplicates = []; // 用于存储重复元素的数组

// 遍历对象数组
data.forEach((element) => {
  let fileName = element.file.name;
  let filePath = element.file.path;

  // 计数
  if (countMap[fileName]) {
    countMap[fileName].count++;
    countMap[fileName].paths.push(filePath);
  } else {
    countMap[fileName] = { count: 1, paths: [filePath] };
  }
});

let dup=0//这是发现了几个dup的name
let flag =0//有重名文件的标志
for (const key in countMap) {
    const element = countMap[key];
    if (element.count > 1) {
      dup++;
      if(dup>0&&flag==0){dv.paragraph("==有重名文件==");flag=1}
      dv.span(`《${key}.md》出现了${element.count}次`);
      const pathstolink = element.paths.map(path => `[[${path}]]`);
      dv.list(pathstolink);

    }
}
if(dup==0){
dv.span("没有重名文件")
}
```
````
