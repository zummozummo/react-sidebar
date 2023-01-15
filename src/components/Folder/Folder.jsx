import { Fragment, useState } from "react";
import FolderName from "../FolderName/FolderName";
const Folder = ({ name,id, children }) => {
    const [isOpen, setIsOpen] = useState(false);  
    return (
        <Fragment>
          <FolderName name={name} isOpen={isOpen}  id={id} handleClick={() => setIsOpen(!isOpen)}/>
          <div style={{ display:isOpen?"block":"none", paddingLeft:"20px"}}>{children}</div>  
        </Fragment>
    );
  };

  export default Folder