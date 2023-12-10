---
uid: 2023120719272783
title: Obsidian 插件：【Readme】Embedded Code Title
tags: ['界面相关', 'obsidian插件', 'readme']
description: 这是一个 Obsidian 插件，可以将标题嵌入到代码块中。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Embedded Code Title

> [!Note] 插件名片
> - 插件名称：Embedded Code Title
> - 插件作者：tadashi-aikawa
> - 插件说明：这是一个 Obsidian 插件，可以将标题嵌入到代码块中。
> - 插件分类：[' 界面相关 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/tadashi-aikawa/obsidian-embedded-code-title)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-embedded-code-title)

## 概述

这是一个 Obsidian 插件，可以将标题嵌入到代码块中。

![Embedded Code Title](https://cdn.pkmer.cn/covers/obsidian-embedded-code-title.gif!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/tadashi-aikawa/obsidian-embedded-code-title/master/README.md)
>

---

## Readme(翻译）

下面是 [[obsidian-embedded-code-title]] 插件的自述翻译

# Obsidian 嵌入式代码标题插件

[![release](https://img.shields.io/github/release/tadashi-aikawa/obsidian-embedded-code-title.svg)](https://github.com/tadashi-aikawa/obsidian-embedded-code-title/releases/latest)

![downloads](https://img.shields.io/github/downloads/tadashi-aikawa/obsidian-embedded-code-title/total)

这是一个 [Obsidian] 插件，可以为代码块嵌入标题。

**⚠ 由于依赖于 Obsidian 的内部 DOM 结构，该插件有可能在某些时候无法正常工作。**

![演示](https://cdn.pkmer.cn/covers/obsidian-embedded-code-title_1_2.gif!pkmer)

## 🖋 示例

### 无文件名

````markdown
```python
def main():
    pass
```
````

↓

![img.png](https://cdn.pkmer.cn/covers/obsidian-embedded-code-title_1_3.png!pkmer)

### 没有文件名，但显示语言名称

````markdown
```python:
def main():
    pass
```
````

↓

![img_1.png](https://cdn.pkmer.cn/covers/obsidian-embedded-code-title_1_4.png!pkmer)

### 带有文件名

````markdown
```python:main.py
def main():
    pass
```
````

↓

![img_2.png](https://cdn.pkmer.cn/covers/obsidian-embedded-code-title_1_5.png!pkmer)

### 文件名包含半个空格

如果您配置如下。

![img_4.png](https://cdn.pkmer.cn/covers/obsidian-embedded-code-title_1_6.png!pkmer)

然后

````markdown
```python:main\sincludes\sspace.py
def main():
    pass
```
````

↓

![img_3.png](https://cdn.pkmer.cn/covers/obsidian-embedded-code-title_1_7.png!pkmer)

🌍 在 Obsidian Publish 上使用

如果 [您可以在 Obsidian Publish 上使用自定义域名]，您还可以使用此插件在 Obsidian Publish 的发布站点上使用 `publish.js` 和 `publish.css` 的功能。您可以在 [最新版本发布页面] 上下载 `publish.js` 和 `publish.css`。请参考 [我的发布站点] 作为示例。

[您可以在 Obsidian Publish 上使用自定义域名]: <https://help.obsidian.md/Licenses+%26+add-on+services/Obsidian+Publish#Custom+domain>
[最新版本发布页面]: <https://github.com/tadashi-aikawa/obsidian-embedded-code-title/releases/latest>
[我的发布站点]: <https://minerva.mamansoft.net/Obsidian/Obsidian+Publish%E3%81%AE%E3%82%B5%E3%82%A4%E3%83%88%E3%81%A7%E3%82%B3%E3%83%BC%E3%83%89%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF%E3%81%AB%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E5%90%8D%E3%82%92%E5%9F%8B%E3%82%81%E8%BE%BC%E3%82%80>

## 🖥️ 针对开发者

### 开发

```console
任务 初始化
任务 开发
```

### 发布

```
task release VERSION=1.2.3
```

[Obsidian]: <https://obsidian.md/>
[Task]: <https://taskfile.dev/#/>



