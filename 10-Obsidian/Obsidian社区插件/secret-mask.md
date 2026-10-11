---
uid: 1791709369838000
title: 'Obsidian 插件：Secret Mask'
tags: ['安全与隐私', '编辑工具', '效率工具', 'obsidian插件']
description: 'Mask the middle of sensitive values (phone numbers, SDK keys, etc). Shows the full value on hover and copy. - This plugin has not been manually reviewed by Obsidian staff.'
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：Secret Mask

> [!Note] 插件名片
> - 插件名称：Secret Mask
> - 插件作者：jie.chen
> - 插件说明：Mask the middle of sensitive values (phone numbers, SDK keys, etc). Shows the full value on hover and copy. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '编辑工具', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/chenjieya/secret-mask)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?secret-mask)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/chenjieya/secret-mask/master/README.md)



## 概述

**主要功能**
Secret Mask 是一款 Obsidian 插件，用于自动隐藏敏感信息（如手机号、API 密钥、SDK ID）的中间部分。它通过特定的前缀标记识别敏感值，在显示时进行掩码处理，但保留完整数据以便使用。

**适用场景**
适用于笔记中包含敏感凭证、个人身份信息或测试数据，且需要在阅读时保护隐私，同时在编辑或复制时获取完整值的场景。

**核心特色**
1. **智能掩码**：默认显示前3位和后4位，中间用星号代替；短于阈值的值原样显示。
2. **交互友好**：鼠标悬停即可在提示框中查看完整值；复制操作直接生成纯文本完整值，无 Markdown 格式干扰。
3. **灵活配置**：用户可自定义掩码字符、前后保留位数。
4. **编辑兼容**：在实时预览模式下，光标移入值内即恢复源码显示，方便直接编辑。

**使用建议**
在行内代码（反引号）中为敏感值添加 `sdk:` 前缀（如 `` `sdk:12345678` ``）。建议根据实际数据长度调整“前缀位数”和“后缀位数”设置，确保掩码效果符合预期。注意该插件未经 Obsidian 官方人工审核，使用前请自行评估安全性。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


