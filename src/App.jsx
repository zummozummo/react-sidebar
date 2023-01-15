import Tree from "./components/sidebar/Tree"
import { v4 as uuidv4 } from 'uuid';
import store from "./store/store";
function App(props) {
  const state = store.getState();
  console.log(state)
  return (
    <div>
      <Tree data={state.sidebarJson}/>
    </div>
  )
}

// let  sidebarJson=[
//   {
//     type: "folder",
//     name: "src",
//     id: uuidv4(),
//     childrens: [
//       {
//         type: "folder",
//         name: "Components",
//         id: uuidv4(),
//         childrens: [
//           { type: "file", name: "Modal.js" ,id: uuidv4()},
//           { type: "file", name: "Modal.css",id: uuidv4(), }
//         ]
//       },
//       { type: "file", name: "index.js" ,id: uuidv4(),},
//       { type: "file", name: "index.html",id: uuidv4(), }
//     ]
//   },
//   { type: "file", name: "package.json",id: uuidv4() }
// ]

export default App
