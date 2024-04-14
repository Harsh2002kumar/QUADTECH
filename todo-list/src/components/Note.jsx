import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import EditNoteIcon from "@mui/icons-material/EditNote";
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  function handleEdit() {
    console.log("want to edit");
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleEdit}>
        {" "}
        <EditNoteIcon />{" "}
      </button>
      <button onClick={handleClick}>
        <CheckIcon />
      </button>
    </div>
  );
}

export default Note;
