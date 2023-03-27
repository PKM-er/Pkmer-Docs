const child_process = require('child_process')
const basePath = app.vault.adapter.basePath.replaceAll("\\","/")
const filePath = app.workspace.activeLeaf.view.file.path
const line = app.workspace.activeLeaf.view.editor.getCursor().line

module.exports = async (params) => {
  //console.log(basePath)
  const options = ["terminal", "css", "script", "vim", "vscode"]
  const action = await params.quickAddApi.suggester(options,options)
  //console.log(action)
  if(action === options[0]){
    await child_process.exec(`wt -d ${basePath}`)
  }else if(action === options[1]){
    await child_process.exec(`code ${basePath}\\.obsidian\\snippets`)
  }else if(action === options[2]){
    await child_process.exec(`code ${basePath}\\Config`)
  }else if(action === options[3]){
    await child_process.exec(`gvim "${basePath}/${filePath}"`)
  }else if(action === options[4]){
    await child_process.exec(`code -g "${basePath}/${filePath}:${line}" `)
  }
}