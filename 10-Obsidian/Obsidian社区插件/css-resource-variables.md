---
uid: 1786577077181004
title: 'Obsidian 插件：CSS Resource Variables'
tags: ['样式与美化', '编程与脚本', '文件管理', 'obsidian插件']
description: '把本地仓库文件（图片、字体，啥都行）映射到 CSS 自定义属性里，这样任何主题或者代码片段都能用 var() 来引用你自己的本地文件啦。——Obsidian 官方人员还没手动审核过这个插件哈。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：CSS Resource Variables

> [!Note] 插件名片
> - 插件名称：CSS Resource Variables
> - 插件作者：valleytheknight
> - 插件说明：把本地仓库文件（图片、字体，啥都行）映射到 CSS 自定义属性里，这样任何主题或者代码片段都能用 var() 来引用你自己的本地文件啦。——Obsidian 官方人员还没手动审核过这个插件哈。
> - 插件分类：['样式与美化', '编程与脚本', '文件管理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/chrisairbrown-del/CSS-Resource-Variables)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?css-resource-variables)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/chrisairbrown-del/CSS-Resource-Variables/master/README.md)



## 概述

### CSS Resource Variables插件总结
1. **主要功能**：将本地库文件（如图像、字体等）映射到CSS自定义属性，使任何主题或代码段能通过`var()`引用本地文件。
2. **适用场景**：适用于希望为Obsidian主题添加自定义背景图片、使用自定义字体，或需要在主题和代码段中使用本地资源的场景。
3. **核心特色**：解决了Obsidian主题和代码段CSS无法通过相对路径或特定URL引用本地文件的问题，仅需选择文件并命名CSS变量，加载时自动解析，文件重命名或移动也能自动跟踪。
4. **使用建议**：打开“设置 -> CSS Resource Variables”，点击“添加映射”选择库中的文件，输入变量名（无需前缀`--`），使用主题或代码段CSS预期的名称。之后，库中读取`var(--your - name)`的CSS会自动指向所选文件。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


