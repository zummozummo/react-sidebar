import { Fragment } from "react";

const FolderName = ({ name,id,isOpen,handleClick }) => {


  function deleteFolder(id){
    console.log(id)
  }

    return (
      <Fragment>
          <div onClick={handleClick}>{name}</div>
          <span onClick={()=>deleteFolder(id)}>delete</span>
          <span>rename</span>
          <span>add</span>
      </Fragment>
    );
  };

  export default FolderName