//import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import PropsDisplayer from './components/PropsDisplayer';
import Weather from './components/Weather';
import Comment from './components/Comment';
import Bike from './components/Bike';
import HookExample from './components/HookExample';
import HookWeather from './components/HookWeather';
import Clock from './components/Clock';

function formatName(name) {
  return name.first + ' ' + name.last
}

function App() {

  const name = {first: 'Preshen', last: 'Govender'}

  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64',
    },
};  

  return (
    <div className="App">

      <h2>{formatName(name)}</h2>
      <MyComponent />
      <PropsDisplayer name="Preshen" location="AKL" number={42} /> {/* three separate props - name, location and number */}

      <Comment user={comment.author} date={comment.date} text={comment.text}/>

      <Weather/>
      <Bike make='Toyota'/> {/* can pass in a prop to customise the make */}
      <HookExample/>
      <HookWeather/>
      <Clock/>

    </div>
  );
}

export default App;