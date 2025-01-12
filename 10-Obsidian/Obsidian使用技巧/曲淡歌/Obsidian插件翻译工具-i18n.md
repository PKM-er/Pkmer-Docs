---
uid: 20250112232412
title: "Obsidian 插件翻译工具: i18n"
tags: [翻译, 翻译工具, 中文汉化]
description: 18n 是一款用于翻译 Obsidian 插件的插件，入门用户可以一键下载其他用户分享的成品词典，进阶用户可以使用内置编辑器翻译插件，支持百度翻译与 ChatGPT ，同时也内置了沉浸式翻译用于应急，最后用户可以选择分享自己的词典，插件内置了贡献用户榜单，截止 2025 年 01 月 10 日，已翻译了近 300 款插件。
author: 曲淡歌
type: tutorial
draft: false
editable: false
modified: 20250112234228
---

# Obsidian 插件翻译工具: i18n

## 插件简介

i18n 是一款用于翻译 Obsidian 插件的插件，入门用户可以一键下载其他用户分享的成品词典，进阶用户可以使用内置编辑器翻译插件，支持百度翻译与 ChatGPT ，同时也内置了沉浸式翻译用于应急，最后用户可以选择分享自己的词典，插件内置了贡献用户榜单，截止 2025 年 01 月 10 日，已翻译了近 300 款插件。

![[Pasted image 20250112232701.png]]

### 使用示例

#### 词典管理面板

在这里可以提取、下载、注入或还原词典。

![[Pasted image 20250112232711.png]]

#### 译文编辑器

在这里可以自由编辑词典。

![[Pasted image 20250112232719.png]]

#### 译文审核面板

云端的插件都是由热心志愿者无偿维护的，每个词典均经过审核，保证新手可以开箱即用。

![[Pasted image 20250112232725.png]]

#### 沉浸式翻译

如果某个插件还没有云端词典，也可以使用沉浸式翻译来机翻。

![[Pasted image 20250112232735.png]]

### 项目情况

是否上架官方市场：❌️

[项目地址链接](https://github.com/0011000000110010/obsidian-i18n)

## 使用教程

### 概念定义

这个部分我会讲解 i18n 名称的来历、它的翻译工作原理，如果只是想使用成品词典的朋友可以跳过本章。如果你不了解编程，但是想深度使用这个插件，我建议你阅读。

#### 名称含义

i18n 是 internationalization 的缩写，意为“国际化”。为了避免概念混淆，本文中提到的 i18n（除特别说明外）均指代该插件。

#### 插件翻译原理

一个 Obsidian 插件一般由三个文件：`main.js`、`manifest.json`、`style.css` 组成。

它们的职责为：

- `main.js`：插件的本体，所有插件的功能实现与文字都存放在此
- `manifest.json`：插件的描述信息，如 id、名称、简介和版本号等信息都存放于此
- `style.css`：插件的样式，即控制其外观的代码

![[Pasted image 20250112232749.png]]

也就是说，插件显示在用户界面的所有文字信息通常存放于 `main.js` 文件中。最基础的翻译方法是直接定位到对应文字，然后将其替换为翻译后的内容。

但是最正统、优雅的翻译方式应该是在插件开发阶段，开发者把所有需要显示给用户的文字都设置为“变量”，然后再从语言文件中获取这个“变量”的值，这样只需要翻译这个语言文件即可。这是标准的软件翻译方法。

但是 Obsidian 插件开发是由个人兴趣驱动的，不是所有的开发者都有意愿为自己的插件添加这样的功能。因此有的人会使用原始方法进行翻译，而 i18n 就是一款以 Obsidian 插件形式来完成原始方法的插件，它的原理很简单，就是查找并替换文本。不过它提供了一套工作流来完成查找、翻译、替换、分享、审核。

#### i18n 工作原理

##### 提取

这里我们将所有会被用户看到的文本称为“UI 文本”，i18n 会使用正则提取 `main.js` 中常见的 UI 文本，并且将其存放到待翻译插件目录下的 `lang` 目录中的 `zh-cn.json` 文件中（文件名由目标语言决定），这个时候我们只能得到一个由类似 `apple:apple` 的文本组成的文件，我将其称为“词典”，这个时候它只说明我们有一个英文 UI 文本叫 `apple`。前面的 `apple` 是原文，而后面 `apple` 所在就是译文的位置。（其实在 json 文件中，前面那个叫做“键（key）”，后面那个叫做“值（value）”）

##### 翻译

在上一步我们得到了一个待翻译的词典，这一步我们需要翻译这个词典。也就是说我们要把第二个 `apple` 翻译为 `苹果`，把一个词典中所有的“值”都翻译完之后，一个成品词典就诞生了，这个时候所有的“值”的集合就可以被称为译文，但是如何在全过程中称呼这个文件呢？用译文去指代一个刚刚被提取的文件似乎不严谨，因此我们就用“词典”来称呼它吧。

为了方便翻译，i18n 也提供了机器翻译接口，包括百度翻译与兼容 OpenAI 格式的大语言模型接口。其中百度翻译 api 每个人都能申请到免费的，而兼容 OpenAI 格式则能让用户使用几乎所有的大语言模型 AI。

##### 注入/替换

当我们完成翻译后，原插件没有发生变化，我们需要根据“键”与“值”的关系，用我们翻译好的内容一一替换原文，这个过程被我称之为“注入”，i18n 中对应的按钮名称为“替换”。

##### 云端

虽然我们已经尽可能的简化了翻译流程，但是依然需要用户具备一定的动手能力，因此我们设计了云端词典库，我们借用 Gitee 的 issue 区作为中转区，把用户提交的词典放到中转区，再由志愿者管理员手动检查词典是否有原则性错误（宥于精力、水平有限，只审核明显错误，不能控制翻译质量），审核通过后词典会被存放到 i18n 插件开源库中，新手用户可以在插件中下载对应插件的词典。我们对云端词库的预期只是“满足小白用户的、开箱即用的”，因此不要对它抱有过高期望，下载的词典也可以被二次编辑。

### 新手入门：安装插件、下载云端词典并注入

#### 插件安装方法一：Gitee 手动下载安装

打开项目地址： [zero/obsidian-i18n-translation](https://gitee.com/zero--two/obsidian-i18n-translation) ，点击发行版下蓝色的版本号

![[Pasted image 20250112232924.png]]

下载 `main.js`、`manifest.json`、`style.css` 这三个文件

![[Pasted image 20250112232942.png]]

再把文件复制到 Obsidian 库内的隐藏文件夹中，路径为 `Obsidian库文件夹/.obsidian/plugins/i18n`

![[Pasted image 20250112232949.png]]

**注**：也可以使用 brat 安装，GitHub 有同步的仓库，此方法不再赘述。

#### 插件安装方法二：使用 pkmer 插件市场

详见 [PKMer_Obsidian 插件：PKMer 不需要魔法，完美解决 Obsidian 无法加载第三方插件](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E7%A4%BE%E5%8C%BA%E6%8F%92%E4%BB%B6/pkmer-market/pkmer/)

安装 pkmer 之后，搜索 `i18n ` 即可安装。

#### 下载云端词典并注入

1. 打开 i18n 设置，确认云端模式已打开 ![[Pasted image 20250112232956.png]]
2. 点击 Obsidian 左侧的 i18n 图标 ![[Pasted image 20250112233010.png]]
3. 如果本地不存在词典，且对应插件云端已有分享词典，你会在插件后面看到一个 `下载` 按钮，如果云端没有词典，则没有下载按钮 ![[Pasted image 20250112233019.png]]
	- 注：如果**本地已有词典**，`下载` 按钮也**不会**出现，需要删除本地词典
4. 点击 `下载` 按钮后，会出现下载面板，点击 `保存` 按钮即可 ![[Pasted image 20250112233031.png]]
5. 保存完成后，`提取` 按钮会变成 `替换` 按钮，点击 `替换` 后对应插件就会被翻译，如果依然插件界面未翻译，则需要重启 Obsidian ![[Pasted image 20250112233041.png]]

##### 特殊情况：如何翻译 Style Settings 插件中的其他主题/插件

常常有人提问：“*为什么我注入了 Style Settings 插件的词典，里面内容依然是英文？*”，因为这是一个特殊情况。

**原理解析**：Style Settings 插件中显示的其他插件设置，自然不可能是 Style Settings 自身携带的，如果只是翻译 Style Settings 插件的 `main.js`，里面的设置不会有任何变化，因为这些文本是其他插件作者在开发插件时根据 Style Settings 的规范，放在对应插件的 `style.css` 中，因此我们真正需要翻译的是对应插件的 `style.css` 文件。

下面讲解一下如何翻译某个插件/主题在 Style Settings 插件中的设置项：

1. 点击 i18n 控制面板右上角的调色板符号 ![[Pasted image 20250112233058.png]]
2. 在这个 Style Settings 专属面板中按照普通插件的翻译流程操作即可 ![[Pasted image 20250112233105.png]]

### 没有云端词典？使用沉浸式翻译来应急

*如果某个插件没有对应的云端词典，该怎么办呢？* 为了解决这个问题，i18n 集成了知名浏览器插件 `沉浸式翻译`。

使用方法也很简单：

1. 打开 i18n 设置页面，切换到 `沉浸翻译`
2. 点击 `开启` 按钮
3. 点击悬浮球使用沉浸式翻译，更多配置请参见沉浸式翻译的官方

![[Pasted image 20250112233115.png]]

**注意事项**

由于 i18n 仅简单集成了沉浸式翻译的 SDK，因此存在部分功能无法正常使用的情况，包括但不限于：

- 无法打开沉浸式翻译的网页设置页面，只能使用悬浮球的设置页面
	- 因此无法配置自己的 api key
- 如果设置了 `永不翻译该网站`，悬浮球会消失，无法通过开关设置调出，即便重装 i18n 插件也无法重新调出悬浮球

如果在我的强调下，你还是点击了 `永不翻译该网站` 并且想再次调出悬浮球，可以在 Obsidian 的调试控制台里输入这段代码 [^1]

### 提取词典并翻译

#### 提取

点击 `提取` 按钮即可

![[Pasted image 20250112233124.png]]

**注意事项**：i18n 是通过正则表达式来匹配插件中的 UI 文本，但这种方法不是万能的。一般插件作者会使用形如 `.setName("apple")` 的函数 [^2] ，因此我们可以用正则来匹配这个函数，其他同理。但是这种方法有几个缺陷：

1. Obsidian 官方并没有规定 UI 文本的写法，因此有无限种写法，每种写法都要写一个正则匹配，因此总有未考虑的情况
2. 匹配到的函数括号中可能会嵌套函数，因此不能简单的把括号内的文字全部翻译
3. 部分作者会采用非通用的 UI 文本编写方式，无法匹配

#### 手动翻译

编辑器打开按钮：![[Pasted image 20250112233132.png]]

编辑器：

![[Pasted image 20250112233138.png]]

**注意事项**：

1. 编辑完成后一定要保存
2. 正则匹配可能会产生很多不需要翻译的内容，如果你要上传到云端，请删除这些内容
3. 内置匹配的正则规则有限，如果还有没匹配到的，请打开对应的 `main.js` 搜索文本（可以直接点编辑器内的 `源码` 按钮一键打开）
	- 推荐使用 vscode 来打开，它的搜索功能很好用
	- 只需要保证搜索到的文本是唯一的（不唯一就多复制一点前后内容），就可以把这段文本复制到新建框，再点击 `新建` 按钮
4. 翻译的时候要避免翻译变量、函数等内容。例如原文为：`".createEl(\"h1\", {\n      text: \"Delete the file and its all attachments - logs \"\n    })"`， 译文可能被翻译为：`".创造El(\"h1\", {\n      文本: \"删除文件及其所有附件 - 日志\"\n    })"`，但此处的 `.createEl` 和 `text` 不该被翻译。

#### 机器翻译

**声明**：

- **这个机器翻译功能挺烂的，建议先用一个简单插件练手，如果能接受它，再投入实际使用**
- 机器翻译可能导致词典错误：因为待翻译的内容可能包含函数名与变量，而机器翻译无法准确的区分它们，从而导致翻译错误，因此需要人工检查机器翻译得到的词典，所以强烈建议只把机器翻译作为一项不成熟的辅助手段
- 机器翻译可能会卡住：如果词典过大，机器翻译需要很长时间，在过程中如果触发了 api 的频率限制，可能会导致翻译失败，因此不建议翻译过多条目的词典（如 pdf++ 这种重量级插件）
- 目前机器翻译只支持未提取的插件，即机器翻译包括 `提取` 与 `翻译`（其实这一点不合理，但是忘了改……）

**步骤**：

1. 配置接口（二选一即可）：
	- 百度接口 ![[Pasted image 20250112233151.png]]
	- OpenAI 接口 ![[Pasted image 20250112233157.png]]
	- 确保插件未提取词典，点击 `AI` 按钮即可开始机器翻译 ![[Pasted image 20250112233202.png]]

### 提交词典至云端

1. 确保已开启 `共建云端` 中的 `贡献者模式`，如果不执行第 2 步，则使用集体账号署名
2. （可选）如果你拥有 Gitee 账号，想保留自己的署名，同时也让自己的账号成为 i18n 的贡献者，则可以申请一个 Gitee 的个人令牌，确保个人令牌**具有 issue 的权限即可**，再将个人令牌填入云端模式设置中的贡献者模式中 ![[Pasted image 20250112233208.png]]
3. 确保自己已经完成了一份词典，以下是对词典的要求：
	- **上传之前自己要先注入使用，确保插件不会因为词典崩溃，这一点非常重要**
	- 如果云端已有词典，应该在原有基础上修改
	- 删除所有未翻译的词条
	- 不改变原文的含义
	- 不翻译插件名称
	- 尽量不翻译特定术语，如 `dataviewjs` 作为插件 `dataview` 的延伸，最好保留原文
4. 确保无误后点击 `共享译文` 按钮并根据提示确认 ![[Pasted image 20250112233215.png]]
5. 等待插件提交，若成功提交，则会打开一个 Gitee issue 网页，管理员会尽快审核词典。（注：issue 中就是被压缩的词典，如果你需要在外部条件下解码，可以使用网页工具 [^3] 。若词典有存在问题，可能会被拒绝，因此如果你希望获得相关反馈，建议按照第 2 步配置个人令牌，这样 Gitee 会有提醒。）

### 常见问题

1. 手机/平板无法使用：插件不支持移动端，但是被翻译的插件复制到移动端可以继续使用
2. 没有下载按钮
	- 原因有二：
		1. 没有打开云端模式
		2. 本地存在词典（常见于新手下载后盲目堤点击了 `提取` 按钮）
3. 插件列表为空/显示插件数量少于实际数量：本地存在格式错误的词典，比如 `zh-cn.json` 中缺少了一个逗号
4. 注入词典后插件依然为原文：重启 OB 即可
5. 插件更新后翻译失效：正常现象，因为翻译原理就是替换了插件文件，更新后新的文件会覆盖掉已翻译的文件，重新注入即可。也可以在 i18n 中打开【本地模式】中的【智能更新】功能
6. 插件前面有一个 `已过期` 标签/更新按钮点了时候还在：i18n 插件开发不完善的问题，不需要在意

## 闲谈

其实我也算是 i18n 的开发者之一（只做了一点小小的工作，绝大部分工作由 02 完成）。虽然我本人可以接受英文界面，但是还是觉得用中文界面更容易进入心流，但苦于社区中没有优雅的插件翻译方法（那个时候基本都是大家手动翻译再分享翻译后的插件，导致汉化后的插件与市场内的插件分道扬镳），于是在半年前突然萌生了自己制作一款 Obsidian 插件来完成对其他插件的翻译。当时的我也意识到，采用修改源代码的方式来翻译插件的方式有诸多问题，因此我一开始就放弃这个思路，而是采用修改 DOM 元素的方法，但紧接着就陷入了困境，在查找资料的过程中，我在 Obsidian 中文论坛看到了 02 的帖子，惊讶于原来有人也在做类似的工作，虽然他选择了另一条道路，但是他已经做出了一个具有相当成熟度的作品，于是我联系上他，和他开始了无数次的讨论与修改。

在这款插件发展的过程中，我们也一直在说“i18n 是一款充满了妥协的插件”，从它不优雅的实现方式，再到被 Obsidian 官方拒绝上架，到因为如何实现云端词库的审核与存储而重构了三次代码，再到被其他插件作者要求下架他的插件翻译。这绝对不是一条坦途。

### 不优雅但是有用，但是被官方拒绝上架甚至被插件作者要求删除译文

在“插件翻译原理”那章我已经提到了优雅的软件翻译方式，i18n 的实现方式无疑是不优雅的，直接替换源代码可能会引入未知的错误。我曾经在英文社区和 Obsidian 的官方人员 joethei[^4] 以及几位优质插件的开发人员聊过此事 [^5] ，他们表示不可能接受修改插件源代码来实现翻译的方式。翻译只应该通过开发者提供的 i18n 框架实现（此处的 i18n 指国际化）。

我表示理解，因为他们这是典型的程序员专业视角，他们说的没有任何错。但是期望插件开发者都有自觉去添加 i18n 框架是不现实，因为绝大部分插件开发都始于兴趣，终于热情熄灭，Obsidian 社区已经积累了 2000 余个插件，绝大部分插件没有提供 i18n 框架，现在没有，未来也不会有。

当然“典型的程序员”这个时候会说，插件是开源的，想翻译就自己去提 PR。但是这就给翻译人员提出了更高的要求：

1. 有翻译插件的热情
2. 能完成翻译工作
3. 具备一定的代码能力，会使用 GitHub 的 PR 协作功能
4. 插件原作者愿意审查的代码（不少几年不更新的插件，堆积着很多 issue，恐怕作者连账号都没有登录过）
5. 每次更新译文，都要重复步骤 1-4

经过分析，可以说在这样的困境下，除了处于生态位头部的插件，其他插件只能随缘地获得国际化支持。

我也给官方提了建议——*官方提供接口，要求所有 UI 文本都采用统一方式来渲染，或者要求插件作者必须引入 i18n 框架*，同样的建议我也在网上看到别人提过 [^6] ，但是 joethei 给出的回复是*他们可能会提供一些辅助函数，但是不会强制要求*。

可以说期待官方在国际化上有所作为是彻底落空了。当然我并非在此指责 Obsidian 官方，我完全能理解他们的选择，Obsidian 的商业方式注定他们只能采用小团队规模，因此国际化这种优先级更低的工作被搁置是很正常的。

因为翻译插件和二次开发插件不同，翻译的插件作者署名依然是原作者，因此我们也担心会有人因为 i18n 翻译导致插件出错而去插件项目下报错，我们在插件运行前的用户协议中进行了严肃声明。即便如此，当我在 discord 发起了那场讨论后，tasks 插件的作者还是跑到插件项目地址下要求删除他的插件的译文 [^7]。这个事让我挺无语的，不过最后的发展还是好的，如果想吃瓜的可以去看原贴，此处就不再赘述。

### 插件翻译的难点

因为插件的 UI 文本不像一本小说有着清晰足够的上下文，加上插件作者的表达能力参差不齐，很多时候只有一个深入使用过此插件的用户才能做出足够好的翻译，因此我们希望通过互通有无来让大家都能用上优质的翻译，刚开始的时候为了快速填充云端词典，我制作了不少粗劣的机翻词典，但是随着大家的加入，词典的质量也越来越好。最后我也能用上别人分享的优质词典，这也是开源社区的魅力。

### 云端词库建立的难点

为了确保云端词库是社区持有，如果未来开发者弃坑也能继续发展，我俩决定用 GitHub 作为存储库，但在云端词库的审核机制上，我们纠结了很久。

有两种方案：

1. 由管理员审核，每个插件的每个版本只保留一份，以确保词典的质量
2. 所有人都可以自由上传，通过用户的评分来对词典进行排名

| 方案    | 优点               | 缺点                        |
| ----- | ---------------- | ------------------------- |
| 管理员审核 | 开箱即用，新手友好        | 审核过程质量无法控制；未来社区枯竭后，云端难以为继 |
| 自由上传  | 无需审核降低人工成本；未来可持续 | 可能存在大量无效、低质量词典，用户体验差      |

我俩讨论了很多，最后还是想尽可能的照顾新手的体验，如果采用自由上传的方式，恐怕会让新手很晕。而后面我审核的时候拒绝了几百个无用词典的经历也证明了，如果开放自由上传，维护成本也不会小。

目前采用 Gitee 作为云端词库，无法对单条翻译进行评论审核，同时用户发现某个翻译有改善空间也无法轻易提交建议，因此我曾经考虑过把云端词库的协作方式改为使用 crowdin 之类的 i18n 工具，都开始重构代码了，才发现存在一些系统性问题：crowdin 这类工具也是为了“优雅的翻译”而设计的，因此它们要求要有一个包含所有待译原文的词典，也就是说使用这类工具，不需要考虑“翻译的原文”从何而来，因为这本身就是软件作者应该提供的。而 Obsidian 插件根本没有这个东西，我们的原文都是译者逆向源代码找到的，而 crowdin 不提供上传原文的方法，只能项目管理员手动上传。这无法满足我们对审核权限划分的要求，因为如果每个人都能上传，就意味着每个人都要有管理员的权限，并且这个过程没有 api，还必须使用网页端。

但这真的让我感到很遗憾，如果未来我能解决这个问题，我会考虑重构 i18n，依然采用 crowdin 的方案，因为这种方案能让任何能使用翻译软件的人就能参与到插件翻译中来。

---

```
const clearImmersiveTranslate = async () => {
console.log('开始清理 Immersive Translate 相关数据...');

// 1. 清理 localStorage
const patterns = [
'immersive',
'translate',
'userLanguage',
'targetLanguage',
'sourceLanguage',
'neverTranslate',
'alwaysTranslate',
'translationService',
'openai',
'deepl',
'google',
'microsoft',
'preferences',
'config',
'cache',
'settings'
];

const keysToRemove = Object.keys(localStorage).filter(key =>
patterns.some(pattern => key.toLowerCase().includes(pattern.toLowerCase()))
);

console.log('找到需要清除的存储项：', keysToRemove);
keysToRemove.forEach(key => {
localStorage.removeItem(key);
console.log('已清除 localStorage 项:', key);
});

// 2. 清理 window 对象上的配置
const windowKeysToDelete = Object.keys(window).filter(key =>
key.toLowerCase().includes('immersive') ||
key.toLowerCase().includes('translate')
);

windowKeysToDelete.forEach(key => {
delete window[key];
console.log('已清除 window 属性:', key);
});

// 3. 清理 DOM 元素
const elementsToRemove = [
'#immersive-translate-popup',
'.imt-script',
'[data-id*="immersive-translate"]',
'[class*="immersive-translate"]',
'[id*="immersive-translate"]',
'script[src*="immersive-translate"]',
'link[href*="immersive-translate"]'
];

elementsToRemove.forEach(selector => {
document.querySelectorAll(selector).forEach(el => {
el.remove();
console.log('已移除 DOM 元素:', selector);
});
});

// 4. 清理 IndexedDB（如果有）
try {
const databases = await window.indexedDB.databases();
const dbsToDelete = databases.filter(db =>
db.name && (
db.name.includes('immersive') ||
db.name.includes('translate')
)
);

for (const db of dbsToDelete) {
if (db.name) {
window.indexedDB.deleteDatabase(db.name);
console.log('已删除数据库:', db.name);
}
}
} catch (error) {
console.log('清理 IndexedDB 时出错:', error);
}

// 5. 重置配置
window.immersiveTranslateConfig = {
pageRule: {
selectors: ['.markdown-reading-view *'],
excludeSelectors: ['.markdown-reading-view .cm-inline-code']
},
analyticsConfig: {
enabled: false
},
translationService: 'google',
generalRule: {
autoShow: true,
alwaysShowIcons: true,
instantTranslate: true
},
translationTheme: 'none',
translationLanguagePattern: {
matches: ['**/*']
}
};

console.log('已重置基本配置');

// 6. 重新加载翻译脚本
const script = document.createElement('script');script.classList.add('imt-script');script.async = true;
script.src = 'https://immersive-translate.owenyoung.com/immersive-translate.js';
script.onload = () => {
console.log('翻译脚本重新加载成功');
};
script.onerror = (error) => {
console.error('翻译脚本加载失败:', error);
};
document.body.appendChild(script);

console.log('清理完成，准备重新加载页面...');

// 7. 延迟重新加载页面
return new Promise(resolve => {
setTimeout(() => {
console.log('即将重新加载页面...');
resolve();
}, 1000);
});
};

// 执行清理
(async () => {
try {
await clearImmersiveTranslate();
window.location.reload();
} catch (error) {
console.error('清理过程中出错:', error);
}
})();
```

[^1]: 这是重新调出悬浮球的代码。
[^2]: 函数是不严谨的说法。
[^3]: [Zlib Decompress Online to Zlib Decode Text](https://codebeautify.org/zlib-decompress-online)
[^4]: joethei 负责插件审查和开发生态系统，据我观察，几乎所有插件都由他审核。
[^5]: 如果想查看此事的详细记录，可以查看 [关于这个插件无法上架的解释以及与官方人员的讨论记录obsidian-i18n · Discussion #19](https://github.com/0011000000110010/obsidian-i18n/discussions/19)
[^6]: [允许用户翻译插件 - 功能存档 - Obsidian Forum --- Allow users to translate plugins - Feature archive - Obsidian Forum](https://forum.obsidian.md/t/allow-users-to-translate-plugins/84437/1)
[^7]: [Remove all translations for obsidian-tasks-plugin - 删除所有 obsidian-tasks-plugin 的翻译文件。 · Issue #18](https://github.com/0011000000110010/obsidian-i18n/issues/18)