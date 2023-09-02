import { useEffect, useState } from "react";
import { Method } from "../types/Method";
import { TodoExtend } from "../types/TodoExtend";
import { getTodos } from "../api/api";
import { dataTransfer } from "../utils";

export function useLoading(url: string, method: Method = "GET") {
  const [data, setData] = useState<TodoExtend[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setIsLoading(true);
      const todos = await getTodos(url, method);
      if (todos instanceof Error) {
        setData([]);
        throw new Error(todos.message);
      } else {
        const changedTodos = dataTransfer(todos);
        setData(changedTodos);
      }
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }
  return { data, isLoading, isError };
}
