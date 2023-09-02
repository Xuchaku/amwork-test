import { Todo } from "./Todo";

export type TodoExtend = Todo & {
  description: string;
  startDate: Date;
  endDate: Date;
};
