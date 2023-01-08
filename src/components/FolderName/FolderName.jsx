const FolderName = ({ name,handleClick }) => {
    return (
          <div onClick={handleClick}>{name}</div>
    );
  };

  export default FolderName