import "./styles.css";



export default function ChangeHand({ style, setStyle, measuring }) {

  return (
    <>
      <section id="hand-change">
        <button
          className={style.hand == "left" ? "active" : "not-active"}
          disabled={measuring}
          autoFocus={style.hand == "left"}
          value={"left"}
          onClick={()=>setStyle('left')}
        >
          L
        </button>
        <button
          className={style.hand == "right" ? "active" : "not-active"}
          disabled={measuring}
          autoFocus={style.hand == "right"}
          value={"right"}
          onClick={()=>setStyle('right')}
        >
          R
        </button>
      </section>
    </>
  );
}
