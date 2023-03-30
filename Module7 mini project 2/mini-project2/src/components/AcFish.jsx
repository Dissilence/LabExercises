import React, { useState, useEffect } from 'react';

function RandomFish() {
  const [fish, setFish] = useState(null);

  useEffect(() => {
    async function fetchRandomFish() {
      const response = await fetch('https://acnhapi.com/v1a/fish/');
      const data = await response.json();
      const fishIds = Object.keys(data);
      const randomFishId = fishIds[Math.floor(Math.random() * fishIds.length)];
      const randomFish = data[randomFishId];
      setFish(randomFish);
    }

    fetchRandomFish();
  }, []);

  if (!fish) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fish-container">
      <a href={`https://animalcrossing.fandom.com/wiki/${fish.name['name-USen'].replace(/ /g, '_')}`} target="_blank">
        <img src={fish.image_uri} alt={fish.name['name-USen']} className="fish-image" />
      </a>
      <h3>{fish.name['name-USen']}</h3>
      <p>The {fish.name['name-USen']} is a {fish.availability.location} fish that can be caught {fish.availability.time}.</p>
    </div>
  );
}

export default RandomFish;
