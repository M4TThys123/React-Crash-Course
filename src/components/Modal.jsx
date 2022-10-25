import "./Modal.css";

function Modal({ title }) {
  function cancel() {
    console.log("cancel");
  }
  function confirm() {
    console.log("confirm");
  }

  return (
    <div>
      <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
          <button onClick={cancel} className="btn btn__cancel" >
            Cancel
          </button>
          <button onClick={confirm} className="btn" >
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </div>
  );
}

export default Modal;
