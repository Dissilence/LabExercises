import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

function FishList() {
  const [fishes, setFishes] = useState([]);
  const [newFish, setNewFish] = useState({ id: "", name: "", image: "" });
  const [open, setOpen] = useState(false);
  const [currentFish, setCurrentFish] = useState();
  const [showForm, setShowForm] = useState(false);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    axios.get("https://acnhapi.com/v1/fish").then((response) => {
      const fishData = Object.entries(response.data).map(([id, data]) => ({
        id: id.replace(/ /g, "_"),
        name: data["name"]["name-USen"]
          .replace(/[-_]/g, " ")
          .toLowerCase()
          .replace(/^\w/, (c) => c.toUpperCase()),
        image: data["image_uri"],
        price: data["price"],
        description: data["museum-phrase"],
      }));
      setFishes(fishData.sort((a, b) => a.name.localeCompare(b.name)));
    });
  }, []);

  const [hoveredFish, setHoveredFish] = useState();

  const [newFishDetail, setNewFishDetail ] = useState({
    id: "",
    name: "",
    image: "",
    price: "",
    description: "",
  });

  const handleFishHover = (fish) => {
    setHoveredFish(fish);
  };

  const handleFishLeave = () => {
    setHoveredFish(null);
  };

  const handleNewFishChange = (event) => {
    setNewFish({ ...newFish, [event.target.name]: event.target.value });
  };

  const handleAddFish = () => {
    setFishes([...fishes, newFish]);
    setNewFish({ id: "", name: "", image: "" });
  };

  const handleRemoveFish = (fish) => {
    setFishes(fishes.filter((f) => f.id !== fish.id));
  };

  const handleOpen = (fish) => {
    setCurrentFish(fish);
    setOpen(true);
  };

  const handleClose = () => {
    setCurrentFish(null);
    setOpen(false);
  };

  const handleNewFishDetail = (event) => {
    setNewFishDetail({ ...newFishDetail, [event.target.name]: event.target.value });
  };
  
  const handleClick = () => {
    setShowForm(true);
  };

  return (
    <>
      <Grid container spacing={3}>
        {fishes.map((fish) => (
          <Grid item key={fish.id} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={fish.image}
                alt={fish.name}
                onMouseEnter={() => handleFishHover(fish)}
                onMouseLeave={() => handleFishLeave()}
                sx={{
                  transform:
                    hoveredFish === fish ? "scale(1.2)" : "scale(1)",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {fish.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: {fish.id}
                </Typography>
                <Button onClick={() => {
                  setHoveredFish(fish);
                  handleOpen();
                }}>Details</Button>
                <Button onClick={() => handleRemoveFish(fish)}>Remove</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br/>
      <br/>
      <br/>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{hoveredFish?.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>Price: {hoveredFish?.price} bells</DialogContentText>
          <br/>
          <DialogContentText>{hoveredFish?.description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
      <br/>
      <br/>
      <div className="About" style={{ backgroundColor: 'white', padding: '10px', paddingBottom: '10px', width: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh', margin: '0 auto', borderRadius: '10px' }}>
      <div>
      {showButton && <button onClick={handleClick}>Add Fish</button>}
      {showButton || <p>The button was clicked!</p>}
      </div>
      {showForm && (
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
    label="Bell Amount"
    name="price"
    value={newFish.price}
    onChange={handleNewFishChange}
  />
  <TextField
    label="Description"
    name="description"
    value={newFish.description}
    onChange={handleNewFishChange}
  />
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
)}
</div>
<br />
<br />
    </>
  );
}  
export default FishList;