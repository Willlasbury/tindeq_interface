import "./styles.css";

export default function ChooseWorkout({ workout, setWorkout, children }) {
  const map = {};
  children.map((k) => (map[k.key] = k));

  const handleClick = (event) => {
    setWorkout(event.target.value);
  };

  const createButtons = (child) => {
    return (
      <button
        className="workout-btn"
        key={child.key}
        value={child.key}
        onClick={handleClick}
      >{`${child.key}`}</button>
    );
  };
  return (
    <>
      <section id={workout ? "workout-container" : "workout-list"}>
        {workout ? map[workout] : children.map((v) => createButtons(v))}
      </section>
    </>
  );
}
