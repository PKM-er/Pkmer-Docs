---
uid: 20250715005643354
title: 'Obsidian 插件：Auto Replacer'
tags: ['文字处理', '编辑工具', '自动化与AI', '编程与脚本', '效率工具', 'obsidian插件']
description: '用正则表达式规则和 JavaScript 函数自动替换笔记里的文本。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Auto Replacer

> [!Note] 插件名片
> - 插件名称：Auto Replacer
> - 插件作者：Alecell
> - 插件说明：用正则表达式规则和 JavaScript 函数自动替换笔记里的文本。
> - 插件分类：['文字处理', '编辑工具', '自动化与AI', '编程与脚本', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/Alecell/auto-replacer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?auto-replacer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/Alecell/auto-replacer/master/README.md)



## 概述

### Auto Replacer插件总结
1. **主要功能**：该插件可借助正则表达式和JavaScript函数，依据自定义规则自动替换Obsidian笔记中的文本。
2. **适用场景**：适用于格式化单位、高亮关键词、注入如笔记标题这类智能且有上下文感知的替换内容等场景。
3. **核心特色**：用户能自定义正则表达式模式；可编写JavaScript转换函数控制匹配内容的替换方式；规则可通过可视化界面保存和编辑；无需手动编辑Markdown或点击按钮，输入时自动完成替换。
4. **使用建议**：使用时，先打开“设置→Auto Replacer”，然后点击“Add custom r...”添加规则。规则包含正则表达式模式（用于匹配内容）、转换函数（用于指定替换方式）和触发条件（编辑器内容改变时自动运行，有防抖机制避免性能问题）。可参考示例规则，如替换笔记标题、逗号小数、华氏温度等，根据自身需求进行调整。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


