---
uid: 20240830121751
title: 如何在 Obsidian 中使用 Gist
tags: [Gist, obsidian插件, 汇总]
description: 在个人知识管理工具 Obsidian 中，用户通常需要高效地整理和分享信息，尤其是代码片段和文档。GitHub Gist 提供了一种简捷的方式来实现代码分享和版本控制，通过 Gist，用户不仅能够将代码片段以链接的形式分享给他人，还可以对其进行版本管理、修改和回溯，这为 Obsidian 用户提供了更灵活的知识管理方式。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20240830122904
---

# 如何在 Obsidian 中使用 Gist

在个人知识管理工具 Obsidian 中，用户通常需要高效地整理和分享信息，尤其是代码片段和文档。GitHub Gist 提供了一种简捷的方式来实现代码分享和版本控制，通过 Gist，用户不仅能够将代码片段以链接的形式分享给他人，还可以对其进行版本管理、修改和回溯，这为 Obsidian 用户提供了更灵活的知识管理方式。

![24.08.30_如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301227852.png!pkmer)

## GitHub Gist

GitHub Gist 是 GitHub 提供的一项功能，允许用户创建和共享代码片段、文档或其他文本文件。Gist 提供了一种简便的方式来保存和分享小段代码或其他文本信息，通常用于以下场景：

1. **代码分享**：Gist 使得分享小段代码变得简单，用户只需要提供一个链接，其他人就可以查看、评论甚至 Fork 这个代码片段。
2. **代码版本控制**：Gist 采用 Git 作为版本控制系统，每次修改都会创建一个新的版本，用户可以随时回溯查看历史版本。
3. **公开或私密**：用户可以选择将 Gist 设置为公共（任何人都可以访问）或私密（只有知道链接的人可以访问）。私密 Gist 仍然是通过 GitHub 的基础设施进行管理，但不公开显示。
4. **多文件支持**：一个 Gist 可以包含多个文件，适合用于需要多个相关代码文件或文档的情况。
5. **嵌入功能**：Gist 生成的链接可以嵌入到其他网页或文档中，方便展示和引用。

### 使用 Gist 的基本步骤

![24.08.30_如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301228187.png!pkmer)

1. **创建 Gist**：
	- ![如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301219370.png!pkmer)
	- 登录到你的 GitHub 账户。
	- 访问 Gist 页面（[Gist.github.com](https://Gist.github.com)）。
	- 点击“New Gist”按钮。
	- 输入文件名和内容，通过 Add File 按钮可以添加多个文件。
		- 注意文件名需要带有后缀，Gist 会根据后缀来渲染 md 或代码。
	- 选择是将 Gist 设置为 Public（公开）还是 Secret（私密）。
	  - ![如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301219095.png!pkmer)
2. **分享 Gist**：
   - 创建完成后，将会生成一个唯一的 URL，可以将这个链接分享给别人。
   - ![如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301219724.png!pkmer)
3. **管理 Gist**：
   - 用户可以随时返回 Gist 页面编辑、删除或查看已有的 Gist。
	  - ![如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301219414.png!pkmer)
   - 你可以 Fork 其他人的 Gist，进行修改然后再保存为自己的 Gist。
	  - ![如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301219172.png!pkmer)

### 如何获取 GitHub Token(GitHub 令牌)

- GitHub →“Setting”(设置)→“Developer settings”(开发者设置)
	- ![如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301219846.png!pkmer)
- “Personal access tokens”(个人访问令牌)→“Generate new token”(生成新令牌)
	- ![如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301219553.png!pkmer)
	- 可以使用具有 gist 范围的经典个人访问令牌（PAT）或者使用对您的 Gists 具有读写访问权限的新细粒度令牌。
- 添加该访问令牌的用途：`Gist` 以及过期日期
- 设置令牌权限范围“Select scopes”(选择范围)
	- 方案一：gist 范围的经典个人访问令牌（PAT）
		- ![如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301219283.png!pkmer)
	- 方案二：Gists 具有读写访问权限的新细粒度令牌。
		- ![如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301219068.png!pkmer)
		- Account Permissions
			- Gists：Read-an：write
		- Repository Permissions
			- Pull Request：Read-only
			- Contents：Read-only
			- Issues：Read-only
- 设置完成后，点击页面底部的“Generate token”(生成令牌) 按钮。
	- 注意生成后的令牌请立即复制保存！
	- ![如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301219248.png!pkmer)

## Obsidian 中的 Gist 插件介绍

Obsidian 插件市场非常丰富，Gist 的相关插件也是有的，主要有以下 4 个插件：

![24.08.30_如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301228349.png!pkmer)

|        插件名称         | 功能                                                                       |
| :-----------------: | ------------------------------------------------------------------------ |
| **Obsidian Gister** | 允许用户使用笔记嵌入、创建和更新 GitHub 和 OpenGist 的 Gist，支持浅色和深色主题，提供手动或自动保存公共和私人 Gist。 |
|  **Obsidian Gist**  | 在 Obsidian 中渲染 GitHub Gist，支持仅使用 Gist ID 或用户名和 Gist ID 进行嵌入，能够显示单个文件内容。  |
|  **Share as Gist**  | 用于将笔记作为 GitHub Gist 分享，支持公开和私密分享，允许设置 Gist 描述，支持自动更新 Gist。               |
|  **Image to Gist**  | 将图像上传到 GitHub 秘密 Gist，支持动态调整上传图像的大小，提供拖放和剪贴板粘贴的灵活上传方式。                   |

### Obsidian Gistr

![如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301219821.png!pkmer)

> [!note] [Obsidian Gistr](https://github.com/Aetherinox/obsidian-Gistr)
>
> Obsidian 插件，允许您使用笔记嵌入、创建和更新 Github 和 OpenGist 的 Gist。浅色和深色主题支持，手动或自动保存创建/更新公共和私人 Gist。

#### 功能介绍

##### Gist Code Embed

两种嵌入模式： **Codeblock 模式**和**Website 模式**。

- Codeblock 模式：此选项在代码块中显示要点，并包含行号和要点文本。
嵌入语法：

~~~md
```gistr
https://gist.github.com/PandaNocturne/f3e643bf25f7fdbf86f1a48ffae2690c
```
~~~

![如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301219563.png!pkmer)

- Website 模式：可以将任何网站嵌入到您的 Obsidian 笔记中，在类似浏览器的环境中显示 Gist，它允许您登录 Github 或 Opengist 站点并查看/编辑您的 Gist。

| 参数       | 必要性 | 说明                      |
| -------- | --- | ----------------------- |
| `url`    | ✅   | gist 链接                 |
| `raw`    | ❌   | 使用 RAW 属性激活               |
| `zoom`   | ❌   | `raw` 属性，更改网站的大小         |
| `height` | ❌   | `raw` 属性，改变网站框架的高度       |
| `css`    | ❌   | `raw` 属性，覆盖嵌入式网站上现有的 CSS |

~~~md
```gistr
url: https://gist.github.com/Aetherinox/f7525990fba2cba6a3ee7b61ac626c21
raw: true
zoom: 0.8
height: 500
```
~~~

![如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301219143.png!pkmer)

##### Gist Share Code

将 Obsidian 的笔记保存为公开或秘密 Gist

- 需要 Github 个人访问令牌 (Token)。
	- ![如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301219743.png!pkmer)
- 提供手动和自动保存设置
	- ![如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301219331.png!pkmer)
- 上传信息记录在 YAML 的 Gists 属性中
	- ![如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301219056.png!pkmer)

##### Code Theme

Gistr 插件提供了深浅模式切换、行编号和语法高亮、文本换行控制、快速性能和缓存、颜色自定义以及对插件和嵌入网站的全面定制功能。

![如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301219605.png!pkmer)

#### Theme 主题

### Obsidian Gist

> [!note] [obsidian-Gist](https://github.com/linjunpop/obsidian-Gist)
> 这是一个在 Obsidian 中渲染 GitHub Gist 的插件，代码块的 Gist 将被呈现为嵌入式 Gist 视图。

![如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301219359.png!pkmer)

1. 仅适用 Gist ID

	~~~md
	```Gist
	30efbfd874fb1a16176d3f638a1e712a
	```
	~~~

2. 使用用户名和 Gist ID

	~~~md
	```Gist
	linjunpop/30efbfd874fb1a16176d3f638a1e712a
	```
	~~~

3. 指定仅在 Gist 中显示单个文件：

	~~~md
	```Gist
	linjunpop/30efbfd874fb1a16176d3f638a1e712a#math.ex
	30efbfd874fb1a16176d3f638a1e712a#concat.ex
	```
	~~~

### Share as Gist

> [!note] [obsidian-share-as-Gist](https://github.com/timrogers/obsidian-share-as-Gist)
> 用于将您的笔记作为 GitHub Gist 分享 (私下或公开)。**私下分享**即只有知道链接的人才能看到该笔记，**公开分享**即该笔记在您的个人资料上可见，还可以选择为您的 Gist 设置描述。
>
> > 📌注意：该插件不会自动上传笔记中本地图片以及转换 Obsidian 的 WIKI 链接。

> [!caution] 注意保护您的 GitHub 个人访问令牌
> 该插件会将 GitHub Token(GitHub 访问令牌) 将存储在 Obsidian 的 `localStorage` 中。这意味着它不会存储在文件中，也不会备份或与仓库的其余部分同步。但理论上其他 Obsidian 插件也可以访问它。为了您的安全，您应该确保为您的个人访问令牌提供尽可能最低的权限。这意味着您的令牌将无法访问您的代码或其他敏感数据。

#### 功能介绍

- 共享笔记：要共享笔记，请打开命令面板并输入“Gist”。您将看到用于创建公共和私人链接的命令。
  ![如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301219057.png!pkmer)
	- 设置 Gist 描述：为您的 Gist 添加自定义描述，然后按 Enter 键。您可以跳过此步骤并立即按 Enter 键接受默认值。
	  ![如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301219808.png!pkmer)
- 自动更新：如果打开 "Enable auto-saving Gists after edit" 设置，您的更改将自动反映在 Gist 中。如果没有，您可以再次使用“在 GitHub.com 上共享为 `[public|private]` Gist”命令”来更新您的 Gist，或创建一个新的 Gist。
	- ![如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301219451.png!pkmer)
- 打开在线 Gist：要在创建 Gist 后将其打开，请打开命令面板并找到“"Open Gist on GitHub.com”命令。如果您的笔记有多个 Gist，则必须选择要打开的一个。

> [!tip]
> 当 Gist Note 将被创建，用于共享的 URL 将被添加到您的剪贴板。上传后会自动在该笔记的 YAML 区添加 Gist 信息：
> ![如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301219091.png!pkmer)

#### 配置 GitHub 令牌

在插件“GitHub.com access token”选项下的配置 GitHub 个人令牌，其他的选项可以保持默认。

![如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301219667.png!pkmer)

### Image to Gist

> [!note] [singh-inder/obsidian-images-to-Gist](https://github.com/singh-inder/obsidian-images-to-Gist)
> 将图像上传到您的 GitHub 秘密 Gist。此外，还可以动态调整上传图像的大小。

#### 功能

- 上传到 GitHub Secret Gists：将图像安全地存储在 GitHub 帐户中，确保隐私和控制。
- 动态图像调整大小：通过向 URL 添加 `w` 和 `h` 查询参数来动态调整上传的图像大小。查看演示或阅读如何调整图像大小指南。
- 完全控制：由于图像存储在您的 GitHub 秘密 Gist 中，因此您可以随时删除它们。
- 灵活的上传方法：通过从剪贴板粘贴或从文件系统拖放来轻松上传图像。还可以通过拖放来支持动画 GIF。

#### 插件设置

![如何在Obsidian中使用Gist.md](https://cdn.pkmer.cn/images/202408301219258.png!pkmer)

| 设置                                  | 描述                                                                                | 备注                |
| ----------------------------------- | --------------------------------------------------------------------------------- | ----------------- |
| GitHub Token<br>GitHub 令牌           | GitHub 用于验证 API 请求的个人访问令牌。了解如何生成一个                                                | 必要的               |
| Image Server URL<br>图像服务器网址         | 用于解码上传到 GitHub Gist 的图像的服务器 URL。您可以继续使用默认的 Images-to-Gist-server（完全私有且免费）或提供您自己的。 | 可选的               |
| Confirmation Before Upload<br>上传前确认 | 上传图像前提示确认。                                                                        | Default = "false" |

## 汇总

个人综合体验了一下，不建议用 Gist 来当做图床，最好还是新建一个 GitHub 私人仓库来当做 Obsidian 的图床。因为图片在 Gist 中显示的是 Base64 编码，会让你的 Gist 资源库看起来很杂乱，如果想要免费的图床的话，有很多方法，这里就不进行赘述了。

| 插件              | Share Code | Embed Code | Upload Image |
| --------------- | ---------- | ---------- | ------------ |
| Obsidian Gister | ✅          | ✅          | ❌            |
| Obsidian Gist   | ❌          | ✅          | ❌            |
| Share as Gist   | ✅          | ❌          | ❌            |
| Image to Gist   | ❌          | ❌          | ✅            |

Obsidian Gist 是用来嵌入在线 Gist 代码块的，Share as Gist 用来上传笔记到 GitHub Gist。Obsidian Gister 功能是最全面，既可以上传笔记到 Gist，又可以嵌入代码在线代码块，但插件的配置选项显然有点复杂，小白刚开始的话可能摸不着头脑，喜欢折腾的话也可以去试试。

> 另外 VS Code 配合 Gist 更是如虎添翼，相关的插件有 Gist Pad，可以随时编辑和添加 Gist。