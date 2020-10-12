import React, { useEffect, useRef, useState } from "react";
import Todo from "./components/Todo";
import Forms from "./components/Form";
import { nanoid } from "nanoid";
import FilterButton from "./components/FilterButton";
import ThemeSwitcher from "./ThemeSwitch";
import { createGlobalStyle } from "styled-components";


const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }
  ]

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function Home(props) {
   
  const savedItems = JSON.parse(localStorage.getItem('tasks'));
  const [tasks, setTasks] = useState(savedItems || DATA )
  // const [tasks, setTasks] = useState(props.tasks);
  
  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false};
    setTasks([...tasks, newTask]);
  }
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //use object spread to make a new object
        //whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }
  function deleteAll(id) {
    const remainingTasks = [];
    setTasks(remainingTasks);
    localStorage.clear();
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id){
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }
  const [filter, setFilter] = useState('All');
  const taskList = tasks.filter(task => FILTER_MAP[filter](task)).map(task =>(
  <Todo 
  id={task.id} 
  name={task.name} 
  completed={task.completed} 
  key={task.id}
  toggleTaskCompleted={toggleTaskCompleted}
  deleteTask={deleteTask}
  editTask={editTask}
  deleteALL={deleteAll}
  />
  ));
  const filterList = FILTER_NAMES.map(name => (
    <FilterButton 
    key={name} 
    name={name}
    isPressed={name ===filter}
    setFilter={setFilter}
    />
  ));
  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText =`${taskList.length} ${tasksNoun} remaining`;
  const listHeadingRef = useRef(null);
  const prevTaskLength = usePrevious(tasks.length);
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      setTasks(tasks);
    }
  }, [DATA]);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  return (
    
    <div className="todoapp stack-large">
        
      <h1>TodoMatic</h1>
      <GlobalStyles />
      <ThemeSwitcher />

      <Forms   addTask={addTask}/>
        
      
      <div className="filters btn-group stack-exception">
        {filterList}
        
      </div>
      <h2 id="list-heading" 
      tabIndex="-1" 
      ref={listHeadingRef}> 
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
        
      </ul>
      
    </div>
  );
}

const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: #F1E3E0 ;
    font-family: sans-serif;
  }
`;
export default Home;