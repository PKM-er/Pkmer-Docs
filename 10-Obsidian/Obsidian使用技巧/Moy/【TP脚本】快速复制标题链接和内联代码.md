---
uid: 20240629182937
title: 快速复制标题链接和内联代码
tags: [Obsidian]
description: 
author: Moy
type: tutorial
draft: false
editable: false
modified: 20240630162130
aliases: []
create_date: 2024-06-29T18:29
modified_date: 2024-06-30T15:57
publish: true
---

# 快速复制标题链接和内联代码

在使用 OB 的时候，有时候会想复制指向某个标题的引用链接。

想要的结果是：`[[笔记名称#标题|标题]]`

这样的链接可以**直接跳转到这个标题所在的位置**，并且**只显示标题文本**，避免链接过长。

是否显示笔记名称的长度区别：

![](Resource/Images/bb4f11b148b1563734908f3a5af3a607.png)

我一直的做法是先双击 `[[` 后选择一个笔记，选完之后再输入 `#` 选择页面里的一个标题，最后修改显示文本。

这样太麻烦了（尤其是有时候想要复制的页面就直接开着！），所以我写了一个 TP 脚本来**快速复制指向标题的链接**。

> [!info] Copy Block Link 插件
> 这个插件也可以实现相同的功能，甚至支持复制指向块的链接。
> 但因为缺少自定义功能，默认的链接文本太长（如上图的第二行），所以还是选择自己写脚本了。

## TP 脚本

```markdown
<%*
// 2024.06.05 增加了对行内代码 inline code 的兼容

function getInlineCode(str, cursor){
    let start = str.lastIndexOf('`', cursor - 1);
    let end = str.indexOf('`', cursor);

    if (start === -1 || end === -1) {
        return null;
    }

    return str.substring(start + 1, end);
}

async function linkHeading() {
  const curView = app.workspace.activeLeaf.view;
  const curFile = curView.file;
  const curEditor = curView.editor;
  const curLine = curEditor.getLine(curEditor.getCursor().line);

  if (!curLine.startsWith('#') || !curLine.includes('# ')) {
    if (!curLine.includes("`")) {
      new Notice("当前光标处没有标题");
      return;
    } else {
      const curCh = curEditor.getCursor().ch;
      let inlineCode = getInlineCode(curLine, curCh)
      if (inlineCode) {
        navigator.clipboard.writeText(inlineCode)
        new Notice("Inline Code Copied!");
        return;
      }
    }
  }

  let selectedHeading = curLine.replace(/#+ /, "#")
  const filename = curFile.name;
  let linkAlias = selectedHeading.replace(/# ?/, "")

  let headingReferenceLink = `[[${filename}${selectedHeading}|${linkAlias}]]`

  navigator.clipboard.writeText(headingReferenceLink)
  new Notice("Heading Copied!");
}

await linkHeading();
%>
```

## 使用方法

在光标位于标题的时候，执行这个 TP 脚本即可复制链接。

为了更省事儿，我用 **Commander** 插件将这个命令加进了右键菜单：

![](Resource/Images/fc89864ab6ae9384e5189f69ab477356.png)

这样可以直接右键点击标题并复制：

![](Resource/Images/df5f8f1645cca621b17f26dfeb530f2f.gif)

## 拓展用法：复制内联代码 ✨

在 OB 内我们有时候会写像是 `print("Hello world")` 这样的内联代码。

但想要复制的时候，还得小心翼翼选中两个 \` 符号中间的文本内容，很麻烦。

所以，干脆给这个脚本额外加了一个功能——

如果对内联代码执行，就会**只复制代码本身内容**。

这样在需要复制 Inline code 的时候就很方便。
