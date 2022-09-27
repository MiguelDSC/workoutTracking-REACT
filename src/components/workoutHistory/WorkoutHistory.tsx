import React from "react";
import WorkoutItemType, { WorkoutType } from "../selection/workoutItemType";
import styles from "../workoutForm/WorkoutForm.module.css";
import routine from "../Routine";

interface WorkoutHistory {
  type: WorkoutType;
  workoutHistory: WorkoutItemType[];
}

const convertDate = (date: Date) => {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${day}-${month}-${year}`;
  return currentDate;
};

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
              <td>{convertDate(item.date)}</td>
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
