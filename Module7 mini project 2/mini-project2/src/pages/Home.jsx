import {Outlet} from 'react-router-dom'
import React from 'react';
import RandomVillager from '../components/AcVillager';
import RandomFish from '../components/AcFish';
import RandomBug from '../components/AcBug';

function Home() {
    return (
        <div className="About" style={{ backgroundColor: 'white', padding: '20px', paddingBottom: '100px' }}>
        <h1>Welcome to Animal Crossing</h1>
        <section>
            <a href="https://animalcrossing.fandom.com/wiki/Template:SpBox"><h2>Villagers</h2></a>
          <RandomVillager/>
        </section>
        <section>
            <a href="https://animalcrossing.fandom.com/wiki/Template:Fish"><h2>Fishing</h2></a>
          <RandomFish/>
        </section>
        <section>
            <a href="https://animalcrossing.fandom.com/wiki/Template:Bugs"><h2>Bug Catching</h2></a>
        <RandomBug/>
        </section>
      </div>
    );
  }

export default Home