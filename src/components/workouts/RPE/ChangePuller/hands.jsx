import "./styles.css";



export default function ChangeHand({ styleData, setStyle, measuring }) {

  return (
    <>
      <section id="hand-change">
        <button
          className={styleData.hand == "left" ? "active" : "not-active"}
          disabled={measuring}
          autoFocus={styleData.hand == "left"}
          value={"left"}
          onClick={()=>setStyle('left')}
        >
          L
        </button>
        <button
          className={styleData.hand == "right" ? "active" : "not-active"}
          disabled={measuring}
          autoFocus={styleData.hand == "right"}
          value={"right"}
          onClick={()=>setStyle('right')}
        >
          R
        </button>
      </section>
    </>
  );
}
