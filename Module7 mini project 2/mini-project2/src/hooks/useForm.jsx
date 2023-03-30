import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function FishForm(props) {
  const { newFish, handleNewFishChange, handleAddFish } = props;

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <TextField
        label="ID"
        name="id"
        value={newFish.id}
        onChange={handleNewFishChange}
      />
      <TextField
        label="Name"
        name="name"
        value={newFish.name}
        onChange={handleNewFishChange}
      />
      <br />
      <TextField
        label="Image URL"
        name="image"
        value={newFish.image}
        onChange={handleNewFishChange}
      />
      <br />
      <br />
      <Button variant="contained" onClick={handleAddFish}>
        Add Fish
      </Button>
    </form>
  );
}

export default FishForm;
