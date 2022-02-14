import "./aboutTuring.scss";
const turingLogoSVG = () => {
  return (
    <div>
      <svg
        width="4vw"
        // height="3vw"
        // height="28"
        viewBox="0 0 32 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.9321 0.0697536C27.91 0.119576 27.4798 0.767262 26.9613 1.51459L26.0346 2.88968H21.7654H17.4851V15.4448V28H17.1652C16.9335 28 16.4702 27.7609 15.5877 27.1929C14.9037 26.7445 14.2529 26.316 14.1536 26.2263C13.966 26.0868 13.955 25.3993 13.955 14.4783V2.88968H9.89537H5.83573L4.9863 1.54448C4.52297 0.797153 4.13686 0.149466 4.13686 0.0996437C4.13686 0.039856 8.49436 0 16.0621 0C22.6148 0 27.9541 0.0298958 27.9321 0.0697536Z"
          fill="white"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.89804 3.28825C5.21796 3.75658 5.26209 3.78648 5.69232 3.78648H6.13359L5.39447 4.55374C3.0006 7.03488 1.82022 9.83488 1.82022 12.9936C1.82022 16.9395 3.61837 20.5267 6.74033 22.8384C8.39507 24.0641 10.6345 25.0904 12.3334 25.4093L12.9622 25.5189V26.037C12.9622 26.6548 12.9732 26.6648 13.6682 27.1132C14.1205 27.4021 14.1646 27.4619 13.966 27.4819C13.613 27.5317 12.0355 27.2228 10.7779 26.8441C8.35094 26.1267 6.31009 25.0007 4.52297 23.3765C2.72481 21.7423 1.58855 20.0584 0.783246 17.8562C0.0772213 15.8833 0 15.4349 0 13.0036C0.0110316 11.1103 0.0441264 10.6918 0.253727 9.90463C0.893562 7.45338 2.09601 5.2911 3.79488 3.50747C4.16996 3.10889 4.50091 2.79003 4.52297 2.79003C4.54503 2.79003 4.71051 3.00925 4.89804 3.28825Z"
          fill="#C39B10"
        ></path>
        <path
          d="M28.1307 3.50747C29.8295 5.21139 31.1974 7.72242 31.7932 10.2633C32.0689 11.4591 32.0689 14.3388 31.7932 15.5843C31.5174 16.79 30.9217 18.3843 30.337 19.4306C28.7153 22.3502 25.8581 24.9011 22.7583 26.1964C21.6551 26.6548 19.879 27.163 19.0627 27.2626L18.478 27.3324V26.4754V25.6285L19.2833 25.4591C24.7219 24.2733 28.6381 20.5267 29.8626 15.3053C30.1825 13.9103 30.1936 11.6982 29.8737 10.353C29.3552 8.17082 28.0093 5.89893 26.2222 4.15516L25.7258 3.68683H26.2332C26.7076 3.68683 26.7738 3.65694 27.0385 3.28825C27.204 3.06904 27.3695 2.88968 27.4136 2.88968C27.4688 2.88968 27.7887 3.16868 28.1307 3.50747Z"
          fill="#C39B10"
        ></path>
      </svg>
    </div>
  );
};

function AboutTuringComponent() {
  return (
    <div className="turingGridDiv">
      <div className="turingGIF">
        <img src={require("./Turing.gif")} className="turingGif"/>
      </div>
      <div className="turingDesc">
        <div className="turingDescHeading">
          {turingLogoSVG()}
          <div>Turing: The Techno Learning Club</div>
        </div>
        <div className="turingDescription">
          <div className="turingDescSubHeading">MISSION</div>
          <br />
          <div>
            To grow the interest of all the students in vast and deep fields of
            technology and motivate and guide students according to their
            interests.
          </div>
          <br />
          <div className="turingDescSubHeading">VISION</div>
          <br />
          <div>
            To try and provide students, every possible resource to become one
            of the best in their fields and organize one of the best tech events
            & competitions.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTuringComponent;
