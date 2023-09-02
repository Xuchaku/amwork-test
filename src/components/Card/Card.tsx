import React, { memo } from "react";

import { format } from "fecha";
import CheckBox from "../CheckBox/CheckBox";
import ava from "./../../assets/ava.png";
import Badge from "../Badge/Badge";
import { PROPS_BADGE_GRAY, PROPS_BADGE_PURPLE } from "../../const";

import styles from "./Card.module.scss";
import { CardProps } from "../../types/CardProps";

function Card({ todo, handleChange }: CardProps) {
  const { title, startDate, endDate, description, completed, id } = todo;
  const formattedStartDate = format(startDate, "MMM D, HH:mm A");
  const formattedEndDate = format(endDate, "MMM D, HH:mm A");

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.title}>
          <p>
            <CheckBox
              handleChange={handleChange.bind(null, id)}
              isCheck={completed}
            ></CheckBox>
            <span>{title}</span>
          </p>
        </div>
        <div className={styles.date}>
          <p>{formattedStartDate}</p>
          <p>{formattedEndDate}</p>
        </div>
        <div className={styles.description}>
          <p>{description}</p>
        </div>
        <div className={styles.meta}>
          <div className={styles.badges}>
            <Badge {...PROPS_BADGE_PURPLE}></Badge>
            <Badge {...PROPS_BADGE_GRAY}></Badge>
          </div>
          <img src={ava} alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default memo(Card);
