---
uid: 20240323225915
title: 熊猫别熬夜 Excalidraw 脚本汇总介绍
tags:
  - Excalidraw脚本
description: 熊猫别熬夜 Excalidraw 脚本汇总 - 自动检测更新
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240323225915
---

# 熊猫别熬夜 Excalidraw 脚本汇总介绍

[熊猫别熬夜的 Excalidraw 代码片段](https://github.com/PandaNocturne/ExcalidrawScripts)，可通过 Excalidraw 插件的脚本代码块 (\`\`\`excalidraw-script-install) 来安装，里面放的是脚本 GitHub 的 RAW 链接，在 Obsidian 中会显示为按钮，脚本更新会自动检测：

![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-1](https://cdn.pkmer.cn/images/202404012157053.png!pkmer)

````md
```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/README.md
```
````

脚本的详细介绍：[[Excalidraw如何安装脚本_脚本设置介绍]]

---

脚本安装可以根据源码来安装，也可以通过 Excalidraw 插件提供的脚本安装代码块来安装

- 代码块链接方法：
	- 优点：一键安装脚本和图标，操作方便，后续脚本更新可以检测
	- 缺点：国内需要可访问 GitHub 的网络
- 源码拷贝方式：
	- 优点：不需要特殊网络
	- 缺点：需要手动复制源码，这个过程很容易出问题，没有图标，脚本更新无法检测…

> PS：之后我的脚本更新或者 BUG 修复，可能不会更新到网站，而是直接更新到 GitHub，因为这样对我来说比较方便点而且快速点。

## PandaScripts 脚本简单介绍

> [[obsidian-excalidraw-plugin|Obsidian 插件：Excalidraw 完美的绘图工具]]

## 实用脚本

### QuickSwitchFrame

```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/QuickSwitchFrame.md
```

- Author：熊猫别熬夜
- PKMerDoc：[[自定义Excalidraw脚本-QuickSwitchFrame-简单的Frame切换大纲]]
- Description：提供一个 Frame 边框切换的提示框。
	- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-2](https://cdn.pkmer.cn/images/202404012157054.gif!pkmer)

### ExcalidrawGlobalSearch

```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/ExcalidrawGlobalSearch.md
```

- Author：熊猫别熬夜
- Doc：[[自定义Excalidraw脚本-画板全文搜索]]
- Description：实现 Excalidraw 画板的💬文本、🖼图片 OCR、📝嵌入文档的全文搜索
	- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-3](https://cdn.pkmer.cn/images/202404012157056.gif!pkmer)

## 文档编辑

### QuickerInsertZKCard

```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/QuickerInsertZKCard.md
```

- Author：熊猫别熬夜
- PKMerDoc：[自定义 Excalidraw 脚本 - 快速插入时间戳笔记](https://pkmer.cn/show/20231110162417)
- Description：快速插入或删除时间戳笔记
	- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-4](https://cdn.pkmer.cn/images/202404012157057.png!pkmer)
	- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-5](https://cdn.pkmer.cn/images/202404012157058.gif!pkmer)
	- 选择或框选笔记后，再次运行脚本就可以删除本地笔记和画板元素了
		- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-6](https://cdn.pkmer.cn/images/202404012157059.gif!pkmer)
- ChangeLog：
	- 2024-03-27_02:55：添加创建 DrawIO 的 SVG 矢量图，默认不会自动打开，可以配合 OpenSelectImage 脚本来打开文件。
		- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-7](https://cdn.pkmer.cn/images/202404012157060.gif!pkmer)
		- Tip：选中第 2 次运行同样可以删除文件，也可以用 OpenSelectImage 删除。

### AddMermaidSvg

```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/AddMermaidSvg.md
```

- Author：一鸣惊人
- PKMerDoc：[[自定义Excalidraw脚本-插入可以编辑的Mermaid图形]]
- Description：插入可以二次编辑的 Mermaid 矢量图
	- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-8](https://cdn.pkmer.cn/images/202404012157061.gif!pkmer)
	- `Ctrl + 鼠标左键单击` 可以弹出源码：
		- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-9](https://cdn.pkmer.cn/images/202404012157062.gif!pkmer)

### NumberMode

```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/NumberMode.md
```

- Author：熊猫别熬夜
- PKMerDoc：[自定义 Excalidraw 脚本 - 双击添加圆圈编号](https://pkmer.cn/show/20240221010235)
- Description：编号模式，双击添加或编辑编号
	- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-10](https://cdn.pkmer.cn/images/202404012157063.gif!pkmer)
		- ✅已启动编号模式，双击添加 num
		- ⏩双击 num 可以重新编辑编号
		- ⏹再次运行脚本即可退出编号模式

> 这个非常好用，简单但实用

### AddTagsByModalForm

```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/AddTagsByModalForm.md
```

- Author：熊猫别熬夜
- PKMerDoc：[[自定义Excalidraw脚本-给Excalidraw添加标签]]
- Description：借助 Modal Form 插件的表单，给 Excalidraw 画板内的文本添加标签。
	- ![自定义Excalidraw脚本-给Excalidraw添加标签_IMG-1](https://cdn.pkmer.cn/images/202404281330829.gif!pkmer)
## MindMap

- [[自定义Excalidraw脚本-修改MindMap Format设置思维导图Frame容器]]

## 图片处理

### OpenSelectImage

```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/OpenSelectImage.md
```

- Author：熊猫别熬夜
- PKMerDoc：[[自定义Excalidraw脚本-默认应用打开图片]]
- Description：设定默认或其他软件打开图片
	- 在 Excalidraw 插件设置里面可以设置参数，除了默认应用打开外，还可以自定义多个不同软件打开
	- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-11](https://cdn.pkmer.cn/images/202404012157064.png!pkmer)
	- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-12](https://cdn.pkmer.cn/images/202404012157065.png!pkmer)
- ChangeLog：
	- 2024-03-26_12:07：添加删除图片的选项
		- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-13](https://cdn.pkmer.cn/images/202404012157066.gif!pkmer)
	- 2024-03-27_02:53：
		- 添加修改设置选项，可在编辑修改外部软件设置
			- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-14](https://cdn.pkmer.cn/images/202404012157067.gif!pkmer)
		- 添加图片重命名选项，可以来重命名或移动图片

### TextExtractor

```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/TextExtractor.md
```

- Author：熊猫别熬夜
- PKMerDoc：[[自定义Excalidraw脚本-OCR自动提取图片文字]]
- Description：使用 Text Extractor 插件或者本地 Paddleocr 模型批量识别画板中的图片到 Yaml 区，可编辑修改。
	- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-15](https://cdn.pkmer.cn/images/202404012157068.gif!pkmer)
	- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-16](https://cdn.pkmer.cn/images/202404012157069.png!pkmer)
- ChangeLog：
	- 2023-12-29：
		- 优化 OCR 识别文本的 Yaml 数据结构存储
		- 修复修改文本后不同步问题
	- 2024-03-02：
		- 添加当编辑 Frame 名称后，会将名称添加到 Yaml 的 aliases 属性中，方便通过别名来定位 Excalidraw 内的标题

### AdjustImageSize

```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/AdjustImageSize.md
```

- Author：一鸣惊人，熊猫别熬夜
- PKMerDoc：[[自定义Excalidraw脚本-AdjustImageSize-统一多个图片宽度或者高度]]
- Description：用于调整多个图片 (image)、矩形框 (rectangle)、Frame 边框的大小，以选中的元素的最大宽度 (高度) 或者最小宽度 (高度) 进行统一缩放，分别有 `等宽缩放`、`等高缩放`、`完全相等` 这 3 个选项。
	- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-17](https://cdn.pkmer.cn/images/202404012157071.gif!pkmer)

> 这个非常好用，简单但实用

### UploadImageToPicGo

```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/UploadImageToPicGo.md
```

- Author：熊猫别熬夜
- PKMerDoc： [[自定义Excalidraw脚本-上传画板中的图片到图床]]
- Description：将 Excalidraw 画板中引用的图片直接上传到 PicGo 的 Server 后并删除本地文件 (可不删除)
	- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-18](https://cdn.pkmer.cn/images/202404012157072.gif!pkmer)
	- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-19](https://cdn.pkmer.cn/images/202404012157073.png!pkmer)

### SaveSelectAsLocalePng

```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/SaveSelectAsLocalePng.md
```

- Author：熊猫别熬夜
- PKMerDoc：[[自定义Excalidraw脚本-将选中元素为PNG或者SVG格式文件到本地]]
- Description：将选中的元素保存为 PNG 或者 SVG 格式本地文件，相当于网页版 Excalidraw 的导出仅选中图片。
	- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-20](https://cdn.pkmer.cn/images/202404012157074.gif!pkmer)

## 画布演示

### playExcalidrawAnimation

```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/playExcalidrawAnimation.md
```

- Author：熊猫别熬夜
- PKMerDoc：[[自定义Excalidraw脚本-画板局部或者全局播放动画]]
- Description：逐步显示 Excalidraw 画板的元素
	- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-21](https://cdn.pkmer.cn/images/202404012157075.png!pkmer)
	- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-22](https://cdn.pkmer.cn/images/202404012157076.gif!pkmer)
	- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-23](https://cdn.pkmer.cn/images/202404012157077.gif!pkmer)

### FrameKanban

```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/FrameKanban.md
```

- Author：熊猫别熬夜
- PKMerDoc：[[自定义Excalidraw脚本-画板与 Kanban 得梦幻结合-像PPT一样演示]]
- Description：配合 Kanban 插件生成画板的 Frame 缩略图或者线型大纲
	- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-24](https://cdn.pkmer.cn/images/202404012157078.png!pkmer)
- ChangeLog：
	- 2024-03-02：
		- 添加缩略图是否添加连接选项，参数修改为中文注释
			- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-25](https://cdn.pkmer.cn/images/202404012157079.png!pkmer)
		- 排序时会将 Frame 名称添加到文档的 aliases 区 (添加文档别名方便搜索)
	- 2024-03-06：
		- 当选中一个 Frame 时，不再弹出选项框，而是更新 frame 大纲 (无缩略图)
		- 添加设置 Kanban 宽度选项 ->可以随时调整宽度

> 推荐配合另一个脚本 QuickSwitchFrame 使用。

## 外部联用

### ZoteroToExcalidraw

```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/ZoteroToExcalidraw.md
```

- Author：熊猫别熬夜
- PKMerDoc： [[自定义Excalidraw脚本-实现Zotero与Excalidraw的拖拽联动]]
- Description：实现 Zotero 标注文本或者图片通过拖拽或者复制粘贴的形式添加到 Excalidraw 画板中
	- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-26](https://cdn.pkmer.cn/images/202404012157080.png!pkmer)
- ChangeLog：
	- 2023-10-17：添加可以匹配 Zotero 标注颜色的设置
	- 2024-03-22：可以通过复制粘贴形式来添加
	- 2024-04-01：修复 Page=NaN 的格式问题

> Zotero 与 Obsidian 的 md 笔记的联动，参考 Quikcer 动作：
> - [[Quicker动作之自定义Zotero标注到Obsidian]]
> 	- [ZoteroToObsidian - by 熊猫别熬夜 - 动作信息 - Quicker](https://getquicker.net/Sharedaction?code=b7727e44-4933-4ec5-8103-08dbc1cb1ea7)
> 	- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-27](https://cdn.pkmer.cn/images/202404012157081.png!pkmer)

### BookxnoteToExcalidraw

```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/BookxnoteToExcalidraw.[]
```

- Author：熊猫别熬夜
- PKMerDoc：[[自定义Excalidraw脚本-实现Excalidraw与BookxNote的联动]]
- Description：联动 Bookxnote 与 Excalidraw
	- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-28](https://cdn.pkmer.cn/images/202404012157082.gif!pkmer)

> Bookxnote pro 与 Obsidian 的 md 笔记的联动，参考 Quikcer 动作：
> - [[Quicker动作之BookxNote和Obsidian联动]]
> 	- [BookxNoteToObsidian - by 熊猫别熬夜 - 动作信息 - Quicker](https://getquicker.net/Sharedaction?code=2bd5ec90-db36-49d4-51b3-08db7dd91f1a)
> 	- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-29](https://cdn.pkmer.cn/images/202404012157083.png!pkmer)

### EagleToExcalidraw

```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/EagleToExcalidraw.md
```

- Author：熊猫别熬夜
- PKMerDoc：[[自定义Excalidraw脚本-建立库外Eagle素材库的连接]]
- Description：实现 Eagle 与 Excalidraw 的联动，可导入素材并定位到 Eagle 具体位置，暂时还没做发送 Excalidraw 的图片到 Eagle。

> Zotero 与 Eagle 的联动我也有一点尝试：
> - [[Quicker动作之发送Zotero图片标注至Eagle素材库]]：
> 	- [ZoteroToEagle - by 熊猫别熬夜 - 动作信息 - Quicker](https://getquicker.net/Sharedaction?code=85b92307-2003-47bd-afea-08dc426a44c3)
> 	- ![2024-03-06_熊猫别熬夜Excalidraw脚本汇总-Excalidraw自动检测更新_IMG-30](https://cdn.pkmer.cn/images/202404012157084.png!pkmer)
