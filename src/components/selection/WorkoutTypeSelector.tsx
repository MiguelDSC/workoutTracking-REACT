import styles from "./WorkoutTypeSelector.module.css";
import { WorkoutType } from "./workoutItemType";

interface SelectionProps {
  onChangeWorkout: (data: number) => void;
  onHistoryToggle: () => void;
  historyToggleEnabled?: boolean;
}

function WorkoutTypeSelector(props: SelectionProps) {
  return (
    <div className={styles.selection}>
      <button
        className={styles.button}
        onClick={() => {
          props.onChangeWorkout(WorkoutType.upper_1);
        }}
      >
        Upper 1
      </button>
      <button
        className={styles.button}
        onClick={() => {
          props.onChangeWorkout(WorkoutType.upper_2);
        }}
      >
        Upper 2
      </button>
      <button
        className={styles.button}
        onClick={() => {
          props.onChangeWorkout(WorkoutType.lower);
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
