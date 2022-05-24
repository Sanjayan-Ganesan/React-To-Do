import React from "react";
import Tasks from "../Tasks/Tasks";
import styles from "./task.module.css";
//import Tasks from "../Tasks/Tasks";

const Task = (props) => {
  // NOTE: do not delete `data-cy` key value pair

  const[count,setcount] = React.useState(1);
  const[iscompleted,setiscompleted] = React.useState(false);
  const[isdeleted,setisdeleted] = React.useState([]);

  const handleinc = ()=>{
    if(count >= 1){
      setcount(count + 1);
    }else{
      setcount(1);
    }
  }

  const handledec = ()=>{
    if(count >= 1){
      setcount(count - 1);
    }else{
      setcount(1);
    }
  }
var title;
 const handledelete = (index)=>{
   
var new_list = props.task;
 new_list.splice(index,1);
props.settask([...new_list])



 }
 



 const handlestrike = (e)=>{

  setiscompleted(!iscompleted);
  
  setisdeleted([props.title]);

 }
 console.log(isdeleted);

 
  
  return (
    <>
    <Tasks isdeleted={isdeleted}/>
    <li data-cy="task" className={styles.task}>
      
      <input onChange={handlestrike} type="checkbox" data-cy="task-checkbox" id={styles.checkbox}  />
      
      <div data-cy="task-text" id={styles.title} >
      <h3 name={title} style={iscompleted?{textDecoration:"line-through",color:"red"}:{textDecoration:"underline",color:"green"}} >{props.title}</h3>
      </div>
      {/* Counter here */}
      <div id={styles.counter}>
        <button id={styles.inc} onClick={handleinc}>+</button>
      <input value={count}/>
      <button id={styles.dec} onClick={handledec}>-</button>
      <button data-cy="task-remove-button" onClick={handledelete}>X</button>
      </div>


      
      
      
      
    </li>



      </>
  );
};

export default Task;
