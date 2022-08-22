import React, { useContext } from "react";
import { Context } from "../../contexts/context";
import IconButton from "@material-ui/core/IconButton";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

const AddToPlaylistIcon = ({ movie }) => {
  const context = useContext(Context);

  const handleAddToPlaylist = (e) => {
    e.preventDefault();
    context.addToPlaylist(movie);
  };
  return (
    <IconButton aria-label="add to playlist" onClick={handleAddToPlaylist}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistIcon;