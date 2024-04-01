---
uid: 20240401222254
title: QuickAdd 脚本 - 右键复制文件夹路径
tags:
  - 文件路径
  - quickadd脚本
description: 运行该脚本后可以在在文件列表中鼠标右键复制文件夹路径
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified:
---

# QuickAdd 脚本 - 右键复制文件夹路径

![QuickAdd 脚本 - 右键复制文件夹路径](https://cdn.pkmer.cn/images/202404012223317.png!pkmer)

运行该脚本后可以在在文件列表中鼠标右键复制文件夹路径。

```js
// 获取库的基本路径
const basePath = (app.vault.adapter).getBasePath().replace(/\\/g, '/');

// 添加到右侧菜单
let addi = (menu, param, func) => menu.addItem(i => i.setTitle('复制文件夹/多个文件路径').setIcon('percent').onClick(async () => await func(param)));

let multiFRN = async (menu, items) => addi(menu, items, async items => {
    let files = items.filter(item => item.extension);
    if (!files || files.length === 0) return;
    const paths = files.map(file => `${basePath}/${file.path}`).join('\n');
    copyToClipboard(paths);
});

let folderFRN = async (menu, item) => !item.extension && addi(menu, item, async folder => {
    copyToClipboard(`${basePath}/${folder.path}`);
});

uniReg('files-menu', multiFRN, 0);
uniReg('file-menu', folderFRN, 0);


// 注册事件
function uniReg(str, func, isVault) {
    let place = isVault ? app.vault : app.workspace;
    place._[str].map(ev => String(ev.fn) == String(func) && place.offref(ev));
    app.plugins.plugins.quickadd.registerEvent(place.on(str, func));
};

// 复制文本
function copyToClipboard(extrTexts) {
    const txtArea = document.createElement('textarea');
    txtArea.value = extrTexts;
    document.body.appendChild(txtArea);
    txtArea.select();
    if (document.execCommand('copy')) {
        console.log('copy to clipboard.');
    } else {
        console.log('fail to copy.');
    }
    document.body.removeChild(txtArea);
}
```

## Reference

- [QuickAdd 右键菜单批量重命名文件防止双链断裂 - 经验分享 - Obsidian 中文论坛](https://forum-zh.obsidian.md/t/topic/30232)