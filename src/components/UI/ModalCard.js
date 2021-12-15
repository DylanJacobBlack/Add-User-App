import "./ModalCard.css";

const ModalCard = (props) => {
  const classes = "modal-card " + props.className;
  return (
    <div className={classes}>
      <h1>Invalid input</h1>
      <div className="modal-card__message">{props.children}</div>
    </div>
  );
};

export default ModalCard;
