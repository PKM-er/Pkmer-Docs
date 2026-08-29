---
uid: 1786577079349000
title: 'Obsidian 插件：Kcal Calc'
tags: ['数据处理', '第三方工具集成', '效率工具', '学习与教育', 'obsidian插件']
description: '用美国农业部食品数据中心（USDA FoodData Central）里的千卡数值为食材条目做标注。——此插件尚未经过Obsidian官方人员的手动审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Kcal Calc

> [!Note] 插件名片
> - 插件名称：Kcal Calc
> - 插件作者：13green13
> - 插件说明：用美国农业部食品数据中心（USDA FoodData Central）里的千卡数值为食材条目做标注。——此插件尚未经过Obsidian官方人员的手动审核。
> - 插件分类：['数据处理', '第三方工具集成', '效率工具', '学习与教育', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/13green13/kcal-calc)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?kcal-calc)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/13green13/kcal-calc/master/README.md)



## 概述

### Kcal Calc插件总结
1. **主要功能**：扫描当前Markdown笔记中的食材行，通过美国农业部食品数据中心（USDA FoodData Central）查找匹配食物的营养数据，为食材行添加千卡（kcal）值，并添加下划线标注的总千卡数。若笔记使用Markdown标题，还能为各标题下的部分添加小计。
2. **适用场景**：适合记录饮食、关注营养摄入的人群，在Obsidian中记录食材信息时使用。
3. **核心特色**：使用美国农业部权威数据；不包含遥测、广告、自动更新机制，不访问Obsidian保险库外的文件；命令具有幂等性，再次运行可更新千卡标注和总计行。
4. **使用建议**：使用前需在插件设置中添加从https://fdc.nal.usda.gov/api-key-signup 免费获取的API密钥；食材每行写一个，默认分隔符为` - `，可在设置中修改；支持使用列表形式记录食材。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


