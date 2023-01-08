import TreeRecursive from "../TreeRecursive/TreeRecursive";
function Tree({ data, children }) {
  console.log(data)
  console.log(children)
  const isImparative = data && !children;
    return (
      <div>
        { isImparative?<TreeRecursive data={data}/>:children}
      </div>
    )
  }
  
  export default Tree