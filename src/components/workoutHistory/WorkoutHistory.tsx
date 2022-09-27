import React from "react";
import WorkoutItemType, { WorkoutType } from "../selection/workoutItemType";
import styles from "../workoutForm/WorkoutForm.module.css";
import routine from "../Routine";

interface WorkoutHistory {
  type: WorkoutType;
  workoutHistory: WorkoutItemType[];
}

function WorkoutHistory(props: WorkoutHistory) {
  const heading = routine[+props.type];

  const filteredHistory = props.workoutHistory.filter(
    (item) => item.type === props.type
  );

  let history = (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            {heading.map((title) => (
              <th key={title}>{title}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {filteredHistory.map((item) => (
            <tr>
              <td>{item.date}</td>
              <td>{item.excersize_1}</td>
              <td>{item.excersize_2}</td>
              <td>{item.excersize_3}</td>
              <td>{item.excersize_4}</td>
              <td>{item.excersize_5}</td>
              <td>{item.excersize_6}</td>
              <td>{item.excersize_7}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );

  return <>{history}</>;
}

export default WorkoutHistory;
