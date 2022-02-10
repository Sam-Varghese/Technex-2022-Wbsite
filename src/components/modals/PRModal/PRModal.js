import "./PRModal.scss";

const leftDashes = () => {
  return (
    <svg
      width="79"
      height="585"
      viewBox="0 0 79 585"
      fill="none"
      xmlns="http://www.w3.org/2000/svg" 
      className="leftDash"
    >
      <line x1="54.5" y1="64" x2="54.5" y2="575" stroke="#EED6C4" />
      <line x1="10.5" y1="64" x2="10.5" y2="575" stroke="#EED6C4" />
      <line x1="64.5" y1="37" x2="64.5" y2="548" stroke="#EED6C4" />
      <line x1="20.5" y1="37" x2="20.5" y2="548" stroke="#EED6C4" />
      <line x1="74.5" y1="119.996" x2="78.5" y2="584.996" stroke="#EED6C4" />
      <line x1="30.5" y1="119.996" x2="34.5" y2="584.996" stroke="#EED6C4" />
      <line x1="44.5" y1="2.18557e-08" x2="44.5" y2="511" stroke="#EED6C4" />
      <line x1="0.5" y1="2.18557e-08" x2="0.499978" y2="511" stroke="#EED6C4" />
    </svg>
  );
}

function PRModal(props) {
    return (
      <div className="PRModal">
        <div className="crossButton" onClick={props.onClose}>
          X
        </div>
        <div className="headingDiv">Welcome To Public Relations</div>
        <div className="headName">-Headed by: Aashi Patni</div>
        <div className="committeeDescription">
          {leftDashes()}
          The PR subcommittee of Turing strengthens the club’s reputation. This
          committee manages the club’s public relations and is the backbone of
          Turing. <br />
          <br />
          This committee is responsible for brushing up the professional skills
          of students and everything this committee does, from mail to messages,
          brochures to sponsorships, serves to improve an individual's
          professional abilities. <br />
          <br />
          It also entails publicising the club and its activities, as well as
          assisting in the acquisition of prospective sponsorship possibilities.
          <br />
          <br />
        </div>
      </div>
    );
}

export default PRModal;
