import logo from './logo.svg';
import './App.css';

function App() {
  const user = {
    name: 'Andy',
    age: 28,
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            A ReactJS App
          </p>
          <p>Hi my name is {user.name}, and I am {user.age} years old</p>
        </header>
      </div>
      <div>Hello</div>
    </>
  );
}

export default App;
