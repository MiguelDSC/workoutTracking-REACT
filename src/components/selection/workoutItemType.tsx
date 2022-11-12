export enum WorkoutType {
  upper_1,
  upper_2,
  lower,
}

interface WorkoutItemType {
  type: WorkoutType;
  excersize_1?: {
    name: string;
    data: [];
  };
  excersize_2?: {
    name: string;
    data: [];
  };
  excersize_3?: {
    name: string;
    data: [];
  };
  excersize_4?: {
    name: string;
    data: [];
  };
  excersize_5?: {
    name: string;
    data: [];
  };
  excersize_6?: {
    name: string;
    data: [];
  };
  excersize_7?: {
    name: string;
    data: [];
  };
  date: Date;
}

export type WorkoutRoutineNames = {
  type: WorkoutType;
  excersize_1?: string;
  excersize_2?: string;
  excersize_3?: string;
  excersize_4?: string;
  excersize_5?: string;
  excersize_6?: string;
  excersize_7?: string;
};

export const upper_1_routine = {
  type: WorkoutType.upper_1,
  excersize_1: "Dips",
  excersize_2: "Rows",
  excersize_3: "Ring Push Ups",
  excersize_4: "Chin Ups",
  excersize_5: "Side Raises",
  excersize_6: "Curls",
  excersize_7: "Tricep Extentions",
};

export const upper_2_routine = {
  type: WorkoutType.upper_2,
  excersize_1: "Pull Ups",
  excersize_2: "Ring Push Ups",
  excersize_3: "Rows",
  excersize_4: "Overhead Press",
  excersize_5: "Side Raises",
  excersize_6: "Hammer curls",
  excersize_7: "Tricep Extentions",
};

export const lower_routine = {
  type: WorkoutType.lower,
  excersize_1: "Squats",
  excersize_2: "Assisted Pistol Squats",
  excersize_3: "Romanian Deadlifts",
  excersize_4: "Nordic curls",
  excersize_5: "Goblin squats",
};

export default WorkoutItemType;
