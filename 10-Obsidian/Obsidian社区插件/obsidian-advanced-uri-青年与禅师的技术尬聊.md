---
uid: 20230329145808
title: obsidian-advanced-uri- 青年与禅师的技术尬聊
description: 
tags: 
author: asureading
type: other
draft: false
editable: false
modified: 20230429181108
---

# obsidian-advanced-uri- 青年与禅师的技术尬聊

青年：大师，不得了了，看我发现了什么！

禅师：说

阿苏迫不及待的打开电脑，双击图标打开了一个软件。

禅师：什么？

青年：这个可以说是世界上最好用的笔记软件，Obsidian。

禅师：哦，用过。

阿苏看到大师电脑里也有 Obsidian，只是界面太素雅了，差点没看出来，不过这也符合大师人淡如菊的品格。

青年：原来大师也用上 Obsidian 了，本来我还想多介绍介绍这款软件的功能的，现在看还是算了

禅师：但说无妨

青年：先说一说神奇的双中括号吧：`[[]]`,在这个双中括号内填写内容，不仅可生成新的文档，还能引用已有文档。

禅师：没用过

青年：这可是 Obsidian 的基础功能，没有它的话，Obsidian 和记事本有啥区别！

禅师：年轻人别着急，老夫先操作一番，你再下结论也不迟。

大师在 Obsidian 界面里输入了一串字符：`[打开emoji文档](obsidian://advanced-uri?vault=testNote&filepath=emoji)`，然后鼠标点击这个链接，果然打开了 emoji 文档。

青年：确实是打开了一个 emoji 文档，和使用双中括号如出一辙，可是，大师的方式相比于使用双中括号显得很啰嗦，不太优雅。

禅师：我说过年轻人不要这么早的下结论，待会你就会看到什么是真正的优雅。

青年：那你就直接告诉我什么是优雅不就得了。

禅师：优雅这个词很抽象，眼见为实吧。举个简单例子，比如你使用双中括号，点击并进入一个文档，文档的默认显示模式是编辑视图，如果想改为阅读视图怎么操作？

青年：这还不简单，点击右上角的视图切换图标即可。

禅师：可是不优雅啊，还多一个点击动作，而我只要在刚才的那串字符后面加个参数 `viewmode=preview` 即可，进入 emoji 文档后即是阅读视图。

具体内容：

```
[以阅读模式打开emoji文档](obsidian://advanced-uri?vault=testNote&filepath=emoji&viewmode=preview)
```

青年：有点意思啊，竟如此简单？

禅师：就如此简单，viewmode 的值不仅可以设置为 preview（阅读视图），还可设置为 live（实时阅览），source（源码视图）。

青年：好神奇啊，大师能解释一下，这一串的字符到底是什么意思？

禅师：这个以 `obsidian://advanced-uri` 开头的字符串有点像浏览器地址栏中的网页地址，比如：`http://www.google.com`,只不过 http 协议换成了 obsidian 协议，可以大胆的肯定，这是应用在 Obsidian 内部的链接。

青年：这个我知道，就像 Obsidian 中的每个文档都有路径一样，通过这个 obsidian 协议的链接都能访问到他们。

禅师：对的，可以在某一文档中，Ctrl+P 打开命令框，输入”复制 Obsidian 链接“，即可得到该文档的 URI 链接，如：

```
obsidian://open?vault=testNote&file=emoji
```

阿苏在 Obsidian 中输入以上链接，点击后并没有打开 emoji 文档。

青年：鼠标点击后，不起作用啊。

禅师：obsidian 协议是 Obsidian 自定义的协议，直接访问这个链接是不起作用的，需要配合 markdown 链接语法才能使用，即：

```
[打开emoji文档](obsidian://open?vault=testNote&file=emoji)
```

青年：这么好的功能，我怎么现在才知道呢？

禅师：瞒不住了，这里没有什么魔法，而是使用了 [obsidian-advanced-uri](https://github.com/Vinzent03/obsidian-advanced-uri) 插件，这个插件就是通过 URI 的方式，实现一种自动化的操作流程。

青年：自动化的操作流程？是不是就像刚刚的例子一样，本来需要两步操作才能实现的效果，通过这个插件就可以一键搞定。

禅师：不错，我很喜欢“一键搞定”这个说法，但是仅凭以阅读视图打开文档还很难有说服力，还需要覆盖到其他的使用流程上去。

青年：等等，刚才你贴出了链接有 `obsidian://open` 和 `obsidian://advanced-uri`，他们都是一个意思吗？

禅师：显然不是，Obsidian 本身是支持 obsidian 协议的，只是 obsidian-advanced-uri 插件在此基础上进行了扩展，为表示是 obsidian-advanced-uri 插件增加的功能，会在 Obsidian 的 URI 链接中带有“advanced-uri”。

青年：我明白了，在之前的例子中的 URI 定义了参数 viewmode 的值是 preview，所以才会在打开文档的同时，根据这个参数改变文档为阅读视图，那么接下来如果对文档有其他的操作，只要再继续添加参数就可以了？

禅师：是的，obsidian-advanced-uri 插件的大部分功能都是通过参数来实现的，比如在之前的例子中：`obsidian://advanced-uri?vault=testNote&filepath=emoji&viewmode=preview`

参数 valut 可以指向 Obsidian 的库，filepath 可以指向库中的文件名。

青年：这下就刺激了，实不相瞒，由于我兴趣广泛，开了不下 10 个 Obsidian 库，这下可以通过指定参数 valut 的值，将这些库链接起来了。

禅师：还是年轻人会玩，我就一个库。

青年：这个插件还有其他玩法吗？

禅师：就拿打开文档来说吧，以上举了以阅读、实时、源码的方式打开文档，其实这里有个问题是忽略掉的，就是从当前文档打开目标文档，那么目标文档是在当前页面打开还是在新页面打开呢？

青年：对哦，如果当前页面以后还要用到，为打开新文档而冲掉当前页面会比较难搞。

禅师：难不难搞，obsidian-advanced-uri 都很好搞，加个参数的事，参数 newpane 值为 true 在新页面打开，参数 newpane 值为 false 在当前页面打开。

```
[在新页面打开emoji文档](obsidian://advanced-uri?vault=testNote&filepath=emoji&newpane=true)

[在当前页面打开emoji文档](obsidian://advanced-uri?vault=testNote&filepath=emoji&newpane=false)
```

青年：我有一个大胆的想法，如果我又想在新页面中打开 emoji 文档，又想让文档的显示模式为阅读视图，是不是继续加参数即可，也就是同时设置 viewmode 值为 preview。

禅师：那就试试呗。

阿苏在 Obsidian 中写下以下内容，点击链接，一气呵成。

```
[以阅读视图在新页面打开emoji文档](obsidian://advanced-uri?vault=testNote&filepath=emoji&newpane=true&viewmode=preview)
```

青年：没想到自己的想法就这么快得到了实现，还真有点激动。

禅师：这才哪到哪呀，这仅仅只是打开文档而已，难道你就不能对文档内容产生点非分之想？

青年：文档内容？难道它还能定位到文档内容不成！

禅师：可以。定位的玩法比较多，可以定位到行（line），定位到标题（heading），定位到块（block），具体写法如下：

```
[打开文件定位到第10行](obsidian://advanced-uri?vault=testNote&filepath=emoji&line=10)

[打开emoji文档定位到标题二](obsidian://advanced-uri?vault=testNote&filepath=emoji&heading=标题二)

[打开emoji文档定位到块](obsidian://advanced-uri?vault=testNote&filepath=emoji&block=20230419)
```

青年：定位到行和标题都可以理解，什么是定位到块。

禅师：块，众所周知，它就是块。省事一点就理解为文档中的一个自然段落，段落嘛，少则一行，多则数十行，也就是我们在纸笔时代摘抄的好词好句，在 Obsidian 里保留一个上下文的引用，也算是技术的进步吧。

青年：可是怎样标识好词好句为块呢？

禅师：只要在段落末尾空一格，打上 `^` 符号，再随便写一串数字即可，这串数字最好是本文档中唯一的标识，就相当于手机号码，在 obsidian-advanced-uri 链接里参数 block 的值指向这个唯一标识即可。

```
我是一个自然段落 ^20230419

obsidian://advanced-uri?vault=testNote&filepath=emoji&block=20230419
```

青年：明白了，这块还挺有意思的。

禅师：年轻人不要止步于此，我们已经打开了文档，定位到文档内容，接下来就要写写东西了。

青年：要不要这么恐怖，这个插件几乎接管了我的整个工作流。

禅师：言重了，通过 obsidian-advanced-uri 插件写入内容，也只能算是一个桥梁，配合其他插件使用效果更佳，这里就不具体展开了。需要具体说一说怎样通过插件写入内容，按照惯例，写入内容还是通过参数 data 实现的，参数 data 的值就是要写入的内容，只是默认情况下，只对新创建的文档写入，已经存在的文档是不会写入的。

点击以下链接是不会对 emoji 文档写入“20230419”的。

```
[只对新文档写入](obsidian://advanced-uri?vault=testNote&filepath=emoji&data=20230419)
```

青年：这是个 bug 啊，还能不能改正？

禅师：你忘了我们的绝招了，加参数啊，加参数 mode，设置值为 overwrite，就可以实现无论文档存不存在都会写入。

```
[无论文档存不存在都写入](obsidian://advanced-uri?vault=testNote&filepath=emoji&data=20230419&mode=overwrite)
```

青年：我试了一下，确实如你所说，无论文档存不存在都会写入，但是很遗憾的是之前内容没有了，只有新写入的“20230419”。

禅师：哦！我的失误，参数 mode 还有其他取值，append（在文档尾部追加内容），prepend（在文档首部追加内容），overwrite（覆盖原文），new（新建文件添加内容）。

青年：参数 mode 的值为 new，还是比较新奇的，它在用法上有什么需要注意的吗？

禅师：当 mode 取值 new 时，无论目标文档存不存在，都必然要创建一个新文档，并添加内容。这也可以理解，万一添加的内容有问题，污染了旧文档就得不偿失了。

```
[新建文档](obsidian://advanced-uri?vault=testNote&filepath=emoji&data=222&mode=new)
```

青年：只要点击这个带有参数 mode 值为 new 的链接就创建一个新文档，那么怎样给新文档取名呢？

禅师：如果文档不存在，新文档的名字就是参数 filepath 的值，如果文件存在，则新建文件，文件名会带有一个从 1 开始的递增数字，即文档名=参数 filepath 的值 + 递增数字。

青年：我仿佛悟到了，是否可以从第三方软件跳转到 Obsidian，并将内容添加到文档？

禅师：理论是可以的，具体的还需要动手实践一下。这里先埋个坑，以后可以深入探讨一下。

青年：这种方式添加内容，好是好，可是每次还要特地修改 data 的值，有没有更通用的方法添加内容？

禅师：当然有啊，加个参数呗。参数 clipboard 可以决定是否将剪切板内容添加到文档，clipboard 取值为 true，则可以把剪切板内容添加到 Obsidian 文档中。clipboard 取值为 false，则无法把剪切板内容添加到 Obsidian 文档中，最后还要注意的是，记得将参数 mode 的值改为 append 哦，别问我为啥，大家都是这么做的。

```
[将剪切板内容追加到文档](obsidian://advanced-uri?vault=testNote&filepath=emoji&clipboard=true&mode=append)
```

青年：大师，我又有了一个新的想法，既然使用插件可以打开 Obsidian 文档，并添加内容，那么也就无关文档的类型了。

禅师：有话直说。

青年：我的意思是是否可以一键打开日志文档，并添加内容？

禅师：还真被你猜中了，加个参数呗，参数 daily 可决定是否打开日志，true 可打开日志，false 则无法打开日志，甚至再加上参数 clipboard 和 mode，就可以一键将剪切板内容添加到日志了。

```
[打开当天日记](obsidian://advanced-uri?vault=testNote&daily=true)

[追加到日志](obsidian://advanced-uri?vault=testNote&daily=true&data=222&mode=append)

[将剪切板内容追加到日志](obsidian://advanced-uri?vault=testNote&daily=true&clipboard=true&mode=append)
```

青年：太棒了，复制粘贴我的强项，我感觉这个插件越来越适合我了，优雅！

禅师：Obsidian 中的命令就很优雅啊，Obsidian 提供了很多功能，这些功能通过命令的方式，可以让我们更方便的编辑文档，因此可以通过 Ctrl+P 打开命令面板，搜索并使用这些命令，万能的 obsidian-advanced-uri 插件也可以直接调用命令。加个参数就可以了。

```
[在emoji文档中调用‘代码块’命令](obsidian://advanced-uri?vault=testNote&filepath=emoji1&commandname=代码块&mode=append)
```

青年：话是这么说，虽然可以使用参数 commandname 指定命令的名称，一键调用命令，节省了按键 Ctrl+P、搜索、点击命令等一系列的操作，但是 Obsidian 的命令实在太多了，在使用的时候，反而不如搜索来的方便。

禅师：这要看具体使用场景了，如果一个命令反复使用，建议使用 advanced-uri 的方式，如果只是偶然使用一下还是老老实实的 Ctrl+P 吧。

青年：这下就清晰多了，有些命令是针对文档编辑的，在以上的例子中使用 mode 参数，我想应该是让命令作用到编辑光标的位置吧。

禅师：是的，我们之前讨论的定位问题所涉及的参数，都可以应用在此处，当然参数 mode 也不是必须的，比如“导出为 PDF”，就无须使用 mode 了。

阿苏迫不及待的操作一番，却发现如下的命令不起作用。

```
[调用命令将emoji导出为PDF](obsidian://advanced-uri?vault=testNote&filepath=emoji&commandname=导出为 PDF)
```

青年：点击这个链接之后，只跳转到了 emoji 文档，并没有执行“导出为 PDF”的命令。

禅师：哈哈，这就尴尬了。使用参数 commandname 的风险就在这里，如果命令名称使用中文、空格等，需要进行编码转换，将以上链接中的“导出为 PDF”编码转换的结果如下：

```
[调用命令将emoji导出为PDF（编码转换）](obsidian://advanced-uri?vault=testNote&filepath=emoji&commandname=%E5%AF%BC%E5%87%BA%E4%B8%BA%20PDF)
```

青年：我好像只认识 PDF，其他带百分号的字符真心记不住，好好的文字不用，为什么要编码转换啊，难道是为了安全保密？

禅师：不至于，因为 URI 是标识资源的字符串，为了能在不同地区都能使用，必须使用统一的字符来表示，也就是 ASCII 字符集，比较不凑巧的是 ASCII 字符集里只有 128 个字符，英文大小写字母数字是有的，可惜无法承载我们博大精深的汉字，因此，需要将汉字编码转换为 ASCII 字符集里的字符才可以，比如“导出为 ”转换成 ASCII 字符为：“%E5%AF%BC%E5%87%BA%E4%B8%BA%20”。

青年：原理我是明白了，可是我在使用的时候，并不会肉眼编码转化啊！

禅师：可以使用 [编码转换网站](https://www.urlencoder.io/) 转换一下命令名称，可是这样做也很麻烦，考虑到 commandname 的不靠谱，我们通常在调用命令时使用编码转换后的 commandid 而非 commandname。

青年：这我就糊涂了，我使用快捷键 Ctrl+P 打开命令面板，看到的都是 commandname，并没有发现 commandid 的身影啊？

禅师：聪明的 obsidian-advanced-uri 插件也想到了这个问题，所以才使用一些补救措施获取 commandid。

青年：大师你就一句话说到底吧。

禅师：这么说吧，你在一开始看到 obsidian-advanced-uri 插件的时候，是不是感觉很啰嗦，实际上确实很啰嗦，比如打开文档就不如 Obsidian 的双中括号简洁优雅，本身为优雅而生的 obsidian-advanced-uri 插件不可能忽视这个问题，因此，它的补救措施就是提供了几条命令，一键生成 URI 链接，在这个生成的 URI 链接中，完全可以将编码转换的问题一并解决。

青年：这么说我通过 Ctrl+P 也可以搜到这些命令？

禅师：搜索关键词：Advanced URI，即可显示 obsidian-advanced-uri 插件自带的一些命令：

![Pasted image 20230420123946](Resource/Images/7198bbfef3528682c32d45d8fee4ab3e_MD5.png)

青年：我看到了第一条命令：“copy URI for command”，是否就可以一键得到 URI？

禅师：点击第一条命令“copy URI for command”，会弹出第二面板，输入框提示“Select a file to be opened before executing the command”，在执行命令前选择一个文档，这也就对应 Advanced-URI 中的参数 filepath 的值。我们选择 emoji 文档。

![Pasted image 20230420124637](Resource/Images/40e1aaa975bd6ade3e1f7637c8866a40_MD5.png)

然后弹出第三个面板，这个面板就是我们使用 Ctrl+P 调出的命令面板，在命令面板中输入“导出为 PDF”，点击搜索出的命令。

![Pasted image 20230420124810](Resource/Images/b48d875ecbb26b6c827938d262f1df7e_MD5.png)

这时会有一个弹出框提醒 URI 已经复制进剪切板了：Advanced URI copied to your clipboard，接下来我们使用这个 URI，粘贴在文档中的内容如下：

```
obsidian://advanced-uri?vault=testNote&commandid=workspace%253Aexport-pdf&uid=9d53b498-c1bd-4295-844e-1555764b9cbd
```

加上 markdown 语法即可使用了

```
[copy URI for 导出为PDF](obsidian://advanced-uri?vault=testNote&commandid=workspace%253Aexport-pdf&uid=9d53b498-c1bd-4295-844e-1555764b9cbd)
```

青年：这个过程操作起来很丝滑，先找到 Advanced URI 的命令，然后选中目标文档，最后选一个 Obsidian 的命令，就这样点点点，这串复杂的 URI 就生成了，粘贴使用就行了。

禅师：总结的不错，从这个 Advanced URI 中可以看出，参数 commandid 的值会自动填充，尽管也需要编码转换，但是完全不需要我们亲自动手。

青年：确实比较方便，在这个 Advanced URI 中有个参数是 uid，能具体说一说这个参数的作用吗？

禅师：uid 实际上 Obsidian 中唯一标识一个文档的一串字符串，可以理解为文档的身份证号码。

青年：文档有文档名和路径，有必要再用 uid 标识它吗？

禅师：在之前的 Advanced URI 链接中，我们使用参数 filepath 指向文档名，即可对这个目标文档进行操作，这个过程是单向，是从 Advanced URI 链接指向文档的，反过来，如果文档名发生了变化，Advanced URI 链接是无法感知的，这样我们原来的 Advanced URI 链接指向了并不存在的文档，链接就失去了原来的意义。

青年：这个问题 Obsidian 的解决方法很优雅，使用双中括号链接文档，文档名发生了变化，可同步到双中括号中，始终保持链接的有效性和正确性。

禅师：这就是双链啊，obsidian-advanced-uri 插件显然还做不到这一点，索性退而求其次，使用 uid 额外标识文档，这样无论文档名怎样变化，都能有效又正确的链接到它。

青年：这个 uid 需要手写吗？

禅师：uid 可以手写，需要在 frontmatter 里以 key-value 的形式写出来，key 可以写 uid，value 可以写随机字符串，最后通过 Advanced URI 链接这个带有 uid 的文档即可，例如：

```
---
uid: 1111
---

[使用uid访问文档](obsidian://advanced-uri?vault=testNote&uid=1111)
```

阿苏：可是不行啊，我按以上内容书写，并不能成功跳转到 frontmatter 里 uid 为 1111 的文档！

禅师：不可能啊，在我的电脑上好好的。

大师在阿苏的电脑上一顿操作猛如虎，最后在 obsidian-advanced-uri 插件的设置选项里发现了问题的根源，原来 obsidian-advanced-uri 插件默认在 frontmatter 里将 uid 设置为 id，并且打开“Use UID instead of file paths”。

![Pasted image 20230420155119](Resource/Images/bdc88305e7d1bdd212beed52e6e1da3b_MD5.png)

阿苏将 frontmatter 里的 uid 改为 id，链接就可以成功跳转了。

```
---
id: 1111
---

[使用uid访问文档](obsidian://advanced-uri?vault=testNote&uid=1111)
```

青年：原来 frontmatter 里的 uid 命名要和 obsidian-advanced-uri 插件里的 uid 命名保持一致啊，这谁又能想的到呢？

禅师：所以还是老老实实的通过 obsidian-advanced-uri 的命令自动获取 uid 吧，它会自动保持 uid 命名的一致，快捷又方便。

青年：如果一篇文档已经正确的设置了 uid，那么通过 Advanced URI 跳转会不会冲掉原来的 uid。

禅师：不会，对于已经正确设置 uid 的文档，在进行 Advanced URI 跳转的时候会按文档中的 uid 跳转。如果文档中没有设置 uid 或者设置错误，Advanced URI 在跳转的时候，会随机分配一个 uid 添加到文档的 frontmatter 中。

青年：既然说到了 obsidian-advanced-uri 的命令，那就说一说这个插件的其他命令吧。

禅师：命令“copy URI for daily note”和“copy URI for current file”没什么好说的，一个是一键获取今日日记的链接，一个是获得当前文档的链接，结果如下：

```
[打开今日日记](obsidian://advanced-uri?vault=testNote&daily=true&mode=prepend)

[打开当前文档](obsidian://advanced-uri?vault=testNote&uid=587e5c6c-6cfc-43eb-b85d-8d26e30091a3)
```

青年：我注意到打开今日日记的 Advanced URI 里还贴心的加上了 mode 参数。

禅师：这个 mode 选项是在选择命令的时候是可选择的，如图所示，我们可以选择直接打开，也可以选择 append 方式或者 prepend 方式，更重要的是还可以在开始的输入框内输入需要添加的内容。

![Pasted image 20230420164515](https://cdn.pkmer.cn/images/ff9fd15169c469598f37feaea83a743e_MD5.png)

青年：这种可视化的 Advanced URI 书写方式太贴心了，我注意到命令“copy URI for file with options”是不是也是可以像这样既能输入内容又能选择编辑位置？

禅师：是的，命令“copy URI for file with options”和“copy URI for daily note”功能是一样的，区别是一个可以选择任意文档，另一个只能对今日日记进行操作。

青年：命令“copy URI for search and replace”，我猜应该是查找内容和替换吧。

禅师：是的，Advanced URI 有的参数是成对出现的，比如 search 和 replace，具体用法就是指定一个目标文档，通过参数 search 查找内容，同时将查找到的内容替换为参数 replace 的值，如果需要查找一些复杂的内容，可使用参数 searchregex 填写正则表达式。为了防止这种成对出现的参数遗漏，就提供了命令“copy URI for search and replace”，直观的进行目标文档的选择，查找内容的填写和替换内容的填写。

青年：obsidian-advanced-uri 插件真的是无所不能啊，应该就这些内容了吧。

禅师：还有一块内容没说呢：Obsidian 的设置

青年：难道 obsidian-advanced-uri 插件对 Obsidian 的设置进行操作吗？

禅师：没你想象的那么复杂，它也只是加个参数 settingid 就可以打开 Obsidian 的设置页面了

```
[打开设置](obsidian://advanced-uri?vault=testNote&settingid=editor)
```

青年：settingid 是不是像之前的 commandid 和 uid 一样，可以指向设置中的设置项，同时可自动获得他们的值。

禅师：不好意思，settingid 的值只能自己手动填写，以下是设置项对应的 settingid：

| id                | 含义          |
| ----------------- | ------------- |
| editor            | 编辑器        |
| file              | 文件及链接    |
| appearance        | 外观          |
| hotkeys           | 快捷键        |
| about             | 关于          |
| account           | 账户          |
| core-plugins      | 核心插件      |
| community-plugins | 第三方插件    |
| theme-browser | 主题浏览 |
| plugin-browser    | 插件浏览      |
| note-composer | 笔记重组 |
| backlink | 反链 |
| switcher | 快速切换 |
| command-palette | 命令面板 |
| daily-notes | 日记 |
| file-recovery | 文件恢复 |
| page-preview | 页面预览 |

青年：在设置页面中也有我们安装的第三方插件，可以通过 settingid 为 community-plugins 获得所有的第三方插件，如果我想打开某一插件的配置项，该怎样操作？

禅师：很简单啊，在这个第三方插件的 manifest.json 文件，在文件内容是 json 格式，找到 key 为 id 的值，就是这个插件的 settingid，复制下来，粘贴到 Advanced URI 里即可：

```
[打开obsidian-advanced-uri插件设置项](obsidian://advanced-uri?vault=testNote&settingid=obsidian-advanced-uri)
```

青年：我还是感觉这个 settingid 的用处不是太大，关键是获取或记忆 settingid 也不是很方便。

大师并没有说话，只是把电脑合了起来，看向远方若有所思。

青年：我明白了，大师是想让我合上电脑多背几遍就记住了？

禅师：不，天不早了，你该走了。
