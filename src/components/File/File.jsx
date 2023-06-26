import {
  AiOutlineFile,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";
import { removeFile } from "../../store";
import { useDispatch } from "react-redux";
const File = ({ name, id }) => {
  const dispatch = useDispatch()
  const toggleEditing = () => {
  }
  const commitDelete = (id) => {
    console.log("----",id)
  };
  return (
    <div className="sidebarRow" id={id}>
      <div className= "name">
        <AiOutlineFile />&nbsp;&nbsp;{name}
      </div>
      <div className="actions">
        <AiOutlineEdit onClick={toggleEditing} />
        <AiOutlineDelete onClick={()=> commitDelete(id)} />
      </div>
    </div>
  );
};


export default File