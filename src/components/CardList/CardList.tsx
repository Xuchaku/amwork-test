import React, { useCallback, useRef, useState } from "react";

import Card from "../Card/Card";
import { useLoading } from "../../hooks/useLoading";

import { LIMIT_CARD, TODO_POINT } from "../../const";
import { useIntersect } from "../../hooks/useIntersect";

import styles from "./CardList.module.scss";

export default function CardList() {
  const { data, isLoading, isError, setData } = useLoading(TODO_POINT);
  const [limit, setLimit] = useState(LIMIT_CARD);
  const refIntersect = useRef<null | HTMLDivElement>(null);

  const memoHandleChange = useCallback((id: number) => {
    setData((prevTodo) => {
      return prevTodo.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });
    });
  }, []);

  const upLimit = useCallback(() => {
    setLimit((prevLimit) => prevLimit + LIMIT_CARD);
  }, []);

  const intersector = useIntersect(refIntersect, upLimit);

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div>
          <span className={styles.title}>Today</span>
        </div>

        <div className={styles.actions}>
          <div className={styles.plus}>+</div>
          <div className={styles.counter}>{limit}</div>
        </div>
      </div>
      <div className={styles.list}>
        {data.slice(0, limit).map((todo) => {
          return (
            <Card todo={todo} key={todo.id} handleChange={memoHandleChange} />
          );
        })}
      </div>
      <div ref={refIntersect} className={styles.observer}></div>
    </div>
  );
}
