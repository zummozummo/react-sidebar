import { Fragment, useState } from "react";
import FolderName from "../FolderName/FolderName";

const Folder = ({ name,id, children }) => {
    const [isOpen, setIsOpen] = useState(false);  
    const handleClick = () => {
      setIsOpen(!isOpen)
      
    }
    return (
        <Fragment>
      <div className={"sidebarRow"} id={id}>
      <FolderName name={name} isOpen={isOpen} id={id} handleClick={handleClick} />
      </div>
      <div style={{ display: isOpen ? "block" : "none", paddingLeft: "20px" }}>{children}</div>
    </Fragment>
    );
  };

  export default Folder