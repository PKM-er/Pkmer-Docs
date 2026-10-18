---
uid: 1780392511615000
title: 'Obsidian 插件：OpenCode'
tags: ['第三方工具集成', '编程与脚本', '效率工具', 'obsidian插件']
description: '在 Obsidian 中运行 OpenCode CLI，引用笔记作为上下文，浏览、恢复历史对话并导出为 Markdown。'
author: krisspy
type: auto
draft: false
editable: false
modified: 20261008000000
---

# Obsidian 插件：OpenCode

> [!Note] 插件名片
> - 插件名称：OpenCode
> - 插件作者：krisspy
> - 插件说明：在 Obsidian 中运行 OpenCode CLI，引用笔记作为上下文，浏览、恢复历史对话并导出为 Markdown。
> - 插件分类：['第三方工具集成', '编程与脚本', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/kriss-spy/obsidian-opencode)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?opencode)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/kriss-spy/obsidian-opencode/main/README.md)

## 概述

OpenCode 将 OpenCode CLI 嵌入 Obsidian，让你在同一个工作区中查看笔记、与 AI 协作并管理对话。终端默认以当前笔记库的根目录为工作目录，方便 OpenCode 访问笔记和项目文件。

适合围绕笔记开展 AI 辅助工作、处理库内代码，以及保存和复用对话记录的用户。

### 主要功能

- **内嵌终端**：直接运行 OpenCode CLI，可与笔记并排使用，也可在完整编辑器标签页中使用 OpenCode 2 的多会话界面。
- **拖拽上下文**：将文件列表中的笔记或文件夹拖入终端。笔记会转换为文件行引用，文件夹会插入相对于笔记库的路径；支持含空格或中文的名称，不会自动发送。
- **引用当前行或选区**：通过命令将当前笔记的光标所在行或选中行添加到终端输入草稿，便于针对具体内容提问。
- **会话管理**：浏览带时间戳的历史会话，预览消息、Token 用量和模型信息，一键恢复对话，或将完整对话导出为库内 Markdown 笔记。
- **终端链接**：点击终端输出中的网页地址或 Markdown 笔记路径即可打开；笔记链接支持定位到行、列。OpenCode 接管鼠标输入时，需按住 Ctrl/Cmd 点击。
- **灵活配置**：支持配置 OpenCode 路径、默认 CLI 参数、当前笔记库的环境变量及终端外观。

### 安装与使用

使用前需安装并配置好 OpenCode CLI。

1. 在 Obsidian 的「设置 → 第三方插件」中搜索 **OpenCode**，安装并启用。
2. 打开命令面板，执行 `OpenCode: Open Terminal` 启动终端。
3. 执行 `OpenCode: Open conversations` 浏览、恢复或导出历史对话，也可从面板顶部新建会话。
4. 在 Markdown 笔记中执行 `OpenCode: Add active line or selection to terminal`，将当前行或选区加入终端草稿。使用前需确保终端已经启动。
5. 执行 `OpenCode: Close terminal` 关闭终端，默认快捷键为 `Ctrl+Shift+W`，可在 Obsidian 快捷键设置中修改。

OpenCode 路径留空时，插件会自动检测兼容的安装。也可填写 `opencode`、`opencode2` 或可执行文件路径；Shell 别名不能直接作为启动路径。

### 平台支持

- **Linux**：作者日常使用稳定，已在 Manjaro、Ubuntu 和 Fedora 上测试，尚未覆盖所有发行版。
- **Windows**：Beta 支持，要求 Windows 10 1809 或更新版本，并确保 Node.js 已加入 `PATH`。
- **macOS**：实验性支持。
- **WSL2 / X410**：支持通过 X410 运行 Linux 版 Obsidian，配合正式版 OpenCode V2 使用。支持 Windows 剪贴板文本和图片交互；WSLg 不在当前支持范围内。

### 扩展搭配

README 还介绍了几种可按需搭配的工具：

- [opencode-latex](https://github.com/kriss-spy/opencode-latex)：为 OpenCode 补充 LaTeX 渲染。
- [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) 和 [作者的 Obsidian Skills](https://github.com/kriss-spy/obsidian-skills)：为 AI Agent 提供 Obsidian 相关技能。
- [frontmatter-templater](https://github.com/kriss-spy/frontmatter-templater)：在文件夹笔记中定义模板，便于 OpenCode 探索文件夹时发现并使用。

### 使用提示

超大或复杂会话可能无法正常预览或加载；OpenCode V2 粘贴大图片时也可能遇到上游限制。部分 OpenCode 快捷键会与 Obsidian 冲突，可使用 OpenCode 的前导键组合操作。

> [!help]
> 如果您有好的想法，欢迎提交 PR、在项目中反馈问题，或在文末留言。

---
