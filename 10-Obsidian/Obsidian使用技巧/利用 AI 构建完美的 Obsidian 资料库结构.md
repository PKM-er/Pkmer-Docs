---
uid: 20240829211902
title: 利用 AI 构建完美的 Obsidian 资料库结构
tags: [AI, Obsidian, folder, prompt, structure, script, directory, batch]
description: 
author: Victor
type: other
draft: false
editable: false
modified: 20240829212354
version: "1.0"
---

# 利用 AI 构建完美的 Obsidian 资料库结构

## 使用说明

Obsidian 是强大的知识管理工具，每个忙碌的人都想拥有一个完善的知识库。如何创建一个精致而完美的知识库结构，对浩如烟海的信息分门别类呢？我们可以借助 AI 来完成这个任务。

![6f6aa644b5a148477804e64eb777190d.png|400](https://cdn.pkmer.cn/images/202408292123695.png!pkmer)

本文使用的是 ChatGPT-4o 作为 AI 工具。当然你也可以选用国产的平替，例如 [文心一言](https://yiyan.baidu.com/) 或 [Kimi](https://kimi.moonshot.cn/)。

## 利用 ChatGPT 生成目录结构

Obsidian 的资料库映射到文件系统中的目录和文件。利用 Markdown 语法，可以清晰地描述文件系统的结构。在 ChatGPT 中输入以下提示词，能够生成一份高质量、内容全面的 Markdown 格式文件系统结构。

```text title:"AI 提示词 - 生成 Markdown" ln:false
我想用 Obsidian 做一个个人的资料库，请生成其中的内容分类目录。注意分类要一目了然，内容不要出现模糊、歧义、交叉、重复。请按以下格式输出：

---
# {index}. {category}

## {subcategory}

{description}
---

其中 {index} 是两位数字，{category} 是大类，{subcategory} 是小类，{description} 是一段 50-100 字的描述。输出中不要包含 --- 分隔符。
```

通过以上提示词，ChatGPT 将输出类似这样的内容：

```markdown title:"directory_struct.md" ln:false fold
# 01. 日记与笔记

## 每日记录

记录每天的生活、感悟和想法，形成连续的个人叙事，帮助进行日常反思与回顾。

## 每周总结

每周进行回顾与总结，归纳重要事件、经验教训，促进持续进步与自我提升。

## 月度反思

每月进行全面的反思与评估，回顾目标进展，调整未来规划。

## 灵感与想法

捕捉和整理瞬间的创意、灵感，作为未来项目、创作或决策的参考素材。

# 02. 学习与成长

## 读书笔记

系统整理书籍中的知识点和反思，形成结构化的阅读成果，便于后期复盘和深度理解。

## 课程笔记

记录参加课程的学习内容、要点和实践心得，帮助知识的有效吸收与运用。

## 技能学习

记录学习新技能的过程，包括学习资源、进展和心得，帮助持续跟踪成长轨迹。

## 学习计划与目标

设定学习目标与计划，并定期评估进展，确保学习路径清晰且成果可见。

# 03. 工作与项目

## 任务管理

整理每日、每周的工作任务，明确优先级与完成时间，提高工作效率。

## 项目计划

记录项目从计划、执行到收尾的全过程，确保信息透明和进展可控。

## 会议记录

记录会议要点、决策与待办事项，确保信息传达准确，便于后续跟进。

## 工作日志

记录日常工作的进展、问题与成果，帮助反思与总结工作表现。

# 04. 知识体系

## 编程与技术

系统整理编程与技术相关的知识、实践经验与创新动态，确保技能的不断更新。

## 设计与创意

记录设计理念、创意方法与实际案例，提升设计能力与创意思维。

## 管理与效率

收集与整理管理方法、效率工具与实践经验，帮助优化工作流程与团队协作。

## 行业研究

跟踪记录所在行业的前沿信息、趋势和创新，为决策和学习提供参考。

# 05. 工具与方法

## 生产力工具

记录常用工具的配置、使用方法与优化技巧，确保工具使用效率最大化。

## 时间管理

整理时间管理方法与实践技巧，帮助提升工作与生活的效率与质量。

## 思维导图

记录与整理使用思维导图的技巧与实践，帮助清晰组织思路与信息。

## 知识管理方法

系统整理知识管理的理论与工具，帮助构建高效的信息存储与查找体系。

# 06. 生活与兴趣

## 旅行计划

规划与记录旅行的行程、预算和体验，形成独特的旅行故事与记忆。

## 健康与健身

追踪个人健康数据、运动计划和饮食方案，形成全面的健康管理档案。

## 美食与食谱

记录和分享美食制作的过程、食谱与心得，丰富生活的多样性与乐趣。

## 兴趣爱好

系统记录兴趣爱好的发展过程、技能提升与作品创作，追求兴趣的深度探索。

# 07. 财务与投资

## 预算管理

详细记录日常收入与支出，帮助明确财务状况与资金流向。

## 投资记录

记录投资组合、策略分析和市场动态，确保财务目标实现的可持续性。

## 财务目标

设定并跟踪财务目标的实现进展，保证资金配置合理且有效。

## 消费分析

定期分析消费习惯与支出结构，优化资金分配与理财策略。

# 08. 人际关系

## 朋友与家人

记录与亲朋好友的交流互动、重要事件与感悟，增进情感联系。

## 社交活动

计划和总结社交活动的安排与效果，确保社交生活的丰富与平衡。

## 沟通技巧

整理与提升人际沟通技巧，帮助在不同场合中高效表达与理解他人。

## 人脉管理

记录个人的人际网络、联系情况与交流内容，便于维系和拓展人际关系。

# 09. 个人目标与规划

## 年度计划

制定年度目标并定期回顾，确保每年都有明确的成长与突破。

## 人生愿景

设定人生的长期愿景与目标，帮助明确发展方向与优先级。

## 短期与长期目标

分解并设定短期与长期目标，确保目标逐步达成且进展可控。

## 习惯养成

记录并跟踪习惯养成的计划与进展，帮助建立积极的行为模式。

# 10. 信息收集

## 收藏与推荐

收集整理有价值的文章、书籍和资源，形成个人化的推荐清单与资料库。

## 资讯与新闻

记录并跟踪个人关注领域的最新资讯、趋势与动态，确保信息更新及时。

## 待办与想法

整理日常待办事项与灵感想法，帮助提升执行力与创意实现。

## 研究与探索

针对特定主题深入收集资料与观点，形成系统的分析与研究成果。
```

其中一级标题前的编号使用两位数，以确保排序正确。

这个 Markdown 文件非常重要，稍后我们会多次使用它。

## 生成创建目录的脚本

有了 Markdown 格式的文件结构后，我们可以继续使用 ChatGPT，将其转换为自动创建文件夹的脚本：

```text title:"AI 提示词 - 创建目录结构" ln:false
我将在文件系统中创建 Obsidian 的目录结构。请针对以下大纲创建文件夹结构，请分别生成 macOS 和 Windows 中使用的脚本。

注意：不要改变一级标题和二级标题中的文本。

"""
# 01. 日记与笔记

## 日常记录

记录每天的生活、感悟和想法，形成连续的个人叙事，帮助进行日常反思与回顾。
……
```

ChatGPT 将返回 macOS 使用的 bash 脚本和 Windows 使用的批处理脚本：

```bash title:"create_directory_struct.sh" fold
#!/bin/bash

# Root directory
root_dir="Obsidian_Vault"

# Create main categories
mkdir -p "$root_dir"/{01."日记与笔记",02."学习与成长",03."工作与项目",04."知识体系",05."工具与方法",06."生活与兴趣",07."财务与投资",08."人际关系",09."个人目标与规划",10."信息收集"}

# Create subcategories for each main category
mkdir -p "$root_dir"/01."日记与笔记"/{每日记录,每周总结,月度反思,灵感与想法}
mkdir -p "$root_dir"/02."学习与成长"/{读书笔记,课程笔记,技能学习,学习计划与目标}
mkdir -p "$root_dir"/03."工作与项目"/{任务管理,项目计划,会议记录,工作日志}
mkdir -p "$root_dir"/04."知识体系"/{编程与技术,设计与创意,管理与效率,行业研究}
mkdir -p "$root_dir"/05."工具与方法"/{生产力工具,时间管理,思维导图,知识管理方法}
mkdir -p "$root_dir"/06."生活与兴趣"/{旅行计划,健康与健身,美食与食谱,兴趣爱好}
mkdir -p "$root_dir"/07."财务与投资"/{预算管理,投资记录,财务目标,消费分析}
mkdir -p "$root_dir"/08."人际关系"/{朋友与家人,社交活动,沟通技巧,人脉管理}
mkdir -p "$root_dir"/09."个人目标与规划"/{年度计划,人生愿景,短期与长期目标,习惯养成}
mkdir -p "$root_dir"/10."信息收集"/{收藏与推荐,资讯与新闻,待办与想法,研究与探索}

echo "Obsidian directory structure created successfully in $root_dir"
```

```batch title:"create_directory_struct.cmd" fold
@echo off

:: Root directory
set "root_dir=Obsidian_Vault"

:: Create main categories
mkdir "%root_dir%\01.日记与笔记"
mkdir "%root_dir%\02.学习与成长"
mkdir "%root_dir%\03.工作与项目"
mkdir "%root_dir%\04.知识体系"
mkdir "%root_dir%\05.工具与方法"
mkdir "%root_dir%\06.生活与兴趣"
mkdir "%root_dir%\07.财务与投资"
mkdir "%root_dir%\08.人际关系"
mkdir "%root_dir%\09.个人目标与规划"
mkdir "%root_dir%\10.信息收集"

:: Create subcategories for each main category
mkdir "%root_dir%\01.日记与笔记\每日记录"
mkdir "%root_dir%\01.日记与笔记\每周总结"
mkdir "%root_dir%\01.日记与笔记\月度反思"
mkdir "%root_dir%\01.日记与笔记\灵感与想法"

mkdir "%root_dir%\02.学习与成长\读书笔记"
mkdir "%root_dir%\02.学习与成长\课程笔记"
mkdir "%root_dir%\02.学习与成长\技能学习"
mkdir "%root_dir%\02.学习与成长\学习计划与目标"

mkdir "%root_dir%\03.工作与项目\任务管理"
mkdir "%root_dir%\03.工作与项目\项目计划"
mkdir "%root_dir%\03.工作与项目\会议记录"
mkdir "%root_dir%\03.工作与项目\工作日志"

mkdir "%root_dir%\04.知识体系\编程与技术"
mkdir "%root_dir%\04.知识体系\设计与创意"
mkdir "%root_dir%\04.知识体系\管理与效率"
mkdir "%root_dir%\04.知识体系\行业研究"

mkdir "%root_dir%\05.工具与方法\生产力工具"
mkdir "%root_dir%\05.工具与方法\时间管理"
mkdir "%root_dir%\05.工具与方法\思维导图"
mkdir "%root_dir%\05.工具与方法\知识管理方法"

mkdir "%root_dir%\06.生活与兴趣\旅行计划"
mkdir "%root_dir%\06.生活与兴趣\健康与健身"
mkdir "%root_dir%\06.生活与兴趣\美食与食谱"
mkdir "%root_dir%\06.生活与兴趣\兴趣爱好"

mkdir "%root_dir%\07.财务与投资\预算管理"
mkdir "%root_dir%\07.财务与投资\投资记录"
mkdir "%root_dir%\07.财务与投资\财务目标"
mkdir "%root_dir%\07.财务与投资\消费分析"

mkdir "%root_dir%\08.人际关系\朋友与家人"
mkdir "%root_dir%\08.人际关系\社交活动"
mkdir "%root_dir%\08.人际关系\沟通技巧"
mkdir "%root_dir%\08.人际关系\人脉管理"

mkdir "%root_dir%\09.个人目标与规划\年度计划"
mkdir "%root_dir%\09.个人目标与规划\人生愿景"
mkdir "%root_dir%\09.个人目标与规划\短期与长期目标"
mkdir "%root_dir%\09.个人目标与规划\习惯养成"

mkdir "%root_dir%\10.信息收集\收藏与推荐"
mkdir "%root_dir%\10.信息收集\资讯与新闻"
mkdir "%root_dir%\10.信息收集\待办与想法"
mkdir "%root_dir%\10.信息收集\研究与探索"

echo Obsidian directory structure created successfully in %root_dir%
```

在 Obsidian 的资料库目录中运行以上脚本之后，完整的目录结构就创建好了。

## 从目录结构生成 Markdown 的脚本

在日常使用中，如果资料库的目录结构发生变化，我们可以通过脚本读取目录结构，然后生成 Markdown 格式的文件。我们可以使用 ChatGPT 来创建这样的脚本：

```text title:"AI 提示词 - 读取目录结构，以 Markdown 的格式生成" ln:false unwrap:false
请生成一个 macOS 上的可执行脚本和一个 Windows 上的可执行脚本，以 markdown 的格式列出当前目录中的所有目录（用 heading 1 表示），以及下一级目录的名称（用 bullet list 表示）。目录名称之后不要添加 / 号。在 macOS 脚本中，注意用 "" 将代码中的目录名称包裹起来，以免出现 ambiguous redirect 的提示。
```

以下是 ChatGPT 返回的脚本：

```bash title:"list_directory_structure.sh" ln:true fold
#!/bin/bash

# 输出 markdown 文件
output_file="directories.md"
echo "" > $output_file

# 遍历当前目录中的所有目录
for dir in */; do
  # 去除目录名称末尾的 "/"
  dir_name="${dir%/}"
  
  # 判断是否为目录
  if [ -d "$dir_name" ]; then
    # 输出一级目录
    echo "# $dir_name" >> $output_file
    
    # 输出下一级目录的名称
    for sub_dir in "$dir_name"/*/; do
      sub_dir_name="${sub_dir%/}"
      if [ -d "$sub_dir_name" ]; then
        echo "- \"${sub_dir_name##*/}\"" >> $output_file
      fi
    done
    
    # 添加换行以分隔不同的目录
    echo "" >> $output_file
  fi
done

# 提示生成完成
echo "Markdown 文件已生成：$output_file"
```

```powershell title:"list_directory_structure.ps1" ln:true fold
# 定义输出文件
$outputFile = "directories.md"
"" > $outputFile

# 获取当前目录中的所有子目录
$directories = Get-ChildItem -Directory

foreach ($dir in $directories) {
    # 输出一级目录
    Add-Content -Path $outputFile -Value ("# " + $dir.Name)
    
    # 获取下一级子目录
    $subDirectories = Get-ChildItem -Path $dir.FullName -Directory
    
    foreach ($subDir in $subDirectories) {
        Add-Content -Path $outputFile -Value ("- `" + $subDir.Name + "`")
    }
    
    # 添加换行以分隔不同的目录
    Add-Content -Path $outputFile -Value ""
}

# 提示生成完成
Write-Host "Markdown 文件已生成：$outputFile"
```

运行上述脚本后，将获得 Markdown 格式的目录结构文件。无需小心翼翼地保持目录结构与 Markdown 的一致性。

## 将笔记放在最佳的文件夹中

有时候，我们可能会在复杂的目录结构中迷失方向。创建新笔记时，不确定应该将其存放在何处。这时，可以利用 ChatGPT 的建议来确定最合适的目标文件夹。

```text title:"AI 提示词 - 对整个目录结构做操作" ln:false fold unwrap:false
Reference:
"""
将 Markdown 的内容粘贴在这儿
"""

基于上述参考资料，我已创建了一个 Obsidian 知识库。现给定一篇文章 "XXX"，请清晰且详细地说明将其存放在知识库现有的哪个具体文件夹中最为合适，或者明确指出需要在知识库的哪个位置新建一个文件夹来存放，并充分阐述如此安排的合理理由。
```

## 批量找图标

在 Obsidian 中安装了 [Iconize](https://github.com/FlorianWoelki/obsidian-iconize) 插件之后，就可以在文件夹和笔记之前增加图标。

Iconize 支持多种图标库，为保证界面一致性，我们应统一使用一套图标。根据 Iconize 官方文档，后缀为 (LI) 的图标使用的是 lucide-icon 图标库，这看起来是个不错的选择。因此，我们可以依据这些信息来为 ChatGPT 提示词设置图标：

```text title:"AI prompt - 批量找图标" ln:false
你是一个熟悉 lucide-icons 图标库和语言的专家。 请分别找出以下概念的最佳 lucide-icon 图标。注意，标题也是概念，每个概念只能用一个图标表示，尽量不要重复，请忽略格式符号，请用表格形式显示。
```

| 概念    | 最佳 lucide-icon 图标 |
| ----- | ----------------- |
| 日记与笔记 | Edit-3            |
| 每日记录  | Calendar          |
| 每周总结  | Clipboard         |
| 月度反思  | Refresh-cw        |
| 灵感与想法 | Lightbulb         |
| ...   | ...               |

接下来，我们可以根据 ChatGPT 的建议，为每个文件夹和笔记设置相应的 Iconize 图标。

## 批量找图标并且批量设置

如果图标数量众多，还可以打开 Iconize 插件的配置文件 `.obsidian/plugins/obsidian-icon-folder/data.json`。各个文件夹的图标信息都存储在其中，它是一个 [Json](https://www.json.org/) 文件。我们手工为几个文件夹设置图标之后，用文本编辑器打开 `data.json`，可以看到其结构如下：

```json title:"data.json"
{
  //...
  "01. 日记与笔记": "LiBookText",
  "01. 日记与笔记/每日记录": "LiSun",
  "01. 日记与笔记/每周总结": "LiCalendar",
  "01. 日记与笔记/月度反思": "LiMoon",
  "01. 日记与笔记/灵感与想法": "LiLightbulb",
  
  "02. 学习与成长": "LiTrendingUp",
  "02. 学习与成长/读书笔记": "LiBookOpenText",
  //...
}
```

使用 ChatGPT 将上述 Markdown 格式转换为 Json 格式。请确保将上述目录结构中的 Markdown 文件内容粘贴到提示词中的正确位置：

```plaintext title:"AI Prompt - 自动生成文件夹图标配置文件" fold
你是一个熟悉 lucide-icons 图标库和语言的专家。我将给你一份 Markdown 文档，该文档代表文件系统的目录结构。Heading 1 代表一级目录，Heading 2 代表二级目录。请根据一级目录和二级目录找出最贴切的 lucide-icon 图标，图标请尽量不要重复。请按照如下 json 格式输出您的结果：

"""
{
  "{一级目录}: "Li{图标名}",
  "{一级目录}/{二级目录}: "Li{图标名}",
}
"""

以下是一个示例：

"""
{
  "01. 日记与笔记": "LiBookText",
  "01. 日记与笔记/灵感与想法": "LiLightbulb",
  "01. 日记与笔记/每日记录": "LiSun",
  "01. 日记与笔记/每周总结": "LiCalendar",
  "01. 日记与笔记/月度反思": "LiMoon",
  "02. 学习与成长": "LiTrendingUp",
  "02. 学习与成长/读书笔记": "LiBookOpenText",
  "02. 学习与成长/技能学习": "LiAward",
  "02. 学习与成长/课程笔记": "LiPenBox",
  "02. 学习与成长/学习计划与目标": "LiClipboardList",
}
"""

以下是代表目录结构的 Markdown 文档：

"""
// 在这里粘贴 Markdown 文档
"""
```

如果一切顺利，ChatGPT 可以生成与 `data.json` 格式相同的数据。将生成的结果粘贴到 `data.json` 的相应位置，然后重新启动 Obsidian，您将看到所有文件夹都已更新为新的图标。

## 发挥创造力

有了 `directory_struct.md` 这个 Markdown 文件后，我们可以发挥创造力，利用 AI 来完成多种任务。比如，我们可以：

- 根据一篇文章的新标题，让 AI 分析出它最适合放在哪个目录下。
- 编写一个脚本，将目录结构从中文转换为英文。
