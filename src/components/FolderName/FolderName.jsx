import { Fragment } from "react";
import createFile from "../../actions/createFile";
import {useDispatch} from 'react-redux'
import deleteFolder from "../../actions/deleteFolder";
import {
  AiOutlineFolderAdd,
  AiOutlineFileAdd,
  AiOutlineFolder,
  AiOutlineFolderOpen,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";
const FolderName = ({ name,id,isOpen,handleClick }) => {

  const dispatch=useDispatch();
  const handleFileCreation = () => {
    dispatch(createFile("xxxxxxxxxx-filename",id))
  }
  
  const handleFolderCreation = () => {
    // dispatch(deleteFolder(id))
  }

  const handleFolderRename = () => {
    // setIsOpen(true);
    // setEditing(true);
  };
  const commitDeleteFolder = () => {
    dispatch(deleteFolder(id))

    // dispatch({ type: FOLDER.DELETE, payload: { id } });
  };

    return (
      <Fragment>
          <div classname="name" onClick={handleClick}>{isOpen ? <AiOutlineFolderOpen /> : <AiOutlineFolder />}&nbsp;&nbsp;{name}</div>
          <div
        className="actions"
      >
        <AiOutlineEdit onClick={handleFolderRename} />
        <AiOutlineFileAdd onClick={handleFileCreation} />
        <AiOutlineFolderAdd onClick={handleFolderCreation}/>
        <AiOutlineDelete onClick={commitDeleteFolder} />
      </div>
      </Fragment>
    );
  };

  export default FolderName