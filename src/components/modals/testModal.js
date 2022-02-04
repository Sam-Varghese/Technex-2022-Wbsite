import "./testModal.scss";
import CPModal from "./competitiveProgrammingModal/cpModal";
import GamingModal from "./gamingModal/gamingModal";

function TestModal(props) {
  const Modal = () => {
    if (props.state) {
      console.log(`Name of the clicked component: ${props.componentName}`);
      if (props.componentName == "Competitive Programming") {
        return (
          <div className="Modal">
            <CPModal onClose={props.onClose} />
          </div>
        );
      } else if (props.componentName == "Gaming") {
        return (
          <div className="Modal">
            <GamingModal onClose={props.onClose} />
          </div>
        );
      } else {
        return (
          // <div className="Modal">
          //   <div className="ModalContent">
          //     <div className="crossButton" onClick={props.onClose}>
          //       X
          //     </div>
          //     This is a modal
          //   </div>
          // </div>
          <div></div>
        );
      }
    }
  };
  return <div>{Modal()}</div>;
}

export default TestModal;
