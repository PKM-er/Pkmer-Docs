---
uid: 20231218063354
title: 关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案
tags: [Mermaid, 流程图工具, Diagram]
description: 在 Obsidian 中使用 draw.io 编辑流程图和思维导图的介绍
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240122222910
---

# 关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案

在 Obsidian 中使用 draw.io 编辑流程图和思维导图非常简单。与使用 Mermaid 语法来生成流程图不同，使用 draw.io 可以直接通过图形编辑来创建和编辑流程图和思维导图。不需要学习和记忆复杂的语法规则，只需通过直观的拖拽和连接操作即可创建自己想要的图形。编辑完成后，可以将绘制的流程图和思维导图保存在 Obsidian 中一般文件 SVG 格式，可以随时查看和二次编辑。

同时 [Draw.io](https://www.drawio.com/) 支持网页版及客户端使用，可以在 Windows、MacOS 和 Linux 系统上都进行操作。

![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636933.png!pkmer)

- Github 链接：<https://github.com/jgraph/drawio-desktop>
- 官方的教程链接：<https://www.diagrams.net/doc/>

虽然不能像 Excalidraw 那样嵌入 Obsidian 的链接和笔记 (严格的说可以做到，但是很麻烦)，但是用来画流程图和思维导图还是够用的。

## 基础界面设置

在 Diagram 的侧边选项中，可以打开**形状**、**格式**、**标尺**，以及 **图层**、**缩略图**的选项。

> [!tip] 其他地方打开图层和缩略图
> ![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636935.png!pkmer)

![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636936.png!pkmer)

### 形状

可以通过点击 更多图形来添加更多形状：

![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636937.png!pkmer)

### 样式

全局的布局样式调整：

![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636939.png!pkmer)

局部块元素演示调整：

![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636940.png!pkmer)

### 图层

可以对不同的图形添加图层，上下移动设置图层的上下层关系，以及可以隐藏图层。

![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636941.gif!pkmer)

### 缩略图

可以通过移动缩略图的来移动窗口的视图，鼠标滚轮可以控制缩放大小。

![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636942.png!pkmer)

### 页面管理

![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636943.png!pkmer)

界面下方可以通过**单击 + 号**或者鼠标右键页面可以复制当前页面来添加不同的页面，页面之间相互独立不会干扰。

![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636944.gif!pkmer)

## 快捷键说明

> [!tip] [官方快捷键链接diagrams.net)](https://viewer.diagrams.net/#Uhttps%3A%2F%2Fviewer.diagrams.net%2Fshortcuts.svg)
> ![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636945.png!pkmer)

补充一些常用的图形快捷键：

|    形状    | 快捷键 |
| :--------: | :----: |
|    矩形    |   D    |
|   椭圆形   |   F    |
|    菱形    |   R    |
|    线条    |   C    |
| 备注 (note) |   S    |
|    文本    |   A    |
| 链接 (link) |   L    |
|  自由绘图  |   X    |

其他常用的选择快捷键：

- `Alt + Shift + X`：选择所有**子集**
- `Ctrl + Shift +I/E`：选择所有**点**/**边**
- `Ctrl+Shift+Y`：自动调整尺寸

## 快速插入 Diagram 布局类型

> 官方链接：[Apply layouts to rearrange a diagram (drawio.com)](https://www.drawio.com/doc/faq/apply-layouts)

在**调整图形 ->布局**中里面，可以快速插入不同类型的布局

![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636947.png!pkmer)

### Flow layouts

流程布局非常适合可视化流程、思维导图或任何类型的具有类似流程结构或运动的图表，水平和垂直流布局都清晰易读。

![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636948.png!pkmer)

### Tree layouts

水平树、垂直树、径向图

![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636949.png!pkmer)

### Circle layout(环形布局)

![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636950.png!pkmer)

### Organic layout (组织结构图)

组织结构图 (Org chart layouts) 有几种不同类型的组织结构图布局：线性、衣架、鱼骨、单列和智能。

在调整图形=>布局=>组织机构图插入，会弹出如下选项框，可以选择不同的布局：

![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636951.png!pkmer)

例如：

![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636952.gif!pkmer)

### Parallels layout(平行布局)

当多条线段重合时，应用平行布局 (Parallels layout) 以显示和分离形状之间重叠的连接器。

![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636953.gif!pkmer)

## 如何在容器内创建布局

上面所说的布局其实可以在容器中进行设置，其实在形状面板的高级选项里面，就有一些常用的布局模板：

![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636954.png!pkmer)

在 Diagram 中有**快捷键 `Ctrl + E`** 是编辑样式命令，可以编辑容器的样式代码：

![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636955.png!pkmer)

容器的定义是 `swimlane;`

- `swimlane;`：容器声明
- `startSize`：容器标题栏的宽度
	- eg：`startSize=20;` 设置标题栏宽度为 20，`startSize=0;` 相当于隐藏标题栏
- `horizontal`
	- `horizontal=0;` 垂直标题的容器；`horizontal=1;` 水平标题的容器；
- `resizable`：控制容器是否可以折叠
	- `resizable=1;` 可以折叠、`resizable=0;` 不可折叠，默认是可折叠的

### 设置折叠属性

```
treeFolding=1;
```

![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636956.gif!pkmer)

### 添加动态线

```
flowAnimation=1;
```

![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636957.gif!pkmer)

### 设置 Tree Layouts 容器

```
swimlane;startSize=0;horizontal=0;childLayout=treeLayout;horizontalTree=1;resizable=0;containerType=tree;
```

- 设置中 `containerType=tree` 该元数据可以做到像 Xmind 那样**用 tab 或者 enter 来新建子元素或者同级元素**
	- 注意：需要 1 个根目录和 2 个子集才能开始用

![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636958.gif!pkmer)

> 将 `horizontalTree=1;` 改为 `horizontalTree=0;` 则变为垂直树：

```
swimlane;startSize=0;horizontal=1;childLayout=treeLayout;horizontalTree=0;resizable=0;containerType=tree;
```

可以设置好的容器模板保存到便笺里面。

![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636959.png!pkmer)

### 其他属性设置

其他的一些属性在 **样式面板** 的**属性和值**的选项中查看：

![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636960.png!pkmer)

## 插入模板

其实 Diagram 自带了很多模板，在 **调整图形 ->插入 ->模板** 中可以查看。

![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636961.png!pkmer)

### 插入组织关系结构图

结合前面的说的容器修改，可以修改一下插入的组织管理结构图，适合显示人际关系的流程图，让添加子元素变得更加方便些：

设置容器的子元素布局为**垂直树状图**：

```
containerType=tree;childLayout=treeLayout;horizontalTree=0;
```

![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636962.gif!pkmer)

## 如何在 Obsidian 中使用 Diagram 插件

需要安装并启用 Diagram 插件。安装插件后，可以在 Obsidian 的侧边栏中找到 draw.io 的图标，以及鼠标右键选项 (New Diagram) 中可以添加创建 Diagram 文件。

不过我针对 Diagram 的用法是用 [Diagram 的软件](https://github.com/jgraph/drawio-desktop/releases) 来编辑，同时对 Obsidian 的 Diagram 插件的源码 (main.js) 进行了简单的修改 (非必要)：

1. 修改创建 SVG 时用默认应用打开，而不是在 Obsidian 内部水平分栏打开
	- 同时修改插入连接修改为 ob 的 `wiki` 简短连接，默认宽度为 800
	- 插入形式为：`![[Untitled Diagram.svg|800]]`
2. 修改编辑 SVG 时，以垂直分栏的形式打开，而不是以水平分栏
3. 修改文件大纲中的新建 SVG 图形不会直接打开 (防止侧边栏中打开 SVG 从而把文件大纲界面给替换了)
	- 改为在根目录建立 SVG 文件，以垂直分栏的形式打开。

### 修改创建 SVG 时用默认应用打开，而不是在 Obsidian 内部水平分栏打开

修改 `handleEditorMenu(e, n, i)` 为下面的内容：

设置插入形式为 `[[${fileName}.svg|800]]`，并用默认应用打开。

```js
handleEditorMenu(e, n, i) {
	e.addItem((e) => {
		e.setTitle("Insert new diagram")
			.setIcon("create-new-diagram")
			.onClick(() =>
				t(this, void 0, void 0, function* () {
					const e = yield this.createNewDiagramFile(i.file.parent);
					const fileName = e.basename;
					n.replaceSelection(`![[${fileName}.svg|800]]`);
					// 根据操作系统使用默认应用打开文件
					app.openWithDefaultApp(e.path);
					// const t = this.app.workspace.splitActiveLeaf("horizontal");
					yield t.setViewState({
						type: "diagram-edit",
						state: { file: e.path },
					});
				})
			);
	});
}
```

### 修改编辑 SVG 时，以垂直分栏的形式打开，而不是以水平分栏

修改 handleFileMenu(n, i, a) 中的 `this.app.workspace.splitActiveLeaf("horizontal");` 改为 `this.app.workspace.splitActiveLeaf("vertical")`；

![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636963.png!pkmer)

### 修改文件大纲中的新建 SVG 图形不会直接打开

修改 editNewDiagramFile，将 `t = this.app.workspace.activeLeaf;` 取消掉。

```js
editNewDiagramFile() {
        return t(this, void 0, void 0, function* () {
            const e = yield this.createNewDiagramFile(),
                t = this.app.workspace.splitActiveLeaf("vertical");
            //     t = this.app.workspace.activeLeaf;
            yield t.setViewState({ type: "diagram-edit", state: { file: e.path } });
        });
    }
```

## 推荐插件搭配

- 插件：Fast Image Cleaner
	- 功能：用于阅读模式下快速清除生存 SVG 图片
	- 拓展：FolderNote 有个 `Delete the file and its all attachments` 可以在源码模式下删除链接对应文件，可以用来删除不小心插入的图形文件或者笔记 (如果对该命名不熟悉，请慎用)。
- 插件：Opener
	- 功能：用于直接从 SVG 图片链接 (Ctrl + 鼠标单击) 打开外部 Diagram 软件。
	- 配置：![关于 Diagram 软件的功能介绍以及在 Obsidian 使用的方案](https://cdn.pkmer.cn/images/202312180636964.png!pkmer)
- 插件：Copy Image and URL context menu
	- 功能：用于在编辑模式下快速复制或者用默认应用打开 SVG 图形文件。
