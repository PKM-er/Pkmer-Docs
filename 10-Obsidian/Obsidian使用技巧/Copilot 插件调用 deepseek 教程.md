---
uid: 20250206140221
title: Copilot 插件调用 deepseek 教程
tags: [Obsidian, Copilot, deepseek]
description: Copilot 插件调用 deepseek 教程
author: simple
type: other
draft: false
editable: false
modified: 20250210214659
---

# Copilot 插件调用 deepseek 教程

## 简介

该文章简要介绍了在 Obsidian 中使用 Copilot 插件快捷调用 deepseek 的方法

## 准备

- 第一步：安装 copilot 插件，商店直接搜索安装，如果不能直接使用 Obsidian 第三方插件的同学，可以使用 [[pkmer]]

## 配置

![image.png](https://cdn.pkmer.cn/images/20250206140812.png!pkmer)

![image.png](https://cdn.pkmer.cn/images/20250206140825.png!pkmer)

- 设置 copilot：这里示范的是 OpemAI 的兼容版本所以 Provider 选择“OpenAI Format”
- 相关参数获得：
	1. model name（需要按照 api 公示的开发文档填入）如下图红框里的内容
	![image.png](https://cdn.pkmer.cn/images/20250206140842.png!pkmer)
		经过测试：
		"deepseek-chat“填入后可用（这个是V3模型），不用勾选 enable CORs 即可使用
		”deepseek-reasoner“填入后可用（这个是R1模型）（时灵时不灵，看它是否受到攻击
	2. Base URL（如上图图片里的提示： <https://api.deepseek>,com/v1）
	3. API key 获取
		- 登入 DeepSeek 开放平台创建（如下图）
	![image.png](https://cdn.pkmer.cn/images/20250206140915.png!pkmer)

至此配置结束。

## 效果展示

可以在 copilot 插件放入侧边栏，使用 deepseek 进行对话和询问内容问题

![image.png](https://cdn.pkmer.cn/images/20250206140941.png!pkmer)

ps：
如未能登入[DeepSeek 开放平台](https://platform.deepseek.com/api_keys)建议切换登入方式，如手机号登入切换为微信登入。或者换个时间点或者过几天后登入（因为最近它一直遭受攻击）

类比操作你可以添加kimi等AI，示例参数：
name：
“moonshot-v1-8k”: 它是一个长度为 8k 的模型，适用于生成短文本。
”moonshot-v1-32k“: 它是一个长度为 32k 的模型，适用于生成长文本。
“moonshot-v1-128k”: 它是一个长度为 128k 的模型，适用于生成超长文本
url：
https://api.moonshot.cn/v1
api：
通过月之暗面开放平台获得：https://platform.moonshot.cn/console/account（首次注册免费送15元）
正式使用时现在要勾选CORS如图↓

![144a421807afc8df7bc20a7a56ddf06.png](https://cdn.pkmer.cn/images/144a421807afc8df7bc20a7a56ddf06.png!pkmer)

![f6fc0c08bd5fe593682d357f28f300f.png](https://cdn.pkmer.cn/images/144a421807afc8df7bc20a7a56ddf06.png!pkmer)
