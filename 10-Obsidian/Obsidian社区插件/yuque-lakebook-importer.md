---
uid: 1793625624957000
title: "Obsidian 插件：Yuque Lakebook Importer"
tags: ["第三方工具集成", "文件管理", "数据处理", "obsidian插件"]
description: "Import Yuque Lakebook archives into Markdown notes with folders, images, and original document data. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Yuque Lakebook Importer

> [!Note] 插件名片
> - 插件名称：Yuque Lakebook Importer
> - 插件作者：minlaoge
> - 插件说明：Import Yuque Lakebook archives into Markdown notes with folders, images, and original document data. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['第三方工具集成', '文件管理', '数据处理', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/minlaoge/yuque-lakebook-importer)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?yuque-lakebook-importer)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/minlaoge/yuque-lakebook-importer/master/README.md)



## 概述

语雀 Lakebook 导入器旨在解决语雀知识库迁移至 Obsidian 的格式兼容难题。它直接解析语雀导出的 `.lakebook` 归档文件，将其转换为标准的 Markdown 笔记，完整保留原有的文件夹层级、图片资源及文档元数据。整个过程完全在本机运行，无需配置语雀 API Token 或依赖外部 MCP 服务，确保了数据处理的私密性与便捷性。

典型使用场景包括个人知识体系的批量迁移或团队文档的本地备份。例如，当你希望将语雀中积累多年的技术文档导入 Obsidian 以利用其双向链接功能时，只需导出知识库并运行插件命令，即可在笔记库中生成结构清晰的目录。若文档中包含大量远程图片，插件支持一键下载至本地附件目录，避免链接失效，确保笔记的长期可访问性。

相比其他迁移工具，该插件的特色在于对语雀特有格式的深度还原。它能根据 `tocYml` 精确重建父子目录关系，并转换常见的 HTML 标题、表格及代码块。此外，插件会保留原始文档 JSON 数据，便于后续恢复特殊内容；通过 Obsidian Vault API 创建文件，能更好地配合已启用的同步插件工作。导入后的笔记和文件夹使用可读标题命名，重名时自动添加数字后缀，避免了时间戳文件夹的混乱。

使用前需注意，画板、数据表及复杂排版可能无法完整保留，Markdown 原文中的图片暂不自动下载。解包上限为 512 MB，大包解析可能占用较多内存。该插件不适合需要实时同步语雀动态内容的场景，仅支持一次性导入。建议首次使用时保留原始导出文件，并仔细检查导入报告，确认特殊内容处理情况后再进行大规模迁移。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


