---
uid: 20230817144756
title: 【引文 插件】Word 加载项相关问题
tags: [zotero]
description: 
author: Northword,windingwind,ShareStuff
type: other
draft: false
editable: false
modified: 20230825145845
---

# 【引文 插件】Word 加载项相关问题

## Word 中没有 Zotero 选项卡

一些朋友在 Word 中的 Zotero 选项卡突然消失了，或者使用的时候报错要求重装/升级该加载项。 **这一加载项需要在 \[Zotero 首选项\] 中安装** 。具体步骤如下：

1. 保存好正在编辑的 Word 文档，并**彻底退出 Word**。
2. 打开 [[Zotero 首选项]]。
3. 在 \[引用/Cite\] -> \[文字处理软件/Word Processors\] 中点击 \[重新安装 Microsoft Word 加载项/Reinstall Microsoft Word Add-in\] 即可完成安装/更新/重装。
    ![a17bbb40e5942085e558ce34c6f7b5fa_MD5](https://cdn.pkmer.cn/images/202308171550068.png!pkmer)

> [!warning]
> 如果退出 Word 后重新安装这一加载项仍然报错，建议重启电脑后再尝试。

## 报错“无法与 Zotero 通讯”

您已经修改该引文，是否保留更改？

![ff6fee71764b3f721be73d1bc601b855_MD5](https://cdn.pkmer.cn/images/202308171550069.png!pkmer)

该弹窗通常是用户手动修改了引文或参考文献表，比如该弹窗即为某文献在文中编码为“\[1\]”，用户手动把它修改为了“\[111\]”，Zotero 再次刷新时会询问用户是否保留这些修改？

如果用户需要保留自己的修改，则点击“是 yes”，如果用户需要抛弃自己的修改，使用 Zotero 生成的内容，则需要选择“否 No”。

> [!danger] 注意
> 请谨慎选择“是 Yes”，该操作会让 Zotero 不再更新此处！

> 注意： 所有的引注顺序更改都应在 Word “引文编辑对话框”中进行，而不是手动修改！ 所有的引注/参考文献表的样式修改都应在 CSL 文件中进行，而不是手动修改！ 所有的条目信息，如作者、标题、期刊、期卷页等，都应在 Zotero 中更新条目，而不是手动在域代码上修改！

如果已经点了 “是 yes”，Zotero 不再对这一处引文进行更新，而后续又想要 Zotero 对其更新，可以参照以下方法：

## 使 Zotero 恢复对引文的更新

首先分析一下 Word 加载项 在 word 留下的域代码结构，以 [https://doi.org/10.1021/acscatal.0c05697](https://doi.org/10.1021/acscatal.0c05697) 为例，其正常插入 Word 后产生的域代码为：

![a1f8c66bfe1a8a5a49788c23a66976e8_MD5](https://cdn.pkmer.cn/images/202308171550070.png!pkmer)

其中标黄部分是标识这是一个 Word 域代码块的声明，可以不去管，重点在包含在其中的 json 内容，为了方便理解，将其格式化后显示如下：

```
{
    "citationID": "gr3uElq7",
    "properties": {
        "formattedCitation": "\\super [1]\\nosupersub{}",
        "plainCitation": "[1]",
        "noteIndex": 0
    },
    "citationItems": [
        {
            "id": 2220,
            "uris": [
                "http://zotero.org/users/7424907/items/SUW7JYI9"
            ],
            "itemData": {
                "id": 2220,
                "type": "article-journal",
                "abstract": "To explore effective way for the complete catalytic degradation of toluene at low temperature, catalysts with diverse activity of adsorbed oxygen (Oads) and lattice oxygen (Olatt) are synthesized by introducing Sr2+ into the birnessite structure. Sr modification highly improved low-temperature catalytic activity and CO2 selectivity of toluene oxidation under moist condition, especially on the BS-7.5 (Sr:Mn = 0.075) catalyst. A series of physiochemical characterizations and DFT calculations identified abundant Olatt with higher activity in Sr-doped birnessite and higher activity of Oads in pure birnessite. In situ DRIFTS analysis further confirmed that activation of Olatt introduced by Sr replacement of Mn governed the reaction process towards continuous deep oxidation of toluene. These findings provide a deeper understanding of the mechanism of toluene degradation and strongly pave a way for improving the complete catalytic oxidation performance of VOCs at low temperature over MnO2 catalysts from the aspect of regulating active oxygen-related properties.",
                "archive": "Q1",
                "archive_location": "工程技术1区 Top",
                "call-number": "8.04",
                "collection-title": "无",
                "container-title": "Fuel",
                "DOI": "10.1016/j.fuel.2022.124116",
                "ISSN": "0016-2361",
                "journalAbbreviation": "Fuel",
                "language": "en",
                "license": "8.04",
                "note": "JCR分区: Q1\n中科院分区升级版: 工程技术1区\n中科院分区基础版: 工程技术2区\n影响因子: 8.04\n5年影响因子: 6.63\nEI: 是",
                "page": "124116",
                "source": "能源与燃料2区 工程：化工1区",
                "title": "Regulating oxygen species for promoted deep oxidation of toluene: A comparative study of adsorbed oxygen and lattice oxygen",
                "title-short": "Regulating oxygen species for promoted deep oxidation of toluene",
                "volume": "321",
                "author": [
                    {
                        "family": "Zhang",
                        "given": "Luyue"
                    },
                    {
                        "family": "Liu",
                        "given": "Yongjun"
                    },
                    {
                        "family": "Fang",
                        "given": "Xue"
                    },
                    {
                        "family": "Cheng",
                        "given": "Yan"
                    }
                ],
                "issued": {
                    "date-parts": [
                        [
                            "2022",
                            8,
                            1
                        ]
                    ]
                }
            }
        }
    ],
    "schema": "https://github.com/citation-style-language/schema/raw/master/csl-citation.json"
}

```

其被修改后，域代码则会变为：

```
{
    "citationID": "gr3uElq7",
    "properties": {
        "formattedCitation": "\\super [1]\\nosupersub{}",
        "plainCitation": "[1]",
        "dontUpdate": true,
        "noteIndex": 0
    },
    "citationItems": [
        {
            "id": 2220,
            "uris": [
                "http://zotero.org/users/7424907/items/SUW7JYI9"
            ],
            "itemData": {
                "id": 2220,
                "type": "article-journal",
                "abstract": "To explore effective way for the complete catalytic degradation of toluene at low temperature, catalysts with diverse activity of adsorbed oxygen (Oads) and lattice oxygen (Olatt) are synthesized by introducing Sr2+ into the birnessite structure. Sr modification highly improved low-temperature catalytic activity and CO2 selectivity of toluene oxidation under moist condition, especially on the BS-7.5 (Sr:Mn = 0.075) catalyst. A series of physiochemical characterizations and DFT calculations identified abundant Olatt with higher activity in Sr-doped birnessite and higher activity of Oads in pure birnessite. In situ DRIFTS analysis further confirmed that activation of Olatt introduced by Sr replacement of Mn governed the reaction process towards continuous deep oxidation of toluene. These findings provide a deeper understanding of the mechanism of toluene degradation and strongly pave a way for improving the complete catalytic oxidation performance of VOCs at low temperature over MnO2 catalysts from the aspect of regulating active oxygen-related properties.",
                "archive": "Q1",
                "archive_location": "工程技术1区 Top",
                "call-number": "8.04",
                "collection-title": "无",
                "container-title": "Fuel",
                "DOI": "10.1016/j.fuel.2022.124116",
                "ISSN": "0016-2361",
                "journalAbbreviation": "Fuel",
                "language": "en",
                "license": "8.04",
                "note": "JCR分区: Q1\n中科院分区升级版: 工程技术1区\n中科院分区基础版: 工程技术2区\n影响因子: 8.04\n5年影响因子: 6.63\nEI: 是",
                "page": "124116",
                "source": "能源与燃料2区 工程：化工1区",
                "title": "Regulating oxygen species for promoted deep oxidation of toluene: A comparative study of adsorbed oxygen and lattice oxygen",
                "title-short": "Regulating oxygen species for promoted deep oxidation of toluene",
                "volume": "321",
                "author": [
                    {
                        "family": "Zhang",
                        "given": "Luyue"
                    },
                    {
                        "family": "Liu",
                        "given": "Yongjun"
                    },
                    {
                        "family": "Fang",
                        "given": "Xue"
                    },
                    {
                        "family": "Cheng",
                        "given": "Yan"
                    }
                ],
                "issued": {
                    "date-parts": [
                        [
                            "2022",
                            8,
                            1
                        ]
                    ]
                }
            }
        }
    ],
    "schema": "https://github.com/citation-style-language/schema/raw/master/csl-citation.json"
}

```

可以看到，多了第六行 `"dontUpdate": true,`，我们将这一行去掉，再更新域代码，即可恢复 Zotero 对该处的更新。