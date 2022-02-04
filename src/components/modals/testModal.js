import "./testModal.scss";
import { useState } from "react";

function TestModal(props) {
    
  const Modal = () => {
    if (props.state) {
      return (
          <div className="Modal">
              <div className="ModalContent">
              <div className="crossButton" onClick={props.onClose}>X</div>
                  This is a modal
              </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  };
  return <div>{Modal()}</div>;
}

export default TestModal;
