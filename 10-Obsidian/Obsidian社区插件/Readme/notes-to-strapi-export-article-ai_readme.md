---
uid: 2024042221415832
title: Obsidian 插件：【Readme】Strapi Exporter AI
tags: ['obsidian插件', 'readme']
description: Effortlessly export your notes to Strapi CMS with AI-powered handling and SEO optimization.
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Strapi Exporter AI

> [!Note] 插件名片
> - 插件名称：Strapi Exporter AI
> - 插件作者：Cinquin Andy
> - 插件说明：Effortlessly export your notes to Strapi CMS with AI-powered handling and SEO optimization.
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/CinquinAndy/notes-to-strapi-export-article-ai)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?notes-to-strapi-export-article-ai)

## 概述

Effortlessly export your notes to Strapi CMS with AI-powered handling and SEO optimization.

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/CinquinAndy/notes-to-strapi-export-article-ai/main/README.md)

---

## Readme(翻译）

下面是 [[notes-to-strapi-export-article-ai]] 插件的自述翻译

【机翻】

# 🚀 Strapi 导出器：让您的 Obsidian-to-Strapi 工作流更加强大

[![版本](https://img.shields.io/github/package-json/v/CinquinAndy/notes-to-strapi-export-article-ai)](https://github.com/CinquinAndy/notes-to-strapi-export-article-ai/releases)

[![许可证](https://img.shields.io/github/license/CinquinAndy/notes-to-strapi-export-article-ai)](https://github.com/CinquinAndy/notes-to-strapi-export-article-ai/blob/main/LICENSE)

[![赞助商](https://img.shields.io/badge/sponsor-CinquinAndy-purple)](https://github.com/sponsors/CinquinAndy)

Strapi 导出器是一个改变游戏规则的 Obsidian 插件，通过无缝地将您的笔记导出到 Strapi CMS，简化了您的内容创建流程。借助其基于人工智能的图像处理和 SEO 优化功能，您只需点击几下就可以将您的内容提升到一个新的水平。

## ✨ 特点

- 🗒️ 自动将笔记中的图片上传到 Strapi
- 🎨 使用人工智能为图片生成 SEO 友好的 alt 文本和标题
- 😎 根据您的笔记创建经过 SEO 优化的文章内容
- 🔧 自定义 Strapi 中文章字段的 JSON 模板
- ⚙️ 为 Strapi API URL、令牌和内容属性名称进行简单配置
- 📷 支持单个图片和图片库
- 🔗 为在不同的 Strapi 内容类型中创建内容提供额外的 API 路由

## 🛠️ 安装

### 对于用户

1. 从 [发布页面](https://github.com/CinquinAndy/notes-to-strapi-export-article-ai/releases/tag/) 下载最新版本。
2. 从最新版本中下载 `main.js` 文件和 `manifest.json` 文件。
3. 在您的 Obsidian 插件文件夹中创建一个名为 `notes-to-strapi-export-article-ai` 的文件夹（通常位于 `<vault>/.obsidian/plugins/`）。
4. 将 `main.js` 文件和 `manifest.json` 文件移动到您的 Obsidian 插件文件夹中（通常位于 `<vault>/.obsidian/plugins/`）。
5. 重新启动 Obsidian。
6. 在 Obsidian 的设置中启用插件，位于“社区插件”下。
7. 配置必要的设置（请参见下面的配置部分）。
8. 尽情享受！

### 对于开发者

要安装 Strapi Exporter，请按照以下步骤操作（即将推出到 Obsidian 插件市场）：

1. 将此存储库克隆到您的 Obsidian 插件文件夹中（通常位于 `<vault>/.obsidian/plugins/`）。
2. 运行 `npm install` 来安装依赖项
3. 运行 `npm run build` 来构建插件
4. 重新启动 Obsidian
5. 在 Obsidian 的设置中启用插件，位于“社区插件”下。
6. 配置必要的设置（请参见下面的配置部分）。

## ⚙️ 配置

要开始使用 Strapi Exporter，您需要配置以下设置：

- **Strapi URL**：您的 Strapi 实例的 URL（例如，`https://your-strapi-url`）。
![img.png](https://cdn.pkmer.cn/covers/notes-to-strapi-export-article-ai_2_0.png!pkmer)
- **Strapi API Token**：用于身份验证的 Strapi API 令牌。您可以在 Strapi 管理面板中的“设置”>“API 令牌”下创建 API 令牌。
![img_1.png](https://cdn.pkmer.cn/covers/notes-to-strapi-export-article-ai_2_1.png!pkmer)
![img_2.png](https://cdn.pkmer.cn/covers/notes-to-strapi-export-article-ai_2_2.png!pkmer)
- 您至少需要具有以下权限：
  - article: create
  - upload: create
  - （您也可以添加完整权限，但出于安全原因，这并不是真正推荐的）
![img_3.png](https://cdn.pkmer.cn/covers/notes-to-strapi-export-article-ai_2_3.png!pkmer)
  - （截图中的令牌无效，请不要尝试使用😌）
- **OpenAI API 密钥**：用于使用 GPT-3 生成 SEO 友好内容的 OpenAI API 密钥。您可以从 [OpenAI网站](https://platform.openai.com/account/api-keys) 获取 API 密钥。
![img_4.png](https://cdn.pkmer.cn/covers/notes-to-strapi-export-article-ai_2_4.png!pkmer)
  - 此密钥用于使用 GPT-3 API，该 API 用于生成文章的内容
  - （它需要访问“模型功能”，具有“写入”权限）
![img_5.png](https://cdn.pkmer.cn/covers/notes-to-strapi-export-article-ai_2_5.png!pkmer)
  - （或具有“全部”权限）
- **JSON 模板**：Strapi 中文章字段的 JSON 模板。根据您的 Strapi 内容类型结构自定义此模板。您可以在 Strapi API 文档（Swagger）中找到 JSON 模板。
![img_6.png](https://cdn.pkmer.cn/covers/notes-to-strapi-export-article-ai_2_6.png!pkmer)
  - 要获取 JSON 模板，您可以转到 Strapi API 的文档，并复制文章创建的 JSON 模板
  - 它应该看起来像这样：``https://{api_url}/documentation/v1.0.0``
  - 然后，转到文章创建，并复制 JSON 模板
![img_7.png](https://cdn.pkmer.cn/covers/notes-to-strapi-export-article-ai_2_7.png!pkmer)
![img_8.png](https://cdn.pkmer.cn/covers/notes-to-strapi-export-article-ai_2_8.png!pkmer)
  - 例如，它应该看起来像这样：

```json
{
  "data": {
    "title": "string",
    "seo_title": "string",
    "seo_description": "string",
    "slug": "string",
    "excerpt": "string",
    "links": [
      {
        "id": "number",
        "label": "string",
        "url": "string"
      }
    ],
    "subtitle": "string",
    "type": "string",
    "rank": "number",
    "tags": [
      {
        "id": "number",
        "name": "string"
      }
    ],
    "locale": "string"
  }
}
```

- 然后，您可以将此 JSON 模板复制到插件的设置中
- 并将其复制到其他 JSON 描述设置中描述每个字段
- **JSON 模板描述**：JSON 模板中每个字段的描述，以帮助 GPT-3 理解结构。遵循与 JSON 模板相同的模式，为每个字段提供描述。

```json
{
  "data": {
    "title": "<项目的标题，作为短字符串>",
    "seo_title": "<经过SEO优化的标题，作为短字符串>",
    "seo_description": "<经过SEO优化的描述，作为短字符串>",
    "slug": "<从标题派生的URL友好字符串>",
    "excerpt": "<内容的简短预览或片段>",
    "links": [
      {
        "id": "<链接的唯一标识符，作为数字>",
        "label": "<链接的显示文本，作为短字符串>",
        "url": "<链接指向的URL，作为字符串>"
      }
    ],
    "subtitle": "<副标题或次要标题，作为短字符串>",
    "type": "<项目的类别或类型，作为短字符串>",
    "rank": "<数字排名或顺序优先级，作为数字>",
    "tags": [
      {
        "id": "<标签的唯一标识符，作为数字>",
        "name": "<标签的名称，作为短字符串>"
      }
    ],
    "locale": "<区域设置或语言代码，作为短字符串>"
  }
}
```

```
⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
⚠️
⚠️ **重要提示：** 从JSON模板中删除`content`（或与文章的主要内容对应的属性名称）字段，并在“Strapi内容属性名称”设置中单独指定它。
⚠️ （我这样做是为了避免通过聊天GPT对主要内容进行更改）
⚠️
⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
```

- **Strapi 文章创建 URL**：在 Strapi 中创建文章的 URL（例如，`https://your-strapi-url/api/articles`）。
  - 要获取 URL，您可以转到 Strapi API 的文档，并复制文章创建的 URL
  - 它应该看起来像这样：``https://{api_url}/documentation/v1.0.0``
  - 然后，转到文章创建，并复制 URL
- **Strapi 内容属性名称**：Strapi 中内容字段的属性名称（例如，`content`）。
  - 要获取属性名称，您可以转到 Strapi API 的文档，并复制文章创建的属性名称（它需要是包含文章主要内容的属性名称，对我来说是“content”，但对您可能不同）
- **附加提示**（可选）：在生成内容时为 GPT-3 提供上下文的附加提示。您可以使用此字段指定额外信息或 AI 模型的指令。比如您的语言、文章的语气等。

### 图像设置（主要），可选

- **启用额外调用 API 图像**：切换此选项以启用附加 API 路由的图像功能。插件将在您的文章文件旁边的 `image` 文件夹中查找图像，并将其上传到 Strapi。
- **额外调用 API 图像完整路径属性**：在您的 Strapi API 中为额外的 API 路由指定图像属性的完整路径（例如，`image_presentation`）。
- **启用额外调用 API 图库**：切换此选项以启用附加 API 路由的图库功能。插件将在您的文章文件旁边的 `gallery` 文件夹中查找图像，并将其上传到 Strapi。
- **额外调用 API 图库完整路径属性**：在您的 Strapi API 中为额外的 API 路由指定图库属性的完整路径（例如，`gallery`）。

### 附加 API 路由设置

⚠️ 警告：启用附加 API 路由功能后，您需要重新启动 Obsidian 才能在功能区菜单中看到附加按钮。

- **启用附加调用 API**：切换此选项以启用附加 API 路由功能。这将在功能区菜单中显示一个新图标，用于在不同的 Strapi 内容类型中创建内容。
- **附加 JSON 模板**：输入所需字段的 JSON 模板，用于附加 API 路由。
- **附加 API JSON 模板描述**：输入附加 API JSON 模板中每个字段的描述。
- **附加 API URL**：输入用于在附加 API 路由中创建内容的 URL（例如，`https://your-strapi-url/api/additional-content`）。
- **附加 API 内容属性名称**：输入附加 API 路由中内容字段的属性名称。

### 图像设置（附加），可选

- **启用附加调用 API 图像**：切换此选项以启用附加 API 路由的图像功能。插件将在您的文章文件旁边的 `image` 文件夹中查找图像，并将其上传到 Strapi。
- **附加调用 API 图像完整路径属性**：在您的 Strapi API 中为附加 API 路由指定图像属性的完整路径（例如，`image_presentation`）。
- **启用附加调用 API 图库**：切换此选项以启用附加 API 路由的图库功能。插件将在您的文章文件旁边的 `gallery` 文件夹中查找图像，并将其上传到 Strapi。
- **附加调用 API 图库完整路径属性**：在您的 Strapi API 中为附加 API 路由指定图库属性的完整路径（例如，`gallery`）。

## 🚀 使用方法

1. 在 Obsidian 中打开一个 Markdown 文件。
2. 点击插件的功能图标开始操作。
![img_9.png](https://cdn.pkmer.cn/covers/notes-to-strapi-export-article-ai_2_9.png!pkmer)
3. 在 Strapi Exporter 完成以下工作时坐下来放松一下：
    - 🖼️ 提取并上传图片到 Strapi
    - 🎨 为图片生成 SEO 友好的 alt 文本和标题
    - 📝 根据您的笔记创建 SEO 优化的文章内容
    - 🌐 使用生成的内容和图片将文章发布到 Strapi
4. 在 Strapi 中享受您新导出的文章！

为了让插件检测到图片和画廊，请确保以下文件夹结构：

- 文章文件（例如，`article.md`）
- 主图片文件夹（名称：`image`）
- 主画廊文件夹（名称：`gallery`）

插件将检测 `image` 和 `gallery` 文件夹中的图片并将它们上传到 Strapi。

## 🤝 贡献

我们欢迎社区的贡献！如果您有任何想法、建议或错误报告，请打开一个问题或提交一个拉取请求。让我们一起让 Strapi Exporter 变得更好！

## 📜 许可证

该项目根据 MIT 许可证进行许可。有关详细信息，请参阅 [LICENSE](LICENSE) 文件。

---

🌟 使用 Strapi Exporter 提升您的内容工作流程，释放您的 Obsidian 笔记的全部潜力！🌟
