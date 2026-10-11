---
uid: "1791709369501000"
title: "Obsidian 插件：Reading View Full Range"
tags: ['界面优化', '样式与美化', '效率工具', 'obsidian插件']
description: "Keep the active note's native Reading View fully rendered to preserve layouts while scrolling. - This plugin has not been manually reviewed by Obsidian staff."
author: "AI"
type: "auto"
draft: false
editable: false
modified: "20240101000000"
---

# Obsidian 插件：Reading View Full Range

> [!Note] 插件名片
> - 插件名称：Reading View Full Range
> - 插件作者：Trose
> - 插件说明：Keep the active note's native Reading View fully rendered to preserve layouts while scrolling. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['界面优化', '样式与美化', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/trosses/reading-view-full-range)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?reading-view-full-range)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/trosses/reading-view-full-range/master/README.md)



## 概述

**1. 主要功能**
该插件强制当前活动笔记的阅读视图（Reading View）完全渲染，而非仅渲染可视区域。它通过取消虚拟滚动限制，确保整个文档内容在内存中完整加载。

**2. 适用场景**
适用于包含浮动元素、依赖前文布局或复杂排版的长文档。当滚动时出现布局错乱或元素消失时，此插件能有效保持版面一致性。

**3. 核心特色**
*   **无设置即用**：启用后自动生效，无需配置参数或命令。
*   **局部生效**：仅影响当前活动标签页，切换视图、关闭插件或切换至其他分屏时自动恢复默认行为，不影响非活动分屏的性能。
*   **轻量级**：无构建步骤，直接运行，依赖极少。

**4. 使用建议**
*   **性能权衡**：长文档会显著增加内存占用并延长渲染时间，建议仅在必要时启用。
*   **兼容性注意**：需 Obsidian 1.13.7+。因使用内部 API，版本更新后可能失效，若出现不兼容提示请禁用并检查更新。
*   **折叠限制**：不强制展开折叠内容，也不保证嵌入组件立即完成加载。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---

