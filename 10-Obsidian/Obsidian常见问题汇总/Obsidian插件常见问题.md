---
uid: 20230521004800
title: Obsidian 插件常见问题
tags: [Obsidian, 插件, 常见问题]
description: Obsidian 插件常见问题
author: PKMer
type: other
draft: false
editable: false
modified: 20230801181323
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

1. ==【首位推荐】使用 [[pkmer]] ，由 PKMer 出品的插件。==，并不是自吹自擂，因为魔法也有失效的时候，所以 PKMer 目前提供的方法最稳定。
2. 魔法上网，详细使用可以自行尝试解决，已有用户反馈并不稳定
3. 下载开源 [Watt Toolkit](https://steampp.net/) ，这个软件能通过修改 Host 和 DNS 实现访问 Github，已有用户反馈并不稳定。
4. 通过 Github 镜像站下载，这个一般都是在网上搜，这玩意儿有安全风险，需要核对下载文件的哈希值，确保没被人中途篡改，而且无法保证全新。
5. [obsidian-proxy-github](https://gitee.com/juqkai/obsidian-proxy-github) ，这个插件就的原理就是 Github 镜像站代理下载。缺点依然是安全风险以及会时常弹出提醒框 (可手动删除文件中的 `Notice` 语句)。

### 插件下载后不能启用

1. 不支持移动端：PC 端的插件可能不能在移动端使用，这是不同平台的硬限制，不好解决。
2. 可能是由于网络原因下载没下全：只下载全了 `manifest.json` 文件，导致插件列表有开启选项，但不能开启。解决办法就是卸载插件重新下。
3. 插件代码有问题：这种情况很少很少，一般开发者都是调试好了的。解决办法是在 Github 向插件开发者反馈。

## Calendar

### 打开 Calendar 后侧边栏不显示对应图标

1. 先检查是否已经关闭了 OB 的社区插件安全模式
2. 检查下载的插件是否已经成功开启

> [!注意]
> 这个问题主要来自两个方面
>  - 你的网络可能无法访问 Ob 的社区下载源
>  - 你可能听到网络上的教程，安装了一些插件，导致无法访问或者下载完整的插件
>  - 遇到以上问题，想永久稳定的解决请参考这个：[[Obsidian 插件：Obsidian Lite]]

1. 以上都不是，但是还看不到 Calendar 插件
	- 这可能是因为面板上的功能图标过多，新开启的插件会排放在尾部。
		- 你可以鼠标指向 功能图标后，使用滚轮来滚动时期出现
		- 或者把对应 Calendar 图标转过来。
		- 或者减少一些不需要功能图标

## banners

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

## Memos

### 备忘录 Memos 无法启动打开？

1. 开启核心插件日记
2. 在核心插件日记的插件设置中指定日记文件夹位置。

## Excalidraw

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

## Templater

### Obsidian 怎么显示笔记上次修改时间

答：Templater 插件， `<%+ tp.file.last_modified_() %>`

## React Components

### 开 React Components 这个插件会导致白板（canvas）异常

- 现象
![QA_4CW[448ZAU}F1FZO~3YJ.jpg|406](https://cdn.pkmer.cn/images/20230622162549.png!pkmer)
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
