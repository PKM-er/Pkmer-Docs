---
uid: 20250712103611
title: Easy Reference
tags: [引用, 写作, obsidian插件]
description: 将图表双向引用代入你的学术写作工作流
author: mcardZH
type: basic
draft: true
editable: false
modified: 20250715203020
---

# Easy Reference

一个功能完整的 Obsidian 插件，为图片、表格和章节提供自动引用功能，完全兼容 pandoc-crossref 格式。

> [!Note] 插件名片
> - 插件名称：Easy Reference
> - 插件作者：mcardZH
> - 插件说明：为图片、表格和章节提供自动引用功能，完全兼容 pandoc-crossref 格式。
> - 插件分类：[引用, 写作, obsidian插件]
> - 项目地址：[mcardZH/EasyReference](https://github.com/mcardZH/EasyReference/)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?easy-reference)
> - 自述文件：[Readme](https://ghproxy.net/https://github.com/mcardZH/EasyReference/raw/refs/heads/master/README.md)

> [!Warning]
> 注意：目前插件还未被官方插件商城收录，还在审核中，提前尝鲜请去github自行下载试用。


## 功能特点

- **自动图片引用**：自动为图片添加标签和引用，支持 pandoc-crossref 格式
- **表格引用**：智能识别表格并自动生成标签
- **章节引用**：为标题和章节添加引用，支持自动生成 ID
- **智能建议**：提供交叉引用的自动补全系统
- **Pandoc 兼容**：完全支持 pandoc-crossref 语法和配置
- **灵活配置**：可自定义引用样式和格式
- **图片处理**：支持 Wiki 风格和 Markdown 图片链接
- **多格式导出**：与 pandoc 工具链无缝集成，支持多种输出格式

## 安装

### 从 Obsidian 社区插件安装（审核中）

1. 打开 Obsidian 设置
2. 导航到社区插件
3. 搜索 "Easy Reference"
4. 安装并启用插件

### 手动安装

1. 从 [releases 页面](https://github.com/mcardZH/EasyReference/releases) 下载最新版本
2. 将文件解压到你的库的 `.obsidian/plugins/easy-reference/` 目录
3. 在 Obsidian 设置中启用插件

## 依赖项

此插件与以下工具配合使用效果最佳：

- **pandoc**：用于文档转换
- **pandoc-crossref**：用于交叉引用处理
- **Enhancing Export**（推荐）：用于增强导出功能
- **Image Converter**（可选）：用于图片处理工作流

## 使用方法

### 基本设置

1. 安装所需依赖项（pandoc 和 pandoc-crossref）
2. 在 Obsidian 中启用插件
3. 在插件设置中配置引用样式

### 图片引用

插件自动处理图片并添加图片标签：

```markdown
![图片描述](image.png){#fig:fig123}
```

然后可以使用以下方式引用此图片：

```markdown
参见 [@fig:fig123] 了解详情。
```

![image.png](https://cdn.pkmer.cn/images/202507152038312.png!pkmer)


![image.png](https://cdn.pkmer.cn/images/202507152038008.png!pkmer)


### 表格引用

创建表格时，插件自动添加带引用的标题：

```markdown
| 列1 | 列2 |
|-----|-----|
| 数据1 | 数据2 |

: 表格标题 {#tbl:tbl123}
```

使用以下方式引用表格：

```markdown
参考 [@tbl:tbl123] 中的数据。
```

![image.png](https://cdn.pkmer.cn/images/202507152038909.png!pkmer)


### 章节引用

为标题添加引用标签：

```markdown
# 引言 {#sec:intro}

## 方法 {#sec:method}
```

使用以下方式引用章节：

```markdown
如 [@sec:intro] 中所讨论的，我们将探讨...
```

 ![image.png](https://cdn.pkmer.cn/images/202507152039359.png!pkmer)


### 自动补全

插件在输入引用时提供智能建议：

1. 输入 `[@` 触发建议系统
2. 输入引用类型（`fig`、`tbl`、`sec`）
3. 输入 `:` 后跟部分 ID
4. 从建议的引用中选择

### 配置

#### 引用样式

在插件设置中自定义引用格式：

- **图片引用样式**：`fig{tag:3}`（生成随机 3 字符 ID）
- **表格引用样式**：`tbl{tag:3}`
- **章节引用样式**：`sec{tag:3}`

#### Pandoc-Crossref 设置

直接在插件中配置 pandoc-crossref 选项：

- **图注前缀**：图片标题的前缀（例如 " 图 "）
- **表注前缀**：表格标题的前缀（例如 " 表 "）
- **引用前缀**：自定义引用在文本中的显示方式
- **链接引用**：启用到被引用元素的超链接

#### 自动生成设置

- **自动添加图片引用**：为所有图片自动添加标签
- **自动添加表格引用**：为所有表格自动添加标签
- **Markdown 链接样式**：将 Wiki 风格链接转换为 Markdown 格式
- **相对路径**：为图片使用简化的文件路径

### 高级功能

#### Frontmatter 配置

使用 frontmatter 控制每个文档的插件行为：

```yaml
---
autoAddFigRef: true
autoAddTblRef: true
figureTitle: "图"
tableTitle: "表"
---
```

#### 更新 Frontmatter 命令

使用 " 更新 frontmatter" 命令自动将 pandoc-crossref 配置添加到文档的 frontmatter 中。

#### 子图支持

插件支持特殊格式的子图：

```markdown
<div id="fig:subfig">
![子图A](image1.png){#fig:subfig-a}
![子图B](image2.png){#fig:subfig-b}
</div>
```

### 与导出工作流的集成

1. 在插件中配置引用样式
2. 使用 " 更新 frontmatter" 命令添加 pandoc-crossref 设置
3. 使用 Enhanced Export 或直接使用 pandoc 导出文档
4. 插件的配置将在导出过程中应用

## 设置

### 引用格式

- **图片引用样式**：图片 ID 生成模板
- **表格引用样式**：表格 ID 生成模板
- **章节引用样式**：章节 ID 生成模板

### 自动化

- **自动添加图片引用**：启用/禁用自动图片标记
- **自动添加表格引用**：启用/禁用自动表格标记
- **Markdown 链接样式**：将 Wiki 链接转换为 Markdown 格式
- **图片名称格式**：保存图片名称的模板

### Pandoc 集成

- **图注前缀**：图片标题前缀
- **表注前缀**：表格标题前缀
- **引用前缀**：引用在文本中的显示方式
- **链接引用**：创建到被引用元素的超链接

## 变量

插件支持多种自定义变量：

- `{filename}`：当前文件名（不含扩展名）
- `{index}`：自增数字，避免重复
- `{ext}`：文件扩展名
- `{tag:n}`：随机 n 位字母数字字符串

## 故障排除

### 常见问题

1. **引用不工作**：确保安装并配置了 pandoc-crossref
2. **图片未转换**：检查是否启用了 "Markdown 链接样式 "
3. **自动引用未出现**：验证自动添加设置是否启用
4. **导出问题**：确认 frontmatter 已更新为正确配置

### 兼容性

- 与 Image Converter 插件配合使用以增强图片处理
- 与 Enhanced Export 兼容以改善导出功能
- 需要 pandoc 和 pandoc-crossref 以实现完整功能

## 贡献

欢迎贡献！请随时提交问题、功能请求或拉取请求。

## 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。

## 作者

**mcardZH** - [GitHub 主页](https://github.com/mcardZH/)

## 支持

如果您觉得这个插件有帮助，请考虑：

- ⭐ 给仓库加星
- 🐛 报告错误或问题
- 💡 建议新功能
- 📝 贡献文档

---

*本插件旨在与 pandoc 和 pandoc-crossref 无缝协作，用于学术和专业文档准备。*
