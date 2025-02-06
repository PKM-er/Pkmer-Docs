---
uid: 20250206140221
title: Copilot 插件调用 deepseek 教程
tags: [Obsidian, Copilot, deepseek]
description: Copilot 插件调用 deepseek 教程
author: simple
type: other
draft: false
editable: false
modified: 20250206150202
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
	2. Base URL（如上图图片里的提示： <https://api.deepseek>,com/v1）
		- 经过测试：
		- "deepseek-chat“填入后可用（这个是V3模型），不用勾选 enable CORs 即可使用。R1模型名称是deepseek-reasoner（暂时不行）
	3.	apiKEY 获取
		- [登入 DeepSeek 开放平台](https://platform.deepseek.com/)创建（如下图）
	![image.png](https://cdn.pkmer.cn/images/20250206140915.png!pkmer)

至此配置结束。

> [!note] 提示
> - 如未能登录 DeepSeek 开放平台：<https://platform.deepseek.com/api_keys>
> - 建议切换登录方式，如手机号登入切换为微信登入。或者换个时间点或者过几天后登录

## 效果展示

可以在 copilot 插件放入侧边栏，使用 deepseek 进行对话和询问内容问题

![image.png](https://cdn.pkmer.cn/images/20250206140941.png!pkmer)

同理 你也可以用这套逻辑构建其他 如kimi等AI接口