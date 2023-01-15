import { v4 as uuidv4 } from 'uuid';
const DELETE_FOLDER="DELETE_FOLDER"

function deleteFolder(id){
    return {
        type:DELETE_FOLDER,
        payload:{
            type:"folder",
            targetFolderId:id
        }
    }
}
export default deleteFolder