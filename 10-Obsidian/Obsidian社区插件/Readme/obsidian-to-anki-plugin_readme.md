---
uid: 20230803212919
title: Obsidian 插件：【Readme】Obsidian_to_Anki
tags: ['第三方工具集成', '学习', 'obsidian插件', 'readme']
description: 这是一个 Anki 集成插件！专为高效批量导出而设计。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Obsidian_to_Anki

> [!Note] 插件名片
> - 插件名称：Obsidian_to_Anki
> - 插件作者：Pseudonium
> - 插件说明：这是一个 Anki 集成插件！专为高效批量导出而设计。
> - 插件分类：['第三方工具集成', '学习', 'obsidian插件', 'readme']
> - 项目地址：[点我访问](https://github.com/Pseudonium/Obsidian_to_Anki)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsidian-to-anki-plugin)

## 概述

这是一个 Anki 集成插件！专为高效批量导出而设计。

![Obsidian_to_Anki](https://cdn.pkmer.cn/covers/obsidian-to-anki-plugin.PNG!pkmer)

> [!tip] 原文出处
> 
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/Pseudonium/Obsidian_to_Anki/master/README.md)
> 

---

## Readme(翻译）

下面是 [[obsidian-to-anki-plugin]] 插件的自述翻译



# Obsidian_to_Anki
将文本或Markdown文件中的卡片添加到Anki的插件。可以在Obsidian中作为插件运行，也可以作为Python脚本从命令行运行。以[Obsidian](https://obsidian.md/)的Markdown语法为基础构建。支持**用户自定义的卡片语法。**
查看[Trello](https://trello.com/b/6MXEizGg/obsidiantoanki)以获取计划中的功能。

开始使用

查看[Wiki](https://github.com/Pseudonium/Obsidian_to_Anki/wiki)！它包含大量信息，包括新用户的设置说明。我将在这里包含一份说明的副本：

设置

### 所有用户
1. 启动 [Anki](https://apps.ankiweb.net/)，并导航到您想要的个人资料。
2. 确保您已安装 [AnkiConnect](https://github.com/FooSoft/anki-connect)。

### Obsidian插件用户
3. 下载[Obsidian](https://obsidian.md/)
4. 在“Community plugins”列表中搜索此插件
5. 安装插件。
6. 在Anki中，导航到工具->插件->AnkiConnect->配置，并将其更改为以下内容：
<pre>
{
    "apiKey": null,
    "apiLogPath": null,
    "webBindAddress": "127.0.0.1",
    "webBindPort": 8765,
    "webCorsOrigin": "http://localhost",
    "webCorsOriginList": [
        "http://localhost",
        "app://obsidian.md"
    ]
}
</pre>

7. 重新启动Anki以应用上述更改
8. 在Anki在后台运行的情况下，加载插件。这将生成插件设置。


未来加载Obsidian时不需要Anki在运行，但当然需要它来使用插件！

要运行插件，请在功能区（包含“打开图形视图”和“打开快速切换器”等按钮的位置）上查找Anki图标。
有关使用的更多信息，请查看[Wiki](https://github.com/Pseudonium/Obsidian_to_Anki/wiki)！

### Python脚本用户
3. 安装最新版本的[Python](https://www.python.org/downloads/)。
4. 如果您是新用户，请从[发布页面](https://github.com/Pseudonium/Obsidian_to_Anki/releases)下载`obstoanki_setup.py`，并将其放置在您想要安装脚本的文件夹中（例如您的笔记文件夹）。
5. 运行`obstoanki_setup.py`，例如通过在文件浏览器中双击它。这将自动下载脚本的最新版本和所需的依赖项。现有用户应该能够运行他们现有的`obstoanki_setup.py`以获取脚本的最新版本。
6. 检查下面的权限选项卡，确保脚本能够运行。
7. 运行`obsidian_to_anki.py`，例如通过在文件浏览器中双击它。这将生成一个配置文件`obsidian_to_anki_config.ini`。

#### 权限
脚本需要具备以下功能：
* 在脚本安装的目录中创建配置文件。
* 在脚本使用的目录中读取文件。
* 在脚本使用的目录中创建备份文件。
* 在脚本使用的目录中重命名文件。
* 在脚本使用的目录中删除备份文件。
* 临时更改当前工作目录（以便正确解析本地图像路径）。

## 特点

当前功能（详细信息请查看wiki）：
* **自定义笔记类型** - 您不仅限于Anki的6种内置笔记类型。
* **从文件更新笔记** - 您的文本文件是笔记的权威来源。
* **标签**，包括**整个文件的标签**。
* **按用户指定的牌组添加** - 按文件为基础。
* **Markdown格式**。
* **数学格式**。
* **嵌入图片**。GIF也可以使用。
* **音频**。
* **自动从文件中删除笔记**。
* **自动从目录中读取所有文件** - 递归地！
* **内联笔记** - 在单行上输入笔记的更简洁语法。
* **简单的填空格式** - 更紧凑的语法来创建填空文本。
* **冻结字段**
* **Obsidian集成** - 链接到制作闪卡的文件，完整的链接和图像嵌入支持。
* **自定义语法** - 使用**正则表达式**，添加自定义语法以生成**适合您的笔记**。一些示例：
  * RemNote单行样式。`This is how to use::Remnote single-line style`  
  ![Remnote 1](Images/Remnote_1.png)
  * 标题段落样式。
  <pre>
  # Style
  This style is suitable for having the header as the front, and the answer as the back
  </pre>  
  ![Header 1](Images/Header_1.png)
  * 问题答案样式。
  <pre>
  Q: How do you use this style?
  A: Just like this.
  </pre>  
  ![Question 1](Images/Question_1.png)
  * Neuracache #flashcard样式。  
  <pre>
  In Neuracache style, to make a flashcard you do #flashcard
  The next lines then become the back of the flashcard
  </pre>  
  ![Neuracache 1](Images/Neuracache_1.png)
  * Ruled样式  
  <pre>
  How do you use ruled style?
  ---
  You need at least three '-' between the front and back of the card.
  </pre>  
  ![Ruled 1](Images/Ruled_1.png)
  * Markdown表格样式  
  <pre>
  | Why might this style be useful? |
  | ------ |
  | It looks nice when rendered as HTML in a markdown editor. |
  </pre>
  ![Table 2](Images/Table_2.png)
  * 填空段落样式  
  <pre>
  The idea of {cloze paragraph style} is to be able to recognise any paragraphs that contain {cloze deletions}.
  </pre>
  ![Cloze 1](Images/Cloze_1.png)

请注意，**所有自定义语法默认关闭**，必须通过配置文件将其编程到脚本中 - 详细信息请参阅Wiki。





