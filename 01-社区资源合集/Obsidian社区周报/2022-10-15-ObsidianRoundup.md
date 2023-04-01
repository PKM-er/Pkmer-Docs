---
uid: 20230329102645
title: 社区新闻
description: 
author: 
type: other
draft: false
editable: false
modified: 20230401230259
---

# 社区新闻

> 每周都有相当多有趣的分享或讨论在 Discord 中传播或产生，文章中的链接往往需要你登录到 Discord 中才能查看，且一般都是登录到浏览器版本的 Discord 或者将链接贴入到 App 才能打开快速跳转——为这个麻烦提前说声抱歉！

- 由于 1.0 版本的 Obsidian 的主题相较于以往变化过大，而且对如何创作新主题造成了很大的影响，所以官方此前没有在 O_O 活动中加入主题类别的提交渠道。但是现在 1.0 已经公开发布，官方在 O_O 活动中添加了主题赛道，而且考虑到时间上的问题，所以这次 O_O 活动的截止期限将会延长两周。现在截止时间将为十一月十三号，你可以在这里了解更多详情 [活动相关的 Discord 链接](https://discord.com/channels/686053708261228577/1022167089345216522/1030509531568025671)

同时在十月的每周六，官方都会直播如何制作插件或者如何制作主题的相关内容，目前插件制作教程由 @ Marcus Olsson 来全力制作，而主题相关的内容则由 @ Kepano 来负责。

- 此外刚刚我们已经上传了 Kepano 在过去的周末中直播的相关内容，如果你对主题制作有想法，可以去观看~ 以下是 [Discord](https://discord.gg/6kzvuPE9?event=1030119583392223302)  的链接、 [YouTube](https://www.youtube.com/watch?v=8fbw2VRQAhk)  链接和  [Twitch](https://www.twitch.tv/obsdmd)  链接（都是录播哈）

此外，上周的 O_O 直播也同步上传到了 B 站，分别是：

- 【插件开发教程】接收用户输入的弹窗——命令或侧边栏
- 【插件作者访谈】Templater 相关，说了维护者为什么以及如何开始维护 Templater 插件的，同时为用户提供了一些 Templater 的使用例子 [每日笔记、IMDB 和日志](https://shbgm.ca/blog/obsidian/O__O+Templater/O__O+2022+Talk)。

# Obsidian 更新

现在，Obsidian 官方宣布 Obsidian  结束了  Beta 测试状态！同时 [Obsidian 1.0](https://forum.obsidian.md/t/obsidian-release-v1-0-0/44873) 上了 HackerNews 以及 Product Hunt 。它同时还在 Reddit，Discord 以及推特都官宣了，在这些底下的一些评论和关于官方的讨论都相当有趣。👀

此外，从官方内置的更新日志介绍了 Obsidian 1.0 带来的非常大的重新设计以及标签页的介绍，现在你可以将页面堆起来，类 Andy Mode 或者前 Sliding Panes 插件所实现的方案。由于这个重新设计非常大以至于和之前的一些插件主题不是很兼容，所以一开始体验不会很好，但开发说过 1.0 意味着 API 将会趋向于稳定，希望这应该是很长一段时间内最后一次大的突破性更新了。

同时下述的是来自 Nicole van der Hoeven 的 [更新相关推特](https://t.co/BVKPgGLgu1) 和在 Reddit 发生的 [关于文件标题的变化是怎么影响自己的讨论](https://www.reddit.com/r/ObsidianMD/comments/y3udh4/good_morning_to_everyone_else_who_is_spending/)。

# 插件新闻

## 新上架的插件

**注意，这里的插件已经被代码审核，而现在在插件市场可以下载了**。如果你想知道相关的全部列表，可以在这里查看 [plugin stats page](https://obsidian-plugin-stats.vercel.app/new)。

- [Sakana Widget](https://github.com/Quorafind/obsidian-sakana-widget)  是来自 `@Boninall`  开发的 Obsidian 石蒜挂件的插件。
- [Table Generator](https://github.com/Quorafind/Obsidian-Table-Generator)  是来自 `@Boninall`  开发的表格生成面板插件。
- [Min Width](https://github.com/doitian/obsidian-min-width)  是来自  `@doitian`  开发的限制每个页面最小宽度的插件。
- [Custom File Explorer sorting](https://github.com/SebastianMC/obsidian-custom-sort)  是来自  `@SebastianMC`  开发的允许自定义文件浏览器中的文件排序，手动拖动或自动排序或编程实现更多自定义排序的插件。

## 正在审核的插件

**也不是所有的插件都会立马上架插件市场，因为它们需要先经过代码审核。你可以利用 [Beta Reviewer's Auto-update Tool](https://github.com/TfTHacker/obsidian42-brat) 来手动下载那些还没上架的插件。当然这也意味着他们还不够稳定和安全，因为它们还没被代码审核过**

- [Projects](https://github.com/marcusolsson/obsidian-projects)  是来自 `@marcusolsson`  开发的在 Obsidian 中实现更进一步的项目管理的插件。它允许用户可以创建一个基于文件夹或者基于 Dataview 的数据表同时提供了三种初始视图，包括表格、看板以及日历；你可以给每个 projects 创建一个模板。它非常美好，甚至让我产生了在工作中使用 Obsidian 的冲动。同时插件的开发者在 [Discord](https://discord.com/channels/686053708261228577/1022167089345216522/1029042785078235187) 中说明了他为什么想要写这个插件，以及他打算提供 API 来让更多的视图可以加入进来。
    - 批注：这个插件的可用性更多体现在无标记符，打开即用。
- [Colorful Tag](https://github.com/rien7/obsidian-colorful-tag)  是来自  `@rien7` 开发的让你的标签更容易被美化的插件。
- [Obsidian ava](https://github.com/louis030195/obsidian-ava)  是来自  `@louis030195`  开发的在 Obsidian 中使用 OpenAI API 和 Stable Diffusion 来基于文本生成图片的插件。
- [Capitalize My Titles](https://github.com/joss-enet/obsidian-capitalize-my-titles)  是来自  `@joss-enet`  开发的自动大写你的标题的插件。

## 已上架插件的更新

如果你想知道相关的全部插件更新列表，可以在这里查看 [plugin stats page](https://obsidian-plugin-stats.vercel.app/updates)。

- Tasks 插件 1.5.1 版本优化了计算下一次的日期的算法，包括月度以及年度循环任务的体验会得到比较大的提升。想知道怎么用，可以看一下它们的文档：[detailed documentation](https://obsidian-tasks-group.github.io/obsidian-tasks/getting-started/recurring-tasks/#how-the-new-date-is-calculated-repeating-monthly).
- CardBoard 插件（提供了一个全局的任务 Kanban ，基于库的所有任务的索引）更新了，现在你可以用 css 片段来优化面板，以及现在你在 Kanban 中使用的标签会被隐藏，同时筛选器也得到了比较大的增强。
- Metadata Menu 现在可以基于 Dataview query 来创建一个可选范围列表来让你选择元数据内容。
- Floating Table Of Contents 现在可以利用 style settings 插件进行样式编辑。

## Beta 插件

注意，这类插件还没有提交官方审核，或者正在进行测试

- Omnisearch 现在可以索引 pdf 了，意味着你可以在 Obsidian 里面直接检索 pdf 的内容。
- Longform 2.0（一款写作插件）现在修复了一些大 Bug，而且优化了样式外表，采用了 1.0 的样式系统。如果你正在使用 BRAT 测试这个插件，你需要手动去除这个插件并且重新添加这个插件，因为它的版本号没有发生变化。

## 主题

- [Obsidianite](https://github.com/bennyxguo/Obsidian-Obsidianite/releases/tag/v2.0.0)  支持了所见即所得模式。

## 教程

- 这里有一个非常详细的关于 [在 Obsidian 中标签是怎么用的](https://medium.com/@noteapps/my-obsidian-tags-are-mine-all-mine-802e4b24682c) 文章。同时，还有一篇由 Richard Carter 写的 [解释一个书籍研究系统的标签运行系统的文章](http://richardcarter.com/sidelines/my-notes-tagsonomy/)，同时他也写了一篇很酷的关于笔记系统的文章：[Charles Darwin's note taking system](http://richardcarter.com/sidelines/charles-darwins-note-making-system/)。
- 这个视频介绍了一个从文献笔记中构建概念笔记的工作： <https://www.youtube.com/watch?v=m6uIoQIKLA4> ，他和我的工作流程非常相似，我也写了一篇很详细的文章来描述我的工作流如果你想要了解它的内容，你可以从这个链接阅读 <https://www.obsidianroundup.org/the-konik-method-for-making-notes/>
- 这里是关于选择多个 Obsidian 仓库或者单个 Obsidian 仓库的想法： <https://medium.com/@noteapps/multiple-obsidian-vaults-oh-my-370b5f007e6e> 。
- 这里是关于怎么利用 Obsidian 来追踪人和联系信息： <https://medium.com/@noteapps/keeping-track-of-people-and-connections-in-obsidian-cfd6339b50c> ，相对应的还有在 twitter 上的讨论： <https://twitter.com/NoteApps/status/1579134644687364097> 。
- 这里是关于怎么利用 Obsidian 来创建技术文档的方案： <https://www.youtube.com/watch?v=cBzc5r-FNW0> 。

## 示例

- 这里是一个使用 Omnisearch 插件的示例： <https://preslav.me/2022/05/31/omnisearch-hidden-gem-for-discovering-content-in-obsidian/>
- 这里是一个使用 Obsidian 构建一个适用于生物多样性（Biodiversity）学者的工作配置： <https://twitter.com/nickynicolson/status/1579114497385828353>
- 此外还有一个关于 Obsidian 用户都是怎么用 Obsidian 来工作的讨论： <https://www.reddit.com/r/ObsidianMD/comments/y0ecbo/how_do_you_use_obsidian_for_work/> 。
- 还有 Leah 在 Discord 上分享了她用 Kanban 来计划假日美餐的方案： <https://discord.com/channels/686053708261228577/744933215063638183/1028450671252480011>

## 辅助工具

- 这里有一个 Google 插件来方便你在浏览器中裁剪内容到 Obsidian 中，这个依赖于在 Obsidian 的 Local REST API 插件： <https://chrome.google.com/webstore/detail/obsidian-web/edoacekkjanmingkbkgjndndibhkegad>
- nb 是一个命令行工具，支持你收藏、裁剪以及记笔记的知识库应用，同时也可以很好地兼容 Obsidian ： <https://xwmx.github.io/nb/>

以上内容来自于 [Eleanor Konik 的 Roundup 2022-10-15 篇](https://www.obsidianroundup.org/2022-10-15/)。已获得相关授权，在原文的基础上删减或增添了内容，如有重大错漏，请大家斧正。
