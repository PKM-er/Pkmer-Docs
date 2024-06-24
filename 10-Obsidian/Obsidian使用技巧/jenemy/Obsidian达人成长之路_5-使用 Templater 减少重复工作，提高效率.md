---
uid: 20240611090703
title: Obsidian 达人成长之路 _5- 使用 Templater 减少重复工作，提高效率
tags: [Obsidian, Templater]
description: 这篇带领读者全面了解 Templater 的用法，让读者一次性搞懂
author: jenemy
type: other
draft: false
editable: false
modified: 20240614215346
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

![动画2 1](https://cdn.pkmer.cn/images/202406142149981.gif!pkmer)

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

>[!Tip] 建议大家使用【选项】->【命令面板】中的【置顶命令】功能，将常用的命令置顶，这样子我们打开命令面板时就可以直接 <kbd>Enter</kbd> 执行就可以了。

作者在这里提前将【插入模板】命令置顶，以方便截取操作过程。

![动画2 2](https://cdn.pkmer.cn/images/202406142149982.gif!pkmer)

>[!Note] 截图动画中显示的快捷键为 <kbd>Ctrl+P</kbd>，看到 <kbd>CapsLock</kbd> 是因为我改了 Windows 系统的修饰键，将其指定为了 <kbd>Ctrl</kbd>。

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

![动画2 3](https://cdn.pkmer.cn/images/202406142149983.gif!pkmer)

>[!Tip] 在安装了这个插件后，我们在 Obsidian 文档中输入模板标签时，会自动提示所支持的 API 并带有描述文字。

![动画2 8](https://cdn.pkmer.cn/images/202406142149984.gif!pkmer)

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

![动画2 4](https://cdn.pkmer.cn/images/202406142149985.gif!pkmer)

### 命令：光标跳转

这个功能很实用，让我们可以自定义模板在被插入后光标所在的位置，也可以放置多个光标埋点，按一定的顺序使用快捷键来依次跳转到定位处。

在使用这个功能时我们需要将 Templater 的【Automatic jump to cursor】 保持为打开状态。然后在模板中使用 `` 来插入光标，要实现通过快捷键在多个光标位置跳转我们需要创建多个光标，顺序只需要将 `tp.file.cursor()` 函数中传入 `1, 2, 3, ...` 就可以了。

>[!Tip]
>默认光标跳转快捷键为 <kbd>Alt + Tab</kbd>，这个在 Windows 系统中和系统快捷键冲突了，我们只能将其修改成别的，我这里是 <kbd>Alt + ;</kbd>。

我们新建一个模板来测试光标跳转：

````
这个功能很实用，让我们可以自定义模板在被插入后光标所在的位置，也可以<% tp.file.cursor(2) %>放置多个光标埋点，按一定的顺序使用快捷键来依次跳转到<% tp.file.cursor(3) %>定位处。
````

现在我们见证奇迹：

![动画2 5](https://cdn.pkmer.cn/images/202406142149986.gif!pkmer)

>[!Tip]
>使用这个功能我们需要注意一点：新建文档默认情况下是会选中文档名，此时如果不将光标手动点击到正文内，插入的光标是无法定位到第一个光标位置的，后续我们可以成功执行跳转。

### 命令：从模板创建文件

这个命令的作用是在创建文件时直接基于选中的模板，而不需要像前面那样先创建文件再应用命令。

![动画2 6](https://cdn.pkmer.cn/images/202406142149987.gif!pkmer)

从截图动画中可以看出，文件是创建在了目录“博客”中，如果我们笔记当前没有打开的文件，则会创建在根目录下。

### 命令：当前文件中执行模板替换

我们创建基于模板的页面不一定都是从指定的模板目录中获取模板，也可以是从别处复制过来，或者说我们想借用 Templater 强大的模板解析功能来实现单个页面注入动态内容，这个时候就是该命令发挥作用的时候了。

我们将其中一个模板文件内容拷贝一份放置在新建的一个文件中，然后我们使用快捷键来看一下执行过程：

![动画2 7](https://cdn.pkmer.cn/images/202406142149988.gif!pkmer)

可以看到当前页面中的模板内容全部被替换成了执行结果。

## 内置函数详解

Templater 提供了很多内置的函数，这些函数封装了 Obsidian 内部的一些逻辑，我们只需要调用它们就可以获取仓库中所有笔记的任何信息。通过前面几篇文章的介绍和不断地熏陶，其实细想一下，和我们打交道的无外乎就是：文件信息（文件名、路径、创建时间 ...）、文档属性、链接、任务、查询等，有了经验积累，下面的内容就相对来说很容易消化吸收。

### 文件相关属性和函数

`tp.file` 模块中定义了文件操作的相关函数，我们通过它可以创建笔记/重命名/移动笔记，获取笔记信息，获取标签信息、文档选区信息等操作。

下面我们会每一个函数进行使用讲解，有的函数过于简单就一笔代过不作过多解释。

#### tp.file.content

这个属性的作用是在 Templater 执行时将当前文档内容插入到 `tp.file.content` 所在位置。

![动画2 10](https://cdn.pkmer.cn/images/202406142149989.gif!pkmer)

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

>[!Tip]
>官方文档上有说 `open_new` 这个参数有副作用，目前作者还未遇到，暂时给不出例子。

##### 示例 1：基于文本创建文档

````
<%* await tp.file.create_new("MyFileContent", "MyFilename") %> 
````

结果：

![动画2 11](https://cdn.pkmer.cn/images/202406142149990.gif!pkmer)

##### 示例 2：基于模板创建文档

这里需要使用 `tp.file.find_tfile()` 方法来获取我们事先创建好的模板。

````
<%* await tp.file.create_new(tp.file.find_tfile("日记2"), "MyFilename") %> 
````

结果：

![动画2 12](https://cdn.pkmer.cn/images/202406142149991.gif!pkmer)

##### 示例 3：创建文档后立即打开

````
<%* await tp.file.create_new("MyFileContent", "MyFilename", true) %> 
````

结果：

![动画2 13](https://cdn.pkmer.cn/images/202406142149992.gif!pkmer)

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

![动画2 14](https://cdn.pkmer.cn/images/202406142149993.gif!pkmer)

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

![动画2 15](https://cdn.pkmer.cn/images/202406142149994.gif!pkmer)

#### tp.file.exists()

`tp.file.exists(filepath: string)` 用于判断文件是否存在。

#### tp.file.find_tfile()

`tp.file.find_tfile(filename: string)` 函数用于搜索文件并返回一个 `TFile` 实例。

`TFile` 实例截图如下：

![Pasted image 20240604181700](https://cdn.pkmer.cn/images/202406142149995.png!pkmer)

#### tp.file.folder()

`tp.file.folder(relative: boolean = false)` 函数用于检索文件的文件夹名称。如果 `relative` 为 `true` 会返回文档所在目录路径，为 `false` 只返回目录名。默认为 `false`。

以 `博客/Obsidian/Untitled.md` 为例：

![动画2 16](https://cdn.pkmer.cn/images/202406142149996.gif!pkmer)

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

![动画2 17](https://cdn.pkmer.cn/images/202406142149997.gif!pkmer)

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

![动画2 18](https://cdn.pkmer.cn/images/202406142149998.gif!pkmer)

#### tp.file.path()

`tp.file.path(relative: boolean = false)` 函数用于获取文件基于当前磁盘的绝对路径，如果 `relative` 设置为 `true` 则返回基于当前仓库的相对路径。

![动画2 19](https://cdn.pkmer.cn/images/202406142149999.gif!pkmer)

从图中可以看出系统路径和我们当前在仓库中的路径分隔符不致，我们这里仅示例不去额外处理。

#### tp.file.rename()

`tp.file.rename(new_title: string)` 函数用于重命名文件。

![动画2 20](https://cdn.pkmer.cn/images/202406142149000.gif!pkmer)

#### tp.file.selection()

`tp.file.selection()` 函数用于检索活动文件的文本选择。

![动画2 21](https://cdn.pkmer.cn/images/202406142149001.gif!pkmer)

>[!Tip]
>我们不能跨文件去操作，因为选中另外一个文件时上一个文件的选区就失去焦点了。

#### tp.file.tags

`tp.file.tags` 属性用于获取当前文件的所有标签。

![动画2 22](https://cdn.pkmer.cn/images/202406142149002.gif!pkmer)

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

![动画2 24](https://cdn.pkmer.cn/images/202406142149003.gif!pkmer)

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

### 系统相关

`tp.system` 模块主要提供了获取剪贴板内容、提示框（Prompt）和建议框（Suggester）的功能。

>[!Note] 下面在介绍 `tp.system.prompt()` 和 `tp.system.suggester()` 方法时就不截图了，因为文章中例子随处可见其用法。

#### tp.system.clipboard()

这个方法很好理解，就是把最近一次剪贴板的内容，插入到 `<% tp.system.clipboard() %>` 所在位置，当然我们也可以在脚本中操作剪贴板内容。但是这个函数似乎少了点功能，我们知道在 Obsidian 中粘贴分为【粘贴】和【以纯文本形式粘贴】，这个函数实现了第二种粘贴方式。

下面我们来演示一下效果：

![动画2 58](https://cdn.pkmer.cn/images/202406142149004.gif!pkmer)

#### tp.system.prompt()

`tp.system.prompt(prompt_text?: string, default_value?: string, throw_on_cancel: boolean = false, multiline?: boolean = false)` 方法调用后弹出一个提示模态框用于接收用户的输入。

参数如下：

- `prompt_text` 提示文字
- `default_value` 默认值
- `throw_on_cancel` 为 `true` 抛出异常，而不是返回 `null` 值
- `multiline` 默认为 `Input` 输入框，为 `true` 时则为 `Textarea` 输入框

示例：

````
<% tp.system.prompt("请输入内容") %>
<% tp.system.prompt("请输入内容", "默认值") %>
<% tp.system.prompt("请输入内容", "默认值", true) %>
<% tp.system.prompt("请输入内容", "默认值", true, true) %>
````

#### tp.system.suggester()

`tp.system.suggester(text_items: string[] | ((item: T) => string), items: T[], throw_on_cancel: boolean = false, placeholder: string = "", limit?: number = undefined)` 方法调用后弹出一个建议框用于用户选择。

参数如下：

- `text_items` 选项的文本内容，可以是字符串数组也可以是回调函数，回调函数接收一个参数 `item`，返回对应的文本内容。
- `items` 选项的数据内容
- `throw_on_cancel` 为 `true` 抛出异常，而不是返回 `null` 值
- `placeholder` 输入框的占位符
- `limit` 限制显示的选项数量

示例：

````
<% tp.system.suggester(["选项1", "选项2", "选项3"], ["数据1", "数据2", "数据3"]) %>
<% tp.system.suggester((item) => `选项${item}`, ["数据1", "数据2", "数据3"]) %>
<% tp.system.suggester((item) => `选项${item}`, ["数据1", "数据2", "数据3"], true) %>
<% tp.system.suggester((item) => `选项${item}`, ["数据1", "数据2", "数据3"], true, "请选择") %>
<% tp.system.suggester((item) => `选项${item}`, ["数据1", "数据2", "数据3"], true, "请选择", 2) %>
````

### 配置相关

`tp.config` 模块用于暴露 Templater 的运行时配置。

#### tp.config.active_file?

`tp.config.active_file` 是指我们当前应用模板所在的文件。这个值可以为 `null`，这种情况我们接下来会进行分析讲解。

我们可以在当前文件中使用下面的模板语句在控制台中输出 `TFile` 信息，相较用 `<%* console.log(tp.file.find_tfile("startup")) %>` 要少输入不少字符。

````
<%* console.log(tp.config.active_file) %> 
<%* console.log(tp.file.find_tfile("startup")) %> 
````

![动画2 26](https://cdn.pkmer.cn/images/202406142149005.gif!pkmer)

下面我们再来看一下，同样的文件作为模板应用于创建时的控制台输出的两种情况。

**1. 创建文件时有正在编辑的文档**

这个种情况 `tp.config.active_file` 的值为当前处于编辑状态的文件。

![动画2 27](https://cdn.pkmer.cn/images/202406142149006.gif!pkmer)

**2. 创建文件时为空白主页**

这种情况下 `tp.config.active_file` 的值为 `null`。

![动画2 28](https://cdn.pkmer.cn/images/202406142149007.gif!pkmer)

#### tp.config.run_mode

`tp.config.run_mode` 属性用于表示运行的模式，我们已知的有：基于模板创建新文件、重写当前编辑文件和在当前文件追加内容。

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

这个配置有什么用呢？

下面我们来实现一个在创建文件时自动添加创建时间，在更新文件时自动添加更新时间的功能。

````
%% 模板/创建和更新时间模板.md %%

<%* if (tp.config.run_mode === 0) { %>
<%- "---" %>
created_at: <% <% tp.file.last_modified_date('YYYY-MM-DD HH:mm:ss') %> %>
<% "---" %>
<%* } %>

<%-*
const ctime = <% tp.file.last_modified_date('YYYY-MM-DD HH:mm:ss') %>
const mod = tp.config.run_mode
const file = tp.config.target_file
const fm = app.metadataCache.getFileCache(file)?.frontmatter

await app.fileManager.processFrontMatter(file, fm => {
	if (!fm) {
		fm.created_at = ctime
	} else {
		if (mod === 1) {
			if (!fm.created_at) {
				fm.created_at = ctime
			} else {
				fm.updated_at = ctime
			}
		}
	}
})
_%>
````

结果：

![动画2 57](https://cdn.pkmer.cn/images/202406142149008.gif!pkmer)

#### tp.config.target_file

表示将在其中插入模板的目标文件的 TFile 对象。

#### tp.config.template_file

表示模板文件的 TFile 对象。

### 调用 Obsidian API

`tp.obsidian` 模块暴露出了 Obsidian API [声明文件](https://github.com/obsidianmd/obsidian-api/blob/master/obsidian.d.ts) 中的所有属性和方法。使用 Templater 时难免不使用到全局的 `app` 属性以及 `tp.obsidian.xx` 相关函数。

这里我们直接给出官方提供的示例：

````
// Get all folders
<%
app.vault.getAllLoadedFiles()
  .filter(x => x instanceof tp.obsidian.TFolder)
  .map(x => x.name)
%>

// Normalize path
<% tp.obsidian.normalizePath("Path/to/file.md") %>

// Html to markdown
<% tp.obsidian.htmlToMarkdown("\<h1>Heading\</h1>\<p>Paragraph\</p>") %>

// HTTP request
<%*
const response = await tp.obsidian.requestUrl("https://jsonplaceholder.typicode.com/todos/1");
tR += response.json.title;
%>

````

具本如何使用，请查看后面应用实例中的相关脚本。因为这个主题涉及太多的知识点和内容我们在这里就不细述了，在需要的时候自行在 Obsidian API 声明文件中根据关键词查找对应 API。

### 钩子（Hooks）函数

目前为止 Templater 只提供了一个钩子函数 `tp.hooks.on_all_templates_executed(callback_function: () => any)` 用于在正在执行的模板任务完成后执行回调函数。

使用钩子函数我们可以给后面介绍【目录模板】功能时创建博客模板的脚本后面添加下面的代码来实现在文档创建结束后添加一个 `created_at` 属性。

````
<%*
tp.hooks.on_all_templates_executed(async () => {
	const file = tp.file.find_tfile(tp.file.path(true));
	await app.fileManager.processFrontMatter(file, (frontmatter) => {
		frontmatter["created_at"] = tp.file.last_modified_date('YYYY-MM-DD HH:mm:ss')
	})
})
%>
````

目前为止，有没有发现这个钩子函数只能作用于一个文件或者模板中，必须执行模板才会触发。下面我们来介绍一个小技巧，实现一个监听所有模板执行的回调函数，例如在控制台输出一个字符串。

要实现这个功能，我们需要在一个模板中放入钩子相关代码，比如我这里创建的模板为 `模板/全局.md`，我们在其它模板 `模板/Code block.md` 中插入 ` <% tp.file.include("[[全局.md]]") %> ` 就可以了。

具体运行过程我这里就留给读着自己去动手体验一下了...

### Web 模块

`tp.web` 模块的主要作用是获取随机的引文（一些名言警句）和图片。

使用这个模块我们可以在每日笔记中随机插入一条优美的句子，还可以随机生成一张封面图。

#### tp.web.daily_quote

`tp.web.daily_quote()` 用于获取一个随机的引文，并将其作为一个 Callout 显示在页面中。这些数据来自于开源的 [lukePeavey/quotable: Random Quotes API (github.com)](https://github.com/lukePeavey/quotable)。

示例：`<% tp.web.daily_quote() %>`

结果：

![动画2 59](https://cdn.pkmer.cn/images/202406142149009.gif!pkmer)

当然，我们也可以选择自己去请求 Quote API 获取自己喜欢的句子。下面我们直接获取 10 条数据一次性全部生成 Callout 显示。

````
<%*
const { json: { results } } = await tp.obsidian.requestUrl("https://api.quotable.io/quotes?limit=10")
_%>

<%* for (let quote of results) { %>
>[!quote] <% quote.content %>
><% quote.author %>
<%* } %>
````

结果：

![动画2 60](https://cdn.pkmer.cn/images/202406142149010.gif!pkmer)

#### tp.web.random_picture

`tp.web.random_picture(size?: string, query?: string, include_size?: boolean)` 用于获取 [Unsplash](https://unsplash.com/) 上的图片资源。

参数：

- `size` 图片尺寸，格式为 `长x宽`，如：`200x200`。
- `query` 查询关键词，多个关键词以逗号分隔。
- `include_size` 用于在图像链接 Markdown 中包含指定大小的可选参数。默认值为 `false`。

>[!Tip] Unsplash 是一个完全免费的、无版权的高清图片资源网站。

下面我们来借助插件 [noatpad/obsidian-banners](https://github.com/noatpad/obsidian-banners) 来实现给笔记添加一个封面图效果。我这里将封面图的大小设置为 `730x310` 然后写了一段插入脚本（只适合创建新文件）：

````
<%*
const bannerLink = await tp.web.randompicture("730x310", "banner")
const banner = bannerLink.slice(bannerLink.indexOf('(') + 1, bannerLink.length - 1)
%>

<%- '---' %>
banner: <% banner %>
<% '---' %>
````

结果：

![动画2 61](https://cdn.pkmer.cn/images/202406142149011.gif!pkmer)

>![Tip] 这个 Banners 插件在作者本地似乎有点问题，这里仅作演示。

## 命令

这里的命令（Command）实际上是指定 Templater 的模板语法语句 `<% expression %>` 和 `<%* expression %>`。

这一节内容我们来介绍一下在 Templater 中如何执行 JavaScript 条件控制语句和遍历语句，以及如何处理模板语句执行后留下的空白，还有一个很实用的动态命令语法。

#### 动态命令

动态命令用于在预览模式下执行模板语句，其语法为 `<%+ expression %>` 这个功能虽然官方文档上说有一些问题，后面不会进一下维护，推荐使用 Dataview 插件来代替，因为这个功能在执行一次后，下次再打开显示的是上次的执行结果，它不会像 Dataview 那样实时执行，需要再一次切换模式后才能显示最新的。

下面我们以官方的示例：`Last modified date: <%+ tp.file.last_modified_date() %>` 来看看实际效果：

![动画2 62](https://cdn.pkmer.cn/images/202406142149012.gif!pkmer)

#### 控制语句与遍历

在 Templater 中我们可以使用 JavaScript 的任何语法，只需要将相关的语句放置在 `<%* expression %>` 中就可以了，下面我们列举一些常见的例子：

````
<%* const pluginName = "Templater" %>

<%* console.log("hello Templater") %>

<%* if (pluginName === "Templater") { %>
Templater is awesome!
<%* } else { %>
Templater is not awesome.
<%* } %>

<%* const arr = [1, 2, 3, 4, 5] %>

<%* for (let i = 0; i < arr.length; i++) { %>
<% arr[i] %>
<%* } %>

<%* const obj = { name: "Templater", version: "2.3.3" } %>

<%* for (let key in obj) { %>
<% key %> : <% obj[key] %>
<%* } %>
````

#### 空格/空白行控制

默认情况下模板语句执行时会留下空白行，或者我们想在插入模板位置清除前后的空白行，特别是生成 YAML 区域的内容时，第一个 `---` 前面只要有空白行就会导致属性解析失败。

Templater 提供了两种去除空白的方式，一种是 `<%- -%>` 或 `<%-* -%>` 来去除命令前后的空白，另一种是使用 `<%_ _%>` 或 `<%_* *%>` 来去除命令前后所有的空白。

下面我们来对比一下：

````
<%* if (tp.file.title == "MyFile" ) { %>
This is my file!
<%* } else { %>
This isn't my file!
<%* } %>
Some content ...

---

<%* if (tp.file.title == "MyFile" ) { -%>
This is my file!
<%* } else { -%>
This isn't my file!
<%* } -%>
Some content ...
````

结果：

````

This isn't my file!

Some content ...

---

This isn't my file!
Some content ...
````

## 插件配置选项

这一节我们来细说一下 Templater 插件的一些配置项，读者可根据自己的实际使用场景灵活配置。

### 通用设置

通用设置中的大多数设置都是选项开关，没有什么特别要说明的。

设置界面如下：

![Pasted image 20240606174242](https://cdn.pkmer.cn/images/202406142149013.png!pkmer)

### 模板快捷键

这个功能就是为我们定义的模板添加一个全局的快捷键，使用进需要注意的是在应用时，需要有一个当前正在编辑的文档才可以应用。

下面是我为本地一个模板添加了一个快捷键 <kbd>Alt + 1</kbd>，相关的配置界面如下：

![Pasted image 20240606175357](https://cdn.pkmer.cn/images/202406142149014.png!pkmer)

结果：

![动画2 32](https://cdn.pkmer.cn/images/202406142149015.gif!pkmer)

### 目录模板

我们通常会指定一个放置全局模板的目录，在选择模板创建文档时，模板源都是来自这个模板目录。如果用户创建了大量的模板，比如上百个，这种情况下，通过下拉框选择的效率明显会低很多，而且很多时候有些模板只适用于特定的知识分类目录，所以官方提供了目录模板来应对这种场景。

描述挺完美的，但是实际上这个目录模板只是对我们指定的目录在使使用模板时如果有指定专门的模板才会起作用，而并没有把其它模板过滤掉，顺序也未发生变化。

下面我们先来看一下设置界面：

![Pasted image 20240606114648](https://cdn.pkmer.cn/images/202406142149016.png!pkmer)

上面的截图中我们已经添加了一个 `博客/Obsidian` 目录对应的模板，这个模板我放置在了统一的模板目录中。

>[!Tip]
>模板文件必须放置在指定的统一模板目录中。

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

![动画2 29](https://cdn.pkmer.cn/images/202406142149017.gif!pkmer)

可以看到在日记目录中未触发目录模板功能，然后我们在博客目录中成功触发了。

>[!Tip]
>在创建文件时，如果当前工作区无打开文件我们需要在目标目标中使用右键来创建，否者无法触发。

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

![动画2 30](https://cdn.pkmer.cn/images/202406142149018.gif!pkmer)

我这里模板对应用的目录是用变量 `currentTemplateFolder` 表示，是写死的，因为我们获取不应用于文档的模板信息。

### 启动模板

启动模板顾名思义就是在 Templater 插件启动地时候执行的模板。这个模板不会有任何渲染输出，它是我们在 Templater 启动时执行一些操作，如添加 Hooks 来响应处理 Obsidian 事件。

设置界面如下：

![Pasted image 20240606171517](https://cdn.pkmer.cn/images/202406142149019.png!pkmer)

这里我在 `About.md` 中放置了一行脚本在控制台输出一段文本 `console.log("我是模板开始执行啦。。")`。

![动画2 31](https://cdn.pkmer.cn/images/202406142149022.gif!pkmer)

### 用户脚本

用户脚本功能让我们可以使用单独的 JavaScript 文件来写模板，脚本需要遵循 CommonJS 模块规范。

>[!Note]
>关于 JavaScript 相关的知识，请读者自己去备课。

````
%% greet.js %%

```js
function greet(msg) {
return `Hello, ${msg}.`
}

module.exports = greet
```
````

这个脚本文件位于 `Scripts/greet.js` ，下面是插件的配置：

![Pasted image 20240614184749](https://cdn.pkmer.cn/images/202406142149023.png!pkmer)

然后我们在文档中就可以直接使用：`<% tp.user.greet("World") %>`。

>[!Tip]
>强烈推荐在编辑脚本时使用 [NomarCub/obsidian-open-vscode](https://github.com/NomarCub/obsidian-open-vscode) 或者 [sunxvming/obsidian-vscode-editor](https://github.com/sunxvming/obsidian-vscode-editor) 插件来编辑代码，因为 Templater 的模板语法在 Obsidian 代码块中会显示不全。

>[!Tip]
>如果读者的 Obsidian 目录中看不到 JavaScript 文件，请将【选项】->【文件与链接】中的【检测所有类型的文件】开启。

### 使用系统命令函数

系统命令其实就是将在终端执行的结果显示在 Obsidian 文档中，比如下面的获取本地 Node.js 的版本号：

![Pasted image 20240614190330](https://cdn.pkmer.cn/images/202406142149024.png!pkmer)

要在 Templater 添加这样一个命令，只需要在配置中作如下设置：

![Pasted image 20240614190528](https://cdn.pkmer.cn/images/202406142149025.png!pkmer)

> [!Tip]
> 关于终端的使用需要读者去自行学习，不同的操作系统也不一样。在终端中能执行的命令，基本在这里也可以执行，只不过我们这里需要获取一个结果。

所有的用户自定命令都挂载在 `tp.user` 对象下面，如果要给命令传递参数可以使用 `{arg1: value1, ...}` 的方式。

下面是我定义的命令的执行过程：

![动画2 63](https://cdn.pkmer.cn/images/202406142149026.gif!pkmer)

## 实际应用

下面为大家带来一些实际应用方面的例子，虽然在前面的章节中也穿插了部分案例，这里更多的是展示一些技巧和常用的模式，方便读者应用到自己的笔记系统中。

### 为文档添加创建时间

可能有人会觉得很奇怪，每一个文件不是默认自带了创建时间和上次修改时间，我们自己何必再多此一举额外添加两个属性？这是因为如果你的文档只是在单机操作的情况下系统提供的时间是没有什么问题的，但是如果涉及到多个设备同步，或者使用 Git 来管理，你就会突然发现这个时间会改变，文件并不是你最早创建的日期。

既然我们使用 Templater，就可以为创建的文件默认添加一个 `created_at` 的自定义 YAML 属性来自动生成文档的创建时间。

````
<%*
const ctime = tp.file.last_modified_date()
const file = tp.config.target_file
setTimeout(async () => {
	await app.fileManager.processFrontMatter(file, fm => {
		fm.created_at = ctime
	})
}, 200)
-%>
````

结果：

![动画2 47](https://cdn.pkmer.cn/images/202406142149027.gif!pkmer)

此外，我们还可以使用这种比较简单的方式来实现，需要注意的是第一个模板语句 `\<\%-` 中 `-` 至关重要，如果不把空白行去除， YAML 属性将不会生效。

````
<%- "---" %>
created_at: <% tp.file.last_modified_date() %>
<% "---" %>
````

进一步我们还可以手动添加更改时间，请参考前面介绍 `tp.config.run_mode` 的相关内容。

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

![动画2 33](https://cdn.pkmer.cn/images/202406142149028.gif!pkmer)

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

![动画2 34](https://cdn.pkmer.cn/images/202406142149029.gif!pkmer)

可以看到 YAML 中的属性正确合并，更多的操作可自行查阅原文。

>[!Warning] 虽然看着效果不错，但是相信读着看到一大坨代码就被劝退了。因为这个参考文章是几年前的，现在我们可以使用 Obsidian 官方的 API 直接搞定，请接着阅读...

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

### 读取其它文档的属性

这个例子我们将在一个文档中读取别的文档的 YAML 属性，这里主要是使用 `app.metadataCache.getFileCache()` 来获取另外一个文档的内容，再通过其返回的 `CachedMetadata` 类型数据的 `frontmatter` 字段来获取属性值。

现有一个文档 `foo.md` 其 YAML 中包含属性 `count: 1`，现在我们在另外一个文档 `bar.md` 中对其 `count` 属性进行读取。

````
%% bar.md %%

<%*
const file = tp.file.find_tfile("foo.md")
const cache = app.metadataCache.getFileCache(file)

let count = 0
if (cache?.frontmatter?.count) {
	count = Number(cache.frontmatter.count) + 1
}
-%>

数量：<%- count %>
````

结果：

![动画2 23](https://cdn.pkmer.cn/images/202406142149030.gif!pkmer)

这里如果我们想要把修改写回 `foo.md` 文档的属性 `count` 中，可以在 `if` 语句后追加 `await app.fileManager.processFrontMatter(file, fm => fm.count = count)` 来实现。

### 文档追加内容

接上面示例，我们现在来给 `foo.md` 文档追加内容，看看如何实现。

我们使用 `app.vault.process(file, fn, options)` 方法来同步执行自动读取、修改和保存文档内容。下面是一个简单的实现：

````
<%*
const file = tp.file.find_tfile("foo.md")
await app.vault.process(file, (text) => {
	return text + "\n追加内容"
})
-%>
````

结果：

![动画2 25](https://cdn.pkmer.cn/images/202406142149031.gif!pkmer)

此外，我们还可以使用 `app.vault.read()` 和 `app.vault.modify()` 来实现，这两个方法都是异步方式来操作。

````
<%*
const file = tp.file.find_tfile("foo.md")
const content = await app.vault.read(file)
const newContent = content + "\n追加内容"
await app.vault.modify(file, newContent)
-%>
````

进一步，我们还可以在特定的行数来插入内容，只需要将文档内容按 `\n` 分割，然后在指定行号插入内容即可。

````
<%*
const file = tp.file.find_tfile("foo.md")
await app.vault.process(file, (text) => {
	const lines = text.split("\n")
	lines.splice(2, 0, "追加内容")
	return lines.join("\n")
})
-%>
````

结果：

![动画2 52](https://cdn.pkmer.cn/images/202406142149032.gif!pkmer)

使用 `app.vault.read()` 和 `app.vault.modify()` 类似就不赘述了。

### 调用命令

在 Obsidian 中有很多操作是通过命令来触发的，同时很多插件也提供了附带的命令，我们可以在控制台中（<kbd>Ctrl+Shift+I</kbd>）输入 `app.commands.commands` 来查看所有的命令列表。

下面这个示例，我们通过执行命令 `日记：打开/创建今天的日记`，来创建今日的笔记。注意我们是使用命令 ID 来引用命令的。

````
<%*
app.commands.executeCommandById("daily-notes");
%>
````

结果：

![动画2 53](https://cdn.pkmer.cn/images/202406142149033.gif!pkmer)

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

![动画2 35](https://cdn.pkmer.cn/images/202406142149034.gif!pkmer)

### 标签操作

在前面的基础知识介绍中我们学习到了使用 `tp.file.tags` 来获取当前页面中的所有标签。这里需要注意一点的是，标签可以定义在属性 `tags` 下，也可以在文档正文中定义，通过 `tp.file.tags` 所获取到的标签并不会去重，也就是说你在 YAML 和文档正文中同时定义一个同名的标签是不区分的。

在 Obsidian 提供的 API 中，我们可以使用 `app.vault.getMarkdownFiles()` 函数来获取仓库中的所有 Markdown 文档，然后通过 `app.metadataCache.getFileCache()` 函数来获取 TFile 的内容，基结果为一个 `CachedMetadata` 对象，属性 `frontmatter.tags` 和 `tags` 分别为上一段我们介绍的二种不同位置的标签，同时我们需要注意一点的是：**如果页面中没有标签，这两个属性名将不存在于结果对象中**。

因为标签存在于两个位置，因此我们可以使用 `tp.obsidian.getAllTags()` 方法将 `CachedMetadata` 对象传递到函数中来获取标签值。

>[!Tip]
>`tp.obsidin` 对象包含了所有 Obsidian 公开的 API，可以参考 [obsidian-api/obsidian.d.ts at master · obsidianmd/obsidian-api (github.com)](https://github.com/obsidianmd/obsidian-api/blob/master/obsidian.d.ts)。

现在我们来实现一个功能，根据提供的标签名，然后找到所有包含标签的文档，并将其作为链接插入到指定的位置：

````
<%-*
const tag = "#Obsidian";

const filteredFiles = app.vault.getMarkdownFiles().filter(file => {
	const fileCache = app.metadataCache.getFileCache(file)
	let tags = []
	if ((fileCache.frontmatter && fileCache.frontmatter.tags) || fileCache.tags) {
		tags = tp.obsidian.getAllTags(fileCache)
	}
	tags = [...new Set(tags)] // 去重
  	return tags.includes(tag);
});
const selectedFile = (await tp.system.suggester((file) => file.basename, filteredFiles)).basename;
-%>

[[<% selectedFile %>]]
````

结果：

![动画2 44](https://cdn.pkmer.cn/images/202406142149035.gif!pkmer)

上面的示例我们是在已知标签的情况下进行筛选，基实我们可以进一步提供一个仓库所有的标签列表来选选择，然后再进行文件查找。

使用 `app.metadataCache.getTags()` 方法可以获取仓库中的所有标签，标签名包含 `#` 号，可以使用 `map()` 函数遍历并使用 `replace('#', '')` 函数进行替换来去除。

将上面的示例 `const tag = '#Obsidian'` 替换成 `const tag = await tp.system.suggester(item => item, Object.keys(app.metadataCache.getTags()))`。

结果：

![动画2 45](https://cdn.pkmer.cn/images/202406142149036.gif!pkmer)

下面我们再一次进行修改，现在我们想通过标签来查询所有包含标签的最近一次修改的文档，看看怎么来实现。

要想获取最近文档的修改时间，可以通过 TFile 对象的 `stat.mtime` 属性来得到，然后就是对包含标签的所有文档进行 `mtime` 的对比，这里需要用到数组的 `reduce()` 方法来递归。

````
<%-*
const tag = await tp.system.suggester(item => item, Object.keys(app.metadataCache.getTags()))

let latestTFileWithTag = app.vault.getMarkdownFiles().reduce((curLatestTFileWithTag, file) => {
	const fileCache = app.metadataCache.getFileCache(file)
	let tags = []
	if ((fileCache.frontmatter && fileCache.frontmatter.tags) || fileCache.tags) {
		tags = tp.obsidian.getAllTags(fileCache)
	}
	tags = [...new Set(tags)] // 去重
	if (tags.includes(tag) && (!curLatestTFileWithTag || curLatestTFileWithTag.stat.mtime < file.stat.mtime)) {
		curLatestTFileWithTag = file
	}
	return curLatestTFileWithTag
}, null);

const latestFileWithTag = latestTFileWithTag.basename;
-%>

[[<% latestFileWithTag %>]]
````

结果：

![动画2 46](https://cdn.pkmer.cn/images/202406142149037.gif!pkmer)

>[!Tip]
>上面这个示例，我们可以举一反三应用到前面说的【为文档添加创建】的应用案例中，来获取最近一次创建的文档。

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

![动画2 36](https://cdn.pkmer.cn/images/202406142149038.gif!pkmer)

> [!Tip]
> 注意到这里我们取的是 `getLastOpenFiles()` 函数返回数组的第 3 个值，第 1 个为当前生成的新文件，第 2 个为我们使用的模板文件，第 3 个才是上一次正在编辑的文件。

### 无限提示，直到没有值

有时，您想提示同一事物的多个，但不确定需要提示多少个。您可以使用 `while` 循环多次提示，并在未提供值时停止提示。

````
<%*
let isAddingTasks = true;
while (isAddingTasks) {
	const task = await tp.system.prompt("Enter a task");
	if (task) {
-%>
- [ ] <% task %>
<%*
	} else {
		isAddingTasks = false;
  	}
}
-%>
````

结果：

![动画2 42](https://cdn.pkmer.cn/images/202406142149039.gif!pkmer)

### 为 tp.system.suggester() 提供创建支持

通常情况下在使用 `tp.system.suggester()` 函数时，是提供已有的选项供选择，但是如果我们想要在没有符合期望选项的情况下创建一个值，怎么做呢？这个时候可以另辟蹊径，使用一个特殊的选择项 `--CREATE CUSTOM OPTION--` 来作为触发标识选项，当选择它时再调用 `tp.system.prompt()` 函数来提供自定义选项的输入。

````
<%*
const customOption = "--CREATE CUSTOM OPTION--"
const items = ["item 1", "item 2", customOption];
let selectedItem = await tp.system.suggester(item => item, items);
if (selectedItem === customOption) {
	selectedItem = await tp.system.prompt("Type custom option");
}
-%>
<% selectedItem %>
````

结果：

![动画2 43](https://cdn.pkmer.cn/images/202406142149040.gif!pkmer)

### 使用 tp.system.suggester() 列举文件和目录

这个案例中我们来看一下如何将 `app.vault.getMarkdownFiles()` 获取的文档作为 `tp.system.suggester()` 的数据源，然后再使用 `app.fileManager.generateMarkdownLink()` 函数生成链接。

````
<%*
let selectedLink
const files = app.vault.getMarkdownFiles()
const selectedFile = await tp.system.suggester(file => file.basename, files)
if (selectedFile) {
	selectedLink = app.fileManager.generateMarkdownLink(selectedFile, tp.file.folder(true))
}
-%>

<% selectedLink %>
````

![动画2 48](https://cdn.pkmer.cn/images/202406142149041.gif!pkmer)

如果想要根据目录名来过滤文件，可以使用 `filter(file => file.path.startsWith('folderName'))` 来过滤，但是约束条件是必须为根目录下的文件文件夹。如果是二级或者更深地目录，我们需要将路径按 `/` 拆分成数组，并使用 `splittedArr.includes('folderName')` 来判断，这里就不举例了。

>[!Tip]
>当然我们也可以根据路径是否包含 `.md` 后缀来判断是目录还是文件。

如何判断路径是否包含目录名很容易实现，现在我们来看一下如何获取所有的目录。要获取所有的文档和目录，需要使用到 `app.vault.getAllLoadedFiles()` 函数，该函数返回一个 `TAbstractFile[]` 数组，然后使用 ` file instanceof TFolder ` 来判断是否为目录对象。

下面我们来实现一个将当前文件移动到选定的目录中的功能。

````
<%*
let selectedLink
const folders = app.vault.getAllLoadedFiles().filter(file => file instanceof TFolder)
const selectedFolder = await tp.system.suggester(folder => folder.path, folders)
if (selectedFolder) {
	await tp.file.move(`${selectedFolder}/${tp.file.title}`)
}
-%>
````

结果：

![动画2 49](https://cdn.pkmer.cn/images/202406142149042.gif!pkmer)

进一步，如果我们预先提供了目录名，我这里为 `博客/Obsidian`，现在根据这个目录名来提供文件建议列表，这里的处理稍微有点不同。首先，要使用函数 `app.vault.getAbstractFileByPath()` 来返回给定目录下的 `TAbstractFile[]` 数组，然后按照上面类似地方式来判断目录中是否有子目录，如果有则进一步进行处理。

如果未选择目录中的文件，我们还可以进一步提供一个提示框来让用户输入新的文件名来兜底。

````
<%*
const blogFolder = '博客/Obsidian'
const blogTFolder = app.vault.getAbstractFileByPath(blogFolder)
const blogs = blogTFolder.children.filter(folder => folder instanceof tp.obsidian.TFolder)

let selectedBlog

if (blogs.length > 0) {
	selectedBlog = (await tp.system.suggester(blog => blog.name, blogs))?.name
}

// 如果没有选择文章，则创建一个新的文章
if (!selectedBlog) {
	selectedBlog = await tp.system.prompt("创建新的文章")
}

// 将文章移动到选定的目录
await tp.file.move(`${blogFolder}/${selectedBlog}/${tp.file.title}`)
-%>
````

结果

![动画2 50](https://cdn.pkmer.cn/images/202406142149043.gif!pkmer)

### 为文档中的空链接创建文件

下面这个示例我们来实现对当前文档中的链接进行判断，如果链接引用的文件不存在于仓库中，我们就根据链接的名称来创建文件。

````
<%*
const file = tp.config.target_file
const links = app.metadataCache.getFileCache(file)?.links || []

if (links.length > 0) {
	links.forEach(async link => {
		const tfile = await tp.file.find_tfile(link.link)
		if (!tfile) {
			await tp.file.create_new(
				`文件自动创建自：${tp.file.folder(true)}/${file.name}`,
				link.link.split('/').pop(),
				false,
				link.link.split('/').slice(0, -1).join('/')
			)
		}
	})
}
-%>
````

结果：

![动画2 51](https://cdn.pkmer.cn/images/202406142149044.gif!pkmer)

可以看到，调用 `tp.file.create_new()` 会自动创建不存在的目录。

### 插入 Callout 区块

借助 `tp.system.suggester()` 我们可以实现 Obsidian 的默认 Callout 列表。选中需要添加 Callout 的文本，然后触发快捷键 <kbd>Alt+E</kbd>，弹出 Callout 类型列表，选择指定的类型即可快速添加。

````
<%*
const calloutList = {
	'ℹ️ Info': '提示信息',
	'✏️ Note': '笔记',
	'🔥 Tip': '提示',
	'📒 Summary': '总结',
	'☑️ Todo': '待办事项',
	'⚠️ Warning': '警告',
	'❔ Question': '疑问',
	'✔ Success': '成功',
	'❌ Failure': '失败',
	'⚡ Danger': '危险',
	'🐞 Bug': '错误',
	'📋 Example': '示例',
	'✍️ Quote': '引用',
}

const key = await tp.system.suggester(item => item, Object.keys(calloutList))
const value = calloutList[key]
const callout = `>[!${key.split(' ')[1]}] ${value}\n>${tp.file.selection() || ' ...'}`
%>

<% callout %>
````

结果：

![动画2 9](https://cdn.pkmer.cn/images/202406142149045.gif!pkmer)

下面是来自网上的一个比较全面的 Callout 插入脚本，包含了 Obsidian 支持的所有名称并按颜色进行分组。

````
<%*
// Choose a callout from a suggester
// Grouped by color

const types = ["🟦", "Note", "Abstract", "Summary", "TLDR", "Info", "Todo", "Tip", "Hint", "Important", "🟩", "Success", "Check", "Done", "Question", "Help", "FAQ", "🟨", "Warning", "Caution", "Attention", "🟧", "Failure", "Fail", "Missing", "🟥", "Danger", "Error", "Bug", "🟪", "Example", "⬛️", "Quote", "Cite"];

const callouts = ["Blue", "> [!note]", "> [!abstract]", "> [!summary]", "> [!tldr]", "> [!info]", "> [!todo]", "> [!tip]", "> [!hint]", "> [!important]", "Green", "> [!success]", "> [!check]", "> [!done]", "> [!question]", "> [!help]", "> [!faq]", "Yellow", "> [!warning]", "> [!caution]", "> [!attention]", "Orange", "> [!failure]", "> [!fail]", "> [!missing]", "Red", "> [!danger]", "> [!error]", "> [!bug]", "Pink", "> [!example]", "Black", "> [!quote]", "> [!cite]"];

let suggest = await tp.system.suggester(types, callouts);
if (suggest == "null" || /Blue|Green|Yellow|Orange|Red|Pink|Black/.test(suggest)) {return ""};
return suggest;
%>
````

## 总结

Templater 插件官方文档的内容比较多，作者为创作此文全力输出，力求早日和读者见面，同时又要保证知识的完整性和专业性，所以文章内容和截图较多，因此错误再所难免。如果读者在阅读过程中有任何问题欢迎留言或者加入读者群，聆听读者的心声才能更好地服务作者，写出实用的文章为 Obsidian 社区贡献已力。

更多内容，请关注我的专栏：[PKMer_按作者分类-包含 jenemy 的文章列表](https://pkmer.cn/authors/jenemy/)

>[!Tip] 😍彩蛋
> 读者要要了解 Obsidian 哪个插件的使用教程，欢迎评论区留言，说不定哪天就有惊喜~

## 参考

- [Templates - Obsidian Help](https://help.obsidian.md/Plugins/Templates)
- [Vault - Developer Documentation (obsidian.md)](https://docs.obsidian.md/Reference/TypeScript+API/Vault)
- [Introduction - Templater (silentvoid13.github.io)](https://silentvoid13.github.io/Templater/introduction.html)
- <https://api.quotable.io>
- [unsplash/unsplash-js: 🤖 Official JavaScript wrapper for the Unsplash API (github.com)](https://github.com/unsplash/unsplash-js)
- [home - shabeblog (shbgm.ca)](https://shbgm.ca/blog/home)
- <https://zachyoung.dev/posts/folder-templates-with-quick-switcher>
- [lguenth/obsidian-templates: A collection of templates for Obsidian (github.com)](https://github.com/lguenth/obsidian-templates)
- [Templater snippets (zachyoung.dev)](https://zachyoung.dev/posts/templater-snippets)
- [Templater - How to add information to YAML frontmatter - Help - Obsidian Forum](https://forum.obsidian.md/t/templater-how-to-add-information-to-yaml-frontmatter/38009/2)
- [Obsidian Snippets (github.com)](https://gist.github.com/Mearman/ba5b1bcf746b4e04d12865dc09402016)
- [Callouts - Obsidian Help](https://help.obsidian.md/Editing+and+formatting/Callouts)
- [Obs127｜用Templater Hotkeys簡化Obsidian自動化腳本，詳解4個腳本範例 – 簡睿隨筆 (jdev.tw)](https://jdev.tw/blog/8114)
- [博客文章封面的变迁，我是如何制作博客封面的 | 张洪Heo (zhheo.com)](https://blog.zhheo.com/p/463d306b.html)