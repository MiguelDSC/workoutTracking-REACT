import React, { ChangeEvent, MouseEvent } from "react";
import styles from "./WorkoutTypeButton.module.css";

interface WorkoutTypeButton {
  title: string;
  value: string;
  passValue: (data: string) => void;
}

function WorkoutTypeButton(props: WorkoutTypeButton) {
  function clickHandler(event: MouseEvent<HTMLButtonElement>) {
    // console.log(event.target.value);
    props.passValue(event.target.value);

    // props.passValue(event.target.value);
  }

  return (
    <button
      onClick={clickHandler}
      className={styles.button}
      value={props.value}
    >
      {props.title}
    </button>
  );
}

export default WorkoutTypeButton;
