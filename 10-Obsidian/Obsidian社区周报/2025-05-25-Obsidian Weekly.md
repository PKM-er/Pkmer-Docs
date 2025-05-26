---
uid: 20250527004035
title: Obsidian Weekly 2025-05-25：Obsidian v1.9.1 内测版已发布！全新数据库核心插件 Base 登场！
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-05-25：Obsidian v1.9.1 内测版已发布！全新数据库核心插件 Base 登场！
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20250527004537
---

# Obsidian Weekly 2025-05-25：Obsidian v1.9.1 内测版已发布！全新数据库核心插件 Base 登场！

> [!Abstract]
> **统计时间**：2025-05-18 21:00 ~ 2025-05-25 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.9.1 内测版已发布

#### V1.9.0

##### 桌面端

全新核心插件 **[Bases](https://help.obsidian.md/bases)** 登场，可将任意笔记集转换为强大的数据库。通过 Bases 您可以管理项目、旅行计划、阅读清单等各类数据。

![展示书籍列表的Bases表格|650](https://cdn.pkmer.cn/images/2025-05-21-bases.png!pkmer)

Bases 支持创建自定义表格视图来可视化与交互数据，支持属性筛选笔记并创建公式生成动态属性。

所有数据均基于本地 Markdown 文件与 YAML 属性存储。为支持 Bases，我们引入了 `.base` 文件格式与 [语法规范](https://help.obsidian.md/bases/syntax)。

**重要提示**：此为早期测试版。未来数月将进行多项优化改进，测试期可能较长。规划功能包括更多视图类型、插件 API 与发布支持，详见 [Bases 路线图](https://help.obsidian.md/bases/roadmap)。

###### 新功能亮点

- 新增核心插件 **脚注视图**：在侧边栏管理当前文件脚注，编辑位置不丢失

###### 重大变更

- 正式弃用 `tag` / `alias` / `cssclass` 属性，改用列表格式的 `tags` / `aliases` / `cssclasses`。文本格式的旧属性将不再被识别

###### 功能优化

- 点击折叠图标时悬停预览不再隐藏或切换编辑模式
- PDF 导出流程中导出按钮默认获得键盘焦点
- 文件/文件夹建议设置现采用模糊搜索
- 同步历史与文件恢复的差异对比现正确显示空格
- 深色模式文本选中对比度提升
- 同步历史视图新增「在文件恢复中打开」按钮
- 同步历史现显示重命名前后的文件名
- 文件恢复视图显示非 Markdown 文件的扩展名
- 关闭已固定标签页时先解除固定需二次确认
- 禁用文件插件时仍可用「移动文件」功能
- 仅当文件激活时「保存文件」命令才出现在命令面板
- 唯一前缀插件新增「创建唯一内部链接」命令

###### 问题修复

- 优化命令面板结果排序（默认字母序，高频命令优先）
- 编辑文件不再重置大纲视图的折叠状态
- 画布卡片现支持 callout 且不报错
- 文本属性中按 `Shift+Enter` 不再生成空输入
- 表格搜索后光标定位更精准
- 「Obsidian 框架」窗口风格下弹出窗口标题实时更新
- Callout 内编辑时列表编号保持连续
- 后台打开 PDF 视图不再抢占焦点
- Callout 首段严格换行符正确渲染
- 含脚注的笔记在大纲视图高亮正确行
- 含不完整 HTML 的 Markdown 表格正确渲染
- 标签历史按钮/网页历史/书签/功能区图标现遵守修饰键与「聚焦新标签页」设置
- 画布按 `Ctrl+C` 稳定复制选中内容
- 清除搜索筛选后标签视图正确更新
- 代码块自动补全现正确处理缩进与列表上下文

###### 开发者相关

- `document.body` 的 CSS 属性现同步至所有弹出窗口
- `ButtonComponent` 异步点击事件自动显示加载动画
- 可通过 `window.open(url, 'external')` 调用系统浏览器
- `idb` 升级至 8.0.2
- `yaml` 升级至 2.7.0
- 禁用 YAML 别名功能防止对象重复引用
- `processFrontmatter` 不再为重复对象创建 YAML 别名

##### 移动端

包含截至 Obsidian 桌面端 v1.9.0 的所有功能与修复

###### 优化

- 屏幕键盘弹出时应用平滑缩放
- 双指滑动导航历史更灵敏
- 更新导航栏默认布局
- 默认工具栏首项显示撤销/重做
- 更好适配横屏模式
- 初始化流程支持重置密码
- 搜索视图长按文件名唤出上下文菜单

###### 问题修复

- 从文件管理器打开文件后自动折叠侧边栏
- 优化平板端固定侧边栏布局
- 弹窗现避开系统动态岛与导航栏区域

###### IOS 专项

- iPad 新增 `Ctrl+Tab` / `Shift+Ctrl+Tab` 切换标签页
- 修复 Stage Manager 与浮动键盘下的工具栏位置
- 屏幕键盘激活时禁用双指滑动导航（防止与光标移动手势冲突）

###### Android 专项

- 应用现采用全面屏布局（状态栏/导航栏沉浸式融合）
- 优化屏幕键盘适配逻辑
- 分屏模式正确缩放
- 补全 Inter 字体的 500 字重

#### V1.9.1

##### 桌面端

###### 重大变更

- Bases 内置函数命名从 `snake_case` 改为 `camelCase`（更符合 Obsidian API 规范）
- Bases 文件存储方式变更，更新后需重新打开已存在的 `.base` 文件

###### 功能优化

- Bases：不可编辑单元格灰显
- Bases：新增 `date` / `time` 日期时间提取函数（如 `date(now())`）
- Bases：新增 `split` 字符串分割函数

###### 问题修复

- Bases：属性菜单默认显示全部相关属性
- Bases：优化公式单元格复杂值渲染
- Bases：删除公式属性后菜单正确刷新
- Bases：过滤器/公式语法现支持非拉丁字符属性名
- Bases：修复弹出窗口中过滤器菜单自动关闭问题
- Bases：「复制表格」正确处理复杂值（不再显示 `[object Object]`）
- Bases：新增设置项控制 Bases 文件预览是否需修饰键
- Bases：修复 `floor(0)` 显示空单元格问题
- Bases：修复 `min` 函数误返最大值
- Bases：修复 `max` 函数报错
- Bases：`contains` 函数现不区分大小写
- Bases：`inFolder` 函数空文件夹参数不再报错
- Bases：修复「新建 Base」菜单文件名输入焦点丢失
- Bases：修复侧边栏内 Base 文件渲染不全问题
- Bases：修复属性菜单输入时界面抖动
- 快速切换：默认显示 `.base` 文件
- 「打开链接视图」菜单现仅显示适用视图

##### 移动端

包含截至 Obsidian 桌面端 v1.9.1 的所有功能与修复

## 插件新闻

### 社区插件

#### 新增

[Viewer ftags](https://obsidian.md/plugins?id=viewer-ftags) By _d7sd6u_

> 将文件的 ftags 作为芯片添加到 markdown 视图的顶部。

![Weekly-2025-05-25-2c5f9900-6e48-44ea-8e11-1c5e03e82333|650](https://cdn.pkmer.cn/images/Weekly-2025-05-25-2c5f9900-6e48-44ea-8e11-1c5e03e82333.gif!pkmer)

[MP Preview  MP](https://obsidian.md/plugins?id=mp-preview) By _Yeban_

> 一键将 Obsidian 笔记转换为微信公众号格式且可实时预览编辑效果。

[Pasterly](https://obsidian.md/plugins?id=pasterly) By _easternkite_

> 自动将剪贴板图像上传到 Firebase 存储并生成 markdown 链接插入文档！

[Zen Space](https://obsidian.md/plugins?id=zen-space) By _Aditya Amatya_

> 增强型文件资源管理器，仅在需要时显示相关文件。

![2ff852b7-2b25-483d-96cd-eb5487d5a108|650](https://cdn.pkmer.cn/images/2ff852b7-2b25-483d-96cd-eb5487d5a108.gif!pkmer)

[Typecho](https://obsidian.md/plugins?id=typecho) By _Chen_

> 把文件同步到 Typecho 中

[Markwhen File Sync](https://obsidian.md/plugins?id=markfilesync) By _rouvenjahnke_

> 使用 Markwhen 时间线文件同步笔记中的属性

[Hledger Notes](https://obsidian.md/plugins?id=hledger-notes) By _Boburmirzo Khamrakulov_

> 直接在您的保险库中创建和管理 hledger 条目。

[Yuque Publish](https://obsidian.md/plugins?id=yuque-publish) By _oylbin_

> 将笔记直接发布到 [语雀](https://www.yuque.com/)。

[TODO Highlighter](https://obsidian.md/plugins?id=todo-highlighter) By _Nuraly Dyussenov_

> 高亮笔记中所有 `TODO` 标记，支持用户自选颜色。

[Wayback Archiver](https://obsidian.md/plugins?id=wayback-archiver) By _ISHIZUE_

> 通过 Wayback Machine 自动归档网页链接，并将归档版本附加到笔记中。它具有全库归档、筛选（包含/排除）、替换规则、重试失败的归档、基于配置文件的设置等功能。

[Regex Line Filter](https://obsidian.md/plugins?id=regex-line-filter) By _64MM4-KN1F3_

> 使用正则表达式过滤笔记，以便仅显示匹配的行。

#### 更新

[Easy Copy v1.3.1](https://github.com/Moyf/easy-copy/releases) By _Moy_

>- **新增功能**
> 	- 新增复制目标：`[[wiki链接]]` 和 `标注内的文本内容`
> 	- 多项新增设置：
> 	    - 为区块 ID 添加可选的显示文字的选项 ( [#7](https://github.com/Moyf/easy-copy/issues/7) )
> 	    - 复制嵌入式区块的选项（在区块链接前添加 `!`）
> 	    - 使用属性作为文件链接显示名称的选项
> 	    - 注册额外命令的选项
> 	- 新增额外命令：
> 	    - 复制当前文件链接
> 	    - 复制当前区块链接（自动生成 ID/手动输入 ID）
> - **Feat**
> 	- 给命令添加了图标

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### [Bases Toolbox](https://bases-toolbox.boninall.com/#dataview-converter) 助您将 Dataview 查询转换为 `.base` 文件

![Weekly-2025-05-25-Pasted image 20250526234344|650](https://cdn.pkmer.cn/images/Weekly-2025-05-25-Pasted%20image%2020250526234344.png!pkmer)

#### [Bases 工具] 助您将 Dataview 查询转换为 `. base` 文件

1. Bases 预览器 - 实时预览测试 Bases 文件
2. Dataview 转换器 - 将 Dataview 表格查询转换为 Bases 格式

##### 核心功能

###### Bases 预览器

- 预览 .base 文件在 Obsidian 中的显示效果
- 测试多种视图类型：表格/看板/画廊/地图/日历
- 支持拖拽 .base 文件或直接编辑 YAML
- 内置模板快速入门
- 生成模拟数据测试视图

###### Dataview 转换器

- 将现有 Dataview TABLE 查询转换为 Bases YAML 格式
- 支持主流 Dataview 语法：
	- 带别名字段
	- FROM 数据源
	- WHERE 条件（AND/OR 逻辑）
	- SORT 排序（正序/倒序）
	- LIMIT 限制与 GROUP BY 分组
- 一键复制转换后的 YAML 创建 .base 文件

GitHub 仓库：[ https://github.com/Quorafind/Bases-Toolbox ]( https://github.com/Quorafind/Bases-Toolbox " https://github.com/Quorafind/Bases-Toolbox" )

#### Thino 已更新至 [v2.7.13](https://github.com/Quorafind/Obsidian-Thino/releases/tag/2.7.13)

- 修复：可能存在的每日复习限制问题；
- 回退：在所有 Thino 视图中启用滚动条
