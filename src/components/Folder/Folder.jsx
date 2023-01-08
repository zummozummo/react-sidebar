import { Fragment, useState } from "react";
import FolderName from "../FolderName/FolderName";
const Folder = ({ name, children }) => {
    const [isOpen, setIsOpen] = useState(false);  
    return (
        <Fragment>
          <FolderName name={name} isOpen={isOpen}  handleClick={() => setIsOpen(!isOpen)}/>
          <div style={{ display:isOpen?"block":"none", paddingLeft:"20px"}}>{children}</div>  
          {/* children is TreeRecursive */}
        </Fragment>
    );
  };

  export default Folder