---
uid: 20240613090057
title: 关于使用 QuickAdd 脚本实现按创建时间归档 Obsidian 附件的方案
tags: [附件管理, quickadd脚本]
description: 使用 QuickAdd 脚本实现按创建时间归档 Obsidian 附件的方案
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240613090509
---

# 关于使用 QuickAdd 脚本实现按创建时间归档 Obsidian 附件的方案

> [!caution] 实验性脚本，对库的变动较大，谨慎使用，旨在为有该需求的人提供方法


Obsidian 的附件管理一直是个难题。我目前采用指定的附件文件夹来管理附件，并尽可能简短地使用 WIKI 链接。然而，一个文件夹里已经有七千多张图片，每次打开都令人头疼。

![2024-06-13_055036 关于使用QuickAdd脚本实现按创建时间归档Obsidian附件的方案](https://cdn.pkmer.cn/images/202406131002626.png!pkmer)

我考虑采用 PKMer 群友之前讨论的，按照 `YYYY/YYYY-MM-DD` 的方式归档附件。但在 Obsidian 的插件市场中，似乎没有直接这个方法的附件管理插件。因此，我尝试使用 QuickAdd 脚本，以附件的创建时间为基础，进行文件夹分类归档，调用的是 Obsidian 自带的 API 进行文件移动，这样，附件链接会自动更新。实现效果如下：

![2024-06-13_055036 关于使用QuickAdd脚本实现按创建时间归档Obsidian附件的方案](https://cdn.pkmer.cn/images/202406131002190.gif!pkmer)

脚本的配置选项：

![2024-06-13_055036 关于使用QuickAdd脚本实现按创建时间归档Obsidian附件的方案](https://cdn.pkmer.cn/images/202406131002660.png!pkmer)

- **自定义文件夹**：为空则为 Obsidian 默认设置，也可以自定义路径
	- PS: 针对该文件夹路径下 (不包含子文件夹) 的符合**文件类型 (file type)**的文件进行归档。
- **归档日期格式**：`YYYY/YYYY-MM-DD`，可以预览
	- ![2024-06-13_055036 关于使用QuickAdd脚本实现按创建时间归档Obsidian附件的方案](https://cdn.pkmer.cn/images/202406131002984.png!pkmer)
- **文件类型**：默认为：`png|jpe?g|webp|mp[3,4]|pdf`
	- 文件后缀类型，不同类型用|分隔，不区分大小写。
- **自启动设置**：可以在 QuickAdd 的 Macro Manager 设置自启动。
	- ![2024-06-13_055036 关于使用QuickAdd脚本实现按创建时间归档Obsidian附件的方案](https://cdn.pkmer.cn/images/202406131002367.png!pkmer)

## QuickAdd Macro 脚本

脚本配置流程：

![2024-06-13_055036 关于使用QuickAdd脚本实现按创建时间归档Obsidian附件的方案](https://cdn.pkmer.cn/images/202406131002864.png!pkmer)

```js
module.exports = {
  entry: async (QuickAdd, settings, params) => {
    // 获取默认配置
    const fs = require('fs');
    const path = require('path');
    // 获取库的基本路径
    const basePath = (app.vault.adapter).getBasePath();

    // 日期格式
    const dateFormat = settings["归档日期格式(date format)"].replace("{{DATE:", "").replace("}}", "");

    // 获取设置的指定附件文件夹路径：
    // const assetsPath = "900【素材】Assets/910_ObsidianAssets";
    let assetsPath = app.vault.config.attachmentFolderPath;
    if (settings["自定义文件夹(custom folder path)"]) {
      assetsPath = settings["自定义文件夹(custom folder path)"];
    }

    const assetsPathFull = basePath + "/" + assetsPath;
    console.log(assetsPathFull);

    // 获取该路径下所有附件：
    const assetsList = fs.readdirSync(assetsPathFull).filter(file => {
      const ext = path.extname(file).toLowerCase();
      // 使用正则表达式来匹配文件扩展名：
      // 如果 settings["文件类型(Custom folder path)"] 为空值，则匹配所有文件类型
      const regexMatch = new RegExp("\\.(" + (settings["文件类型(Custom folder path)"] || ".+") + ")$", "i");
      return regexMatch.test(ext);
    }).map(file => assetsPath + "/" + file);

    console.log(assetsList);

    // 批量获取创建日期并用ob的API移动附件
    assetsList.forEach(async (filePath) => {
      const ctime = app.vault.getAbstractFileByPath(filePath).stat["ctime"];
      // const ctime = fs.statSync(filePath).ctime;
      const formattedDatePath = assetsPath + "/" + moment(ctime).format(dateFormat);
      console.log(formattedDatePath);
      if (!app.vault.getFolderByPath(formattedDatePath)) {
        app.vault.createFolder(formattedDatePath);
      }

      // 移动附件
      const destinationPath = path.join(formattedDatePath, path.basename(filePath));
      await app.fileManager.renameFile(app.vault.getAbstractFileByPath(filePath), destinationPath);

    });
    new Notice(`🔊${assetsList.length}个附件归档已完成`);
  },
  settings: {
    name: "按创建时间归档Obsidian附件",
    author: "熊猫别熬夜",
    options: {
      "自定义文件夹路径(custom folder path)": {
        type: "text",
        defaultValue: "",
        description: "如果为空则为Obsidian默认附件存放路径"
      },
      "归档日期格式(date format)": {
        type: "format",
        defaultValue: "{{DATE:YYYY/YYYY-MM/YYYY-MM-DD}}",
        description: "如果想以文件类型分类，可以配置{{DATE:[图形文件]YYYY/YYYY-MM-DD}}、{{DATE:[视频文件]YYYY/YYYY-MM-DD}}",
      },
      "文件类型(file type)": {
        type: "text",
        defaultValue: "png|jpe?g|webp|gif|mp[34]|pdf",
        description: "文件后缀类型，不同类型用|分隔，不区分大小写，如果为空值则默认全部附件。"
      }
    }
  }
};
```

## 拓展方法：Python 附件归档

不过需要注意的是，QuickAdd 的方法一次性只能处理少量附件，要处理大量附件的话可能会需要用很长时间，除了使用 QuickAdd 之外，还可以通过 Python 脚本实现附件归档。但该方式是在库外移动文件位置，这样会导致链接失效。如果您的库全部使用的是简短的 WIKI 链接格式，这种方法可以初步更快地进行归档，在修改后重启 Obsidian 就能修复，之后可以采用第一种方法。

> [!caution] Python 脚本是库外移动文件，会导致链接失效，不推荐使用

保存为 `00_ObsidianAssets.py` 存放在 Obsidian 默认附件文件夹。

```Python
import os
import shutil
from datetime import datetime

# 获取当前文件夹路径
current_dir = os.getcwd()

# 遍历当前文件夹下的所有文件
for file_name in os.listdir(current_dir):
    if file_name.lower().endswith(('.jpg', '.jpeg', '.png', '.pdf')):
        file_path = os.path.join(current_dir, file_name)
        # 获取文件的创建日期
        create_time = datetime.fromtimestamp(os.path.getctime(file_path))
        folder_name = create_time.strftime('%Y/%Y-%m/%Y-%m-%d')
        folder_path = os.path.join(current_dir, folder_name)

        # 创建文件夹
        os.makedirs(folder_path, exist_ok=True)

        # 移动文件到对应的文件夹
        shutil.move(file_path, os.path.join(folder_path, file_name))

```

可以设置 `.bat` 进行运行：

```cmd
@echo off
python "%cd%\00_ObsidianAssets.py"
exit
```