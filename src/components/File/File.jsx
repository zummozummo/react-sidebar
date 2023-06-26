import {
  AiOutlineFile,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFile } from "../../store";
const File = ({ name, id }) => {
  const dispatch = useDispatch()

  const toggleEditing = () => {
  }
  const commitDelete = (id) => {
    dispatch(removeFile({id:id}))
  };
  return (
    <div className="sidebarRow">
      <div className="name">
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