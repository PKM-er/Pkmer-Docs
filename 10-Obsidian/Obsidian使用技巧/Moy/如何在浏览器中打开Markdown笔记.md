---
uid: 20240523231209
title: 如何在浏览器中打开 Markdown 笔记
tags: []
description: 本文介绍了在浏览器中查看 Obsidian 笔记的方法，以及这样带来的好处。
author: Moy
type: tutorial
draft: false
editable: false
modified: 20240523231930
---

# 如何在浏览器中打开 Markdown 笔记

> 本文灵感来自 @Calmwaves 和 @熊猫别熬夜 ，特此感谢！

### 为什么？

在你看到标题的时候，我猜你第一个想法就是——为什么？

**为什么要在浏览器里打开 markdown 笔记？**

有几个原因，但最核心的理由就是：==为了能够发挥浏览器的独特优势==。

举几个例子吧~

![](https://cdn.pkmer.cn/images/202405212229366.png!pkmer)

你可以用 Edge 自带的「大声朗读」功能收听你的笔记：

![[如何在浏览器中打开Markdown笔记-img-240523_223624.png]]

> Calmwaves 专门写过一篇文章介绍：[PKMer_文字转语音朗读你的笔记](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7/%E6%96%87%E5%AD%97%E8%BD%AC%E8%AF%AD%E9%9F%B3%E6%9C%97%E8%AF%BB%E4%BD%A0%E7%9A%84%E7%AC%94%E8%AE%B0/)

你也可以用 SingleFile [^1] 拓展将笔记导出成一个单独的 Html 文档，快速分享给别人。

![[如何在浏览器中打开Markdown笔记-img-240523_223919.png]]

*SingleFile 拓展会将所有图片以 Base64 编码嵌入网页，不用担心图片丢失或者需要单独打包的问题*

如果是英文文档——你还可以调用 沉浸式翻译 [^2] 将它一键变成双语文档：

![[如何在浏览器中打开Markdown笔记-img-240523_224217.png]]

甚至，你可以借助 Elmo[^3] 拓展，免费使用 AI 汇总这篇笔记的要点，并进行问答：

![[如何在浏览器中打开Markdown笔记-img-240523_225114.png]]

虽然我们都知道 Obsidian 里有 *一万种方法* [^4] 可以让 AI 和你的笔记交互，但是何妨再多一种呢？ ; )

总而言之，只要能在浏览器中像网页一样打开你的笔记，你就可以充分利用各种浏览器拓展的功能。

## 怎么弄？

为了实现这个目的，我们可以借助一个 Obsidian 插件：Html Server[^5]

安装完插件后，左侧边栏会出现一个按钮：

![[如何在浏览器中打开Markdown笔记-img-240523_224456.png]]

点击即可启动服务器。

然后，在你的浏览器中输入：

`http://localhost:8080/[笔记名称]`

就能在浏览器中查看你的笔记了！

而且插件会调用你的主题外观，让它在网页上看起来的效果和 Obsidian 内几乎完全一致。

### 插件设置

#### 自启动

如果你不想每次都手动启动服务器，可以勾选插件设置里的 **Start Server automatically**。

这样插件启动的时候会自动启动。

![[如何在浏览器中打开Markdown笔记-img-240523_224437.png]]

#### 修改端口

另外，插件默认的端口是 `8080`，如果冲突了你也可以在 `Listening Port` 里改成别的数字。

改完之后，用新的 `http://localhost:[端口号]/[笔记名称]` 就可以了。

### 再偷懒点

#### 使用 TP 脚本一键打开当前笔记

虽然这个插件本身很方便，但是每次都要重复**输入网址 + 填写当前笔记**的这个流程也太——麻烦了——

这么笨蛋的重复不应该是 Obsidian 用户需要忍受的事儿！

所以，我写了一个 Templater 脚本来简化这个操作。

首先，创建一个 TP 模板笔记，填入：

```
<%*
const title = tp.config.target_file.basename;
const hs = app.plugins.getPlugin("html-server");

if (!hs) {
console.log("[TP] 未能找到 HTML Server 插件");
} {
  const port = hs.settings.port;
  let url = `http://127.0.0.1:${port}/${title}`;

  let bOpen = true;
  //bOpen = await tp.system.prompt("是否确认打开？", "Yes");
  
  if (bOpen) {
    new Notice("Open "+url);
    window.open(url, '_blank');
  }
}

%>
```

然后在 Templater 插件的设置里将这个模板添加成命令（Command）：

![[如何在浏览器中打开Markdown笔记-img-240523_225955.png]]

最后——你可以选择给它分配一个快捷键：

![[如何在浏览器中打开Markdown笔记-img-240523_230033.png]]

或者——用 Commander 插件直接把它添加成一个按钮：

![[如何在浏览器中打开Markdown笔记-img-240523_230110.png]]

这样就能一键在浏览器中打开当前笔记了，快试试看吧！

![[如何在浏览器中打开Markdown笔记-img-240523_230211.gif]]

#### QuickAdd 版本的脚本

> 该内容由 @熊猫别熬夜 大佬提供

```js
const filePath = app.workspace.getActiveFile().path;
const hs = app.plugins.getPlugin("html-server");
if (!hs) {
  console.log("🟠未能找到 HTML Server 插件");
} else {
  const port = hs.settings.port;
  let url = `http://127.0.0.1:${port}/${filePath}`;
  new Notice("Open 🌐" + url);
  window.open(url, '_blank');
}
```

![[在浏览器中查看Markdown文件的方法-img-240523_222425.jpg]]

## 总结

多说一句：==「能轻易做到这种听起来很奇怪的事儿」==——正是我喜欢 Obsidian 的理由。

**开放性** 就意味着海纳百川，OB 能做到的事情，交给它来做；OB 做不到的事情，就让其他软件来一起协作。

这是封闭生态的软件所难以企及的。

（等下，好像 Notion 笔记在网页端打开*本身*就是一个 HTML 页面，可以做到上面所说的所有事情……啊哈哈，那也夸夸 Notion！）

以上，这就是本次小编 Moy 关于”如何在浏览器中打开 Markdown 文件“的分享啦，希望对你有帮助！

[^1]: SingleFile 拓展：[SingleFile](https://chromewebstore.google.com/detail/singlefile/mpiodijhokgodhhofbcjdecpffjipkle)
[^2]: 沉浸式翻译 拓展：[沉浸式翻译 - 网页翻译插件 | PDF翻译 | 免费](https://chromewebstore.google.com/detail/%E6%B2%89%E6%B5%B8%E5%BC%8F%E7%BF%BB%E8%AF%91-%E7%BD%91%E9%A1%B5%E7%BF%BB%E8%AF%91%E6%8F%92%E4%BB%B6-pdf%E7%BF%BB%E8%AF%91-%E5%85%8D%E8%B4%B9/bpoadfkcbjbfhfodiogcnhhhpibjhbnh?hl=zh-CN)
[^3]: Elmo 拓展：[Elmo Chat - Your AI Web Copilot](https://chromewebstore.google.com/detail/elmo-chat-your-ai-web-cop/ipnlcfhfdicbfbchfoihipknbaeenenm)
[^4]: 包括但不限于各种酩子里带有 AI 的 Obsidian 插件，以及 RAG 本地知识库等……当然，一万种是虚指，你懂的。
[^5]: HTML Server 插件：[Pr0dt0s/obsidian-html-server](https://github.com/Pr0dt0s/obsidian-html-server)