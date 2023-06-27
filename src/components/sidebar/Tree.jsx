import TreeRecursive from "../TreeRecursive/TreeRecursive";
import '../sidebar/Tree.style.css';

function Tree({ data, children }) {
   console.log(data)
    return (
      <div className="sidebar">
        <TreeRecursive data={data}/>
      </div>
    )
  }
  
  export default Tree