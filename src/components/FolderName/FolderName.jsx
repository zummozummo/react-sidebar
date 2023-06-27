import { Fragment } from "react";
import {
  AiOutlineFolderAdd,
  AiOutlineFileAdd,
  AiOutlineFolder,
  AiOutlineFolderOpen,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";
import { addFile, addFolder,removeFolder } from "../../store";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

const FolderName = ({ name,id,isOpen,handleClick }) => {
  const dispatch = useDispatch()
  const handleFileCreation = (id) => {
    console.log(id)
    dispatch(addFile({id: id}))
  }
  
  const handleFolderCreation = (id) => {
    dispatch(addFolder({id: id}))
  }

  const handleFolderRename = () => {
    // setIsOpen(true);
    // setEditing(true);
  };
  const commitDeleteFolder = (id) => {
    dispatch(removeFolder({id:id}));
  };

    return (
      <Fragment>
          <div className="name" onClick={handleClick}>{isOpen ? <AiOutlineFolderOpen /> : <AiOutlineFolder />}&nbsp;&nbsp;{name}</div>
          <div
        className="actions"
      >
        <AiOutlineEdit onClick={handleFolderRename} />
        <AiOutlineFileAdd onClick={()=>handleFileCreation(id)} />
        <AiOutlineFolderAdd onClick={()=>handleFolderCreation(id)}/>
        <AiOutlineDelete onClick={() =>commitDeleteFolder(id)} />
      </div>
      </Fragment>
    );
  };

  export default FolderName