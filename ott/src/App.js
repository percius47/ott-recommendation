
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <h1>OTT Recommendation</h1>
      </div>
      <div className="btnParent">
        <button className="btn">Rom-Com</button>
        
        <button className="btn">Thriller</button>
        
        <button className="btn">Disney</button>
      </div>
      <div className="inputParent">
        <input type="text" className="inputText" />

      </div>
      <div className="listParent">
        <ul className="list">
          <li className="listItem"></li>
          
          <li className="listItem"></li>
          
          <li className="listItem"></li>
        </ul>
      </div>
          </div>
  );
}

export default App;
