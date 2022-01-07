import './ModalTemp.css';

const ModalTemp = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal-temp display-block" : "modal-temp display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-temp-main">
        {children}
      </section>
    </div>
  );
};
export default ModalTemp