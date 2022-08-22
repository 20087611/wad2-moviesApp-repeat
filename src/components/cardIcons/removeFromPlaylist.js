import React, { useContext } from "react";
import { Context } from "../../contexts/context";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const RemoveFromPlaylistIcon = ({ movie }) => {
  const context = useContext(Context);

  const handleRemoveFromPlaylist = (e) => {
    e.preventDefault();
    context.removeFromPlaylist(movie);
  };
  return (
    <IconButton
      aria-label="remove from playlist"
      onClick={handleRemoveFromPlaylist}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromPlaylistIcon;