---
uid: 20251118220648
title: Obsidian Weekly 2025-11-16：Obsidian v1.10.3 已正式发布！
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-11-16：Obsidian v1.10.3 已正式发布！
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20251118220854
---

# Obsidian Weekly 2025-11-16：Obsidian v1.10.3 已正式发布

> [!Abstract]
> **统计时间**：2025-11-02 21:00 ~ 2025-11-16 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.10.3 公共版现已发布

#### 桌面版

##### 破坏性变更

- 移除“使用浅色模式”和“使用深色模式”命令，新增“切换浅色/深色模式”命令，请及时更新对应快捷键。

##### 数据库

###### 新增功能

- 新增 [“分组”功能](https://help.obsidian.md/bases/views#Sort+and+group+results)，支持按指定属性对数据分组，可在“排序菜单”中使用。
- 新增 [表格汇总功能](https://help.obsidian.md/bases/views/table#Summaries)：右键点击表格列并选择“汇总…”，可选择内置汇总函数或编写自定义公式。
- 新增 [列表视图](https://help.obsidian.md/bases/views/list)，支持以项目符号列表或编号列表形式显示文件，兼容多行内容与嵌套属性。
- 推出初始版 [数据库 API](https://github.com/obsidianmd/obsidian-api/commit/359ffc30309077aa45954b9203fd30e5ac3da837)。
- 新增 [地图插件](https://help.obsidian.md/bases/views/map)，支持在地图上可视化数据库条目。此 [官方开源插件](https://github.com/obsidianmd/obsidian-maps) 同时为开发者实现数据库新视图类型提供示例。
- 新增表格选择功能。
- 支持完整键盘导航（具体快捷键见下文）。
- 支持复制/粘贴操作。
- 通过 `Cmd/Ctrl-Z` 和 `Cmd/Ctrl-Shift-Z` 支持基础编辑历史（撤销与重做）。

###### 功能改进

- 为列表新增函数：`reduce()`、`mean()`、`stddev()`（标准差）及 `median()`（中位数）。
- 新增 `html()` 函数，用于渲染自定义 HTML。
- 新增 `random()` 函数，便于创建自定义随机排序公式。
- ISO 8601 日期时间解析现支持时区偏移量。
- 使用修饰键点击功能区项目可在新标签页 (`Ctrl/Cmd`)、新拆分窗格 (`Ctrl/Cmd-Shift`) 或新窗口 (`Ctrl/Cmd-Alt-Shift`) 中打开文件。
- 值不确定的复选框（值为 `null`）现与 `false` 值一同排序。
- 优化“新建项”的文件创建逻辑与属性值推断。
- “更改视图”命令更名为“切换视图…”。

###### 表格快捷键

| 命令                              | 说明                       |
| ------------------------------- | ------------------------ |
| `Ctrl/Cmd-C`                    | 复制选中单元格                  |
| `Ctrl/Cmd-V`                    | 粘贴到选中单元格                 |
| `Ctrl/Cmd-Z`、`Ctrl/Cmd-Shift-Z` | 撤销/重做属性编辑操作              |
| `Ctrl/Cmd-A`                    | 选中当前组所有单元格               |
| `Ctrl/Cmd-Shift-方向键`            | 选中指定方向所有单元格              |
| `Ctrl-Space`                    | 选中整列                     |
| `Shift-Space`                   | 选中整行                     |
| `Enter`                         | 聚焦当前单元格（复选框切换状态/公式打开编辑器） |
| `Home`                          | 跳至首列                     |
| `End`                           | 跳至末列                     |
| `PageUp/PageDown`               | 按视觉页面高度导航                |
| `Esc`                           | 清除当前单元格选择                |
| `Backspace`                     | 清除当前单元格内容                |
| `Tab`                           | 跳至下一单元格                  |
| `Shift-Tab`                     | 跳至上一单元格                  |

###### 其他表格快捷操作

- 按住 Shift 点击可创建单元格选择区域
- 右键点击选中单元格可唤出文件上下文菜单

全部快捷键文档详见 [此处](https://help.obsidian.md/bases/views/table#Shortcuts)。

##### 其他改进

- `appearance.json` 文件变更时自动重载当前主题
- 关闭标签页后默认激活右侧标签页（原行为激活左侧）
- 修复弹出层或嵌入 Markdown 文件聚焦时“全部折叠/展开”命令失效问题
- 文件管理器：更改排序后自动保存布局
- 文件管理器：使用 Ctrl/Cmd + 方向键切换文件时触发侧边栏响应新文件
- 图谱视图：从命令面板打开图谱时支持修饰键
- 属性：列表属性现允许重复值
- 属性：无输入文本时不自动选中首条建议结果
- 属性：全局属性视图现支持批量删除属性（右键点击属性选择“删除”）
- “增加缩进/减少缩进”命令现已在桌面端可用
- 阅读模式：未选中文本时，Ctrl/Cmd-C 将复制完整笔记源码至剪贴板
- 修复嵌入 YouTube 视频时提示“Error 153”的问题
- 修复启用“使用 Markdown 链接”时拖拽链接到编辑器异常的问题
- “属性”核心插件现默认启用
- 插件与主题仓库现可在 GitHub 被屏蔽环境下正常访问
- MacOS：仅在编辑器菜单中显示自动填充与写作工具项
- MacOS：优化触控板捏合手势在白板中的缩放响应速度
- 修复 Mermaid 图表导出 PDF 时的渲染错误
- 修复属性编辑器修改日期后导航操作可能覆盖新文件元数据的问题
- 修复缩进列表后未缩进文本解析错误的问题
- 修复编辑多行文本时可能误删相邻内容块的问题

##### 开发者更新

- 安装程序已升级至 Electron 37.9.0（需下载 [最新安装包](https://obsidian.md/)）
- `FileManager#generateMarkdownLink` 不再为附件链接前置 "!"
- 用户触发“跟随光标下链接”命令时，活动元素将触发新增的 `open-link` 事件
- 默认采用绝对定位修复 Codemirror 插件提示框定位问题

#### 移动版

- 包含截至 Obsidian 桌面版 v1.10.3 的所有新功能与问题修复

##### 改进

- 移动端启动速度显著提升：后台加载应用时自动打开最后编辑的文件
- IOS：支持新型液态玻璃键盘

##### 问题修复

- IOS：修复部分界面无法适配系统主题的问题
- Android：修复阅读模式选择文本触发上下文菜单的问题
- Android：修复应用文档文件夹不可用时的崩溃问题

## 插件新闻

### 社区插件



#### 新增

[Daily Notes Tweaks](https://obsidian.md/plugins?id=daily-notes-tweaks) By _René Coignard_

> 打开随机的每日笔记，自动将过去的每日笔记切换到阅读模式。

[Typographer](https://obsidian.md/plugins?id=typographer) By _René Coignard_

> 通过智能引号、自定义文本替换和自动配对字符，增强排版效果。

[Scroller](https://obsidian.md/plugins?id=scroller) By _René Coignard_

> 新增打字机模式、焦点模式，以及快速滚动到笔记顶部或底部的命令。

[TimeStamper](https://obsidian.md/plugins?id=obsidian-timestamper) By _Martin Eder_

> 在当前光标位置插入定制或预定义的时间戳。

![Weekly-2025-11-16-Pasted image 20251117203128|650](https://cdn.pkmer.cn/images/Weekly-2025-11-16-Pasted%20image%2020251117203128.png!pkmer)

#### 更新

[Startpage v0.2.1](https://github.com/kuzzh/obsidian-startpage/releases/tag/0.2.1) By _kuzzh_

> - 显示所有库文件总大小的设置
> - 新增设置与功能：在最近笔记中包含所有类型文件

[Sidebar Highlights v1.35.2](https://github.com/trevware/obsidian-sidebar-highlights/releases/tag/1.35.2) By _trevware_

> - **修复**
> 	- **集合与文件筛选独立化**：集合功能现与文件筛选完全解耦
> 	    - **视图级筛选**：文件筛选仅作用于「当前笔记」与「全部笔记」标签页
> 	    - **集合永久可见**：集合内的高亮批注始终显示，不受源文件筛选状态影响
> - **新增**
> 	- **恢复调试日志**：为备份恢复流程添加完整调试日志
> 	    - 记录恢复过程的每个环节（含文件校验、高亮匹配、集合清理）
> 	    - 每次恢复尝试自动生成详细日志文件 (`restore-log.txt`)
> 	    - 新增带「复制」按钮的「活动日志」设置，便于故障排查时快速复制日志
> 	    - 隐私保护机制：日志中对文本内容、文件路径及集合名称进行脱敏处理
> 	    - 通过精确显示高亮批注恢复成功/残留原因，助力问题诊断

[Quiet Outline v0.4.5 ](https://github.com/guopenghui/obsidian-quiet-outline/releases/tag/0.4.5) By _the tree_

> - 添加了样式相关的设置项
> - 支持通过右键菜单来直接修改标题

![Weekly-2025-11-16-Pasted image 20251118214921|650](https://cdn.pkmer.cn/images/Weekly-2025-11-16-Pasted%20image%2020251118214921.png!pkmer)

[Excalidraw v2.17.1](https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.17.1) By _Zsolt Viczian_

> - **新增**
> 	- 移植 Excalidraw. Com 的手机端界面
> 	- 自定义笔刷设置现支持 0.1 至 8.0 范围内以 0.1 为步进调整笔迹宽度
> 	- 更新 " 手掌保护 " 脚本以适配新版界面配置
> 	- 重构插件设置中的界面模式选项，现可分别设置桌面端与平板端的偏好模式
> 	    移除旧版 " 优先托盘模式 " 开关，" 切换托盘模式 " 命令更名为 " 切换界面模式 "
> 	- 命令面板新增 " 切换启用上下文菜单 " 操作。在移动设备上，上下文菜单可能会干扰触控操作，此设置将随绘图文件保存，可通过模板预设默认禁用状态（需按 CTRL+S 强制保存）
> - **修复**
> 	- 修复库面板固定时侧边栏附着异常的问题
> 	- 修正使用标记框时幻灯片导出 PDF 的打印区域偏差
> 	- 修复 " 颜色反转 " 脚本与 ExcalidrawAutomate 的色值错乱问题及反转后程序崩溃异常
> 	- 解决场景间复制粘贴导致的 PDF 元素重复渲染问题
> 	- 消除 iOS 设备顶部的异常空白区域（系统自动为刘海屏预留的间距）
> 	- 修正 " 画布与图形属性 " 窗口定位偏差
> 	- 尝试修复移动端键盘弹起导致的界面变形问题
> 	- 紧凑布局中新增多点连线完成按钮
> 	- 置顶脚本在手机界面模式下的视图模式中不会隐藏

[Easy Copy v1.5.0](https://github.com/Moyf/easy-copy/releases/tag/1.5.0) By _Moy_

> - **配置 block id 的插入位置**
> 	- 现在可以在设置中选择 Block ID 的插入位置（当前末尾/插入新行）
> 	- 对于特殊段落，像是代码块或者 LaTeX 块，默认会插入新行，否则块链接会无效
> 	- 同时改进了对于 Latex 块的支持

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### Thino 已更新至 [v2.8.9](https://github.com/Quorafind/Obsidian-Thino/releases/tag/2.8.9)

##### 新增

- 新增：引入虚拟列表渲染与优化组件，在长列表下滚动更顺滑
- 新增：内置「更新日志」页面，便于快速查看版本说明

##### 性能

- 性能：大幅优化 MemoList 渲染与筛选，减少重复计算，并为实时操作提供快速更新方法
- 性能：优化图表渲染与筛选重算效率

##### 修复

- 修复（筛选）：校正筛选 Thinos 的时长区间校验
- 修复（筛选）：改进标签筛选
- 修复（列表）：切换到聊天视图时避免意外滚动重置
- 修复（Moment 视图）：修复样式与图标渲染问题
- 修复（safari）：修复 ios 下白屏问题

##### 重构

- 重构：状态管理迁移至 Zustand，同时保持既有行为不变
- 重构：移除未使用的依赖、文档与组件，并优化导入

##### 样式

- 样式：提升界面响应性与滚动条体验；

#### Media Extended 已更新至 [v4.1.4](https://github.com/aidenlx/media-extended/releases/tag/4.1.4)

##### 新增功能

- 新增“从当前时间戳开始插入媒体片段嵌入”命令

##### 错误修复

- 修复在笔记实时预览编辑器中嵌入 YouTube 视频时出现重复播放器的问题
- 防止链接被圆括号或方括号闭合时触发哈希建议

#### Task Genius [v9.10.2](https://github.com/taskgenius/taskgenius-plugin/releases/tag/9.10.2) 已发布

##### 新增功能

- 为“repeat”添加“recurrence”的键值映射
- 新增状态指示器以优化状态处理
- **流畅界面**：新增现代/经典界面样式选项
- **MCP**：配备模态查看器的服务端日志系统
- **流畅界面**：顶部导航栏支持自定义按钮
- **分组系统**：支持多维度任务分组体系

##### 代码重构

- **编辑器**：提升日期选择器稳定性与架构
- **详情页**：重构任务详情的 DOM 层级
- **流畅界面**：提取逾期任务检查逻辑
- **MCP**：优化服务初始化流程并修复 UTF-8 编码问题
- 提升代码质量并统一使用 Obsidian API 方法
- 改进错误处理与状态标记显示机制

##### 问题修复

- 重复周期日期现基于截止日期计算（原逻辑仅依赖当前日期）
- **快速捕获**：防止标签重复添加#符号
- **快速捕获**：修复输入多级标签时的重复问题

##### 性能优化

- 提升 Obsidian 启动时视图加载的初始化性能

##### 样式更新

- 优化组件触控样式反馈
- 更新任务指示器样式
- **界面**：重构 CSS 导入结构并现代化任务项样式
- **界面**：优化色彩体系与视觉一致性
- **流畅界面**：代码格式化及规范性修复
- **流畅界面**：实现现代化界面样式
- 修复分组样式显示问题

## PKM 相关知识推荐

> [!INFO]
> 欢迎收藏 [PKMer 导航页](https://pkmer.cn/link/)，一键直通 PKMer 各社交平台账号，与热爱分享与知识管理的同好们交流，第一时间获取行业新鲜资讯！

### [Obsidian 插件：Zettelkasten navigation 在电脑屏幕上可视化你的数字卡片盒！](https://mp.weixin.qq.com/s/JhNMtXwxt_xZaSNXRvrW3w)

对该插件支持的另一种关系图谱——即基于卢曼卡片盒原理所产生的图谱——的详细入门指南。相较于通过文字标题进行模糊查找，建立单独的关键词文件能在个人心理层面将该关键词明确为稳定的检索入口，有助于思考并发现不同思想链路之间的联系。推荐对真正卢曼式的想法检索和笔记浏览感兴趣的朋友参考学习。

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。
