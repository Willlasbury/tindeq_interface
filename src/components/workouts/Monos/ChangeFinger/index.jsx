import "./styles.css";

export default function ChangeFinger({ setStyleData, measuring }) {
  
  const handleClick = (e) => {
    setHand(e.target.value);
    setStyleData((prev) => {
      return { ...prev, hand: e.target.value };
    });
  };

  return (
    <>
      <section id="finger-change">
        <button
          className={hand == "left" ? "active" : "not-active"}
          disabled={measuring}
          autoFocus={hand == "left"}
          value={"left"}
          onClick={handleClick}
        >
          L
        </button>
        <button
          className={hand == "right" ? "active" : "not-active"}
          disabled={measuring}
          autoFocus={hand == "right"}
          value={"right"}
          onClick={handleClick}
        >
          R
        </button>
        <button
          className={hand == "right" ? "active" : "not-active"}
          disabled={measuring}
          autoFocus={hand == "right"}
          value={"right"}
          onClick={handleClick}
        >
          R
        </button>
        <button
          className={hand == "right" ? "active" : "not-active"}
          disabled={measuring}
          autoFocus={hand == "right"}
          value={"right"}
          onClick={handleClick}
        >
          R
        </button>
      </section>
    </>
  );
}
