---
uid: 20250826001057
title: Obsidian Weekly 2025-08-24：千呼万唤始出来！搜索性能优化！Obsidian 公共版现已更新至 v1.9.12
tags: [Weekly, Obsidian]
description: Obsidian Weekly 2025-08-24：千呼万唤始出来！Obsidian 公共版现已更新至 v1.9.12！
author: 淡水鱼,PKMer
type: other
draft: false
editable: false
modified: 20250826234422
---

# Obsidian Weekly 2025-08-24：千呼万唤始出来！搜索性能优化！Obsidian 公共版现已更新至 v1.9.12

> [!Abstract]
> **统计时间**：2025-08-17 21:00 ~ 2025-08-24 21:00
> **声明**：本栏目灵感来源于 _Eleanor Konik_ 女士于 2021 年 4 月至 2023 年 6 月期间写作发表的一系列 [Obsidian Roundup](https://www.eleanorkonik.com/tag/roundup/) 文章，如有兴趣可关注原作者的个人网站 [Obsidian Iceberg](https://www.eleanorkonik.com/)；内容来源于 Obsidian 官方 Discord 频道和相应项目在 Github 或其独立网站上的信息。描述中可能存在基于个人理解进行的修改，如有错谬欢迎指正。感谢 Obsidian 团队为我们带来如此优秀的软件。

## 官方资讯

### Obsidian v1.9.12 公共版现已发布

#### V1.9.12 桌面版

- **官方同步升级**：新增迁移助手，可一键升级加密（AES-SIV 强化文件名安全），未来支持切换区域。
- **性能优化**：搜索速度大幅提升。
- **插件修复**：自动禁用/提示更新问题插件（如 Commander v0.5.4、Image Toolkit）。
- **细节修复**：标签搜索、属性菜单、视图重命名等 Bug 已修。修复 `file.tags.contains()` 找不到带有父标签的文件（例如 在查找“a”时应匹配 `a/b`）

#### V1.9.10 桌面版

隆重推出全新核心插件 [数据库](https://help.obsidian.md/bases)，可将任意笔记集合转换为强大数据库。通过数据库您可以管理系统中的一切内容——从项目计划、旅行安排到阅读清单等各类数据。

![|650](https://cdn.pkmer.cn/images/1.9-bases-table-light.png!pkmer)

数据库支持创建自定义视图来可视化并交互库中的数据。您可以通过属性筛选笔记，并通过公式运算生成动态属性。

![|650](https://cdn.pkmer.cn/images/1.9-bases-cards-light.png!pkmer)

所有数据库数据均基于本地 Markdown 文件与 YAML 属性存储。为支持数据库功能，我们引入了 `.base` 文件格式及相应 [语法规范](https://help.obsidian.md/bases/syntax)。

##### 亮点功能

- 新增核心插件**脚注视图**：通过侧边栏标签页管理当前文件的脚注，同时保持笔记编辑位置不丢失

##### 重大变更

- 正式移除对 `tag` / `alias` / `cssclass` 属性的支持，统一改为 `tags` / `aliases` / `cssclasses`。此外，这些属性的值 _ 必须 _ 为列表格式。若当前值为文本属性，Obsidian 将不再识别。核心插件 " 格式转换器 " 新增选项，可批量修复库中格式错误的 `aliases` / `tags` / `cssclasses` 属性，并自动将旧版 `alias` / `tag` / `cssclass` 属性迁移至新格式

##### 功能改进

- 页面预览与白板中现支持属性编辑器
- 同步：新增 " 冲突解决 " 设置，支持合并（默认）和创建冲突文件两种处理方式
- 新增按钮：在标签页中打开当前页面预览
- PDF 导出流程中，导出按钮默认获得键盘焦点
- 显示文件或文件夹建议的设置现在使用模糊搜索来实现更好的匹配。
- 同步历史与文件恢复差异对比中正确显示空白字符
- 深色模式下文本选择对比度提升
- 同步历史视图新增按钮，可在文件恢复中打开受影响的文件
- 同步历史视图现显示文件重命名前后的名称
- 文件恢复功能现支持显示文件扩展名和非 Markdown 文件的建议
- 当前标签页锁定时，" 关闭当前标签页 " 命令将解除固定而非直接关闭（需再次执行命令才能关闭）
- 即使禁用文件插件，" 将文件移动到……" 选项仍保持可用
- 仅当文件处于活动状态时，" 保存文件 " 命令才会出现在命令面板中
- 优化 " 未知 " 标签页的显示效果，新增 " 关闭所有未知标签页 " 选项
- Unique Note Prefix 插件新增 " 添加唯一内部链接 " 命令，用于链接选定的文本
- 标题栏空间不足时，优先截断文件夹路径保留文件名完整显示
- 优化大型表格和标注块的 Markdown 解析性能（加载耗时略有增加，但渲染瞬时完成）
- 全局搜索结果达 100,000 条后自动停止扫描
- 文件管理器：激活状态下按住 `Command/Ctrl` 键时，方向键导航可打开光标悬停文件
- 文件管理器：在空白区域右键菜单新增 " 新建数据库 " 和 " 新建白板 " 选项
- 链接右键菜单新增 " 复制路径（Copy path）" 和 " 复制相对路径（Copy relative path）" 选项
- 新增 " 切换可读行宽（Toggle readable line length）" 命令
- macOS：编辑器右键菜单支持 Apple 写作工具（需安装 [最新版本](https://obsidian.md/download) 并启用 " 原生菜单 "）

##### 问题修复

- 修复点击折叠图标时页面预览意外隐藏或切换编辑模式问题
- 修复 RTL 语言标题在页面预览中的显示问题
- 优化命令面板结果排序（默认按字母顺序排列，常用命令优先显示）
- 编辑文件时大纲视图的折叠状态不再重置
- 文本属性中按 `Shift-Enter` 不再创建空输入框
- 搜索后表格单元格的光标定位准确性提升
- 使用 "Obsidian 框架 " 样式时，弹出窗口的标题栏能正确显示当前打开文件
- 标注（Callout）块内的列表编号在编辑时保持一致
- PDF 视图在后台打开时不再抢占焦点
- 修复深色模式下 " 导出 PDF" 命令引发的屏幕闪烁问题，同时支持 Linux 系统主题适配
- 严格换行符现可在标注块首段正确渲染
- 包含脚注的笔记在大纲视图中能正确高亮对应行
- 图谱视图：应用已保存的筛选器时不再出现节点闪烁
- 包含不完整 HTML 的 Markdown 表格现能正确渲染
- 标签页历史按钮、网页浏览器历史记录、书签 URL 及打开笔记的功能区按钮现尊重修饰键并遵循 " 聚焦新标签页 " 偏好设置
- 清除搜索筛选器后标签视图能正确更新
- 代码块自动补全现准确识别缩进及列表项内的光标位置
- 优化引用块内代码块的渲染效果
- 单击属性搜索结果现聚焦整行而非仅属性名
- 白板卡片现支持标注且不会触发内部错误
- 白板：修复同尺寸同位置白板节点移动时会隐藏的问题
- 白板：按 `Ctrl-C` 能稳定复制选中笔记
- 白板：修复 " 创建分组 " 默认不选中标签文本问题

##### 开发者更新

- 安装程序更新至 Electron 37.3.0
- `idb` 更新至 8.0.2 版本
- `yaml` 更新至 2.7.0 版本
- `document.body` 的 CSS 属性现同步至所有弹出窗口
- `ButtonComponent` 的 `onClick` 事件为异步时自动显示加载动画
- 可通过 `window.open(url, '_external')` 绕过网页浏览器直接在默认浏览器打开链接
- 禁用 YAML 别名功能防止多键赋值同一对象时产生意外引用
- 通过 `processFrontmatter` 多键赋值同一对象不再创建 YAML 别名

#### V1.9.10 移动版

包含桌面版 v1.9.10 所有新功能与问题修复

##### 功能改进

- 应用现可在屏幕键盘呼出/隐藏时平滑地调整尺寸
- 双指滑动切换标签页历史功能响应更灵敏（iOS 键盘激活时禁用该手势以避免冲突）
- 应用更好地适配横屏模式
- 初始设置流程支持重置 Obsidian 账户密码
- 现可在搜索视图中通过长按文件名打开文件右键菜单
- 连接外接键盘时自动聚焦搜索框
- 优化源码视图的 " 跟随链接 " 提示框，打开链接更稳定，显隐逻辑更一致
- 下拉通知即可将其关闭
- 白板：节点右键菜单新增 " 复制 " 选项
- 默认工具栏行首显示撤销/重做按钮

##### 问题修复

- 确保从文件管理器打开文件后侧边栏自动折叠
- 修复平板设备固定侧边栏时的布局问题
- 导航栏现使用 "+" 号打开新标签页，搜索图标打开快速切换器
- 图谱视图：拖动力度滑块不再触发侧边栏滑出
- 侧边栏标签页右键菜单移除 " 向下拆分 "/" 向右拆分 " 选项
- 修复关闭所有标签页后侧边栏显示异常
- 修复文件恢复对话框在平板设备上无法导航问题

###### IOS 专项修复

- 应用图标适配主屏幕外观
- 实时预览链接长按现可唤出右键菜单
- 弹窗不再与灵动岛/导航栏等系统元素重叠
- iPad 新增 `Ctrl-Tab` / `Shift-Ctrl-Tab` 切换标签页快捷键
- 修复 Stage Manager 或浮动键盘模式下 iPad 工具栏定位问题

###### Android 专项修复

- 返回键退出应用改为最小化（非强制关闭）
- 修复 Android 9 及更早版本中字体选择时程序崩溃的问题
- 应用现支持全面屏显示（状态栏/导航栏与应用界面融合）
- 优化屏幕键盘弹起时的布局适配
- 分屏模式下应用尺寸调整正常
- 补全 Inter 字体的 500 字重
- 修复编辑器未聚焦时实时预览链接打开失效问题
- 修复点击复选框导致滚动位置丢失问题
- 修复编辑器滚动条缺失问题

#### V1.9.11 桌面版

##### 功能改进

本次更新推出 Obsidian Sync 迁移助手，支持对远程同步库执行加密更新等迁移操作，未来将支持区域切换功能。

为维护最高安全标准，Obsidian 会定期更新同步 加密方案。若存在可用加密更新，您将在**设置→同步**中看到 " 更新库加密方式 " 选项。

- Obsidian Sync 安全更新：文件名始终采用端到端加密，现使用更强大的加密方法。新建库自动启用新加密，现有库可通过 [迁移助手](https://help.obsidian.md/sync/migrate#Upgrade+Sync+encryption) 更新（需 [Obsidian 1.9.11](https://obsidian.md/changelog/2025-08-22-desktop-v1.9.11/)）
- 旧版文件路径加密采用字符串哈希派生初始化向量 (IV)，极端情况下可能存在攻击模式。现采用 AES-SIV 加密文件路径和哈希，彻底消除该风险
- 文件内容加密方案保持不变（始终采用 [AES-GCM](https://help.obsidian.md/sync/security) 加密）

##### 问题修复

- 数据库：修复重命名当前视图后界面未刷新问题
- 数据库：修复 `file.tags.contains()` 无法匹配父标签问题（如查找 "a" 时应匹配 `a/b`）
- 属性：修复本地属性视图右键菜单立即隐藏问题

#### V1.9.11 移动版

包含桌面版 v1.9.11 所有新功能与问题修复

## 插件新闻

### 社区插件

#### 新增

[Kindle Vocab](https://obsidian.md/plugins?id=kindle-vocab) By _Truong Gia Bao_

> 支持从 Kindle 设备导入词汇查询记录，并将其转换为结构化、可交互的 Markdown 笔记。

[Linear](https://obsidian.md/plugins?id=linear) By _Casey Becking_

> 集成 Linear 问题管理，提供高级筛选、排序与视觉增强功能。支持截止日期指示器、状态颜色标识及完整调试日志记录。
> **注：此插件目前仅支持桌面端，无法在移动设备上运行。**

#### 更新

[EasyTyping v5.5.15](https://github.com/Yaozhuwa/easy-typing-obsidian/releases/tag/5.5.15) By _yaozhuwa_

> - 优化自定义规则多光标情况 Tabstops 的显示效果
> - 尝试解决特殊情况下可能遇到的 TypeError 导致的卡死问题

[Attachment Management v0.10.0](https://github.com/trganda/obsidian-attachment-management/releases/tag/0.10.0) By _trg anda_

> 支持中文。

### PKMer 出品

> [!INFO]
> **PKMer**（[PKMer.cn](https://pkmer.cn/)、[PKMer.net](https://pkmer.net/)）旨在打造东半球强大的知识管理社区。Personal Knowledge Management (PKM) + "er"，其中 "er" 表示人，专注、喜爱个人知识管理工作、追求效率的人们，都可以划入这个行列，希望社区凝聚更多这样的人。

#### Zotlit 已更新至 [v1.1.11](https://github.com/PKM-er/obsidian-zotlit/releases/tag/1.1.11)

- 功能（Obsidian）：Electron 框架支持升级

#### Thino 已更新至 [v2.7.19](https://github.com/Quorafind/Obsidian-Thino/releases/tag/2.7.19)

- 修复 1.9.10 中重现的填充问题

## PKM 相关知识推荐

> [!INFO]
> 欢迎收藏 [PKMer 导航页](https://pkmer.cn/link/)，一键直通 PKMer 各社交平台账号，与热爱分享与知识管理的同好们交流，第一时间获取行业新鲜资讯！

### [告别冗长属性，自适应双栏布局](https://www.xiaohongshu.com/discovery/item/68949e18000000002203b4d0?source=webshare&xhsshare=pc_web&xsec_token=ABlhPx2S9hDmf097k9Dhe4QD2J2DY1N1PoXSPxAwf4UBQ=&xsec_source=pc_share)

![Weekly-2025-08-24-Pasted image 20250825235258|650](https://cdn.pkmer.cn/images/Weekly-2025-08-24-Pasted%20image%2020250825235258.png!pkmer)

- PKMer 社区大佬 @Moy 制作并分享了一个 CSS 片段，可以将笔记属性也分栏展示
- 自适应双栏属性，用起来省事，看起来省心！

### [Bases 用例：使用 Base 数据库追踪项目状态](https://mp.weixin.qq.com/s/3kw2o3S5R_jl6OuxapPELw)

![250819_Bases用例：使用Base数据库追踪项目状态-img-250819_132454.webp](https://cdn.pkmer.cn/original/1X/d52584dbf7ad976bd1595cd5abe9c98d02252884.webp)

- 这是一个用于追踪项目进度，或者进行任务管理的基础数据库模板。你可以在这个基础上，将它调整成适合自己的结构。

> [!Warning] 声明
> 本栏目致力于为广大 Obsidian 中文用户汇总全面的官方资讯与插件、外观动态。为了保持信息的全面性，我们的**收录并不等同于推荐**，还请各位用户知悉并理解，根据自身需求进行判断和选择。

