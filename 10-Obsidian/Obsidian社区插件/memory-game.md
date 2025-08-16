# Obsidian 插件：memory game 注意力训练小游戏插件


> [!Note] 插件名片
> - 插件名称：memory game
> - 插件作者：qingxuan
> - 插件说明：提升专注力的小游戏。
> - 插件分类：[' 娱乐', ' 记忆训练 ', '专注力训练 ', 'obsidian 插件 ']
> - 项目地址：[点我访问](https://github.com/qingxuanlin-s/obsidian-memory-game)
> - 国内下载地址：暂无
> - 下载地址：[点我下载](https://github.com/user-attachments/files/21812290/memory-game.zip)
> - 自述文件：[Readme](https://ghproxy.net/https://github.com/qingxuanlin-s/obsidian-memory-game/blob/main/README.md)

# 支持的训练游戏
## 1. 舒尔特表格 (Schulte Table)
舒尔特表格是一种经典的注意力训练工具，由德国心理学家舒尔特发明。训练者需要按照特定顺序（通常是数字的升序或字母的顺序）依次找出并点击网格中的项目。
**训练效果：**
- 提高阅读速度
- 增强注意力集中度
- 扩大视野范围
- 减少阅读过程中的回视
  ![[Pasted image 20250816213000.png|200]]  

## 2. 颜色单词游戏 (Color Word Game)
颜色单词游戏是基于斯特鲁普效应（Stroop Effect）的认知训练工具。游戏中会显示颜色名称，但文字的颜色与其含义可能不一致，训练者需要根据指令选择正确的单词。
**训练效果：**
- 提高认知灵活性
- 增强抑制控制能力
- 改善注意力选择性
- 锻炼反应速度
![[Pasted image 20250816212941.png|200]]

## 下载地址
[github下载地址](https://github.com/user-attachments/files/21812290/memory-game.zip)

## 使用方法
### 方式一：侧边栏训练视图
  
1. 使用命令面板（Ctrl/Cmd + P）搜索"打开注意力训练视图"

2. 在侧边栏中选择游戏类型

3. 调整游戏参数

4. 点击"开始训练"按钮开始练习

  

### 方式二：笔记中嵌入训练

1. 使用命令面板搜索"插入舒尔特表格"

2. 或者手动插入代码块：
  

```

```schulte-table

size: 5

type: numbers

timeLimit: 60

```

#### 代码块参数说明
- `size`: 表格大小，可选值: 3, 4, 5, 6, 7（表示 3×3, 4×4 等）
- `type`: 表格内容类型
- `numbers`: 数字
- `letters`: 字母
- `chinese`: 汉字
- `timeLimit`: 时间限制（秒），设为 0 表示无限制
  



插件会自动记录您的训练成绩，包括：
- 完成时间
- 训练日期
- 游戏类型和参数
- 最近5次训练记录展示


注意：所有记录保存在浏览器本地存储中，确保隐私安全。


