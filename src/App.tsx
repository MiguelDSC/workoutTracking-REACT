import "./App.css";
import WorkoutForm from "./components/workoutForm/WorkoutForm";
import Selection from "./components/selection/Selection";
import { useState } from "react";
import WorkoutHistory from "./components/workoutHistory/WorkoutHistory";
import WorkoutItemType, {
  WorkoutType,
} from "./components/selection/workoutItemType";
import placeHolderHistoryList from "./components/PlaceHolderHistoryList";

function App() {
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutType>(
    WorkoutType.upper_1
  );
  const [enableHistory, setEnableHistory] = useState(false);
  const [history, setHistory] = useState<WorkoutItemType[]>(
    placeHolderHistoryList
  );

  const getTypeHandler = (data: number) => {
    setSelectedWorkout(data);
  };

  const historyToggler = () => {
    setEnableHistory(!enableHistory);
  };

  const newWorkoutHandler = (data: WorkoutItemType) => {
    setHistory((prevWorkoutList) => {
      const oldWorkouts = [...prevWorkoutList];
      oldWorkouts.unshift(data);

      return oldWorkouts;
    });
  };

  return (
    <div className="App">
      {/* selection upper 1, upper 2, lower */}
      <h1>Select a Workout</h1>
      <Selection
        historyToggleEnabled={enableHistory}
        onHistoryToggle={historyToggler}
        onGetType={getTypeHandler}
      />
      <WorkoutForm onNewWorkout={newWorkoutHandler} type={selectedWorkout} />

      {enableHistory && (
        <WorkoutHistory type={selectedWorkout} workoutHistory={history} />
      )}
    </div>
  );
}

export default App;
