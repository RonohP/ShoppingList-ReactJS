import React, {useState} from "react";
import {nanoid} from "nanoid";
import './App.css';
import Form from './components/Form';
import List from './components/list';


function App(props) {
  const[tasks, setTasks] = useState(props.tasks);

  const toggleClassName = (id) => {
    
    const updatedTask = tasks.map(task =>{
      if(task.id === id){
        
        return {...task, class: "checked"};
      }
        return task;
    });
    setTasks(updatedTask);
    console.log();
  };

  function deleteTask(id) {
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
    <List 
      id={task.id} 
      text = {task.text} 
      class={task.class} 
      key={task.id} 
      toggleClassName = {toggleClassName} 
      deleteTask ={deleteTask} 
      editTask={editTask}
    />
  );

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
        
        <h2 id="list-heading">{listHeading}</h2>
        
        <div className="list">
          <ul id="myList">
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
