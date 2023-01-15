import { Fragment } from "react";
import createFile from "../../actions/createFile";
import {useDispatch} from 'react-redux'
import deleteFolder from "../../actions/deleteFolder";
const FolderName = ({ name,id,isOpen,handleClick }) => {

  const dispatch=useDispatch();
    return (
      <Fragment>
          <div onClick={handleClick}>{name}</div>
          <span onClick={()=>dispatch(createFile("xxxxxxxxxx-filename",id))}>addFile---</span>
          <span onClick={()=>dispatch(deleteFolder(id))}>deleteFolder</span>
      </Fragment>
    );
  };

  export default FolderName