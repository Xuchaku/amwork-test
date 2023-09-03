import styles from "./Badge.module.scss";
import { BadgeProps } from "../../types/BadgeProps";

export default function Badge({ text, style, type = "default" }: BadgeProps) {
  return (
    <div className={styles.badge} style={style} data-type={type}>
      {text}
    </div>
  );
}
