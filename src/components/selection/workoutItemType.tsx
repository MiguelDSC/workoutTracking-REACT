import WorkoutTypeButton from "./WorkoutTypeButton";

export enum WorkoutType {
  upper_1,
  upper_2,
  lower,
}

interface WorkoutItemType {
  type: WorkoutType;
  excersize_1: string;
  excersize_2: string;
  excersize_3: string;
  excersize_4: string;
  excersize_5: string;
  excersize_6?: string;
  excersize_7?: string;
  date: string;
}

export default WorkoutItemType;
