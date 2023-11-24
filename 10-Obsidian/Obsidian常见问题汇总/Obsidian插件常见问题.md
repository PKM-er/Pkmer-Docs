---
uid: 20230521004800
title: Obsidian 插件常见问题
tags: [Obsidian, 插件, 常见问题]
description: Obsidian 插件常见问题
author: PKMer
type: other
draft: false
editable: false
modified: 20231123191256
---

# Obsidian 插件常见问题

## 核心插件

### 模板插件

#### 如何快速插入当前日期/时间

- 方法一：使用 [[nldates-obsidian]] 插件
- 方法二：
	- 首先在设置－核心插件里打开模板功能。
	- 移动端：在设置－移动端工具栏里找到模板： inserto current date/time 这两个命令，并将其加入移动端工具栏。
	- 电脑端：在设置－快捷键中搜索 insert current date/time 这两个命令，并自行为其配置快捷键。
	- 修改日期/时间格式：在设置－模板中进行。
- 方法三：
	- 搜狗输入法，输入“日期”的拼音，或者 r q 首字母，就可以快速输入今天的日期
	- WINDOWS 10 自带的五笔输入法 可以用 wubiLex 工具导入输入时间的词组:

```导入数据
zzrq	%yyyy%年%MM%月%dd%日	1
zzrq	%yyyy%-%MM%-%dd%	2
zzsj	%yyyy%年%MM%月%dd%日%20%HH%:%mm%:%ss%	2
```

### 日记插件

#### 每天打开 Obsidian 自动添加一个日记

- 这是核心插件中的功能，如果你打开了“日记”和新插件，并开启了。
- 则：在没有对应日期日记文件的时候，Obsidian 会自动帮你创建一个对应日期的日记文件。

![image.png](https://cdn.pkmer.cn/images/20230607171233.png!pkmer)

## 社区插件

### 如何打开社区插件

默认情况下，Obsidian 将打开安全模式，以保护用户免受潜在的伤害。在安全模式下，Obsidian 不会运行任何第三方插件。

请注意，第三方插件可以访问你电脑上的文件，连接互联网，甚至安装额外的程序。了解更多关于插件安全性的信息，请阅读 [此部分](app://obsidian.md/index.html#%E6%8F%92%E4%BB%B6%E5%AE%89%E5%85%A8%E6%80%A7)。

为了安装第三方插件，你需要在 `设置` -> `第三方插件` -> `安全模式` 中关闭安全模式。

### 插件社区不能加载

![Pasted image 20230123233401](https://cdn.pkmer.cn/images/b47e268997386b5fd862d46c5758b903_MD5.png!pkmer)

如果留意的化你会发现，OB 右上角提示了“Failed to load xxxxx（插件名）”

- 原因：
	- 你的网络环境不够稳定，无法访问到官方的插件市场
	- 你的 OB 安装了不稳定的插件（proxy GitHub），导致获取其他插件失败/不完整
	- 一些插件无法适配移动端，假设你只在移动端看到对应现象的话。

由于 Obsidian 的插件都是在 Github 上托管的，国内访问存在问题，需要一些科学上网的手段。常见解决办法有：

1. 【首位推荐】使用 [PKMer 插件市场](https://pkmer.cn/products/market/)，由 PKMer 出品的插件。并不是自吹自擂，因为魔法也有失效的时候，所以 PKMer 目前提供的方法最稳定。
2. 魔法上网，详细使用可以自行尝试解决，已有用户反馈并不稳定
3. 下载开源 [Watt Toolkit](https://steampp.net/) ，这个软件能通过修改 Host 和 DNS 实现访问 Github，已有用户反馈并不稳定。
4. 通过 Github 镜像站/网盘下载，这个一般都是在网上搜，有安全风险，需要核对下载文件的哈希值，确保没被人中途篡改，而且无法保证全新。
5. [obsidian-proxy-github](https://gitee.com/juqkai/obsidian-proxy-github) ，这个插件就的原理就是 Github 镜像站代理下载。缺点依然是安全风险以及会时常弹出提醒框 (可手动删除文件中的 `Notice` 语句)。

### 插件下载后不能启用

1. 不支持移动端：PC 端的插件可能不能在移动端使用，这是不同平台的硬限制，不好解决。
2. 可能是由于网络原因下载没下全：只下载全了 `manifest.json` 文件，导致插件列表有开启选项，但不能开启。解决办法就是卸载插件重新下。
3. 插件代码有问题：这种情况很少很少，一般开发者都是调试好了的。解决办法是在 Github 向插件开发者反馈。

### 如何安装第三方插件

有 3 种方法安装插件，使用第一种就可以了：市场安装、离线安装、测试安装

- 通过官方市场：打开 Obsidian 设置，第三方插件，首先关闭安全模式，打开社区插件市场，点击浏览，直接安装或者搜索安装，然后开启插件
- 国内用户因为访问 Github 并不稳定的问题，推荐使用 PKMer 的 [Obsidian 插件市场](https://pkmer.cn/products/market/)、[Obsidian 插件集市 (pkmer.cn)](https://pkmer.cn/products/plugin/pluginMarket/)
- 通过手动安装：或者别人发的或者你自己下载的插件包，解压之后，整个文件夹复制到你的库目录下的 `.obsidian\plugins` 下面，然后打开 obsidian 设置，第三方插件，开启插件
- 通过插件：未上架的插件，可以通过 [[obsidian42-brat]] 插件安装。

### Mac 系统上如何安装第三方插件

有些插件并未上架 Obsidian 插件市场，对于 Mac 系统的同学，手动安装插件可能无法找到仓库下的 `.obsidian` 文件夹。因为默认情况下，所有 Obsidian 配置文件都是隐藏的，因此您可能需要在操作系统上启用查看隐藏文件。在 Mac 上，在 Finder 中，你可以按 `cmd+shift+.` 切换查看隐藏文件。

## Calendar

### 打开 Calendar 后侧边栏不显示对应图标

1. 先检查是否已经关闭了 OB 的社区插件安全模式
2. 检查下载的插件是否已经成功开启

> [!注意]
> 这个问题主要来自两个方面
>  - 你的网络可能无法访问 Ob 的社区下载源
>  - 你可能听到网络上的教程，安装了一些插件，导致无法访问或者下载完整的插件
>  - 遇到以上问题，想永久稳定的解决请参考这个：[[pkmer]]

1. 以上都不是，但是还看不到 Calendar 插件
	- 这可能是因为面板上的功能图标过多，新开启的插件会排放在尾部。
		- 你可以鼠标指向 功能图标后，使用滚轮来滚动时期出现
		- 或者把对应 Calendar 图标转过来。
		- 或者减少一些不需要功能图标

### 开启插件，但是不显示日历部分（by OS）

回答：一般是因为右侧侧边栏过窄，需要鼠标拖动加大右边栏宽度就好了

### 点的含义是什么？（by OS）

每个实心点代表你每日笔记中的 250 个单词。所以 4 个点意味着你在那一天写了一千个单词！如果你想改变这个阈值，你可以在日历设置中设置不同的“每个点的单词数”。

另一方面，空心点表示该天有未完成的任务。（**注意：**无论剩余任务的数量如何，特定的一天只会有一个空心点）

### 如何更改日历的样式？（by OS）

默认情况下，日历应无缝地与您的主题相匹配，但如果您想进一步自定义它，您可以在您的 `obsidian.css` 文件（位于您的保险库内）中配置样式。

在设置中，您可以启用“显示周数”选项，将“周数”列添加到日历中。单击周数即可打开“每周笔记”。

### 如何在不禁用插件的情况下隐藏日历插件？（by OS）

就像其他侧边栏视图（例如反向链接、大纲）一样，可以通过右键单击视图图标来关闭日历视图。

### 不小心关闭了 Calendar 插件。如何重新打开它？（by OS）

如果您关闭了日历小部件（右键单击面板导航并单击关闭），您可以通过命令面板重新打开视图。只需搜索“Calendar: Open view”。

### 如何让日历从星期一开始？（by OS）

您可以在设置菜单中切换“从星期一开始”。

如果您希望每周笔记的格式中包含一个单词（例如 "2020 年第 21 周 "），您可以使用 `[]` 括号将单词括起来。这会告诉 [moment](https://momentjs.com/docs/#/displaying/format/) 忽略这些单词。因此，对于上面的示例，您可以将格式设置为 `[Week] ww [of Year] gggg`。

### 不喜欢显示周数，但我仍然想使用每周笔记。我还能使用它们吗？（by OS）

您可以通过在命令面板中搜索“Calendar: Open weekly Note”来打开当前的每周笔记。这将打开当前周的每周笔记。

要配置“格式”、“文件夹”和“模板”，您需要暂时切换到设置中的“显示周数”，但如果您切换回关闭状态，您的设置将保持不变。

## Banners

### 为什么 Obsidian 的头图 或者 banners 插件显示异常

1. 开启了 banners 插件
2. 在页面头部映入 banner icon
3. banner icon 虽然显示了，但是多了一个裂开的图标（图裂、叉烧包）

![banners 异常](https://cdn.pkmer.cn/images/2015216e183baf2e52ca06b1fb506953_MD5.png!pkmer)

原因：1. 这是因为你本身设备的网络原因导致的现象，banners 插件无法获取对应的 emoji 表情。

解决：

1. 在设置 -> 第三方插件 -> 插件中，找到 banners 插件
2. 点击 banners 插件的设置
3. 按照下图所示，关闭【Use Twemoji】，即可解决问题。【当然可能有人会觉得 Twemoji 比默认系统 emoji 更美观】

![banners设置](https://cdn.pkmer.cn/images/066c9f4b1cad89a77853126e9f51b05f_MD5.png!pkmer)

## Dataview

[[40 - FAQ-常见问题]]

## Enhancing mindmap

### 为什么我打开后很卡顿（by OS）

答：

- 原理：首先图普类插件区别于一般的文字处理，或者局部处理插件，只针对选中或者当前笔记文字做处理，更多牵扯到了图形化渲染，所以性能损耗更高一些。
- 这个问题，可以通过在插件设置里面，减小画布尺寸来达到缓解

## Excalidraw

### Excalidraw 能使用仓库里面的其他附件（图片吗）？（by OS）

回答：可以，参看下图

![image.png](https://cdn.pkmer.cn/images/20231013231702.png!pkmer)

### Excalidraw 支持二合一平板手写笔使用吗？(by 苯环)

回答：支持。可以在手写笔模式和光标模式之间进行切换。

### Excalidraw 怎么插入图片链接和图片本身（by OS）

回答：

- 使用鼠标拖拽：插入的是图片附件的链接
- 使用鼠标拖拽 + 按住 shift：插入的是图片本身
- 直接使用 Excalidraw 工具栏的图片插入工具：插入的是图片本身，并会增加一个新的图片附件

### Excalidraw 如何识别手写字？ (by 熊猫)

答：目前有两种识别手写字的方式：1、在平板上边写边输入，2、写完后通过 OCR 识别手写体。

1、在平板上边写边输入：

Excalidraw 的脚本市场在页面的右上角，有个齿轮⚙叠加播放的按钮，里面是它的脚本市场

![image.png](https://cdn.pkmer.cn/images/20231013231852.png!pkmer)

在 Excalidraw 的脚本市场里面，有一个叫 scribble hepler 脚本，支持边写边输入，而且效果很不错

![image.png](https://cdn.pkmer.cn/images/20231013231910.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20231013231922.png!pkmer)

2、通过 OCR 识别

首先 Excalidraw 是可以使用 OCR 的可以在设置里面设置

![image.png](https://cdn.pkmer.cn/images/20231013232110.png!pkmer)

然后还有通过外部的软件辅助识别，详细介绍见链接：

[Umi-OCR 本地图片识别并批量转换]([https://pkmer.cn/show/20230725164407](https://pkmer.cn/show/20230725164407) )

![image.png|400](https://cdn.pkmer.cn/images/20231013232126.png!pkmer)

### Excalidraw 画板取消链接的 `[[ ]]` (by 熊猫)

![image.png](https://cdn.pkmer.cn/images/20231013232254.png!pkmer)

### Obsidian 插件 Excalidraw 的橡皮擦在哪里

- 按 Ctrl/Cmd+Z 就能取消上最近一次的操作；
- 点击对应的形状（shape）后有刪除可用；

![image.png](https://cdn.pkmer.cn/images/20230522215014.png!pkmer)

## EasyTyping

### 数字后面的中文字词会重复两次

- 现象
	- 如输入“2018 年“
	- 显示会变为“2018 年年“
	- 关闭插件后问题消失。重启主程序，重新加载插件均无效。
- 解决
	- 方案一：更换输入法，此问题一般出现在你的输入法是微软拼音输入法
	- 方案二：关闭微软拼音中的【兼容性】选项
	![image.png](https://cdn.pkmer.cn/images/20230524151250.png!pkmer)

## Folder Note

### 为什么建立了一个和文件夹同名的笔记，该笔记不显示（by OS）

答：可能因为你使用 Folder note 插件，该插件会把文件加同名笔记，当作是文件夹本身的目录。可以通过点击 ctrl + 左键来查看同名笔记。

当然也可以 通过插件设置显示对应的笔记

![image.png](https://cdn.pkmer.cn/images/20231013145036.png!pkmer)

## Make.md

### 为什么笔记上有多个悬浮工具栏（by OS）

![image.png|400](https://cdn.pkmer.cn/images/20231013231607.png!pkmer)

答：同时开启了 make.md 插件，和 edting toolbar 插件

### 新更新的 Properties 跟以前的属性有什么区别？（by 苯环）

回答：图示的是 make.md 的功能，1.4 版本前 Obsidian 本体并没有属性功能。

## Memos

### 备忘录 Memos 无法启动打开？

1. 开启核心插件日记
2. 在核心插件日记的插件设置中指定日记文件夹位置。

## Templater

### Obsidian 怎么显示笔记上次修改时间

答：Templater 插件， `<%+ tp.file.last_modified_() %>`

## React Components

### 开 React Components 这个插件会导致白板（canvas）异常

- 现象

![### 开 React Components 这个插件会导致白板（canvas）异常 |450](https://cdn.pkmer.cn/images/20230622162549.png!pkmer)

- 解决方案：
	- 找到 React Components 插件的文件夹，打开 main.js 文件
	- 找到下列对应代码文本
	- 在 `var _a, _b`; 这一行之前加入 `if (!ctx.sourcePath || (!ctx.containerEl?.hasClass('markdown-preview-section'))){ return;}`

```js
registerHeaderProcessor() {

	this.registerMarkdownPostProcessor((_, ctx) => __awaiter(this, void 0, void 0, function* () {
	var _a, _b;
if (!((_a = ctx.containerEl) === null || _a === void 0 ? void 0 : _a.hasClass('markdown-previewsection'))) {

	return;

}
const viewContainer = ctx.containerEl.parentElement;
const existingHeader = (_b = viewContainer === null || viewContainer === void 0 ? void 0 :
viewContainer.getElementsByClassName('reactHeaderComponent')) === null || _b === void 0 ? void
0 : _b[0];

const previousContext = this.renderedHeaderMap.get(existingHeader);
if (!previousContext || previousContext != ctx) {

	if (existingHeader) {

		this.ReactDOM.unmountComponentAtNode(existingHeader);

		existingHeader.remove();

	}

const container = document.createElement('div');

container.addClasses(['reactHeaderComponent', 'markdown-preview-sizer', 'markdownpreview-section']);

	this.renderedHeaderMap.set(container, ctx);

	viewContainer === null || viewContainer === void 0 ? void 0 :

viewContainer.insertBefore(container, ctx.containerEl);

	this.attachComponent('const HeaderComponent = pluginInternalNoteHeaderComponent;<HeaderComponent/>', container, ctx)

		}

	}));

}

```

## Folder note

### folderNote 修改文件夹名后笔记链接断开

folder note 插件 Sync folder name 设置开启后文件夹名称更改时会自动重命名文件夹注释：

![Pasted image 20230724230207](https://cdn.pkmer.cn/images/202307292027226.png!pkmer)

不过目前 **folder note 1.4.1** 版本该设置还存在一些问题，如果直接修改文件夹名称是 folderNote 主笔记内部的笔记链接会失效。

> [!caution]
> 使用 folder note 插件开启 `Sync folder name` 设置时，最好通过修改笔记名来修改修改文件夹名，直接修改文件夹名内部链接会产生大量错误。

当用 canvas 作为 folderNote 主笔记时，直接修改文件夹名称时，内部嵌入的笔记全部失效，经测试，通过修改 canvas 笔记名时来间接文件夹名称，链接会进行更新，并不会失效。

> [!example] 测试示意图
> ![Pasted image 20230725002427](https://cdn.pkmer.cn/images/202307292027311.png!pkmer)

对于 md 文件作为 folderNote 主笔记时，直接修改文件夹文件名也会存在该问题，如果采用 Obsidian 的 Wiki 链接时，嵌入尽可能简短的形式，失效的链接会比在 canvas 中失效少一些，失效的情况：

1. 当 md-folderNote 笔记嵌入外部的 canvas 时，直接修改文件夹文件名时会失效；
2. 当 Wiki 链接在笔记中采用相对路径的情况时会失效。
   ![Pasted image 20230725003427](https://cdn.pkmer.cn/images/202307292032459.png!pkmer)

### 补救措施

1. 重新修改文件名回来 (**补救**)，之后再通过 folderNote 笔记名修改；
2. 重新一个一个的**切换至其他笔记** (_不推荐_)；
3. 关闭该设置，手动去同步文件名和主笔记名 (**推荐**)。

## 第三方工具

### iCloud

#### 求问怎么让 iCloud 里显示 .obsidian 文件夹？（默认似乎是不显示的）

- 回答 1：使用 Windows 版 iCloud 客户端就可以打开了，顺便还可以同步
- 回答 2:  在 macOS 上使用快捷键  ⌘ + ⇧ + .     就可以看到隐藏的文件夹了，进入到      iCloud/Obsidian/your_vault/   再使用上面的快捷键就能看到了。

### Syncthing

#### Syncthing 如何忽略文件

有些文件不想同步，比如 Ob 的 workspace 文件同步易冲突，如果能选择性不同步部分文件？

在下边设置界面输入即可，一行一个文件。（具体高级语法忘了，有空再补吧，也欢迎其它人补上）

![image.png](https://cdn.pkmer.cn/images/20230608200724.png!pkmer)
