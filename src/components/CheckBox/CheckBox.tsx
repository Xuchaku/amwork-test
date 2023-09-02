import React, { useId } from "react";
import styles from "./CheckBox.module.scss";
import { CheckBoxProps } from "../../types/CheckBoxProps";

export default function CheckBox({ isCheck, handleChange }: CheckBoxProps) {
  const id = useId();
  return (
    <div className={styles.wrapper}>
      <input
        id={id}
        type="checkbox"
        className={styles.check}
        checked={isCheck}
        onChange={handleChange}
      />
      <label className={styles.label} htmlFor={id}></label>
    </div>
  );
}
