import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash'
  let sidebar=[
    {
      type: "folder",
      name: "src",
      id: uuidv4(),
      childrens: [
        {
          type: "folder",
          name: "Components",
          id: uuidv4(),
          childrens: [
            { type: "file", name: "Modal.js" ,id: uuidv4()},
            { type: "file", name: "Modal.css",id: uuidv4(), }
          ]
        },
        { type: "file", name: "index.js" ,id: uuidv4(),},
        { type: "file", name: "index.html",id: uuidv4(), }
      ]
    },
    { type: "file", name: "package.json",id: uuidv4() }
  ]
const sidebarReducer=(state=sidebar,action)=>{
    switch(action.type){
        case "CREATE_FILE":
            console.log(state)
            let tempSidebar=_.cloneDeep(state)
            let targetFolderId=action.payload.targetFolderId
            let fileObject={ type: action.payload.type, name: action.payload.name,id: uuidv4() }
            let updatedSidebar=addFileOrFolderToSidebar(tempSidebar,targetFolderId,fileObject)
            return {...updatedSidebar }
        case "DELETE_FOLDER":
            console.log("delete reducer")
            tempSidebar=_.cloneDeep(state)
            targetFolderId=action.payload.targetFolderId
            updatedSidebar=removeFolder(tempSidebar,targetFolderId)
            return {...updatedSidebar }
        default:
            return state
    }
}

//put fileObject in correct order
function addFileOrFolderToSidebar(initialState,targetFolderId,fileObject){
  console.log(initialState)
  for(let i=0;i<initialState.length;i++){
     if(initialState[i].id==targetFolderId && initialState[i].type==="folder" ){
      initialState[i].childrens.push(fileObject)
    }else if (initialState[i].type==="folder" ){
      addFileOrFolderToSidebar(initialState[i].childrens,targetFolderId,fileObject)
    }
  }
  return initialState;
}
function removeFolder(initialState,targetFolderId){
  for(let i=0;i<initialState.length;i++){
    if(initialState[i].id==targetFolderId && initialState[i].type==="folder" ){
     initialState[i].childrens.push(fileObject)
   }else if (initialState[i].type==="folder" ){
     addFileOrFolderToSidebar(initialState[i].childrens,targetFolderId,fileObject)
   }
 }
 return initialState;
}



export default sidebarReducer
