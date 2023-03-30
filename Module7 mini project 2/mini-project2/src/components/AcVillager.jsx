import React, { useState, useEffect } from 'react';

function RandomVillager() {
  const [villager, setVillager] = useState(null);

  useEffect(() => {
    async function fetchRandomVillager() {
      const response = await fetch('https://acnhapi.com/v1a/villagers/');
      const data = await response.json();
      const villagerIds = Object.keys(data);
      const randomVillagerId = villagerIds[Math.floor(Math.random() * villagerIds.length)];
      const randomVillager = data[randomVillagerId];
      setVillager(randomVillager);
    }

    fetchRandomVillager();
  }, []);

  if (!villager) {
    return <div>Loading Villager...</div>;
  }

  return (
    <div className="villager-container">
      <a href={`https://animalcrossing.fandom.com/wiki/${villager.name['name-USen'].replace(/ /g, '_')}`} target="_blank">
        <img src={villager.image_uri} alt={villager.name['name-USen']} className="villager-image" />
      </a>
      <h3>{villager.name['name-USen']}</h3>
      <p>{villager.personality}</p>
      <p>Birthday: {villager.birthday}</p>
    </div>
  );
}

export default RandomVillager;
