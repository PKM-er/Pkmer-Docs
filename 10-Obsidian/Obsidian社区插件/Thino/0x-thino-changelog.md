---
uid: 20230913172534
title: Thino 2.X （原名 Obsidian memos）更新记录
tags: [Obsidian, Thino, memos]
description: Obsidian 插件 Thino 2.X 更新记录
author: Bon,OS,PKMer
type: other
draft: false
editable: false
modified: 20240329233115
sidebar:
  order: 3
  badge: New!
id: 99a53fe19756d009
---

# Thino 2.X （原名 Obsidian memos）更新记录

# Thino 2.X 更新记录

> [!note] 注意
> - Thino 是通过作者自测，社区管理员们内部交流，最终释放到用户的。
> - 所以建议尽量保持最新的更新，一方面能解决现有问题，二来可以更快帮助开发者发现、解决、回归问题。
> - 如果你想了解 Thino web 的进度可以关注这里 [[0x-thino-web-changelog]]

## Thino 2.3.34-35 2024.03.29

### 新特性

- 【Pro】支持标签多选，需要按住 ctrl 或 meta 键；
- 在 Modern 主题模式下，支持点击任务状态项或者标签状态项来过滤 Thino 内容

### 修复

- 修复：用户名名称的文本省略号问题
- 修复：聊天视图中底部编辑器产生的一系列问题
- 修复：提升图片更加友好的对其样式

## Thino 2.3.31-33 2024.03.28

### 新特性

- 支持 Thino 内容通过菜单进行复制到剪贴板

### 修复

- 修复：在某些情况导致在编辑 Thino 时无法输入标签的情况
- 修复：当标签位于标题下方时，无法正确解析内容

## Thino 2.3.27-30 2024.03.28

### 新特性

- 支持过滤筛选的 Thino 导出为图像

### 调整

- 升级聊天视图的样式

### 修复

- 修复一些情况下代码域的渲染样式
- 修复一些情况下 markdown 的渲染样式

## Thino 2.3.2-26 2024.03.27

### 新特性

- 全新的主题视图，modern 视图，这个视图在后续的几个小版本会不断迭代
- 支持在菜单中复制 debug 信息，用于我们定位用户反馈的问题
- 新增了更新历史菜单，你可以产看最近

## Thino 2.3.24-25 2024.03.28

### 新特性

- 升级了每日回顾界面样式布局
	- ![image.png|500](https://cdn.pkmer.cn/images/20240329215453.png!pkmer)
- 聊天视图，支持通过快捷键来换出悬浮编辑框
- ![image.png](https://cdn.pkmer.cn/images/20240329215501.png!pkmer)


## Thino 2.3.12-3.23 2024.03.26

## 新特性

- 【Pro】
	- 支持 [[Thino Chat view Layout|聊天视图]]
		- 并添加了新样式
	- 支持通过自定义 Snippets 隐藏 Pro 功能入口
	- 过滤和筛选内容时
		- 支持批量删除
		- 支持批量归档
		- 支持批量添加标签
			- 且标签可以选择添加位置
- 【Free】
	- 移动视图头部样式优化，更加沉浸的 Thino
	![image.png](https://cdn.pkmer.cn/images/20240322195426.png!pkmer)

### 修复

- 修复：在打开设置时候，防止破坏编辑器结构，导致编辑器不可用
- 修复：编辑器位于页面底部时的样式
- 修复：使用日期选择器时，偶尔遇到无法选择时间问题
- 修复：一些错误的文案多语言适配
- 不能在每日回顾视图中通过标签过滤 Thino

## Thino 2.3.11 2024.03.20

### 修复

- 修复：在打开设置时候，防止破坏编辑器结构，导致编辑器不可用
- 修复：编辑器位于页面底部时的样式
- 修复：使用日期选择器时，偶尔遇到无法选择时间问题
- 修复：一些错误的文案多语言适配

## Thino 2.3.10 2024.03.20

## 功能

- 【PRO】
	- 验证码现在基于设备验证，而不是库；
	- 右键点击表头时，可分享日程视图的图片；
- 【免费】
	- 密码锁定功能；
		- 支持通过命令锁定；
	- 在每日 Thino 对话框中添加基础搜索栏；
	- 在归档/回收站视图中添加过滤器；
	- 在归档/回收站视图中添加搜索栏；
	- 移动视图时可切换聊天或列表模式；
	- 在所有视图中（过滤后）支持批量删除/归档/恢复/复制；
	- 聊天视图模式；
	- 点击日程的日期/时间表头时，可调整排序顺序；

## 🛠️ 修复

- 无法正确复制注册 ID；
- 在 Obsidian 1.5.11 之后无法编辑内容；
- 在 Obsidian 1.5.11 之后无法正确编辑 Thino；
- 与 Obsidian 1.5.6 之前的版本存在兼容问题；
- 禁用密码保护时，不应显示锁定 Thino 的命令；
- 当密码为空时，不显示密码保护模态框；
- 下拉菜单无法正确删除 Thino；
- 不应在 Thino 列表中获取已归档的 Thino；
- 正确显示当天的列表和任务计数；
- 右上角菜单的删除按钮不应受到最后更改的影响。

## 样式更新

- 修复与聊天视图相关的一些问题；
- 移除页面包装器中的 translateX；
- 时间戳现在显示在消息附近；
- 更新聊天视图的样式；
- 更新默认切换列表按钮的样式，选择列表类型时显示列表图标；

## Thino 2.3.1-2.3.3 2024.03.12

### 修复

- 修复 ：部分 Mac 机型下白屏的问题
- 修复：【日记模式】下块引用 在和 webid 之类的混用时，会消失或者意外删除 webid
- 修复：某些情况下已完成的任务会意外被重置成列表模式
- 修复：激活 Pro 版本跳转问题
- 修复：移动端图片内容分享时候的异常

> [!warning] 通告
> - Thino 已经同步到 Obsidian 官方市场，会继续使用 obsidian-memos id，但显示名称改为 Thino
> - 以后 Thino 会在官方市场、PKMer market、已购用户的个人中心进行同步更新
> - 建议尽量保持最新的更新，一方面能解决现有问题，二来可以更快帮助开发者发现、解决、回归问题。
> - 安装：
> 	- 2.x 内测用户可以选择删除内测是插件，直接使用 Obsidian 官方市场，pkmer market 或者 个人中心的包更新
> 	- 新用户，直接安装更新即可

## Thino 2.3.0 2024.03.12

### 新增

- 日历组件
	- 支持展现月历视图，通过导航切换到不同月份
	- 支持展现当前天笔记是否有任务，及完成情况
- 标签
	- 标签支持排序功能
		- 支持标签按照名称进行正序（A-Z）和倒序排列（Z-A）
		- 支持按照标签使用次数排序，包括正序、倒序
	- ![image.png|250](https://cdn.pkmer.cn/images/20240223094836.png!pkmer)
- 筛选
	- 筛选后，在复制按钮旁边会有当前匹配的所有 Thino 数量
![image.png|600](https://cdn.pkmer.cn/images/20240226115508.png!pkmer)

- 日期筛选器不再依赖 [[nldates-obsidian]] 插件，且有独立的日期选择按钮
	- 支持快速年和月份的定位
![image.png|350](https://cdn.pkmer.cn/images/20240223185317.png!pkmer)
![image.png|200](https://cdn.pkmer.cn/images/20240226115658.png!pkmer)
![image.png|300](https://cdn.pkmer.cn/images/20240226115705.png!pkmer)

- 检索式
	- 提供标签检索体验优化，可以在标签检索式中收入标签内容来快速匹配选择标签
	- ![image.png|450](https://cdn.pkmer.cn/images/20240223185212.png!pkmer)
	- 检索式中日期，在原日期点击后可以展现快捷筛选，选择更大日期范围
	- ![1708685795805.jpg|400](https://cdn.pkmer.cn/images/1708685795805.jpg!pkmer)
	- 点击日历模式筛选后筛选器支持直接在日期未知调整筛选
	- ![image.png|400](https://cdn.pkmer.cn/images/20240223190037.png!pkmer)

## Thino 2.2.4 2024.02.20

### 新增

- 支持日记同步
	- 现在支持 Obsidian 核心插件 - 日记插件的同步模式
	- 支持在不同端设置对应的同步文件存储方式，推荐多端保持统一
	- 细节参考 [[Thino Sync|同步]]

### 调整

- 所有行内标记符（指代删除、同步、归档的标识符），在所见即所得模式下都已经被修正成一个单独图标，当选中时可以展示原文；
- 同步按钮增加微动画，用于提升用户点击时候的正向反馈
- 多语言支持：目前所有界面可见文案，已经都有中文对应展示

### 修复

- 修复 iOS（包括 iPhone、iPad）几个端同步的异常问题
- 修复编辑器全屏模式在移动端无法收起的问题
- 修复编辑器在移动端列表底部 UI 异常
- 修复之前同步的时候并不会同步 pin 状态的问题
- 修复保存白板、单文件是时候， .thino.canvas / .thino.md 等不会保存有后缀名的文件名，例如，输入 abcd 文件名的话，并不会附带上 .thino.canvas 或者 .thino.md

## Thino 2.2.3 2024.02.08

### 新增

- 编辑器全屏模式，给那些喜欢大段落摘抄，编辑长文本卡片的用户【Thino Pro】

### 调整

- 调整插件后台对云端同步请求频率
	- 依然可以通过 [[Thino Sync]]|同步] 介绍的命令来手动触发
	- 体感：正常用户如果不是单纯测试、压测，应该不太会感受到变化
	- 降低频率有助于控制一系列本地和服务器资源消耗问题
- 日记模式多条 Thino 记录的排序模式
	- 从原有会按照相同时间进行类似分组排序，变为现在基于同一个日记下多记录的倒排结构
- 当你开关不同存储模式支持时
	- 插件会检测你当前选择存储模式，比如你有日记和单文件两种模式，当你关闭单文件模式，保留了日记模式时候，那么存储位置，就会自动从单文件模式切换到日记模式。

### 修复

- 修复对 Latex 语法的支持，之前版本容易在某些情况下丢失 `$$`
- 修复在不同视图宽度下，文本段落行间距高度会产生变化的问题
- 修复全局唤醒异常问题
- 修复提示保存信息时会提示 LocalStorage 不可读的问题
- 修复非常规定义的单文件存储名，导致提示无法找到路径的问题
- 修复单文件模式，自定义文件名导致路径异常的问题

## Thino 2.2.2 2024.02.01

### 调整

- 改进验证流程和提示文案，提升整体体验流程，参见 [[04_Thino Installation and Pro Activation|安装与激活]]
- 设置中记录格式现在变为不可修改项，主要是为了减少用户不同配置的兼容问题，以及用户切换后，是否需要批量操作用户数据的问题（尽量减少对用户已有数据的批量操作是一种设计哲学）

### 修复

- 修复启动 Thino 随着 Obsidian 启动不生效的问题
- 修复热力图天数统计异常问题
- 修复同步在某些情况下，数据不丢失，但会丢失同步标识问题
- 修复某些情况删除标识重复的问题

## Thino 2.2.1 2024.1.29

### 新增

- 脉络功能：
	- 现在可以通过 `~` 呼出菜单，选择已经建立的 Thino 卡片
	- 可以选择需要链接的已有卡片
	- 应用：这是一个汇总较为方便的，总分概念，或者概念之间串联的展形式，这里简单作图来展示下：
![image.png|500](https://cdn.pkmer.cn/images/20240129182839.png!pkmer)

### 修复

- 【设置】Thino 设置中 Obsidian 启动即启动 Thino
- 【分享】图片和文件链接分享时候会变成叉烧包或异常
- 【来源功能】尝试性修复了，来源定位的异常问题
- 【兼容性】修复工作区插件兼容问题

### 调整

- 更新新的验证方式，新版本开始请使用个人中心 Thino 页签中的指引内容进行更新，相信这版界面会更加容易。
- 这种调整也会保证，之前遇到无法验证的同学，或者 linux 同学，能够更好的使用 Thino
- 新验证流程，可以先获得本地码，然后到网站中获取激活码，复制粘贴到插件中激活。

## Thino 2.2 2024.1.21

### 新特性

- 支持单文件模式的同步，参见 [[Thino Sync|同步]]
- 支持微信信息发送到 Thino，参见 [[Thino Send Content to Thino From Wechat|微信发送到thino]]

## 调整

- 卡片功能菜单，删除文案会因为你的选择而不同
	- 如果选择直接删除模式，会展示为“删除”
	- 如果选择进入回收站，会展示为“回收站”

## 修复

- 修复：部分情况编辑器上 `NOTEIT` 按钮无法使用的问题
- 修复：热力图和分享界面统计数字不一致问题
- 修复：部分情况下文本内容会因为 Thino 宽度变化而改变行高的问题
- 修复：【列表】【阅读】查看表格时显示渲染异常
- 修复：【编辑器】【置顶】【再次编辑】已经置顶的内容，再次编辑编辑内容无法保存

## Thino 2.1.6 2023.12.28

- 修复移动端异常

## Thino 2.1.5 2023.12.27

### 新特性

- 聚焦到 Thino，现在当你点击侧边栏的 Thino 图标，会自动聚焦到已经打开的 Thino 页签
- 全局响应复制事件，在命令中输入 init global copy event 来触发，触发后可以快捷唤起 thino 的输入框
	- 这样的设计思考是在有限情况，即便 Thino 不常驻在布局中，也可以快速输入内容
	- ![image.png|400](https://cdn.pkmer.cn/images/20231227160528.png!pkmer)
- Show nearby mouse：可以呼出的 thino 界面在鼠标光标旁边

> [!Warning] 注意
> - 此特性不是默认开启，以防止和你已经设定的快捷键冲突
> - 需要你先在插件设置中开启，如图，并重启 Obisidian
> - 比如我这里输入的是 <kbd>Ctrl+Shift+K</kbd>，或者通过快捷键菜单去设置
>
>  ![image.png|650](https://cdn.pkmer.cn/images/20231227160540.png!pkmer)

- Show nearby mouse：可以呼出的 thino 界面在鼠标光标旁边

更多参考：[[Thino Global Wakeup|全局唤醒]]

## Thino-v2.1.4 2023.12.15

这个版本主要是 BUG 修复，

1. 不会重复粘贴；
2. flomo 导入问题；
3. Tag 没办法识别书名号；
4. Minimal 模式（通过命令开启）；
5. 当遇到某一个部分的 Thino 获取报错的时候，不会影响别的类型的 Thino 获取；
6. 修复了没办法正确更新任务相关的 Thino 的问题；
7. 源码模式在编辑器中的冲突

### 新功能

1. 从侧边栏重复开启 Thino 后保存按钮不可点击；但是也带来了两个比较方便的功能：
	- 一个是：可以通过调用 app.workspace.trigger('send-to-thino', content); 其中 content 为字符串就会自动发送且保存
	- 另一个是：桌面端本地，在开启 settings 中的 Http 接口后可以通过以下形式调用 Thino 创建的能力，例如，可以通过以下的 POST 方法发送 Thino 且创建：
	- 支持 application/json ，默认端口是 <http://localhost:52321/create>
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
- #亮点 【多文件来源 for Thino】检索内容且复制全部 Memo 的时候，Memo 没有正确被处理；
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