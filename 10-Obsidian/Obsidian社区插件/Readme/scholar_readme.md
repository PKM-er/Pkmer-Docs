---
uid: 2023120522265845
title: Obsidian 插件：【Readme】Scholar
tags: ['obsidian插件', 'readme']
description: 管理研究图书馆并优化研究工作流程。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Scholar

> [!Note] 插件名片
> - 插件名称：Scholar
> - 插件作者：Shannon Shen
> - 插件说明：管理研究图书馆并优化研究工作流程。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/lolipopshock/obsidian-scholar)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?scholar)

## 概述

管理研究图书馆并优化研究工作流程。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lolipopshock/obsidian-scholar/main/README.md)
>

---

## Readme(翻译）

下面是 [[scholar]] 插件的自述翻译

# 黑曜石学者

使用方法

### 主要特点

| 阶段 | 功能 |

| --- | --- |

| | 📚 简化图书馆管理 |

| **从外部链接添加论文** | 当在网络上看到一篇论文（Slack、Twitter 等），您可以将论文添加到本地图书馆：运行此工具可以下载论文 PDF，并创建相应的论文笔记与论文元数据。 <br/> ![01-add-paper.gif](.github/demo/01-add-paper.gif) |

| **搜索和检索** | 您可以快速搜索和检索图书馆中的论文，还可以选择从 SemanticScholar 直接查询和找到不在图书馆中的论文。 <br/> ![02-search-paper.gif](.github/demo/02-search-paper.gif) |

| | ✨ 提升论文阅读体验 |

| **查看论文引用** | Obsidian Scholar 允许您在不离开工具的情况下查看所引用论文的详细信息。 <br/> ![03-search-paper.gif](.github/demo/03-check-paper-reference.gif) |

| **复制论文的 BibTex** | ![04-copy-bibtex.gif](.github/demo/04-copy-bibtex.gif) |

安装

### 从 Obsidian 插件库安装

该插件将在维护者批准后发布。请参阅 [此 PR](https://github.com/obsidianmd/obsidian-releases/pull/2525)。

### 手动安装

1. 在你的 vault 中打开 `.obsidian/plugins` 文件夹
2. 创建一个名为 `scholar` 的文件夹
3. 从 [最新版本发布页面](https://github.com/lolipopshock/obsidian-scholar/releases/latest) 下载 `manifest.json`、`styles.css` 和 `main.js` 这三个文件，并将它们放入刚刚创建的 `.obsidian/plugins/scholar` 文件夹中
4. 打开 Obsidian，在 `设置 > 社区插件` 中找到 `Scholar` 并启用该插件。在使用之前，请确保正确配置 `Scholar` 的设置。
动机和致谢

*Obsidian Scholar* 的目标是创建一个从阅读论文、记笔记到反思和综合的流畅体验。构建基于两个强大的理念。

- **[注释文献](https://owl.purdue.edu/owl/general_writing/common_writing_assignments/annotated_bibliographies/annotated_bibliography_samples.html)**，对论文进行简短的注释，并在个人文献目录中总结关键要点。
- **[Zettlekasten](https://zettelkasten.de/)** 笔记系统，旨在进行原子化和简短的笔记，并将它们链接在一起。

在 *Obsidian Scholar* 中，我们将每篇论文视为一个独立的笔记——我们使得导入论文 PDF 并创建笔记文件变得轻松——Obsidian 应用程序使得链接论文笔记变得容易，并帮助您反思和综合知识。

这些工具的开发受到了许多在 EMACS 中实现的前辈的启发。

- [citar](https://github.com/emacs-citar/citar)：EMACS 中的参考文献管理器。
- [elfeed](https://github.com/skeeto/elfeed)：EMACS 中的 RSS 阅读器。
- [elfeed-score](https://github.com/sp1ff/elfeed-score)：带有评分功能的 EMACS RSS 阅读器。

还要感谢以下人员的博客文章和教程，展示了他们的论文阅读工作流程：

- [Managing a research workflow (bibliographies, note-taking, and arXiv)](https://emacsconf.org/2021/talks/research/)，作者：[Ahmed Khaled](https://www.akhaled.org)
- [Managing ArXiv RSS Feeds in Emacs](https://cundy.me/post/elfeed/)，作者：[Chris Cundy](https://cundy.me)

部分代码基于之前的一个名为 [paper-note-filer](https://github.com/chauff/paper-note-filler) 的项目，作者：[Claudia Hauff](https://chauff.github.io)。
