import FingerForm from "../form";
import "./styles.css";

export default function FingerFormModal({
  styleData,
  setStyleData,
  setShowFingerForm,
}) {
  const exitFingerForm = (e) => {
    if (e.target.classList.value == "modal-background") {
      setShowFingerForm(false);
    }
  };
  return (
    <>
      <div className="modal-background" onClick={(e) => exitFingerForm(e)}>
        <div className="modal-container">
          <FingerForm styleData={styleData} setStyleData={setStyleData} />
        </div>
      </div>
    </>
  );
}
