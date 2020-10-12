import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppProvider from "./AppProvider";
import ThemeSwitcher from "./ThemeSwitch";
import { BrowserRouter, Route, Switch} from 'react-router-dom';



const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
]

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
    <BrowserRouter>
    
    <App tasks={DATA}/>
    
    </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



