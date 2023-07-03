import { AiOutlineFile, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFile } from "../../store";
import { Link, useNavigate } from "react-router-dom";
import { addCurrentNode } from "../../store";
const File = ({ name, id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleEditing = () => {};
  const commitDelete = (id) => {
    dispatch(removeFile({ id: id }));
  };

  function clickHandler(e, id){
    e.preventDefault()
    dispatch(addCurrentNode({id:id}))
    navigate(id);
}

  return (
    <div className="sidebarRow">
      <Link to ={id} onClick={(e)=>clickHandler(e,id)}>
        <div className="name">
          <AiOutlineFile />
          &nbsp;&nbsp;{name}
        </div>
      </Link>
      <div className="actions">
        <AiOutlineEdit onClick={toggleEditing} />
        <AiOutlineDelete onClick={() => commitDelete(id)} />
      </div>
    </div>
  );
};

export default File;
