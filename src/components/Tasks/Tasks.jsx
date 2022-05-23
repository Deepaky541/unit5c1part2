import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";
import data from "../../data/tasks.json"

const Tasks = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        <Task info1={props.info} />
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        {data.map((el) => (
          <li data-cy="task" className={styles.task}>
          <input
            type="checkbox"
            data-cy="task-checkbox"
          />
          <div data-cy="task-text" >{el.text}</div>
          <button data-cy="task-counter-increment-button" >+</button>
          <span data-cy="task-counter-value">{el.count}</span>
          <button data-cy="task-counter-decrement-button" >-</button>
          <button data-cy="task-remove-button">-</button>
          </li>
        ))}
      </div>
    </>
  );
};

export default Tasks;
