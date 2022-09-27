import styles from "./selection.module.css";
import { WorkoutType } from "./workoutItemType";

interface SelectionProps {
  onGetType: (data: number) => void;
  onHistoryToggle: () => void;
  historyToggleEnabled?: boolean;
}

function Selection(props: SelectionProps) {
  const getTypeHandler = (data: string) => {
    props.onGetType(+data);
  };

  const historyToggler = () => {
    props.onHistoryToggle();
  };

  return (
    <div className={styles.selection}>
      <button
        className={styles.button}
        onClick={(e) =>
          getTypeHandler(e.currentTarget.getAttribute("value") || "")
        }
        value={WorkoutType.upper_1}
      >
        Upper 1
      </button>
      <button
        className={styles.button}
        onClick={(e) =>
          getTypeHandler(e.currentTarget.getAttribute("value") || "")
        }
        value={WorkoutType.upper_2}
      >
        Upper 2
      </button>
      <button
        className={styles.button}
        onClick={(e) =>
          getTypeHandler(e.currentTarget.getAttribute("value") || "")
        }
        value={WorkoutType.lower}
      >
        Lower
      </button>
      {props.historyToggleEnabled ? (
        <button className={`${styles.button}`} onClick={historyToggler}>
          Toggle History
        </button>
      ) : (
        <button onClick={historyToggler}>Toggle History</button>
      )}
    </div>
  );
}

export default Selection;
