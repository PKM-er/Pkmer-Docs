---
uid: 20240401221223
title: QuickAdd 脚本 -F2 弹窗式重命名三合一
tags:
  - 重命名
  - 增强编辑
  - quickadd脚本
description: F2 重命名三合一 (小标题、嵌入文件、当前文档)
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240401221223
---

# QuickAdd 脚本 -F2 弹窗式重命名三合一

F2 重命名三合一 (小标题、嵌入文件、当前文档)

![2024-03-20_QuickAdd脚本-F2弹窗式重命名文件_IMG-3](https://cdn.pkmer.cn/images/202404012216771.gif!pkmer)

- 📄文档重命名：当光标所在的段落不是标题和不包含 wiki 链接则是**📄文档重命名**
- 重命小名标题：当光标所在的段落是标题则**重命名标题**
- 🗳重命名文件 (笔记、附件)：当光标所在的段落包含 wiki 链接则可以**重命名文件 (包含笔记和附件)**

> [!tip] 多个链接请单独选择后运行：
> ![2024-03-20_QuickAdd脚本-F2弹窗式重命名文件_IMG-4](https://cdn.pkmer.cn/images/202404012216772.gif!pkmer)

```js
/*
 * @Author: 熊猫别熬夜 
 * @Date: 2024-03-27 11:51:21 
 * @Last Modified by: 熊猫别熬夜
 * @Last Modified time: 2024-04-01 12:44:16
 */
const path = require('path');
const quickAddApi = app.plugins.plugins.quickadd.api;
module.exports = async (params) => {
  let file = app.workspace.getActiveFile();
  if (app.workspace.activeEditor) {
    const editor = app.workspace.activeEditor.editor;
    // 选择所在的一行
    const line = editor.getLine(editor.getCursor().line);
    // 获取选中的文本否则自动获取当前行的文本
    const selection = editor.getSelection() ? editor.getSelection() : line;
    // !如果为标题
    const regex = /^(#+)\s(.*)/;
    const matches = selection.match(regex);
    if (matches) {
      // 重命名小标题
      app.commands.executeCommandById('editor:rename-heading');
      return;
    }

    // !如果为wiki链接
    let selectionEmbed = matchSelectionEmbed(selection);
    if (selectionEmbed) {
      console.log(selectionEmbed);
      const files = app.vault.getFiles();
      // Wiki: 获取库所有文件列表
      const wikiPath = getFilePath(files, selectionEmbed); // 匹配Wiki链接
      console.log(wikiPath);
      if (!wikiPath) {
        return;
      };
      // !2024-03-30_14:14：添加excalidraw.md文件
      let newName = "";
      if (wikiPath.endsWith('.excalidraw.md')) {
        newName = await quickAddApi.inputPrompt(`🗳重命名嵌入的Excalidraw文件`, null, path.basename(wikiPath).replace(".excalidraw.md", ""), "");
        if (!newName) return;
        newName = newName + ".excalidraw";
      } else {
        newName = await quickAddApi.inputPrompt(`🗳重命名嵌入的${path.extname(wikiPath)}文件`, null, path.basename(wikiPath).replace(path.extname(wikiPath), ""), "");
      }
      if (!newName) return;
      await app.fileManager.renameFile(app.vault.getAbstractFileByPath(wikiPath), `${path.dirname(wikiPath)}/${newName}${path.extname(wikiPath)}`);
      return;
    };
  }
  // !最终重命名文件
  let newName = "";
  if (String(file.basename).endsWith('.excalidraw')) {
    newName = await quickAddApi.inputPrompt(`🎨重命名Excalidraw文件`, null, String(file.basename).replace(".excalidraw", ""), "");
    if (!newName) return;
    newName = newName + ".excalidraw";
  } else {
    newName = await quickAddApi.inputPrompt('📄重命名当前文档', null, String(file.basename));
    if (!newName) return;
  }
  await app.fileManager.renameFile(file, `${file.parent.path}/${newName}.${file.extension}`);
  return;
};
function matchSelectionEmbed(text) {
  const regex = /\[\[?([^\]]*?)(\|.*)?\]\]?\(?([^)\n]*)\)?/;
  const matches = text.match(regex);
  if (!matches) return;
  if (matches[3]) return decodeURIComponent(matches[3]);
  if (matches[1]) return decodeURIComponent(matches[1]);
}

function getFilePath(files, baseName) {
  let files2 = files.filter(f => path.basename(f.path).replace(".md", "") === path.basename(baseName).replace(".md", ""));
  let filePath = files2.map((f) => f.path);
  return filePath[0];
}
```

### 适配 `.excalidraw.md` 文件

单独一个版本，适配 `.excalidraw.md` 文件，即不会在输入框显示.excalidraw.md 后缀：

![2024-03-20_QuickAdd脚本-F2弹窗式重命名文件_IMG-5](https://cdn.pkmer.cn/images/202404012216773.png!pkmer)

## Reference

- [回复：QuickAdd 右键菜单批量重命名文件防止双链断裂 - Obsidian 中文论坛](https://forum-zh.obsidian.md/t/topic/31816/7)
