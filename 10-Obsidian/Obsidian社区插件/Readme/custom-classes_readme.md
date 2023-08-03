---
uid: 2023080322165083
title: Obsidian 插件：【Readme】Custom Classes
tags: ['obsidian插件', 'readme']
description: 直接从您的笔记中为所选择的Markdown元素添加自己的HTML类。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Custom Classes

> [!Note] 插件名片
> - 插件名称：Custom Classes
> - 插件作者：Lila Rest
> - 插件说明：直接从您的笔记中为所选择的Markdown元素添加自己的HTML类。
> - 插件分类：['obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/LilaRest/obsidian-custom-classes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?custom-classes)

## 概述

直接从您的笔记中为所选择的Markdown元素添加自己的HTML类。

![Custom Classes](https://cdn.pkmer.cn/covers/custom-classes.gif!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/LilaRest/obsidian-custom-classes/main/README.md)
> 

---

## Readme(翻译）

下面是 [[custom-classes]] 插件的自述翻译


<h1 align="center">Obsidian自定义类</h1>

<div align="center">
	<img alt="GitHub工作流状态" src="https://img.shields.io/github/actions/workflow/status/LilaRest/obsidian-custom-classes/semantic-release.yml">
	<img alt="GitHub下载量" src="https://img.shields.io/github/downloads/LilaRest/obsidian-custom-classes/total?color=%23ddccee">
	<img alt="GitHub许可证" src="https://img.shields.io/github/license/LilaRest/obsidian-custom-classes?color=%235588ff">
	<img alt="语义发布：angular" src="https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release">
</div>

<br>

<p align="center"><b>一个简单的Obsidian插件，允许您直接从笔记中向选定的Markdown块添加自定义HTML类。</b></p>

<br>
<br>
## 用法
您可以为以下内容添加自定义类：
<ul>
<li><p><b>整个块</b> <samp>(例如整个列表)</samp> &rarr; 在其前面的行上插入<code><samp>`class: &lt;customClass&gt;`</samp></code></p>
<table align="center">
<thead>
<td align="center"><b>此Markdown</b><br/><samp>(编辑模式)</samp></td>
<td align="center"><b>将被渲染为</b><br/><samp>(实时预览/阅读模式)</samp></td>
</thead>
<tbody>
<td><p>

```markdown
`class: fancy-list`
- Lorem ipsum
- Dolor
- Amet consectetur             
```
</p></td>
<td><p>

```html
<div class="fancy-list">
  <ul>
    <li>Lorem ipsum</li>
    <li>Dolor sit</li>
    <li>Amet consectetur</li>            
  </ul>
</div>
```
</p></td>
</tbody>
</table>
	</li>
  <br>
<li><p><b>特定元素</b> <samp>(例如列表项)</samp> &rarr; 在其中插入<code><samp>`class: &lt;customClass&gt;`</samp></code></p>
  
<table align="center">
<thead>
<td align="center"><b>此Markdown</b><br/><samp>(编辑模式)</samp></td>
<td align="center"><b>将被渲染为</b><br/><samp>(实时预览/阅读模式)</samp></td>
</thead>
<tbody>
<td><p>

```markdown
- Lorem ipsum
- Dolor sit `class: fancy-item`
- Amet consectetur
```
</p></td>
<td><p>

```html
<div>
  <ul>
    <li>Lorem ipsum</li>
    <li class="fancy-item">Dolor sit</li>
    <li>Amet consectetur</li>
  </ul>
</div>
```
</p></td>
</tbody>
</table>
	</li>
  <br>
  </li>
<li><p><b>甚至两者都可以：</b>
	
<table align="center">
<thead>
<td align="center"><b>此Markdown</b><br/><samp>(编辑模式)</samp></td>
<td align="center"><b>将被渲染为</b><br/><samp>(实时预览/阅读模式)</samp></td>
</thead>
<tbody>
<td><p>

```markdown
`class: fancy-list`
- Lorem ipsum
- Dolor `class: fancy-item` sit 
- Amet consectetur
```
</p></td>
<td><p>

```html
<div class="fancy-list">
  <ul>
    <li>Lorem ipsum</li>
    <li class="fancy-item">Dolor sit</li>
    <li>Amet consectetur</li>
  </ul>
</div>
```
</p></td>
</tbody>
</table>
	</li>
</ul>

<br>

> #### ℹ️ &nbsp; 有关高级用法和/或信息，请参阅[常见问题解答](#-FAQ)部分。

演示
以下是一些使用此插件的方法，可能会为您的工作流程提供灵感。

<ins><b>添加一个类到：</b></ins>

<ol>
<li>
<details>
  <summary><b>整个表格</b></summary>
<br>
<table align="center">
<thead>
<td align="center"><b>此 markdown</b><br/><samp>(编辑模式)</samp></td>
<td align="center"><b>将被渲染</b><br/><samp>(实时预览/阅读模式)</samp></td>
</thead>
<tbody>
<td><p>

```markdown
`class: mytable`
| AAA | BBB | CCC |
| --- | --- | --- |
| 111 | 222 | 333 |
```
</p></td>
<td><p>

```html
<div class="mytable">
<table>
  <thead>
    <tr>
      <th>AAA</th>
      <th>BBB</th>
      <th>CCC</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>111</td>
      <td>222</td>
      <td>333</td>
    </tr>
  </tbody>
</table>
</div>  
```
</p></td>
</tbody>
</table>
  <br>
</details>
</li>

<li>
<details>
  <summary><b>表格单元格</b></summary>
  <br>
<table align="center">
<thead>
<td align="center"><b>此 markdown</b><br/><samp>(编辑模式)</samp></td>
<td align="center"><b>将被渲染</b><br/><samp>(实时预览/阅读模式)</samp></td>
</thead>
<tbody>
<td><p>

```markdown
| AAA | BBB                  | CCC |
| --- | -------------------- | --- |
| 111 | 222 `class: my-cell` | 333 |
```
</p></td>
<td><p>

```html
<div>
<table>
  <thead>
    <tr>
      <th>AAA</th>
      <th>BBB</th>
      <th>CCC</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>111</td>
      <td class="my-cell">222</td>
      <td>333</td>
    </tr>
  </tbody>
</table>
</div>  
```
</p></td>
</tbody>
</table>
  <br>
</details>
</li>
<li>
<details>
  <summary><b>Dataview 查询</b></summary>
<br>
<table align="center">
<thead>
<td align="center"><b>此 markdown</b><br/><samp>(编辑模式)</samp></td>
<td align="center"><b>将被渲染</b><br/><samp>(实时预览/阅读模式)</samp></td>
</thead>
<tbody>
<td><p>

````markdown
`class: my-dv-list`
```dataview
LIST
WHERE creation
```
````
</p></td>
<td><p>

```html
<div class="my-dv-list">
  <div class="block-language-dataview">
    <ul class="dataview list-view-ul">
      // 您的查询结果
      // <li>...</li>
      // ...
    </ul>
  </div>
</div>
```
</p></td>
</tbody>
</table>
  <br>
</details>
</li>

<li>
<details>
  <summary><b>标题</b></summary>
<br>
<table align="center">
<thead>
<td align="center"><b>此 markdown</b><br/><samp>(编辑模式)</samp></td>
<td align="center"><b>将被渲染</b><br/><samp>(实时预览/阅读模式)</samp></td>
</thead>
<tbody>
<td><p>

```markdown
`class: important-title`

### 我的超级标题
```
</p></td>
<td><p>

```html
<div class="important-title">
  <h3>我的超级标题</h3>
</div>
```
</p></td>
</tbody>
</table>
  <br>
</details>
</li>

<li>
<details>
  <summary><b>一个引用块</b></summary>
<br>
<table align="center">
<thead>
<td align="center"><b>这个 markdown</b><br/><samp>(编辑模式)</samp></td>
<td align="center"><b>将被渲染为</b><br/><samp>(实时预览/阅读模式)</samp></td>
</thead>
<tbody>
<td><p>

```markdown
`class: interesting-quote`
> Lorem ipsum dolor sit amet
```
</p></td>
<td><p>

```html
<div class="interesting-quote">
  <blockquote>
    <p>Lorem ipsum dolor sit amet</p>
  </blockquote>
</div>
```
</p></td>
</tbody>
</table>
  <br>
</details>
</li>

<li>
<details>
  <summary><b>内联格式化</b></summary>
<br>
<table align="center">
<thead>
<td align="center"><b>这个 markdown</b><br/><samp>(编辑模式)</samp></td>
<td align="center"><b>将被渲染为</b><br/><samp>(实时预览/阅读模式)</samp></td>
</thead>
<tbody>
<td><p>

```markdown
I'm a **bold text `class: big`** and _`.small` me an italic one_
```
</p></td>
<td><p>

```html
<p>I'm a <strong class="big">bold text</strong> and <em class="small">me an italic one</em></p>
```
</p></td>
</tbody>
</table>
  <br>
</details>
</li>
</ol>
  
<br>
<br>
<br>

## 展示 / 集成
该部分展示了一些人们如何将_Custom Classes_插件集成到他们的工作流中的示例。
请随时通过[开启一个问题](https://github.com/LilaRest/obsidian-custom-classes/issues/new)来分享你的示例。

<ol>
	<li><h3>Lila的前置元数据 :cherry_blossom:</h3>
  
在这里，_Custom Classes_插件被用来将Markdown无序列表(`ul`)渲染为一个干净的前置元数据块。

&rarr; 源码: https://forum.obsidian.md/t/a-frontmatter-that-finally-supports-links-lilas-frontmatter/53087
	
<table align="center">
<thead>
<td align="center"><b>这个Markdown</b><br/><samp>(编辑模式)</samp></td>
<td align="center"><b>将被渲染为</b><br/><samp>(实时预览 / 阅读模式)</samp></td>
</thead>
<tbody>
<td><p>

```markdown
`class:meta`
- creation:: 2023-01-21T18:55:12
- author:: [[John Doe]]
- parents:: [[Note]], [[Another note]]
- status:: #MayBePartial
```
</p></td>
<td><p>

| 主题 | |
| -- | -- |
| 暗色 | ![](https://forum.obsidian.md/uploads/default/original/3X/1/4/1418a3659b033fcf8d925105d6a3da3c6b9984fc.gif) |
| 亮色 | ![](https://forum.obsidian.md/uploads/default/original/3X/3/5/35b209dfa79a2b3df13166e9ddd6d1b208480fca.gif) |

</p></td>
</tbody>
</table>
</li>
</ol>

<br>
<br>
<br>

## ❔ 常见问题解答
<details>
  <summary><b>为什么不使用 <code>&lt;div class="my-custom-class"&gt;</code> 代替？</b></summary>
  <blockquote align="center">
  <br>
    
  在 Obsidian 中，将 Markdown 元素包装在 `div` 中会破坏其在实时预览和阅读模式下的渲染，并阻止在编辑模式下点击链接。此外，将 HTML 写入笔记会使其不易阅读。
    
  **借助 _Custom Classes_ 插件，您可以在不破坏任何内容的情况下，以纯 Markdown 格式添加自定义类！** :tada:
  </blockquote>
  <br>
</details>

<details>
  <summary><b>它能在其他 Markdown 编辑器中使用吗？</b></summary>
  <blockquote align="center">
  <br>
    
  由于此插件专属于 Obsidian，自定义类将不会在其他编辑器中应用。
    
  但是，由于自定义类块（``` `class: ...` ```）是简单的 Markdown 内联代码块，它们将在其他 Markdown 编辑器中正确呈现为代码块。
  </blockquote>
  <br>
</details>

<details>
  <summary><b>是否可以一次添加多个类？</b></summary>
  <blockquote align="center">
  <br>
    
  是的，只需用逗号分隔每个类：
<table align="center">
<thead>
<td align="center"><b>此 Markdown</b><br/><samp>(编辑模式)</samp></td>
<td align="center"><b>将被渲染为</b><br/><samp>(实时预览 / 阅读模式)</samp></td>
</thead>
<tbody>
<td><p>

```markdown
`class: first, second, third-one`
我是段落，你呢？          
```
</p></td>
<td><p>

```html
<div class="first second third-one">
  <p>我是段落，你呢？</p>
</div>
```
</p></td>
</tbody>
</table>
  </blockquote>
  <br>
</details>

<details>
  <summary><b>它在实时预览模式下工作吗？</b></summary>
  <blockquote align="center">
  <br>
  
  是的，此插件完全支持实时预览模式。
  
  顺便说一下，由 _Custom Classes_ 块定位的元素在阅读模式和实时预览模式下以完全相同的方式呈现，使您能够编写在任何地方都有效的 CSS。
  </blockquote>
  <br>
</details>

<details>
  <summary><b><code>class:</code> 前缀太长了，有没有简写版本？</b></summary>
  <blockquote align="center">
  <br>
  
  是的，_Custom Classes_ 插件还将以 `cls:` 或 `.` 开头的内联代码块视为自定义类块。
  
  因此，``` `cls: wow` ``` 和 ``` `.wow` ``` 等效于 ``` `class: wow` ```.
  </blockquote>
  <br>
</details>

<br>
<br>
<br>

## 安装
1) 进入 Obsidian 的设置页面的 **Community Plugins** 部分
2) 点击 **浏览** 并搜索 "Custom classes"
3) 选择 _Custom Classes_ 插件并点击 **安装**
4) 安装完成后，点击 **启用**
5) 尽情使用！

## 灵感
这个插件最初是受到[Obsidian Stylist](https://github.com/ixth/obsidian-stylist)插件的启发，但已经完全重写以：
- 专注于添加自定义的HTML类，
- 支持实时预览模式，
- 修复一些重大错误（例如，如果目标块被修改然后重新渲染，类没有被正确地附加）。

## 贡献
请参阅[CONTRIBUTING.md](https://github.com/LilaRest/obsidian-custom-classes/blob/main/CONTRIBUTING.md)。



