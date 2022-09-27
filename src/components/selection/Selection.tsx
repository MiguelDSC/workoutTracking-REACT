import styles from "./selection.module.css";
import WorkoutTypeButton from "./WorkoutTypeButton";

interface SelectionProps {
  onGetType: (data: string) => void;
  onHistoryToggle: () => void;
  toggleEnabled?: boolean;
}

function Selection(props: SelectionProps) {
  const getTypeHandler = (data: string) => {
    props.onGetType(data);
  };

  const historyToggler = () => {
    props.onHistoryToggle();
  };

  return (
    <div className={styles.selection}>
      <WorkoutTypeButton passValue={getTypeHandler} value="0" title="Upper 1" />
      <WorkoutTypeButton passValue={getTypeHandler} value="1" title="Upper 2" />
      <WorkoutTypeButton passValue={getTypeHandler} value="2" title="Lower" />
      {props.toggleEnabled ? (
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
