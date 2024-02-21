---
uid: 2024022117285846
title: Obsidian 插件：【Readme】Latex OCR
tags: ['obsidian插件', 'readme']
description: 从您的保险库或剪贴板中生成LaTeX方程式。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：【Readme】Latex OCR

> [!Note] 插件名片
> - 插件名称：Latex OCR
> - 插件作者：Lucas Van Mol
> - 插件说明：从您的保险库或剪贴板中生成 LaTeX 方程式。
> - 插件分类：['obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/lucasvanmol/obsidian-latex-ocr)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?latex-ocr)

## 概述

从您的保险库或剪贴板中生成 LaTeX 方程式。

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/lucasvanmol/obsidian-latex-ocr/master/README.md)
>

---

## Readme(翻译）

下面是 [[latex-ocr]] 插件的自述翻译

【机翻】

# Obsidian 的 Latex OCR

![GitHub release (with filter)](https://img.shields.io/github/v/release/lucasvanmol/obsidian-latex-ocr)

从图像和屏幕截图中生成 Latex 方程式到您的 vault 中。

![demo](https://cdn.pkmer.cn/covers/latex-ocr_2_0.gif!pkmer)

## 特点

- 使用自定义命令（将其绑定到常用的热键，如 `Ctrl+Alt+V`）直接将 LaTeX 方程式从剪贴板中的图像粘贴到您的笔记中。
- 通过在上下文菜单中选择新的“生成 LaTeX”选项，将您的存储库中的图像转换为 LaTeX 方程式。
- 使用 HuggingFace [推理 API](#using-inference-api) 或 [本地运行](#run-locally)。

## 安装

### 手动安装

- 在 `VaultFolder/.obsidian/plugins/latex-ocr/` 路径下创建一个新文件夹用于存放插件
- 导航至该项目的“Releases”选项卡
- 将 `main.js`、`styles.css` 和 `manifest.json` 复制到您的 Vault 文件夹 `VaultFolder/.obsidian/plugins/latex-ocr/` 中。

### BRAT

或者，您也可以使用 [BRAT](https://github.com/TfTHacker/obsidian42-brat) 通过提供到该存储库的链接来自动执行此操作。如果启用，您可以轻松下载未来的测试版本。

## 使用推理 API

默认情况下，此插件使用 HuggingFace 推理 API。以下是如何获取您的 API 密钥：

- 在<https://huggingface.co> 上创建帐户或登录>
- 在 [Hugging Face个人资料设置](https://huggingface.co/settings/tokens) 中创建一个 `read` 访问令牌。如果您已经有其他访问令牌，我建议为此插件专门创建一个。
- 在 Obsidian 中启用插件后，转到 Latex OCR 设置选项卡，并输入您生成的 API 密钥。

### 限制

- 推理 API 是 huggingface 提供的免费服务，因此需要一些时间来提供。后续请求应该会快得多。
- 如果您对一种基于低成本订阅的服务感兴趣，可以摆脱这种令人讨厌的等待期，请在 [这里的相关问题](https://github.com/lucasvanmol/obsidian-latex-ocr/issues/13) 上做出反应。如果有足够的需求来支付服务器成本，我会考虑构建它。

## 本地运行

或者，您可以在本地运行模型。这需要安装一个配套的 [python 包](https://github.com/lucasvanmol/latex-ocr-server)。使用 `pip`（或者最好使用 `pipx`）进行安装：

```
pip install https://github.com/lucasvanmol/latex-ocr-server/releases/download/0.1.0/latex_ocr_server-0.1.0-py3-none-any.whl
```

您可以通过运行以下命令来检查是否已安装：

```
python -m latex_ocr_server --version
```

### 配置

打开 Obsidian 并导航到社区插件部分，启用插件。然后转到 LatexOCR 设置选项卡，启用“使用本地模型”并进行配置。

![settings](https://cdn.pkmer.cn/covers/latex-ocr_2_1.png!pkmer)

您首先需要设置插件将在 LatexOCR 设置中使用的 Python 路径来运行模型。然后，您可以使用下面的按钮检查它是否正常工作。完成后，按“(重新) 启动服务器”。

请注意，第一次执行此操作时，需要从 huggingface 下载模型，大小约为 ~1.4 GB。您可以通过按“检查状态”按钮在 LatexOCR 设置选项卡中检查此下载的状态。

底部的状态栏将指示服务器的状态。

| 状态       | 含义               |
| ---------- | ------------------ |
| LatexOCR ✅ | 服务器在线         |
| LatexOCR ⚙️ | 服务器加载中       |
| LatexOCR 🌐 | 下载模型中         |
| LatexOCR ❌ | 服务器无法访问     |

### GPU 支持

您可以通过运行以下命令来检查 GPU 支持是否正常工作：

```
python -m latex_ocr_server info --gpu-available
```

如果您想要 GPU 支持，请按照 `https://pytorch.org/get-started/locally/` 上的说明安装带有 CUDA 的 pytorch。请注意，您可能需要先卸载 torch。`torchvision` 和 `torchaudio` 不是必需的。

## 归属

感谢 [NormXU](https://github.com/NormXU/nougat-latex-ocr/) 为训练和发布该模型所做的巨大贡献。
