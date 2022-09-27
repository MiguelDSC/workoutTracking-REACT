import "./App.css";
import WorkoutForm from "./components/workoutForm/WorkoutForm";
import Selection from "./components/selection/Selection";
import { useState } from "react";
import WorkoutHistory from "./components/workoutHistory/WorkoutHistory";
import WorkoutItemType from "./components/selection/workoutItemType";

function App() {
  const [selectedWorkout, setSelectedWorkout] = useState("0");
  const [enableHistory, setEnableHistory] = useState(false);
  const [history, setHistory] = useState<WorkoutItemType[]>([
    {
      type: "0",
      excersize_1: "12kg 2, 4, 5",
      excersize_2: "12kg 2, 4, 5",
      excersize_3: "12kg 2, 4, 5",
      excersize_4: "12kg 2, 4, 5",
      excersize_5: "12kg 2, 4, 5",
      excersize_6: "12kg 2, 4, 5",
      excersize_7: "12kg 2, 4, 5",
      date: "26-9-2022",
    },
    {
      type: "0",
      excersize_1: "12kg 2, 4, 5",
      excersize_2: "12kg 2, 4, 5",
      excersize_3: "12kg 2, 4, 5",
      excersize_4: "12kg 2, 4, 5",
      excersize_5: "12kg 2, 4, 5",
      excersize_6: "12kg 2, 4, 5",
      excersize_7: "12kg 2, 4, 5",
      date: "26-9-2022",
    },
    {
      type: "1",
      excersize_1: "12kg 2, 4, 5",
      excersize_2: "12kg 2, 4, 5",
      excersize_3: "12kg 2, 4, 5",
      excersize_4: "12kg 2, 4, 5",
      excersize_5: "12kg 2, 4, 5",
      excersize_6: "12kg 2, 4, 5",
      excersize_7: "12kg 2, 4, 5",
      date: "26-9-2022",
    },

    {
      type: "2",
      excersize_1: "12kg 2, 4, 5",
      excersize_2: "12kg 2, 4, 5",
      excersize_3: "12kg 2, 4, 5",
      excersize_4: "12kg 2, 4, 5",
      excersize_5: "12kg 2, 4, 5",
      date: "26-9-2022",
    },
  ]);

  function getTypeHandler(data: string) {
    setSelectedWorkout(data);
  }

  function historyToggler() {
    setEnableHistory(!enableHistory);
  }

  function newWorkoutHandler(data: WorkoutItemType) {
    setHistory((prevWorkoutList) => {
      const oldWorkouts = [...prevWorkoutList];
      oldWorkouts.unshift(data);

      return oldWorkouts;
    });
  }

  return (
    <div className="App">
      {/* selection upper 1, upper 2, lower */}
      <h1>Select a Workout</h1>
      <Selection
        toggleEnabled={enableHistory}
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
