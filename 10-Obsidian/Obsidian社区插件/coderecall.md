---
uid: 1786577076992004
title: 'Obsidian 插件：CodeRecall'
tags: ['学习与教育', '编程与脚本', 'ANKI', '第三方工具集成', 'obsidian插件']
description: '在Obsidian里结合Anki和LeetCode：对代码进行填空式删除，支持自动评分的主动回忆和间隔重复复习。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：CodeRecall

> [!Note] 插件名片
> - 插件名称：CodeRecall
> - 插件作者：rixct
> - 插件说明：在Obsidian里结合Anki和LeetCode：对代码进行填空式删除，支持自动评分的主动回忆和间隔重复复习。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['学习与教育', '编程与脚本', 'ANKI', '第三方工具集成', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/rixct/code-recall)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?coderecall)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/rixct/code-recall/master/README.md)



## 概述

### CodeRecall插件总结
1. **主要功能**：将Obsidian笔记中的代码块转化为间隔重复卡片。隐藏部分代码，复习时需凭记忆重新输入。可针对测试用例运行代码并自动评分，代码运行成功卡片才计为已掌握；无测试用例的卡片通过对比文本评分。
2. **适用场景**：适用于代码学习与复习，也可用于普通文本片段和文章的记忆。
3. **核心特色**：结合了Anki的间隔重复复习和LeetCode的代码测试功能，自动评分机制确保代码真正被掌握，而非仅靠自我评估。
4. **使用建议**：创建卡片时，使用`{{cN::…}}`标记需隐藏的部分；若为代码卡片，建议填写`lang`和`tests`，以实现代码运行和自动评分；普通文本卡片可省略`lang`和`tests`，依靠文本对比评分。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


