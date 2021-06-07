import React, {useState} from "react";
import {nanoid} from "nanoid";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTasks} from '@fortawesome/free-solid-svg-icons';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Form from './components/Form';
import Buttons from './components/Buttons';
import List from './components/list';


function App(props) {
  const[tasks, setTasks] = useState(props.tasks);

  const toggleClassName = (id) => {
    
    const updatedTask = tasks.map(task =>{
      if(id === task.id){
        return {...task, class: ""}
      }
      return task;
    });
    setTasks(updatedTask);
    console.log();
  };

  const deleteTask = (id) =>{
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  };

  const editTask = (id,newText) =>{
    const editedTaskList = tasks.map(task =>{
      if(id === task.id){
        return {...task, text:newText}
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  const taskList = tasks.map(task => 
  <List id={task.id} text = {task.text} class={task.class} key={task.id} toggleClassName = {toggleClassName} deleteTask ={deleteTask} editTask={editTask}/>);

  const addTask =(text)=>{
    const newTask = {id: "list-"+nanoid(), text: text, class:""};
    setTasks([...tasks, newTask]);
  }


  const tasksNoun = taskList.length !== 1? 'tasks':'task';
  const listHeading = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="App">
      <header className="AppHeader">
        <h1>To-Do List</h1>
      </header>

      <section>
        <Form submit = {addTask}/>

        <div className="btns">

          <Buttons icon ={< FontAwesomeIcon icon = {faTasks} />} text="All Tasks"/>
          <Buttons icon ={< FontAwesomeIcon icon = {faPlay}/>} text="Active Tasks"/>
          <Buttons icon ={< FontAwesomeIcon icon = {faCheck} />} text="Copmleted Tasks"/>
        </div>
        
        <h2 id="list-heading">{listHeading}</h2>
        
        <div className="list">
          <ul id="myList">
            {/* {console.log(props.tasks)} */}
            {taskList}
          </ul>
        </div>


      </section>

      <footer>
        <p>&copy; purity.rono 2021 </p>
      </footer>
    </div>
  );
}

export default App;
