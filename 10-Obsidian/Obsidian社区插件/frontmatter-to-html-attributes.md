---
uid: 2026042019115809
title: 'Obsidian 插件：Frontmatter to HTML Attributes'
tags: ['数据处理', '样式与美化', '编程与脚本', '效率工具', 'obsidian插件']
description: '让 YAML 前置元数据以 data-* 属性的形式在 HTML 中可用，从而能够基于元数据进行 CSS 样式设置。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Frontmatter to HTML Attributes

> [!Note] 插件名片
> - 插件名称：Frontmatter to HTML Attributes
> - 插件作者：Tarek Saier
> - 插件说明：让 YAML 前置元数据以 data-* 属性的形式在 HTML 中可用，从而能够基于元数据进行 CSS 样式设置。
> - 插件分类：['数据处理', '样式与美化', '编程与脚本', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/IllDepence/obsidian-frontmatter-to-html-attributes)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?frontmatter-to-html-attributes)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/IllDepence/obsidian-frontmatter-to-html-attributes/master/README.md)

![Frontmatter to HTML Attributes](https://cdn.pkmer.cn/covers/frontmatter-to-html-attributes_internal_0.gif!pkmer)

## 概述

### Frontmatter to HTML Attributes插件总结
1. **主要功能**：将笔记的YAML前置元数据以`data-*`属性形式呈现在HTML中，便于基于元数据进行CSS样式设置。
2. **适用场景**：适用于需要根据笔记元数据对笔记进行个性化样式设置的场景，如为特定标签的笔记添加特定图标、为有特定属性的笔记标题设置样式等。
3. **核心特色**：能把YAML前置元数据转化为HTML的`data-*`属性，方便利用CSS属性选择器对笔记进行样式定制，支持多种数据类型，列表和对象会转为JSON，其他转为简单字符串。
4. **使用建议**：在YAML前置元数据中定义`<foo>`项后，笔记的HTML容器`div.workspace-leaf-content`会添加`data-<foo>`属性。可根据这些属性创建CSS片段，使用属性选择器来匹配元数据项和值，匹配标签时用`*=`并加引号。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


