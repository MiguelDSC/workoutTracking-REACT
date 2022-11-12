import "./App.css";
import WorkoutForm from "./components/workoutForm/WorkoutForm";
import WorkoutTypeSelector from "./components/selection/WorkoutTypeSelector";
import { useState } from "react";
import WorkoutHistory from "./components/workoutHistory/WorkoutHistory";
import WorkoutItemType, {
  WorkoutType,
  upper_1_routine,
  WorkoutRoutineNames,
} from "./components/selection/WorkoutItemType";
import placeHolderHistoryList from "./components/PlaceHolderHistoryList";

function App() {
  const [selectedWorkout, setSelectedWorkout] =
    useState<WorkoutRoutineNames>(upper_1_routine);
  const [enableHistory, setEnableHistory] = useState(false);
  // const [history, setHistory] = useState<WorkoutItemType[]>(
  //   placeHolderHistoryList
  // );

  const changeWorkoutHandler = (data: WorkoutRoutineNames) => {
    console.log(data);
  };

  const toggleHistory = () => {
    setEnableHistory(!enableHistory);
  };

  const newWorkoutHandler = (data: WorkoutItemType) => {
    console.log(data);

    // setHistory((prevWorkoutList) => {
    //   const oldWorkouts = [...prevWorkoutList];
    //   oldWorkouts.unshift(data);
    //   return oldWorkouts;
    // });
  };

  return (
    <div className="App">
      selection upper 1, upper 2, lower
      <h1>Select a Workout</h1>
      <WorkoutTypeSelector
        historyToggleEnabled={enableHistory}
        onHistoryToggle={toggleHistory}
        onChangeWorkout={changeWorkoutHandler}
      />
      <WorkoutForm
        onNewWorkout={newWorkoutHandler}
        currentWorkout={selectedWorkout}
      />
      {/* 
      {enableHistory && (
        <WorkoutHistory type={selectedWorkout} workoutHistory={history} />
      )} */}
    </div>
  );
}

export default App;
