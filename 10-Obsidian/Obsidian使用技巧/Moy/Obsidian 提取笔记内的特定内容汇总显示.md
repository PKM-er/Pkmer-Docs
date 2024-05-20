[作者::Moy]

本文的效果预览：
![[发布内容-img-240521_010219.gif]]

## 开篇
当我在学习一个新的事物的时候，我会一边看资料，一边记笔记。
记笔记的过程中，可能会冒出来一些新的想法，或者是有暂时不太明白、留着之后再深入研究的要点。

这种时候，我就会先打个标记，例如：
> 💡 这个方法可以应用在 XX 领域

或者：
> ❗ 不明白 OO 的含义，回头再了解一下

而当我完成初步的学习，我会希望把这些“关键内容”摘取出来，方便我快速查看。


怎么办呢——

手动一个个复制粘贴？可以，但太过低效 ~~也不优雅~~ 。

在 Obsidian 里，我们可以使用 `Dataview` 插件来实现想要的效果。

![[发布内容-img-240520_235302.png|将笔记内的标记内容汇总显示]]

它可以自动将含有关键字的内容显示在一起，并且支持跟随笔记内容更新。


## 实现方法
首先，你需要安装 Dataview 插件。
这在 OB 用户里算是常识了，这里略过。

> 有需要的话可以查看咖啡的基础教程：[Dataview | obsidian文档咖啡豆版](https://coffeetea.top/zh/community-plugins/dataview.html#%E6%8F%92%E4%BB%B6%E5%AE%89%E8%A3%85)

安装完之后，复制下面的代码到你的笔记里：

↓ 从这里开始

[term::💡]
```dataviewjs
const term = await dv.current().term;
const curFile = await dv.current().file;

if (curFile) {
  const curFilePath = curFile.path;
  const curTFile = await app.vault.getFileByPath(curFilePath);
  const content = await app.vault.cachedRead(curTFile);
  const lines = content.split("\n").filter(line => line.contains(term)).filter(line => !line.contains("term"))
  dv.paragraph(`> 包含 [${term}] 的行：`);
  dv.list(lines.flat())
} else {
  dv.paragraph(`正在获取含${term}的行`);
}
```

↑ 到这里结束

walla！这样就完成了。

实际使用时，只需把「💡」改成自己想要查询的字符——可以是 Emoji，也可以是特定的文本——下面的 dv 模块就会把**当前笔记**中含有该内容的文字都显示在一起。

例如，修改成❗就会提取出所有包含❗的文本，修改成「注意」就会提取出所有包含「注意」的文本。

只需要使用的话，看到这里就可以了，祝你用得愉快！

## 原理解析
如果你好奇这段文本的原理，接下来的内容是为你准备的。

它使用了 Dataview 插件的两个特性：
- Inline Field 内联属性
- DataviewJS  代码

### 内联属性
内联属性是像 `key::value`  这样格式的文本，写在笔记的任意一个位置就相当于给这个笔记添加了一条属性。
例如写上 `姓名::张三` ，就相当于给这个笔记设置了一个「姓名」属性，对应的值是「张三」。

内联属性中间是**两个英文的冒号**，双冒号左边代表属性名称，右边代表属性的值。

如果两边加上英文圆括号，就会只显示值；如果两边加上英文中括号，就会渲染成好看的样式。在加上括号的情况下，一行里可以写多个值。
![[发布内容-img-240521_000316.png|不同的写法对应的渲染效果]]

### DataviewJS
Dataview JS 是使用 Javascript 语言写的一段脚本，Dataview 插件会解析这段脚本的内容并渲染出来。

注意，你需要在 Dataview 插件的设置中启用 Enable JavaScript Queries 属性才能应用 dvjs 脚本：

![[发布内容-img-240521_000721.png]]

事实上，写在 `dataviewjs` 代码块里的任何内容都会被作为 js 脚本执行，所以可以写一些相当复杂的功能。

具体的 JS 语言我们这里就不深入了，只简单了解一下 Dvjs 相关的语法：

```js
const term = await dv.current().term;
const curFile = await dv.current().file;
```

这里我们用 `dv.current()` 获取了当前的文件。
如果你在笔记里粘贴这段内容：

```dataviewjs
// 使用 console.log 打印当前笔记的信息
console.log(dv.current())
```

然后按 <kbd>Ctrl+Shfit+I</kbd> 显示开发者工具，你就能看到「当前文件」包含了哪些内容：
![[发布内容-img-240521_001145.png]]

在这里就能看到，`term: "💡"` 的这个属性已经被放进文件内了。
所以我们用 `await dv.current().term` 就能获取到我们写在 term 属性里的文本内容。

后面的代码是 JS 脚本的内容，这里就不深入了，前端开发长路漫漫，最好别踏上这条不归路。
![[哈人.png]]

总之，大致上这段代码就是获取了当前笔记的所有文本内容，拆成一行行，然后看「这行里包含关键字吗？包含，那就塞进列表里」。
最后用 `dv.list()` 把列表里的每个句子都作为列表显示出来，完事儿。


## 更进一步
因为我可能有很多笔记都需要用到这个功能，每次都复制粘贴一大段代码太麻烦了，怎么办呢？

### 脚本复用
首先，Dataview 提供了一个 `dv.view()` 的功能，可以**加载特定的 js 文件**。
所以我选择把上面的内容写进一个单独的 js 文件，然后在 dvjs 里仅仅是传入参数、依靠加载外部脚本来获取结果。

这样的好处是，只要我修改 js 文件，所有用到这段代码的地方都会一起更新。
而且放在单独的文件里也能写多点内容，丰富一下功能。

使用单独脚本的时候，dvjs 这样写一行就够：
```dataviewjs
await dv.view("queryTermInFile", {term: dv.current().term})
```

与此同时，你需要在 OB 库里创建一个叫做 `queryTermInFile.js` 的文件，粘贴这些内容：

```js title="queryTermInFiles.js"
console.log("🔍 Querying...");

class Query {
    /**
     * 用来查询的类
     * @param {string} _term 需要查询的关键字
     * @param {boolean} _bShowInfo 是否显示第一行的查询信息
     * @param {string} _info 查询信息的内容
     * @param {boolean} _bShowLink 是否显示跳转链接
     * @param {string[]} _excludeTerms 需要排除的关键字
     */
    constructor(_term, _bShowInfo=false, _info="", _bShowLink=true, _excludeTerms=[]) {
        this.term = (_term == "加粗") ? "**" : _term;
        this.bShowInfo = _bShowInfo;
        this.info = _info;

        this.bShowLink = _bShowLink;
        this.excludeTerms = _excludeTerms;

        // 链接的图标
        this.linkIcon = "»";
        // 链接的字号
        this.fontSize = "1em";
    }

    /**
     * 获取并输出最终的显示结果
     * @returns {string} 返回最终的显示结果
     */
    async GetResult() {
        const term = this.term;

        const curFile = await dv.current().file;
        const curFilePath = curFile.path;
        const curFileName = curFile.name;
        const curTFile = await app.vault.getFileByPath(curFilePath);

        if (curTFile) {
            const encodedName = encodeURIComponent(curFileName);
            const linkPrefix = ` <a style="font-size: ${this.fontSize}" title="跳转到对应行" href="obsidian://advanced-uri?vault=Obsinote&filename=${encodedName}&line=`;
            const linkSuffix = `">${this.linkIcon}</a>`;
            const content = await app.vault.cachedRead(curTFile);

            const lines = content.split("\n")
                .map((line, index) => {
                    let content = line.trim();

                    // 处理原先的列表符号，避免多层嵌套
                    if (content.startsWith("- ") || content.startsWith("* ") || content.startsWith("+ ") ) {
                        content = content.substring(2);
                    }

                    // 处理掉加粗内容
                    // content = content.replace(/\*\*(.*?)\*\*/g, "$1");

                    // 添加跳转链接
                    const jumpLink = `${linkPrefix}${index+1}${linkSuffix}`;
                    return content + (this.bShowLink ? `${jumpLink}` : "");
                })
                .filter(line => line.contains(term) && !this.excludeTerms.some(f => line.contains(f)))
                .filter(line => !line.contains("dv.view") && !line.contains("term") );
                
            if (this.bShowInfo) {
                if (this.info){
                    dv.paragraph(`> ${this.info}：`);
                } else {
                    dv.paragraph(`> 包含 [${term}] 的行：`);
                }
            }

            if (lines.length) {
                dv.list(lines.flat())
            } else {
                dv.paragraph(`- 没有找到含 [${term}] 的行`);
            }
        } else {
            dv.paragraph(`正在获取含 [${term}] 的行...`);
        }
    }
}

let query = new Query(_term=input.term, input.bShowInfo, input.info, input.bShowLink, input.excludeTerms);
query.GetResult();

```

这次的 JS 代码很长，不用看，闭着眼睛粘贴进去就行了。

### 拓展功能
如你所见，dvjs 的版本多了一些东西，这里也说明一下。

你可以把 dvjs 拓展成这样带有多个参数的代码块：
````
```dataviewjs
await dv.view(
  "queryTermInFile",
{
  term: dv.current().term, 
  bShowInfo: true,
  bShowLink: true,
  info: "灵感摘要",
  excludeTerms: []
})
```
````

最基本的结构是这样：
```
await dv.view("js文件", {属性: 值})
```

我们的脚本叫做 queryTermInFile，所以第一个地方填写 js 文件的名字，让 dvjs 知道要去调用这个脚本。
第二个地方相当于是一些附加的参数，用来定制渲染的内容。

- term：和原先一样，获取当前笔记的 `term` 属性作为搜索的关键字
- bShowInfo：是否显示第一行的信息，默认 `true` 是显示，改成 `false` 可以隐藏
- info：第一行的信息，可以自定义
- bShowLink：是否显示跳转到文本的链接，改成 `false` 可以隐藏
- excludeTerms：一个列表，用来排除特定的关键字；比如说，我要排除包含“测试”和“取消”的行，这里就写成 `excludeTerms: ["测试", "取消"]` 

可以注意到，独立脚本版的每行后面带上了一个符号：
![[发布内容-img-240521_002811.png]]
点击就可以跳转到这行所在的位置，方便进行查看或者编辑。

如果不需要的话，修改 `bShowLink: false` 就可以隐藏。

另外，因为 js 单独脚本空间比较大，所以这个版本还可以避免列表项目重复（比如文本本身就是列表，渲染出来变成套了两层的列表）。

以及，如果你喜欢用 **加粗** 文本或者 ==高亮== 文本在笔记里划重点的话，脚本额外提供了两个属性值用来提取这类内容。  
- [term::加粗] 可以提取出所有带有加粗文本的内容；
- [term::高亮] 可以提取出所有带有高亮文本的内容；

这俩符号因为本身会带有渲染，所以提供了关键字的替换。

### 模板插入
解释完了参数，该解决怎么快速插入的问题了。

如果你 `await dv.view("queryTermInFile", {term: dv.current().term})` 也懒得自己输入的话，可以使用 Templater 插件，创建一个模板文件：
````txt title:模板文件的内容
[term::] [info::]
```dataviewjs
await dv.view(
"queryTermInFile", 
{
term: dv.current().term,
bShowInfo: true,
bShowLink: false,
info: dv.current().info,
excludeTerms: []
})
```
````

然后在需要检索的时候直接插入这个模板，并修改检索的关键字即可。

> Templater 插件也是 OB 用户基操了，这里不再介绍，有需要了解可以看咖啡的文档：[Templater | obsidian文档咖啡豆版](https://coffeetea.top/zh/community-plugins/templater.html)

## 总结
这篇文章除了分享一个技巧——这个技巧我之前专门琢磨了一段时间，还请了大佬帮忙写范例脚本才实现——之外，也是想有实例地讲解 Dataview 的用法和原理，希望可以帮助到大家举一反三，实现更多的想法。

最后还是要说一句：这些「术」是辅助用的，重要的还是「道」：即你自己的内容、想法、记录——这些才是核心。

==多写，多思考。==

