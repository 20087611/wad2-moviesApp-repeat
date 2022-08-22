import React, { useContext } from "react";
import { Context } from "../../contexts/context";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const AddToLikesIcon = ({ person }) => {
    const context = useContext(Context);
  
    const handleAddToLikes = (e) => {
      e.preventDefault();
      context.addToLikes(person);
    };
    return (
      <IconButton aria-label="add to likes" onClick={handleAddToLikes}>
        <ThumbUpIcon color="primary" fontSize="large" />
      </IconButton>
    );
  };
  
  export default AddToLikesIcon;