import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./WorkoutForm.module.css";
import WorkoutItemType from "../selection/workoutItemType";
import routine from "../Routine";

interface WorkoutFormProps {
  type: string;
  onNewWorkout: (data: WorkoutItemType) => void;
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

  function convertDate() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${day}-${month}-${year}`;
    return currentDate;
  }

  function workoutInputHandler(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setWorkout({
      ...workout,
      [event.target.name]: value,
    });
  }

  let content;

  if (props.type) {
    const selectedWorkout = routine[+props.type];

    content = (
      <tr>
        {selectedWorkout.map((item) => (
          <th key={item.toString()}>{item}</th>
        ))}
      </tr>
    );
  }

  function submitHandler(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    const currentDate = convertDate();

    const newWorkout = {
      type: props.type,
      ...workout,
      date: currentDate,
    };

    props.onNewWorkout(newWorkout);
    setWorkout({
      excersize_1: "",
      excersize_2: "",
      excersize_3: "",
      excersize_4: "",
      excersize_5: "",
      excersize_6: "",
      excersize_7: "",
      date: "",
    });
  }

  return (
    <>
      {/* name, 4 inputs per exersize */}
      {props.type && (
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

                {props.type != "2" && (
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
      )}
    </>
  );
}

export default WorkoutForm;

// const routine = [
//   {
//     id: "upper_1",
//     exercise_1: {
//       title: "Dips",
//       values: ["5kg 12, 10, 8"],
//     },
//     exercise_2: {
//       title: "Rows",
//       values: ["5kg 12, 10, 8"],
//     },
//     exercise_3: {
//       title: "Ring Push Ups",
//       values: ["5kg 12, 10, 8"],
//     },
//     exercise_4: {
//       title: "Chin Ups",
//       values: ["5kg 12, 10, 8"],
//     },
//     exercise_5: {
//       title: "Side Raises",
//       values: ["5kg 12, 10, 8"],
//     },
//     exercise_6: {
//       title: "Curls",
//       values: ["5kg 12, 10, 8"],
//     },
//     exercise_7: {
//       title: "Tricep Extentions",
//       values: ["5kg 12, 10, 8"],
//     },
//   },
//   {
//     id: "upper_2",
//     exercise_1: {
//       title: "Pull Ups",
//       values: [],
//     },
//     exercise_2: {
//       title: "Ring Push Ups",
//       values: [],
//     },
//     exercise_3: {
//       title: "Rows",
//       values: [],
//     },
//     exercise_4: {
//       title: "Overhead Press",
//       values: [],
//     },
//     exercise_5: {
//       title: "Side Raises",
//       values: [],
//     },
//     exercise_6: {
//       title: "Hammer Curls",
//       values: [],
//     },
//     exercise_7: {
//       title: "Tricep Extentions",
//       values: [],
//     },
//   },
// ];
