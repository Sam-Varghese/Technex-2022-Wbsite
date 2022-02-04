import "./homepage.scss";
import ButtonComponent from "./button/button";
import Menu from "../menu/menu";
import NMIMSDescComponent from "../aboutNMIMS/aboutNMIMS";
import AboutTuringComponent from "../aboutTuring/aboutTuring";
import SubCommitteesSection from "../subCommitteesSection/subCommitteesSection";
import SubCommitteesSlider from "../slickSlider/slickSlider";
import React, { useState } from "react";
import Slider from "react-slick";
import TestModal from "../modals/testModal";
const committeeInformation = require("../subCommitteesSection/committeeInfo.json");
const titles = committeeInformation.committeeNames;
var clickedComponentName;
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const titleSvg = () => {
  return (
    <svg
      width="90vw"
      height="169"
      viewBox="0 0 959 169"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_17_53)">
        <path
          d="M20.375 16.125H46.625L51 20.5H37.875V38H33.5V20.5H24.75L20.375 16.125ZM66.75 16.125V24.875H88.625V16.125H93V38H88.625V29.25H66.75V38H62.375V16.125H66.75ZM135 38H104.375V33.625H130.625L135 38ZM135 29.25H104.375V24.875H130.625L135 29.25ZM135 20.5H104.375V16.125H130.625L135 20.5ZM170.875 16.125H197.125L201.5 20.5H188.375V38H184V20.5H175.25L170.875 16.125ZM243.5 38H212.875V33.625H239.125L243.5 38ZM243.5 29.25H212.875V24.875H239.125L243.5 29.25ZM243.5 20.5H212.875V16.125H239.125L243.5 20.5ZM254.875 33.625V20.5C254.875 17.5833 256.333 16.125 259.25 16.125H281.125L285.5 20.5H259.25V33.625H281.125L285.5 38H259.25C256.333 38 254.875 36.5417 254.875 33.625ZM301.25 16.125V24.875H323.125V16.125H327.5V38H323.125V29.25H301.25V38H296.875V16.125H301.25ZM338.875 38V16.125L365.125 30.3779V16.125H369.5V38L343.25 24.0205V38H338.875ZM385.25 20.5V33.625H407.125V20.5H385.25ZM385.25 16.125H407.125C410.042 16.125 411.5 17.5833 411.5 20.5V33.625C411.5 36.5417 410.042 38 407.125 38H385.25C382.333 38 380.875 36.5417 380.875 33.625V20.5C380.875 17.5833 382.333 16.125 385.25 16.125ZM478 38H447.375V16.125H451.75V33.625H473.625L478 38ZM520 38H489.375V33.625H515.625L520 38ZM520 29.25H489.375V24.875H515.625L520 29.25ZM520 20.5H489.375V16.125H515.625L520 20.5ZM531.375 20.5C531.375 17.5833 532.833 16.125 535.75 16.125H557.625C560.542 16.125 562 17.5833 562 20.5V38H557.625V29.25H535.75V38H531.375V24.875H557.625V20.5H531.375ZM573.375 20.5V16.125H599.625C602.542 16.125 604 17.5833 604 20.5V24.875C604 27.7917 602.564 29.25 599.693 29.25H595.25L604 38H598.531L589.781 29.25H577.75V38H573.375V24.875H599.625V20.5H573.375ZM615.375 38V16.125L641.625 30.3779V16.125H646V38L619.75 24.0205V38H615.375ZM661.75 16.125V38H657.375V16.125H661.75ZM673.125 38V16.125L699.375 30.3779V16.125H703.75V38L677.5 24.0205V38H673.125ZM745.75 38H719.5C716.583 38 715.125 36.5417 715.125 33.625V20.5C715.125 17.5833 716.583 16.125 719.5 16.125H741.375L745.75 20.5H719.5V33.625H741.375V29.25H732.625L728.25 24.875H745.75V38ZM781.625 33.625V20.5C781.625 17.5833 783.083 16.125 786 16.125H807.875L812.25 20.5H786V33.625H807.875L812.25 38H786C783.083 38 781.625 36.5417 781.625 33.625ZM854.25 38H823.625V16.125H828V33.625H849.875L854.25 38ZM891.875 38H870C867.083 38 865.625 36.5417 865.625 33.625V16.125H870V33.625H891.875V16.125H896.25V33.625C896.25 36.5417 894.792 38 891.875 38ZM912 29.25V33.625H933.875V29.25H912ZM907.625 20.5V16.125H933.875C936.792 16.125 938.25 17.5833 938.25 20.5V22.6875C938.25 25.3535 936.792 26.8118 933.875 27.0625C936.792 27.3132 938.25 28.7715 938.25 31.4375V33.625C938.25 36.5417 936.792 38 933.875 38H907.625V24.875H933.875V20.5H907.625Z"
          fill="white"
          shapeRendering="crispEdges"
        />
        <path
          d="M282.277 98.02H346.627L346.987 96.13H282.637L282.277 98.02ZM283.447 92.35H347.797L348.157 90.82H283.807L283.447 92.35ZM294.427 143.2H315.127L316.027 138.97H295.327L294.427 143.2ZM284.707 86.68H349.057L349.327 85.42H284.977L284.707 86.68ZM295.687 137.53H316.387L317.197 133.66H296.497L295.687 137.53ZM296.857 131.86H317.557L318.367 128.26H297.667L296.857 131.86ZM298.027 126.28H318.727L319.447 122.95H298.747L298.027 126.28ZM285.877 81.1H350.227L350.407 80.11H286.057L285.877 81.1ZM299.287 120.61H319.987L320.617 117.55H299.917L299.287 120.61ZM300.457 114.94H321.157L321.697 112.24H300.997L300.457 114.94ZM301.627 109.27H322.327L322.867 106.84H302.167L301.627 109.27ZM302.887 103.69H323.587L324.037 101.53H303.337L302.887 103.69ZM314.767 145L314.857 144.37H294.157L294.067 145H314.767ZM418.122 136.54L418.752 133.66H387.702L386.892 137.53H416.952L418.122 136.54ZM353.052 136.54L353.862 137.53H383.832L384.642 133.66H353.682L353.052 136.54ZM385.632 143.2H409.932L415.062 138.97H386.532L385.632 143.2ZM388.062 131.86H419.112L419.922 128.26H388.872L388.062 131.86ZM358.272 143.2H382.572L383.472 138.97H354.942L358.272 143.2ZM354.042 131.86H385.002L385.812 128.26H354.852L354.042 131.86ZM389.232 126.28H420.282L421.002 122.95H400.302L400.032 124.39H389.682L389.232 126.28ZM376.362 124.39L376.632 122.95H355.932L355.212 126.28H386.172L386.622 124.39H376.362ZM356.472 120.61H377.172L377.802 117.55H357.102L356.472 120.61ZM400.842 120.61H421.542L422.172 117.55H401.472L400.842 120.61ZM357.642 114.94H378.342L378.882 112.24H358.182L357.642 114.94ZM402.012 114.94H422.712L423.252 112.24H402.552L402.012 114.94ZM358.812 109.27H379.512L380.052 106.84H359.352L358.812 109.27ZM403.182 109.27H423.882L424.422 106.84H403.722L403.182 109.27ZM404.442 103.69H425.142L425.592 101.53H404.892L404.442 103.69ZM360.072 103.69H380.772L381.222 101.53H360.522L360.072 103.69ZM405.612 98.02H426.312L426.672 96.13H405.972L405.612 98.02ZM361.242 98.02H381.942L382.302 96.13H361.602L361.242 98.02ZM406.782 92.35H427.482L427.842 90.82H407.142L406.782 92.35ZM362.412 92.35H383.112L383.472 90.82H362.772L362.412 92.35ZM363.672 86.68H384.372L384.642 85.42H363.942L363.672 86.68ZM408.042 86.68H428.742L429.012 85.42H408.312L408.042 86.68ZM409.212 81.1H429.912L430.092 80.11H409.392L409.212 81.1ZM364.842 81.1H385.542L385.722 80.11H365.022L364.842 81.1ZM407.772 145L408.492 144.37H385.362L385.272 145H407.772ZM382.212 145L382.302 144.37H359.262L359.802 145H382.212ZM440.909 98.02H505.979L506.339 96.13H441.269L440.909 98.02ZM498.239 128.26H467.099L469.889 131.86H498.869L499.319 129.7L498.239 128.26ZM465.569 126.28H496.619L494.009 122.95H462.959L465.569 126.28ZM442.079 92.35H507.149L507.509 90.82H442.439L442.079 92.35ZM474.299 137.53H497.699L498.509 133.66H471.239L474.299 137.53ZM461.249 120.61H492.209L489.869 117.55H460.529L460.169 119.26L461.249 120.61ZM431.279 143.2H451.979L452.879 138.97H432.179L431.279 143.2ZM478.619 143.2H496.439L497.339 138.97H475.379L478.619 143.2ZM432.539 137.53H453.239L454.049 133.66H433.349L432.539 137.53ZM443.339 86.68H506.609L505.619 85.42H443.609L443.339 86.68ZM433.709 131.86H454.409L455.219 128.26H434.519L433.709 131.86ZM434.879 126.28H455.579L456.299 122.95H435.599L434.879 126.28ZM461.069 114.94H487.799L485.639 112.24H461.609L461.069 114.94ZM436.139 120.61H456.839L457.469 117.55H436.769L436.139 120.61ZM444.509 81.1H502.199L501.389 80.11H444.689L444.509 81.1ZM437.309 114.94H458.009L458.549 112.24H437.849L437.309 114.94ZM438.479 109.27H459.179L459.719 106.84H439.019L438.479 109.27ZM439.739 103.69H460.439L460.889 101.53H440.189L439.739 103.69ZM484.109 103.69H504.809L505.259 101.53H484.559L484.109 103.69ZM487.799 109.27H503.549L504.089 106.84H485.909L487.799 109.27ZM492.209 114.94H502.379L502.919 112.24H490.139L492.209 114.94ZM501.569 118.54L501.839 117.55H494.279L496.709 120.61H499.049L501.569 118.54ZM451.619 145L451.709 144.37H431.009L430.919 145H451.619ZM480.059 145H496.079L496.169 144.37H479.519L480.059 145ZM462.239 109.27H483.299L482.939 108.82H462.329L462.239 109.27ZM510.947 143.2H531.647L532.547 138.97H511.847L510.947 143.2ZM512.207 137.53H532.907L533.717 133.66H513.017L512.207 137.53ZM513.377 131.86H534.077L534.887 128.26H514.187L513.377 131.86ZM514.547 126.28H535.247L535.967 122.95H515.267L514.547 126.28ZM515.807 120.61H536.507L537.137 117.55H516.437L515.807 120.61ZM516.977 114.94H537.677L538.217 112.24H517.517L516.977 114.94ZM518.147 109.27H538.847L539.387 106.84H518.687L518.147 109.27ZM519.407 103.69H540.107L540.557 101.53H519.857L519.407 103.69ZM520.577 98.02H541.277L541.637 96.13H520.937L520.577 98.02ZM521.747 92.35H542.447L542.807 90.82H522.107L521.747 92.35ZM523.007 86.68H543.707L543.977 85.42H523.277L523.007 86.68ZM524.177 81.1H544.877L545.057 80.11H524.357L524.177 81.1ZM531.287 145L531.377 144.37H510.677L510.587 145H531.287ZM612.83 128.26H582.05L584.75 131.86H613.82L614.18 130.06L612.83 128.26ZM580.43 126.28H611.21L608.69 122.95H577.91L580.43 126.28ZM589.25 137.53H612.65L613.46 133.66H586.19L589.25 137.53ZM576.11 120.61H606.89L604.55 117.55H573.77L576.11 120.61ZM546.23 143.2H566.93L567.83 138.97H547.13L546.23 143.2ZM593.57 143.2H611.39L612.29 138.97H590.33L593.57 143.2ZM571.7 114.94H602.48L600.41 112.24H569.63L571.7 114.94ZM547.49 137.53H568.19L569 133.66H548.3L547.49 137.53ZM567.29 109.27H598.07L596.27 106.84H565.49L567.29 109.27ZM548.66 131.86H569.36L570.17 128.26H549.47L548.66 131.86ZM549.83 126.28H570.53L571.25 122.95H550.55L549.83 126.28ZM563.06 103.69H593.84L592.22 101.53H561.44L563.06 103.69ZM551.09 120.61H571.7L569.27 117.55H551.72L551.09 120.61ZM558.65 98.02H589.43L587.99 96.13H557.21L558.65 98.02ZM599.15 103.69H619.85L620.3 101.53H599.6L599.15 103.69ZM602.57 109.27H618.59L619.13 106.84H600.68L602.57 109.27ZM557.03 92.35H585.02L583.94 90.82H557.39L557.03 92.35ZM600.32 98.02H621.02L621.38 96.13H600.68L600.32 98.02ZM552.26 114.94H567.29L565.13 112.24H552.8L552.26 114.94ZM606.98 114.94H617.42L617.96 112.24H604.82L606.98 114.94ZM601.49 92.35H622.19L622.55 90.82H601.85L601.49 92.35ZM558.29 86.68H580.7L579.71 85.42H558.56L558.29 86.68ZM602.75 86.68H623.45L623.72 85.42H603.02L602.75 86.68ZM603.92 81.1H624.62L624.8 80.11H604.1L603.92 81.1ZM553.43 109.27H562.88L560.99 106.84H553.97L553.43 109.27ZM611.3 120.61H616.25L616.88 117.55H608.96L611.3 120.61ZM559.46 81.1H576.38L575.57 80.11H559.64L559.46 81.1ZM566.57 145L566.66 144.37H545.96L545.87 145H566.57ZM611.03 145L611.12 144.37H594.47L595.01 145H611.03ZM554.69 103.69H558.65L556.94 101.53H555.14L554.69 103.69ZM615.17 125.65L615.71 122.95H613.1L615.17 125.65ZM628.235 137.53H668.555L669.365 133.66H628.055L627.425 136.54L628.235 137.53ZM632.645 143.2H667.295L668.195 138.97H629.315L632.645 143.2ZM628.415 131.86H669.725L670.535 128.26H629.225L628.415 131.86ZM635.615 98.02H700.685L701.045 96.13H635.975L635.615 98.02ZM657.845 120.61H695.915L696.545 117.55H658.475L657.845 120.61ZM650.735 124.39L651.005 122.95H630.305L629.585 126.28H670.895L671.345 124.39H650.735ZM659.015 114.94H697.085L697.625 112.24H659.555L659.015 114.94ZM636.785 92.35H701.855L702.215 90.82H637.145L636.785 92.35ZM660.185 109.27H695.735L693.845 106.84H660.725L660.185 109.27ZM692.495 136.54L693.125 133.66H672.425L671.615 137.53H691.325L692.495 136.54ZM639.755 86.68H701.315L700.325 85.42H641.285L639.755 86.68ZM672.785 131.86H693.485L694.295 128.26H673.595L672.785 131.86ZM673.955 126.28H694.655L695.375 122.95H674.675L673.955 126.28ZM670.355 143.2H684.305L689.435 138.97H671.255L670.355 143.2ZM630.845 120.61H651.545L652.175 117.55H631.475L630.845 120.61ZM632.015 114.94H652.715L653.255 112.24H632.555L632.015 114.94ZM633.185 109.27H653.885L654.425 106.84H633.725L633.185 109.27ZM646.595 81.1H696.905L696.095 80.11H647.765L646.595 81.1ZM634.445 103.69H655.145L655.595 101.53H634.895L634.445 103.69ZM666.935 145L667.025 144.37H633.635L634.175 145H666.935ZM661.445 103.69H691.415L691.055 103.24H661.535L661.445 103.69ZM682.145 145L682.865 144.37H670.085L669.995 145H682.145Z"
          fill="#FFC700"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_17_53"
          x="0.375"
          y="0.125"
          width="957.875"
          height="168.875"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_17_53"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0.409962 0 0 0 0 0.499953 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_17_53"
            result="effect2_dropShadow_17_53"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_17_53"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

function HomePageComponent() {
  const [getState, editState] = useState(false);

  const subCommitteeComponents = titles.map((object, index) => {
    return (
      <SubCommitteesSlider
        bannerUrl={committeeInformation.committeeBanners[index]}
        title={committeeInformation.committeeNames[index]}
        description={committeeInformation.introduction[index]}
        head={committeeInformation.committeeHeads[index]}
        onClick={() => {
          clickedComponentName = object;
          console.log(clickedComponentName);
          editState(true);
        }}
      />
    );
  });
  return (
    <div>
      <TestModal state={getState} onClose={() => editState(false)} componentName={ clickedComponentName}/>

      <Menu />
      <div className="titleDiv">
        {titleSvg()}
        <ButtonComponent />
      </div>
      <NMIMSDescComponent />
      <AboutTuringComponent />
      <SubCommitteesSection />
      <div className="sliderDiv">
        <Slider {...settings}>{subCommitteeComponents}</Slider>
      </div>
    </div>
  );
}

export default HomePageComponent;
