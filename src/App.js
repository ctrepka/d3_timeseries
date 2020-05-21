import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import { data as d } from './Data/data'
import Timeline from './Components/Timeline'

function App() {

  const [highlight, setHighlight] = useState();
  const [data,setData] = useState(d);
  const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }
  
  const projects = data.TimeStamp.map( ts => ts.parentProject.Name );
  const uniqueProjects = projects.filter(unique);

  return (
    <div className="App">
      <h1>TimeStamps by Project Timeline</h1>
      <Timeline data={data.TimeStamp} highlight={highlight} />
      <h2>Highlight a Project</h2>
      <select value={highlight} onChange={ e => setHighlight(e.target.value)}>
        <option>Select a Project</option>
        { uniqueProjects.map( proj => (
          <option key={proj} >{proj}</option>
        )) }
      </select>
    </div>
  );
}

export default App;
