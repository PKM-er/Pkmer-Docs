const child_process = require("child_process");
const basePath = app.vault.adapter.basePath.replaceAll("\\", "/");

module.exports = async (params) => {
    // console.log(basePath);
    const brachName = await params.quickAddApi.inputPrompt("输入分支名");
    try {
        const pushStatus = await child_process.exec(
            `git push origin ${brachName}`,
            { cwd: basePath }
        );
        if (pushStatus) {
            new Notice("push 成功");
        }
    } catch (err) {
        new Notice(err);
    }
};
