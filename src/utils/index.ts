import { Todo } from "../types/Todo";
import { TodoExtend } from "../types/TodoExtend";
import { faker } from "@faker-js/faker";

function randomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export function dataTransfer(todos: Todo[]) {
  const todosExtend: TodoExtend[] = todos.map((todo) => {
    const description: string = faker.commerce.productDescription();
    const startDate: Date = randomDate(
      new Date(1999, 0, 1),
      new Date(2012, 0, 1)
    );
    const endDate: Date = randomDate(new Date(2012, 0, 2), new Date());
    return { ...todo, description, startDate, endDate };
  });
  return todosExtend;
}
