import React, { useContext } from "react";
import { PersonsContext } from "../../contexts/personsContext";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const AddToLikesIcon = ({ person }) => {
    const context = useContext(PersonsContext);
  
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