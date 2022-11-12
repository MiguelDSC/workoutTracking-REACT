import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./WorkoutForm.module.css";
import WorkoutItemType from "../selection/WorkoutItemType";
import { WorkoutType, WorkoutRoutineNames } from "../selection/WorkoutItemType";

interface WorkoutFormProps {
  currentWorkout: WorkoutRoutineNames;
  onNewWorkout: (newWorkout: WorkoutItemType) => void;
}

function WorkoutForm(props: WorkoutFormProps) {
  const [workout, setWorkout] = useState({
    excersize_1: "",
    excersize_2: "",
    excersize_3: "",
    excersize_4: "",
    excersize_5: "",
    excersize_6: "",
    excersize_7: "",
    date: "",
  });

  const workoutInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setWorkout({
      ...workout,
      [event.target.name]: value,
    });
  };

  let content;

  const selectedWorkout = [];

  for (const [key, value] of Object.entries(props.currentWorkout)) {
    if (key !== "type") {
      selectedWorkout.push(value);
    }
  }

  console.log(selectedWorkout);

  content = (
    <tr>
      {selectedWorkout.map((item) => (
        <th key={item}>{item}</th>
      ))}
    </tr>
  );

  const submitHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newWorkout = {
      type: props.currentWorkout.type,
      ...workout,
      date: new Date(),
    };

    // props.onNewWorkout(newWorkout);
    // setWorkout({
    //   excersize_1: {
    //     name: props.currentWorkout.excersize_1,
    //     data: [newWorkout.excersize_1],
    //   },

    //   excersize_2: "",
    //   excersize_3: "",
    //   excersize_4: "",
    //   excersize_5: "",
    //   excersize_6: "",
    //   excersize_7: "",
    //   date: "",
    // });
  };

  return (
    <>
      {/* name, 4 inputs per exersize */}
      <form onSubmit={submitHandler}>
        <table className={styles.table}>
          <thead>{content}</thead>

          <tbody>
            <tr>
              <td>
                <input
                  name="excersize_1"
                  type="text"
                  value={workout.excersize_1}
                  onChange={workoutInputHandler}
                />
              </td>
              <td>
                <input
                  name="excersize_2"
                  type="text"
                  value={workout.excersize_2}
                  onChange={workoutInputHandler}
                />
              </td>
              <td>
                <input
                  name="excersize_3"
                  type="text"
                  value={workout.excersize_3}
                  onChange={workoutInputHandler}
                />
              </td>
              <td>
                <input
                  name="excersize_4"
                  type="text"
                  value={workout.excersize_4}
                  onChange={workoutInputHandler}
                />
              </td>

              <td>
                <input
                  name="excersize_5"
                  type="text"
                  value={workout.excersize_5}
                  onChange={workoutInputHandler}
                />
              </td>

              {props.currentWorkout.type !== WorkoutType.lower && (
                <>
                  <td>
                    <input
                      name="excersize_6"
                      type="text"
                      value={workout.excersize_6}
                      onChange={workoutInputHandler}
                    />
                  </td>
                  <td>
                    <input
                      name="excersize_7"
                      type="text"
                      value={workout.excersize_7}
                      onChange={workoutInputHandler}
                    />
                  </td>
                </>
              )}
            </tr>
          </tbody>
        </table>
        <button type="submit">save Workout</button>
      </form>
    </>
  );
}

export default WorkoutForm;
