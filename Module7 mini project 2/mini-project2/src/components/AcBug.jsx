import React, { useState, useEffect } from 'react';

function RandomBug() {
  const [bug, setBug] = useState(null);

  useEffect(() => {
    async function fetchRandomBug() {
      const response = await fetch('https://acnhapi.com/v1a/bugs/');
      const data = await response.json();
      const bugIds = Object.keys(data);
      const randomBugId = bugIds[Math.floor(Math.random() * bugIds.length)];
      const randomBug = data[randomBugId];
      setBug(randomBug);
    }

    fetchRandomBug();
  }, []);

  if (!bug) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bug-container">
      <a href={`https://animalcrossing.fandom.com/wiki/${bug.name['name-USen'].replace(/ /g, '_')}`} target="_blank">
        <img src={bug.image_uri} alt={bug.name['name-USen']} className="bug-image" />
      </a>
      <h3>{bug.name['name-USen']}</h3>
      <p>The {bug.name['name-USen']} is a {bug.availability.location} bug that can be caught {bug.availability.time}.</p>
    </div>
  );
}

export default RandomBug;
