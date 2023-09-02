import React, { useId } from "react";

export default function CheckBox() {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}></label>
      <input id={id} type="checkbox" style={{ display: "hidden" }} />
    </div>
  );
}
