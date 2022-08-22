import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Context } from "../../contexts/Context";

const RemoveFromLikesIcon = ({ person }) => {
  const context = useContext(Context);

  const handleRemoveFromLikes = (e) => {
    e.preventDefault();
    context.removeFromLikes(person);
  };
  return (
    <IconButton
      aria-label="remove from likes"
      onClick={handleRemoveFromLikes}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromLikesIcon;