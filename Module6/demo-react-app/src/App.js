import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import PropsDisplayer from './PropsDisplayer';
import Comment from './Comment';

function formatName(name){
return name.first+ " " + name.last;
}
const name = {
  first: 'Preshen',
  last: 'Govender'
};
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h2>Hello {formatName(name)}</h2>
      <MyComponent />
      <PropsDisplayer name="Preshen" location="Auckland" number={21} />
      <Comment user={comment.author} date={comment.date} text={comment.text}/>
    </div>
  );
}

export default App;
