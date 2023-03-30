import { useState } from 'react';
import AcFishing from '../assets/AcFishing.jpg';
import AcBells from '../assets/AcBells.png';

function About() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="About" style={{ backgroundColor: 'white', padding: '20px', paddingBottom: '100px' }}>
      <h1>About</h1>
      <p>
        Animal Crossing: New Horizons is a social simulation game developed and published by Nintendo in 2020 for the
        Nintendo Switch; it is the fifth main entry in the Animal Crossing series. In New Horizons, the player controls a
        character who moves to a deserted island after purchasing a getaway package from Tom Nook, accomplishes assigned
        tasks, and develops the island as they choose. They can gather and craft items, customize the island, and develop
        it into a community of anthropomorphic animals.
      </p>
      <p>
        New Horizons began its development in 2012. The game director, Aya Kyogoku, retained old content from previous
        games to keep fans happy and also ensured that the game was simple enough to appeal to newcomers. With art and
        graphics, the developers used the concept of "trigger of play" and the "imagination gap", where the former kept
        the gameplay simplistic and easy to pick up while the latter kept the art style simple for the player to imagine
        the rest. The game was announced at E3 2019 via a Nintendo Direct and after an extended development period,
        released worldwide March 20, 2020.
      </p>
      <br/>
      <br/>
      <a href="https://www.nintendo.com/games/detail/animal-crossing-new-horizons-switch/" target="_blank">
        <img src={AcFishing} alt="Animal Crossing Fishing"
          style={{
            width: isHovered ? '400px' : '250px',
            height: isHovered ? '400px' : '250px',
            objectFit: 'cover',
            borderRadius: '10px',
            marginLeft: '0',
            transition: 'all 0.2s ease-in-out',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </a>
      <br/>
      <br/>
      <p>
        New Horizons received acclaim from critics, who praised its gameplay and customization options and called it the
        best game in the Animal Crossing series. The game was nominated for over a dozen awards and was a contender for
        Game of the Year. It was a major commercial success, selling over 40 million copies worldwide and breaking the
        console game record for most digital units sold in a single month. It is the best-selling game in the Animal
        Crossing series, the second best-selling game on the Nintendo Switch, the best-selling game of all time in Japan,
        and the 14th best-selling video game in history. Its commercial success has been attributed in part to its release
        amid global stay-at-home orders during the COVID-19 pandemic. The game has been used as a substitute for social
        interactions such as weddings and graduation ceremonies, as well as political campaigning and virtual protests.
        The game also inspired fan creations, such as a trading website, a talk show, and other comics and merchandise.
        It also received major updates adding new content until November 5, 2021.
      </p>
      <a href="https://www.nintendo.com/games/detail/animal-crossing-new-horizons-switch/" target="_blank">
        <img src={AcBells} alt="Animal Crossing Fishing"
          style={{
            width: '300px',
            height: '450px'
          }}
        />
      </a>
      
    </div>
  );
}

export default About;
