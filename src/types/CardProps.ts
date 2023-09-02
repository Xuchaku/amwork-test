import { TodoExtend } from "./TodoExtend";

export type CardProps = {
  todo: TodoExtend;
  handleChange: (id: number) => void;
};
