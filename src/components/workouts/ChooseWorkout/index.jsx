import "./styles.css";

import { useState } from "react";

export default function ChooseWorkout({ workout, setWorkout, children }) {
  const map = {};
  children.map((k) => (map[k.key] = k));

  const handleClick = (event) => {
    setWorkout(event.target.value);
  };

  const createButtons = (child) => {
    return (
      <button
        key={child.key}
        value={child.key}
        onClick={handleClick}
      >{`${child.props.name}`}</button>
    );
  };
  return (
    <>
      <section>
        {workout ? map[workout] : children.map((v) => createButtons(v))}
      </section>
    </>
  );
}
