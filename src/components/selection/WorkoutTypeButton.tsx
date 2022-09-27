import React, { ChangeEvent, MouseEvent } from "react";
import styles from "./WorkoutTypeButton.module.css";

interface WorkoutTypeButton {
  title: string;
  value: string;
  passValue: (data: string) => void;
}

function WorkoutTypeButton(props: WorkoutTypeButton) {
  const clickHandler = (event: MouseEvent<HTMLElement>) => {
    props.passValue(event.currentTarget.getAttribute("value") || "");
  };

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
