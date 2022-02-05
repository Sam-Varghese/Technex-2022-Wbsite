import "./cpModal.scss";

const headingSVG = () => {
  return (
    <svg
      //   width="70vw"
      //   height="27"
      className="titleSvgStyle"
      viewBox="0 0 542 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_269_543)">
        <path
          d="M15.904 5.232L10.984 18H15.616L18.232 11.232L19.624 14.88L21.952 8.88L20.536 5.232H15.904ZM32.272 0.311999H27.64L20.824 18H25.456L32.272 0.311999ZM12.112 8.88L8.8 0.311999H4.168L9.784 14.88L12.112 8.88ZM50.9331 17.976V13.896H38.6451V11.184H50.4531V7.104H38.6451V4.392H50.6931V0.311999H38.6451C36.2691 0.311999 34.3251 2.256 34.3251 4.632V13.656C34.3251 16.032 36.2691 17.976 38.6451 17.976H50.9331ZM54.0235 0.311999V13.68C54.0235 16.056 55.9675 18 58.3435 18H70.3915V13.92H58.3435V0.311999H54.0235ZM86.2544 11.496V13.896H77.3264V4.392H86.2544V6.792H90.5744V4.632C90.5744 2.256 88.6304 0.311999 86.2544 0.311999H77.3264C74.9504 0.311999 73.0064 2.256 73.0064 4.632V13.656C73.0064 16.032 74.9504 17.976 77.3264 17.976H86.2544C88.6304 17.976 90.5744 16.032 90.5744 13.656V11.496H86.2544ZM97.5811 4.392H106.509V13.896H97.5811V4.392ZM93.2611 13.656C93.2611 16.032 95.2051 17.976 97.5811 17.976H106.509C108.885 17.976 110.829 16.032 110.829 13.656V4.632C110.829 2.256 108.885 0.311999 106.509 0.311999H97.5811C95.2051 0.311999 93.2611 2.256 93.2611 4.632V13.656ZM131.395 18H135.715V0.335999L135.739 0.311999H130.483L124.819 8.472L119.155 0.311999H113.899V18H118.219V6.552L122.203 12.264H127.435L131.395 6.576V18ZM155.324 17.976V13.896H143.036V11.184H154.844V7.104H143.036V4.392H155.084V0.311999H143.036C140.66 0.311999 138.716 2.256 138.716 4.632V13.656C138.716 16.032 140.66 17.976 143.036 17.976H155.324ZM172.587 4.656V18H176.907V4.656H183.603V0.335999H176.907V0.311999H172.587V0.335999H165.915V4.656H172.587ZM190.628 4.392H199.556V13.896H190.628V4.392ZM186.308 13.656C186.308 16.032 188.252 17.976 190.628 17.976H199.556C201.932 17.976 203.876 16.032 203.876 13.656V4.632C203.876 2.256 201.932 0.311999 199.556 0.311999H190.628C188.252 0.311999 186.308 2.256 186.308 4.632V13.656ZM227.503 11.496V13.896H218.575V4.392H227.503V6.792H231.823V4.632C231.823 2.256 229.879 0.311999 227.503 0.311999H218.575C216.199 0.311999 214.255 2.256 214.255 4.632V13.656C214.255 16.032 216.199 17.976 218.575 17.976H227.503C229.879 17.976 231.823 16.032 231.823 13.656V11.496H227.503ZM238.829 4.392H247.757V13.896H238.829V4.392ZM234.509 13.656C234.509 16.032 236.453 17.976 238.829 17.976H247.757C250.133 17.976 252.077 16.032 252.077 13.656V4.632C252.077 2.256 250.133 0.311999 247.757 0.311999H238.829C236.453 0.311999 234.509 2.256 234.509 4.632V13.656ZM272.644 18H276.964V0.335999L276.988 0.311999H271.732L266.068 8.472L260.404 0.311999H255.148V18H259.468V6.552L263.452 12.264H268.684L272.644 6.576V18ZM280.468 4.392H293.404V7.656H280.228V18H284.548V11.736H293.404C295.78 11.736 297.724 9.792 297.724 7.416V4.632C297.724 2.256 295.78 0.311999 293.404 0.311999H280.468V4.392ZM316.85 17.976V13.896H304.562V11.184H316.37V7.104H304.562V4.392H316.61V0.311999H304.562C302.186 0.311999 300.242 2.256 300.242 4.632V13.656C300.242 16.032 302.186 17.976 304.562 17.976H316.85ZM326.445 4.656V18H330.765V4.656H337.461V0.335999H330.765V0.311999H326.445V0.335999H319.773V4.656H326.445ZM340.526 0.311999V18H344.846V0.311999H340.526ZM354.603 4.656V18H358.923V4.656H365.619V0.335999H358.923V0.311999H354.603V0.335999H347.931V4.656H354.603ZM368.684 0.311999V18H373.004V0.311999H368.684ZM383.432 8.88L380.12 0.311999H375.488L381.104 14.88L383.432 8.88ZM393.752 0.311999H389.12L382.304 18H386.936L393.752 0.311999ZM412.433 17.976V13.896H400.145V11.184H411.953V7.104H400.145V4.392H412.193V0.311999H400.145C397.769 0.311999 395.825 2.256 395.825 4.632V13.656C395.825 16.032 397.769 17.976 400.145 17.976H412.433ZM436.176 11.496V13.896H427.248V4.392H436.176V6.792H440.496V4.632C440.496 2.256 438.552 0.311999 436.176 0.311999H427.248C424.872 0.311999 422.928 2.256 422.928 4.632V13.656C422.928 16.032 424.872 17.976 427.248 17.976H436.176C438.552 17.976 440.496 16.032 440.496 13.656V11.496H436.176ZM447.503 4.392H456.431V13.896H447.503V4.392ZM443.183 13.656C443.183 16.032 445.127 17.976 447.503 17.976H456.431C458.807 17.976 460.751 16.032 460.751 13.656V4.632C460.751 2.256 458.807 0.311999 456.431 0.311999H447.503C445.127 0.311999 443.183 2.256 443.183 4.632V13.656ZM463.965 4.392H476.901V13.896H468.045V6.792H463.725V18H468.045V17.976H476.901C479.277 17.976 481.221 16.032 481.221 13.656V4.632C481.221 2.256 479.277 0.311999 476.901 0.311999H463.965V4.392ZM484.287 0.311999V18H488.607V0.311999H484.287ZM496.275 6.552L504.219 18H509.475L509.451 17.976V0.311999H505.131V11.736L497.211 0.311999H491.955V18H496.275V6.552ZM521.076 7.824V11.904H525.684V13.896H516.756V4.392H529.524V0.311999H516.756C514.38 0.311999 512.436 2.256 512.436 4.632V13.656C512.436 16.032 514.38 17.976 516.756 17.976H525.684C528.06 17.976 530.004 16.032 530.004 13.656V7.824H521.076ZM533.121 0.311999L533.337 13.2H537.225L537.441 0.311999H533.121ZM533.337 14.712V18H537.225V14.712H533.337Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_269_543"
          x="0.167969"
          y="0.312012"
          width="541.273"
          height="26.688"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.812453 0 0 0 0 0.433839 0 0 0 0 0.240326 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_269_543"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_269_543"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

const sideDash = () => {
  return (
    <svg
      width="4"
      height="114"
      viewBox="0 0 4 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="2"
        y1="8.74228e-08"
        x2="1.99999"
        y2="114"
        stroke="#D6A992"
        stroke-width="4"
      />
    </svg>
  );
};

function CPModal(props) {
  return (
    <div className="modal">
      <div className="crossButton" onClick={props.onClose}>
        X
      </div>
      <div className="sideDash">{sideDash()}</div>
      <div className="headingDiv">{headingSVG()}</div>
      <div className="headName">-Headed by: Suryansh Sharma</div>
      <div className="committeeDescription">
        Turing's competitive committee sought to encourage all programmers to
        master a variety of coding languages, from C++ to Java and Python.
        <br />
        <br />
        It aims to develop a solid understanding of data structures, algorithms,
        and analysis. They are also required and motivated to engage themselves
        in hackathons and coding competitions both on and off college in order
        to get experience in a competitive setting. <br />
        <br />
        Many Doubt Clearing and Essential Training Sessions are also conducted
        for the freshers to help them get comfortable in the programming
        environment.
        <br />
        <br />
      </div>
    </div>
  );
}

export default CPModal;