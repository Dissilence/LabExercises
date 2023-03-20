import React, { useState } from 'react';
import Emoji from './Emoji';

const EmojiChanger = () => {
  const [emoji, setEmoji] = useState('😄');
  
  const handleClick = () => {
    setEmoji(prevEmoji => prevEmoji === '😄' ? '😢' : '😄');
  };

  return (
    <div className='componentBox'>
      <h2>Emoji</h2>
      <h1><Emoji symbol={emoji} /></h1>
      <button onClick={handleClick}>Switch</button>
    </div>
  );
}

export default EmojiChanger;