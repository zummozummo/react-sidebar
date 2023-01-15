import File from "../File/file";
import Folder from "../Folder/Folder";
import _ from 'lodash'
const TreeRecursive=({data})=>{
    return data.map((item)=>{
        if (item.type === "file") {
            return <File name={item.name} id={item.id} key={item.id}/>;
          }
          if (item.type === "folder") {
            return (
              <Folder name={item.name} id={item.id} key={item.id}>
                <TreeRecursive data={item.childrens} />
              </Folder>
            );
          }
    })
}
export default TreeRecursive


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