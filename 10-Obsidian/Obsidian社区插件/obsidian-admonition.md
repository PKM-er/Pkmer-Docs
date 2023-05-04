---
uid: 20230504102443
title: obsidian-admonition
description: 
author: cuman
type: other
draft: false
editable: false
modified: 20230504110053
---

# obsidian-admonition

> [!Note] 插件名片
> - 插件名称：Admonition
> - 插件作者：Jeremy Valentine
> - 插件说明：Obsidian 的块样式，你可以自己定义各种增强块样式，比如警告，笔记，提醒等
> - 插件项目地址：[点我访问](https://github.com/valentine195/obsidian-admonition)

由于 Obsidian 0.14 版本内置了 callout 功能，admontion 插件 9(简称 AD 插件) 9.0 以后已经演变成了 callout 辅助工具，所以只要是 callout 支持的类型，或者自定义的 callout 类型，ad 写法也是支持的。虽然 ad 的功能一定程度上被替代，但在某些功能特性上仍然有不可替代的作用。

## 效果&特性

Ad 插件最大的便利就是通过代码块包裹就可以自定义 css 实现个性化样式，如果内容包含代码，表格等内容，如果用 callout 每一行都需要添加 `>` 使用上不如 ad 代码包裹简洁。

#### 语法

````
```ad-<type> # 类型这里可以是note,abstract,info,tip,success,question,warning,failure,danger,bug,example,quote
title:                  # 标题
collapse:               # 是否默认折叠，默认是不折叠,值为open是折叠
icon:                   # 自定义图标(输入的图标名称必须是来自FontAwesome或RPGAwesome)
color:                  # 自定义颜色(颜色必须是 RGB 格式的三组数字)

示例正文内容

```
````

#### 特殊用法

- 嵌套ad 通过增加反引号的数量来决定嵌套的层级
  
`````ad-note
title: 这是一个嵌套Ad
collapse: open

Hello!

````ad-note
title: 我是被嵌套的
我是一个被嵌套进去的ad

```ad-warning
title: 这个ad默认是折叠的
collapse: close
这个内容是默认折叠的
```

````

我是最外层的
`````


- Ad 中嵌套代码块 其中 `~~~` 为代码块内容

````ad-info

```ad-bug
title: I'm Nested!
~~~javascript
throw new Error("Oops, I'm a bug.");
~~~
```

```javascript
console.log("Hello!");
```

````

- 通过 ctrl+p 输入 admontion 快捷插入 callout 或者 ad 语法块
  ![image.png](https://cdn.pkmer.cn/images/202305041045797.png)


## 高级玩法

Ad 插件支持自定义类型，而自定义类型通常绑定了唯一的 css 样式，利用这个特性就可以实现各种展示效果。

比如实现双栏布局。在 ad 插件设置中增加一个类型 col2.

![image.png](https://cdn.pkmer.cn/images/202305041054371.png)

![image.png](https://cdn.pkmer.cn/images/202305041053207.png)

并增加一个 css 片段内容如下,就可以实现 ad-col2 类型包裹的内容自动分两栏的效果。

```css

 
 .is-live-preview .admonition-col2 .callout-content.admonition-content>div:nth-child(2) {
  margin-top: -1.5em;
}

 .admonition-col2 .admonition-title-icon
 {
  display: none;
}
 .is-live-preview  :is(.admonition-col2) .admonition-content blockquote {
  padding: 0;
  margin: 0;
  line-height:1em;
}
 :is(.admonition-col2) .admonition-content blockquote {
  flex: 100%;
  border-left: none;
  padding-left: 0;
  padding-right: 0;
  margin-block-start: 0;
  margin: 0;
  box-shadow: none;
  background-color: transparent;
  color: var(--text-muted);
}
 :is(.admonition-col2) .admonition-content blockquote p::before {
  display: none;
}
 :is(.admonition-col2) .admonition-content blockquote p {
  margin: 0;
  overflow-wrap: anywhere;
}

 :is(.callout.admonition-col2)>.admonition-content>ul {
  margin-left: auto;
}
 .admonition-col2 .admonition-content>ul
 {
  padding-inline-start: 20px !important;
  margin-left: -20px;
  margin-block-start:0;
}

 :is(.admonition-col2) .admonition-content .admonition-content>ul>li{
  list-style-type: none;
  padding:0;
}

 .admonition-col2 .admonition-content ul li .task-list-item-checkbox {
  margin-left: auto;
}
:is(.admonition-col2) .callout-content ul.dataview.list-view-ul>li:not(.task-list-item) {
  margin-left: auto;
}

 .admonition-col2 {
  box-shadow: none!important;
}

 .admonition-col2 .admonition	{
  overflow: visible;
  margin: 0;
}

 .admonition-col2>.admonition-content-holder> .admonition-content {
  columns: 150px 2;
  -moz-columns: 150px 2;
  -webkit-columns: 150px 2;
  column-gap: 2vw;
  overflow: visible;
  margin: 0;
  /*分栏的分割线
  column-rule: 1px solid #d4d2d2; */
}
 .callout.admonition-col2> .admonition-content {
  columns: 150px 2;
  -moz-columns: 150px 2;
  -webkit-columns: 150px 2;
  column-gap: 2vw;
  overflow: visible;
  margin: 0;
  /*分栏的分割线
  column-rule: 1px solid #d4d2d2; */
}
 .admonition-col2 .admonition-content ol,
 .admonition-col2 .admonition-content ul {
  margin-top: -0.25em;

}
 :is(.markdown-preview-view,.markdown-rendered) .admonition-col2 .admonition-content :is(h3,h4) {
  margin-top: -0.001em !important;
}
 .admonition-kanban .admonition-col2 .admonition-content ol{
  margin: 0;
  break-inside: avoid;
}

 .admonition-kanban .admonition-col2 .admonition-content ul {
  margin: 0;
  break-inside: avoid;
}

 .admonition-col2 .admonition-content {
  overflow: visible ;
}

 .admonition-col2 > .admonition-content-holder {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
 .admonition-col2 p {
  text-align: justify;
  margin-top: 0;
  padding: 2px;
  /*  height:100%;
  overflow: auto; */
}
 .admonition-col2 p > img{
  display: block;
  height: auto;
}

 .admonition-col2-parent .admonition-col2 .admonition > .admonition-title.no-title + .admonition-content-holder {
  margin-top: 0;
}

```

还有其他更多精彩的 ad 效果 参考 [PKM-er/Blue-topaz-example: Blue topaz themes example vault for Obsidian (github.com)](https://github.com/PKM-er/Blue-topaz-example)

## 功能延伸

AD 插件跟 obsidian 内置的核心插件 Callout 功能样式类似。最大的区别在于，callout 中的引用文档是具有双链关系的可以出现在图谱中，而 AD 插件中引用的文档是无法出现在图谱中的。
