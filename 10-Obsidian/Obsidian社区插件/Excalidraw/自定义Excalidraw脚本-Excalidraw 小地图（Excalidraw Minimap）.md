---
uid: 20260419111030
title: 自定义 Excalidraw 脚本 -Excalidraw 小地图（Excalidraw Minimap）
tags: [Excalidraw脚本]
description: Excalidraw 小地图（Minimap） 会在 Excalidraw 画布角落生成一个可交互的小地图，用来快速掌握整张图的结构分布，并直接完成定位、拖拽视口和缩放操作。
author: 熊猫别熬夜
type: other
draft: false
editable: false
modified: 20260419211534
---

# 自定义 Excalidraw 脚本 -Excalidraw 小地图（Excalidraw Minimap）

![260418_自定义Excalidraw脚本：Excalidraw 小地图（Excalidraw Minimap）](https://cdn.pkmer.cn/images/File-20260418092018901.png!pkmer)

### 脚本介绍

`Excalidraw 小地图（Minimap）` 会在 Excalidraw 画布角落生成一个可交互的小地图，用来快速掌握整张图的结构分布，并直接完成定位、拖拽视口和缩放操作。

主要能力：

- 实时概览当前画布中的主要元素分布，自动绘制当前视口范围
- 直接在小地图中点击任意区域，快速把主画布移动到目标位置
- 支持拖拽小地图中的视口框，连续平移主画布
- 支持滚轮围绕鼠标位置缩放，便于在局部与全局之间切换
- 点击元素区域时可选择“移动到该位置”或“平滑缩放聚焦到该元素”
- 内置设置面板，可调整最大宽高、四角停靠位置、边距、自适应尺寸等参数

适合用于内容很多、画布范围很大的 Excalidraw 文件，减少来回缩放和拖动画布的成本。脚本再次运行时会直接关闭当前 minimap，便于按需开启或退出。

### 效果演示

![260418_自定义Excalidraw脚本：Excalidraw 小地图（Excalidraw Minimap）](https://cdn.pkmer.cn/images/File-20260418090729396.gif)

### 安装链接

复制下述代码，粘贴到 md 空白文档，阅读模式下会显示为按钮，点击安装即可。

````
```excalidraw-script-install
https://raw.githubusercontent.com/PandaNocturne/ExcalidrawScripts/master/PandaScripts/ExcalidrawMinimap.md
```
````

### 拓展说明

配合 Slideshow 演示效果更佳，可以配置个 Commander 按钮在首页，然后通过 CSS 设置只在 Excalidraw 视图下显示该命令按钮：

```css
.workspace-leaf-content:not([data-type="excalidraw"]) [aria-label *="ExcalidrawMinimap"] {
  display: none;
}
```

演示效果：

![260418_自定义Excalidraw脚本：Excalidraw 小地图（Excalidraw Minimap）](https://cdn.pkmer.cn/images/File-20260419191446207.png!pkmer)

### Tip：自动加载小地图

如果你希望每次打开 Excalidraw 都自动显示小地图，可以把下面这段启动脚本配置到 Excalidraw 的自动化入口中。这样在打开 Excalidraw 文件或新建 Excalidraw 画布时，都会自动检测并加载 `ExcalidrawMinimap`，无需每次手动执行命令。

配置方式：

- 打开 Excalidraw 插件设置，进入 **Excalidraw 自动化**
    ![260418_自定义Excalidraw脚本：Excalidraw 小地图（Excalidraw Minimap）](https://cdn.pkmer.cn/images/File-20260419210249261.png!pkmer)

- 在 **启动脚本** 中指定或创建 `ExcalidrawStartup` 文档
- 将下面代码追加到该文档末尾，并保持原有格式不变
- 保存后重启 Obsidian，之后每次进入 Excalidraw 时都会自动尝试挂载小地图

适合长期把小地图作为默认工作界面的用户使用；如果你只是偶尔需要，也可以继续保持手动触发的方式。

```js


/**
 * 自动加载小地图（ExcalidrawMinimap）
 * - 在 Excalidraw 插件设置 →「Excalidraw 自动化」设置「起动脚本」，如果没有则创建
 * - 粘贴下述代码到「启动脚本 ExcalidrawStartup」文档末段，注意格式不能修改
 * - 之后重启Obsidian，Excalidraw会自动加载该脚本，之后每次打开Excalidraw都会自动加载小地图
 * - 该脚本启动时会从 app.commands.commands 中按关键字查找对应 Excalidraw 插件的ExcalidrawMinimap命令，并通过 executeCommandById() 执行。若当前视图已挂载小地图则跳过，避免再次执行命令触发「切换关闭」。
 */

const __eaMinimapRegistryKey = "__eaExcalidrawMinimapRegistry__";
const __minimapCommandKeywords = ["obsidian-excalidraw-plugin", "ExcalidrawMinimap"];

const __minimapAlreadyActive = (view) => {
    const reg = window[__eaMinimapRegistryKey];
    const container = view?.containerEl?.querySelector?.(".excalidraw-wrapper") || view?.containerEl;
    if (!reg || typeof reg.get !== "function" || !container) return false;
    return Boolean(reg.get(container));
};

const __findObsidianCommandIdByKeywords = () => {
    const commands = app?.commands?.commands;
    if (!commands) return null;

    const commandIds = Object.keys(commands).filter((key) =>
        __minimapCommandKeywords.every((keyword) => key.includes(keyword) || commands[key]?.name?.includes?.(keyword))
    );

    return commandIds[0] || null;
};

const __runExcalidrawScriptIfNeed = async (data) => {
    const { view } = data;
    if (!view) return;
    if (__minimapAlreadyActive(view)) return;

    const commandId = __findObsidianCommandIdByKeywords();
    if (!commandId) return;

    await new Promise((r) => requestAnimationFrame(r));
    app.commands.executeCommandById(commandId);
};

ea.onFileOpenHook = __runExcalidrawScriptIfNeed;
ea.onFileCreateHook = __runExcalidrawScriptIfNeed;
new Notice("🧩 已注册 Excalidraw Minimap 自启动");
```
