import React from "react";
import styles from "./addTask.module.css";
import TaskHeader from "../TaskHeader/TaskHeader";
import Task from "../Task/Task";

const AddTask = () => {
  const[query,setvalue] = React.useState("");
  const[task,settask] = React.useState([]);

  var count_1 = task.length;
  
  
  const handlechange = (e)=>{
    //const{value} = e.target
    setvalue(e.target.value);
    //console.log(e.target.value);
        };
  
        const handleclick = ()=>{
          const  payload = {
               title:query,
               
               id:Math.random() * (25 - 0) + 0,
       };
       
       
       
       
       
       let new_Task = [...task,payload];
       if(query){
         settask(new_Task);
         setvalue("");
       }else{
         alert(`Enter Valid Text`)
       }
       };
       //console.log(task);
       
       
       
       
       
        
  
    return (
      <div>
        <TaskHeader count_1={count_1}/>
       <div className={styles.todoForm}>
       <input onChange={handlechange} data-cy="add-task-input" value={query} type="text" id={styles.inputbox} placeholder="   Add Task..."/>
    <button onClick={handleclick} data-cy="add-task-button" id={styles.button_box}>+</button>
       </div>
  
       
           <div id={styles.display}>
       {task.map((item,index) => {
   return (
      <div key={item.id}>
          <div id={styles.text}>
         <Task title={item.title} key={item.id} index={index} settask={settask} task={task}/>
          
          </div>
      </div>
  )
              })} 
              </div>
      
        
      </div>
    )

};

export default AddTask;
