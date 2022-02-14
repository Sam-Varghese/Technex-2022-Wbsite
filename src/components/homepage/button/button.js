import "./button.scss";

const buttonSVG = () => {
  return (
    <div className="buttonStyle">
      <svg
        width="331"
        height="87"
        viewBox="0 0 331 87"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 25.4912L47.7372 2H330V60.5182L285.165 86H1V25.4912Z"
          fill="#00697F"
          fill-opacity="0.1"
          stroke="white"
          stroke-width="2"
        />
        <line
          x1="1.5"
          y1="62"
          x2="1.5"
          y2="87"
          stroke="#00697F"
          stroke-width="3"
        />
        <path
          d="M329.5 26L329.5 2L306.5 2M24.5 85.5L1.5 85.5"
          stroke="#00697F"
          stroke-width="3"
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
