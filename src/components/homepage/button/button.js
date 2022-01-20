import "./button.scss";

const buttonSVG = () => {
  return (
    <div className="buttonStyle">
      <svg
        width="35vw"
        height="86"
        viewBox="0 0 331 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 24.4912L47.7372 1H330V59.5182L285.165 85H1V24.4912Z"
          fill="#00697F"
          fillOpacity="0.1"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
      <div className="buttonText">Join Our Club</div>
    </div>
  );
};

function ButtonComponent() {
  return <div>{buttonSVG()}</div>;
}

export default ButtonComponent;
