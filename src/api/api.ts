import axios from "axios";
import { Method } from "../types/Method";
import { Todo } from "../types/Todo";

export async function getTodos(url: string, method: Method) {
  try {
    const responseServer = (await axios({ method, url })) as Todo[];
    return responseServer;
  } catch (err) {
    return new Error("Bad request!");
  }
}
