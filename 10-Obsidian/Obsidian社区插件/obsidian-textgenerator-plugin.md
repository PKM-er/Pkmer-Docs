---
uid: 20230423222800
title: obsidian-textgenerator-plugin
description: 
author: windilycloud
type: other
draft: false
editable: false
modified: 20230429181107
---

# obsidian-textgenerator-plugin

> [!note] Text Generator
> 插件 ID：obsidian-textgenerator-plugin
> 插件作者：Noureddine Haouari
> 插件描述：使用 OpenAI 的模型进行文本生成
> 插件版本：0.3.3
> 插件源码地址：[obsidian-textgenerator-plugin](https://github.com/nhaouari/obsidian-textgenerator-plugin)
> 插件文档地址：[Text Generator Plugin Doc](https://text-gen.com/)

## 基本功能

该插件使用 OpenAI 的模型生成文本，包括 gpt3.5 和 gpt4 在内的近一百个文本模型，具体可供配置的选项如下：

1. 自定义请求：通过 frontmatter 的方式，自定义请求头
2. 自定义 api 参数：最大 token，Temperature，Frequency Penalty 等参数用于调节模型
3. 自定义 Prompt 模版：根据模版的 prompt 生成文本
4. 包含上下文：可以添加标题，frontmatter，heading，高亮，段落等为默认上下文，使得更方便的添加 Prompt 让模型更精确
5. 模版：根据模版内容生成文字
6. PDF 抽取：根据 PDF 内容生成文字
7. 网页抽取：根据网页内容中生成文字
8. Youtube 抽取：从 Youtube 视频中生成文字
9. 音频抽取：从音频文件中生成文字，包括 m4a，mp3，mp4，mpeg，mpga，wav，webm 格式文件
10. 社区模版：使用其他人分享的模版

## 用法

### 基本用法

1. 首先确保已有 OpenAi 的 api，获取方式通过 [OpenAI官网](https://beta.openai.com/signup/) 注册获得。前提条件是用的人少的科学上网方式以及一个国外接受手机验证码的方式。
2. 安装该插件
3. 安装后打开插件设置界面，填入 API Key，即可使用。其余配置可均为默认。
4. 在任意一行文本后按 `ctrl + j`，即可在后面自动生成文本。

![image.png](https://cdn.pkmer.cn/images/1f0831c86ab7dd8df5dcfcea39a62927_MD5.png)

### 上下文的选择

- 文档内容选择
	- 如果左键选中文本，则该文本即为发送给 gpt 的上下文
	- 如果打字光标前有文本，则该行文本即为发送给 gpt 的上下文
	- 如果打字光标前无文本，则整个文档都将发送给 gpt 作为上下文
	- 如果标题末尾添加 `*`，如 `## 这是一个标题*`，则该标题下的内容也将包含进上下文（续在设置里开启）
- 设置界面选择
	- 文档名称
	- frontmatter

### 工具命令

指 `ctrl + p` 调出命令面板可使用的命令：

1. 最大 token 设置：限制不能超出最大 token
2. 选择模型
3. 计算当前文档的 token 数

![image.png](https://cdn.pkmer.cn/images/dc609923f38591cab01d25e109d7c16a_MD5.png)

### 社区模版包

![image.png](https://cdn.pkmer.cn/images/af0466ab0787c9a3267eb4d4e40dd317_MD5.png)

通过调用 `Templates Packages Manager` 命令，打开并可安装社区的 prompt 模版包。

### 模版

通过 上述社区模版包安装，会自动安装下述模版：

![image.png](https://cdn.pkmer.cn/images/b473521b0381be0eba60003d30a8a623_MD5.png)

分别是：

- 生成大纲
- 生成标题
- 根据内容生成标签
- 转写内容
- 文本生成
- 积极和消极的回复邮件邮件
- 简写
- 头脑风暴
- 总结

通过模版包和自定义模版，基本能满足任何方式的 prompt 了