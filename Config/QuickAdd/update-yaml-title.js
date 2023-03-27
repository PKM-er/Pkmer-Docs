
//This file changes the title value in yaml to the file name
module.exports = async (params) => {
  const currentFile = app.workspace.activeLeaf.view.file
  const newTitle = currentFile.basename
  if(!currentFile || !currentFile.path.startsWith("Publish")){
    return
  }
  const frontmatter = app.metadataCache.getFileCache(currentFile)?.frontmatter
  if(!frontmatter){
    return 
  }

  const {position: {start, end}} = frontmatter
  const fileContent = await app.vault.cachedRead(currentFile)
  const newFileContent = fileContent.split("\n").map((line, index)=>{
    if(index > end){
      return line
    }
    if(/^title: .*/.test(line)){
      return `title: ${newTitle}`
    }
    return line
  }).join("\n")
  //console.log(newFileContent)
  await this.app.vault.modify(currentFile, newFileContent)
}