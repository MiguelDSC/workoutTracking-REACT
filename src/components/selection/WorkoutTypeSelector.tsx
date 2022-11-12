import styles from "./WorkoutTypeSelector.module.css";
import WorkoutType from "../PlaceHolderHistoryList";

import {
  upper_1_routine,
  upper_2_routine,
  lower_routine,
  WorkoutRoutineNames,
} from "./WorkoutItemType";

interface SelectionProps {
  onChangeWorkout: (selectedWorkout: WorkoutRoutineNames) => void;
  onHistoryToggle: () => void;
  historyToggleEnabled?: boolean;
}

function WorkoutTypeSelector(props: SelectionProps) {
  return (
    <div className={styles.selection}>
      <button
        className={styles.button}
        onClick={() => {
          props.onChangeWorkout(upper_1_routine);
        }}
      >
        Upper 1
      </button>
      <button
        className={styles.button}
        onClick={() => {
          props.onChangeWorkout(upper_2_routine);
        }}
      >
        Upper 2
      </button>
      <button
        className={styles.button}
        onClick={() => {
          props.onChangeWorkout(lower_routine);
        }}
      >
        Lower
      </button>

      <button
        className={`${props.historyToggleEnabled && styles.button}`}
        onClick={props.onHistoryToggle}
      >
        Toggle History
      </button>
    </div>
  );
}

export default WorkoutTypeSelector;
