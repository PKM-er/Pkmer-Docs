---
uid: 2023080322235778
title: Obsidian 插件：Obsimian
tags: ['编程', 'obsidian插件', 'readme']
description: Obsidian 模拟框架用于测试 Obsidian 插件，并输出插件相关的信息。
author: AI
type: readme
draft: false
editable: false
modified: 20230101000000
---

# Obsidian 插件：Obsimian

> [!Note] 插件名片
> - 插件名称：Obsimian
> - 插件作者：Oliver Lade
> - 插件说明：Obsidian 模拟框架用于测试 Obsidian 插件，并输出插件相关的信息。
> - 插件分类：[' 编程 ', 'obsidian 插件 ', 'readme']
> - 项目地址：[点我访问](https://github.com/motif-software/obsimian)
> - 国内下载地址：[下载安装](https://pkmer.cn/products/plugin/pluginMarket/?obsimian-exporter)

## 概述

Obsidian 模拟框架用于测试 Obsidian 插件，并输出插件相关的信息。

![Obsimian](https://cdn.pkmer.cn/covers/obsimian-exporter.png!pkmer)

> [!tip] 原文出处
>
>下面自述文件的来源于 [Readme](https://ghproxy.net/https://raw.githubusercontent.com/motif-software/obsimian/main/README.md)
>

---

## Readme(翻译）

下面是 [[obsimian-exporter]] 插件的自述翻译

# Obsimian

![Obsidian猿人](img/obsimian-banner.jpg)

Obsidian 插件测试的模拟框架。

## 用法

如果你只是想测试你的插件代码是否符合标准的 Obsimian 测试 vault：

1. 将 Obsimian 添加为开发依赖：

   ```sh
   yarn add -D obsimian
   ```

2. 在你的测试中，创建一个使用下载的数据初始化的 `ObsimianPlugin`。

   ```ts
   describe("my plugin", () => {
     const app = new ObsimianApp(data);
     it("does the bar correctly", () => {
       expect(businessLogic.doTheBar(app)).toEqual("Bar.");
     });
   });
   ```

如果你想自定义虚拟 vault 的内容：

1. 创建一个 Obsidian vault，或者下载 Obsimian 测试 vault 作为起点。
2. 在 Obsidian 中打开 vault，并修改内容以测试你的插件的特定功能。
3. 在 Obsidian 中安装并启用 Obsimian 插件（它应该已经预装在测试 vault 中）。
4. 运行 "Obsimian: Export data for testing" 命令。默认情况下，这将在你的 Obsidian vault 根目录下创建一个 JSON 文件，但这可以在 Obsimian 插件设置中进行配置。
   ![在 Obsidian 中导出数据的命令](img/obsidian-command.png)
5. 将 JSON 文件复制到你的项目中。
6. 在你的测试中，使用 `require` 导入 JSON 数据，并将其传递给 `ObsimianPlugin` 构造函数。

设计

在可能的情况下，将您编写的代码与您使用的平台和框架解耦是一个好的实践。

编写 Obsidian 插件的最简单方法是遵循 [示例](https://github.com/obsidianmd/obsidian-sample-plugin)：

```ts
export default class MyPlugin extends Plugin {
  // 在这里放置您所有的业务逻辑。
}
```

然而，这种方式很难编写自动化测试，因为您无法实例化没有 Obsidian `App` 的 `MyPlugin`，而实例化 `App` 需要整个 Obsidian 实现。即使这是可用的，对于简单的单元测试来说也是过度的。

相反，您的插件的大部分业务逻辑应该在没有任何关于 Obsidian 功能或类型的知识的情况下编写。这样，您的业务逻辑的每个函数都可以像在任何其他项目中一样轻松进行单元测试。

### 集成

最终，您需要一些粘合代码来处理 Obsidian 和插件业务逻辑之间的通信。这应该尽可能简单。例如：

```ts
import businessLogic from "./businessLogic";

class MyPlugin extends Plugin {
  settings: MyPluginSettings;

  async onload() {
    await this.loadSettings();

    this.addCommand({
      id: "my-foo",
      name: "Do the Foo",
      callback: () => {
        businessLogic.doTheFoo(this.settings.fooPath);
      },
    });
  }
}
```

您还需要一些集成测试来验证插件在接收 Obsidian 中的真实命令时是否正常工作。这就是 **Obsimian** 的用武之地。

如果您的业务逻辑需要与 Obsidian 的 API 进行交互（很可能需要），它应该接收其依赖项的实例（例如 `Plugin`、`App`、`Vault`）作为 _参数_。这样，您的测试可以传入“假”实例，这些实例是轻量级的，并且预先填充了已知数据：

```ts
describe("my plugin", () => {
  const app = new ObsimianApp(data);
  it("does the bar correctly", () => {
    expect(businessLogic.doTheBar(app)).toEqual("Bar.");
  });
});
```

只要假组件的行为与真实组件足够相似，您就可以确信插件在实际使用中能够正常工作。

反馈

实际上，Obsidian 和 Obsimian 的行为会存在差异。Obsimian 相对较新，而 Obsidian 的发展速度相对较快。

如果您发现这样的差异，请在<https://github.com/motif-software/obsimian/issues> 中提交一个 bug 报告。最好包括一些内容和一个 API 调用来展示问题。>

## 包内容

### src/plugin

Obsimian 插件的代码，用于从 Obsidian APIs 导出数据。如果您想自定义测试 vault 数据，请安装 Obsimian 社区插件并运行“导出测试数据”命令。

### src/fakes

这是你可以用来对插件进行单元测试的虚拟 Obsidian 组件。

### 测试/保险库

测试保险库是一个真实的 Obsidian 保险库，其中包含经过精心制作的虚假内容，以揭示插件中的典型边缘情况。

开发

### 测试

测试 Obsimian 包括从测试保险库中导出数据，使用它来初始化虚拟组件，然后断言它们的 API 返回预期的输出。测试使用 Jest 运行：

```sh
jest --watch
```

添加新的测试用例可能涉及添加新的断言，向测试保险库添加新的内容，或者两者都有。

### 发布

`release-plugin` GitHub 工作流程自动化了插件的发布。当推送一个发布标签（一个没有前导 `v` 的 [semver](https://semver.org/) 版本字符串）时，它将打包 Obsidian 插件 `main.js` 并将其上传为 GitHub 发布。

Obsimian fakes 库是手动发布到 NPM 的。`yarn publish` 将 `src/fakes/index.ts` 构建为 `index.{js,d.ts}` 并将包发布到公共 NPM 注册表。
