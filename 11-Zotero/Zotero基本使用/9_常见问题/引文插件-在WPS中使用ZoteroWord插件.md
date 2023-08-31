---
uid: 20230817144839
title: 【引文 插件】在 WPS 中使用 Zotero Word 插件
tags: [zotero]
description: 
author: windingwind,不秃燃的小老弟
type: other
draft: false
editable: false
modified: 20230825145847
---

# 【引文 插件】在 WPS 中使用 Zotero Word 插件

## 前言（很重要哦！）

> [!info] **Zotero Word 插件在 WPS 的使用操作与 Office Word 类似，因此不再展开说明，点击下方蓝字可查看 📝** [[3_1-在Word中插入引文]]
> **🔊🔊🔊 必看！！！**：当新建一个空白的 Word 文档用 WPS 打开撰写论文等情况时：一定要先用 WPS 里的 Zotero Word 加载项插入几个文献，再点击**Add/Edit Citation 等这 6 个按钮**，尤其是一定要多次点击**Refresh**和**Unlink Citations**按钮，检查是否正常使用！！！（无法正常使用请见本文档 **四、Refresh/Unlink Citations 莫名失效**）

> [!warning] **以下是 WPS 的 Zotero Word 加载项的常见问题及解决方法，均以 Window 系统为例演示 📝：**

## 一、没有显示 Zotero 加载项

![73de88ecec3bbba2ddefc69fa5741dbf_MD5](https://cdn.pkmer.cn/images/202308171549090.png!pkmer)

 > [!note] **❓**如上图所示，WPS 的文档界面不显示 Zotero 加载项。**解决办法如下**：

### 1、检查 Microsoft Word 加载项

检查 Zotero 是否已正常安装好** Microsoft Word 加载项**。安装此加载项的步骤，详见 Zotero 百科全书的 [[引文 插件-Word加载项相关问题]]（点击左侧蓝字自查）

![42fea2a0d227bed01785cc85ce58399e_MD5](https://cdn.pkmer.cn/images/202308171549091.png!pkmer)

1）若上图的【**文字处理软件/Word Processors**】没有内容显示，则需要在 Zotero 软件界面，单击打开【**工具/Tools**】-【**插件/Add-ons**】

![9cd5e195ba383add13c77c6cef3492e8_MD5](https://cdn.pkmer.cn/images/202308171549092.png!pkmer)

2）找到【**Zotero Word for Windows Integration**】插件，单击【**disable**】将其移除，再单击【**Restart now**】，重启后，再单击【**Enable**】完成安装。

![e0845b210b6f6ca8076a81a78e5853f3_MD5](https://cdn.pkmer.cn/images/202308171549093.png!pkmer)

![4a3c7755cb85eb19bc614090a3f08676_MD5](https://cdn.pkmer.cn/images/202308171549094.png!pkmer)

### 2、WPS.VBA 插件的安装

若 WPS 为**个人版**，需额外安装 [**VBA 插件**](https://pan.baidu.com/s/1y-cjisA6Lxbnw3r3g_jmKA?pwd=moyu)（点击左侧蓝字获取插件）

> [!warning] 注意
>  **🏷️ 注**： WPS 专业版等版本一般已自带 VBA 宏功能，Zotero 加载项如有使用问题，也可选择安装 VBA 插件。

1）将 WPS.VBA 安装程序**下载并保存**到电脑，确保 WPS 程序是 **未运行 **状态。

![fb54e92ec7ed8c0a631028f76695a78a_MD5](https://cdn.pkmer.cn/images/202308171549095.png!pkmer)

2）**双击**打开 WPS.VBA 安装程序，依次单击【**Next**】，最后单击【**Finish**】。用 WPS 打开任意一个 word 文档，检查是否正常显示 Zotero 加载项。

![f30e9f8627698b66e84c9bdc9a595663_MD5](https://cdn.pkmer.cn/images/202308171549096.png!pkmer)

> [!warning] 注意
> **🏷️ 注：** 若 WPS.VBA 安装后，仍未显示 Zotero 加载项，或需将【**宏安全性**】设成低（但不建议）。除此外可见下方**3、补充 Zotero.dotm 文件**

### 3、补充 Zotero.dotm 文件

1）在 Zotero 图标处**右键单击**，单击【**打开文件所在的位置**】打开 Zotero 安装路径

![e2f9f84e616a8113ce86de71f95e6764_MD5](https://cdn.pkmer.cn/images/202308171549097.png!pkmer)

2）依次双击打开【**extensions**】-【**zoteroWinWordIntegration@zotero.org】-【install**】文件夹，复制 **Zotero.dotm** 文件。

![8addbd81b3d85f5501f1a58020ab3191_MD5](https://cdn.pkmer.cn/images/202308171549098.png!pkmer)

![67c928f040091835a073775ea418ff4c_MD5](https://cdn.pkmer.cn/images/202308171549099.png!pkmer)

> [!warning] 主题
>  **🏷️ 注**：如果上图文件夹位置没有 Zotero.dotm，可点击右侧蓝字获取 [**Zotero.dotm**](https://pan.baidu.com/s/1EMfR5KRi8Mxxn9Wa7UR7Ag?pwd=moyu)

3）在 WPS 图标处**右键单击**，单击【**打开文件所在的位置**】打开 WPS 安装路径。

![1e7deb7a378eadbeda2d05f2ed6408ca_MD5](https://cdn.pkmer.cn/images/202308171549100.png!pkmer)

> [!warning] 注意
> **🏷️ 注**：以上前提是确保 WPS 已关闭，不在运行中！！！

4）找到并打开**版本最新**的文件夹（即**数字最大**），再依次打开【**office6**】-【**startup**】

![2a4390faa87ca714c9264b8f3bae4b64_MD5](https://cdn.pkmer.cn/images/202308171549101.png!pkmer)

![6dd98ac109ac059509e72720c885e733_MD5](https://cdn.pkmer.cn/images/202308171549102.png!pkmer)

5）在 WPS 的【**startup**】启动项文件夹内，粘贴 **Zotero.dotm** 文件。再次用 WPS 打开任一 Word 文档，检查 WPS 是否已显示 Zotero 加载项。

![50a0fa1a34f38c62dcbd4cc31b579087_MD5](https://cdn.pkmer.cn/images/202308171549103.png!pkmer)

## 二、Zotero 加载项出现弹窗报错

![b8282b0cdce33505057400c176ea2cc5_MD5](https://cdn.pkmer.cn/images/202308171549104.png!pkmer)

> [!note] **❓**
> 如上图所示，在 WPS 使用 Zotero 加载项的各个按钮时，会出现弹窗警告。**解决方法如下**：

### 1、解决方法一

新建一个 Word 文档，先用 **Office **打开此文档，用 Zotero 加载项 **插入一篇文献 **后，保存此文档即可。

![83ee28582510c7573aceb4284b3c4ac0_MD5](https://cdn.pkmer.cn/images/202308171549105.png!pkmer)

> **🏷️ 注**：设置较简单，仅适用于**同时安装 Office 和 WPS**。以后再使用时，可能还会报错。
> 如仍报错：可能是将光标置于插入引文 Citaion 和参考文献 References 位置的**前后或内部**
> 解决方法：将光标定位在远离上述位置如正文文字处

### 2、解决方法二

1）单击【**开发者工具**】-【**加载项**】，弹出的对话框单击【**选用**】。

![a24bbdd6425f0d2aea3a7f34a0989386_MD5](https://cdn.pkmer.cn/images/202308171549106.png!pkmer)

> [!warning] **🏷️ 注**
>  设置较复杂，适用于 **同时装有 Office 和 WPS **或 **只装有 WPS**
>  **🏷️ 注**：若【**开发工具**】选项卡的内容为灰色，即无法点击操作。
>  **解决方法**：安装 WPS.VBA 插件（详见本文档 **WPS.VBA 插件的安装**）
>  或需升级更新 WPS 版本，以及可能需要安装使用 WPS 专业版等版本。

2）弹出对话框，双击进入上方地址栏并复制**地址**，或地址栏处右键单击，再单击【**将地址复制为文本**】。复制好地址后，即可关闭当前窗口。

![81ab37e57b20cd4223c7e3b4c42f0232_MD5](https://cdn.pkmer.cn/images/202308171549107.png!pkmer)

3）单击【**文件**】选项卡，再单击【**打开**】。将 **地址** 粘贴至【**文件名**】，【**文件类型**】选择 **所有文件**，然后单击【**打开**】。

![6b8137561c99a0795bdcb48f57fab85e_MD5](https://cdn.pkmer.cn/images/202308171549108.png!pkmer)

![d8772b1c75f067c9322b337c5b6fe717_MD5](https://cdn.pkmer.cn/images/202308171549109.png!pkmer)

4）选中 **Normal.dotm** 文件，单击【**打开**】，随之打开名为 **Normal.dotm** 文档。

![4de80b5cd85863024d63689cdf806721_MD5](https://cdn.pkmer.cn/images/202308171549110.png!pkmer)

5）在 **Normal.dotm** 文档内，依次单击【**文件**】-【**文档加密**】-【**属性**】

![5ff7f644bdf93f26d18e48f2f0ee3c43_MD5](https://cdn.pkmer.cn/images/202308171549111.png!pkmer)

6）在 **Normal.dotm** 属性对话框，切换到【**自定义**】窗口，【**名称**】和【**取值**】分别输入 **ZOTERO_PREF_1** 和 **1** ，点击【**添加**】。同理，再添加上 **ZOTERO_PREF_2** 和 **1** ，最后点击【**确定**】。

![fcbe2e6cdb021edcad348da71e947a2a_MD5](https://cdn.pkmer.cn/images/202308171549112.png!pkmer)

这一步完成的效果如下：

![a2f3237d76883f049b272f29abdf0c51_MD5](https://cdn.pkmer.cn/images/202308171549113.png!pkmer)

7）左上角单击【**保存**】图标或快捷键 **Ctrl+S** 保存 **Normal.dotm** 文档。重新用 WPS 打开一个 Word 文档检查是否不再出现报错窗口。

![8a33ca40095a62ad5b3c6857dc6add55_MD5](https://cdn.pkmer.cn/images/202308171549114.png!pkmer)

> **🏷️ 注**：如仍报错：可能是将光标置于插入引文 Citaion 和参考文献 References 位置的**前后或内部**
> 解决方法：将光标定位在远离上述位置如正文文字处

## **三、Refresh/Unlink Citations 问号图标**

![d566856af09a69bd03db196b1e3744cf_MD5](https://cdn.pkmer.cn/images/202308171549115.png!pkmer)

> **❓**如上图所示，**Refresh ** 和 **Unlink Citations ** 图标显示为问号，**解决办法如下**：

### 1、直接安装美化后的图标文件

1）我已创建 5 种 [Refresh 和 Unlink Citations 图标](https://pan.baidu.com/s/1BXjo-ZOT971qlsY-zboIdA?pwd=moyu)（任选其一），可直接安装使用。点击上方蓝字即可获取，首先将其**下载并保存**到电脑（如下图所示）。

![a01d83b2dbe0f1d2c356c891336416ec_MD5](https://cdn.pkmer.cn/images/202308171549116.png!pkmer)

> [!warning] **🏷️ 注**：
> 只需选择使用一个自己喜爱的图标文件或可自己编辑设计图标。

下方是 5 个已编辑好的 **Refresh **和 **Unlink Citations **图标的图片展示。

![15e71e5849e591f2252b7e706e8d6707_MD5](https://cdn.pkmer.cn/images/202308171549117.png!pkmer)

2）将上述**任一 Zotero**文件，粘贴至 WPS 的**启动项文件夹**内（详见本文档的 **补充 Zotero.dotm 文件**）

3）用 WPS 打开任一 Word 文档，但是会显示有 2 个 Zotero 加载项。

![7b352103fed9e315ab8c3543f0ceb4f1_MD5](https://cdn.pkmer.cn/images/202308171549118.png!pkmer)

> [!warning] **🏷️ 注**：
> 因为没更换 Zotero 安装路径的 Zotero.dotm，且 Office Word 的启动项文件夹未放置 Zotero.dotm。

> [!info]
> 这样做的考虑是：保持 Office Word 的 Refresh 和 Unlink Citations 图标不变动，同时保留原有的 Zotero.dotm，以备不时之需。当然也可自己按喜好设置更换。

### 只保留 1 个 Zotero 加载项

1）依次单击【**开发者工具**】-【**加载项**】。 单击选中 **Zotero.dotm**，单击【**禁用**】。

![df5d7f252fb711f5362abd06c293f8fd_MD5](https://cdn.pkmer.cn/images/202308171549119.png!pkmer)

2）**Zotero.dotm** 前面方框，此刻已更改成 **取消勾选**，点击【**确定**】即可。

![aab13e38e1dbeb28f675129f45f38af8_MD5](https://cdn.pkmer.cn/images/202308171549120.png!pkmer)

## 四、Refresh/Unlink Citations 莫名失效

有时新建 Word 文档，用 WPS 打开后，无故出现点击 Refresh 和 Unlink Citations 功能失效（即无响应或莫名删掉引文 Citation）。

**解决方法**：

1）不要将光标置于插入引文 Citaion 和参考文献 References 的位置（即将光标定位在远离上述位置如正文文字处，再点击 Refresh 按钮）

2）重启 WPS，或新建一个 Word 文档，再用 WPS 打开。或必要时重启电脑即可正常使用。

> **🔊🔊🔊 必看！！！**：当新建一个空白的 Word 文档用 WPS 打开撰写论文等情况时：一定要先用 WPS 里的 Zotero Word 加载项插入几个文献，再点击**Add/Edit Citation 等这 6 个按钮**，尤其是一定要多次点击**Refresh**和**Unlink Citations**按钮，检查是否正常使用！！！

# 致谢

> [!info]
> 👍 到这里，在 WPS 中使用 Zotero Word 加载项的使用已接近尾声。在此由衷地感谢来自 b 站、知乎、CSDN 等网站的大神们分享的有关 WPS 的 Zotero Word 加载项使用的宝贵经验！！！
