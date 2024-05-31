---
uid: 20240531175802
title: Obsidian 达人成长之路 _3- 使用终极工具 Dataview 释放笔记库的潜力 · 案例讲解
tags: [Obsidian, Dataview]
description: Obsidian 达人成长之路 _3- 使用终极工具 Dataview 释放笔记库的潜力 · 案例讲解
author: jenemy
type: other
draft: false
editable: false
modified: 20240531180105
---

# Obsidian 达人成长之路 _3- 使用终极工具 Dataview 释放笔记库的潜力 · 案例讲解

[[Obsidian达人成长之路_1-使用终极工具Dataview 释放笔记库的潜力-DQL查询语言]]

[[Obsidian达人成长之路_2-使用终极工具 Dataview 释放笔记库的潜力 · JavaScript API]]

继前面两篇文章，本文为 Obsidian 达人成长之路系列第三篇，主要梳理了 Dataview 示例库 **Dataview Example Valut** 中的一些案例，并加上个人的一些理解和分析，以方便读者能够触类旁通，应用到自己的笔记中。

虽然文章按初级、中级和高级来进行了分类，但是对于不同的作者可能认知不一样，不一定合理，读者可根据标题选择感兴趣的章节阅读。

在文章中我并没有标明每一个示例来自于 Dataview 示例仓库中的具体案例名称，有的原文章内容较多我会给出进一步阅读指引链接。

## 初级篇：Dataview 基础应用

初级篇主要涉及一些比较简单的查询操作，适用于初学者练手，主要聚焦在 DQL 查询上以及基础的 JavaScript API 查询操作。

### 内联查询

内联查询适合于不需要作过多逻辑判断的属性查询，不需要指定代码块，可以在页面正文中任意位置插入查询语句。下面是 DQL 和 JavaScript API 两种语法示例。

DQL 内联查询示例：

````
topic:: basic inline queries
description:: Showcase basic syntax of DQL and JS Inline Queries

创建时间：`= this.file.ctime` %% 2024-05-13 11:05:56 %%
修改时间：`= this.file.mtime` %% 2024-05-15 12:05:44 %%
标签：`= this.tags` %% Blog, Dataview, Obsidian %%
内联字段查询：`= this.topic` %% basic inline queries %%
文本截取：`= truncate(this.description, 20, "...")` %% Showcase basic synt… %%
条件判断：`= choice(contains(this, "topic"), "Set", "Missing!")` %% Set %%
获取带有特殊字符的链接访问失败：`= [[博客/Obsidian/Obsidian 达人成长之路 #1：使用终极工具 Dataview 释放笔记库的潜力 · DQL查询语言]].file.ctime` %% - %%
需要调整为：`= link("博客/Obsidian/Obsidian 达人成长之路 #1：使用终极工具 Dataview 释放笔记库的潜力 · DQL查询语言").file.ctime` %% 2024-05-06 11:05:12 %%
文章包含的链接数量：`= length(link("博客/Obsidian/Obsidian 达人成长之路 #1：使用终极工具 Dataview 释放笔记库的潜力 · DQL查询语言").file.outlinks)` %% 27 %%
除图片以外的链接数量：`= length(filter(link("博客/Obsidian/Obsidian 达人成长之路 #1：使用终极工具 Dataview 释放笔记库的潜力 · DQL查询语言").file.outlinks, (x) => !meta(x).embed))` %% 2 %%
现在时间：`= date(now)` %% 2024-05-15 16:05:24 %%
持续时间：`= dur(1mo2d)` %% 1个月、2天 %%
格式化时间：`= dateformat(date(now), "M'月'dd'号'")` %% 5月15号 %%
````

JavaScript API 示例：

````
创建时间：`$= dv.current().file.ctime` %% 2024-05-13 11:05:56 %%
修改时间：`$= dv.current().file.mtime` %% 2024-05-15 12:05:44 %%
标签：`$= dv.current().file.tags` %% Blog, Dataview, Obsidian %%
内联字段查询：`$= dv.current().topic` %% basic inline queries %%
文本截取：`$= dv.evaluate("truncate(this.description, 20, \"…\")").value` %% Showcase basic synt… %%
或者：`$= dv.tryEvaluate("truncate(this.description, 20, \"…\")")` %% Showcase basic synt… %%
条件判断：`$= dv.current().topic ? 'Set' : 'Missing!'` %% Set %%
获取文件创建时间：`$= dv.page("博客/Obsidian/Obsidian 达人成长之路 #1：使用终极工具 Dataview 释放笔记库的潜力 · DQL查询语言").file.ctime` %% - %%
文章包含的链接数量：`$= dv.page("博客/Obsidian/Obsidian 达人成长之路 #1：使用终极工具 Dataview 释放笔记库的潜力 · DQL查询语言").file.outlinks.length` %% 27 %%
除图片以外的链接数量：`$= dv.page("博客/Obsidian/Obsidian 达人成长之路 #1：使用终极工具 Dataview 释放笔记库的潜力 · DQL查询语言").file.outlinks.where(link => !link.embed).length` %% 2 %%
现在时间：`$= dv.date('now')` %% 2024-05-15 16:05:24 %%
持续时间：`$= dv.duration('1mo2d')` %% 1个月、2天 %%
格式化时间：`$= dv.date('now').toFormat("M'月'dd'号'")` %% 5月15号 %%
````

> [!Tip] 
> 使用内联 API 查询出来的标签在结果显示上和内联 DQL 的结果略有不同，前者是可交互的结果，后者为纯文本。

> [!Warning] 
> 在 API 中没有对应的 `truncate()` 函数使用，但是我们可以 `dv.evalute()` 或者 `dv.tryEvaluate()` 函数在 API 中执行 DQL 查询。

> [!Warning] 
> 在文件名不要包含 `#` 符号，在使用链接时会被错误的识别为标签或者页面标题。

### 在查询结果中显示图片

在 Obsidian 中，`[网站名称](网页地址)` 用于插入网页链接，`![图片名称](图片地址)` 用于嵌入图片（这里也可以是其它媒体，如音频、视频等），图片进一步还能指定宽度，语法为 `![图片名称|宽度](图片地址)`。

图片的地址除了网页地址外，也可能为本地图片，语法为 `![[图片名称.后缀]]`，在 YAML 中为 `"[[图片名称.后缀]]"`。在使用 DQL 查询语法获取图片地址时就需要对两种类型作区分。

现在我们在 Front Matter 中添加一个属性 `cover-img`，其值为图片的链接数组。然后，我们来看一下如何在文档中显示图片：

````
---
cover-img: 
- https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546512443i/43451211.jpg
- "[[Pasted image 20240529150343.png]]"
---

`= "![图片名称|50](" + this.cover-img[0] + ")"`
`= "!" + this.cover-img[1]`
`= embed(link(this.cover-img[1], "50"))`

```dataview
TABLE WITHOUT ID map(cover-img, (img) => choice(typeof(img)="link", embed(link(img, "50")), "![anyName|50](" + img + ")")) AS 图片
WHERE file = this.file
```
````

结果：

![Pasted image 20240529163127](https://cdn.pkmer.cn/images/202405311801669.png!pkmer)

上面的示例中，我们分别使用了 3 种方式来展示图片：

1. 使用 `![xx|xx](xx.xx)` 的方式，这是 URL 图片地址显示方式。
2. 使用 `![[xx.xx]]` 的方式，这种方式虽然简单，但是不能指定链接图片宽度，灵活度不够。
3. 使用 `![[xx.xx|xx]]` 的方式，这是链接的推荐显示方式，需要调用 `embed()` 和 `link()` 函数来实现。

处理 Obsidian 内部图片链接时，我们利用 `link()` 函数的第二个参数来指定图片的宽度，实际上它是用于指定链接别名的，这里刚好利用其发挥额外作用了。

>[!Tip] 
>不要像上面示例中那样在 YAML 中放入链接，如果必须放需要加上双引号才能正确读取出来，否则被识别成数组。但是又衍生出另一个问题，文档属性区域会显示一个警告图标，提示：未匹配到类型，建议使用文本。

下面我们来看一下在现实场景中的应用：

````
``` dataview
TABLE author, genres, EmbededCoverImg as ""
FROM "10 Example Data/books"
FLATTEN choice(typeof(cover-img)="link",
	embed(link(meta(
		choice(
			typeof(cover-img)="link", 
				cover-img, this.file.link
		)
	).path, "50")), "![anyName|50](" + cover-img + ")") AS EmbededCoverImg
```
````

结果：

![Pasted image 20240529170641](https://cdn.pkmer.cn/images/202405311801671.png!pkmer)

下面现给出一个 API 实现方式参考：

````
```dataviewjs
dv.table(["File", "Author", "Genres", ""], dv.pages('"10 Example Data/books"')
    .map(p => {
        let img;

        if (!p['cover-img']) {
            img = ''
        } else if (dv.func.typeof(p['cover-img']) === 'link') {
            img = dv.fileLink(p['cover-img'].path, true, '50')
        } else {
            img = `![anyName|50](${p['cover-img']})`
        }
        
        return [p.file.link, p.author, p.genres, img]
    }))
```
````

代码中 `dv.func.typeof()` 方法同 DQL 查询语句中的函数 `typeof()`。

### 数据分组

数组分组适用于数据具有一对多或多对多的关系，例如一个作者对应多本书籍，那么我们在查询数据时就可以按作者去分组。

在使用 DQL 查询语言 `GROUP BY` 时，需要明确一点的是，我们经过分组后的数据是保存在固定变量 `rows` 中的，这是一组数据，而非单一数据。例如在 `TABLE` 中没有分组时取文件链接是通过 ` file.link ` 来获取，经过分组后就需要使用 `rows.file.link ` 来取值了。需要注意的是 `rows` 是一个数组，我们可以使用 `rows[0]` 来获取分组数据的第一项，但是我们通常不会这样做。

#### 示例一：书籍按作者分组

````
%% 属性样例 %%
---
author: Conrad C
---

%% 查询 %%
```dataview
TABLE rows.file.link AS 书籍
FROM "10 Example Data/books"
GROUP BY author AS 作者
```
````

結果：

![Pasted image 20240516114029](https://cdn.pkmer.cn/images/202405311801672.png!pkmer)

#### 示例二：书籍按类型分组

````
%% 属性样例 %%
---
genres:
- Romance
- Children
- Magic
---

%% 查询 %%
```dataview
TABLE rows.file.link AS 书籍
FROM "10 Example Data/books"
FLATTEN genres
GROUP BY genres AS 类别
```
````

结果：

![Pasted image 20240516114930](https://cdn.pkmer.cn/images/202405311801673.png!pkmer)

>[!Tip] 
>这里需要注意的是 `FLATTEN` 语句很关键，如果不使用将会得到一个错误的结果。原因是在原始数据中每一本书可以对应多个类别，而在按类别查询分组后，结果变成多个类别对应一本书。因此我们需要把每个类别对应上同一本书来修正数据，这样再使用分组时就符合预期了。

下面是一个转换过程示例图解：

![Pasted image 20240516115704](https://cdn.pkmer.cn/images/202405311801674.png!pkmer)

#### 示例三：根据计算结果分组

这里对任务的 `due` 进行分组，如果在 `2022-05-12` 前没有完成就视为过期。

````
%% 属性样例 %%
---
class: history
received: 2022-03-20
due: 2022-05-05
---

%% 查询 %%
```dataview
LIST rows.file.link
FROM "10 Example Data/assignments"
GROUP BY choice(due < date("2022-05-12"), "已过期", "还有机会")
```
````

结果：

![Pasted image 20240516121939](https://cdn.pkmer.cn/images/202405311801675.png!pkmer)

#### 示例四：分组后的元数据

在分组章节提到了分组后的数据属性 `rows`，实际上使用 `GROUP BY` 语句后返回的是一个对象，类似于：

```ts
{
	key: groupName;
	rows: ArrayOfDataColumns
}
```

在使用时通常不会直接去显示获取 `key` 值，默认情况下 Dataview 会直接读取了这个字段的值作为分组名。

如【示例三】所示，可以使用 `choice()` 函数来执行条件判断，返回 2 个状态描述，如果我们将 `LIST rows.file.link` 改成 `LIST`，那么读取的就是 `key` 值，这个 `key` 值就是 `choice()` 函数执行后返回的两个状态描述文本。

在 `GROUP BY` 语句后面我们可以使用 `AS` 语句定义一个别名，例如：`statusText`，我们再次将列表查询语句修改成 `LIST statusText`，观察结果会发现会显示成类似 `- 还有机会: 还有机会`，这样的结果。这个时候 `statusText` 和 `key` 其实是同一个实体，如果只想显示一个分组名，或者不显示，可以使用 `LIST WITHOUT ID` 来达到目的。

进一步我们还可以在 `LIST` 语句中拼接文本（包含有效果 HTML 标签），比如给结果加上 `<kbd>` 标签：`LIST WITHOUT ID "<kbd>" + statusText + "</kbd>"`，有一点需要谨记的是不能在里面使用模板字符串。

有了上面提到的技巧，对于【示例三】的结果可以进一步改成 `LIST join(rows.file.link, " | ")` 来减少空间占用。

对于 `GROUP BY` 语句我们还可以不提供分组属性，而是提供一个文本，然后只针对 `rows` 进行处理，比如获取其长度 `length(rows)`，这实际上是将所有查询的数组归为一个组了。

````
```dataview
LIST length(rows)
FROM "10 Example Data/assignments"
GROUP BY "什么也不做"
```
````

结果：

![Pasted image 20240516180032](https://cdn.pkmer.cn/images/202405311801676.png!pkmer)

现在我们来把【示例三】根据上面提及的一些知识点进行一次改造：

1. 在链接后显示 `due` 的具体日期值
2. 对结果进行合并，显示在一个列表中

````
```dataview
LIST join(map(rows.file, (f) => f.link + " " + f.frontmatter.due), ", ")
FROM "10 Example Data/assignments"
FLATTEN file.frontmatter.due AS path
GROUP BY choice(due < date("2022-05-12"), "已过期", "还有机会")
```
````

结果：

![Pasted image 20240516182930](https://cdn.pkmer.cn/images/202405311801677.png!pkmer)

进一步我们可以使用 `FLATTEN` 语句改造实现同样的效果，可以不用 `map()` 函数，直接将需要格式化显示的结果作为 `rows` 分组后的数据的一个属性。

````
```dataview
LIST join(rows.desc, ", ")
FROM "10 Example Data/assignments"
FLATTEN file.link + " " + file.frontmatter.due AS desc
GROUP BY choice(due < date("2022-05-12"), "已过期", "还有机会")
```
````

### `FLATTEN` 语句

`FLATTEN` 语句是 `GROUP UP` 的相反操作，但事实上它的作用不止这一点，它扮演了一个很重要的角色：声明新变量。

在介绍数据分组时有提及过 `FLATTEN` 语句的作用，现在我们再次以书籍数据为例子，将书籍的分类和话题查询出来：

````
```dataview
TABLE genres, booktopics
FROM "10 Example Data/books"
```
````

结果：

![Pasted image 20240517160559](https://cdn.pkmer.cn/images/202405311801678.png!pkmer)

因为分类和话题其实是多对多的关系，因此我们可以使用 2 个 `FLATTEN` 语句对其展开成 1 维的数据列。

````
```dataview
TABLE genres, booktopics
FROM "10 Example Data/books"
FLATTEN genres
FLATTEN booktopics
LIMIT 4
```
````

结果：

![Pasted image 20240517161616](https://cdn.pkmer.cn/images/202405311801679.png!pkmer)

##### 声明新属性

使用 `FLATTEN` 语句可以将数组展开成一维数组，但对于一个不能进行展开操作的数据类型如：数字、字符串、布尔值以及对象会原样输出。利用这一特点再结合 `AS` 语句可以声明属性并将 `FLATTEN` 后面的值赋值给指定的别名。

下面我们通过 `FLATTEN` 语句分别声明了一个字符串 `arr`，一个数字 `num` 和一个对象 `obj`，对象中包含一个数组 `[1, 2, 3]`，看一下结果如何：

````
```dataview
TABLE WITHOUT ID num, str, obj
FLATTEN 123 AS num
FLATTEN "hello" AS str
FLATTEN {"数字": num, "字符串": str, "数组": [1,2,3]} AS obj
WHERE file = this.file
```
````

结果：

![Pasted image 20240517170018](https://cdn.pkmer.cn/images/202405311801680.png!pkmer)

现在我们再进行一点小改变，将数组 `[1, 2, 3]` 单独提取出来使用 `FLATTEN` 语句声明一个新的属性 `arr`，即：`FLATTEN [1, 2, 3] AS arr`，然后再将 `obj` 修改成：`FLATTEN {"数字": num, "字符串": str, "数组": arr} AS obj`，结果如下：

![Pasted image 20240517170551](https://cdn.pkmer.cn/images/202405311801681.png!pkmer)

可以看到我们得到了一个完全不同的结果，这说明在使用 `FLATTEN` 语句声明数组时会影响结果的维数，我们可以大胆的猜测，假如使用 `FLATTEN` 语句声明 3 个 2 维数组，那么结果将产生 8 种结果：

![Pasted image 20240517172832](https://cdn.pkmer.cn/images/202405311801682.png!pkmer)

#### 处理嵌套

**数据嵌套** 通常指的是在数据结构或数据模型中，一个数据元素内部包含另一个或多个相同或不同类型的数据元素。这种结构使得数据能够以层次化或树状的方式组织起来，从而更好地表示复杂的数据关系。

##### 对象嵌套对象

这种情况下，不需要额外的处理，使用和不适用 `FLATTEN` 语句效果是一样的。

````
%% 属性样例 %%
---
obj:
  obj1:
    obj2:
      prop1: 1
      prop2: 2
---

%% 查询 %%
```dataview
TABLE WITHOUT ID obj
WHERE file = this.file
FLATTEN obj
```
````

结果：

![Pasted image 20240517152437](https://cdn.pkmer.cn/images/202405311801683.png!pkmer)

有了上面的知识，下面我们来分析一个查询书籍中阅读进度不足 50% 的案例：

````
```dataview
TABLE pagesRead, totalPages, percentage
FROM "10 Example Data/books"
FLATTEN round((pagesRead / totalPages) * 100) AS progress
WHERE progress < 50
FLATTEN progress + "%" AS percentage
```
````

结果：

![Pasted image 20240517173908](https://cdn.pkmer.cn/images/202405311801684.png!pkmer)

分析：

1. 第一个 `FLATTEN` 语句用于计算阅读进度百分比。
2. `WHERE` 语句用于对进度进行条件限定。
3. 最后一个 `FLATTEN` 语句对结果进行美化。

##### 对象和数组嵌套

这种情况下，数组项为对象或者普通类型（字符串，数字和布尔值），在对象中属性也可能为数组，相互嵌套多次。

下面是一个数组中包含了 2 个对象和一个字符，对象的属性值为数组。可以看到使用 `FLATTEN` 语句后对象依然保持不变。

````
%% 属性样例 %%
---
arr2:
  - a1:
    - a2
    - a3
  - b1:
    - b2
    - b3
  - c1
---

%% 查询 %%
```dataview
TABLE WITHOUT ID arr2
WHERE file = this.file
FLATTEN arr2
```
````

结果：

![Pasted image 20240517153559](https://cdn.pkmer.cn/images/202405311801685.png!pkmer)

##### 多维数组

这种情况下，数组内部嵌套数组，可能为 2 维（示例：`[[1,2], [3, 4]]`），3 维（示例：`[[[1,2,3], [4,5, 6], [7, 8, 9]]]`）甚至多维，但是 ` FLATTEN ` 语句只能处理 2 维数组，如果是多维的数据，需要结合 `flat(array, [depth])` 函数，通过指定 `depth` 来根据实际情况指定要处理的层级。

````
%% 属性样例 %%
---
arr3:
  -
    - a1
    - b1
  -
    - c1
    -
      - e1
      -
        - f1
---

%% 查询 %%
```dataview
TABLE WITHOUT ID flat(arr3, 2)
WHERE file = this.file
FLATTEN arr3
````

结果：

![Pasted image 20240517154843](https://cdn.pkmer.cn/images/202405311801695.png!pkmer)

>[!Tip] 
>还有一种方法来实现多维数组展开，修改上面的示例，连续使用 4 次 `FLATTEN arr3`，得到一个展开的结果。这个结果并不能推断出原始数组是由几维展开的，在显示上也没有出现列表符号，读者可以根据需求灵活选用。

![Pasted image 20240517164859](https://cdn.pkmer.cn/images/202405311801696.png!pkmer)

### SORT 语句

我们通常在使用 `SORT` 语句时，主要是针对文件的创建日期、日记等进行排序。这里单独提出来讲解的目的在于，让大家知道怎么对一个分类属性进行手动干预排序。下面以 `"10 Example Data/food"` 文件中的 `recipe-type` 属性为例。

默认查询并根据 `recipe-type` 进行分组后的显示顺序为 `meat` , `onepot` 和 `vegetarian`，现在我们将其变成 `onepot`, 'meat' 和 `vegetarian` 的顺序，看看怎么实现：

````
```dataview
TABLE rows.file.link
FROM "10 Example Data/food"
WHERE recipe-type
GROUP BY recipe-type
SORT choice(recipe-type="onepot", "1", choice(recipe-type="meat", "2", "3")) ASC
```
````

结果：

![Pasted image 20240530145453](https://cdn.pkmer.cn/images/202405311801697.png!pkmer)

上面示例中，我们对应对的 3 个属性值的顺序调整，如果数量量很多，几十个又该如何处理呢？

我们可以用一个对象将属性作为键值，排序的权重（顺序值，如 `1`, `2`, ...）作为值，然后以一个立即执行函数根据参数值获取顺序：

````
```dataview
TABLE WITHOUT ID Person.name AS 姓名
FLATTEN [{name: "晓露"}, {name: "一佰度"}, {name: "周工"}, {name: "狼人头"}, {name: "腰哥"}, {name: "黑黑"}] AS Person
WHERE file = this.file
SORT default(((x) => {
    "狼人头":1,
    "晓露": 2
}[x])(Person.name), 99) ASC
```
````

结果：

![Pasted image 20240530152109](https://cdn.pkmer.cn/images/202405311801698.png!pkmer)

`default()` 函数中第二个参数，我们只需要指定为比数据量大就可以了，后续没有指定顺序的值就会按默认的排序方式来执行。

### 根据不同的条件来查询日记

在 Obsidian 中日记文件通常以 `xxxx-xx-xx` 的日期格式创建。我们可以通过 DQL 来精确查询完整年/月/日的日记，也可以查询指定年份、月份和具体某天的日记。下面我们以 10 Example Data/daily 中的日记数据 `wake-up` 为例。

>[!Tip] 
>obsidian 为日记提供了一个专门的属性 `file.day` 来方便我们获取以日期表示的文件名。

#### 日期精确查询

要查询一个精确的日期，只需要使用表达式来判断两个 DateView 对象是否相等。在 DQL 查询语言中可以使用一个等号来判断相等，如果要查询多个日期也可以使用逻辑运算符 `OR` 来添加条件。

需要注意的是，在比较时需要将目标日期使用 `date()` 方法封装后才能进行比较，因为 `file.day` 是一个 DateView 对象，不能和字符串去比较，比如：`file.day = "2022-01-04"` 就是一个无效表达。

````
```dataview
LIST WITHOUT ID file.link + " 起床时间：" + wake-up
WHERE file.day = date(2022-01-04) OR file.day = date(2022-01-24)
```
````

结果：

![Pasted image 20240527170356](https://cdn.pkmer.cn/images/202405311801699.png!pkmer)

#### 忽略年份/月份查询

有些情况下我们并不关心是哪一年、哪一个月的日记中所记载的事项，只想知道某个月的某一天或着每年每个月 17 号自己做了些什么。

>[!Tip] 如果使用 API 来查询的话还可以结合：[jjonline/calendar.js: 中国农历（阴阳历）和西元阳历即公历互转JavaScript库 (github.com)](https://github.com/jjonline/calendar.js) 来查询每年自己农历生日的日记信息。

要查询这样的数据，需要将日期使用 `dateformat()` 方法进行格式化后进行比较。

````
按月-日查询：

```dataview
LIST WITHOUT ID file.link + " 起床时间：" + wake-up
WHERE dateformat(file.day, "MM-dd") = "02-17"
```

按日查询：

```dataview
LIST WITHOUT ID file.link + " 起床时间：" + wake-up
WHERE dateformat(file.day, "dd") = "17"
```
````

结果：

![Pasted image 20240527184049](https://cdn.pkmer.cn/images/202405311801700.png!pkmer)

第一个查询结果因为 2020 和 2021 年日记数据中没有内联字段 `wake-up`，所以没有数据。第二个查询前 2 个也是同样的原因，第 4 个结果我们可以看出，只要文件面中包含符合日期的格式就会被解析出来。

#### 根据日记中特定属性查询

上面 2 个示例中我们在查询结果中显示了内联属性 `wake-up`，会发现有的日记并没有定义这个属性，同时在已有的数据情况下，我们还可以进一步进行过滤，例如：起床时间在 6:00 ~ 6:30 的日期。

由于在 DQL 查询语言中我们无法将 `wake-up` 的值读取并传入 `date()` 函数，所以只能采取一种不友好的方式来实现：将时间按 `:` 拆分后单独判断。

>[!Tip] 
>我们无法将内联属性传 `date()` 函数，但是使用 `FLATTEN AS` 声明的日期、`file.day` 和 `file.frontmatter.xx` 的日期值还是可以传入正常解析的。

下面是两方式实现示例：

````
```dataview
LIST WITHOUT ID file.link + " 起床时间：" + wake-up
FROM "10 Example Data/dailys"
WHERE wake-up
FLATTEN number(split(wake-up, ":")[0]) AS hour
FLATTEN number(split(wake-up, ":")[1]) AS minute
WHERE hour = 6 AND minute <= 30
```

```dataviewjs
const dt = dv.luxon.DateTime

const start = dt.fromObject({ hour: 6, minute: 0 })
const end = dt.fromObject({ hour: 6, minute: 30 })

dv.list(
    dv.pages('"10 Example Data/dailys"')
        .where(p => p["wake-up"])
        .filter(p => {
            const time = dt.fromFormat(p["wake-up"], "HH:mm")
            return time >= start && time <= end
        })
        .map(p => `${p.file.link} 起床时间：${p["wake-up"]}`)
)
```
````

结果：

![Pasted image 20240527200105](https://cdn.pkmer.cn/images/202405311801701.png!pkmer)

在处理时需要注意，在表示 6 点时，数据源中有少部分是 `6:xx` 其它为 `06:xx`。我们上面的代码中无须担心会被其影响，因为在使用 `number()` 方法时，`06` 会变成数字 `6`，而在脚本实现中 `dt.fromFormat()` 方法会自动处理。如果是字符串比较就需要慎重一些，将其考虑在内。

### 查询联系人的最后一次见面日期

下面是日记中和联系人的见面信息记录：

````
#### Appointments
My next appointment with (person:: [[AB1908]]) is on (appointment:: 2022-06-02).
Also I have an appointment at (appointment:: 2022-05-24 13:17) with (person:: [[Bob]])
````

现在我们来查询和每一个人的最后一次约会日期以及目前为止过去了多少天，并按降序排序（最近日期显示在前面）：

````
```dataview
TABLE WITHOUT ID
contactedPerson AS "Person",
max(rows.file.link) AS "Last contact",
min(rows.elapsedDays) + " days" AS "Elapsed days"
FROM "10 Example Data/dailys"
WHERE person
FLATTEN (date(today) - file.day).days AS elapsedDays
FLATTEN person AS contactedPerson
GROUP BY contactedPerson
SORT max(rows.file.day) DESC
```
````

结果：

![Pasted image 20240529180837](https://cdn.pkmer.cn/images/202405311801702.png!pkmer)

从这个示例中我们可学到一点日记小技巧：如何使用 `(xx: xx)` 内联字段来记录信息，并在后期进行查询。

示例中显示的是最后一次见面日期，如果要查询日记信息中第一次见面时间，可以将查询语句中的第 3 行改成 `min(rows.file.link) As "First contact"`。

### 计算每天的醒来时长

下面这个案例中，我们查询日记数据中的 `wake-up` 和 `go-to-sleep` 行内属性，来计算出醒来时长。

````
```dataview
TABLE wake-up, go-to-sleep, wakeTime
FROM "10 Example Data/dailys"
LIMIT 10
FLATTEN dateformat(file.day, "yyyy-MM-dd") as dt
FLATTEN date(dt + "T" + go-to-sleep) - date(dt + "T" + wake-up) as wakeTime
```
````

结果：

![Pasted image 20240531115539](https://cdn.pkmer.cn/images/202405311801703.png!pkmer)

进一步阅读：[Calculate waking phase with wake up and go to sleep times - Dataview Example Vault (s-blu.github.io)](https://s-blu.github.io/obsidian_dataview_example_vault/20%20Dataview%20Queries/Calculate%20waking%20phase%20with%20wake%20up%20and%20go%20to%20sleep%20times/)

### 按周显示数据

下面这个示例，我们通过指定的周数 `2022-W5` 查询日记中的 ` note ` 属性的值，并以本地化的时间显示星期数。

````
```dataview
TABLE WITHOUT ID "**" + dateformat(file.day, "cccc") + "**" AS "Day" , choice(typeof(note) = "array", note, array(note)) AS "Notes"
FROM "10 Example Data/dailys"
FLATTEN "2022-W5" AS Week
WHERE string(file.day.year) = split(Week, "-W")[0] AND string(file.day.weekyear) = split(Week, "-W")[1]
SORT file.name
```
````

结果：

![Pasted image 20240529191626](https://cdn.pkmer.cn/images/202405311801704.png!pkmer)

关于日期格式符可以参见：[Formatting (moment.github.io)](https://link.juejin.cn/?target=https%3A%2F%2Fmoment.github.io%2Fluxon%2F%23%2Fformatting%3Fid%3Dtable-of-tokens "https://moment.github.io/luxon/#/formatting?id=table-of-tokens")

### 查询特定标题下的任务

创建一个页面，在页面中复制以下面容：

````
# title 1

- [ ] task 1
- list 1

## title 2

- [x] task 2
- [ ] task 2.1
- list 2

### title 3

- [ ] task 3
- list 3
````

现在我们来看如何在当前页面中查询标题 `title 2` 下的任务。

````
```dataview
TASK
WHERE file = this.file AND meta(section).subpath = "title 2"
```
````

结果：

![Pasted image 20240528152438](https://cdn.pkmer.cn/images/202405311801705.png!pkmer)

>[!Tip] 我们在查询中使用的 `section` 属性只存在于 `TASK` 查询中，虽然在 Dataview 中任务也是一种列表项，内部使用了 `task` 属性是否为 `true` 来判断列表为任务。但是，需要注意的是换成 `LIST` 查询就会出现执行错误。

进一步，如果想判断任务是否完成，还可以结合 `completed` 和 `fullyCompleted` 属性来过滤任务：`WHERE file = this.file AND meta(section).subpath = "title 2" AND completed`。

接下来我们来使用 API 的方式同样实现任务的查询，但在这里我们有 3 种方式来实现。

1. 直接从 `file.tasks` 获取任务，以 `dv.taskList()` 输出。
2. 从 `file.lists` 获取列表，并通过 `task` 属性为 `true` 来判断任务，以 `dv.taskList()` 输出。
3. 接着第 2 种，但以 `dv.list()` 输出，同时模拟任务显示。

参考代码如下：

````
```dataview
TASK
WHERE file = this.file AND meta(section).subpath = "title 2"
```

```dataviewjs
dv.taskList(
    dv.current().file.tasks
        .where(t => t.section.subpath === "title 2")
)

dv.taskList(
    dv.current().file.lists
        .where(t => t.section.subpath === "title 2" && t.task)
)

dv.list(
    dv.current().file.lists
        .where(t => t.section.subpath === "title 2" && t.task)
        .map(t => `- [${t.checked ? "x" : " "}] ${t.text}`)
)
```
````

结果：

![Pasted image 20240528155240](https://cdn.pkmer.cn/images/202405311801706.png!pkmer)

实现一、二都没有问题，优先采用实现一，第三种实现只是模拟，不能反向操作，对查询结果任务状态的改变不会反应到原任务。从结果截图中还可以看出第三种显示又是列表又是任务，两者叠加在一起了，其实我们可以换一种方式，使用 `dv.paragraph()` 来渲染，就会好看一点，就不具体展开了。

### 合并数据到同一个表格列

在 `TABLE` 查询输出时，我们可以将两个属性进行合并成一个列表进行显示。

````
```dataview
TABLE WITHOUT ID [Person.name, Person.nickname] AS 称呼
FLATTEN [{name: "晓露", nickname: "球球"}, {name: "周工", nickname: "露露"}, {name: "狼人头", nickname: "Jenemy"}, {name: "腰哥"}] AS Person
WHERE file = this.file
```
````

如果数据中缺少其中某个属性，则会显示为 `-`，下面我们通过 `filter()` 函数来处理一下，过滤掉不存在的属性。

````
```dataview
TABLE WITHOUT ID name AS 称呼
FLATTEN [{name: "晓露", nickname: "球球"}, {name: "周工", nickname: "露露"}, {name: "狼人头", nickname: "Jenemy"}, {name: "腰哥"}] AS Person
WHERE file = this.file
FLATTEN filter([Person.name, Person.nickname], (x) => x) AS name
```
````

对比结果：

![Pasted image 20240530160245](https://cdn.pkmer.cn/images/202405311801707.png!pkmer)

### 进度条

在 HTML 中有一个标签 `<progress>` 来渲染进度条，我们可以很容易的使用内联查询 JS 或 `dv.el()` 函数来实现。

````
pagesRead:: 42
totalPages:: 130

`$= const value = Math.round((dv.current().pagesRead / dv.current().totalPages) * 100); "<progress value='" + value + "' max='100'></progress>" + " " + value + "%"`
````

结果：

![Pasted image 20240530183919](https://cdn.pkmer.cn/images/202405311801708.png!pkmer)

下面这个案例中，我们在页面中设置了两个内联字段来分别表示当前进度值和目标总数值，并根据不同的进度显示不同的图片。

````
wordcount:: 3900
targetcount:: 15000

```dataviewjs
const pagePath = "Add a NaNoWriMon to your vault"
const inlineWordcount = "wordcount"
const inlineTargetcount = "targetcount"
const name = "Bulba"
const images = ["Pokémon-Icon_001.png", "Pokémon-Icon_002.png", "Pokémon-Icon_003.png"]

const page = dv.page(pagePath)
let image = images[0]
const percentage = Math.round(page[inlineWordcount] / page[inlineTargetcount] * 100)

if (percentage > 33 && percentage < 66) {
    image = images[1]
} else if (percentage > 66) {
    image = images[2]
}

const attachments = this.app.vault.getConfig("attachmentFolderPath")
const basePath = this.app.vault.adapter.basePath

const html = `<div class="monwrapper" style="display:flex;align-items:center;">
<img src="${basePath}/${attachments}/${image}" class="mon" style="margin-right:10px;"></img>
<div>
<div class="monname">${name}</div>
<div class="progressbar"><progress max="100" value="${percentage}"></progress> Lv. ${percentage}</div></div>
</div>`;
dv.el("div", html)
```
````

结果：

![Pasted image 20240530174437](https://cdn.pkmer.cn/images/202405311801709.png!pkmer)

代码中 `this.app.vault.getConfig("attachmentFolderPath")` 用于获取我们配置的附件文件夹路径。`getConfig()` 方法也可以读取 `.obsidian/app.json` 中的其它配置。`this.app.vault.adapter.basePath` 用于获取当前笔记在操作系统中的路径，如：`D:\Test_Note`。

>[!Tip] 如果在 Mac 中发现图片并没有成功显示，控制台报 `net::ERR_FILE_NOT_FOUND` 错误。正确的使用姿势是在原有的路径上添加 `file:///` 前缀，即：`<img src="file://${basePath}/${attachments}/${image}" />`。

下面我们再看一个复杂的进度条案例。

查询项目数据，并对每个目标及包含的项目的完成情况进行可视化显示。

````
```dataviewjs
const DQL = await dv.tryQuery(`
TABLE WITHOUT ID
	G AS Goals,
	rows.OUT,
	map(rows, (r) => r.Lt),
	map(rows, (r) => r.Lc),
	map(rows, (r) => "<progress style='width:80px;' value='" + (r.Lc/r.Lt)*100 + "' max='100'></progress>" + "&nbsp;&nbsp;<span style='font-size:smaller;color:var(--text-muted)'>" + round((r.Lc/r.Lt)*100) + "%</span>")
FROM #goal 
FLATTEN file.outlinks AS OUT
WHERE OUT.file.tasks
FLATTEN length(OUT.file.tasks) AS Lt
FLATTEN length(filter(OUT.file.tasks, (p) => p.completed)) AS Lc
GROUP BY file.link AS G
SORT G ASC
`)

const globalValues = DQL.values
	.map(row => {
	console.log(row)
	return [
		row[0], //Goals Link
		removeBulletpoints(row[1]), // Project links
		removeBulletpoints(row[4]), // progress bars
		"<progress value='" + sumUp(row[3])/sumUp(row[2]) * 100 
		+ "' max='100'></progress><br><span style='font-size:smaller;'>" 
		+ Math.round(sumUp(row[3])/sumUp(row[2]) * 100) + "% completed</span>" 
	]})

dv.table(["Goals", "Projects", "Progress", "Goal Progress"], globalValues);


function removeBulletpoints(array) {
	return array.join("<br>")
}

function sumUp(val) {
	return val.reduce((acc, val) => acc + val, 0)
}
```
````

结果：

![Pasted image 20240530175840](https://cdn.pkmer.cn/images/202405311801710.png!pkmer)

这个例子中查询的数据源有 2 个目标 `Goal 1` 和 `Goal 2`，两个文件中分别外链了 `Project 1~9`，并且都标记了 `#goal` 标签。所以 DQL 查询语句先通过标签来获取 2 个目标文件，然后通过外链获取所有项目中的任务，并根据每个任务文件中的任务数和完成数来生成进度条。

例子中的 `removeBulletpoints()` 函数去除 Bullet 的方式让我们又 Get 到了新技能：如何去掉列表丑陋的小点点。

````
name:: 标题1
name:: 标题2
name:: 标题3

```dataview
TABLE WITHOUT ID name AS 姓名
where file = this.file
```

```dataview
TABLE WITHOUT ID join(name, "<br>") AS 姓名
where file = this.file
```
````

结果：

![Pasted image 20240530182704](https://cdn.pkmer.cn/images/202405311801711.png!pkmer)

## 中级篇：Dataview 进阶应用

中级篇主要介绍一些复合操作以及 `dv.view()` 的使用。

### 链接查询

Obsidian 作为双链笔记应用中的佼佼者，提供了强大的链接支持。而我们作为使用者，能够熟练掌握并应用链接，同时在 Dataview 中根据需求写出相应的查询语句或代码，更是如虎添翼。

链接在 Obsidian 中可以理解成一个文件（主要是指 Markdown 文件）的抽象，查询链接实际就是在查询一个文件名或者其内容。

如果初学读者没有阅读过系列文章前 2 篇，不了解 Obsidian 中的链接建议先去补充一下基础知识。这里我也简单汇总一下链接的知识点。

- 链接以 `[[xxx]]` 的语法引入文档中，如果在前面加感叹号，即：`![[xxx]]`，则表示将链接的内容嵌入文档中。
- 我们将当前文档引入的链接称之为**出链**（Outgoing links），如果有其它文档引用了当前文档，则将其它文档称之为**外链**（Backlinks）。
- 链接有 4 种方式：`[[xxx]]` | `[[xxx#x]` | `[[xxx#^x]` 和 `[[xxx#^x|x]`，分别表示链接到文档、标题、段落（又叫块）以及使用显示别名。

#### 查询不存在的引用链接

在 Obsidian 中使用 `[[xxx]]` 引用链接时，不一定要求链接指向的文件存在于库中，因此，会存在大量空链接。页面中引用的链接存放在 `file.outlinks` 属性中，我们可以读取其中的值来进一步判断链接是否存在。

````
```dataview
TABLE WITHOUT ID key AS "unresolved link", rows.file.link AS "referencing file"
FROM "10 Example Data"
FLATTEN file.outlinks as outlinks
WHERE !(outlinks.file) AND !(contains(meta(outlinks).path, "/"))
GROUP BY outlinks
```
````

上面代码 `!(outlinks.file)` 用于判断 `[[]]` 的情况，对于 `[[xxx]]` 通过 `meta()` 函数得到的链接描述信息中 `path` 值为 `xxx`，而有效的链接路径为：`xx/xx/xxx.md` 的形式，因此示例中判断路径是否包含 `/` 是可以排除这种无效链接的。

在 Dataview 提供的 API 中，我们使用 `dv.app.metadataCache` 来获取 Obsidian API 中链接文本对象，这个对象有两个属性，分别为：

- `resolvedLinks: Record<string, Record<string, number>>` 包含所有已解析的链接。
- `unresolvedLinks: Record<string, Record<string, number>>` 包含所有未解析的链接。

假如文档 `测试.md` 包含一个不存在的 `[[xxx]]` 链接，那么在 `unresolvedLinks` 中表示如下：

```json
{
	"测试.md": {
	    "xx": 1
	}
}
```

`xx` 代表链接名称，它的值是一个数字，表示在当前文档中出现的次数。

下面我们来遍历输出当前文档中不存在的链接：

```js
dv.list(Object.keys(dv.app.metadataCache.unresolvedLinks[dv.current().file.path]))
```

如果要查询库中所有不存在的链接，将遍历方式修改一下：

```js
dv.list(new Set(Object.values(dv.app.metadataCache.unresolvedLinks).flatMap(l => Object.keys(l)).sort()).values())
```

这里需要使用 `Set()` 来去重，因为同一个链接可能在不同的页面引用多次。

上面我们只是将仓库中所有不存在的链接遍历并以列表的形式显示出来了，现在我们进一步将每一个链接所包含的文件列举出来：

````
```dataviewjs
const unresolvedLinksMap = dv.app.metadataCache.unresolvedLinks

const res = {}
for (let page in unresolvedLinksMap) { // page 为文件路径
    const unresolved = Object.keys(unresolvedLinksMap[page])
    if (unresolved.length === 0) continue
    for (let link of unresolved) { // file 为链接名
        if (!res[link]) res[link] = {link, usages: []}
        res[link].usages.push(dv.fileLink(page))
    }
}

dv.table(["Unresolved Link", "Contained in"], Object.values(res).map(l => [dv.fileLink(l.link), l.usages]))
```
````

结果部分截图：

![Pasted image 20240528190213](https://cdn.pkmer.cn/images/202405311801712.png!pkmer)

进一步阅读：[List non existing, linked pages - Dataview Example Vault (s-blu.github.io)](https://s-blu.github.io/obsidian_dataview_example_vault/20%20Dataview%20Queries/List%20non%20existing%2C%20linked%20pages/)

#### 查询所有未被使用的附件

在 Obsidian 中文档是以 Markdown 格式保存的，所以其它文档类型我们都可以视作附件。当然这也不是绝对的，如果安装的插件自带了特定格式的源文件我们不能将其作附件。

要获得所有文件列表，我们需要用到 `app.vault.getFiles()` 方法，并过滤掉所有 Markdown 文件得到附件列表。同时，查询所有文档中的外链，过滤掉指向 Markdown 文档的链接。如果非 Markdown 文档的链接列表中包含附件列表中的文件，则说明附件已使用。

注意：这里的 `app` 是一个全局属性，可以在 Dataviewjs 代码块直接访问。

````
```dataviewjs
const allNonMdFiles = app.vault.getFiles().filter(f => f.extension !== "md")
const allNonMdOutlinks = dv.pages().file.outlinks.path.filter(link => !link.endsWith(".md"))
const notReferenced = allNonMdFiles.filter(f => !allNonMdOutlinks.includes(f.path))
dv.list(dv.array(notReferenced).map(link => dv.fileLink(link.path)))
```
````

结果部分截图：

![Pasted image 20240528194056](https://cdn.pkmer.cn/images/202405311801713.png!pkmer)

如果要指定多个非附件文档后缀，比如截图中的 `.loom` 文件后缀，可以将第一行代码中的过滤语句修改成：`['md', 'loom'].includes(file.extension)`。

### 计算连续头痛的周期和持续时间

通过 YAML 中的属性 `wellbeing.pain-type` 是否包含 `head` 来判断当日是否有头痛记录，然后计算持续的天数以及上一次的间隔周期。

````
```dataviewjs
const dt = dv.luxon.DateTime
const dur = dv.luxon.Duration

// 返回一个由每个页面的前一天的页面（如果存在）组成的集合，并按日期降序排序。需要注意的是，并不是所有日期都有前一天的数据。
let startDates = dv.pages('"10 Example Data/dailys"')
    .mutate(p => p.previousDay = dv.page(dt.fromMillis(p.file.day - dv.duration("1d"))
        .toFormat('yyyy-MM-dd')))
        .sort(p => p.file.name)

// 结束日期的数据：当日没有记录数据，但前一天有记录。
const endDates = dv.array(dv.clone(startDates)[0]).where(p => !checkCriteria(p) && checkCriteria(p.previousDay))

// 开始日期的数据：当日有记录数据，但前一天无记录。
startDates = startDates.where(p => checkCriteria(p) && !checkCriteria(p.previousDay))

// 存放周期数据
const cycles = []

for (let i = 0; i < endDates.length; i++) {
    cycles.push([
        startDates[i].file.link,
        endDates[i].file.link,
        dur.fromMillis(endDates[i].file.day - startDates[i].file.day),
        i === 0 ? '' : dur.fromMillis(startDates[i].file.day - endDates[i-1]?.file.day),
        i === 0 ? '' : dur.fromMillis(startDates[i].file.day - startDates[i-1]?.file.day).toFormat("d '天'")
    ])
}

// 输出为表格
dv.table(["开始", "结束", "持续时间", "间隔", "间隔周期"], cycles)

function checkCriteria(p) {
    return p && p.wellbeing && (p.wellbeing["pain-type"] || []).contains("head")
}
```
````

结果：

![Pasted image 20240511181827](https://cdn.pkmer.cn/images/202405311801714.png!pkmer)

### 根据复选框动态显示内容

当前页面中以作者名为任务名，当任务完成时自动去查询在日记中有引用自该作者的语录，当取消完成时，自动移除相关语录信息。

````
- [x] Michel Foucault
- [ ] Walter Benjamin
- [ ] Karl Marx

```dataviewjs
const checklist = dv.current().file.tasks.where(t => t.completed)
const authors = ["Michel Foucault", "Walter Benjamin", "Karl Marx"]

// 这里将原来代码中的 3 段代码用一个遍历重写了
authors.forEach(author => {
    if (isActive(author)) {
        dv.header(2, `${author} quotes`)
        dv.list(dv.pages('"10 Example Data/dailys"').flatMap(p => p.file.lists)
            .where(l => l.author == author)
            .text)
    }
})

function isActive(name) {
// 原代码使用 `t.text == name` 来判断并不准确
// 因为我们安装了 tasks 插件后，任务完成会自动加上表情符号和完成日期。
    return checklist.where(t => t.text.contains(name))[0]
}
```
````

结果：

![Pasted image 20240511193408](https://cdn.pkmer.cn/images/202405311801715.png!pkmer)

### 按照文件中的顺序对重复的元数据字段进行分组

这个案例对日记中以下数据中的 `bought` 进行查询并显示出对应的 `paid` 数据。

````
#### Money spent

bought:: piece of cake
paid:: 7.99$

bought:: buddha bowl
paid:: 8.5$

bought:: jacket
paid:: 99$
````

从数据可以看出 `bought` 和 `paid` 在页面中是重复出现，这在 Obsidian 中将会被解析成 `bought: ['piece of cake', 'buddha bowl', 'jacket']` 和 `paid: ['7.99$', '8.5$', '99$']`。

下面是查询代码：

````
```dataviewjs
const pages = dv.pages('"10 Example Data/dailys"').where(p => p.bought)

const groupedValues = [];
for (let page of pages) {
    const length = Array.isArray(page.bought) ? page.bought.length : 1;
    for (let i = 0; i < length; i++) {
        groupedValues.push([
            page.file.link,
            getValue(page, 'bought', i),
            getValue(page, 'paid', i),
        ]);
    }
}

dv.table(["页面", "购买", "支付"], groupedValues)

function getValue(page, key, i) {
    return page[key] && Array.isArray(page[key]) ? page[key][i] : page[key];
}
```
````

结果：

![Pasted image 20240512233848](https://cdn.pkmer.cn/images/202405311801716.png!pkmer)

从上面的结果来看，物品有一部分是经常购买的，比如说：`piece of cake`，现在我有一个想法浮现在脑海，我们能不能进一步根据 `bought` 的具体值再进行一次分组呢，相同组的名字以 `--` 显示，下面是期望得到的效果：

![Pasted image 20240512235407](https://cdn.pkmer.cn/images/202405311801717.png!pkmer)

然后，我进入了无休止的尝试中…

最终，我实现出了想要的结果，但是这个代码有点长，不太好理解，也并不优雅：

````
```dataviewjs
const pages = dv.pages('"10 Example Data/dailys"').where(p => p.bought)
   .sort(p => p.file.name)

const groupedValues = [];
for (let page of pages) {
    const length = Array.isArray(page.bought) ? page.bought.length : 1;
    for (let i = 0; i < length; i++) {
        groupedValues.push([
            page.file.link,
            getValue(page, 'bought', i),
            getValue(page, 'paid', i),
        ]);
    }
}

// 重组数据
const newPages = groupedValues.map(g => {
    return {
        link: g[0],
        bought: g[1],
        paid: g[2],
    }
})

// 按 bought 进行分组
const newGroupedValues = dv.array(newPages)
    .groupBy(p => p.bought)
    .flatMap(g => g.rows)

dv.table(
    ["购买", "支付", "页面"],
    newGroupedValues.flatMap((g, i, arr) => {
        let j = 0; // 用于判断 bought 是否连续

        // 找到连续的 bought
        if (i > 0 && g.bought !== arr[i - 1].bought) {
            j = i;
        }

        // 计算连续的数量
        while (j < arr.length - 1 && arr[j+1].bought === g.bought) {
            j++;
        }

        if (j > i) {
            return Array(j - i + 1).fill(0).map((_, k) => {
                if (k === 0) {
                    return [g.bought, g.paid, g.link]
                } else {
                    // 相同名字显示 --
                    return ['--', arr[i + k].paid, arr[i + k].link]
                }
            })
        }

        // 单个 bought
        if (i === j && g.bought !== arr[i - 1].bought) {
            return [[g.bought, g.paid, g.link]]
        }
    })
)

function getValue(page, key, i) {
    return page[key] && Array.isArray(page[key]) ? page[key][i] : page[key];
}
```
````

上述代码是在 `groupedValues` 的基础上对数据进行了一次重映射，然后使用 `dv.array()` 方法将普通的 JavaScript 数组转换成 `DataArray<T>` 类型，然后使用其 `groupBy()` 方法按 `bought` 字段进行分组，然后使用 `flatMap()` 映射返回 `rows` 的值。

> [Tips] 使用 `groupBy()` 分组后返回一个包含 `key` 和 `rows` 的对象，其中 `key` 为分组名称，`rows` 是分组后的数据。

`flatMap()` 方法是一个很重要的函数，关于其用法可自行去脑补，后面处理分组数据部分写出来后，思索着应该还有更简单的实现。与是，作者又双叒叕熬夜想了想，终于以 2 个 `flatMap()` 方法成功破局，一行代码暴击（不追求代码可读性为前提）：

````
```dataviewjs
const pages = dv.pages('"10 Example Data/dailys"').where(p => p.bought)
   .sort(p => p.file.name)

const groupedValues = [];
for (let page of pages) {
    const length = Array.isArray(page.bought) ? page.bought.length : 1;
    for (let i = 0; i < length; i++) {
        groupedValues.push([
            page.file.link,
            getValue(page, 'bought', i),
            getValue(page, 'paid', i),
        ]);
    }
}

// 重组数据
const newPages = groupedValues.map(g => {
    return {
        link: g[0],
        bought: g[1],
        paid: g[2],
    }
})

// 按 bought 进行分组
const newGroupedValues = dv.array(newPages)
    .groupBy(p => p.bought)

dv.table(
   ["购买", "支付", "页面"],
   newGroupedValues.flatMap((g, i, arr) => 
        g.rows.flatMap((r, i, arr) => {
            if (i === 0) {
                return [[g.key, r.paid, r.link]]
            } else {
                return [['--', r.paid, r.link]]
            }
        })
   )
)

function getValue(page, key, i) {
    return page[key] && Array.isArray(page[key]) ? page[key][i] : page[key];
}
```
````

最后，如果你脑子又一转，在数据很多的情况下，是否可以将每个分组拆解出来单独显示呢？也就是说多个表格单独显示，像下面这样：

![Pasted image 20240513001831](https://cdn.pkmer.cn/images/202405311801718.png!pkmer)

这必需安排起，只需要将上面的示例中的 `dv.table()` 部分改成下面的代码即可：

```js
for (let g of newGroupedValues) {
    dv.span('- ' + g.key)
    dv.table(
        ["页面", "支付"],
        g.rows.map(r => [r.link, r.paid])
    )
}
```

### 显示标签云

这个案例中我们将仓库中所有标签按引用次数，设定不同的权重并使用 `dv.view()` 来加载脚本和样式。

````
%% 查询代码 %%
```dataviewjs
await dv.view("00 Meta/dataview_views/tagcloud", 
{
values: dv.pages('"10 Example Data/dailys"').where(p => p.person).person
})
```

%% 脚本 %%
```js
dv.container.className += ' tagcloud';

const uniqueValues = {};
input.values.forEach(val => {
    if (uniqueValues[val]) {
        uniqueValues[val]++;
    } else {
        uniqueValues[val] = 1;
    }
});

const quantities = Array.from(new Set(Object.values(uniqueValues).sort((a, b) => b - a)));
const sizeClassMap = {
    small: 1,
    medium: 2,
    big: 3,
};

if (quantities.length > 3) {
    const third = Math.floor(quantities.length / 3);
    sizeClassMap.small = quantities[quantities.length - third];
    sizeClassMap.medium = quantities[third * 2];
    sizeClassMap.big = quantities[third];
}

Object.keys(uniqueValues).forEach(t => {
    const sizeClass =
        uniqueValues[t] <= sizeClassMap.small ? 'small' : uniqueValues[t] <= sizeClassMap.medium ? 'medium' : 'big';
    dv.span(t, { cls: 'cloud-item ' + sizeClass });
});

```
%% 样式 %%
```css
.cloud-item {
  display: inline-block;
  padding: 4px;
  margin: 4px;
  border-radius: 4px;
  background: rgba(221, 221, 221, 0.2);
}

.cloud-item.small {
  font-size: 0.85em;
}

.cloud-item.medium {
  font-size: 1.1em;
}

.cloud-item.big {
  font-size: 1.4em;
}
```
````

结果：

![Pasted image 20240530171237](https://cdn.pkmer.cn/images/202405311801719.png!pkmer)

上述代码位 `00 Meta/dataview_views` 目录中。

### 根据任务属性自定义渲染

这个案例中，根据任务描述文本中定义的内联属性 `priority` 的值 `high` | `medium` | `low` 来添加不同的标识样式。

````
```dataviewjs
// define pages
const pages = dv.pages('"10 Example Data/projects"')

// OPEN TASKS
const tasks = pages.file.tasks.where(t => t.priority && !t.completed)

// priorities color
const red = "<span style='border-left: 3px solid red;'>&nbsp;</span>"
const orange = "<span style='border-left: 3px solid orange;'>&nbsp;</span>"
const green = "<span style='border-left: 3px solid rgb(55 166 155);'>&nbsp;</span>"

// regex to remove the field priority in text
const regex = /\[priority[^\]]+\]/g

// assign colors according to priority
for (let task of tasks){
task.visual = "";

    if (task.priority === "high") {
        task.visual = red
    } else if (task.priority === "medium") {
        task.visual = orange
    } else if (task.priority === "low") {
        task.visual = green
    }
    task.visual += task.text.replace(regex, "");
}

// render open tasks sorted after priority
const order = [ "low", "medium", "high"]
dv.taskList(tasks.sort((a, b) => order.indexOf(b.priority) - order.indexOf(a.priority)), false)
```
````

结果：

![Pasted image 20240531145021](https://cdn.pkmer.cn/images/202405311801720.png!pkmer)

进一步阅读：[Colorcode tasks based on meta data - Dataview Example Vault (s-blu.github.io)](https://s-blu.github.io/obsidian_dataview_example_vault/20%20Dataview%20Queries/Colorcode%20tasks%20based%20on%20meta%20data/)

## 高级篇：Dataview 高级技巧与探索

高级篇的内容主要是一些不常用，但是实用，需要更多的代码的内容，或者需要结合第三方插件的内容。

### 表格列求和

在电子表格中，我们可以对列数据进行运算，如求和、未平均值等。下面我们来看一下如何在 Dataview 查询的结果中实现对列数据的求和。

````
```dataviewjs
const query = `TABLE praying, training, situps, steps
FROM "10 Example Data/dailys"
WHERE file.day.month = 2`

const nameOfTotalRow = "Sums";

let DQL = await dv.tryQuery(query);
const sums = [nameOfTotalRow];

// 如果在 DQL 查询语句中添加了 `WITHOUT ID`，这里就需要改成从 `0` 开始遍历
for (let i = 1; i < DQL.headers.length; i++) {
	let sum = 0;
	const dataType = getDatatypeOfColumn(i, DQL.values)
	
    // 只有数字和持续时间的数据类型才会被计算
	if (!["number", "duration"].includes(dataType)) {
		sums.push("")
		continue;
	}
    
    // 计算每一列的总和
	for (let k = 0; k < DQL.values.length; k++) {
		// 行 `k`, 列 `i` 的值
		let currentValue = DQL.values[k][i];
		if (currentValue) sum += currentValue 
	}
	if (!sum) sum = ""
	sums.push(dataType === "duration" ? dv.luxon.Duration.fromMillis(sum) : sum);
}

function getDatatypeOfColumn(columnNo, values) {
	let i = 0;
	let datatype;
	while (i < DQL.values[0].length && (!datatype || datatype === "null")) {
		datatype = dv.func.typeof(DQL.values[i][columnNo])
		i++;
	}
	return datatype;
}

// 添加分隔线
let hrArray = Array(DQL.headers.length).fill('<hr style="padding:0; margin:0 -10px;">');
DQL.values.push(hrArray)
DQL.values.push(sums)

dv.table(DQL.headers, DQL.values)
```
````

结果：

![Pasted image 20240530192412](https://cdn.pkmer.cn/images/202405311801721.png!pkmer)

### 在文档中搜索文字

要在文档中搜索指定的单词，我们首先需要将文件读到内容中，可使用 `dv.io.load()` 方法，然后再通过正则去匹配文本。

````
```dataviewjs
const word = "but"

const regex = new RegExp("(\\S+\\s?){0,2}(\\b"+word+"\\b)(\\s\\S+){0,2}", "gi")
const pages = await Promise.all(
    dv.pages('"30 Dataview Resources"')
    .map(async (page) => {
        const content = await dv.io.load(page.file.path);
        const matches = content.match(regex);
        return {
            link: page.file.link,
            count: ( matches || []).length,
            matches
        };
    })
)

dv.table(
        ["Note", "Count", `Matches for "${word}"`],
            pages
            .filter(p => p.count)
            .sort((a, b) => b.count - a.count)
            .map(p => [p.link, p.count, p.matches])  
    );
```
````

结果：

![Pasted image 20240531110948](https://cdn.pkmer.cn/images/202405311801722.png!pkmer)

上面的正则表达式中 `\b` 用于匹配单词边界（英文句子单词之间以空格分隔），然后最左边的 `(\\S+\\s?){0,2}` 和右边的 `(\\s\\S+){0,2}` 用于匹配目标单词前后的两个相邻单词。基中 `+` 符表示匹配 1 次或多次，`?` 表示匹配 0 次或多次，`\s` 表示匹配一个空白字符（包括空格、制表符、换页符和换行符），`\S` 表示匹配一个非空白符。`dv.io.load()` 方法用于将文件加载到内存中。

### 使用选项卡切换数据

在查询数据时，有的数据不同的状态会有不同的结果，我们可以按状态来进行条件显示。将状态作为选项卡，而其关联的内容作为选项卡内容。

````
```dataviewjs
const createButton = name => {
    const btn = dv.el('button', name)
    btn.addEventListener('click', () => {
        event.preventDefault()
        removeTable()
        renderTable(name)
    })

    return btn
}

const buttons = ['Watching', 'Going to watch', 'Watched all', 'Stopped watching']

const renderTable = name => {
    const pages = dv.pages('"10 Example Data/shows"').where(p => p.status === name)
    dv.header(2, name)
    dv.table(
        ['Title', 'Rating', 'Runtime', 'Seasons', 'Episodes'],
        pages.map(p => {
            let watchedEp = 0
            const totalEp = p.episodes

            p.file.tasks.forEach(t => {
                if (t.checked) {
                    watchedEp++
                }
            })

            return [p.file.link, p.rating, p.runtime, p.seasons, `${watchedEp}/${totalEp}`]
        })
    )
}

const removeTable = () => {
    this.container.lastChild.remove()
    this.container.lastChild.remove()
}

buttons.forEach(button => createButton(button))

renderTable('Watching')
```
````

结果：

![动画](https://cdn.pkmer.cn/images/202405311801723.gif!pkmer)

上面的代码中，我们使用 `dv.el()` 来创建了按钮并添加了事件处理逻辑。在选项卡被选中时，根据选项卡名去过滤查询结果，并将上一次渲染的 HTML 节点移除掉。

进一步，我们还可以实现同一份数据结果以不同的方式渲染：

````
```dataviewjs
const views = ['Table', 'List', 'Tasks']

const changeView = viewName => {
    removeView()

    if (viewName === 'Table') {
        dv.header(2, 'Some table')
        dv.table(['File', 'Day'], dv.pages('"10 Example Data/dailys"').limit(7).map(p => [p.file.link, p.day]))
    }

    if (viewName == 'List') {
        dv.list(dv.pages('"10 Example Data/dailys"').limit(7).file.name)
    }

    if (viewName == 'Tasks') {
        dv.taskList(dv.page("10 Example Data/projects/project_2").file.tasks)
    }
}

const createButtons = () => {
    const buttonContainer = dv.el('div', '', {cls: 'tabButtons'})
    views.forEach(view => {
        const button = dv.el('button', view)

        button.addEventListener('click', event => {
            event.preventDefault()
            changeView(view)
        })

        buttonContainer.append(button)
    })
}

const removeView = () => {
    Array.from(this.container.children).forEach(el => {
        if (!el.classList.contains('tabButtons')) {
            el.remove()
        }
    })
}

createButtons()
```
````

结果：

![动画2](https://cdn.pkmer.cn/images/202405311801724.gif!pkmer)

### 使用不同的表情符来显示时间缀

这个案例我们查询任务计划数据，来获取未完成的任务距离现在过去了多长时间，并对其按时间长度自定义不同的表情符来显示得分。

- 如果月数超过 6 个月，则添加 "🥳" 表情符号。
- 如果剩余的月数（在超过 6 个月后）超过 3 个月，则添加 "🎉" 表情符号。
- 如果剩余的月数（在超过 9 个月后）仍然有剩余，则添加 "🎁" 表情符号。

````
```dataviewjs
const projects = dv.pages('"10 Example Data/projects"')
    .where(p => p.status !== undefined && p.status !== "finished")
    .mutate(p => {
        p.age = p.started && p.started instanceof dv.luxon.DateTime ? dv.luxon.Duration.fromMillis(Date.now() - p.started.toMillis()) : null
        p.emojiAgeScore = getEmojiScore(p)
    })

dv.table(["Score", "Project", "Started", "Age"], projects.map(p => [p.emojiAgeScore, p.file.link, p.started, p.age ? p.age.toFormat("y'年' M'个月' w'周'") : 'N/A']))

function getEmojiScore(p) {
    const age = p.age.shiftTo('months').toObject()
    let score = ""

    score += addEmojis("🥳", age.months / 6)
    score += addEmojis("🎉", (age.months % 6) / 3)
    score += addEmojis("🎁", age.months % 6 % 3)

    return score
}

function addEmojis(emoji, max) {
    let emojis = ""
    for (let i = 0; i < Math.floor(max); i++) emojis += emoji
    return emojis
}
```
````

结果：

![企业微信截图_17170585746313](https://cdn.pkmer.cn/images/202405311801725.png!pkmer)

代码中 `shiftTo('months').toObject()` 函数用于将时间缀转换成类似：`xx个月` 的形式。

关于 Luxon 的使用可以阅读系列文章第 2 篇中 Luxon 章节。

### 将数据渲染成日历

下面这个案例可以好好研究一下如何运用 Luxon 填充每天的数据和构造 HTML 结构。

````
```dataviewjs
const values = dv.pages('"10 Example Data/dailys"').where(p => p.wellbeing?.mood)
const year = 2022
const color = "green"
const emptyColor = "#e4e4e4"
const dt = dv.luxon.DateTime

// 创建日历数据
let date = dt.utc(year)
const calendar = []
S
for (let i = 1; i <= 12; i++) {
    calendar[i] = []
}

// 填充日历数据
while (date.year === year) {
    calendar[date.month].push(getDayEl(date, determineColor(date)))

    date = addOneDay(date);
}

// 渲染日历
calendar.forEach((month, i) => {
    const monthEl = `<span style="display:inline-block;width:30px;font-size:small">${dt.utc(year, i).monthShort}</span>`
    dv.el("div", monthEl + month.reduce((acc, cur) => `${acc} ${cur}`, ""))
})

function addOneDay(date) {
    return dt.fromMillis(date + dv.duration("1d"))
}

function getDayEl(date, color) {
    const sizeOfDays = "12px"
    return `<span style="width:${sizeOfDays};height:${sizeOfDays};border-radius:2px;background-color:${color};display:inline-block;font-size:4pt;" title="${date.toFormat('yyyy-MM-dd')}"></span>`
}

function determineColor(date) {
	const page = values.find(p => p.file.day.startOf('day').equals(date.startOf('day')));
	if (!page) return emptyColor;


	let opacity = (page.wellbeing.mood / 4) ;
	return `rgba(177, 200, 51, ${opacity})`;

}
```
````

结果：

![Pasted image 20240530172043](https://cdn.pkmer.cn/images/202405311801726.png!pkmer)

进一步阅读：[Render a year overview for your data - Dataview Example Vault (s-blu.github.io)](https://s-blu.github.io/obsidian_dataview_example_vault/20%20Dataview%20Queries/Render%20a%20year%20overview%20for%20your%20data/)

### 使用 Chart.js 渲染图表

要在 Obsidian 中渲染图表，我们需要用到 [Obsidian-Charts](https://github.com/phibr0/obsidian-charts) 这个插件。

````
```dataviewjs
let chartType = 'bar'; //bar or line

let xAxis = "xAxis: {type:'time', time: {unit: 'day'}}"; // {type:'category'}";
let yAxis = "yAxis: {suggestedMin: 0, ticks: {stepSize: 1}";

let autoLabels = true; // 自动设置标签
var labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]; // autoLabels 为 false 时，手动设置标签

var colors = [['#ff6384'],['#36a2eb'],['#ffce56'],['#4bc0c0'],['#9966ff'],['#ff9f40']];

let sDQL = '\
	TABLE WITHOUT ID \
		file.name as "Date", \
		wellbeing.mood as "Mood", \
		wellbeing.health as "Health", \
		wellbeing.pain as "Pain" \
	FROM "10 Example Data/dailys" \
	WHERE date(file.name).year = 2022 \
	SORT file.name'
	
let DQL = await dv.tryQuery(sDQL);
var allRows = DQL.values;
var allLabels = allRows.map(r => r[0]);
var allSeries = DQL.headers.slice(1);

if (autoLabels) {
	labels = allLabels;
}

var datasets = [];
for (let i = 0; i < allSeries.length; i++) {	
	let seriesName = allSeries[i];
	let backCol = colors[i%colors.length];
	let bordCol = colors[i%colors.length];
	let bWidth = 1;

	var dataPoints = [];
	if (!autoLabels) {
		dataPoints = labels.map(l => {
			let labelIndex = allLabels.indexOf(l);
			if (labelIndex < 0) { return 0 }
			else { return allRows[labelIndex][i+1] }
		})	
	} else {
		dataPoints = allRows.map(r => r[i+1]);
	}

	let chartDataset = {label: seriesName, 
						data: dataPoints, 
						backgroundColor: backCol,
						borderColor: bordCol, 
						borderWidth: bWidth};
		   
	datasets.push(chartDataset);
}

// 如果我们使用固定的标签数组，请使xAxis基于类别
xAxis = (autoLabels ? xAxis : "xAxis: {type:'category'}");

// chart.js 选项配置
const chartData = {
	type: chartType,
	data: {	
		labels: labels,
		datasets: datasets
	},
	options: {  
		scales: { xAxis, yAxis }
	}
}
window.renderChart(chartData, this.container);
```
````

结果：

![Pasted image 20240530173135](https://cdn.pkmer.cn/images/202405311801728.png!pkmer)

### 使用 Heatmap Calendar 插件显示热力图

这个案例我们来使用插件 [Richardsl/heatmap-calendar-obsidian: An Obsidian plugin for displaying data in a calendar similar to the github activity calendar](https://github.com/Richardsl/heatmap-calendar-obsidian) 渲染一个步数的热力图。

````
```dataviewjs
const calendarData = {
    year: 2022,
    entries: []
}

for (let page of dv.pages('"10 Example Data/dailys"').filter(p => p.steps)) {
    calendarData.entries.push({
        date: page.file.name,
        intensity: page.steps,
        content: await dv.span(`[](${page.file.name})`) // 用于预览
    })
}
renderHeatmapCalendar(this.container, calendarData)
```
````

结果：

![Pasted image 20240531154412](https://cdn.pkmer.cn/images/202405311801729.png!pkmer)

## 总结

由于文章跨度时间较长，自己写得有些麻木了，比较枯燥，随时写作时间的拉长，部分内容就直接贴代码了，望读者理解，自行去研究。

Obsidian 常用的第三方核心插件较多，作者在 Dataview 上花费了较多的时间（一个半月多）。因为其它插件尚未去研究，所以有一定知识局限性，不能从宏观上来更好的提供和其它插件的结合应用，后期争取给大家带更多的插件使用保姆级教程。

文章难免会出现一些文字在描述上不合理，不专业的地方以及错误字，往广大读者指正和提供更好的建议。

最后，动动你发财的小手，关注，点赞一键三连，你的鼓励是我坚持下去的动力。有任何问题欢迎加作者微信（`jenemy_xl`）沟通交流一起成长。

## 参考

- [Dataview Example Vault (s-blu.github.io)](https://s-blu.github.io/obsidian_dataview_example_vault/)
