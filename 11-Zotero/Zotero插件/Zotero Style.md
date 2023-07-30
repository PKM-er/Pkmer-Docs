# Zotero Style
一款高度自由化、高度自定义Zotero扩展功能的插件。


## 常见问题

### 1.期刊标签不显示
> 期刊标签现需要配置easyScholar密钥（以前不需要）

1. 打开es[官网](https://www.easyscholar.cc/)
2. 注册登录
3. 根据自己需求决定是否付费

![es定价](https://github.com/MuiseDestiny/Pkmer-Docs/assets/51939531/0c661229-ce27-4293-8b4f-9132bf991e17)

4. 点击**我的信息**

![image](https://github.com/MuiseDestiny/Pkmer-Docs/assets/51939531/426a37b7-1db3-4e87-ae45-0e6548f3b690)


5. 点击**开放接口**

![image](https://github.com/MuiseDestiny/Pkmer-Docs/assets/51939531/fd046eb1-2a0e-4d06-94d4-85e33cd8a301)

6. 复制**密钥SecretKey**

![image](https://github.com/MuiseDestiny/Pkmer-Docs/assets/51939531/040e13ba-9536-42dc-b835-d41545fd97c6)

7. 打开Zotero，进入Run Javascript

![image](https://github.com/MuiseDestiny/Pkmer-Docs/assets/51939531/fbec0147-9691-410d-b0c5-1377cd625039)

8. 运行下图代码（点击Run运行）

下面代码不要直接运行，把**你的密钥**删除，相同位置粘贴你的密钥，且注意要保留两边的英文双引号（不要误删）。

```js
Zotero.Prefs.set(
    "easyscholar.secretKey",
    "你的密钥"
    )
```

![image](https://github.com/MuiseDestiny/Pkmer-Docs/assets/51939531/e4a5e6ec-f81f-40bf-922f-6fe5e4ca8930)


9. 配置你的期刊标签**列设置**

在下图红框内鼠标右键，在弹出菜单中选择倒数第二个**列设置**并单击

![image](https://github.com/MuiseDestiny/Pkmer-Docs/assets/51939531/59a7b99e-aeb9-428e-913e-681f7045edd3)


10. 我的配置如下

`Fileds`: `sciwarn, sci, sciif5, cssci, xju`

`Map`: `北大中文核心=北核, SCIIF=IF, SCIIF(5)=IF(5), SCI基础版=中科院,`

`Rank Colors`: `#ffe2dd, #e8deee, #dbeddb, #fadec9, #e9e8e7`

![image](https://github.com/MuiseDestiny/Pkmer-Docs/assets/51939531/0dbaea52-a9a0-4384-80f8-39de276a369f)

11. 单击某篇文献的期刊标签以更新

稍等片刻后，右下角会弹窗此期刊支持的Field和value，可以看到它支持`CPU`，若想显示CPU
你的Fields应该变更为: `sciwarn, sci, sciif5, cssci, xju, CPU`

![image](https://github.com/MuiseDestiny/Pkmer-Docs/assets/51939531/fd62baa8-df59-470d-adb4-639cdbf208c5)

12. 批量更新

按`Shift + P`，然后点击**更新期刊标签**即可

![image](https://github.com/MuiseDestiny/Pkmer-Docs/assets/51939531/1befe2d9-c1d6-433d-a127-2ac47f62b1e9)

### 2.评级乱码

![image](https://github.com/MuiseDestiny/Pkmer-Docs/assets/51939531/787d3303-c47e-490c-93c1-36bf85e90405)

红框内右键，点击列设置，修改Mark和Option内容即可。

我的配置：🐇 🥕

### 3.全文翻译配置

全文翻译虽然是`Zotero Style`的功能，但它基于`Zotero PDF Translate`和`Zotero Better Notes`插件。
所以上述三个插件都需要安装。

**你需要打开PDF后按Shift+P才会出现`全文翻译`命令**

### 4.关系图谱只有默认视图

鼠标移动至关系图谱底部，切换视图的按钮才会出现，然后点击即可。
![image](https://github.com/MuiseDestiny/Pkmer-Docs/assets/51939531/8513b01a-b607-42dc-ace3-ba5360f4f724)

### 5.文献里出现了很多乱码笔记


![image](https://github.com/MuiseDestiny/Pkmer-Docs/assets/51939531/efb8cfaa-98b3-4e9a-b574-401d2027900a)


![image](https://github.com/MuiseDestiny/Pkmer-Docs/assets/51939531/a29b22bb-3f8c-45bc-afc6-d13aa300dcab)

这是Zotero Style产生的，每一个乱码笔记对应一篇文献的阅读进度。

如何不产生它？

1. 在你的A PC（比如你实验室电脑）创建一个`style.json`，如果你想要它同步可以创建在可同步的目录下，比如`E:\OneDrive\style.json`
2. 首选项点击Choose，选择刚刚创建的`style.json`
![image](https://github.com/MuiseDestiny/Pkmer-Docs/assets/51939531/6ff8874c-0cc3-446b-bec6-f629ea803cac)
3. 点击选项File
![image](https://github.com/MuiseDestiny/Pkmer-Docs/assets/51939531/b6c9e7f4-4b11-48d3-968b-ad1ef7f672ee)
4. 根据提示重启Zotero
5. 在B PC上选择同步过来的`style.json`文献，然后重启Zotero

这样就可以实现同步，且不产生所谓的乱码笔记，而且存储效率更高。

### 6.`Shift+P`没有某些命令

假设
- 存在文献A，带有标签`已读`
- 存在文献B，无标签

首先需要明确的是，Shift+P是有操作对象的概念的，你选中文献A后按`Shift+P`，由于A有标签A，所以命令里会有`标签`，然后你可以随意定义A的`已读`标签的颜色。
然而，当你选中B后，它没有标签，所以`标签`命令将会隐藏。







