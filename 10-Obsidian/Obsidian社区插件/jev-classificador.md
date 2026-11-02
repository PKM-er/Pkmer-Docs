---
uid: 1793625614350000
title: "Obsidian 插件：Jev Classificador"
tags: ["文件管理", "数据处理", "效率工具", "obsidian插件"]
description: "Classifica a nota com o Jev (TypeSafe): grava genero e categoria (taxonomia em PT-BR) e gera tags de pasta e de assunto no frontmatter. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Jev Classificador

> [!Note] 插件名片
> - 插件名称：Jev Classificador
> - 插件作者：matteo
> - 插件说明：Classifica a nota com o Jev (TypeSafe): grava genero e categoria (taxonomia em PT-BR) e gera tags de pasta e de assunto no frontmatter. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['文件管理', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/matteoandradeboschi/jev-classificador)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?jev-classificador)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/matteoandradeboschi/jev-classificador/master/README.md)



## 概述

Jev Classificador 是一款基于 TypeSafe 系统的智能笔记分类插件。它通过调用外部 API，自动分析笔记内容，从预定义的巴西葡萄牙语或英语分类体系中选取最匹配的“领域”（13 种选项）和“子领域”（89 种选项），并将结果写入笔记的 Frontmatter 中。该插件旨在解决手动维护笔记标签繁琐、分类标准不统一的问题，通过自动化流程确保笔记元数据的规范性和一致性，帮助用户快速建立结构化的知识体系。

典型使用场景包括快速归档新笔记和批量整理旧库。例如，当你写完一篇关于“云基础设施”的技术笔记时，只需点击按钮或执行命令，插件便会自动识别并标记为“技术”领域下的“基础设施”子领域。此外，它还能根据分类结果自动生成符合特定命名规范的文件夹标签（如 `concept/infrastructure`），甚至从封闭词表中生成 1 至 3 个主题标签，极大减少了手动输入标签的时间成本。

相比同类插件，Jev Classificador 的核心特色在于其内置的双语分类体系与严格的隐私保护机制。它支持在英语和巴西葡萄牙语之间切换分类标准，且切换语言时能智能处理已存在的标签，避免数据混乱。在隐私方面，插件仅在用户主动触发命令时才发送数据，且明确排除指定文件夹，API 密钥也安全存储于 Obsidian 的 SecretStorage 中，不会泄露到本地配置文件中。

使用前需注意，该插件依赖外部 API，因此需要有效的 TypeSafe 密钥才能运行，且分类过程涉及将笔记标题、标签及部分正文内容发送至云端。如果你完全依赖离线环境，或笔记内容包含极度敏感、严禁上传至任何第三方服务器的信息，则不适合使用此插件。此外，若你偏好完全自定义且无需外部服务的本地分类逻辑，该插件的 API 依赖特性可能会成为限制。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


