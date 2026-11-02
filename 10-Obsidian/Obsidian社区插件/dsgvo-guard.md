---
uid: 1793625612337001
title: "Obsidian 插件：DSGVO Guard"
tags: ["安全与隐私", "数据处理", "效率工具", "obsidian插件"]
description: "Find personal data such as IBANs, tax IDs and API keys in your vault, redact it with a single undo, and block risky Git commits. Works offline. - This plugin has not been manually reviewed by Obsidian staff."
author: AI
type: auto
draft: false
editable: false
modified: 20240101000000
---

# Obsidian 插件：DSGVO Guard

> [!Note] 插件名片
> - 插件名称：DSGVO Guard
> - 插件作者：thor040175
> - 插件说明：Find personal data such as IBANs, tax IDs and API keys in your vault, redact it with a single undo, and block risky Git commits. Works offline. - This plugin has not been manually reviewed by Obsidian staff.
> - 插件分类：['安全与隐私', '数据处理', '效率工具', 'obsidian插件']
> - 项目地址：[点我访问](https://github.com/thor040175/dsgvo-guard)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?dsgvo-guard)
> - 自述文件：[Readme](https://ghproxy.net/https://raw.githubusercontent.com/thor040175/dsgvo-guard/master/README.md)



## 概述

DSGVO Guard 旨在防止个人敏感数据意外泄露，通过本地离线扫描库中的 IBAN、税号、信用卡号及 API 密钥等。它基于德国及欧盟数据保护法规设计，利用模式匹配识别潜在风险，并在状态栏实时显示检测结果。核心功能包括一键遮蔽当前笔记中的敏感信息，以及通过 Git 钩子拦截包含真实数据的提交，确保数据在离开本地前被有效拦截。

典型场景包括整理财务笔记或技术文档时，防止银行账号或云服务密钥被误同步到云端。例如，当你准备将包含客户联系方式的笔记推送到远程仓库时，插件会自动检查暂存区，若发现高置信度的敏感数据则中止提交。此外，在编辑过程中，状态栏会即时提示当前笔记是否存在风险，点击即可定位到具体行，方便快速处理。

相比同类工具，DSGVO Guard 的特色在于其针对德国及欧盟特定数据格式的深度优化，如专门校验德国 IBAN 长度和税号算法。它提供“特殊类别”关键词提示功能，虽默认关闭，但可辅助识别健康、宗教等 GDPR 第九条敏感信息。所有操作均在本地完成，无网络请求，隐私安全性高。遮蔽操作支持单次撤销，且允许通过注释标记忽略特定行，灵活性较好。

使用前需注意，该插件仅支持桌面端，且 Git 拦截功能依赖 Node.js 环境。它无法阻止 Obsidian Sync 或 Publish 的上传，因此若未使用 Git 管理，状态栏仅作为警告存在。此外，模式匹配可能产生误报，尤其是低置信度项和特殊类别关键词。它不适合需要检测姓名或旧版身份证号的场景，也不适用于非 Git 仓库的强制数据阻断需求。建议先在测试库中验证效果，并定期备份以防遮蔽后无法恢复。


> [!help] 
> 这篇插件文章还没有人贡献，欢迎占坑！
> 如果您有好的想法欢迎提交PR或者文末留言。
> 

---


