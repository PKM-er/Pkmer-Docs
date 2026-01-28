---
uid: 8086
title: Obsidian+QwenCode：打造你的本地AI知识库+NotebookLM
tags: [obsidian]
description: Obsidian+QwenCode：打造你的本地AI知识库+NotebookLM
author: joeytoday
type: other
draft: false
editable: false
modified: 20260128135145
forum_url: https://forum.pkmer.net/t/7273
---

# Obsidian+QwenCode：打造你的本地AI知识库+NotebookLM

> [!INFO] 本文档由 PKMer 论坛导入  
> - 作者: joeytoday
> - 原始链接: [Obsidian+QwenCode：打造你的本地AI知识库+NotebookLM](https://forum.pkmer.net/t/7273)

---


> [!note] 本文内容速览
>
> 1.  **本地知识库与 AI 的无缝结合**：通过 Agent Client 插件，可以在 Obsidian 内直接与 Qwen Code 对话，利用 AI 分析、整理和关联本地笔记，实现知识的动态生长。
> 2.  **AI 作为思考的催化剂**：AI 不仅是信息检索工具，更是帮助我们进行批判性思考、发现知识盲点、拓展知识边界的伙伴，促进深度自我认知。
> 3.  **提升知识管理效率**：Qwen Code 可以自动化处理笔记格式化、内容生成、待办整理等繁琐任务，从重复劳动中解放出来，专注于思考和创造。

> [!tip] 本文摘录
> 
> -  AI 是人类最好的镜像，我们可以在与 AI 的对话中重新认识自己。
> - 知识管理的核心，从来不是静态的记录，而是保持记录的习惯，让自己的知识能够积累下来，最终成为未来的资产。
> - AI 是助手，而不是敌人，我们要学会利用 AI 的知识辅助我们进行思考，并赋予自己全新的意义。

最近发现一个插件「Agent Client」，可以在 Obsidian 中接入 Claude Code、Codex、Qwen Code 等 AI Agent 代理，直接在侧边栏进行对话，这种方式让我可以把自己的本地 Obsidian 知识库与 AI 无缝结合在一起，也不需要另开窗口，直接在应用内就可以开始使用。于是我开始尝试：

- 用 AI 帮助我整理我的读书笔记，实践卡片笔记法
- 结合多本书笔记，产生新的思考，让知识流动起来
- 根据日记分析我的思考与行动，以及我的盲点，AI 真的是最好的自我观察者
- 根据我已读书单，分析我阅读不足的领域，并推荐书单，让自己的阅读更全面
- 让 AI 根据我的待办事项，整理出我的优先任务，进一步帮我规划下一步的行动

## 小实践：根据已有笔记梳理卡片笔记

卡片笔记法一直是知识管理领域经久不衰的方法，我的知识库中有大量读书笔记，我希望 **AI 能直接根据我的摘抄，帮我梳理成卡片笔记**，于是我在侧边栏引用我的笔记与 Qwen Code 进行对话：

| 提问                | 回答                  |
| ----------------- | ------------------- |
| ![](https://cdn.pkmer.cn/original/1X/c199632220164757c871e1b4e489f80245fb33b0.jpeg) | ![](https://cdn.pkmer.cn/original/1X/f16ed1dd66adbd7ebc35b8430bb5a6a58a847002.jpeg) |

生成的卡片笔记内容我很满意，于是我**让 Qwen Code 直接帮我创建新文件并写入内容**，一篇新的《公正》卡片笔记内容就诞生了，而**我只需要根据这个内容，重新了解我的笔记，也可以直接在之后需要写作的内容中引用这些笔记内容**，不仅可以生成一篇文档，你还可以让 Qwen Code 创建文件夹，把这些内容都拆成更小的笔记文件。

| 提问                  | 回答                  |
| ------------------- | ------------------- |
| ![](https://cdn.pkmer.cn/original/1X/1ca9397e5d00a9ed769deae6cf0de65d3594f1b2.jpeg) | ![](https://cdn.pkmer.cn/original/1X/299ebdb8de5721cdafcd4824faa65e555bbc5435.jpeg) |

进一步关联自己的笔记和知识，知识不仅需要记录，还需要互相关联与生长，于是我直接**让 Qwen Code 分析我读过的三本书的笔记，找出它们之间相关和相悖的点都有哪些**？它最后也给我提出了非常具有思考的问题。

| 提问                  | 回答                  |
| ------------------- | ------------------- |
| ![](https://cdn.pkmer.cn/original/1X/f16d2c5b8904b2d52d52a388991135b33e568b21.jpeg) | ![](https://cdn.pkmer.cn/original/1X/b21d96d69fc73a8eb95d8396db34401834670c37.jpeg) |

AI 的潜力是巨大的，在于它有着相比较个人来说「无止尽」的知识，**跟 AI 对话就像是跟一个巨大的知识库对话**，它能帮你发现新的关联与观点，人类也是通过对话学习的，与 AI 对话的过程，也是帮我我们思考自身的过程，最重要的是，你**要学会如何使用你的智慧，向 AI 提问**。AI 是助手，而不是敌人，我们要学会利用 AI 的知识辅助我们进行思考，并赋予自己全新的意义。

做完了批判性思考，我还希望 AI 能够**衍生给我推荐一些我可以进一步了解的书单**，我让 Qwen Code 扫描我的 Books 文件夹，找出我与当前笔记相关的领域与书籍，并推荐书单。

| 提问                                                        | 回答                                                        |
| --------------------------------------------------------- | --------------------------------------------------------- |
| ![](https://cdn.pkmer.cn/original/1X/223f5e428ec79881fb5f14d532c8cc3730e6b91b.jpeg) | ![](https://cdn.pkmer.cn/original/1X/b66cfc585107eda09fffcba7441b780472459674.jpeg) |

对话结束了，那么总结一下本次的对话精华吧，**想分享？也直接让 Qwen Code 进行总结，最后可以直接导出为图片**，进行分享。

![](https://cdn.pkmer.cn/original/1X/760651dac8c1da3a52bcdfff99d2552c1db66622.jpeg)

最终分享内容：

<img src="upload://bx9q8Q0qxD7xDWF5EbhEhiUaRd5.png" style="width: 40%">

==知识管理的核心，从来不是静态的记录，而是保持记录的习惯，让自己的知识能够积累下来，最终成为未来的资产。==

## Obsidian + Qwen Code 还可以做什么？

### 笔记偷懒小助手：根据摘抄生成结构化读书笔记

导入微信读书的笔记，直接让 Qwen Code 梳理成有结构的读书笔记，自己只需要阅读完整的读书笔记就好。

**我的用法**：直接复制我在微信读书的划线内容，让 Qwen Code 总结成读书笔记，之后想要回顾或者查阅的时候，直接去已经整理好的笔记。

![](https://cdn.pkmer.cn/original/1X/b2688f0b644877ad62df471d94997ca44a62dad1.jpeg)

### 专属你的第二大脑：与整个知识库进行对话、搜索

直接与整个知识库进行对话，察觉自己最近的关注点，完成的事项以及必要的反思与洞察，这是你的本地第二大脑！

根据日记直接问 AI，我有什么盲点？古希腊语“认识你自己”，AI 就是对于自己最好的镜像人物。

**我的用法**：

```
根据我的知识库内容，分析： 
1. 我最近半个月的活动，包括我阅读的书和电影，我计划看什么等 
2. 我本周的日记主要在想什么，可以总结我的核心想法，以及也可以评判一下我的思考中的盲点 
3. 根据我的post文件夹，分析出我喜欢写什么样的内容，我的文字风格是什么样的？ 
4. 根据以上分析的内容，以朋友的身份给我写一段话。
```

它分析了我最近的日记文件，这段写给我的话，我都要感动了 🥹：

![](https://cdn.pkmer.cn/original/1X/58813dc3ff0b1c8deaea3804b7cf1343de462961.jpeg)

【演示视频👇】

![](https://img.joeytoday.com/2026/exp04-ai-second-brain.gif)

### 探险好朋友：打破 - 拓展自己的知识边界

你还可以根据自己的阅读记录，要求 Qwen Code 提供你现在一直没有关注的领域的书单、影单。

**我的用法**：我会直接问，根据我的 Books 文件夹，分析这些书籍的领域、类型和标签，你觉得我有哪些领域的知识是比较欠缺的，列出这些领域，每个领域推荐 3 本书籍并给出推荐理由。

最终它会给出分析后我涉猎比较少的领域，并推荐相应的书籍👇

![](https://cdn.pkmer.cn/original/1X/6857a1c9873bb9ba96e1b57d4c779f6240c73217.jpeg)

【演示视频👇】

![](https://img.joeytoday.com/2026/exp05-reference-books.gif)

### P 人助理：待办事项整理

让 Qwen Code 梳理所有待办事项并排出今日最需要优先处理的任务，同时排出对于个人来说最重要的事项。

**我的用法**：梳理出我所有未完成的待办事项，并按照截止日期整理给我，列出最重要的 3 个任务。未待办事项是：- [ ] 任务。

![](https://cdn.pkmer.cn/original/1X/2225d31b40d5a84a9897cd9cd05f0d8252519998.jpeg)

【演示视频👇】

![](https://img.joeytoday.com/2026/exp06-tasks-list.gif)

## 如何使用？

我选择了阿里百炼 API 和 Qwen Code 的组合，原因主要是：

1. **免费**。百炼 API+Qwen Code **每天 2000 次免费**，以我的使用程度，大概不需要花钱。
2. **协同**。百炼与 Qwen Code 都是阿里旗下的产品，本身的协同性很好，省去一些可能不兼容的报错。
3. **质量**。Qwen Code 本身包括 Coder（也可以写内容）和 vision（视觉模型）。
4. **完整**。百炼上的 Qwen 系列模型完整，从编程、思考、绘图都有，效果整体都蛮不错，我也不追求专业的学术任务，已经非常足够我使用。

### 1. 安装 Qwen Code

1. 在电脑上搜索「终端」，打开，进入你的 Obsidian 仓库目录，输入 `cd` 后把这个文件夹拖动到终端，或者右键你的仓库文件夹，选择「在终端打开」。
2. 输入命令安装 Qwen Code：`npm install -g @qwen-code/qwen-code@latest`
3. 输入 `qwen` 启动，选择 Qwen OAth 认证。

【演示视频👇】

![](https://img.joeytoday.com/2026/guide01-install.gif)

### 2. 获取百炼 API

1. 进入百炼平台： https://bailian.console.aliyun.com/cn-beijing/?tab=model#/model-market
2. 进入「模型用量」，打开「免费额度用完即停」
3. 进入密钥管理，新建 API 并复制 `sk-xxxxxxxxx` 密钥。

![](https://cdn.pkmer.cn/original/1X/44f5b330061c956304824485e9badf2e5988d5d6.jpeg)

### 3. 安装插件并配置

官方安装指南： https://github.com/RAIT-09/obsidian-agent-client?tab=readme-ov-file#-installation

1. 打开 Obsidian 设置，进入第三方插件搜索「BRAT」
2. 进入「BRAT」插件，添加「Agnet Client」插件，添加之后就能在侧边看到了。
![](https://cdn.pkmer.cn/original/1X/fa0d40348330630dca4c226b1ac9a6669db4f878.jpeg)

3. 安装后打开「Agent Clien」插件设置，设置如下

![](https://cdn.pkmer.cn/original/1X/63b46559a35cd604bdeffe2d87f8c33809206215.jpeg)

4. 打开命令
![](https://cdn.pkmer.cn/original/1X/239c1855f258fabae8c596600aa290e2a30e3c15.png)

5. 点击右上角，选择 Qwen Code 就好啦，开始对话吧

<img src="upload://ikzk3quzd16WPEkZlRj9zMAHdmw.png" style="width:50%">

## 参考资料

- Qwen Code 官方文档： https://qwenlm.github.io/qwen-code-docs/zh/users/overview/
- Agent Client 插件文档： https://github.com/RAIT-09/obsidian-agent-client?tab=readme-ov-file#-installation
- 百炼 API 文档： https://bailian.console.aliyun.com/cn-beijing/?tab=api#/api

> [!note] 声明
> 
> 本内容完全由作者撰写，**无任何 AI 辅助创作**，内容仅代表创作者个人观点。
