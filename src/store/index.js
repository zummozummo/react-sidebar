import {configureStore, createSlice} from '@reduxjs/toolkit'
import { slice } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

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
          selected: true,
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

const sidebarSlice =  createSlice({
    name : "sidebar",
    initialState : sidebar,
    reducers : {
        addFile(state, action){
            state = addFileObjectToChildrens(state, action.payload.id)
        },
        removeFolder(state, action){
            state = deleteObjectByIdAndReturnArray(state, action.payload.id)
        },
        addFolder(state, action){
            state = addFolderObjectToChildrens(state, action.payload.id)
        },
        removeFile(state, action){
            state = deleteObjectByIdAndReturnArray(state, action.payload.id)
        }
    }
})

const store = configureStore({
    reducer : {
        sidebar : sidebarSlice.reducer
    }
})

export { store }
export const { addFile, addFolder, removeFolder,removeFile } = sidebarSlice.actions

function addFileObjectToChildrens(arr, targetId) {
    const fileObject = { type: "file", name: "untitled" ,id: uuidv4()}
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (item.id === targetId) {
        if (!item.childrens) {
          item.childrens = [];
        }
        item.childrens.push(fileObject);
        return true;
      }
      if (item.childrens && item.childrens.length > 0) {
        const found = addFileObjectToChildrens(item.childrens, targetId, fileObject);
        if (found) {
          return true;
        }
      }
    }
    return false;
  }


  function addFolderObjectToChildrens(arr, targetId) {
    const fileObject = { type: "folder", name: "untitled" ,id: uuidv4(),childrens:[]}
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (item.id === targetId) {
        if (!item.childrens) {
          item.childrens = [];
        }
        item.childrens.push(fileObject);
        return true;
      }
      if (item.childrens && item.childrens.length > 0) {
        const found = addFolderObjectToChildrens(item.childrens, targetId, fileObject);
        if (found) {
          return true;
        }
      }
    }
    return false;
  }


  function deleteObjectById(arr, targetId) {
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (item.id === targetId) {
        arr.splice(i, 1);
        return true;
      }
      if (item.childrens && item.childrens.length > 0) {
        const found = deleteObjectById(item.childrens, targetId);
        if (found) {
          return true;
        }
      }
    }
    return false;
  }

  const deleteObjectByIdAndReturnArray = (arr, targetId) => {
    deleteObjectById(arr, targetId);
    return arr;
  };
  
  
