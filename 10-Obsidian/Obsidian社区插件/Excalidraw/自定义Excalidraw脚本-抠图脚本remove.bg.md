---
uid: 20240828131108
title: 自定义 Excalidraw 脚本 - 抠图脚本 remove.bg
tags: [图片处理, Excalidraw脚本]
description: 利用 Remove.bg 的 API 在Excalidraw绘图过程中自动去除图像背景
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240828131331
---

# 自定义 Excalidraw 脚本 - 抠图脚本 remove.bg

![24.08.26_自定义Excalidraw脚本-抠图脚本remove.bg.md](https://cdn.pkmer.cn/images/202408281311688.gif)

[Remove.bg](https://www.remove.bg) 是一款在线图像处理工具，专注于快速、高效地去除图像背景。它利用先进的人工智能技术，自动识别图像中的前景和背景，用户只需上传图像，系统便能在几秒钟内生成清晰的无背景图像。

在 Excalidraw 中，可以利用 Remove.bg 的 API 在绘图过程中自动去除图像背景，特别适用于人物角色提取。

Demo：

![24.08.26_自定义Excalidraw脚本-抠图脚本remove.bg.md](https://cdn.pkmer.cn/images/202408281311355.gif!pkmer)

## 设置 API Key

![24.08.26_自定义Excalidraw脚本-抠图脚本remove.bg.md](https://cdn.pkmer.cn/images/202408281311951.png!pkmer)

需要从 [Background Removal API – remove.bg](https://www.remove.bg/zh/api) 中获取 Remove.bg 的 API key 用于此脚本的调用。

![24.08.26_自定义Excalidraw脚本-抠图脚本remove.bg.md](https://cdn.pkmer.cn/images/202408281311619.png!pkmer)

首次运行此脚本会弹出 API key 的输入框以及自动打开 [Background Removal API – remove.bg](https://www.remove.bg/zh/api) 网址，也可以在 Excalidraw 插件设置的 `Settings for installed Scripts` 中手动修改。

![24.08.26_自定义Excalidraw脚本-抠图脚本remove.bg.md](https://cdn.pkmer.cn/images/202408281311386.png!pkmer)

> [!tip]
> 如果设置后，不选中图片也会弹出此输入框

## 支持格式

支持格式有 JPG 和 PNG，请注意，**不支持 10 兆像素以上的 PNG 图像**。如果您需要该尺寸的图像具有透明度，如果您不需要透明则为白色背景。

## 参数

![24.08.26_自定义Excalidraw脚本-抠图脚本remove.bg.md](https://cdn.pkmer.cn/images/202408281311959.png!pkmer)

### 尺寸 (Size)

最大输出图像分辨率，**size**设置为以下值之一：

| 参数        | 说明                                                                                |
| --------- | --------------------------------------------------------------------------------- |
| `auto`    | 使用最高可用分辨率，高达 25 兆像素（例如 6250×4000）（基于图像大小和可用积分）                                    |
| `preview` | 将图像大小调整为 0.25 兆像素（例如 625×400 像素）                                                  |
| `full`    | 使用原始图像分辨率， JPG 格式最高可达 25 兆像素（例如 6250×4000），PNG 格式最高可达 10 兆像素（例如 4000×2500）        |

### 类型 (Type)

检测或设置前景**类型**，建议使用**type = auto**自动检测前景的**类型**。

![24.08.26_自定义Excalidraw脚本-抠图脚本remove.bg.md](https://cdn.pkmer.cn/images/202408281311703.png!pkmer)

**type**设置为以下值之一：

|        参数        | 说明   |
|:--------------: | ---- |
|      `auto`      | 自动检测 |
|      `car`       | 汽车   |
|    `product`     | 产品   |
|     `person`     | 人    |
|     `animal`     | 动物   |
|    `graphic`     | 图形   |
| `transportation` | 交通   |

### 位置 (Position)

抠出来的图片位于原始图片的位置：

| 参数  | 说明           | 示意                                                                                                      |
| :-: | ------------ | ------------------------------------------------------------------------------------------------------- |
| 相邻  | 在原始图片右侧显示    | ![24.08.26_自定义Excalidraw脚本-抠图脚本remove.bg.md](https://cdn.pkmer.cn/images/202408281311133.png!pkmer)<br> |
| 相同  | 在原始图片的原始位置显示 | ![24.08.26_自定义Excalidraw脚本-抠图脚本remove.bg.md](https://cdn.pkmer.cn/images/202408281312953.gif!pkmer)<br> |
| 替换  | 替换原始图像       | ![24.08.26_自定义Excalidraw脚本-抠图脚本remove.bg.md](https://cdn.pkmer.cn/images/202408281312974.gif!pkmer)<br> |

### 透明背景

默认为透明背景，如果不需要则为白底背景。

## 脚本安装

可通过 Excalidraw 插件的脚本代码块 (\`\`\`excalidraw-script-install) 来安装，里面放的是脚本 GitHub 的 RAW 链接，在 Obsidian 中会显示为按钮，脚本更新会自动检测。

> ![24.08.26_自定义Excalidraw脚本-抠图脚本remove.bg.md](https://cdn.pkmer.cn/images/202408281311462.png!pkmer)

````
```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/RemoveBg.md
```
````

将上述代码块放到一个 **md 文件**，阅读模式下该代码块会显示为 <kbd>安装脚本</kbd>的按钮，点击安装之后，更新为<kbd>脚本已是最新 - 点击重新安装</kbd>，即当前脚本已经安装，在 Excalidraw 画布界面的侧边**Obsidian 工具面板**中可以查看。

### 源码 - 仅供参考

```js
/*
 * @Author: 熊猫别熬夜 
 * @Date: 2024-08-26 12:37:13 
 * @Last Modified by: 熊猫别熬夜
 * @Last Modified time: 2024-08-28 11:48:06
 */
let settings = ea.getScriptSettings();
if (!settings["Remove.bg API Key"]?.value) {
  // 自动打开https://www.remove.bg/zh/api网站
  window.open("https://www.remove.bg/zh/api", "_blank");
  const key = await utils.inputPrompt("请在 script settings 中设置Remove.bg API Key", "请在https://www.remove.bg/zh/api中获取API Key");
  settings = {
    "Remove.bg API Key": {
      value: key || "",
      description: "请在https://www.remove.bg/zh/api中获取API Key"
    },
  };
  ea.setScriptSettings(settings);
  return;
}

const fs = require("fs").promises;
const path = require("path");

await ea.addElementsToView();
const imgs = ea.getViewSelectedElements().filter(el => el.type === "image");
if (imgs.length === 0) {
  new Notice("No image found");

  const key = await utils.inputPrompt("Remove.bg API Key", "请在https://www.remove.bg/zh/api中获取API Key", settings["Remove.bg API Key"].value);
  if (!key) return;

  settings = {
    "Remove.bg API Key": {
      value: key,
      description: "请在https://www.remove.bg/zh/api中获取API Key"
    },
  };
  ea.setScriptSettings(settings);
  return;
}

const inputdata = {
  "filePath": "",
  "size": "auto",
  "type": "auto",
  "key": settings["Remove.bg API Key"].value,
  "format": "auto"
};
// 图片清晰度
const sizelist = ['auto', 'preview', 'regular', 'full'];
// 抠图类型
const typeList = ['auto', 'car', 'product', 'person', 'animal', 'graphic', 'transportation'];
const typeList2 = ['自动识别', '汽车', '物品', '人像', '动物', '图形', '交通'];

// 图片位置
const positionList = ['相邻', '相同', '替换'];
let position = positionList[0];
// 图片背景
let isbg = true;
// 配置按钮
const customControls = (container) => {
  // 添加下拉菜单选择格式
  new ea.obsidian.Setting(container)
    .setName(`大小(Size)`)
    .addDropdown(dropdown => {
      sizelist.forEach((item) => {
        dropdown.addOption(item, item);
      });
      dropdown
        .setValue(sizelist[0])
        .onChange(value => {
          inputdata.size = value;
        });
    });
  new ea.obsidian.Setting(container)
    .setName(`类型(Type)`)
    .addDropdown(dropdown => {
      typeList.forEach((item, index) => {
        dropdown.addOption(item, typeList2[index]);
      });
      dropdown
        .setValue(typeList[0])
        .onChange(value => {
          inputdata.type = value;
        });
    });

  new ea.obsidian.Setting(container)
    .setName(`位置(Position)`)
    .addDropdown(dropdown => {
      positionList.forEach((item) => {
        dropdown.addOption(item, item);
      });
      dropdown
        .setValue(positionList[0])
        .onChange(value => {
          position = value;
        });
    });

  new ea.obsidian.Setting(container)
    .setName(`是否透明背景`)
    .setDesc(`设置为透明背景，否则为白底`)
    .addToggle(toggle => {
      toggle
        .setValue(isbg)
        .onChange(value => {
          isbg = value;
        });
    });
};

let isSend = false;
// 创建自定义提示框
const modal = new ea.obsidian.Modal(app);
modal.contentEl.createEl('h2', { text: 'Remove.bg - 抠图' });
customControls(modal.contentEl);
const confirmButton = modal.contentEl.createEl('button', { text: "Confirm" });
// 添加样式使按钮居右
confirmButton.style.float = 'right';
confirmButton.addEventListener('click', async () => {
  isSend = true;
  await modal.close();
});

// 确保modal关闭后判断isSend的状态
await new Promise(resolve => {
  modal.onClose = () => {
    resolve();
  };
  modal.open();
});

if (!isSend) {
  new Notice("❌removebg cancelled");
  return;
}
inputdata.format = isbg ? 'png' : 'jpg';


const notice = new Notice("🔄removebg doing......", 0); // 0 表示通知将一直显示

for (let img of imgs) {
  const imgPath = await ea.plugin.filesMaster.get(img.fileId).path;
  const file = await app.vault.getAbstractFileByPath(imgPath);
  if (!file) {
    new Notice("Can't find file: " + imgPath);
    continue;
  }
  inputdata.filePath = app.vault.adapter.getFullPath(file.path);
  console.log(inputdata);

  // img转为二进制
  const filePath = inputdata.filePath;
  const fileBuffer = await fs.readFile(filePath);
  const fileBlob = new Blob([fileBuffer]);

  // 保存removebg图
  const timestamp = window.moment().format("YYYYMMDDHHmmss");
  let newFileName = `RemoveBg-${timestamp}${path.extname(filePath)}`;
  console.log(newFileName);

  // 调用removebg API去除背景
  const rbgResultData = await removeBg(fileBlob, inputdata);

  // 图形覆盖
  if (position === positionList[2]) {
    await app.vault.adapter.write(imgPath, Buffer.from(rbgResultData));
    await new Promise((resolve) => setTimeout(resolve, 200));
    await app.commands.executeCommandById("obsidian-excalidraw-plugin:save");
    continue;
  }
  const newFilePath = path.join(path.dirname(filePath), newFileName);
  // await app.vault.adapter.write(newFilePath, Buffer.from(rbgResultData));
  await fs.writeFile(newFilePath, Buffer.from(rbgResultData));
  await new Promise((resolve) => setTimeout(resolve, 200));

  // 获取图片在Excalidraw的位置，使removebg图位于它右侧
  let id = await ea.addImage(0, 0, newFileName);
  let el = ea.getElement(id);
  el.width = img.width;
  el.height = img.height;
  el.roundness = img.roundness;
  el.angle = img.angle;
  el.opacity = img.opacity;
  el.link = img.link;
  if (position === positionList[0]) {
    el.x = img.x + img.width + 10;
    el.y = img.y;
  } else if (position === positionList[1]) {
    el.x = img.x;
    el.y = img.y;
  }
  await ea.addElementsToView(false, true);
  await ea.moveViewElementToZIndex(el.id, 99);
}
new Notice("✅removebg done");
notice.hide(); // 操作完成后手动关闭通知

async function removeBg(blob, inputdata) {
  const formData = new FormData();
  formData.append("size", inputdata.size);
  formData.append("type", inputdata.type);
  formData.append("format", inputdata.format);
  formData.append("image_file", blob);
  try {
    const response = await fetch("https://api.remove.bg/v1.0/removebg", {
      method: "POST",
      headers: { "X-Api-Key": inputdata.key },
      body: formData,
    });
    if (response.ok) {
      return await response.arrayBuffer();
    } else {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    new Notice(`❌ Error: ${error.message}`);
    notice.hide(); // 操作完成后手动关闭通知
    throw error; // 重新抛出错误以便上层代码处理
  }
};

```

## 参考资料

- [云托管的在线抠图软件 | remove.bg – remove.bg](https://www.remove.bg/zh/g/developers)
- [Background Removal API – remove.bg](https://www.remove.bg/zh/api#remove-background)

