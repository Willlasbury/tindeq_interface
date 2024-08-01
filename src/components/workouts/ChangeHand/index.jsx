import "./styles.css";

export default function ChangeHand({ hand, setHand, setStyleData }) {
  const handleClick = (e) => {
    setHand(e.target.value);
    setStyleData((prev) => {
      return { ...prev, hand: e.target.value };
    });
  };

  switch (hand) {
    case "left":
      return (
        <>
          <section id="hand-change">
            <button autoFocus value={"left"} onClick={handleClick}>
              L
            </button>
            <button value={"right"} onClick={handleClick}>
              R
            </button>
          </section>
        </>
      );

    case "right":
      return (
        <>
          <section id="hand-change">
            <button autoFocus value={"left"} onClick={handleClick}>
              L
            </button>
            <button value={"right"} onClick={handleClick}>
              R
            </button>
          </section>
        </>
      );
  }
}
