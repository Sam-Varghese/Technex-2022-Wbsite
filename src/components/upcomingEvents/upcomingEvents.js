import "./upcomingEvents.scss";
import Menu from "../menu/menu";
import Slider from "react-slick";
import UpcomingEventsSlickComponent from "./upcomingEventsSlickComponent/slickSlider";
import Contacts from "../contacts/contacts";

const committeeInformation = require("./upcomingEvents.json");
const titles = committeeInformation.committeeNames;

const subCommitteeComponents = titles.map((object, index) => {
  return (
    <UpcomingEventsSlickComponent
      bannerUrl={committeeInformation.committeeBanners[index]}
      title={committeeInformation.committeeNames[index]}
      description={committeeInformation.introduction[index]}
      head={committeeInformation.committeeHeads[index]}
      // onClick = {() => {alert("Hello")}}
    />
  );
});

const titleSvg = () => {
  return (
    <svg
      width="661"
      height="51"
      viewBox="0 0 661 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_353_6)">
        <path
          d="M45.405 2.465H35.505V33.595H15.045V2.465H5.145V33.045C5.145 38.49 9.6 42.945 15.045 42.945H35.505C40.95 42.945 45.405 38.49 45.405 33.045V2.465ZM53.8436 11.815H83.4886V19.295H53.2936V43H63.1936V28.645H83.4886C88.9336 28.645 93.3886 24.19 93.3886 18.745V12.365C93.3886 6.92 88.9336 2.465 83.4886 2.465H53.8436V11.815ZM130.069 28.095V33.595H109.609V11.815H130.069V17.315H139.969V12.365C139.969 6.92 135.514 2.465 130.069 2.465H109.609C104.164 2.465 99.7093 6.92 99.7093 12.365V33.045C99.7093 38.49 104.164 42.945 109.609 42.945H130.069C135.514 42.945 139.969 38.49 139.969 33.045V28.095H130.069ZM156.576 11.815H177.036V33.595H156.576V11.815ZM146.676 33.045C146.676 38.49 151.131 42.945 156.576 42.945H177.036C182.481 42.945 186.936 38.49 186.936 33.045V12.365C186.936 6.92 182.481 2.465 177.036 2.465H156.576C151.131 2.465 146.676 6.92 146.676 12.365V33.045ZM234.617 43H244.517V2.52L244.572 2.465H232.527L219.547 21.165L206.567 2.465H194.522V43H204.422V16.765L213.552 29.855H225.542L234.617 16.82V43ZM252.768 2.465V43H262.668V2.465H252.768ZM280.793 16.765L298.998 43H311.043L310.988 42.945V2.465H301.088V28.645L282.938 2.465H270.893V43H280.793V16.765ZM338.177 19.68V29.03H348.737V33.595H328.277V11.815H357.537V2.465H328.277C322.832 2.465 318.377 6.92 318.377 12.365V33.045C318.377 38.49 322.832 42.945 328.277 42.945H348.737C354.182 42.945 358.637 38.49 358.637 33.045V19.68H338.177ZM421.69 42.945V33.595H393.53V27.38H420.59V18.03H393.53V11.815H421.14V2.465H393.53C388.085 2.465 383.63 6.92 383.63 12.365V33.045C383.63 38.49 388.085 42.945 393.53 42.945H421.69ZM445.767 22.1L438.177 2.465H427.562L440.432 35.85L445.767 22.1ZM469.417 2.465H458.802L443.182 43H453.797L469.417 2.465ZM512.777 42.945V33.595H484.617V27.38H511.677V18.03H484.617V11.815H512.227V2.465H484.617C479.172 2.465 474.717 6.92 474.717 12.365V33.045C474.717 38.49 479.172 42.945 484.617 42.945H512.777ZM530.529 16.765L548.734 43H560.779L560.724 42.945V2.465H550.824V28.645L532.674 2.465H520.629V43H530.529V16.765ZM583.624 12.42V43H593.524V12.42H608.869V2.52H593.524V2.465H583.624V2.52H568.334V12.42H583.624ZM645.153 27.38V33.65H615.893V43H645.153C650.598 43 655.053 38.545 655.053 33.1V27.93C655.053 22.485 650.598 18.03 645.153 18.03H625.793V11.815H655.053V2.465H625.793C620.348 2.465 615.893 6.92 615.893 12.365V17.48C615.893 22.925 620.348 27.38 625.793 27.38H645.153Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_353_6"
          x="0.144989"
          y="0.464996"
          width="659.908"
          height="50.535"
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
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_353_6"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_353_6"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function UpcomingEvents() {
  return (
    <div>
      <Menu />
      <div className="upcomingEventsTitleDiv">{titleSvg()}</div>
      <div className="sliderDiv">
        <Slider {...settings}>{subCommitteeComponents}</Slider>
      </div>
      <Contacts />
    </div>
  );
}

export default UpcomingEvents;
