import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA =[
  {id:"list-1", text:"Pay Bills", class:"checked"},
  {id:"list-2", text:"Hit the gym", class:""},
  {id:"list-3", text:"Buy eggs", class:""},
  {id:"list-4", text:"Buy milk", class:""}
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);


// ReactDOM.render(<App tasks={DATA}/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

