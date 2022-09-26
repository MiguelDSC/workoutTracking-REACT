import React, { ChangeEvent } from "react";
import Button from "./WorkoutTypeButton";
import styles from "./selection.module.css";
import WorkoutTypeButton from "./WorkoutTypeButton";

interface SelectionProps {
  onGetType: (data: string) => void;
  onToggle: () => void;
  ToggleEnabled?: boolean;
}

function Selection(props: SelectionProps) {
  function getTypeHandler(data: string) {
    props.onGetType(data);
  }

  function historyToggler() {
    props.onToggle();
  }

  return (
    <div className={styles.selection}>
      <WorkoutTypeButton passValue={getTypeHandler} value="0" title="Upper 1" />
      <WorkoutTypeButton passValue={getTypeHandler} value="1" title="Upper 2" />
      <WorkoutTypeButton passValue={getTypeHandler} value="" title="Lower" />
      {props.ToggleEnabled ? (
        <button className={styles.isToggled} onClick={historyToggler}>
          Toggle History
        </button>
      ) : (
        <button onClick={historyToggler}>Toggle History</button>
      )}
    </div>
  );
}

export default Selection;
