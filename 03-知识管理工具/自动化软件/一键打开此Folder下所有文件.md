---
uid: 20250121203615
title: 一键打开此Folder下所有文件
tags: ["quickadd","脚本"]
description: 用于一键打开当前文件所在目录下的，所有Markdown文件
author: Vincent
type: advanced
draft: false
editable: false
modified: 20250121203953
---

# 一键打开此 Folder 下所有文件

## 一、此脚本产生的背景，解决的问题
![Pasted image 20250121204544](https://cdn.pkmer.cn/images/202501222237215.png!pkmer)

1.  场景：我打开了一个Markdown文件；如上图，我们打开一个，是当前激活文档
2.  需求：此时，我们还要直接打开其他，此文件夹下面所有的文档
3.  用处：快速查看这一类的文件，因为我们的文件夹，一般都是我们自己进行过初步整理，命名了
4.  我的操作：我用于复习，我觉得某个文件夹里的内容，我有些忘记了，我会全部打开，直接复习，一个个看，看完一个就ctrl + W关闭一下
5.  脚本的原因： 因为系统没这个命令
6.  脚本的结果： 把这个需求 ，做到系统命令里面了的，如下图
![Pasted image 20250121204914](https://cdn.pkmer.cn/images/202501222237216.png!pkmer)


## 二、 使用需要的条件
1. 脚本文件，就是一个 .js文件，由我提供, ，即如下的代码，存为 "XXXX.js"  ； 比如我的是：”打开当前文件所在文件夹目录下所有md文件.js“
2. quickadd插件

```js
module.exports = async function (params) {
    const { app } = params;

    // 获取当前激活的文件
    const currentFile = app.workspace.getActiveFile();

    if (currentFile) {
        // 获取当前文件的路径
        const filePath = currentFile.path;

        // 获取当前文件所在的文件夹路径
        const folderPath = filePath.split("/").slice(0, -1).join("/");

        // 如果当前文件在根目录下，则忽略
        if (folderPath === "") {
            console.log("当前文件在根目录下，忽略操作。");
        } else {
            // 获取指定文件夹下的所有文件，并过滤出 .md 文件
            const filesInFolder = app.vault.getFiles().filter(file => {
                return (
                    file.path.startsWith(folderPath + "/") && // 在目标文件夹下
                    !file.path.slice(folderPath.length + 1).includes("/") && // 忽略子文件夹
                    file.extension === "md" // 只保留 .md 文件
                );
            });

            // 输出符合条件的文件
            if (filesInFolder.length > 0) {
                console.log("符合条件的文件：", filesInFolder.map(file => file.name));

                // 获取当前已经打开的文件
                const openedFiles = app.workspace.getLeavesOfType("markdown").map(leaf => leaf.view.file);

                // 打开所有符合条件的 .md 文件（如果未打开）
                for (const file of filesInFolder) {
                    if (!openedFiles.includes(file)) { // 如果文件未打开
                        await app.workspace.openLinkText(file.path, "", true); // 打开文件
                    }
                }
            } else {
                console.log("该文件夹下没有符合条件的 .md 文件。");
            }
        }
    } else {
        console.log("没有找到当前激活的文件。");
    }
};
```

### 三、 如下截图，是 相关设置   

![Pasted image 20250121205536](https://cdn.pkmer.cn/images/202501222237217.png!pkmer)

![Pasted image 20250121205728](https://cdn.pkmer.cn/images/202501222237218.png!pkmer)




