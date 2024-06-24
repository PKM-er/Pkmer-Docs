---
uid: 20240417152011
title: QuickAdd 脚本 - 插入文档的编辑或创建时间
tags: [时间管理, YAML, quickadd脚本]
description: "该脚本用于更新文档的编辑时间，在文档中添加一个指定属性 (eg: `modified`)，记录文档的编辑时间 (eg: `YYYY-MM-DD HH:mm:ss Z`)，可配合 Linter 绑定的快捷键 Ctrl + S 一起使用。"
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240417153417
---

# QuickAdd 脚本 - 插入文档的编辑或创建时间

该脚本用于更新文档的编辑时间 (`mtime`) 或者插入创建时间 (`ctime`)，在文档中添加一个指定属性 (eg: `modified`)，记录文档的编辑时间 (eg: `YYYY-MM-DD HH:mm:ss Z`)，亦或是插入文档的创建时间 (eg：`date`，`YYYY-MM-DD`)。

![2024-04-17_QuickAdd脚本-插入文档的编辑或创建时间_IMG-1](https://cdn.pkmer.cn/images/202404201542058.png!pkmer)

可以通过 QuickAdd 的 Macro 脚本设置选择要更新的属性名称和时间格式：

```js
module.exports = {
  entry: async (QuickAdd, settings, params) => {
    const file = app.workspace.getActiveFile();
    const yaml = settings["Properties"];
    // 保存文件
    await app.commands.executeCommandById('editor:save-file');
    await new Promise(r => setTimeout(r, 300));
    await app.fileManager.processFrontMatter(file, fm => {
      if (!fm[yaml]) {
        fm[yaml] = "";
        const ctime = new Date(file.stat[settings["Type"]]);
        fm[yaml] = moment(ctime).format(settings["Format"]);
      }
      if (settings["Type"] === "mtime") {
        const ctime = new Date(file.stat[settings["Type"]]);
        fm[yaml] = moment(ctime).format(settings["Format"]);
      }
    });
  },
  settings: {
    name: "插入文档的编辑或创建时间",
    author: "熊猫别熬夜",
    options: {
      "Type": {
        type: "select",
        defaultValue: "ctime",
        options: [
          "ctime",
          "mtime",
        ],
      },
      "Properties": {
        type: "text",
        defaultValue: "date",
      },
      "Format": {
        type: "text",
        defaultValue: "YYYY-MM-DD",
      },
    }
  }
};
```
