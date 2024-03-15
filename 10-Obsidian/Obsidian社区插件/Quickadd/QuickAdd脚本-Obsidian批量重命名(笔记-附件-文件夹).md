---
uid: 20240316021039
title: QuickAdd 脚本 -Obsidian 批量重命名 (笔记 - 附件 - 文件夹)
tags:
  - quickadd脚本
  - 批量处理
  - 重命名
description: 批量给笔记、附件、以及文件夹进行重命名
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240316021234
---

# QuickAdd 脚本 -Obsidian 批量重命名 (笔记 - 附件 - 文件夹)

## 背景

这个脚本是用来批量给笔记、附件、以及文件夹进行重命名，主要是针对存在特殊格式文本进行统一化，如果时间 YYYYMMDD 改为 YYYY-MM-DD 之类的，或者批量替换关键词：Quickadd->QuickAdd，给 Excalidraw 笔记添加后缀.excalidraw 等 [^1]，给笔记添加文件的创建时间 (YYYY-MM-DD_) 的前缀，统一附件 (图片) 格式等等操作，也是我为了图方便制作的脚本。

> [!caution]+ 警告
> 对脚本不熟悉的人，请慎重操作，⚠一定要备份好自己的数据！

### obsidian bulk rename 插件

Obsidian 插件市场有批量重命名操作的插件：obsidian bulk rename，我这属于重复造轮子了。

## 操作过程及设计思路

### 重命名

对文件的重命名是利用的 Obsidian 的自带的重命名 API，相当于你手动在 Obsidian 重命名操作一样，关联的笔记会自动更新：

```js
/**
 * Rename or move a file safely, and update all links to it depending on the user's preferences.
 * @param file - the file to rename
 * @param newPath - the new path for the file
 * @public
 */
await app.fileManager.renameFile(file: TAbstractFile, newPath: string)
```

> 支持的对象有：笔记 (md、canvas)、附件 (png、jpg……)、文件夹

### 搜索和替换

批量重命名前的重点是准确的搜索定位以及替换操作，就先从这里开始说明

#### Obsidian 搜索

采用的 Obsidian 的搜索结果来获取需要批量操作的文件，需要复制带有路径的搜索结果：

![2024-03-03_QuickAdd脚本-Obsidian批量重命名(笔记-附件-文件夹)_IMG-1](https://cdn.pkmer.cn/images/202403160212435.png!pkmer)

> [!tip] Obsidian 搜索功能
> Obsidian 自带的搜索功能非常强，可以按文件名 file，路径 path，标签 tag 等检索方式相互组合，但本文主要介绍重命名操作，这里就不详细介绍了，具体可参考官方文档 [Search - Obsidian Help](https://help.obsidian.md/Plugins/Search) 或者 PKMer 内的相关教程。
> ![2024-03-03_QuickAdd脚本-Obsidian批量重命名(笔记-附件-文件夹)_IMG-2](https://cdn.pkmer.cn/images/202403160212436.png!pkmer)

#### 正则替换

除了简单的一些标点符号或者字符串的替换，我们还往往存在比较复杂格式需要替换，就会采取正则替换的方法，这里推荐一个非常好用的正则替换可视化的在线网址：[regex101](https://regex101.com/)。

![2024-03-03_QuickAdd脚本-Obsidian批量重命名(笔记-附件-文件夹)_IMG-3](https://cdn.pkmer.cn/images/202403160212437.png!pkmer)

同样正则语法我也不详细介绍了，可以到 [正则表达式|菜鸟教程](https://www.runoob.com/regexp/regexp-tutorial.html) 了解并学习下。

### 原文件名➡新文件名

在 regex101 中修改完后，我们就获取了**原文件名**和**新文件名**2 组数据了，这时候就可以启用该脚本，首先启动后会依次弹出🟢原文件名、🟡新文件名的输入框，将我们的数据放入文本框即可，即以🟢原文件名➡🟡新文件名的形式改变的名称：

![2024-03-03_QuickAdd脚本-Obsidian批量重命名(笔记-附件-文件夹)_IMG-4](https://cdn.pkmer.cn/images/202403160212439.png!pkmer)

### 确认或取消替换

保险起见，在这之后会显示重名的结果 (🟢原文件名➡🟡新文件名)，可以取消个别文件的重命名，**Submit** 提交之后就会开始重命名了：

![2024-03-03_QuickAdd脚本-Obsidian批量重命名(笔记-附件-文件夹)_IMG-5](https://cdn.pkmer.cn/images/202403160212440.png!pkmer)

> [!caution] 🔴批量操作前一定要注意备份数据！
> 1. 一定要备份好自己的数据！！！
> 2. 一定要备份好自己的数据！！！
> 3. 一定要备份好自己的数据！！！

### 日志文件

重命名完成后会生成一个 RenameChangeLog.md 的日志文件，默认在根目录：

![2024-03-03_QuickAdd脚本-Obsidian批量重命名(笔记-附件-文件夹)_IMG-6](https://cdn.pkmer.cn/images/202403160212441.png!pkmer)

#### 撤销上一步操作

如果想撤销上一步操作，在 RenameChangeLog 文件中将 `♻newFilePaths` 作为 `🟢原文件名`，`🕓oldFilePaths` 作为 `🟡新文件名` 来操作，即：`♻newFilePaths➡🕓oldFilePaths`

#### 设置日志路径

如果想切换位置请在 QuickAdd 里面进行设置，注意嵌套文件使用 `/` 分隔：

![2024-03-03_QuickAdd脚本-Obsidian批量重命名(笔记-附件-文件夹)_IMG-7](https://cdn.pkmer.cn/images/202403160212442.png!pkmer)

具体操作如下所示：

![2024-03-03_QuickAdd脚本-Obsidian批量重命名(笔记-附件-文件夹)_IMG-8](https://cdn.pkmer.cn/images/202403160212443.gif!pkmer)

## 系统外部操作

该脚本支持绝对路径的替换，即你在系统外复制文件路径并修改后也可以进行操作，这里我是借助专业软件 (eg:ReNamer) 在系统文件夹中重命名，这样不仅支持正则替换，还支持排序，插入文件的创建时间等等更加复杂重命了：

![2024-03-03_QuickAdd脚本-Obsidian批量重命名(笔记-附件-文件夹)_IMG-9](https://cdn.pkmer.cn/images/202403160212444.png!pkmer)

### 复制结果

用软件修改后，需要显示原始路径和新路径，操作如下，右键下拉菜单中勾选 `路径` 和 `新路径`：

![2024-03-03_QuickAdd脚本-Obsidian批量重命名(笔记-附件-文件夹)_IMG-10](https://cdn.pkmer.cn/images/202403160212445.png!pkmer)

复制结果到剪切板：

![2024-03-03_QuickAdd脚本-Obsidian批量重命名(笔记-附件-文件夹)_IMG-11](https://cdn.pkmer.cn/images/202403160212446.png!pkmer)

粘贴到 Excel 表格里面，就可以获取到原始路径和新路径的结果了：

![2024-03-03_QuickAdd脚本-Obsidian批量重命名(笔记-附件-文件夹)_IMG-12](https://cdn.pkmer.cn/images/202403160212447.png!pkmer)

接下来的操作就一样了：

![2024-03-03_QuickAdd脚本-Obsidian批量重命名(笔记-附件-文件夹)_IMG-13](https://cdn.pkmer.cn/images/202403160212448.png!pkmer)

## QuickAdd Macro 脚本

```js
const path = require("path");
// 在Obsidian中导入QuickAdd的API
const quickaddApi = app.plugins.plugins.quickadd.api;

module.exports = {
    entry: async (QuickAdd, settings, params) => {
        // 输入界面
        const oldFileNames = await quickaddApi.wideInputPrompt("🟢原文件名", "注意文件路径必须要有后缀");
        if (!oldFileNames) return;
        const newFileNames = await quickaddApi.wideInputPrompt("🟡新文件名", "注意文件路径必须要有后缀");

        let oldFileNamesArray = oldFileNames.split("\n");
        let newFileNamesArray = newFileNames.split("\n");

        // 获取库的基本路径
        const basePath = (app.vault.adapter).getBasePath().replace(/\\/g, '/');
        //  转义路径中的反斜杠为斜杠 去除数组中包含库的基本路径
        oldFileNamesArray = oldFileNamesArray.map(fileName => fileName.replace(/\\/g, '/').replace(`${basePath}/`, ''));
        newFileNamesArray = newFileNamesArray.map(fileName => fileName.replace(/\\/g, '/').replace(`${basePath}/`, ''));
        if (oldFileNamesArray.length !== newFileNamesArray.length) return;

        const changeItems = oldFileNamesArray.map((oldFileName, index) => {
            const oldFileNameWithoutPath = path.basename(oldFileName);
            const newFileNameWithoutPath = path.basename(newFileNamesArray[index]);
            return `${oldFileNameWithoutPath}⏩${newFileNameWithoutPath}`;
        });

        // 重新检查一下
        let selectedItems = [];
        selectedItems = await quickaddApi.checkboxPrompt(changeItems, changeItems);
        if (!selectedItems) return;
        console.log(selectedItems);

        const selectedIndexes = selectedItems.map(item => {
            const oldFileNameWithoutPath = item.split('⏩')[0];
            return oldFileNamesArray.findIndex(newFileName => path.basename(newFileName) === oldFileNameWithoutPath);
        }).filter(index => index !== -1);

        console.log(selectedIndexes);

        oldFileNamesArray = selectedIndexes.map(index => oldFileNamesArray[index]);
        newFileNamesArray = selectedIndexes.map(index => newFileNamesArray[index]);

        let changeOldFiles = [];
        let changeNewFiles = [];
        // 记录报错的文档路径到 bugFilePaths
        let bugFilePaths = [];

        for (let i = 0; i < oldFileNamesArray.length; i++) {
            const oldFileName = oldFileNamesArray[i];
            const newFileName = newFileNamesArray[i];
            console.log([oldFileName, newFileName]);
            if (oldFileName === newFileName) continue;
            // 如果app.fileManager.renameFile报错请continue，并报出 oldFileName 以及对应的错误，应该是库中文件名有重复的了
            try {
                await app.fileManager.renameFile(app.vault.getAbstractFileByPath(oldFileName), newFileName);
                changeOldFiles.push(oldFileName);
                changeNewFiles.push(newFileName);
            } catch (error) {
                new Notice(`❌${oldFileName}重命名出现错误，已记录到Log\n\n${error}\n\n`);
                bugFilePaths.push(oldFileName);
                continue;
            }
        }

        // 生成记录的markdown的RenameChangeLog.md，记录到 bugFilePaths
        const timstamp = quickaddApi.date.now("YYYY-MM-DD_HH-mm");
        const logContent = `## ${timstamp}\n\n### ❌bugFilePaths\n\n\`\`\`\n${bugFilePaths.join("\n")}\n\`\`\`\n\n### 🕓oldFilePaths\n\n\`\`\`\n${changeOldFiles.join("\n")}\n\`\`\`\n\n### ♻newFilePaths\n\n\`\`\`\n${changeNewFiles.join("\n")}\n\`\`\`\n\n`;

        // ! 配置RenameChangeLo路径
        let renameLogPath = settings["RenameChangeLogPath"];
        let file = app.vault.getAbstractFileByPath(renameLogPath);
        if (file) {
            await app.vault.append(file, logContent);
        } else {
            await app.vault.create(renameLogPath, logContent);
        }
        new Notice("✅替换完成");
    },
    settings: {
        name: "Obsidian-Bulk-Rename",
        author: "熊猫别熬夜",
        options: {
            "RenameChangeLogPath": {
                type: "text",
                defaultValue: "RenameChangeLog.md",
                description: "设置批量重命名修改记录文件路径，嵌套文件夹请用/符号",
            },
        }
    },
};�
```
