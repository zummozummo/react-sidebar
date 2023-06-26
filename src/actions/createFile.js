import { v4 as uuidv4 } from 'uuid';
const CREATE_FILE="CREATE_FILE"

function createFile(name,id){
    console.log('file creationn')
    return {
        type:CREATE_FILE,
        payload:{
            type:"file",
            name:name,
            targetFolderId:id
        }
    }
}
export default createFile