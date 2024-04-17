---
uid: 20240417152011
title: QuickAdd 脚本 - 更新文档的编辑时间
tags: [时间管理, YAML, quickadd脚本]
description: "该脚本用于更新文档的编辑时间，在文档中添加一个指定属性 (eg: `modified`)，记录文档的编辑时间 (eg: `YYYY-MM-DD HH:mm:ss Z`)，可配合 Linter 绑定的快捷键 Ctrl + S 一起使用。"
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240417153417
---

# QuickAdd 脚本 - 更新文档的编辑时间

该脚本用于更新文档的编辑时间，在文档中添加一个指定属性 (eg: `modified`)，记录文档的编辑时间 (eg: `YYYY-MM-DD HH:mm:ss Z`)，可配合 Linter 绑定的快捷键 Ctrl + S 一起使用。

可以通过 QuickAdd 的 Macro 脚本设置选择要更新的属性名称和时间格式：

![2024-04-12_QuickAdd脚本-更新文档的编辑时间_IMG-1](https://cdn.pkmer.cn/images/202404171520789.png!pkmer)

```javascript
module.exports = {
  entry: async (QuickAdd, settings, params) => {
    const activefile = app.workspace.getActiveFile();
    const yaml = settings["Properties"] ? settings["Properties"] : "modified";

    await app.fileManager.processFrontMatter(activefile, fm => {
      if (!fm[yaml]) fm[yaml] = "";
      fm[yaml] = moment().format(settings["Format"] ? settings["Format"] : "YYYY-MM-DD HH:mm:ss Z");
    });

  },
  settings: {
    name: "更新文档的编辑时间",
    author: "熊猫别熬夜",
    options: {
      "Properties": {
        type: "text",
        defaultValue: "modified",
      },
      "Format": {
        type: "text",
        defaultValue: "YYYY-MM-DD HH:mm:ss Z",
      },
    }
  }
};
```
