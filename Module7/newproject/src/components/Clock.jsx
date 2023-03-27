import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from "../context/ThemeContext";

function Clock(){
  const [date, setDate] = useState(new Date());
  const themeContext = useContext(ThemeContext);
  
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <div className="Clock componentBox" style={{backgroundColor: themeContext.theme.background, color: themeContext.theme.foreground}}>
    <span>
      {date.toLocaleTimeString()}
    </span>
    </div>
  );
}
export default Clock;