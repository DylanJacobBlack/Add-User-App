import "./Modal.css";
import ModalCard from './ModalCard';

const Modal = (props) => {
  const escapeModalHandler = () => {
    props.onFlagWarning(null);
  }

  return <div className='modal' onClick={escapeModalHandler}>
    <ModalCard onClick={escapeModalHandler}>
      {props.warning}
    </ModalCard>
  </div>;
}

export default Modal;
