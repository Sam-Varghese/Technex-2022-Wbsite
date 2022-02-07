import "./webDevModal.scss";

const leftDash = () => {
  return (
    <svg
      width="3"
      height="458"
      viewBox="0 0 3 458"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1.5"
        y1="6.55671e-08"
        x2="1.49998"
        y2="458"
        stroke="black"
        stroke-width="3"
      />
    </svg>
  );
}

function WebDevModal(props) {
  return (
    <div className="WebModalDiv">
      <div className="headingDiv">Welcome To Web Development</div>
      <div className="headName">-Headed by: Prisha Sharma</div>
      <div className="committeeDescription">
        <div className="sideDashSvg">
          {leftDash()}
        </div>
        This platform offers frontend, backend, and tool learning, all of which are necessary for building a professional online project. <br /><br />

Learning these concepts will help you advance as a developer. Our committee hosts a beginner's workshop, which covered the following areas that are essential to know before starting a career in web development. <br /><br />

It will assist you in managing your expectations and directing you in the appropriate direction. <br /><br />
      </div>
    </div>
  );
}

export default WebDevModal;
