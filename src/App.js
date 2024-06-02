import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {TextArea} from '@douyinfe/semi-ui';

function App() {
  const [enableEdit, setEnableEdit] = useState(false);
  const [value, setValue] = useState('');
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
        
        <button onClick={() => {
          setEnableEdit(!enableEdit);
        }}>click me</button>
        <div style={{ background: 'red', color: 'white', height: 100 }}>
          {
            enableEdit ? 
          <TextArea autosize rows={1} value={value} onChange={(v) => {setValue(v)}}/>
          :
          <div>{value}</div>
          }
        </div>
      </header>
    </div>
  );
}

export default App;
