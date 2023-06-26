import {
  AiOutlineFile,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";

const File = ({ name }) => {

  const toggleEditing = () => {
  }
  const commitDelete = (name) => {
  };
  return (
    <div className="sidebarRow">
      <div classname="name">
        <AiOutlineFile />&nbsp;&nbsp;{name}
      </div>
      <div className="actions">
        <AiOutlineEdit onClick={toggleEditing} />
        <AiOutlineDelete onClick={commitDelete} />
      </div>
    </div>
  );
};


export default File