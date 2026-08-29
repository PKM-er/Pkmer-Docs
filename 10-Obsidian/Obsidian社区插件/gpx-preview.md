---
uid: 1786577078111001
title: 'Obsidian 插件：GPX Preview'
tags: ['地图与位置', '图表与可视化', '第三方工具集成', '效率工具', 'obsidian插件']
description: '能呈现嵌入式GPX文件的苹果风格地图预览，还带有运动数据统计和离线缓存功能。——此插件尚未经过Obsidian官方人员的人工审核。'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：GPX Preview

> [!Note] 插件名片
> - 插件名称：GPX Preview
> - 插件作者：Thomas
> - 插件说明：能呈现嵌入式GPX文件的苹果风格地图预览，还带有运动数据统计和离线缓存功能。——此插件尚未经过Obsidian官方人员的人工审核。
> - 插件分类：['地图与位置', '图表与可视化', '第三方工具集成', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/tschoffelen/obsidian-gpx)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?gpx-preview)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/tschoffelen/obsidian-gpx/master/README.md)



## 概述

### GPX Preview插件总结
1. **主要功能**：为笔记中嵌入的GPX文件渲染苹果风格的地图预览，同时显示运动统计数据，支持离线缓存。
2. **适用场景**：适合记录和查看运动轨迹的场景，如跑步、骑行等运动记录。
3. **核心特色**：
    - 呈现类似苹果风格的卡片式地图，支持明暗模式，有起止标记和蓝色路线线。
    - 提供多种运动统计数据，可在设置中切换显示项目。
    - 支持公制和英制单位。
    - 离线优先，首次加载时将地图转为PNG并缓存。
    - 支持多种地图提供商，包括CARTO、OpenStreetMap和Apple Maps。
4. **使用建议**：手动安装时，先运行 `yarn install && yarn build`，再将相关文件复制到指定目录，最后在社区插件中启用。若GPX文件在Obsidian中不显示，启用该插件后即可。开发时可使用 `yarn dev` 开启监听模式，`yarn build` 进行生产构建。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


