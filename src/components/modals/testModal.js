import "./testModal.scss";
import CPModal from "./competitiveProgrammingModal/cpModal";
import GamingModal from "./gamingModal/gamingModal";
import DesignTeamModal from "./designTeamModal/designTeam";
import IOTModal from "./IOTModal/IOTModal";
import WebDevModal from "./webDevModal/webDevModal";
import AIModal from "./AIMLModal/AIModal";
import PRModal from "./PRModal/PRModal";

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
      } else if (props.componentName == "Internet of Things") {
        return (
          <div className="Modal">
            <IOTModal onClose={props.onClose} />
          </div>
        );
      } else if (props.componentName == "Design Team") {
        return (
          <div className="Modal">
            <DesignTeamModal onClose={props.onClose} />
          </div>
        );
      } else if (props.componentName == "Web Development") {
        return (
          <div className="Modal">
            <WebDevModal onClose={props.onClose} />
          </div>
        );
      } else if (props.componentName == "Public Relations") {
        return (
          <div className="Modal">
            <PRModal onClose={props.onClose} />
          </div>
        );
      } else if (
        props.componentName == "Artificial Intelligence and Machine Learning"
      ) {
        return (
          <div className="Modal">
            <AIModal onClose={props.onClose} />
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
