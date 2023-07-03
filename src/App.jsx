import Tree from "./components/sidebar/Tree";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import Editor from "./components/Editor/Editor";
import {Route, Routes} from 'react-router-dom'
function App(props) {
  const sidebar = useSelector((state) => {
    console.log("#########",state)
    return state.sidebar;
  });

  return (
    <div>
      <Tree data={sidebar} />
      <Routes>
        <Route path="/:id" element={<Editor/>}/>
      </Routes>
    </div>
  );
}


export default App;
