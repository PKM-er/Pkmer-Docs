---
uid: 20230516140955
title: Obsidian 扩展语法
tags: [Markdown]
description: Obsidian 扩展语法，引用内容，内容引用，引用具体标题内容，自定义图片大小，callout语法速查
author: OS
type: basic
draft: false
editable: false
modified: 20231025160203
---

# Obsidian 扩展语法

Obsidian 除了支持之前所说的 [[Markdown]] 基本语法，还有一些基于链接，和应用笔记，为了更方便产出而设置支持的扩展集。

## 标签（tag）

标签是一个组织大量笔记的好方法，它能让你更容易找到笔记。标签本质上是一个可点击的检索按钮，点击它 Obsidian 就会自动为你搜索包含这个标签的笔记。比如，点击 `#标签` 这个标签后，Obsidian 将会显示库中所有包含这个标签的笔记。标签有各种不同的用法，比如标明笔记的来源或是笔记的种类。Zettelkasten 方法的使用者则会将标签作为连接笔记、连接想法的“切入点”。

具体可参考 [[标签的使用]]

### 可使用的字符

标签中不允许使用空格。所以，如果你想区分标签中的词语，你可以使用以下格式：

- 使用驼峰式大小写: `#TwoWords`
- 使用下划线： `#two_words`
- 使用连字符： `#two-words`

总的来说，标签只允许以下符号：

1. `_` 下划线和 `-` 连字符号
2. 用于 [[标签的使用#嵌套标签]] 的 `/` 斜杠


## 笔记内容引用

引用笔记内容到文本

```markdown
![[笔记文件名#标题名]]    引用具体笔记某个标题下的全部内容
![[笔记文件名^文本块]]    引用具体笔记下某个文本块的内容
[[笔记文件名#标题名]]    链接具体笔记某个标题
[[笔记文件名^文本块]]    链接具体笔记某个文本块
[[笔记文件名^文本块|显示别名]]    链接具体笔记某个文本块，并显示别名
```

## 自定义图片大小

以下方式都是允许的：

- `![AltText|100x100](https://url/to/image.png)`，引用网络图片，并做裁剪，指定宽高
- `![AltText|100](https://url/to/image.png)`，引用网络图片，指定宽度，图片按照宽度缩放
- `![[image.png|100x100]]`，对本地图片（仓库中）宽度高度都做裁剪
- `![[image.png|100]]`，对本地图片（仓库中）并指定宽度，图片按照宽度缩放

或者这样表述你更你更理解：

- `![图片名称|宽度数值](链接地址)`，引用网络图片，并做裁剪
- `![[图片名|宽度数值]]`，对本地图片（仓库中）宽度高度都做裁剪

## Callout

> Obaidian 0.14.2 版本后增加了 Callout 功能，这个功能就是之前 Admonition (简称 ad 插件) 插件收编的，目前语法跟 Microsoft Docs 一致。之前用 ad 插件设置的提示框可以一键转换成最新的语法样式。

你可以参考英文原版，了解这个功能：[Use callouts](https://help.obsidian.md/How+to/Use+callouts)，也可以阅读下面的中文简要说明

在笔记中直接书写（无需代码块）如下内容：

```markdown
> [!规定的标记]
```

这里规定的标记在对应的文章中查找，标记和样式是对应的。

如果可以输入标题，则这样：

```markdown
> [!规定的标记] 标题内容
```

如果还可以输入内容：

```markdown
> [!规定的标记] 标题内容
> 笔记内容，你会发现和 markdown 中的引用是相同的语法
>
> 比如分段也是这样空一行
```

### 目前支持的样式列表

#### 官方示例

> [!note]
> Here's a callout block.
> It supports **markdown** and [[Internal link|wikilinks]].

> [!abstract]

> [!todo]

> [!info]

> [!tip]

> [!success]

> [!question]

> [!warning]

> [!failure]

> [!danger]

> [!bug]

> [!example]

> [!quote]

除了 info 类型还支持以下类型

- note
- abstract, summary, tldr
- info, todo
- tip, hint, important
- success, check, done
- question, help, faq
- warning, caution, attention
- failure, fail, missing
- danger, error
- bug
- example
- quote, cite

### 提示框的各种用法

- 可以没有内容直接显示标题

> [!TIP] Callouts can have custom titles, which also supports **markdown**!

- 折叠提示框

> [!FAQ]- Are callouts foldable?
> Yes! In a foldable callout, the contents are hidden until it is expanded.

#### 自定义提示框

可以通过 css 设置 my-callout-type 的样式

```css
.callout[data-callout="my-callout-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: icon-id;
    --callout-icon: '<svg>...custom svg...</svg>';
}
```

#### 居右对其

> [!error|right-small] 浮動到右側
>
> 小視窗，靠右

扩充 Callouts 的语法，在 Callout 类型后上 Pipe，再輸入下列设定：

> [!tip]+ 语法
>
> [!Callout 类型|left/right-small/medium/large] </br> >[!blank-container|left/right-small/medium/large]

### 扩展阅读

>[!Tip] 关联推荐
>- 如果你觉得 callout 可以服用到其他地方：[[obsidian-list-callouts]]
>- 如果你希望优化样式：[[Obsidian样式-Callout样式]]

### 视频教程

#### 基础优化

<iframe src="https://player.bilibili.com/player.html?aid=663178705&bvid=BV1xa4y1Q7Js&cid=1327096234&p=1&autoplay=false" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="80%" height="500"> </iframe>

#### 自定义美化

<iframe src="https://player.bilibili.com/player.html?aid=493403209&bvid=BV1XN411M7hg&cid=1331265281&p=1&autoplay=false" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" height="500" width="80%"> </iframe>
## 键盘文本语法

键盘文本也不一定非得是键盘按键，也可以作为**着重文本**突出显示。一般适合你要描述**快捷键**，按键有关的时候，推荐使用，当然使用其他强化语法也是可以的。

#### 键盘文本的格式

- **`<kbd>键盘文本</kbd>`**
- **`<kbd>Ctrl</kbd> + <kbd>X</kbd>`**
- **效果：**
  <kbd>Ctrl</kbd> + <kbd>X</kbd>

#### 加粗键盘文本

- **加粗**键盘文本的格式有**两种**：
- `<kbd>**键盘文本**</kbd>`
- `**<kbd>ctrl + x</kbd>**`
- **效果：**
<kbd>ctrl + x</kbd>

## 如何插入视频和音频

以插入 B 站视频为例

1. 找到 B 站相关视频，然后点击分享
2. 复制嵌入代码
例子：
```html
<iframe src="//player.bilibili.com/player.html...." scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
```

![image.png|566](https://cdn.pkmer.cn/images/20230516141418.png!pkmer)

1. 修改嵌入代码为：
```html
<iframe src="http://player.bilibili.com/player.html..." scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
```


在 `src=“` 后增加 `http:`

1. 将修改后的嵌入代码复制到 obsidian，执行预览看效果

## Emoji 符号

用一对 : 包裹，里面是 **Emoji** 符号的 **语义化文本**

- **示例：**
- `:smile``:sweat``:cat``:woman_cartwheeling`
  - **效果：**
😀 😅 😺 👩 🤸‍♀️

### 补充

- 不支持上述方式的 MD 编辑器或笔记软件，直接用 **输入法** 输入也是可以的
- **Windows 系统** 用户 **win + .** 就可以输入 Emoji 了
- **Obsidian** 用户可以安装**第三方插件**来支持 **Emoji** 的输入，推荐：
1. [[obsidian-emoji-toolbar]]
2. [[emoji-shortcodes]]
3. [[obsidian-icon-shortcodes]]

## 注释语法

**Markdown** 的  **注释**  和  **HMTL**  一样，注释的内容在  **渲染界面** **不可见** （部分编辑器可见)

### **注释 的格式：**

- `<!-- 这里是注释的内容 -->`
- 注释可以是单行，也可以是多行
- 如果有在使用  **Obsidian**  的，它的注释格式是不一样的
- **`%%这是Obsidian的注释内容%%`**

```html
<!-- 这里是一行注释 -->

<!--
这里是
一段
假装有
很多行的
注释
-->

%%这是一行Obsidian里的注释%%

%%
这里是
一段
假装有
很多行的
Obsidian里的
注释
%%
```

### 示范 (只有切换至 编辑模式 才能看到喔)

%% 这是一行 Obsidian 里的注释%%

%% 这里是 一段 假装有 很多行的 Obsidian 里的 注释 %%

## 视频教程

<iframe src="https://player.bilibili.com/player.html?aid=959026749&bvid=BV1wp4y1c7jp&cid=1282492890&p=1&autoplay=false" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="80%" height="500"> </iframe>

