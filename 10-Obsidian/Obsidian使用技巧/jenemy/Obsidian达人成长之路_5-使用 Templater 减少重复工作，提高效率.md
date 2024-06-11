---
uid: 20240611090703
title: Obsidian 达人成长之路 _5- 使用 Templater 减少重复工作，提高效率
tags: [Obsidian, Templater]
description: 
author: jenemy
type: other
draft: false
editable: false
modified: 20240611091205
---

# Obsidian 达人成长之路 _5- 使用 Templater 减少重复工作，提高效率

知识管理社区 PKMer 将 Templater 称之为 Obsidian 四大金刚（Excalidraw/Dataview/Templater/QuickAdd）之一，可见其在 Obsidian 社区插件中的地位举足轻重。我们在系列文章前 3 篇 [[dataview#Dataview 达人之路系列]] 介绍了 Dataview 插件的所有知识点，这篇文章我们来带领读者全面了解 Templater 的用法，掌握这个插件后将极大地减少重复工作量，提高笔记效率。

Templater 就是一个应用于 Obsidian 中的模板语法插件，它使用户可以预制模板文件然后在其中插入各种变量和函数，然后在我们创建新文档时将模板应用到当前文档中。它支持执行 JavaScript 脚本代码来操作这些变量和函数，因此有很大的想象和发挥空间，根据不同的需求来创建不同的模板文件，把一切都安排妥妥贴贴，拿捏恰到好处。

本文力争让读者一次性搞懂，学会 Templater 的使用，少走弯路，节约时间。

其实在 Obsidian 的核心插件中也有一个叫 **Templates** 的官方标配插件，只不过因其功能太过简单，所以很少有人用到，不过我们在这里也给大家介绍一下。

>[!Warning] 
>为了更好的理解，文章中有大量的 GIF 动画图片，建议在电脑上阅读以获得更好的体验。

## 官方 Templates 核心插件

官方提供的模板功能非常的少，只有插入文档标题、日期和时间的功能。要使用官方模板，我们需要在【选项】->【核心插件】->【模板】面板中指定【模板文件夹位置】指定提前创建好的用于放置模板文件的目录（通常为 `Templates` 或 `模板`）。

创建一个空白的仓库，我们创建好放置模板的目录，然后在目录下创建一个名为 `日记.md` 的文件，填充以下内容：

````
---
title: {{title}}
created_at: {{date}}
created_time: {{time}}
---

## 标题：{{title}}

创建日期和时间：{{date}} {{time}}
````

然后我们新建 3 个新文件，来看一下如何插入模板。

### 通过 Ribbon 按钮插入模板

如果未改变工作区的功能按钮的布局，那么默认情况下左边 Ribbon 区域第 5 个图标为插入模板的按钮，我们点击就可以触发弹出框来选择我们提前准备好的模板。

![动画2 1](https://cdn.pkmer.cn/images/202406110910722.gif!pkmer)

从 GIF 动画中可以看到在 YAML 属性区域和文档正文区域都成功插入了我们模板指定的信息。

### 使用命令面板调用命令插入模板

在 Obsidian 中提供了命令（Command）可以执行一些操作，我们这里的模板也用 3 个相关的命令：

1. **模板**：插入模板。
2. **模板**：插入当前日期。
3. **模板**：插入当前时间。

插入命令的方式也有 3 种：

1. 通过 Ribbon 中的【打开命令面板】按钮（Ribbon 区域第 6 个图标）。
2. 使用快捷键 <kbd>Ctrl + P</kbd>(MacOS 为 <kbd>Cmd + P</kbd>)。
3. 启用斜杠命令（【选项】->【核心插件】->【斜杠命令】开启即可）。

>[!Tip] 
>建议大家使用【选项】->【命令面板】中的【置顶命令】功能，将常用的命令置顶，这样子我们打开命令面板时就可以直接 <kbd>Enter</kbd> 执行就可以了。

作者在这里提前将【插入模板】命令置顶，以方便截取操作过程。

![动画2 2](https://cdn.pkmer.cn/images/202406110910723.gif!pkmer)

>[!Note] 
>截图动画中显示的快捷键为 <kbd>Ctrl+P</kbd>，看到 <kbd>CapsLock</kbd> 是因为我改了 Windows 系统的修饰键，将其指定为了 <kbd>Ctrl</kbd>。

因为官方这个模板的功能实在是很简单，没有什么可说的，只需要注意如何使用 `:` 符号来格式化日期和时间就好了。日期和时间默认格式为：`{{date:YYYY-MM-DD}} {{time: HH:mm}}`，更多格式符号，请参考：[Moment.js | Docs (momentjs.com)](https://momentjs.com/docs/#/displaying/format/)。

## 快速入门

关于 Templater 插件的安装我就省略了，对本文感兴趣的读者想必插件这种安装以及科学上网都不用操心。关于插件选项设置我们这里暂时只关注【Template folder location】，将目录指定为前面我们但要 Obsidian 官方模板中同样的目录。

有了前面官方模板使用方法的介绍，相信大家现在再来入手 Templater 就容易多了，废话不多说，我们将上面的模板修改成 Templater 支持的语法：

````
---
title: <% tp.file.title %>
created_at: <% tp.date.now("YYYY-MM-DD") %>
created_time: <% tp.date.now("HH:mm") %>
---

## 标题：<% tp.file.title %>

创建日期和时间：<% tp.date.now("YYYY-MM-DD HH:mm") %>

````

>[!Tip] 推荐大家在【选项】->【文件与链接】设置中将【新建笔记的存放位置】设置为**当前文件所在的文件夹**，这样子我们在创建新的笔记时不需要再去移动文件位置。同时，在快捷键中为【切换实时阅览/源码模式】指定一个快捷键 <kbd>Ctrl+\\</kbd>，为 【插入代码块】指定 <kbd>Alt+C</kbd>。最后记住默认 <kbd>Ctrl+E</kbd> 为源码模式与阅读模式的默认快捷键。

我们在安装了 Templater 插件后，会在 Ribbon 区域多一个专属图标，点击后可以直达模板选择面板。

现在删除之前创建的未命名文件，然后新建一个新的，我们来看一下插入 Templater 模板的效果：

![动画2 3](https://cdn.pkmer.cn/images/202406110910724.gif!pkmer)

>[!Tip] 
>在安装了这个插件后，我们在 Obsidian 文档中输入模板标签时，会自动提示所支持的 API 并带有描述文字。

![动画2 8](https://cdn.pkmer.cn/images/202406110910725.gif!pkmer)

## 使用命令执行模板插入

在介绍官方模板插件进我们讲过它提供了 3 个命令，同样在 Templater 中也提供了几个命令来快速操作：

- **Template**: Open Insert Template modal <kbd>Alt + E</kbd>
- **Template**: Jump to next cursor <kbd>Alt + Tab</kbd>
- **Template**: Create new note from template <kbd>Alt + N</kbd>
- **Template**: Replace templates in the active file <kbd>Alt + R</kbd>

可以看到总共有 4 个命令，并且每个任务都配备了操作快捷键。为了方便大家理解，我会给出每一个命令的操作流程过程。

>[!Tip] 
>如果你是 MacOS 系统，可能用不了 <kbd>Alt</kbd> 键来触发这些命令，建议先根据：[禁用自动弹出特殊字符 (ilikemac.com)](https://ilikemac.com/posts/disable-special-characters/) 文章来修改，然后再在 Obsidian 中将相关快捷键先删除再添加进来，就可以正常工作了。

### 命令：插入模板

这个命令和点击 Ribbon 中的 Templater 图标功能是一样的，同时直达 Obsidian 中【插入命令】选择【插入模板】后的面板。

![动画2 4](https://cdn.pkmer.cn/images/202406110910726.gif!pkmer)

### 命令：光标跳转

这个功能很实用，让我们可以自定义模板在被插入后光标所在的位置，也可以放置多个光标埋点，按一定的顺序使用快捷键来依次跳转到定位处。

在使用这个功能时我们需要将 Templater 的【Automatic jump to cursor】 保持为打开状态。然后在模板中使用 `<% tp.file.cursor() %>` 来插入光标，要实现通过快捷键在多个光标位置跳转我们需要创建多个光标，顺序只需要将 `tp.file.cursor()` 函数中传入 `1, 2, 3, ...` 就可以了。

>[!Tip] 
>默认光标跳转快捷键为 <kbd>Alt + Tab</kbd>，这个在 Windows 系统中和系统快捷键冲突了，我们只能将其修改成别的，我这里是 <kbd>Alt + ;</kbd>。

我们新建一个模板来测试光标跳转：

````
这个功能很实用，让我们<% tp.file.cursor() %>可以自定义模板在被插入后光标所在的位置，也可以<% tp.file.cursor(2) %>放置多个光标埋点，按一定的顺序使用快捷键来依次跳转到<% tp.file.cursor(3) %>定位处。
````

现在我们见证奇迹：

![动画2 5](https://cdn.pkmer.cn/images/202406110910727.gif!pkmer)

>[!Tip] 
>使用这个功能我们需要注意一点：新建文档默认情况下是会选中文档名，此时如果不将光标手动点击到正文内，插入的光标是无法定位到第一个光标位置的，后续我们可以成功执行跳转。

### 命令：从模板创建文件

这个命令的作用是在创建文件时直接基于选中的模板，而不需要像前面那样先创建文件再应用命令。

![动画2 6](https://cdn.pkmer.cn/images/202406110910728.gif!pkmer)

从截图动画中可以看出，文件是创建在了目录“博客”中，如果我们笔记当前没有打开的文件，则会创建在根目录下。

### 命令：当前文件中执行模板替换

我们创建基于模板的页面不一定都是从指定的模板目录中获取模板，也可以是从别处复制过来，或者说我们想借用 Templater 强大的模板解析功能来实现单个页面注入动态内容，这个时候就是该命令发挥作用的时候了。

我们将其中一个模板文件内容拷贝一份放置在新建的一个文件中，然后我们使用快捷键来看一下执行过程：

![动画2 7](https://cdn.pkmer.cn/images/202406110910729.gif!pkmer)

可以看到当前页面中的模板内容全部被替换成了执行结果。

## 内置函数详解

Templater 提供了很多内置的函数，这些函数封装了 Obsidian 内部的一些逻辑，我们只需要调用它们就可以获取仓库中所有笔记的任何信息。通过前面几篇文章的介绍和不断地熏陶，其实细想一下，和我们打交道的无外乎就是：文件信息（文件名、路径、创建时间 ...）、文档属性、链接、任务、查询等，有了经验积累，下面的内容就相对来说很容易消化吸收。

### 文件相关属性和函数

`tp.file` 模块中定义了文件操作的相关函数，我们通过它可以创建笔记/重命名/移动笔记，获取笔记信息，获取标签信息、文档选区信息等操作。

下面我们会每一个函数进行使用讲解，有的函数过于简单就一笔代过不作过多解释。

#### tp.file.content

这个属性的作用是在 Templater 执行时将当前文档内容插入到 `tp.file.content` 所在位置。

![动画2 10](https://cdn.pkmer.cn/images/202406110910730.gif!pkmer)

#### tp.file.create_new()

这个函数的作用是基于模板或内容创建新的文档，其方法签名为：

```ts
tp.file.create_new(template: TFile | string, filename?: string, open_new: boolean = false, folder?: TFolder | string)
```

参数：

- `template` 模板文件或者文本内容，指定模板需要使用 `tp.file.find_tfile(name)` 来获取指定的模板。
- `filename` 新建的文件名，不设置则默认为 "Untitled"（中文：" 未命名 "）。
- `open_new` 如果为 `true` 将会直接打开创建的文件。
- `folder` 指定新文件所在的目录。

>[!Tip] 官方文档上有说 `open_new` 这个参数有副作用，目前作者还未遇到，暂时给不出例子。

##### 示例 1：基于文本创建文档

````
<%* await tp.file.create_new("MyFileContent", "MyFilename") %> 
````

结果：

![动画2 11](https://cdn.pkmer.cn/images/202406110910732.gif!pkmer)

##### 示例 2：基于模板创建文档

这里需要使用 `tp.file.find_tfile()` 方法来获取我们事先创建好的模板。

````
<%* await tp.file.create_new(tp.file.find_tfile("日记2"), "MyFilename") %> 
````

结果：

![动画2 12](https://cdn.pkmer.cn/images/202406110910733.gif!pkmer)

##### 示例 3：创建文档后立即打开

````
<%* await tp.file.create_new("MyFileContent", "MyFilename", true) %> 
````

结果：

![动画2 13](https://cdn.pkmer.cn/images/202406110910734.gif!pkmer)

##### 示例 4：指定创建目录

函数的第 4 个参数 `folder` 用于指定创建文件的目录，默认情况下为【选项】->【文件与链接】中【新建笔记的存放位置】所指定的选项来决定，当前示例是选择的*当前文件所在的文件夹*。如果你的设置和我的不一样，可以使用 `tp.file.foler(true)` 来获取当前要执行模板文件的目录，也可以直接使用目录名路径字符串来指定。

下面是几种设置目录的方式：

- `tp.file.folder(true)`
- `"博客"`
- `app.vault.getAbstractFileByPath("博客")`

示例：

````
<%* await tp.file.create_new("MyFileContent", "MyFilename", true, "博客") %> 
````

结果：

![动画2 14](https://cdn.pkmer.cn/images/202406110910735.gif!pkmer)

#### tp.file.creation_date()

`tp.file.creation_date(format: string = "YYYY-MM-DD HH:mm")` 函数用于获取文件的创建日期和时间信息。

#### tp.file.cursor()

`tp.file.cursor(order?: number)` 函数的作用是在插入模板后，将光标设置到此位置。可以设置多个光标位置并指定好顺序，然后使用快捷键来移动光标。

关于光标的插入与使用，我们在前面有实例讲解过，这里就不再重复了。

````
// File cursor
<% tp.file.cursor() %> 
// File multi-cursor
<% tp.file.cursor(1) %>Content<% tp.file.cursor(1) %>
````

#### tp.file.cursor_append()

`tp.file.cursor_append(content: string)` 函数的作用是在文件中的活动光标后追加一些内容。经过作者的实验，放置 `tp.file.cursor_append()` 的模板不能有其它内容，举个例子，如下面的内容：

````
需要 <% tp.file.cursor_append("你好，读者朋友！") %>  无可奈何花落去
````

当我们将其应用在一个新建的文档中时会得到：

````
你好，读者朋友！需要   无可奈何花落去
````

如果前后没有内容的操作如下：

![动画2 15](https://cdn.pkmer.cn/images/202406110910736.gif!pkmer)

#### tp.file.exists()

`tp.file.exists(filepath: string)` 用于判断文件是否存在。

#### tp.file.find_tfile()

`tp.file.find_tfile(filename: string)` 函数用于搜索文件并返回一个 `TFile` 实例。

`TFile` 实例截图如下：

![Pasted image 20240604181700](https://cdn.pkmer.cn/images/202406110910737.png!pkmer)

#### tp.file.folder()

`tp.file.folder(relative: boolean = false)` 函数用于检索文件的文件夹名称。如果 `relative` 为 `true` 会返回文档所在目录路径，为 `false` 只返回目录名。默认为 `false`。

以 `博客/Obsidian/Untitled.md` 为例：

![动画2 16](https://cdn.pkmer.cn/images/202406110910738.gif!pkmer)

#### tp.file.include()

`tp.file.include(include_link: string | TFile)` 函数用于包含文件的链接内容，将解析包含的内容中的模板。

这里的参数 `include_link` 可以是链接也可以是 `TFile` 文件。关于链接的相关知识点我就不多说了，不清楚的请仔细阅读系列文章第一篇。

下面我们准备内容：

````
## Introduction

Templater is a template language that lets you insert variables and functions results into your notes. It will also let you execute JavaScript code manipulating those variables and functions.

With Templater, you will be able to create powerful templates to automate manual tasks.

## Quick Example

The following template file, that is using Templater syntax:

```
---
creation date: <% tp.file.creation_date() %>
modification date: <% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss") %>
---

<< [[<% tp.date.now("YYYY-MM-DD", -1) %>]] | [[<% tp.date.now("YYYY-MM-DD", 1) %>]] >>

# <% tp.file.title %>

<% tp.web.daily_quote() %> 
```
````

接下来引入模板：

````
<% tp.file.include(tp.file.find_tfile("Welcome")) %> 
<% tp.file.include("[[Templater 好牛#Introduction]]") %>  
<% tp.file.include("[[Templater 好牛#^0448f4]]") %>  
````

结果：

![动画2 17](https://cdn.pkmer.cn/images/202406110910739.gif!pkmer)

#### tp.file.last_modified_date()

`tp.file.last_modified_date(format: string = "YYYY-MM-DD HH:mm")` 函数返回文件最后一次修改日期信息。

#### tp.file.move()

`tp.file.move(new_path: string, file_to_move?: TFile)` 函数用于将文件移动到所需的库位置。

其中 `file_to_move` 为可选参数，默认为当前文件。

注意：新路径需要包含文件夹和文件名。

下面我们使用下面的模板来将当前文件移动到根目录，同时也将根目录的 `Welcome.md` 文件移动当前目录中。

````
<% tp.file.move("foo") %> 
<% tp.file.move(tp.file.folder(true) + "/Welcome", tp.file.find_tfile("Welcome")) %> 
````

结果：

![动画2 18](https://cdn.pkmer.cn/images/202406110910740.gif!pkmer)

#### tp.file.path()

`tp.file.path(relative: boolean = false)` 函数用于获取文件基于当前磁盘的绝对路径，如果 `relative` 设置为 `true` 则返回基于当前仓库的相对路径。

![动画2 19](https://cdn.pkmer.cn/images/202406110910741.gif!pkmer)

从图中可以看出系统路径和我们当前在仓库中的路径分隔符不致，我们这里仅示例不去额外处理。

#### tp.file.rename()

`tp.file.rename(new_title: string)` 函数用于重命名文件。

![动画2 20](https://cdn.pkmer.cn/images/202406110910742.gif!pkmer)

#### tp.file.selection()

`tp.file.selection()` 函数用于检索活动文件的文本选择。

![动画2 21](https://cdn.pkmer.cn/images/202406110910743.gif!pkmer)

>[!Tip] 我们不能跨文件去操作，因为选中另外一个文件时上一个文件的选区就失去焦点了。

#### tp.file.tags

`tp.file.tags` 属性用于获取当前文件的所有标签。

![动画2 22](https://cdn.pkmer.cn/images/202406110910744.gif!pkmer)

#### tp.file.title

`tp.file.title` 属性用于获取页面标题。

### 获取 YAML 中的属性

`tp.frontmatter` 模块用于获取 YAML 中定义的属性。

语法为：`tp.frontmatter.<frontmatter_variable_name>`。

````
---
alias: myfile
note type: seedling
categories:
  - book
  - movie
---

file content
````

可通过下面的模板来获取内容：

````
File's metadata alias: <% tp.frontmatter.alias %>
Note's type: <% tp.frontmatter["note type"] %>
<% tp.frontmatter.categories.map(prop => `  - "${prop}"`).join("\n") %> 
````

结果：

![动画2 24](https://cdn.pkmer.cn/images/202406110910745.gif!pkmer)

### 日期和时间操作

`fn.date` 模块包含了时期和时间的相关操作。我们可以直接使用 Moment.js 实例 `moment` 来操作日期和时间，如：

````
<% moment().format("YYYY-MM-DD") %> %% 2024-06-05 %%
<% moment().startOf("month").format("YYYY-MM-DD") %> %% 2024-06-01 %%
<% moment().endOf("month").format("YYYY-MM-DD") %> %% 2024-06-30 %%
````

也可以使用 Templater 提供的封装函数：

#### tp.date.now()

`tp.date.now(format: string = "YYYY-MM-DD", offset?: number | string, reference?: string, reference_format?: string)` 函数用于获取当前时间。

参数解释：

- `format` 日期格式化字符串，默认为 `YYYY-MM-DD`。
- `offset` 日期偏移。传数字则以天为单位进行运算，也可以传 ISO 8601 格式的持续时间（Duration）。
- `reference` 日期来源，例如从日记文档标题中获取。
- `reference_format` 来源日期引用的格式。

##### 获取现在日期和时间

我们首先使用 `tp.date.now()` 来获取当前时间，并按默认格式输出，然后再指定格式字符格式化当前日期和时间。

````
<% tp.date.now() %> %% 2024-06-05 %%
<% tp.date.now("Do MMMM YYYY") %> %% 5日 六月 2024 %%
````

##### 基于当前的相对时间

通过传入第 2 个参数并使用数字进，我们可以基于当前日期进行计算，获取昨天、前天、明天、后天、一周前/后，一个月前/后以及前后 N 天的日期。

````
<% tp.date.now("YYYY-MM-DD", -7) %> %% 2024-05-29 %%
<% tp.date.now("YYYY-MM-DD", 7) %> %% 2024-06-12 %%
````

我们也可以传入 ISO 8601 格式的持续时间，如：`P1W` 表示一周，上面的示例可以改成：

````
<% tp.date.now("YYYY-MM-DD", "P-1W") %> %% 2024-05-29 %%
<% tp.date.now("YYYY-MM-DD", "P1W") %> %% 2024-06-12 %%
<% tp.date.now("YYYY-MM-DD HH:mm") %> %% 2024-06-05 13:24 %%
<% tp.date.now("YYYY-MM-DD HH:mm", "PT2H30M") %> %% 2024-06-05 15:54 %%
````

关于这个 ISO 8601 形式的持续时间我有在系列文章中的第 2 篇中有关 Luxon 小节有提及。我们只需要记住下面的格式即可：

1. `P[n]Y[n]M[n]DT[n]H[n]M[n]S`
2. `P[n]W`
3. `P<date>T<time>`

基中 `[n]` 为要被替换的具体日期或时间值，例如 `P2Y` 表示 `02年`，`P1Y-2M` 表示 `1年负2个月`，也就是 `10个月`。

##### 从字符串中提取日期和时间

官方文档中举例是从 `tp.file.title` 中以 `YYYY-MM-DD` 的格式去获取日记日期，其实我们是可以从任何字符串中按指定匹配的格式提取出日期和时间。

````
<% tp.date.now("小棉袄出生日期：YYYY-MM-DD", 0, "这里面包含日期 2023-08-20 小灼灼出生", "YYYY-MM-DD") %> %% 小棉袄出生日期：2023-08-20 %%
<% tp.date.now("小棉袄出生日期：YYYY-MM-DD", 0, "这里面包含日期 20/8/2023 小灼灼出生", "DD/MM/YYYY") %> %% 小棉袄出生日期：2023-08-20 %%
<% tp.date.now("小棉袄出生日期：YYYY-MM-DD", 0, "这里面包含日期 1692489600000 小灼灼出生", "x") %> %% 小棉袄出生日期：2023-08-20 %%
````

#### tp.date.tomorrow()

`tp.date.tomorrow(format: string = "YYYY-MM-DD")` 函数用于获取明天的日期和时间值。

#### tp.date.weekday()

`tp.date.weekday(format: string = "YYYY-MM-DD", weekday: number, reference?: string, reference_format?: string)` 函数用于获取当前日期所在周的指定星期数，`0` 表示周一，`-7` 表示上周一。

````
周一：<% tp.date.weekday("YYYY-MM-DD", 0) %> %% 2024-06-03 %%
周二：<% tp.date.weekday("YYYY-MM-DD", 1) %> %% 2024-06-04 %%
周三：<% tp.date.weekday("YYYY-MM-DD", 2) %> %% 2024-06-05 %%
周四：<% tp.date.weekday("YYYY-MM-DD", 3) %> %% 2024-06-06 %%
周五：<% tp.date.weekday("YYYY-MM-DD", 4) %> %% 2024-06-07 %%
周六：<% tp.date.weekday("YYYY-MM-DD", 5) %> %% 2024-06-08 %%
周日：<% tp.date.weekday("YYYY-MM-DD", 6) %> %% 2024-06-09 %%
上周一：<% tp.date.weekday("YYYY-MM-DD", -7) %> %% 2024-05-27 %%
````

#### tp.date.yesterday()

`tp.date.yesterday(format: string = "YYYY-MM-DD")` 函数用于获取昨天的日期和时间值。

### 配置相关

`tp.config` 模块用于暴露 Templater 的运行时配置。

#### tp.config.active_file?

`tp.config.active_file` 是指我们当前应用模板所在的文件。这个值可以为 `null`，这种情况我们接下来会进行分析讲解。

我们可以在当前文件中使用下面的模板语句在控制台中输出 `TFile` 信息，相较用 `<%* console.log(tp.file.find_tfile("startup")) %>` 要少输入不少字符。

````
<%* console.log(tp.config.active_file) %> 
<%* console.log(tp.file.find_tfile("startup")) %> 
````

![动画2 26](https://cdn.pkmer.cn/images/202406110910746.gif!pkmer)

下面我们再来看一下，同样的文件作为模板应用于创建时的控制台输出的两种情况。

**1. 创建文件时有正在编辑的文档**

这个种情况 `tp.config.active_file` 的值为当前处于编辑状态的文件。

![动画2 27](https://cdn.pkmer.cn/images/202406110910747.gif!pkmer)

**2. 创建文件时为空白主页**

这种情况下 `tp.config.active_file` 的值为 `null`。

![动画2 28](https://cdn.pkmer.cn/images/202406110910748.gif!pkmer)

#### tp.config.run_mod

`tp.config.run_mod` 属性用于表示运行的模式，我们已知的有：基于模板创建新文件、重写当前编辑文件和在当前文件追加内容。

翻阅插件的源码，会发现基定义了 6 种模式：

```ts
export enum RunMode {
    CreateNewFromTemplate,
    AppendActiveFile,
    OverwriteFile,
    OverwriteActiveFile,
    DynamicProcessor,
    StartupTemplate,
}
```

## 插件配置选项

这一节我们来细说一下 Templater 插件的一些配置项，读者可根据自己的实际使用场景灵活配置。

### 通用设置

通用设置中的大多数设置都是选项开关，没有什么特别要说明的。

设置界面如下：

![Pasted image 20240606174242](https://cdn.pkmer.cn/images/202406110910749.png!pkmer)

### 模板快捷键

这个功能就是为我们定义的模板添加一个全局的快捷键，使用进需要注意的是在应用时，需要有一个当前正在编辑的文档才可以应用。

下面是我为本地一个模板添加了一个快捷键 <kbd>Alt + 1</kbd>，相关的配置界面如下：

![Pasted image 20240606175357](https://cdn.pkmer.cn/images/202406110910750.png!pkmer)

结果：

![动画2 32](https://cdn.pkmer.cn/images/202406110910751.gif!pkmer)

### 目录模板

我们通常会指定一个放置全局模板的目录，在选择模板创建文档时，模板源都是来自这个模板目录。如果用户创建了大量的模板，比如上百个，这种情况下，通过下拉框选择的效率明显会低很多，而且很多时候有些模板只适用于特定的知识分类目录，所以官方提供了目录模板来应对这种场景。

描述挺完美的，但是实际上这个目录模板只是对我们指定的目录在使使用模板时如果有指定专门的模板才会起作用，而并没有把其它模板过滤掉，顺序也未发生变化。

下面我们先来看一下设置界面：

![Pasted image 20240606114648](https://cdn.pkmer.cn/images/202406110910752.png!pkmer)

上面的截图中我们已经添加了一个 `博客/Obsidian` 目录对应的模板，这个模板我放置在了统一的模板目录中。

>[!Tip] 模板文件必须放置在指定的统一模板目录中。

下面是模板的内容，我们在其中添加了一段脚本用于自动生成特定的文档名：

````
---
tags:
  - 博客
  - Obsidian
---

<%*
const isDefaultTitle = tp.file.title.startsWith("Untitled") || tp.file.title.startsWith("未命名")
let title
const titlePrefix = "Obsidian 达人成长之路："
const titleSuffix = " 插件使用"

if (isDefaultTitle) {
title = await tp.system.prompt("Title")
if (isDefaultTitle) {
	title = await tp.system.prompt("Title")
    if (title.trim() !== "") {
        await tp.file.rename(`${titlePrefix}${title}${titleSuffix}`)
    } else {
        title = tp.file.title
    }
} else {
	title = tp.file.title
}
%>

# <% title %>

<% tp.file.cursor() %>

## 参考

- 
````

然后我们在博客目录中来创建一篇关于 QuickAdd 的文章，看看效果如何：

![动画2 29](https://cdn.pkmer.cn/images/202406110910753.gif!pkmer)

可以看到在日记目录中未触发目录模板功能，然后我们在博客目录中成功触发了。

>[!Tip] 在创建文件时，如果当前工作区无打开文件我们需要在目标目标中使用右键来创建，否者无法触发。

现在我们进一步拓展，因为目录模板并没有被限制在目标目录中，就像上面我们在日记目录中虽然在创建时没有自动触发选择模板的功能，但我们可以手动再去应用一次模板。

现在我们要做的是将基于目录模板创建的非目标目录中的文件在应用模板后自动将其移动到目标目录中去，下面是改进后的实现：

````
---
tags:
  - 博客
  - Obsidian
---

<%*
const isDefaultTitle = tp.file.title.startsWith("Untitled") || tp.file.title.startsWith("未命名")
let title
const titlePrefix = "Obsidian 达人成长之路："
const titleSuffix = " 插件使用"

if (isDefaultTitle) {
	title = await tp.system.prompt("Title")
    if (title.trim() !== "") {
        await tp.file.rename(`${titlePrefix}${title}${titleSuffix}`)
    } else {
        title = tp.file.title
    }
} else {
	title = tp.file.title
}

const currentTemplateFolder = "博客/Obsidian"
const currentFileFolder = tp.config.active_file.parent.path

if (!currentFileFolder.startsWith(currentTemplateFolder)) {
	if (isDefaultTitle) {
		await tp.file.move(`${currentTemplateFolder}/${titlePrefix}${title}${titleSuffix}`);
	}
}
%>

# <% title %>

<% tp.file.cursor() %>

## 参考

- 
````

结果：

![动画2 30](https://cdn.pkmer.cn/images/202406110910754.gif!pkmer)

我这里模板对应用的目录是用变量 `currentTemplateFolder` 表示，是写死的，因为我们获取不应用于文档的模板信息。

### 启动模板

启动模板顾名思义就是在 Templater 插件启动地时候执行的模板。这个模板不会有任何渲染输出，它是我们在 Templater 启动时执行一些操作，如添加 Hooks 来响应处理 Obsidian 事件。

设置界面如下：

![Pasted image 20240606171517](https://cdn.pkmer.cn/images/202406110910755.png!pkmer)

这里我在 `About.md` 中放置了一行脚本在控制台输出一段文本 `console.log("我是模板开始执行啦。。")`。

![动画2 31](https://cdn.pkmer.cn/images/202406110910756.gif!pkmer)

### 用户脚本

### 使用系统命令函数

## 实际应用

下面为大家带来一些实际应用方面的例子，虽然在前面的章节中也穿插了部分案例，这里更多的是展示一些技巧和常用的模式，方便读者应用到自己的笔记系统中。

### 为文档添加创建和修改时间

可能有人会觉得很奇怪，每一个文件不是默认自带了创建时间和上次修改时间，我们自己何必再多此一举额外添加两个属性？这是因为如果你的文档只是在单机操作的情况下系统提供的时间是没有什么问题的，但是如果涉及到多个设备同步，或者使用 Git 来管理，你就会突然发现这个时间会改变，文件并不是你最早创建的日期

### 执行模板前先清空文档内容

如果我们在一个已有内容的文档来执行一个模板，通常情况下会将新的内容追加到当前内容的后面。有时候我们想替换整个文档内容，包括 YAML 区域中的属性。

下面是一个 Go 的博客模板，用来替换 Obsidian 的模板内容。

````
---
tags:
  - 博客
  - go
  - net
---
<%* await app.vault.modify(tp.file.find_tfile(tp.file.path(true)), "") _%>

go 文章内容
````

执行过程：

![动画2 33](https://cdn.pkmer.cn/images/202406110910757.gif!pkmer)

可以看到文章内容和 YAML 区域内容都成功替换掉了，如果你想改变文件名也是可以的。

### 创建文件时动态添加属性

我们在前面介绍目录模板时使用的例子中，标签默认添加了 `#博客` 和 `#Obsidian`，其实我在写文章的时候还会把目录插件的名称也作为标签。我们无法在 YAML 区域使用 `<% - title %>`，因为我是在后面定义的，所以我们要寻求别的方法来实现。

下面这个实现来自网上，使用用户脚本来实现。

在 `Scripts` 目录中分别新建 `formatted_frontmatter.js` 和 `mutate_frontmatter.js`，并复制下面的脚本内容：

````
%% formatted_frontmatter.js %%
```js
module.exports = async (tp, raw) => {
	const { position, ...frontmatter } =
		tp.frontmatter && Object.keys(tp.frontmatter).length > 0
			? tp.frontmatter
			: tp;

	let output = "";
	const yaml = await import("https://unpkg.com/js-yaml?module");
	try {
		output += yaml.dump(frontmatter, {
			// quotingType: '"',
			// forceQuotes: true,
		});
		if (raw) {
			return output;
		} else {
			return ["---", output, "---"].join("\n");
		}
	} catch (e) {
		console.log(e);
	}
};
```

%% mutate_frontmatter.js %%
```js
module.exports = (tp, attributes = {}) => {
	if (typeof attributes !== "object") {
		throw new Error("attributes must be an object");
	}
	let { position, ...frontmatter } =
		tp.frontmatter && typeof tp.frontmatter === "object" ? tp.frontmatter : {};
	for (let key in attributes) {
		if (Array.isArray(frontmatter[key]) || Array.isArray(attributes[key])) {
			if (Array.isArray(frontmatter[key]) && Array.isArray(attributes[key])) {
				frontmatter[key] = frontmatter[key].concat(attributes[key]);
			} else if (
				!Array.isArray(frontmatter[key]) &&
				Array.isArray(attributes[key])
			) {
				frontmatter[key] = attributes[key].concat([frontmatter[key]]);
			} else if (
				Array.isArray(frontmatter[key]) &&
				!Array.isArray(attributes[key])
			) {
				frontmatter[key] = frontmatter[key].concat([attributes[key]]);
			} else {
				frontmatter[key] = { ...frontmatter[key], ...attributes[key] };
			}
			frontmatter[key] = Array.from(new Set(frontmatter[key].filter(val => val)));
		} else if (
			typeof frontmatter[key] === "object" &&
			typeof attributes[key] === "object"
		) {
			frontmatter[key] = { ...frontmatter[key], ...attributes[key] };
		} else {
			frontmatter[key] = attributes[key];
		}
	}
	// remove duplicates from array values
	frontmatter = Object.fromEntries(
		Object.entries(frontmatter).map(([key, value]) => {
			if (Array.isArray(value)) {
				return [key, Array.from(new Set(value))];
			}
			return [key, value];
		})
	);


	return tp.user.formatted_frontmatter(frontmatter);
};
```
````

参考：[Templater - How to add information to YAML frontmatter - Help - Obsidian Forum](https://forum.obsidian.md/t/templater-how-to-add-information-to-yaml-frontmatter/38009/2)

现在我们需要对原来博客中的 Obsidian 模板内容进行调整：

````
<%*
const isDefaultTitle = tp.file.title.startsWith("Untitled") || tp.file.title.startsWith("未命名")
const defaultTags = ["博客", "Obsidian"]
let title
let titleInTags
const titlePrefix = "Obsidian 达人成长之路："
const titleSuffix = " 插件使用"

if (isDefaultTitle) {
	title = await tp.system.prompt("Title")
    if (title.trim() !== "") {
        titleInTags = title.split(" ").join("")
        await tp.file.rename(`${titlePrefix}${title}${titleSuffix}`)
    } else {
        title = tp.file.title
    }
} else {
	title = tp.file.title
}

let template = "模板"
const currentTemplateFolder = "博客/Obsidian"
const currentFileFolder = tp.config.active_file.parent.path

if (!currentFileFolder.startsWith(currentTemplateFolder)) {
	if (isDefaultTitle) {
		await tp.file.move(`${currentTemplateFolder}/${titlePrefix}${title}${titleSuffix}`)
	}
}
-%>

<%- tp.user.mutate_frontmatter(tp, { tags: [...defaultTags, titleInTags] }) -%>

# <% title %>

<% tp.file.cursor() %>

## 参考

- 
````

>[!Tip] 
>调整后我们使用 `<%- -%>` 来代替 `<% %>` 用于确保 YAML 区域前后无空白行，如果前面有多余的空行，会导致解析不正确，变成二分隔线包裹标签。

结果：

![动画2 34](https://cdn.pkmer.cn/images/202406110910758.gif!pkmer)

可以看到 YAML 中的属性正确合并，更多的操作可自行查阅原文。

>[!Warning] 
>虽然看着效果不错，但是相信读着看到一大坨代码就被劝退了。因为这个参考文章是几年前的，现在我们可以使用 Obsidian 官方的 API 直接搞定，请接着阅读...

`FileManager.processFrontMatter()` 函数官方描述为：以原子方式读取、修改和保存笔记的卷首内容。frontmatter 作为 JS 对象传入，应直接进行变异以达到预期的结果。

我们可以借助这个函数在模板中动态添加属性到 YAML 中，最终改进版如下：

````
<%*
const isDefaultTitle = tp.file.title.startsWith("Untitled") || tp.file.title.startsWith("未命名")
const defaultTags = ["博客", "Obsidian"]
let title
let titleInTags
const titlePrefix = "Obsidian 达人成长之路："
const titleSuffix = " 插件使用"

if (isDefaultTitle) {
	title = await tp.system.prompt("Title")
    if (title.trim() !== "") {
        titleInTags = title.split(" ").join("")
        const name = `${titlePrefix}${title}${titleSuffix}`
        await tp.file.rename(name)
        const file = tp.file.find_tfile(name)
        setTimeout(async() => {
            await app.fileManager.processFrontMatter(file, fm => {
                fm.tags = [...defaultTags, titleInTags]
            })
        }, 200)
    } else {
        title = tp.file.title
    }
} else {
	title = tp.file.title
}

let template = "模板"
const currentTemplateFolder = "博客/Obsidian"
const currentFileFolder = tp.config.active_file.parent.path
const newFileName = `${currentTemplateFolder}/${titlePrefix}${title}${titleSuffix}`

if (!currentFileFolder.startsWith(currentTemplateFolder)) {
	if (isDefaultTitle) {
		await tp.file.move(newFileName);
	}
}
-%>

# <% title %>

<% tp.file.cursor() %>

## 参考

- 
````

我们在脚本中添加了一个 `setTimeout()` 函数等待 200 毫秒，在文件重命令结束后再设置属性。

### 链接操作

双链是 Obsidian 的特色，熟练应用链接将会使得笔记井然有序，减少冗余，更高效地管理笔记。在 Templater 中使用链接很简单，只需要将原来链接名称使用模板插值即可：

````
<%*
const link = "obsidian 达人成长笔记模板"
-%>
[[<% link %>]]
````

> [!Tip] 
> 我们这里所讲解的应用场景是使用 <kbd>Alt + R</kbd> 在当前文档执行模板。

然而这并不是万能的，正如我在系列文章第一篇介绍 Dataview 时介绍 `link()` 函数的总结：

> **`link()` 函数会从最外层寻找链接的文档，然后才是同级目录下的文档。**

我们很多时候只是想链接同目录下的文件，而非根目录下的同名文件。这个时候我们需要借助 Obsidian 的 API 来达到目的。使用 `app.fileManager.generateMarkdownLink()` 函数来创建链接，需要传入一个 TFile，然后传入一个路径到第二个参数。

这里假定要链接的文档为 `博客/Obsidian/未命名.md`，同时我们在全局目录下也存在一个 `Obsidian/未命名.md`，这个时候，我们不能在获取 TFile 时传入 `Obsidian/未命名` 到 `tp.file.find_tfile()` 函数中，即使我们传递给 `generateMarkdownLink()` 函数的第二个参数 `tp.file.path(true)` 的值为 `博客/Obsidian`，结果也会链接到根目录下的 `Obsidian/未命名` 文件。

解决办法就是我们将当前文件的路径用 `tp.file.folder(true)` 和文件名结合，脚本如下：

````
<%*
const file = tp.file.find_tfile(`${tp.file.folder(true)}\/未命名`)
const link = app.fileManager.generateMarkdownLink(file, tp.file.folder(true))
-%>
<% link %>
````

解决了链接路径问题，现在我们来关注链接的类型。我们知道引用链接时可以指向链接的文件、文档标题、文档段落以及为链接添加显示名，下面我们来看看具体如何操作。

这里同样是用 `generateMarkdownLink()` 函数，现在我们来看一下这个函数的完整签名：

```ts
generateMarkdownLink(file: TFile, sourcePath: string, subpath?: string, alias?: string): string
```

其中，`file` 指向要链接的文件，`sourcePath` 链接存放的路径，`subpath` 为文档中的标题或者块内容，`alias` 就是链接的显示名称。

````
<%*
const file = tp.file.find_tfile("obsidian 达人成长笔记模板")
const link = app.fileManager.generateMarkdownLink(
	file,
	tp.file.folder(true),
	"#参考",
	"这里是放置参考的文章"
)
-%>
<% link %>
````

结果：

![动画2 35](https://cdn.pkmer.cn/images/202406110910759.gif!pkmer)

### 回到上一个文件

当我们在正在编辑文档时使用 <kbd>Alt + C</kbd> 基于模板创建新的文件时，创建成功后如果我们像要回到上一个编辑的文件，我们可以用鼠标点击标题栏左侧的【返回】按钮，也可以使用快捷键 <kbd>Ctrl + Alt + ←</kbd> 来实现，当然我们这里要讲的是直接在模板中放置一个返回按钮，实现原理就是使用 Obsidian 的 API 来获取最近一次打开的文件，然后作为链接显示在文档中。

````
<%*
const parentFile = tp.file.find_tfile(app.workspace.getLastOpenFiles()[3]);
const parentLink = app.fileManager.generateMarkdownLink(parentFile, tp.file.folder(true), null, '返回');
-%>

<% parentLink %>

<% tp.file.cursor() %>
````

结果：

![动画2 36](https://cdn.pkmer.cn/images/202406110910760.gif!pkmer)

> [!Tip] 
> 注意到这里我们取的是 `getLastOpenFiles()` 函数返回数组的第 3 个值，第 1 个为当前生成的新文件，第 2 个为我们使用的模板文件，第 3 个才是上一次正在编辑的文件。

## 参考

- [Templates - Obsidian Help](https://help.obsidian.md/Plugins/Templates)
- [Introduction - Templater (silentvoid13.github.io)](https://silentvoid13.github.io/Templater/introduction.html)
- [home - shabeblog (shbgm.ca)](https://shbgm.ca/blog/home)
- <https://zachyoung.dev/posts/folder-templates-with-quick-switcher>
- [lguenth/obsidian-templates: A collection of templates for Obsidian (github.com)](https://github.com/lguenth/obsidian-templates)
- [Templater snippets (zachyoung.dev)](https://zachyoung.dev/posts/templater-snippets)
- [Templater - How to add information to YAML frontmatter - Help - Obsidian Forum](https://forum.obsidian.md/t/templater-how-to-add-information-to-yaml-frontmatter/38009/2)
- [Obsidian Snippets (github.com)](https://gist.github.com/Mearman/ba5b1bcf746b4e04d12865dc09402016)