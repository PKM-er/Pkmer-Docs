---
uid: 1786577077937004
title: 'Obsidian 插件：Frontmatter Cleaner'
tags: ['编辑工具', '数据处理', '效率工具', '移动端优化', 'obsidian插件']
description: '在一个方便点击的弹窗里查看当前文件的前置元数据属性，还能删除你选中的属性。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Frontmatter Cleaner

> [!Note] 插件名片
> - 插件名称：Frontmatter Cleaner
> - 插件作者：sharfaroz
> - 插件说明：在一个方便点击的弹窗里查看当前文件的前置元数据属性，还能删除你选中的属性。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['编辑工具', '数据处理', '效率工具', '移动端优化', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/sharfaroz7/frontmatter-cleaner)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?frontmatter-cleaner)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/sharfaroz7/frontmatter-cleaner/master/README.md)



## 概述

### Frontmatter Cleaner插件总结
1. **主要功能**：无需手动打开YAML块编辑，可快速查看并移除当前笔记的前置元数据（YAML）属性。
2. **适用场景**：适用于清理笔记中积累的多余前置元数据属性，如模板残留、一次性实验或不再使用的字段。
3. **核心特色**：
    - 提供一个便于操作的列表，展示当前笔记的所有前置元数据属性及其值。
    - 支持多种选择方式，如选择全部、取消全部、选择空值属性。
    - 桌面和移动设备操作一致，行的最小触摸目标为44px，方便在iPhone上准确点击。
    - 使用Obsidian的`processFrontMatter` API删除属性，保留前置元数据块的原有格式和顺序。
4. **使用建议**：打开要清理的笔记，通过命令面板运行“Clean frontmatter properties of current file”或点击侧边栏图标，在弹出窗口中选择要删除的属性，最后点击“Delete selected (n)”完成删除，若不想修改则点击“Cancel”。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


