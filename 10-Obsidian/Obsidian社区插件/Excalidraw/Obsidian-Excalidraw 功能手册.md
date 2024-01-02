---
uid: 20240102212628
title: Obsidian-Excalidraw 功能手册
tags: [Excalidraw]
description: Excalidraw的功能手册说明书
author: 维泽Witzer
type: other
draft: false
editable: false
modified: 20240102213008
---

# Obsidian-Excalidraw 功能手册

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127838.png!pkmer)

> [!note] Obsidian-Excalidraw 功能手册
> 原文链接：[Obsidian-Excalidraw 功能手册](https://zhuanlan.zhihu.com/p/658366428)
> 原文作者：[维泽Witzer](https://www.zhihu.com/people/nan-fang-qiao)

## 1. 新建 excalidraw 绘图

完成插件安装后，可以在任一文件夹点击**鼠标右键 - 新建 excalidraw 绘图**，或者点击**最左侧 excalidraw 图标**，新建绘图

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127839.jpeg!pkmer)

当然也可以 ctrl + p，输入 excalidraw 命令新建绘图

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127840.jpeg!pkmer)

鼠标右键创建的绘图会保存于当前文件夹下，而点击左侧图标或是通过命令创建的绘图会保存于根目录下 (默

认)，也可以通过 excalidraw 插件的设置进行自定义

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127841.jpeg!pkmer)

## 2. Excalidraw 命名

在 excalidraw 设置 - 文件名 中可进行**自动生成名称**更改

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127842.jpeg!pkmer)

包括**前缀，中间部分，和日期时间，扩展名**等

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127843.jpeg!pkmer)

### 2.1 **兼容性设置**

建议关闭旧格式相关选项，以旧格式创建的 excalidraw

绘图因为是. excalidraw 文件，而非. md 文件，无法在库内搜索到

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127844.jpeg!pkmer)

### 2.2 模板设置 Template

文件夹中创建 Template 模板文件，设置中保存模板文件位置，注意 Template 文件后缀，新格式与扩展名都会影响，如果是新格式，且后缀名为. md，直接用名字即可，设置模板文件后，新建绘图其实就是复制模板文件

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127845.jpeg!pkmer)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127846.jpeg!pkmer)

## 3. 画板移动与缩放

使用 **ctrl + 鼠标滚轮** / **鼠标滚轮**进行缩放，左下角会显示缩放比例，点击可自动恢复到 100%

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127847.jpeg!pkmer)

其效果可在第三方插件配置的 **显示** 中进行更改

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127848.jpeg!pkmer)

按住 **空格 + 鼠标左键**，可在当前缩放等级下进行**自由拖动**

其效果等于选择上方功能条的 hand tool

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127849.jpeg!pkmer)

## 4. 选择和删除

**鼠标左键单击**进行选择，无背景图形需要点击边框进行选择

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127851.jpeg!pkmer)

**shift + 鼠标左键点击**，进行多选

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127852.jpeg!pkmer)

或者**按住鼠标左键**，拖动进行框选

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127853.jpeg!pkmer)

选择后点击 **delete 键 / backspace 退格键**，可删除所选

## 5. 图形绘制

使用鼠标选取或数字键选取，按住鼠标左键拖动绘制图形，包括 **四边形、菱形、圆形、箭头、线段**五类

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127854.jpeg!pkmer)

其中，箭头和线段 以通过鼠标左键连续点击，改变线条形状，按 **esc** 键结束绘制，可自行按鼠标左键多次点击形成的点位调节其形状

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127855.jpeg!pkmer)

**注意**，绘制箭头时，箭头与图形之间有附着区，在此区域内开始 / 结束箭头绘制，可以使箭头跟随图形移动，线段则无此功能 (同时箭头形态可以通过 **Arrowheads** 自定义)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127856.jpeg!pkmer)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127857.jpeg!pkmer)

## 6. 图形样式调整

在按住鼠标左键拖动框选，或者点击有线条部分选中图形后，左侧会自动呼出样式调整界面 (默认情况)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127858.jpeg!pkmer)

### 6.1 Stroke

改变图形边线或线段的颜色，点击右侧颜色区域可进行进一步精细调整，选取不同颜色 (其固定色板颜色调整将在后文说明)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127859.jpeg!pkmer)

你也可以使用十六进制颜色编码，或者取色器进行颜色修改

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127860.jpeg!pkmer)

### 6.2 Background

图形内部颜色填充，其颜色修改与上文中 stroke 的颜色修改机制类似

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127861.jpeg!pkmer)

### 6.3 Fill

图形内部填充样式（当背景色不为透明时）就是三种：斜线填充，交错线填充，完全填充

### 6.4 Stroke width

图形或线段宽度，**注意**：填充 Fill 里面的斜线和交错线条宽度同样受此影响

### 6.5 Stroke style

实现与虚线切换

### 6.6 Sloppiness

图形与线条的凌乱度，主要模仿手涂的质感

### 6.7 Edge

影响图形或线条边角尖锐 还是 圆滑

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127862.jpeg!pkmer)

### 6.8 Arrowheads

选择箭头后，可自定义箭头起始段和终端的箭头形态

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127863.jpeg!pkmer)

### 6.9 Opacity

选择图形或线段的不透明度

### 6.10 风格复制

框选图形，右键菜单 copy style/Paste style

（快捷键的风格粘贴貌似不行）

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127864.jpeg!pkmer)

### 6.11 线条 / 箭头编辑技巧

选择线条、箭头，**右键菜单 - Edit line**，或者使用快捷键 **ctrl + enter**，进行细节调整，可自动切分多段 (注意 edge 是直线，还是弧线)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127865.jpeg!pkmer)

绘制线条、箭头时候，按住 **shift** 可以限制线段在固定角度运动，有助于**画平行 / 垂直线等** (比如给图形或导入

PDF 标注时)

## 7. 图形空间位置调整

### 7.1 图形移动与旋转

**图形移动**：框选后，鼠标左键按住拖动即可

**图形旋转**：款选后，将鼠标移动到上方小点处，光标变为手形后，按住鼠标左键即可进行旋转操作

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127866.jpeg!pkmer)

### 7.2 Layers 图层

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127867.jpeg!pkmer)

从左至右

**send to back**：将图形降到最后一层

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127868.jpeg!pkmer)

**send backward**：图形下降一层（非首层图形）

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127869.jpeg!pkmer)

**Bring to front**：图形升到最上层

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127870.jpeg!pkmer)

**Bring forward**：图形上升一层

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127871.jpeg!pkmer)

### 7.3 Align 排列

框选多个图形后，可对其相对位置和距离进行调整左、列、右对齐 + 平均左右间距上、行、下对齐 + 平均上下间距

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127872.jpeg!pkmer)

### 7.4 Group Selection 图形组合

框选多个图形后，可组合或分解图形 (**注意**：此处的

group 跟后面图形嵌入 markdown 的 group 是一个意思) 快捷键：**Ctrl + G**

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127873.jpeg!pkmer)

### 7.5 图形左右 / 上下翻转

选择一个或多个图形

右键菜单 - Flip horizontal（左右翻转）右键菜单 - Flip horizontal（上下翻转）

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127874.jpeg!pkmer)

### 7.6 图形复制与删除

excalidraw 图形复制有几种方式，我最为常用的是 **alt + 鼠标左键**可以单个复制，也可以框选复制多个

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127875.jpeg!pkmer)

其他还有常见的 **ctrl + c/v**，右键菜单复制粘贴以及使用呼出面板的 **Duplicate**

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127876.jpeg!pkmer)

删除：框选后**按 delete 键**，或者点击 Actions 中的删除按钮

## 8. 画板设置

进入 excalidraw 后，鼠标左键点击空白区域，左上角可见呼出面板标识 (默认情况)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127877.jpeg!pkmer)

### 8.1 背景颜色及风格调整

通过 **Canvas background** 及 **Dark mode** 可以调节**画板背景颜色**以及画面亮暗风格

同时在插件设置 - 显示一栏中，可以设置画板亮暗即

Dark mode 与 obsidian 风格匹配

其中 Dynamic styling 一项是指更改颜色等的呼出面板的色彩是否随背景颜色调整而调整 (match color)，也可选灰色调但随之调整 (grey color)，当然也可以不随之更改 (OFF)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127878.jpeg!pkmer)

### 8.2 托盘模式 Toggle tray-mode

页面风格调整，呼出面板位置由左上该为左下或右下，同时，右上部分库和笔配置由横向改为纵向同时框选图形后默认不呼出调整面板 (可点击绘画按钮切换是否呼出)，改为手动调整，托盘位置可通过设置调整

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127879.jpeg!pkmer)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127880.jpeg!pkmer)

### 8.3 保存

可通过呼出面板 save 保存，或者 ctrl + s

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127881.jpeg!pkmer)

或者点击右上角保存按钮

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127882.jpeg!pkmer)

或者 在 **设置 - 保存**中，设置自动保存时间

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127883.jpeg!pkmer)

### 8.4 方格 show grid

空白处右键菜单，选择 show grid，开启背景方格

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127884.jpeg!pkmer)

此时，图像的移动会以小方格为基本单位 (按 ctrl 键拖动则正常移动)，而关闭方格背景则移动单元更小，更丝滑

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127885.jpeg!pkmer)

绘制线条的时候，线条也会跟随方格，同时 CTRL 键则自由移动，便于绘制

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127886.png!pkmer)

### 8.5 Zen mode/View mode

两种简洁模式，右键菜单点击 / 快捷键开启

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127887.jpeg!pkmer)

**zen mode**：禅模式，只留下上方图形栏，左右两边配置栏隐藏，选择图形后不再呼出颜色等配置菜单，但仍可以创建和改变单个图形大小等

**View mode**：所有配置栏全部隐藏，只能将所有图形作为整体移动，不可改变图形

### 8.6 图形统计信息 Stats for nerds

右键菜单点击 / 快捷键开启

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127888.jpeg!pkmer)

显示图中所有元素个数，以及整体长宽占比 (作为组考

虑)

选择单个图形，或单个组也可看到 x、y 坐标、单独长宽及旋转角度等信息

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127889.jpeg!pkmer)

### 8.7 Markdown 模式 与 绘图模式转换

**转换为 markdown**：左上角呼出面板 - open as markdown

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127890.jpeg!pkmer)

或者，右上角点击 3 点按钮 - 打开为 markdown 文件

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127891.jpeg!pkmer)

**转化为 excalidraw 绘图**：右上角 3 点按钮 - 打开为 excalidraw 绘图

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127892.jpeg!pkmer)

## 9. 文件嵌入 Excalidraw

obsidian 文件嵌入快捷键图示

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127893.png!pkmer)

### 9.1 **通用库内文件嵌入 Insert 命令**

ctrl + p 打开命令面板 - 输入 insert any file

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127894.jpeg!pkmer)

或者点击页面右上角 insert any file 按钮

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127895.jpeg!pkmer)

几乎所有库内文件可以按照 iframe 框架或 image 形式嵌入

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127896.jpeg!pkmer)

iframe 的主题色 (light,dark) 是否跟随主题色变化，可以在设置中调整

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127897.jpeg!pkmer)

### 9.2 Markdown 文件嵌入

1. 拖入 + 快捷键
	1. `! [[* *文章名* *#标题* *]] {换行字符数}` 嵌入文本内容
2. ctrl+p 打开命令面板，输入 `插入任意文件`
3. tool panel 中点击 insert markdown 按钮

### 9.2.1 拖入 + 快捷键

直接拖入会变成文字 + 链接拖入后按住鼠标左键，会提示按快捷键组合

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127898.jpeg!pkmer)

此时，按 **ctrl/shift** 即提示 image 形式嵌入，大小可自行调整，嵌入 image 显示内容多少可通过 excalidraw 设置调整

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127899.jpeg!pkmer)

其中嵌入宽度与高度设置数值会影响图像中文本显示内容，太小会显示不全，其本质上就是从上到下显示当然，也可以转换为 markdown 文件后，自行调整

`[[* *文章名* *#标题* *|宽度 x 最大高度* *]]`

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127900.png!pkmer)

**鼠标左键拖入 + ctrl + alt**，提示以 100% 图像形式嵌入 excalidraw，图形可移动，不可改变大小，可转换成

markdown 形式后更改，删去 100%，即等于 ctrl/shift 导入 image

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127901.jpeg!pkmer)

**鼠标左键拖入 + ctrl + shift**，以 iframe 互动框架形式嵌入，可保留 obsidian md 文件格式，自由调整大小双击后可直接进行编辑，且其左上角可进行整个文档 / 标题段落 / 具体文段的展示切换

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127902.jpeg!pkmer)

### 9.2.2 以文本形式嵌入

双击绘图空白处输入文本

`![[文章名 标题]]{换行字符数}`

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127903.jpeg!pkmer)

以文本形式嵌入，没有 markdown 格式，不能在绘图内调整，只能跳转到原 md 文件内调整，最重要没有 markdown 的文档搜索功能，只能手打输入

其默认折行字数 (40) 可以在设置内更改，也可自己在{?} 中定义

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127904.jpeg!pkmer)

### 9.2.3 Insert file 按钮

可以以 image 形式插入，跟按拖入按 ctrl 的形式一样

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127905.jpeg!pkmer)

### 9.3 PDF 文件嵌入

ctrl + p 打开命令面板 - insert PDF file/tool panel-insert pdf 按钮 / 拖入页面按 ctrl

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127906.jpeg!pkmer)

**page to import**：导入页数可按逗号区分，可导入多页，作者建议 20 页左右，导入太多会比较吃内存，而且每次加载都要重新从 PDF 渲染，当然这还是得看电脑，可以自行测试一下，油管 Zsolt 自己做了个测试，i9+64G 内存，导入 347 页 PDF，打开逐页渲染要个几十秒，后面使用还是比较丝滑的

后面一次是添加边框 (border box)、导入后页面锁定（不可调整）、列数（没啥用，默认即可）、页面间距

**imported page size**：不会影响分辨率，放大后查看同样清晰，但是会影响插入页面和字体大小

此外，通过命令面板 insert any le 去插入 / 拖入页面 + ctrl + shift, 来导入 iframe 形式的 pdf，不过体验一般，页数过多很吃资源嵌入的 pdf 可以**改变大小，背景颜色，边框颜色**等，**ctrl + 鼠标左键可以打开 PDF 文件**，并跳转到当前页面

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127907.jpeg!pkmer)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127908.jpeg!pkmer)

### 9.4 SVG 文件嵌入

tool panel - 点击 insert svg 按钮

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127909.jpeg!pkmer)

选择库内 svg 文件嵌入，这样嵌入的 svg 文件可进行编辑

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127910.jpeg!pkmer)

而库内 / 库外拖入的 svg 则只是图片形式

### 9.5 网页内容嵌入

所有网页内容复制网址可直接嵌入网页

油管、推特等按住网页拖入 + ctrl +shift，嵌入对应可调整大小视频，体验更好诸如，豆瓣，amazon 电子书平台，拖入书籍图片或复制图片链接，可嵌入在线网页图片，而不导入库中

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127911.jpeg!pkmer)

### 9.6 LaTex 公式嵌入

tool panel - 点击 insert LaTex 按钮

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127912.jpeg!pkmer)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127913.jpeg!pkmer)

输入公式后回车即可在页面中看到

**ctrl + 鼠标左键** 点击可进行更改

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127914.jpeg!pkmer)

### 9.7 数据表格导入

文本中的数字，或 excel 中的简单数字可以复制，在绘图中粘贴时，自动形成简单表格 (对应关系不能太复杂)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127915.jpeg!pkmer)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127916.jpeg!pkmer)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127917.jpeg!pkmer)

## 10. 链接与 Excalidraw 绘图文件嵌入

### 10.1 链接

选择 excalidraw 任意图形，点击左侧链接按钮 / ctrl+k/ 右键菜单 - creat link，都可以创建对库内文件的链接，以链接形式输入文件名即可，可直接修改和删除 ctrl + 左键点击该图形：在新窗口打开链接文件

ctrl + shift + 左键点击该图形：在当前窗口打开链接文件

ctrl + alt + 左键点击该图形：在分窗口在右侧打开链接文件

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127918.jpeg!pkmer)

### 10.2 内部链接 link

选择 excalidraw 任意图形，点击 tool panel - 内部链接按钮，点击 link，即可生成指向该图形的内部链接

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127919.jpeg!pkmer)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127920.jpeg!pkmer)

此时，链接已经成到剪贴板，可复制到 excalidraw 形成页内跳转 (ctrl + shift + 左键点击)，可编辑 | 别名来缩短显示

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127921.jpeg!pkmer)

### 10.3 内部链接 area/group

同样选择图形，点击 tool panel - 内部链接按钮，点击 area/group 同样可以生成 area/group 的嵌入式链接，可直接复制入 markdown 文档

除了 `![[绘图名 #^area/group=elementid]]` 这种形式外

还可以识别# `<section name>` 这种形式，即在图形内部输入标识，或者选择多个图形生成 group，内部输入标识，如下图 (注意该图形**不需要生成 area/group 链接**，但是 group 需要将该图形**置入 group** 中)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127922.jpeg!pkmer)

`![[绘图名 #area/group = 方形]]` 同样可以被识别而且这个绘图名可以是同一个，如下面的例子我将下面文字、黄色图形、人、大黑框四个元素置入同一个组 (记得要**保存以更新状态**)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127923.jpeg!pkmer)

我在 markdown 文件里输入

`![[** **testDemo# 今日计划]] ` 将显示文字信息，而且里面计划内容可以直接在 markdown 中进行勾选

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127924.jpeg!pkmer)

`![[testDemo#area = 今日计划]]`

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127925.jpeg!pkmer)

`![[testDemo#group = 今日计划]]`

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127926.jpeg!pkmer)

### 10.4 Excalidraw 绘图文件嵌入

除了上面的 area 和 group 嵌入，你也可以整个绘图文件嵌入显示，同时可以更改图像大小和位置

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127927.jpeg!pkmer)

如果嵌入视频和网页等 (gif 图嵌入绘图不动，但在嵌入 markdown 的绘图中会动)，需要更改设置 - native svg 才可以显示，不然只能显示网址的占位符

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127929.jpeg!pkmer)

此外，作者视频中提到的一种用法也可以拿来借鉴，他将一张大型油画图片导入 excalidraw 中，然后框选其中各个部分，输入 `# <section name>`，然后将此部分透明化，从而可以在 markdown 中对各部分进行说明与学习，可以用于诸如地图，医学绘图等的学习中 (注意右键菜单 - 锁定位置 lock 以避免操作而导致图像移动)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127930.jpeg!pkmer)

## 11. 导出 export

选择左侧呼出面板 - export image / 命令面板 - export image

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127931.jpeg!pkmer)

前两项决定图像大小质量，padding 太小，svg 导出容易显示不全，后面依次是：亮暗模式输出、是否带背景颜色、一次性设置 / 保留设置、是否嵌入 excalidraw 场景、保存位置是库中绘图位置 / 选择电脑文件位置然后点击输出文件形式

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127932.jpeg!pkmer)

当然如果只需要几个图形的输出，可以选择多个图形，然后右键菜单 - png/svg 输出

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127933.jpeg!pkmer)

## 12. 字体更改与文本调整

下载合适字体文件，置入 obsidian 当前库在电脑中的文件夹 (我直接丢入 Excalidraw 文件夹，但都能识别) 打开设置 - 启用本地字体，选择对应字体

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127934.jpeg!pkmer)

在 excalidraw 中双击输入文字，左侧呼出面板可调整为中文字体，并且调整文字位置，大小

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127935.jpeg!pkmer)

## 13. 图形嵌入文字 (箭头 - 便利贴)

箭头线段可以双击嵌入文字

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127936.jpeg!pkmer)

三种封闭图形都可以嵌入文字，形成便利贴效果，同样右侧可以调整文字大小、位置

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127937.jpeg!pkmer)

**注意**：直接拖动放大 / 缩小文字大小不变，每行显示内容变多 / 少，shift + 拖动放大 / 缩小 文字大小随之改变

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127938.jpeg!pkmer)

## 14. 库文件 library

点击右上角 library 图标，打开库文件

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127939.jpeg!pkmer)

### 14.1 搜索下载库文件

点击页面下方 **browse library** 按钮，打开 Excalidraw libraries 网页，关键词搜索 / 根据上面的分类进行检索

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127940.jpeg!pkmer)

如下载量 (Total Downloads)，点击 Download 下载 (add to Excalidraw 是针对网页应用的)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127941.jpeg!pkmer)

下载后选取文件夹存放即可

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127942.jpeg!pkmer)

### 14.2 使用库文件

点击右上角 3 点 - open - 选择下载库文件，拖出来使用即可

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127943.jpeg!pkmer)

### 14.3 建立个人库

他人库中文件，绘制图形，导入 svg 文件等都可以组合成各种图形然后 选择图形 - 右键菜单 -**add to library**

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127944.jpeg!pkmer)

即可添加到个人库

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127945.jpeg!pkmer)

勾选个人库中文件，点击右上角 3 点，选择 save to，可建立个人库文件

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127946.jpeg!pkmer)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127947.jpeg!pkmer)

### 14.4 删除库文件

勾选文件，点击右上角 3 点 - 删除 remove

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127948.jpeg!pkmer)

或者**全部删除**：点击右上角 3 点 -**Reset library**

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127949.jpeg!pkmer)

## 15. 笔设置

### 15.1 笔数量设置

excalidraw 设置 - 自定义画笔的数量

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127950.jpeg!pkmer)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127951.jpeg!pkmer)

### 15.2 笔性质设置

双击任意笔，可打开 pen setting

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127952.jpeg!pkmer)

笔画设置项很多，不一一说明，简述几个重要设置

**Pen Type**：插件中设置 7 种默认笔类型，切换笔类型，点击 Apply 应用则可更换当前笔类型，也可做为返回默认设置而使用

**Stroke & ll applies to**：是说使用笔设置后，其他图形绘画时候，颜色是否要跟随笔设置，开启则为不跟随

**Preset color**：则是反过来，用笔时候相应颜色是否要跟随绘图时候的颜色变化

## 16. 脚本 Script

### 16.1 脚本安装和更新

点击左侧呼出面板 script library / 右上角脚本库按钮，进入脚本安装面板

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127953.jpeg!pkmer)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127954.jpeg!pkmer)

可搜索安装

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127955.jpeg!pkmer)

更新同样在库中，需要更新的脚本右侧有相应文字提醒

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127956.jpeg!pkmer)

### 16.2 脚本管理

可在脚本下载文件夹下新建相应主题文件夹，alt 多选脚本文件置入创建文件夹下

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127957.jpeg!pkmer)

同样在 tool panel 中也会进行相应归类

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127958.jpeg!pkmer)

### 16.3 脚本快捷使用

打开工具面板，在脚本列表里选择一个脚本，**鼠标左键长按**，则会在笔工具后面添加一个此脚本的快捷方式，便于常用脚本使用，再次长按取消

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127959.png!pkmer)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127960.png!pkmer)

托盘模式，能纵向显示

## 17. 重要脚本功能讲解

### 17.1 幻灯片 slideshow

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127961.jpeg!pkmer)

补充，幻灯片插件 1.9.21 版本后可使用激光笔工具

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127962.png!pkmer)

### 17.1.1 Slideshow - 箭头模式

使用箭头工具，汇出需要显示的多端界面，然后点击

slideshow 按钮 (要选择箭头路径才有效)，进行幻灯片播放

进入播放模式可看见控制框 (可移动)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127963.jpeg!pkmer)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127964.jpeg!pkmer)

控制左右的好理解，主要讲一下切换箭头显示开关和编辑按钮

开关打开后，箭头线段后台隐藏，便于进行图像调整，而且默认是选中的，所以可以直接点击 slideshow 运行幻灯片播放

而点击旁边编辑按钮后，箭头线段可见，编辑模式就是选择箭头后 右键菜单 - edit line/ctrl + enter，可移动创建多个节点，节点 退格 / del 可删除

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127965.jpeg!pkmer)

### 17.1.2 # Frame tool 模式

点击工具栏 / 按 F 键，四边形框选内容

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127966.jpeg!pkmer)

有点类似与 group 功能，框选内容

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127967.jpeg!pkmer)

此时点击 slideshow 可进行幻灯片播放，注意 frame 上方数字就是播放顺序，你可以更改数字内容以更改播放次序，同时也可以往框架内填入内容 (双击直接更改，更改时有点模糊)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127968.jpeg!pkmer)

点击框架 (边框) 右键菜单可选择所有元素 - 内容框选

移除所有元素 - 不是删除，类似于解除 group，内容脱离框架

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127969.jpeg!pkmer)

### 17.2 默认颜色更改 palette loader

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127970.jpeg!pkmer)

安装完脚本点击脚本按钮

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127971.jpeg!pkmer)

显示 3 种功能

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127972.jpeg!pkmer)

**Load palette from file**

实际上就是用于恢复默认颜色的，在设置中有介绍设置文件夹放入之类的，可识别但没啥用

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127973.jpeg!pkmer)

**Set top~**

可用于设置呼出面板的五种基本颜色

首先在 excalidraw 中设置五个黑边填充色块，如下图

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127974.jpeg!pkmer)

框选后，点击脚本 - Set top~

然后可选择更改背景、填充、线条颜色更改

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127975.jpeg!pkmer)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127976.jpeg!pkmer)

**Copy palette~**

用于复制其他绘图文件的颜色，使用第二个功能改完，可以保存为固定的颜色绘图文件，用于以后颜色更改

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127977.jpeg!pkmer)

### 17.3 位置与大小调整 Set Dimensions

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127978.jpeg!pkmer)

框选图形后，点击脚本按钮

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127979.jpeg!pkmer)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127980.jpeg!pkmer)

可以精确更改坐标数据和长宽数据

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127981.jpeg!pkmer)

### 17.4 更改线条宽度 Set Stroke Width

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127982.jpeg!pkmer)

框选图形后，点击脚本按钮，可设置脚本宽度

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127983.jpeg!pkmer)

默认的宽度数值是 1，2，3，4，可作为更改数值的参考

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127984.jpeg!pkmer)

### 17.5 图形组合 Boolean Operations

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127985.jpeg!pkmer)

选择两个图形，点击图标，出现如上图中五种选择

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127986.png!pkmer)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127987.png!pkmer)

值得注意的是，图层在下的图形被视为 a，颜色变化同 a

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127988.png!pkmer)

图形与线条同样可行

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127989.png!pkmer)

### 17.6 椭圆分割 split Ellipse

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127990.png!pkmer)

此脚本作用就是用线条切割椭圆，注意切割对象只能是椭圆，而切割工具也只能是线条，虽然脚本显示可以用椭圆切割椭圆，但目前测试下来 bug 很多，用线条切割能做出很多效果

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127991.jpeg!pkmer)

注意线条贯通就会切割出封闭图形，想切分线段，线条不要贯通椭圆

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127992.png!pkmer)

### 17.7 图形样式更改

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127993.png!pkmer)

选择图形，点击 change shape(也可通过命令输入)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127994.png!pkmer)

可进行基本图形更改 (不更改可 **esc 键** 跳过)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127995.png!pkmer)

然后选择填充样式 (不更改同样可 esc 键跳过)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127996.png!pkmer)

## 18. 补充

### 18.1 视觉词汇积累

大家绘画能力大都没有那么好，所以除了导入 svg，png 这种方式外，作者还提到一种类似隔纸临摹的技巧，就是从网上截图一张图片，然后把透明度降低，用线段临摹，然后保存到库里，或是用文本标识

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127997.jpeg!pkmer)

注意，切换线条的时候，透明度要换回来

## 1.9.20 更新

### 1. 图表工具 Mermaid to Excalidraw

点击 **more tools - Mermaid to Excalidraw**

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127998.png!pkmer)

使用 **mermaid 语法**创建各种图表 (流程图，甘特图等)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127999.png!pkmer)

点击图中 **flowcharts** 链接，进入语法教学网站，并且网站上有实时预览和示例内容可供参考 (点击右上角 Live Editor)

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127000.png!pkmer)

插入的部分图表 (如：甘特图)，alt + 左键点击可再次编辑

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127001.png!pkmer)

### 2. 对齐指导线

移动图形时按住 ctrl 键，会出现对齐指导线

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127002.png!pkmer)

## 1.9.21 激光笔 laser pointer

more tools - laser pointer，或快捷键 K

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127003.png!pkmer)

作用模拟老师讲课时，用激光笔提示重点的效果，可以画出一段 1-2 秒内消失的红线

点击其他绘图工具取消选择

在幻灯片模式中，点击下方按钮，同样可以使用此功能

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127004.png!pkmer)

### 1.9.28 激光笔设置

更新后，在 excalidraw 插件设置 - **显示** -**Laser pointer** 中可以对**激光笔颜色**、**显示时间**、**显示长度**进行设置

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127005.png!pkmer)

## 1.9.24 更新

### 1. 将命令转化为链接

语法为 `[[cmd://cmd-id]]` 或者 **[描述](cmd://cmd-id)**，cmd-id 是可替换内容，是英文的快捷键内容，但有语法改写，需要研究一下

也可以使用命令，ctrl+p 打开**命令面板**，输入 **Insert Obsidian Command as a link**

点击需要使用的命令嵌入，点击链接可使用命令

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127006.png!pkmer)

### 2. 嵌入系统图片

更新后，任意文件夹图片，**拖入 + ctrl+shift**，将作为图片链接存在，而不会将图片存入 obsidian

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127007.png!pkmer)

## 2.0.0 更新

### 1. 从 excalidraw 创建 md 文件

以便签 (sticky note) 形式创建图形文字，**右键菜单 - convert to file**，即可创建 markdown 文件，位置是当前 excalidraw 所属的文件夹

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127008.png!pkmer)

填入 markdown 名称

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127009.png!pkmer)

转换为嵌入的 markdown 文件

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127010.png!pkmer)

## 2.0.1 更新

### 1. 同比缩放嵌入文档

使用 **shift + 拖动缩放** 来进行视频、嵌入 markdown 和 PDF 等嵌入文档的调整不会破坏原有比例及可读性

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127011.png!pkmer)

### 2. 嵌入文件设置菜单

双击嵌入 markdown 文档，点击左上角设置按钮，对嵌入文档样式进行设置

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127012.png!pkmer)

在**取消主题匹配**的前提下 (**Use Obsidian Defaults**)，可对嵌入文档样式进行更改

**Filename Visible：**文档名显示 (如上方游鲦亭记)

**Background color：**背景颜色调整。匹配自定义元素背景 / 匹配 excalidraw 画板背景，透明度调整

**Border color：**边框颜色调整。同上

**注意**：透明度需要适度调低，不然无法显示背景条纹变化

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127013.png!pkmer)

## 2.05 更新

### 1. 本地文件拖入

现在支持本地视频 (目前仅 MP4)，音频 (MP3)，gif 等文件嵌入 excalidraw

默认按住 **ctrl + shift + 拖入** 实现

### 2. 链接 & 拖入快捷键配置

在 **excaidraw 设置 - 显示 - Link Click and Drag&Drop~** 中，可以对各项链接 & 拖入文件实现的快捷键组合进行更改

鼠标悬停显示键位名称，我只更改了一个点击链接在新页面打开

![Obsidian-Excalidraw 功能手册](https://cdn.pkmer.cn/images/202401022127014.png!pkmer)
