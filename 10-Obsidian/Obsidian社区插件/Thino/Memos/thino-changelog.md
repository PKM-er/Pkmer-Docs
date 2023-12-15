---
uid: 20230913172534
title: Thino 2.X （原名 Obsidian memos）更新记录
tags: [memos]
description: Obsidian 插件 Thino 2.X 更新记录
author: Bon,PKMer
type: other
draft: false
editable: false
modified: 20231215144329
---

# Thino 2.X （原名 Obsidian memos）更新记录

# Thino 2.X 更新记录

需要请加入内侧体验

[社区众筹插件 (pkmer.cn)](https://pkmer.cn/products/productDetails/)

## Thino 2.1.4 2023.12.15

### 修复

## Thino-v2.1.4 2023.12.15

这个版本主要是 BUG 修复，

1. 不会重复粘贴；
2. flomo 导入问题；
3. Tag 没办法识别书名号；
4. Minimal 模式（通过命令开启）；
5. 当遇到某一个部分的 Thino 获取报错的时候，不会影响别的类型的 Thino 获取；
6. 修复了没办法正确更新任务相关的 Thino 的问题；

### 新功能

1. 从侧边栏重复开启 Thino 后保存按钮不可点击；但是也带来了两个比较方便的功能：
	- 一个是：可以通过调用 app.workspace.trigger('send-to-thino', content); 其中 content 为字符串就会自动发送且保存
	- 另一个是：桌面端本地，在开启 settings 中的 Http 接口后可以通过以下形式调用 Thino 创建的能力，例如，可以通过以下的 POST 方法发送 Thino 且创建：
	- 支持 application/json ，默认端口是 http://localhost:52321/create
   body 内容附带 json：

```json
{
  isList: boolean;
  type: 'CANVAS' | 'FILE' | 'DAILY' | 'MULTI'
  text: string;
}
```

### Thino 2.1.3 2023.12.2

### 新功能

1. 可以选定某一个保存位置，而不是仅限于日记模式
2. 可以选定单文件模式
	- 单文件模式中，每一个 thino 会保存成 Callout
	- 最新日期的 Thino 会在顶部
	- 元数据会被用<kdb> %% </kdb>包围，所以单文件模式中不再可见
3. 修了 easy typing 会导致白屏的 bug 以及和新版本表格不太兼容的体验

## Thino 2.1.2 2023.11.16

### 修复

1. 修复了出现白屏的问题
2. 修复了拖动的问题
3. 删除回收站的问题增加了关闭回收站的方式

## Thino 2.1.1 2023.11.13

### 修复

1. 修复标签以及 <kbd>---</kbd> 的渲染的问题

## Thino-v2.1.0 2023.11.9

更名为 Thino 并把编辑器支持所见即所得。

## Thino-v2.0.13 2023.10.08

### 新功能

- 支持在 Theme 设置中实时切换 Heatmap 颜色，已经预留了六种颜色方案

### 修复

- 在 Thino 编辑器中无法输入标签、日期等；
- Thino 在后台时也会响应左侧栏或者右侧栏开闭事件，导致其会重载；
- 会出现浮动左侧栏左侧间距不统一的问题；

### 弃置

- 暂时下线拖动 Memo 功能，现在在 Memo 上划动可以正常选中文本

---

### New Features

- Supports real-time switching of Heatmap colors in Theme settings, with six color schemes already reserved.

### Fixes

- Issues with entering tags, dates, etc. when input in editor;
- When Thino is not active, it still responds to the opening and closing events of the left or right sidebar, causing it to reload;
- There are inconsistencies in the left margin of the floating left sidebar.

### Deprecated

- Temporarily removed the drag Memo feature. Now, you can normally select text by swiping on the Memo.

## Thino-v2.0.12 2023.10.07

### 新功能

- #亮点 【多文件来源 for Thino】具体操作逻辑是设置一个文件夹，在这个文件夹下的所有 Markdown 文件都会被视作 Thino，其它的编辑、归档、删除以及双向编辑都一样；
   - 注意：目前不支持子文件夹
   - 基于上边的操作中，如果发现存在一个 Thino 没有唯一 ID 会在这个 Thino 的右上角显示一个修复按钮，而这个 Memo 因为没有唯一 ID 所以不可编辑；
       - 但是一般情况下会默认直接增加新的 ID；
- #亮点【多文件来源 for Thino】检索内容且复制全部 Memo 的时候，Memo 没有正确被处理；
- 编辑器按 Alt+1、2、3 切换保存位置；
- 编辑器按 Ctrl 或 CMD + L 可以快速切换当前的 MEMO 状态；
- 点击左侧栏的随机回顾按钮可以直接更新随机回顾的内容；
- #亮点 修改设置可以实时变化 Thino 的内容，目前支持用户名、保存位置（也就是解析哪个标题下、Thino 文件等）
- 重构了 Thino 的菜单，提供了一个新的选项：复制 Thino 内容以及提供了查看当前的 Thino 字数的功能；
- 只要 Thino 范围内在按 i 会聚焦到编辑器，按 o 会聚焦到搜索框、按 Esc 会退出编辑状态；

### 修复

- #亮点 Thino 首次打开的启动过慢问题，从原来的 320ms 降到 26ms；
- 检索式的标题没办法编辑；
- 筛选没有 Tag 的 Memo 的快捷路径会忽略换行后的 Tag 的 Memo；
- 给部分按钮加上 Tooltip 提示；
- Banner 上的数字过大的时候会很拥挤；

### 变更

- 暂时下线批注 memo 显示内容；
- Memo 多了四个 css 选择器，分别为：data-source-type、data-memo-id、data-memo-type 以及 Pin 与否的选择器；
- 下线了全局切换 Memo 输入状态的命令；
- 移动端不能正常启动的问题；

---

### New Features

- [Multiple File Sources for Thino]: The specific operation involves setting up a folder, and all Markdown files under this folder are treated as Thino. Other operations like editing, archiving, deleting, and bidirectional editing remain the same;
   - Note: Subfolders are currently not supported.
   - Based on the above operation, if a Memo is detected without a unique ID, a fix button will be displayed in its top right corner. This Memo is not editable due to the absence of a unique ID;
       - However, in most cases, a new ID will be automatically added by default.
- [Multiple File Sources for Thino]: When searching for content and copying all Thino, the Memo isn't processed correctly;
- In the editor, press Alt+1, 2, 3 to switch save locations;
- In the editor, press Ctrl or CMD + L to quickly toggle the current MEMO's status;
- Clicking the random review button in the left sidebar will instantly update the content of the random review;
- Changing settings will reflect real-time changes in Thino' content. Currently supports username, save location (i.e., determining under which title, Thino files, etc.)
- The Thino menu has been refactored, adding a new option: copying the content of Thino and providing a function to view the current word count of Thino;
- Within the Thino scope, pressing 'i' will focus on the editor, pressing 'o' will focus on the search box, and pressing 'Esc' will exit the editing mode;

### Fixes

- Addressed the slow startup issue when Thino are opened for the first time, reduced from 320 ms to 26 ms;
- Query title cannot be edited before;
- NO_TAG will not match memo that using tag in new line;
- Added Tooltip to parts of buttons;
- Numbers on the Banner become congested when they're too large;

### Changes

- Temporarily suspended the feature that annotated Thino;
- Memo now includes four additional CSS selectors, specifically: data-source-type, data-memo-id, data-memo-type, and a selector for whether it's Pinned or not;
- The global command to toggle Memo input status has been deactivated.
- Mobile issues；

## Thino-v2.0.11 2023.09.28

- #亮点 修复移动端异常，支持 iOS 和 Android

## Thino-v2.0.10 2023.09.25

简评：逐步引入多来源来获取 Memo 的功能，重构了样式系统，现在可以用 CSS 变量来控制 Thino 的外观；

### Features

### 功能相关

- #亮点 右键 Ribbon Icon 可以直接控制 Thino 打开的位置，不需要先打开再拖动了；
    - 按住 Ctrl、Shift 以及 Alt 分别是右侧栏、左侧栏、浮窗显示 Thino；
- #亮点 支持设置存入位置为 Canvas，你可以在编辑器中实时调整保存的位置；
    - 当你设置任意的 Canvas 名称为 xxxxx.Thino.canvas 的时候，会自动从其中获取 Thino，不过由于不想侵入式修改此前已经存在的卡片，所以只有你修改 canvas 中的卡片或者在 Thino 中输入卡片且设定为插入到 canvas 的情况下，才会对 canvas 中进行 memo 的保存；
    - 注意，默认会保存到 basic.Thino.canvas 文件，如果你想要修改这个名字，或者修改路径，请去设置中进行修改；
    - 从插入 canvas 开始，你的所有对通过 Thino 插入的 canvas 节点的修改，或者新建成功后的节点的修改，都会如实反应到 Thino 列表中，当然反向也会有一样的效果；
    - 未来会扩展到文件夹、单文件以及标签索引等多来源；
- #亮点 新的图片预览器，你可以滚动滚轮（按住 Ctrl）来快速缩放内容，当当前的 Memo 有多个图片的时候，你可以点击上一张以及下一张来切换图片；
- #亮点 每日 Memo 进度条，你可以设定一个每天希望写多少个 Memo 的进度条，而且动态地设置目标，==未来会基于该功能引入统计功能==；
- 当分享 Memo 的时候，会渲染 Markdown 内容，而不是仅展示纯文本；
- 按住 Alt 键会允许你选择复制 Memo 内容；
- 当 Memo 的数目超过 20000 的情况下，会动态调节字体的大小，防止其重叠；
- 提供了一个设置按钮来修复此前的 Flomo 的导入错误；
- 绝大部分的颜色、圆角变量已经提取出来作为 CSS 变量，所以你可以直接修改 CSS 变量来调整 Thino 外观了；
- 随机回顾支持了刷新按钮；

### Fixed

- #亮点 Flomo 的内容应该可以正常导入了；
- #亮点 手机端无法正常使用 Thino；
- a 标签有可能会超出 Memo 的宽度范围的问题；
- 恰好为 40~50 个 Thino 的情况下，索引会出错；

## Thino-v2.0.10

1、如果 Daily 插件（日记插件）未设置任何文件存储目录的时候，应当以根目录为基础，而不是直接报错退出；

2、当日记文件在不同层级的情况下，应当能适配对应的情况；例如 2023-01-01 在根目录，而 2023-01-02 在子目录的情况下，会不能编辑（之前）

3、当日记文件中不存在 # Journal 标题的情况下也应该能正常解析（如果没有设置指定标题的话）

## Thino-v2.0.9

==简评：2.0.9 是一个彻底重构的版本，其性能远远超越了 1.9.7 也远远超越了 2.0.7 （再也不用忍受难以忍受的卡顿了）==

### 性能相关

- 优化初次打开速度，当你打开 Obsidian 的时候，Thino 就会在后台加载，当你需要打开 Thino 的时候不再需要等待；
- #亮点 完美的懒加载，保证你的 Thino 在即使五 5 万以上的 Thino 也不会有过多卡顿；

### UI 相关

- #亮点 侧边栏的快速入口，包括随机回顾、归档以及回收站三个主要入口；
- #亮点 顶部的页面形式切换按钮，可以切换列表或者瀑布流信息加载；
    - 页面缩放的时候会自动切回列表状态；
    - 当鼠标悬浮在时间戳上时可以看到完整的时间戳；
- 顶部的 Day 数字悬浮时可以看到你最早使用 Thino 的时间；
- 顶部新增每日 Daily 的快速入口；
- 更方便的 Pin 或者 Unpin 按钮；
- 归档、回收站均增加了返回 Thino 主页按钮；

### 功能相关

- #亮点 完美支持 Obsidian 的原生渲染器，所以现在只要是 Obsidian 的笔记的 Preview Mode 支持的内容，理论上都可以得到支持；
- #亮点 在页面中任意位置按 i 可以直接跳转到输入框；
- #亮点 在编辑框中按 Ctrl+Enter/Cmd+Enter 可以快速保存内容，而无需再额外设置一个快捷键了；
- 在 Memo 上右键可以查看到编辑菜单；
- 待办、Task Memo 都可以直接切换状态了，只需要点击一下；

### Fixed

- #亮点 小狼毫输入法可以正常输入了
- 删除笔记、编辑笔记以及新建笔记都会按部就班地对 Thino 中的 Memo 做出改动；
- 导出图片以及每日日记都支持了 web 的图片；
- 粘贴图片可能会插入两次图片；
- 编辑内容有可能保存不成功；
- Memo 总数有些时候可能统计不准确；
- 删除 Memo、归档 Memo 的时候可能出现没有归档成功和删除成功的情况；