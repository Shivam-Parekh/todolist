import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button>Create a note</button>
        <hr
        style={{
            color: 'white',
            backgroundColor: 'blue',
            height: 5
        }}
        />
        <div className="Note-Column">
        <div>
        <li>
        <div className="Note-Item New">
          <p>HELLO HERE</p>
        </div>
        <div className="Note-Item New">
          <p>HELLO HERE 2</p>
        </div>
        </li>
        </div>
        <div>
        <li>
        <div className="Note-Item Progress">
          <p>HELLO HERE</p>
        </div>
        <div className="Note-Item Progress">
          <p>HELLO HERE 2</p>
        </div>
        </li>
        </div>
        <div>
        <li>
        <div className="Note-Item Complete">
          <p>HELLO HERE</p>
        </div>
        <div className="Note-Item Complete">
          <p>HELLO HERE 2</p>
        </div>
        </li>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
