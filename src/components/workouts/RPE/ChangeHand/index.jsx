import "./styles.css";



export default function ChangeHand({ styleData, updateHand, measuring }) {

  return (
    <>
      <section id="hand-change">
        <button
          className={styleData.hand == "left" ? "active" : "not-active"}
          disabled={measuring}
          autoFocus={styleData.hand == "left"}
          value={"left"}
          onClick={()=>updateHand('left')}
        >
          L
        </button>
        <button
          className={styleData.hand == "right" ? "active" : "not-active"}
          disabled={measuring}
          autoFocus={styleData.hand == "right"}
          value={"right"}
          onClick={()=>updateHand('right')}
        >
          R
        </button>
      </section>
    </>
  );
}
