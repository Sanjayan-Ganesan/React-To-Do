import React from "react";
import styles from "./tasks.module.css";
//import data from '../data/tasks.json';
//import './tasks.json';

const Tasks = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
    <div id={styles.completed}>
      <h3>Completed task</h3>
<p>{props.isdeleted}</p>
    </div>
    </>
  );
};

export default Tasks;
