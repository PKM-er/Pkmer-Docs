---
uid: 20240627191830
title: 实现 OB 内的文本指令
tags: [Obsidian, OB分享, quicker]
description: 在 OB 里输入特定文本的时候，执行特定命令，甚至调用 Quicker 动作。
author: Moy
type: advanced
draft: false
editable: false
modified: 20240630162359
aliases: []
create_date: 2024-06-27T19:18
modified_date: 2024-06-30T15:39
categories: [分享, 工具, 学习]
---

# 实现 OB 内的文本指令

「文本指令」，即**输入特定的文本之后执行指令**。

在 Obsidian 内，可以用插件 **Latex Suite** [^1] 实现这个功能。

实现的效果：

![](Resource/Images/a391ef70f803d65111f0dd5d24471259.gif)

在上图中，只要在 OB 内输入 `lnk` 并空格，就会调用 Quicker 执行动作 [^2]，从当前浏览器获取到标签页并粘贴进来。

之前写文章介绍过 [[【快捷键】使用连续按键来快速打开页面|如何用连续按键作为快捷键来执行命令]]，这次相当于更进一步：**用文本来执行外部程序的功能**。

如此，我们便更进一步拓宽了「快捷键」的限制——==再也不用担心快捷键太多记不住了，现在完全可以通过输入几个字，来执行我们想要的操作！==

> [!NOTE] 文本替换插件
> Latex Suite 其实是个文本替换插件，类似的还有 Easy Typing，两者都可以在输入特定的文本之后将它转换成其他文本。
> 但代码执行功能是 LatexSuite 插件独有的，也是它最大的亮点。

## 定义文本指令

在 LatexSuite 的设置中，可以用 json 来定义替换规则。

![](Resource/Images/26aa2793fcdf173c321b9bd9999e7347.jpg)

我们先用一个最简单的替换规则来入门：

```js
{trigger: ">>", replacement:"> 🦊", options: "tA"},
```

这样的规则含义如下：

- `trigger: ">>"`： 在输入 ` >> ` 的时候触发替换
- `replacement:"> 🦊"`： 替换的内容为：` > 🦊 `
- `options: "tA"`： ` t ` 代表在文本模式下有效，` A ` 代表自动执行（否则需要按 Tab 或空格才会执行）

就是这么简单，把这行规则粘贴进插件设置的 **Snippets** 区域内试一下吧！

除此以外，我们还可以定义粘贴之后指针的位置：

```js
// 代码粘贴
{trigger: "`js ", replacement: "```js\n$0\n```", options: "tA"},
```

这里的 `$0` 就代表了粘贴后输入指针的位置，`\n` 则是换行，所以它会在转换后将输入光标放进代码块的中间。

![](Resource/Images/6486149069340d5676f93b03a22cdd7e.gif)

除了直接填写替换的文本，还可以填写 Javascript，以添加动态的文本。

例如：

```js
{trigger: "td ", replacement: () => ("# " + moment().format('YYYY.MM.DD') ), options: "tA"},
```

这段 JS 代码在你输入 `td` 并空格的时候，就会转成今天的日期大标题。

![](Resource/Images/ef103afbde1e2336e09561019d936e1c.gif)

> 更多介绍可以看插件的说明：[Function snippets](https://github.com/artisticat1/obsidian-latex-suite/blob/main/DOCS.md#function-snippets)

## 执行命令

如上文所说，Latex 不光可以替换「文本」，还可以在你输入特定文字的时候运行 JS 脚本。

**这就给了我们很大的操作空间**。

我们在 Obsidian 内，可以用如下命令来运行特定的命令（Command）：

```js
app.commands.executeCommandById('command-id');
```

比如，我们想在输入「打开设置」后打开设置，可以写：

```js
{trigger: "打开设置 ", replacement: () => {
    app.commands.executeCommandById("app:open-settings");
    return "";
}, options: "tA"},
```

### 获取命令 ID

至于「如何获取 command id」——

我们可以按 <kbd>Ctrl+Shfit+I</kbd> 打开开发者工具：

切换到 Console（控制台），输入 `app.commands.commands["`，然后会出现所有命令 ID，再输入几个字进行补全：

![](Resource/Images/8ecf74a7fa234dd4954fda66c5cd5ff7.png)

选中命令的 ID 并回车，就能看到这个命令的详细信息：

![](Resource/Images/5edf30a62d66257d7083763e0b6d0122.png)

这里的 `id` 即命令 ID。

## 调用外部程序

如果想要更进一步，调用外部程序——例如 Quicker，那么可以配合 Shell Commands[^3] 插件来执行！

ShellCommands 是一款专门用来运行外部程序的 OB 插件。

在插件的设置界面，可以填写需要运行的命令：

![](Resource/Images/028a9efa680e8e7cec06d25b70843bdf.png)

> 这里填写的内容和你在系统「运行」中执行的命令等同，所以也可以按 <kbd>Win+R</kbd> 来测试命令（在命令行执行也一样）
> ![](Resource/Images/763696ea4efde1d446458f204d8bb677.png)

然后以 Quicker 举例，在 Quicker 的文档 [^4] 中我们可以知道，

通过命令行运行 `"C:\Program Files\Quicker\QuickerStarter.exe" -c "runaction:动作标识?参数内容"` 就可以调用 QK 执行指定的动作。

所以我们只需要按照这个格式填写好动作 ID 和需要的参数，就完成了**在 OB 中调用 QK 动作** 的配置。

### 实例：OB 粘贴

正如前面所提到的，我在 OB 里会经常调用 Quicker 来把浏览器的内容粘贴进笔记，作为参考链接。

就以这个应用为例，我会填写参数：

`"C:\Program Files\Quicker\QuickerStarter.exe" "runaction:c86c0994-77ae-46ae-b61e-44eac5f88e59?{{selection}}"`

这里面 `c86c0994-77ae-46ae-b61e-44eac5f88e59` 是 QK 动作 **OB 粘贴** 的 ID，`{{selection}}` 是 ShellCommands 插件提供的参数，代表选中的文本。

![](Resource/Images/ed82fb2fb73cf2cb3cd8846ebb1dc445.png)

我在 SC 命令的 **Variables** 中将 `selection` 变量的默认值设置为 `NO-SELECTION`：

![](Resource/Images/f845e4f228d3a242d9c2bc3dbbc54ecb.png)

这样 Quicker 动作就可以根据传入的参数，来决定粘贴的方式：

- 如果有选中文本，就把链接粘贴进当前文本
- 否则，就粘贴完整的 Markdown 格式链接

![](Resource/Images/f68345a77405f9e33e2752b55b320e6f.gif)

> 为了方便演示，上图用的是快捷键 <kbd>Alt+V</kbd> ，展示了在选中文本与未选中的情况下，运行 QK 动作的差异。
> QK 本身的处理逻辑可以直接编辑动作查看。

### Quicker 的文本指令功能

其实，QK 自己也有文本指令功能，所以其实一些普通的动作直接用 QK 自带的文本指令就完全够用。

![](Resource/Images/1f92df222dc1cadbd2304f91813be02a.jpg)

本文之所以饶了这么一大圈，用 **LatexSuite + ShellCommands** 重新拼装出了「文本指令」的功能，一方面是作为实践「OB+ 外部联动」的尝试，另一方面，也是因为这样才能更好地获取**Obsidian 内的数据**（例如当前选中的文本、当前笔记的标题……这些数据从外部难以获取，而在 OB 内则可以轻易通过 API 来获得）

## 总结

本文从文本替换的基础应用出发，介绍了 Latex Suite 插件的配置规则和基础用法。随后拓展到如何从 Ob 内调用外部程序，以及更进一步的——如何将 OB 里的数据传递给 Quicker，并根据场景执行不同的功能。

绝大多数时候，因为 OB 自身的插件和脚本非常强大，所以很多的需求都可以直接自己内部完成。但是偶尔——像是需要和浏览器或者播放器进行交互——就会需要 QK 这样的外部工具进行协助。

而此前两者的「互通」就是最让我困扰的步骤，现在则基本可以双向打通了。

从 OB 到 QK，可以通过 ShellCommands 实现调用和传参；

而反过来，从 QK 到 OB，则可以通过 AdvancedURI[^5] 来打开文档或是运行命令。

至于后者，又是可以拓展成一篇文章的内容量了，以后有缘再聊。

### 小彩蛋：更多的 OBxQK 联动动作

基于上面所说的流程，我还做了几个非常实用的 Quicker 动作！

#### 粘压图片

[动作网址](https://getquicker.net/Sharedaction?code=c05c917c-bb5e-4f71-6191-08dc89b2fe34)

压缩剪贴板内的图片，并粘贴进 Obsidian

默认是压缩成最大宽度 1200 的 jpg 格式图片，可以自行调节。

这个动作可以有效避免「粘贴了超大的 png 进笔记然后占用几十 Mb 的空间」，我分配给了快捷键 <kbd>Ctrl+Num2</kbd>

> 也有 Obsidian 插件可以在粘贴图片的时候进行压缩，但是我嫌那个可以配置的参数太少，遂自己造轮子。

#### 获取标签页（获取视频封面）

[动作网址](https://getquicker.net/Sharedaction?code=cad4688c-ec09-4aa5-0613-08d838181f56)

其实是动作自带的功能，我默认关闭了。

启用之后，如果当前网页是 Youtube 或者 Bilibili 的视频页面，会自动获取视频的封面并粘贴进来。配合上面的粘压图片动作可以避免被超大体积的封面图背刺。

顺便，这个动作本来是为了方便在 QQ 上给人分享网址的，所以还支持了不少别的功能，包括但不限于：

1. 通过「先粘贴文本，再粘贴图片」的方式，支持聊天框里的粘贴
2. 多选标签页的时候运行，可以复制多个标签页的链接
3. 右键可以选择复制成纯文本、MD 格式或者是仅网址的模式

#### 截取视频画面/插入空降时间

[动作网址](https://getquicker.net/Sharedaction?code=375863dd-6665-4ef3-bad7-08dc6c306e08)

针对正在播放视频的网页，运行这个动作可以自动截取视频画面并粘贴进来。同样可以配合粘压图片动作，避免截图文件过大。

同时也提供了时间码&空降时间链接的功能，可以复制当前时间（或者可以直接跳转到当前时间的空降链接）并粘贴。

我给这个动作设置了快捷键 <kbd>Ctrl+Num3</kbd>

> [!info] Media Extended 插件
> 类似的功能用 ME 插件也可以做，但我之前试用的时候好像需要遵循特定的笔记规则，所以还是为了自己的习惯重新造轮子了 lol

> 🦊 这一套感觉也可以专门出一个「如何用 OB 做视频笔记」的工作流说明了 hhhh

___

[^1]: [artisticat1/obsidian-latex-suite](https://github.com/artisticat1/obsidian-latex-suite)
[^2]: 我自己写的用来在 OB 里快速粘贴的动作：[Ob粘贴 - by Moy - 动作信息 - Quicker](https://getquicker.net/Sharedaction?code=b259db0a-db2b-4c84-658e-08dc85dec23e) ，以及获取标签页的动作：[获取标签页 - by Moy - 动作信息 - Quicker](https://getquicker.net/Sharedaction?code=cad4688c-ec09-4aa5-0613-08d838181f56)
[^3]: [Taitava/obsidian-shellcommands](https://github.com/Taitava/obsidian-shellcommands)
[^4]: [从外部启动Quicker动作 - Quicker](https://getquicker.net/kc/manual/doc/quicker-starter)
[^5]: [Vinzent03/obsidian-advanced-uri](https://github.com/Vinzent03/obsidian-advanced-uri)