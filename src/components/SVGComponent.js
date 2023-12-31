import React from "react";
import "./suit.css";

function MySVGComponent(props) {
  const { design } = props;
  let backgroundImageUrl;

  switch (design) {
    case "d1":
      backgroundImageUrl =
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/894_huge_c300.jpg";
      break;
    case "d2":
      backgroundImageUrl =
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/141_huge_c300.jpg";
      break;
    case "d3":
      backgroundImageUrl =
        "https://www.hockerty.com/dimg/fabric/suit/2251_huge.jpg";
      break;
    case "d4":
      backgroundImageUrl =
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/3322_huge_c300.jpg";
      break;
    case "d5":
      backgroundImageUrl =
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/3328_huge_c300.jpg";
      break;
    case "d6":
      backgroundImageUrl =
        "https://www.hockerty.com/dimg/fabric/suit/3163_huge.jpg";
      break;
    default:
      backgroundImageUrl = "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/894_huge_c300.jpg";
  }
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 500 950 500"
      width="500"
      height="800"
    >
      <title>New Project</title>
      <defs>
        <linearGradient
          id="g1"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(67.28,83.492,-88.138,71.024,478.272,370.208)"
        >
          <stop offset="0" stop-color="#e3e9f3" />
          <stop offset="1" stop-color="#f3f4fa" />
        </linearGradient>
        <linearGradient
          id="g2"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-4.179,-15.606,39.636,-10.615,480.402,391.85)"
        >
          <stop offset="0" stop-color="#ffffff" />
          <stop offset="1" stop-color="#d0d8e2" />
        </linearGradient>
        <linearGradient
          id="g3"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(81.237,-25.069,10.532,34.13,482.188,391.782)"
        >
          <stop offset="0" stop-color="#eaeff6" />
          <stop offset="1" stop-color="#fafbfd" />
        </linearGradient>
        <linearGradient
          id="g4"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-21.01,9.703,-5.972,-12.931,315.008,164.648)"
        >
          <stop offset="0" stop-color="#dee2f0" />
          <stop offset="1" stop-color="#ffffff" />
        </linearGradient>
        <linearGradient
          id="g5"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-60.452,-211.294,47.448,-13.575,428.73,600.687)"
        >
          <stop offset="0" stop-color="#d9deee" />
          <stop offset="1" stop-color="#fafafd" />
        </linearGradient>
        <linearGradient
          id="g6"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(20.159,9.31,-5.73,12.408,484.513,164.885)"
        >
          <stop offset="0" stop-color="#dee2f0" />
          <stop offset="1" stop-color="#ffffff" />
        </linearGradient>
        <linearGradient
          id="g7"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(183.277,-379.56,89.753,43.339,371.104,600.892)"
        >
          <stop offset="0" stop-color="#d9deee" />
          <stop offset="1" stop-color="#fdfdfe" />
        </linearGradient>
        <linearGradient
          id="g8"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(8.255,-6.173,5.252,7.024,377.398,615.764)"
        >
          <stop offset="0" stop-color="#ffffff" />
          <stop offset="1" stop-color="#c3c3dd" />
        </linearGradient>
        <radialGradient
          id="g9"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(27.554,0,0,27.554,401.19,610.739)"
        >
          <stop offset=".257" stop-color="#a7a8a9" />
          <stop offset=".813" stop-color="#ffffff" />
        </radialGradient>
        <linearGradient
          id="g10"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-23.68,23.68,0,386.358,623.556)"
        >
          <stop offset="0" stop-color="#e8ecf6" />
          <stop offset="1" stop-color="#e7ecf5" />
        </linearGradient>
        <linearGradient
          id="g11"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-23.539,23.539,0,386.442,623.473)"
        >
          <stop offset="0" stop-color="#eaeef7" />
          <stop offset="1" stop-color="#e7ecf6" />
        </linearGradient>
        <linearGradient
          id="g12"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-23.399,23.399,0,386.526,623.389)"
        >
          <stop offset="0" stop-color="#eceff7" />
          <stop offset="1" stop-color="#e8edf6" />
        </linearGradient>
        <linearGradient
          id="g13"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-23.258,23.258,0,386.61,623.306)"
        >
          <stop offset="0" stop-color="#edf1f8" />
          <stop offset="1" stop-color="#e9edf6" />
        </linearGradient>
        <linearGradient
          id="g14"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-23.118,23.118,0,386.694,623.223)"
        >
          <stop offset="0" stop-color="#eff2f9" />
          <stop offset="1" stop-color="#e9eef6" />
        </linearGradient>
        <linearGradient
          id="g15"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-22.977,22.977,0,386.777,623.14)"
        >
          <stop offset="0" stop-color="#f1f3fa" />
          <stop offset="1" stop-color="#eaeff7" />
        </linearGradient>
        <linearGradient
          id="g16"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-22.837,22.837,0,386.861,623.056)"
        >
          <stop offset="0" stop-color="#f3f5fa" />
          <stop offset="1" stop-color="#ebeff7" />
        </linearGradient>
        <linearGradient
          id="g17"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-22.696,22.696,0,386.945,622.973)"
        >
          <stop offset="0" stop-color="#f5f6fb" />
          <stop offset="1" stop-color="#ebf0f7" />
        </linearGradient>
        <linearGradient
          id="g18"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-22.556,22.555,0,387.029,622.889)"
        >
          <stop offset="0" stop-color="#f6f8fc" />
          <stop offset="1" stop-color="#ecf0f7" />
        </linearGradient>
        <linearGradient
          id="g19"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-22.415,22.415,0,387.113,622.806)"
        >
          <stop offset="0" stop-color="#f8f9fc" />
          <stop offset="1" stop-color="#edf1f7" />
        </linearGradient>
        <linearGradient
          id="g20"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-22.274,22.274,0,387.197,622.722)"
        >
          <stop offset="0" stop-color="#fafbfd" />
          <stop offset="1" stop-color="#edf1f8" />
        </linearGradient>
        <linearGradient
          id="g21"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-22.134,22.134,0,387.281,622.639)"
        >
          <stop offset="0" stop-color="#fcfcfe" />
          <stop offset="1" stop-color="#eef2f8" />
        </linearGradient>
        <linearGradient
          id="g22"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-21.69,21.69,0,387.546,622.375)"
        >
          <stop offset="0" stop-color="#fafbfd" />
          <stop offset="1" stop-color="#edf1f8" />
        </linearGradient>
        <linearGradient
          id="g23"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-21.246,21.246,0,387.812,622.112)"
        >
          <stop offset="0" stop-color="#f8f9fc" />
          <stop offset="1" stop-color="#edf1f7" />
        </linearGradient>
        <linearGradient
          id="g24"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-20.802,20.802,0,388.076,621.849)"
        >
          <stop offset="0" stop-color="#f6f8fc" />
          <stop offset="1" stop-color="#ecf0f7" />
        </linearGradient>
        <linearGradient
          id="g25"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-20.358,20.358,0,388.342,621.586)"
        >
          <stop offset="0" stop-color="#f5f6fb" />
          <stop offset="1" stop-color="#ebf0f7" />
        </linearGradient>
        <linearGradient
          id="g26"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-19.914,19.914,0,388.607,621.322)"
        >
          <stop offset="0" stop-color="#f3f5fa" />
          <stop offset="1" stop-color="#ebeff7" />
        </linearGradient>
        <linearGradient
          id="g27"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-19.47,19.47,0,388.872,621.059)"
        >
          <stop offset="0" stop-color="#f1f3fa" />
          <stop offset="1" stop-color="#eaeff7" />
        </linearGradient>
        <linearGradient
          id="g28"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-19.027,19.027,0,389.137,620.796)"
        >
          <stop offset="0" stop-color="#eff2f9" />
          <stop offset="1" stop-color="#e9eef6" />
        </linearGradient>
        <linearGradient
          id="g29"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-18.583,18.583,0,389.402,620.532)"
        >
          <stop offset="0" stop-color="#edf1f8" />
          <stop offset="1" stop-color="#e9edf6" />
        </linearGradient>
        <linearGradient
          id="g30"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-18.138,18.138,0,389.667,620.269)"
        >
          <stop offset="0" stop-color="#eceff7" />
          <stop offset="1" stop-color="#e8edf6" />
        </linearGradient>
        <linearGradient
          id="g31"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-17.695,17.695,0,389.932,620.006)"
        >
          <stop offset="0" stop-color="#eaeef7" />
          <stop offset="1" stop-color="#e7ecf6" />
        </linearGradient>
        <linearGradient
          id="g32"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-17.251,17.251,0,390.197,619.743)"
        >
          <stop offset="0" stop-color="#e8ecf6" />
          <stop offset="1" stop-color="#e7ecf5" />
        </linearGradient>
        <radialGradient
          id="g33"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.564,0,0,1.564,397.28,607.394)"
        >
          <stop offset=".75" stop-color="#a7a8a9" />
          <stop offset="1" stop-color="#e6ebf5" />
        </radialGradient>
        <radialGradient
          id="g34"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.564,0,0,1.564,403.718,607.394)"
        >
          <stop offset=".75" stop-color="#a7a8a9" />
          <stop offset="1" stop-color="#e6ebf5" />
        </radialGradient>
        <radialGradient
          id="g35"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.564,0,0,1.564,397.28,612.958)"
        >
          <stop offset=".75" stop-color="#a7a8a9" />
          <stop offset="1" stop-color="#e6ebf5" />
        </radialGradient>
        <radialGradient
          id="g36"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.564,0,0,1.564,403.718,612.958)"
        >
          <stop offset=".75" stop-color="#a7a8a9" />
          <stop offset="1" stop-color="#e6ebf5" />
        </radialGradient>
        <linearGradient
          id="g37"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.037,-0.032,.104,-0.119,403.348,607.542)"
        >
          <stop offset="0" stop-color="#e3e7ed" />
          <stop offset="1" stop-color="#ebf0fb" />
        </linearGradient>
        <linearGradient
          id="g38"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.105,-0.093,.638,-0.721,403.292,607.806)"
        >
          <stop offset="0" stop-color="#e3e7ed" />
          <stop offset="1" stop-color="#ebf0fb" />
        </linearGradient>
        <linearGradient
          id="g39"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.032,-0.033,.069,-0.067,398.858,612.086)"
        >
          <stop offset="0" stop-color="#e3e7ed" />
          <stop offset="1" stop-color="#ebf0fb" />
        </linearGradient>
        <radialGradient
          id="g40"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.127,3.167,-3.167,-0.127,400.388,610.178)"
        >
          <stop offset=".32" stop-color="#eceef2" />
          <stop offset=".531" stop-color="#ffffff" />
          <stop offset="1" stop-color="#e3e7ed" />
        </radialGradient>
        <linearGradient
          id="g41"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.029,.041,-0.133,-0.095,397.474,607.487)"
        >
          <stop offset="0" stop-color="#e3e7ed" />
          <stop offset="1" stop-color="#ebf0fb" />
        </linearGradient>
        <linearGradient
          id="g42"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.081,.114,-0.764,-0.544,397.734,607.528)"
        >
          <stop offset="0" stop-color="#e3e7ed" />
          <stop offset="1" stop-color="#ebf0fb" />
        </linearGradient>
        <linearGradient
          id="g43"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.034,.041,-0.085,-0.071,402.465,611.48)"
        >
          <stop offset="0" stop-color="#e3e7ed" />
          <stop offset="1" stop-color="#ebf0fb" />
        </linearGradient>
        <radialGradient
          id="g44"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(3.164,-0.196,.196,3.164,400.388,610.177)"
        >
          <stop offset=".244" stop-color="#ffffff" />
          <stop offset="1" stop-color="#e3e7ed" />
        </radialGradient>
        <linearGradient
          id="g45"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(8.255,-6.173,5.252,7.024,377.398,728.891)"
        >
          <stop offset="0" stop-color="#ffffff" />
          <stop offset="1" stop-color="#c3c3dd" />
        </linearGradient>
        <radialGradient
          id="g46"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(27.554,0,0,27.554,401.19,723.866)"
        >
          <stop offset=".257" stop-color="#a7a8a9" />
          <stop offset=".813" stop-color="#ffffff" />
        </radialGradient>
        <linearGradient
          id="g47"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-23.68,23.68,0,386.358,736.683)"
        >
          <stop offset="0" stop-color="#e8ecf6" />
          <stop offset="1" stop-color="#e7ecf5" />
        </linearGradient>
        <linearGradient
          id="g48"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-23.539,23.539,0,386.442,736.6)"
        >
          <stop offset="0" stop-color="#eaeef7" />
          <stop offset="1" stop-color="#e7ecf6" />
        </linearGradient>
        <linearGradient
          id="g49"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-23.399,23.399,0,386.526,736.517)"
        >
          <stop offset="0" stop-color="#eceff7" />
          <stop offset="1" stop-color="#e8edf6" />
        </linearGradient>
        <linearGradient
          id="g50"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-23.258,23.258,0,386.61,736.433)"
        >
          <stop offset="0" stop-color="#edf1f8" />
          <stop offset="1" stop-color="#e9edf6" />
        </linearGradient>
        <linearGradient
          id="g51"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-23.118,23.118,0,386.694,736.35)"
        >
          <stop offset="0" stop-color="#eff2f9" />
          <stop offset="1" stop-color="#e9eef6" />
        </linearGradient>
        <linearGradient
          id="g52"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-22.977,22.977,0,386.777,736.267)"
        >
          <stop offset="0" stop-color="#f1f3fa" />
          <stop offset="1" stop-color="#eaeff7" />
        </linearGradient>
        <linearGradient
          id="g53"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-22.837,22.837,0,386.861,736.183)"
        >
          <stop offset="0" stop-color="#f3f5fa" />
          <stop offset="1" stop-color="#ebeff7" />
        </linearGradient>
        <linearGradient
          id="g54"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-22.696,22.696,0,386.945,736.1)"
        >
          <stop offset="0" stop-color="#f5f6fb" />
          <stop offset="1" stop-color="#ebf0f7" />
        </linearGradient>
        <linearGradient
          id="g55"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-22.556,22.555,0,387.029,736.016)"
        >
          <stop offset="0" stop-color="#f6f8fc" />
          <stop offset="1" stop-color="#ecf0f7" />
        </linearGradient>
        <linearGradient
          id="g56"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-22.415,22.415,0,387.113,735.933)"
        >
          <stop offset="0" stop-color="#f8f9fc" />
          <stop offset="1" stop-color="#edf1f7" />
        </linearGradient>
        <linearGradient
          id="g57"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-22.274,22.274,0,387.197,735.85)"
        >
          <stop offset="0" stop-color="#fafbfd" />
          <stop offset="1" stop-color="#edf1f8" />
        </linearGradient>
        <linearGradient
          id="g58"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-22.134,22.134,0,387.281,735.766)"
        >
          <stop offset="0" stop-color="#fcfcfe" />
          <stop offset="1" stop-color="#eef2f8" />
        </linearGradient>
        <linearGradient
          id="g59"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-21.69,21.69,0,387.546,735.503)"
        >
          <stop offset="0" stop-color="#fafbfd" />
          <stop offset="1" stop-color="#edf1f8" />
        </linearGradient>
        <linearGradient
          id="g60"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-21.246,21.246,0,387.812,735.239)"
        >
          <stop offset="0" stop-color="#f8f9fc" />
          <stop offset="1" stop-color="#edf1f7" />
        </linearGradient>
        <linearGradient
          id="g61"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-20.802,20.802,0,388.076,734.976)"
        >
          <stop offset="0" stop-color="#f6f8fc" />
          <stop offset="1" stop-color="#ecf0f7" />
        </linearGradient>
        <linearGradient
          id="g62"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-20.358,20.358,0,388.342,734.713)"
        >
          <stop offset="0" stop-color="#f5f6fb" />
          <stop offset="1" stop-color="#ebf0f7" />
        </linearGradient>
        <linearGradient
          id="g63"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-19.914,19.914,0,388.607,734.449)"
        >
          <stop offset="0" stop-color="#f3f5fa" />
          <stop offset="1" stop-color="#ebeff7" />
        </linearGradient>
        <linearGradient
          id="g64"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-19.471,19.47,0,388.871,734.186)"
        >
          <stop offset="0" stop-color="#f1f3fa" />
          <stop offset="1" stop-color="#eaeff7" />
        </linearGradient>
        <linearGradient
          id="g65"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-19.027,19.027,0,389.137,733.923)"
        >
          <stop offset="0" stop-color="#eff2f9" />
          <stop offset="1" stop-color="#e9eef6" />
        </linearGradient>
        <linearGradient
          id="g66"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-18.583,18.583,0,389.402,733.66)"
        >
          <stop offset="0" stop-color="#edf1f8" />
          <stop offset="1" stop-color="#e9edf6" />
        </linearGradient>
        <linearGradient
          id="g67"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-18.138,18.138,0,389.667,733.396)"
        >
          <stop offset="0" stop-color="#eceff7" />
          <stop offset="1" stop-color="#e8edf6" />
        </linearGradient>
        <linearGradient
          id="g68"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-17.695,17.695,0,389.932,733.133)"
        >
          <stop offset="0" stop-color="#eaeef7" />
          <stop offset="1" stop-color="#e7ecf6" />
        </linearGradient>
        <linearGradient
          id="g69"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0,-17.251,17.251,0,390.197,732.87)"
        >
          <stop offset="0" stop-color="#e8ecf6" />
          <stop offset="1" stop-color="#e7ecf5" />
        </linearGradient>
        <radialGradient
          id="g70"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.564,0,0,1.564,397.28,720.522)"
        >
          <stop offset=".75" stop-color="#a7a8a9" />
          <stop offset="1" stop-color="#e6ebf5" />
        </radialGradient>
        <radialGradient
          id="g71"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.564,0,0,1.564,403.718,720.522)"
        >
          <stop offset=".75" stop-color="#a7a8a9" />
          <stop offset="1" stop-color="#e6ebf5" />
        </radialGradient>
        <radialGradient
          id="g72"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.564,0,0,1.564,397.28,726.085)"
        >
          <stop offset=".75" stop-color="#a7a8a9" />
          <stop offset="1" stop-color="#e6ebf5" />
        </radialGradient>
        <radialGradient
          id="g73"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1.564,0,0,1.564,403.718,726.085)"
        >
          <stop offset=".75" stop-color="#a7a8a9" />
          <stop offset="1" stop-color="#e6ebf5" />
        </radialGradient>
        <linearGradient
          id="g74"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.037,-0.032,.105,-0.119,403.348,720.669)"
        >
          <stop offset="0" stop-color="#e3e7ed" />
          <stop offset="1" stop-color="#ebf0fb" />
        </linearGradient>
        <linearGradient
          id="g75"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.105,-0.093,.638,-0.721,403.292,720.933)"
        >
          <stop offset="0" stop-color="#e3e7ed" />
          <stop offset="1" stop-color="#ebf0fb" />
        </linearGradient>
        <linearGradient
          id="g76"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.032,-0.033,.069,-0.067,398.858,725.214)"
        >
          <stop offset="0" stop-color="#e3e7ed" />
          <stop offset="1" stop-color="#ebf0fb" />
        </linearGradient>
        <radialGradient
          id="g77"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.127,3.167,-3.167,-0.127,400.389,723.303)"
        >
          <stop offset=".32" stop-color="#eceef2" />
          <stop offset=".531" stop-color="#ffffff" />
          <stop offset="1" stop-color="#e3e7ed" />
        </radialGradient>
        <linearGradient
          id="g78"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.029,.041,-0.133,-0.095,397.474,720.614)"
        >
          <stop offset="0" stop-color="#e3e7ed" />
          <stop offset="1" stop-color="#ebf0fb" />
        </linearGradient>
        <linearGradient
          id="g79"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.081,.114,-0.764,-0.544,397.734,720.656)"
        >
          <stop offset="0" stop-color="#e3e7ed" />
          <stop offset="1" stop-color="#ebf0fb" />
        </linearGradient>
        <linearGradient
          id="g80"
          x2="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-0.034,.041,-0.085,-0.071,402.465,724.607)"
        >
          <stop offset="0" stop-color="#e3e7ed" />
          <stop offset="1" stop-color="#ebf0fb" />
        </linearGradient>
        <radialGradient
          id="g81"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(3.164,-0.196,.196,3.164,400.388,723.304)"
        >
          <stop offset=".244" stop-color="#ffffff" />
          <stop offset="1" stop-color="#e3e7ed" />
        </radialGradient>
        <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
          <path d="m16.19 819.62c2.46-50.89 4.84-101.92 4.84-132.25 0-58.83 22.15-223.36 25.02-243.58 6.89-48.63 14.98-95.85 21.53-122.24 0.94-3.8 1.87-8.71 2.85-12.31 5.17-18.96 10.81-33.98 15.7-47.74 7.69-21.62 13.34-36.92 14.71-39.3 2.51-4.38 8.35-10.56 13.76-8.07 3.97-14.77 35.49-17.15 71.73-31.5 21.54-8.52 59.55-25.82 88.23-38.77 6.19-4.73 22.72-30.79 32.81-37.98 3.91-2.8 8.17-5.36 9.65-3.97 0.37 0.35-17.62 15.31-5.98 64.01 3.6 15.06 10.9 25.83 17.02 49.67 13.69 53.35 35.2 132.56 47.43 179.69 8.31 31.99 16.98 67.1 24.44 95.91 7.46-28.8 15.73-60.74 24.04-92.72 18.97-73.07 38.07-146.35 47.83-182.88 2.22-8.3 3.96-14.7 5.1-18.78 0.82-2.93 1.75-10.43 3.36-16.95q0.27-1.09 0.57-2.12 0.2-0.74 0.41-1.38 0.04-0.13 0.08-0.25 0.24-0.74 0.49-1.43 0.03-0.07 0.05-0.13c1.01-2.69 2.22-4.75 3.69-5.53q-0.18-0.68-0.2-1.33-0.06-0.75 0.14-1.46c0.46-1.58 3.26-15.4 3.64-19.05 1.85-31.05-10.41-45.04-9.26-45.31 1.75-0.42 3.21-0.29 4.43-0.08 3.24 0.58 7.1 3.64 10.53 6.51 6.39 5.35 11.42 11.6 17.37 19.79 4.01 5.53 8.22 10.69 10.39 13.3q1.42 1.71 3.47 2.54c3.97 1.61 9.53 4.25 12.75 5.74 11.38 5.22 20.2 8.72 35.49 15.44 16.15 7.1 34.53 15.86 51.07 21.07 38.93 12.25 58.21 17.44 60.72 27.62 4.89-0.99 8.72 2.5 11.53 5.57 3.6 3.92 5.11 11.36 9.15 21.93 4.81 12.57 8.83 23.3 12.34 33.41 12.4 35.68 18.51 63.59 31.1 137.01 3.46 20.13 28.64 213.48 28.77 284.67 0.04 19.6 2.62 70.42 5.21 123.23zm622.59-78.19c0-0.07-3.79-40.87-3.8-40.96-3.06-35.09-12.03-144.83-12.49-149.87-0.18-2.07 0.57-26.98 0.24-24.76-11.3 74.79-5.98 124.59 16.05 215.59zm-477.6 5.48c8.62-34.35 11.29-56.01 17.38-82.01 8.42-36 5.62-96.51-1.28-148.34 2.02 32.37-1.82 75.22-5.36 116.42-3.64 42.32-7.05 82.98-10.74 113.93z" />
        </clipPath>
        <image
          width="1000"
          height="1100"
          id="img1"
          href={backgroundImageUrl}
        />
      </defs>
      <g id="&lt;Group&gt; copy 143">
        <g id="suit-left-side">
          <g id="fullpocket">
            <g id="&lt;Group&gt;" style={{ opacity: 0 }}>
              <path
                id="&lt;Path&gt;"
                class="s0"
                d="m471.7 519.7l135-1.5 7.1-151.6h-135.5z"
              />
            </g>
            <g id="&lt;Group&gt;">
              <path
                id="&lt;Mesh&gt;"
                class="s1"
                d="m471.7 519.7q1.7 0 3.3-0.1 0.1-1.6 0.2-3.4-1.7 0.1-3.3 0.2-0.1 1.6-0.2 3.3zm0.2-3.3q1.6-0.1 3.3-0.2c0-2.4 0.1-4.9 0.2-7.2-1.1 0.3-2.1 0.5-3.3 0.5q-0.1 3.4-0.2 6.9zm0.2-6.9c1.2 0 2.2-0.2 3.3-0.5 0.8-18.4 1.7-36.4 2.5-54.9q-1.7 0-3.4 0-1.2 27.7-2.4 55.4zm2.4-55.4q1.7 0 3.4 0c0.7-16.6 1.4-32 2.1-47.6q-1.7 0-3.3 0c-0.8 15.6-1.5 31-2.2 47.6zm2.2-47.6q1.6 0 3.3 0c0.5-11.8 1.1-23.7 1.6-36.3q-1.7 0-3.3 0c-0.6 12.6-1.1 24.5-1.6 36.3zm-1.7 113.1q3.4 0 6.7 0c0-1.1 0.1-2.4 0.1-3.8-2.3 0-4.4 0.3-6.6 0.4q-0.1 1.8-0.2 3.4zm0.2-3.4c2.2-0.1 4.3-0.4 6.6-0.4-0.1-2.8-0.1-5.9 0-8.2-2.2 0-4.3 0.9-6.4 1.4-0.1 2.3-0.2 4.8-0.2 7.2zm0.2-7.2c2.1-0.5 4.2-1.4 6.4-1.4 0.8-18.4 1.9-35.1 2.7-53.5q-3.3 0-6.6 0c-0.8 18.5-1.7 36.5-2.5 54.9zm2.5-54.9q3.3 0 6.6 0c0.7-16.6 1.5-32.1 2.2-47.7q-3.4 0-6.7 0.1c-0.7 15.6-1.4 31-2.1 47.6zm2.1-47.6q3.3-0.1 6.7-0.1c0.5-11.8 1.1-23.7 1.6-36.3q-3.3 0.1-6.7 0.1c-0.5 12.6-1.1 24.5-1.6 36.3zm1.7 113.1q30.5-0.4 60.9-0.7 0.1-1.7 0.2-3.3c-20.3 0.2-40.7 0-61 0.2 0 1.4-0.1 2.7-0.1 3.8zm0.1-3.8c20.3-0.2 40.7 0 61-0.2q0.1-3.4 0.3-6.8c-20.3 0.2-41-1.4-61.3-1.2-0.1 2.3-0.1 5.4 0 8.2zm0-8.2c20.3-0.2 41 1.4 61.3 1.2q1.2-27.5 2.5-55.1-30.6 0.2-61.1 0.4c-0.8 18.4-1.9 35.1-2.7 53.5zm2.7-53.5q30.5-0.2 61.1-0.4c0.7-16.5 1.4-32.6 2.2-48.7-20.4 0.5-40.8 1.2-61.1 1.4-0.7 15.6-1.5 31.1-2.2 47.7zm2.2-47.7c20.3-0.2 40.7-0.9 61.1-1.4 0.5-12.2 1.1-24.5 1.7-37-20.4 0.9-40.8 1.9-61.2 2.1-0.5 12.6-1.1 24.5-1.6 36.3zm55.9 112.5q26.8-0.3 53.7-0.6 0.1-1.6 0.1-3.3-26.8 0.3-53.6 0.6-0.1 1.6-0.2 3.3zm0.2-3.3q26.8-0.3 53.6-0.6 0.2-3.4 0.3-6.8-26.8 0.3-53.6 0.6-0.2 3.4-0.3 6.8zm0.3-6.8q26.8-0.3 53.6-0.6 1.3-27.4 2.6-54.8-26.9 0.1-53.7 0.3-1.3 27.6-2.5 55.1zm2.5-55.1q26.8-0.2 53.7-0.3 1.1-24.8 2.3-49.5c-18 0.1-35.9 0.5-53.8 1.1-0.8 16.1-1.5 32.2-2.2 48.7zm2.2-48.7c17.9-0.6 35.8-1 53.8-1.1q0.9-18.7 1.7-37.3c-17.9 0-35.9 0.6-53.8 1.4-0.6 12.5-1.2 24.8-1.7 37zm48.5 113.3q3.2 0 6.4-0.1 0-1.6 0.1-3.3-3.2 0.1-6.4 0.1 0 1.7-0.1 3.3zm0.1-3.3q3.2 0 6.4-0.1 0.2-3.3 0.3-6.7-3.2 0-6.4 0-0.1 3.4-0.3 6.8zm0.3-6.8q3.2 0 6.4 0 1.3-27.5 2.6-54.9-3.2 0-6.4 0.1-1.3 27.4-2.6 54.8zm2.6-54.8q3.2-0.1 6.4-0.1 1.1-24.7 2.3-49.4-3.2 0-6.4 0-1.2 24.7-2.3 49.5zm2.3-49.5q3.2 0 6.4 0 0.9-18.7 1.7-37.3-3.2 0-6.4 0-0.8 18.6-1.7 37.3zm1.1 114.3q2 0 4 0 0.1-1.7 0.2-3.3-2.1 0-4.1 0-0.1 1.7-0.1 3.3zm0.1-3.3q2 0 4.1 0 0.1-3.4 0.3-6.8-2 0.1-4.1 0.1-0.1 3.4-0.3 6.7zm0.3-6.7q2.1 0 4.1-0.1 1.3-27.4 2.5-54.8-2 0-4 0-1.3 27.4-2.6 54.9zm2.6-54.9q2 0 4 0 1.2-24.7 2.4-49.4-2.1 0-4.1 0-1.2 24.7-2.3 49.4zm2.3-49.4q2 0 4.1 0 0.8-18.7 1.7-37.3-2 0-4.1 0-0.8 18.6-1.7 37.3z"
              />
            </g>
          </g>
          <g id="pocket-top">
            <path
              id="&lt;Mesh&gt;"
              fill-rule="evenodd"
              class="s2"
              d="m480.5 393.4q0.8 0.2 2.1 0.3l-4-1.9c-2-2.9-3.6-9.5-3.7-15 0-2.2 0.3-4.3 0.9-5.9 0.6-1.7 1.6-2.8 3.2-2.8q0 0 0.5-0.1 0.1 0 0.1 0c8.6-0.3 109.6-4.7 131.1-5q1.3-0.1 2.2-0.1c0.8 0 1.5 1.2 1.9 3 0.4 1.7 0.6 3.9 0.6 6.3 0.1 5.9-0.8 12.9-2.3 15.7-0.4 0.8-0.9 1.2-1.4 1.2q-0.6 0-1.6 0 0 0 0 0c-17 0.5-108.4 6.6-127.5 4.6l-4-1.9c0.6 0.9 1.3 1.4 1.9 1.6zm130.2-30.4c0.9 0 1.6 1.1 2 2.9-0.4-1.8-1.1-2.9-2-2.9z"
            />
            <g id="&lt;Clip Group&gt;">
              <g id="&lt;Group&gt;">
                <path
                  id="&lt;Path&gt;"
                  class="s3"
                  d="m479.9 368.8c0 0 115.9-4.7 132.1-4.7 4.2 0 2.7 24-1.2 24-11.7 0-116.3 6.7-129.4 3.9-4.8-1-8.8-22.9-1.5-23.2z"
                />
              </g>
              <path
                id="&lt;Mesh&gt;"
                class="s4"
                d="m481.4 392c4.3 0.9 18.4 0.8 35.8 0.3-0.7-0.2-1.9-2.1-3.4-4.8-17.5 0.6-32.6 0.7-35.9 0 0.9 2.4 2.2 4.2 3.5 4.5zm-3.5-4.5c3.3 0.7 18.4 0.6 35.9 0-3.1-5.9-6.8-15.6-5.2-18.7-17.9 0.6-30.8 1.1-31 1.1-2.8 3.1-1.9 12 0.3 17.6zm-0.3-17.6c0.2 0 13.1-0.5 31-1.1 0.3-0.7 0.4-1.1 1-1.2-17.3 0.7-29.7 1.2-29.7 1.2-1 0.1-1.7 0.4-2.3 1.1zm39.6 22.4c15.8-0.5 34.2-1.4 50.7-2.2 0-0.1-0.5-2-1-4.6-17.7 0.7-37.2 1.5-53.1 2 1.5 2.7 2.7 4.6 3.4 4.8zm-3.4-4.8c15.9-0.5 35.4-1.3 53.1-2-1.2-5.8-3.8-15.6-3.6-18.8-18.5 0.7-38.6 1.5-54.7 2.1-1.6 3.1 2.1 12.8 5.2 18.7zm-5.2-18.7c16.1-0.6 36.2-1.4 54.7-2.1 0-0.6-0.6-1.1-0.6-1.1-17.9 0.7-37.5 1.4-53.1 2-0.6 0.1-0.7 0.5-1 1.2zm59.3 21.3c19.3-1 35.9-1.9 41.7-2 1.1 0 1.9-1.7 2.5-4.3-6.2 0.2-24.4 0.9-45.2 1.7 0.5 2.6 1 4.5 1 4.6zm-1-4.6c20.8-0.8 39-1.5 45.2-1.7 1.3-5.7 1.4-15.4-0.4-18.6-7.4 0.1-26.7 0.8-48.4 1.5-0.2 3.2 2.4 13 3.6 18.8zm-3.6-18.8c21.7-0.7 41-1.4 48.4-1.5-0.3-0.7-0.8-1.1-1.3-1.1-7.5 0.1-26.5 0.8-47.7 1.5 0 0 0.6 0.5 0.6 1.1zm46.3 21.4q0.7 0 1.2 0c1.1 0 1.9-1.7 2.6-4.3q-0.6 0-1.3 0c-0.6 2.6-1.4 4.3-2.5 4.3zm2.5-4.3q0.7 0 1.3 0c1.4-5.7 1.6-15.4-0.1-18.6q-0.7 0-1.6 0c1.8 3.2 1.7 12.9 0.4 18.6zm-0.4-18.6q0.9 0 1.6 0c-0.4-0.7-0.8-1.1-1.3-1.1q-0.7 0-1.6 0c0.5 0 1 0.4 1.3 1.1z"
              />
            </g>
          </g>
          <g id="&lt;Group&gt;" style={{ mixBlendMode: "multiply" }}>
            <path
              id="&lt;Path&gt;"
              class="s5"
              d="m490.1 119.5c-0.9-8-8.5-11.7-8.1-11.4 9-4.9 20.2 7.2 30 19.6q0.4 0.5 0.8 1c2.5 3.2 4.9 6.4 7.1 9.2 2.9 3.7 5.5 6.9 7.9 9.2 5.3 5.1 14.9 13.2 23 21 6.3 6 12.2 11.8 14.1 16 0.9 1.8 1 3.2 0.2 4.3-1.8 2.3-5.3 5.4-8.9 8.5q-0.9 0.8-1.9 1.6-1.3 1.1-2.6 2.1c-3.7 3.2-6.7 5.7-6.5 6 2.5 1.4 4.8 2.8 7 4.2 3 1.8 5.5 3.4 7.7 4.6 2.6 1.6 4.6 2.6 5.6 3.1 2.5 1 4.5 1.8 5.9 2.7 2.7 1.9 2.8 4.7-1.1 11.2-0.7 1.3-2.8 5.5-5.9 12.2q-2.1 4.2-4.6 9.6c-2.7 5.6-5.7 12.1-9.2 19.4-5.7 12-12.3 26-19.8 41.4-15.9 32.9-35.2 72.1-55.6 111.5-21.3 41.1-43.9 82.3-64.9 116.4-11.2 18.2-22.1 34.4-32 47.5 0 0 6-26.8 14.3-59 10.3-39.7 26.4-102.3 42-162.4 14.4-55.6 28.3-109.1 36.7-140.6q1.7-6.4 3.1-11.7 1.3-5 2.5-9.2 0 0 0.1-0.1c2.2-8.1 3.6-13.9 4.3-16.5 1.6-6 2.7-11.1 3.5-14.9 0.1-0.5 0.2-1 0.2-1.4 1-4.2 0.9-7.1 2-7.9 0-0.4-0.2-0.8-0.1-1.2 0.9-3.2 0.5-7.9 1-12.3 0.6-6.8 2.5-15.6 2.2-21.9 0.2-5 0.3-9.3 0-11.8z"
            />
            <path
              id="&lt;Path&gt;"
              class="s6"
              d="m490.5 120.5c-1.4-8.3-9.3-12.2-9.1-12.1 8.9-5.3 20.2 6.8 30 19.2q0.4 0.5 0.8 1c2.5 3.2 4.9 6.4 7.1 9.2 2.9 3.7 5.6 7 7.8 9.2 5.2 5 14.9 13.2 23.1 21 6.3 6 12.1 11.8 14 16 0.8 1.7 1 3.2 0.2 4.2-1.8 2.3-5.3 5.4-8.9 8.4q-1 0.8-2 1.6-1.3 1.1-2.6 2.1c-3.9 3.3-7.2 5.8-7.1 6 2.5 1.4 4.9 2.8 7.1 4 3 1.8 5.7 3.3 7.9 4.5 2.8 1.4 4.8 2.4 6 2.8 2.7 0.9 4.8 1.6 6.3 2.6 2.8 1.8 3 4.7-0.9 11.1-0.7 1.2-2.8 5.4-6 12.1q-2 4.2-4.5 9.6c-2.6 5.6-5.7 12.1-9.1 19.3-5.7 11.9-12.3 25.9-19.7 41.3-15.8 32.8-35 72-55.4 111.3-21.2 41-43.7 82.2-64.7 116.2-11.2 18.2-22 34.4-31.9 47.4 0 0 5.9-24.9 14.6-58.4 10.7-41 26.5-102.2 41.8-161 14.2-54.5 27.9-106.9 36.5-139.3q1.7-6.3 3.1-11.6 1.3-5 2.4-9.1 0.1-0.1 0.1-0.1c2.2-8.3 3.7-14 4.4-16.3 1.7-6 2.9-11 3.7-14.8q0.1-0.8 0.3-1.5c1-4.3 1.3-7.2 2.4-8 0-0.4-0.2-0.8-0.1-1.2 1-3.3 1.2-7.9 1.6-12.5 0.7-7.1 1.7-15.5 1.4-22.1 0-5.1-0.2-9.5-0.6-12.1z"
            />
            <path
              id="&lt;Path&gt;"
              class="s7"
              d="m564 216.8c-2.9-0.8-11.5-5.2-21.6-10.8 0-0.1 6.4-4.7 12.4-9.7 3.6-3 7-6 8.9-8.3 2.5-3.1-4.9-11.5-14.1-20.2-8.3-7.8-18-16-23.1-20.9-3.9-3.8-9.1-11.1-14.8-18.4-10.1-12.8-21.9-25.8-31-19.8 0 0 8.3 4.2 10.2 12.8 1.9 8.6 2.3 34.5-1.5 47.5-0.1 0.3 0 0.8 0 1.2-2.1 1.6-2.8 10.1-7.1 24.2-6.8 21.6-102.8 392.3-102.8 392.3 9.9-13.1 20.7-29.2 31.9-47.4 41-66.6 87.5-160.3 119.6-227.1 7.3-15.4 13.9-29.3 19.5-41.1 3.4-7.3 6.5-13.7 9.1-19.2 5.8-12.4 9.5-20.1 10.4-21.7 6-9.7 2.3-11.2-6-13.4z"
            />
          </g>
        </g>
        <g id="suit-right-colur\">
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Mesh&gt;"
              fill-rule="evenodd"
              class="s8"
              d="m314.4 164.2c0.4 1.6 0 3.4-1.1 5.3-2.6 4.4-9.1 9.5-16.7 14.2-5 3.2-10.5 6.2-15.7 8.9-6.7 3.5-12.8 6.4-16.9 8.2-2.9 1.4-4.7 2.1-4.7 2.1-1.9-1.3-4.1-2.8-6.4-4.3q-2.1-1.4-4.1-2.9c-6.6-4.7-16.1-7.6-10.6-17.7 1.1-2.1 2.9-4.5 5.4-7.3 6.5-7 11.6-11.6 16.1-15.4 1.9-1.6-1.9 1.6 1.3-0.7q1.3-1.3 2.6-2.6c6.1-4.9 11.2-9 17.4-16.8 2.1-2.6 4.3-5.6 6.7-8.7q-0.1 0.1-0.2 0.2 0.2-0.2 0.4-0.5c3.2-4.1 6.6-8.5 10-12.4 2.8-3.2 5.6-6.1 8.4-8.5 4.3-3.5 8.5-5.7 12.3-5.6 1.7 0.1 3.3 0.6 4.8 1.6-6.2 3.5-9.8 10-11.6 17.6-1.1 4.4-1.6 9.1-1.7 13.9-0.1 7.9 0.8 16 2.2 22.8q0.3 1.8 0.7 3.4 0.7 2.9 1.4 5.2zm-54.7-8.9c1.9-1.6-1.9 1.6 1.3-0.7q1.3-1.3 2.6-2.6-1.9 1.6-3.9 3.3z"
            />
            <g id="&lt;Group&gt;">
              <path
                id="&lt;Mesh&gt;"
                fill-rule="evenodd"
                class="s9"
                d="m428.8 600.7q-1.6-2.1-3.2-4.3-2.6-3.5-5.3-7.2-5.1-7.3-10.5-15.4c-8.7-13.3-17.8-28.2-27.1-44.1q-1.5-2.6-3.1-5.3-2.3-3.9-4.5-7.9c-15.1-26.4-30.5-55.2-45.3-83.9-9.8-19-19.4-38.1-28.5-56.5-12.2-24.7-23.5-48.2-33.4-69-13.1-27.4-28.6-55-39.8-83.3-2.5-6.2 1.4-7.6 8.6-9.6q0.8-0.2 2.1-0.8c1-0.5 2.1-1 3.1-1.4q2-0.9 4.5-2.1 0.4-0.4 1-0.6c18.1-9.3 51.5-29.2 60.1-38.5 7-7.4 10.1-1.1 12.1 7.1 1 4 1.7 8.4 2.3 11.9 0.4 2.1 0.7 3.9 1.1 5 1.1 4.1 2.8 10.5 5.1 18.8 9.7 36.5 28.8 109.8 47.8 182.9 9.3 35.7 18.5 71.3 26.6 102.6 6 23.3 11.4 44.2 15.7 60.8 6.5 25.2 10.6 40.8 10.6 40.8zm-95-161.5l-30.1-60q-0.3-0.2-0.6-0.5c3.2 5.7 8.4 17.4 0.6 0.5 9.7 19.6 19.9 39.9 30.1 60zm-32.5-63.1c0.2 0.1 0.6 0.6 1 1.3-0.2-0.6-0.3-1.1-1-1.3zm1 1.3c0.2 0.4 0.4 0.9 0.8 1.3q-0.4-0.7-0.8-1.3zm-70-155.9c-0.5-2.4 2.6-5.9 6.5-8.1-3.9 2.2-7 5.7-6.5 8.1z"
              />
            </g>
          </g>
        </g>
        <path
          id="&lt;Mesh&gt;"
          fill-rule="evenodd"
          class="s10"
          d="m485.5 164.2q0.7-2.3 1.3-5.2 0.4-1.6 0.8-3.4c1.3-6.8 2.3-14.9 2.1-22.8-0.2-10.1-2.1-19.9-7.3-26.4-1.7-2.1-3.6-3.8-5.9-5.1 2.2-1.5 4.5-1.9 7-1.4 3.2 0.6 6.6 2.6 10 5.4 5.7 4.8 11.5 11.9 16.7 18.7 4 4.4 7.9 9.1 11.3 13.1 4.4 4.7 9.3 9.6 14.1 14.3 5.5 4.6 11.9 9.8 20.7 19.3 14.9 16.3 2.7 19.3-5.2 25q-2.1 1.5-4.1 2.9c-2.3 1.5-4.6 3-6.4 4.3 0 0-1.8-0.7-4.8-2.1-7.1-3.2-21.1-9.9-32.6-17.1-6.1-3.8-11.6-7.9-14.8-11.6-2.4-2.9-3.6-5.5-2.9-7.9zm26.7-37.7c2.4 3.1 4.6 6.1 6.7 8.7 2.8 3.5 5.4 6.3 7.9 8.7-2-2.3-2.8-3.9-5.3-6.8-3.4-3.6-6.6-7.2-9.3-10.6z"
        />
        <g id="left-side-colur">
          <path
            id="&lt;Mesh&gt;"
            fill-rule="evenodd"
            class="s11"
            d="m371.1 600.7c0 0 3.7-14.4 9.7-37.7 10.1-38.9 26.6-102.6 43.2-166.5 18.9-73.1 38-146.4 47.8-182.9 0.9-2.6 9.8-13.8 12.3-20.3q0.2-0.6 0.4-1.2 0.1-0.4 0.3-0.8 0 0 0 0c3.4-10.7-2.7-4.1-4.5-13.4 2.1-8.6 5.3-15.5 11-8.2 6.8 8.6 42.2 29.9 61.1 39.6q0.6 0.2 1.1 0.6 2.4 1.2 4.4 2.1c1.7 0.6 3.6 1.4 5.3 2.2 3.8 1.9 7 4.2 6.5 6.3 0.5-2.1-2.7-4.4-6.5-6.3 7.1 2 11 3.4 8.5 9.6-11.2 28.3-26.6 55.9-39.7 83.3-17.7 37.2-40.1 83.2-63.8 129.1-14.2 27.5-29 54.9-43.4 80.3q-2.3 4-4.6 7.9-1.5 2.7-3 5.3c-13.1 22.4-25.8 42.7-37.7 59.5q-4.3 6.1-8.4 11.5zm109.2-422.8c1.8 9.3-7.6 33.1-8.5 35.7 2.2-8.3 4-14.7 5.1-18.8 0.8-2.9 1.8-10.4 3.4-16.9zm-12.1 258.3c-1.4 1.6 8.6-17.7-5.3 6.7 1.7-1.9 3.9-5.1 5.3-6.7z"
          />
        </g>
        <g id="Button-top">
          <path
            id="&lt;Mesh&gt;"
            class="s12"
            d="m377.4 615.8q2.2 0 4.3 0 0.1-2.6 0.1-5.1-2.2-0.1-4.4-0.1 0 2.6 0 5.2zm0-5.2q2.2 0 4.4 0.1 0-0.6 0-1.1-2.2-0.1-4.3-0.1 0 0.6-0.1 1.1zm0.1-1.1q2.1 0 4.3 0.1 0-0.6 0-1.1-2.2 0-4.3 0 0 0.5 0 1zm0-1q2.1 0 4.3 0 0-2.3 0.1-4.6-2.2 0-4.4 0 0 2.3 0 4.6zm4.2 7.3q0.7 0 1.3 0 0.1-2.6 0.1-5.1-0.7 0-1.3 0 0 2.5-0.1 5.1zm0.1-5.1q0.6 0 1.3 0c0-0.4 2.5-0.7 2.6-1.1-0.5 0-3.5 0-3.9 0q0 0.5 0 1.1zm0-1.1c0.4 0 3.4 0 3.9 0 0-0.4-2.6-0.7-2.6-1.1q-0.6 0-1.3 0 0 0.5 0 1.1zm0-1.1q0.7 0 1.3 0 0-2.3 0-4.6-0.6 0-1.2 0-0.1 2.3-0.1 4.6zm1.2 7.3q18.3 0.2 36.6 0.4 0-2.6 0-5.2-18.2-0.2-36.5-0.3 0 2.5-0.1 5.1zm0.1-5.1q18.3 0.1 36.5 0.3c0-0.3-4.5-0.8-4.5-1.1-12.1-0.1-17.3-0.2-29.4-0.3-0.1 0.4-2.6 0.7-2.6 1.1zm2.6-1.1c12.1 0.1 17.3 0.2 29.4 0.3 0-0.4 4.5-0.7 4.5-1q-18.2-0.2-36.5-0.4c0 0.4 2.6 0.7 2.6 1.1zm-2.6-1.1q18.3 0.2 36.5 0.4 0.1-2.3 0.1-4.6-18.3-0.2-36.6-0.4 0 2.3 0 4.6zm36.5 7.7q0.9 0 1.8 0 0-2.6 0-5.2-0.9 0-1.8 0 0 2.6 0 5.2zm0-5.2q0.9 0 1.8 0 0-0.5 0-1.1c-0.6 0-5.7 0-6.3 0 0 0.3 4.5 0.8 4.5 1.1zm-4.5-1.1c0.6 0 5.7 0 6.3 0q0-0.5 0-1-0.9 0-1.8 0c0 0.3-4.5 0.6-4.5 1zm4.5-1q0.9 0 1.8 0 0.1-2.3 0.1-4.6-0.9 0-1.8 0 0 2.3-0.1 4.6zm1.8 7.3q1.8 0 3.6 0 0.1-2.5 0.1-5.1-1.9 0-3.7-0.1 0 2.6 0 5.2zm0-5.2q1.8 0.1 3.7 0.1 0-0.6 0-1.1-1.8 0-3.7-0.1 0 0.6 0 1.1zm0-1.1q1.9 0.1 3.7 0.1 0-0.5 0-1.1-1.8 0-3.7 0 0 0.5 0 1zm0-1q1.9 0 3.7 0 0-2.3 0.1-4.6-1.9 0-3.7 0 0 2.3-0.1 4.6z"
          />
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              class="s13"
              d="m428.7 610.7c0 15.3-12.3 27.6-27.5 27.6-15.2 0-27.6-12.3-27.6-27.6 0-15.2 12.4-27.5 27.6-27.5 15.2 0 27.5 12.3 27.5 27.5z"
            />
            <g id="&lt;Clip Group&gt;">
              <g id="&lt;Group&gt;">
                <path
                  id="&lt;Path&gt;"
                  class="s14"
                  d="m414.7 609.5c0 7.9-6.3 14.2-14.2 14.2-7.9 0-14.2-6.3-14.2-14.2 0-7.8 6.3-14.2 14.2-14.2 7.9 0 14.2 6.4 14.2 14.2z"
                />
              </g>
              <g id="&lt;Group&gt;">
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s14"
                    d="m414.7 609.5c0 7.9-6.3 14.2-14.2 14.2-7.9 0-14.2-6.3-14.2-14.2 0-7.8 6.3-14.2 14.2-14.2 7.9 0 14.2 6.4 14.2 14.2z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s15"
                    d="m414.6 609.5c0 7.8-6.3 14.2-14.1 14.2-7.8 0-14.1-6.4-14.1-14.2 0-7.8 6.3-14.1 14.1-14.1 7.8 0 14.1 6.3 14.1 14.1z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s16"
                    d="m414.6 609.5c0 7.8-6.3 14.1-14.1 14.1-7.8 0-14.1-6.3-14.1-14.1 0-7.8 6.3-14 14.1-14 7.8 0 14.1 6.2 14.1 14z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s17"
                    d="m414.5 609.5c0 7.7-6.3 14-14 14-7.7 0-14-6.3-14-14 0-7.7 6.3-14 14-14 7.7 0 14 6.3 14 14z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s18"
                    d="m414.4 609.5c0 7.7-6.2 13.9-13.9 13.9-7.7 0-13.9-6.2-13.9-13.9 0-7.7 6.2-13.9 13.9-13.9 7.7 0 13.9 6.2 13.9 13.9z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s19"
                    d="m414.3 609.5c0 7.6-6.2 13.8-13.8 13.8-7.6 0-13.8-6.2-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8 7.6 0 13.8 6.2 13.8 13.8z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s20"
                    d="m414.2 609.5c0 7.6-6.1 13.7-13.7 13.7-7.6 0-13.7-6.1-13.7-13.7 0-7.6 6.1-13.7 13.7-13.7 7.6 0 13.7 6.1 13.7 13.7z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s21"
                    d="m414.1 609.5c0 7.5-6.1 13.6-13.6 13.6-7.5 0-13.6-6.1-13.6-13.6 0-7.5 6.1-13.6 13.6-13.6 7.5 0 13.6 6.1 13.6 13.6z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s22"
                    d="m414.1 609.5c0 7.5-6.1 13.6-13.6 13.6-7.5 0-13.6-6.1-13.6-13.6 0-7.5 6.1-13.5 13.6-13.5 7.5 0 13.6 6 13.6 13.5z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s23"
                    d="m414 609.5c0 7.4-6.1 13.5-13.5 13.5-7.4 0-13.5-6.1-13.5-13.5 0-7.4 6.1-13.5 13.5-13.5 7.4 0 13.5 6.1 13.5 13.5z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s24"
                    d="m413.9 609.5c0 7.4-6 13.4-13.4 13.4-7.4 0-13.4-6-13.4-13.4 0-7.4 6-13.4 13.4-13.4 7.4 0 13.4 6 13.4 13.4z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s25"
                    d="m413.8 609.5c0 7.4-6 13.3-13.3 13.3-7.3 0-13.3-5.9-13.3-13.3 0-7.3 6-13.3 13.3-13.3 7.3 0 13.3 6 13.3 13.3z"
                  />
                </g>
                <path
                  id="&lt;Path&gt;"
                  class="s26"
                  d="m413.7 609.5c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2z"
                />
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s27"
                    d="m413.5 609.5c0 7.2-5.8 13-13 13-7.2 0-13-5.8-13-13 0-7.1 5.8-12.9 13-12.9 7.2 0 13 5.8 13 12.9z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s28"
                    d="m413.2 609.5c0 7-5.7 12.7-12.7 12.7-7 0-12.7-5.7-12.7-12.7 0-7 5.7-12.7 12.7-12.7 7 0 12.7 5.7 12.7 12.7z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s29"
                    d="m412.9 609.5c0 6.9-5.5 12.4-12.4 12.4-6.9 0-12.4-5.5-12.4-12.4 0-6.9 5.5-12.4 12.4-12.4 6.9 0 12.4 5.5 12.4 12.4z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s30"
                    d="m412.7 609.5c0 6.7-5.5 12.2-12.2 12.2-6.7 0-12.2-5.5-12.2-12.2 0-6.7 5.5-12.1 12.2-12.1 6.7 0 12.2 5.4 12.2 12.1z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s31"
                    d="m412.4 609.5c0 6.6-5.3 11.9-11.9 11.9-6.6 0-11.9-5.3-11.9-11.9 0-6.6 5.3-11.9 11.9-11.9 6.6 0 11.9 5.3 11.9 11.9z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s32"
                    d="m412.1 609.5c0 6.4-5.2 11.6-11.6 11.6-6.4 0-11.6-5.2-11.6-11.6 0-6.4 5.2-11.6 11.6-11.6 6.4 0 11.6 5.2 11.6 11.6z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s33"
                    d="m411.9 609.5c0 6.3-5.1 11.4-11.4 11.4-6.3 0-11.4-5.1-11.4-11.4 0-6.3 5.1-11.4 11.4-11.4 6.3 0 11.4 5.1 11.4 11.4z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s34"
                    d="m411.6 609.5c0 6.1-5 11.1-11.1 11.1-6.1 0-11.1-5-11.1-11.1 0-6.1 5-11.1 11.1-11.1 6.1 0 11.1 5 11.1 11.1z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s35"
                    d="m411.3 609.5c0 6-4.8 10.8-10.8 10.8-6 0-10.8-4.8-10.8-10.8 0-6 4.8-10.8 10.8-10.8 6 0 10.8 4.8 10.8 10.8z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s36"
                    d="m411.1 609.5c0 5.8-4.8 10.6-10.6 10.6-5.8 0-10.6-4.8-10.6-10.6 0-5.8 4.8-10.6 10.6-10.6 5.8 0 10.6 4.8 10.6 10.6z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s37"
                    d="m410.8 609.5c0 5.7-4.6 10.3-10.3 10.3-5.7 0-10.3-4.6-10.3-10.3 0-5.7 4.6-10.3 10.3-10.3 5.7 0 10.3 4.6 10.3 10.3z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s14"
                    d="m410.5 609.5c0 5.6-4.5 10-10 10-5.5 0-10-4.4-10-10 0-5.5 4.5-10 10-10 5.5 0 10 4.5 10 10z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s38"
                    d="m410 609.5c0 5.2-4.3 9.5-9.5 9.5-5.2 0-9.5-4.3-9.5-9.5 0-5.2 4.3-9.5 9.5-9.5 5.2 0 9.5 4.3 9.5 9.5z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s39"
                    d="m409.4 609.5c0 4.9-4 8.9-8.9 8.9-4.9 0-8.9-4-8.9-8.9 0-4.9 4-8.9 8.9-8.9 4.9 0 8.9 4 8.9 8.9z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s40"
                    d="m408.8 609.5c0 4.6-3.7 8.3-8.3 8.3-4.6 0-8.3-3.7-8.3-8.3 0-4.6 3.7-8.3 8.3-8.3 4.6 0 8.3 3.7 8.3 8.3z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s41"
                    d="m408.3 609.5c0 4.3-3.5 7.8-7.8 7.8-4.3 0-7.8-3.5-7.8-7.8 0-4.3 3.5-7.8 7.8-7.8 4.3 0 7.8 3.5 7.8 7.8z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s42"
                    d="m407.7 609.5c0 4-3.2 7.2-7.2 7.2-4 0-7.2-3.2-7.2-7.2 0-4 3.2-7.2 7.2-7.2 4 0 7.2 3.2 7.2 7.2z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s43"
                    d="m407.1 609.5c0 3.7-2.9 6.6-6.6 6.6-3.7 0-6.6-2.9-6.6-6.6 0-3.7 2.9-6.6 6.6-6.6 3.7 0 6.6 2.9 6.6 6.6z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s44"
                    d="m406.6 609.5c0 3.4-2.8 6.1-6.1 6.1-3.3 0-6.1-2.7-6.1-6.1 0-3.3 2.8-6 6.1-6 3.3 0 6.1 2.7 6.1 6z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s45"
                    d="m406 609.5c0 3-2.5 5.5-5.5 5.5-3 0-5.5-2.5-5.5-5.5 0-3 2.5-5.5 5.5-5.5 3 0 5.5 2.5 5.5 5.5z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s46"
                    d="m405.4 609.5c0 2.7-2.2 4.9-4.9 4.9-2.7 0-4.9-2.2-4.9-4.9 0-2.7 2.2-4.9 4.9-4.9 2.7 0 4.9 2.2 4.9 4.9z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s47"
                    d="m404.9 609.5c0 2.4-2 4.4-4.4 4.4-2.4 0-4.4-2-4.4-4.4 0-2.4 2-4.3 4.4-4.3 2.4 0 4.4 1.9 4.4 4.3z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s48"
                    d="m404.3 609.5c0 2.1-1.7 3.8-3.8 3.8-2.1 0-3.8-1.7-3.8-3.8 0-2.1 1.7-3.8 3.8-3.8 2.1 0 3.8 1.7 3.8 3.8z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s49"
                    d="m403.7 609.5c0 1.8-1.4 3.2-3.2 3.2-1.8 0-3.2-1.4-3.2-3.2 0-1.8 1.4-3.2 3.2-3.2 1.8 0 3.2 1.4 3.2 3.2z"
                  />
                </g>
              </g>
            </g>
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <g id="&lt;Group&gt;" style={{ mixBlendMode: "multiply" }}>
                  <path
                    id="&lt;Path&gt;"
                    class="s50"
                    d="m398.8 607.4c0 0.9-0.7 1.6-1.5 1.6-0.9 0-1.6-0.7-1.6-1.6 0-0.9 0.7-1.6 1.6-1.6 0.8 0 1.5 0.7 1.5 1.6z"
                  />
                </g>
                <g id="&lt;Group&gt;" style={{ mixBlendMode: "multiply" }}>
                  <path
                    id="&lt;Path&gt;"
                    class="s51"
                    d="m405.3 607.4c0 0.9-0.7 1.6-1.6 1.6-0.8 0-1.5-0.7-1.5-1.6 0-0.9 0.7-1.6 1.5-1.6 0.9 0 1.6 0.7 1.6 1.6z"
                  />
                </g>
              </g>
              <g id="&lt;Group&gt;">
                <g id="&lt;Group&gt;" style={{ mixBlendMode: "multiply" }}>
                  <path
                    id="&lt;Path&gt;"
                    class="s52"
                    d="m398.8 613c0 0.8-0.7 1.5-1.5 1.5-0.9 0-1.6-0.7-1.6-1.5 0-0.9 0.7-1.6 1.6-1.6 0.8 0 1.5 0.7 1.5 1.6z"
                  />
                </g>
                <g id="&lt;Group&gt;" style={{ mixBlendMode: "multiply" }}>
                  <path
                    id="&lt;Path&gt;"
                    class="s53"
                    d="m405.3 613c0 0.8-0.7 1.5-1.6 1.5-0.8 0-1.5-0.7-1.5-1.5 0-0.9 0.7-1.6 1.5-1.6 0.9 0 1.6 0.7 1.6 1.6z"
                  />
                </g>
              </g>
            </g>
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <g id="&lt;Clip Group&gt;">
                  <path
                    id="&lt;Mesh&gt;"
                    class="s54"
                    d="m402.1 608.4l0.9-0.9c0-0.1 0.2-0.1 0.3 0 0.1 0.1 0.1 0.2 0 0.3l-0.8 0.9z"
                  />
                </g>
                <path
                  id="&lt;Mesh&gt;"
                  class="s55"
                  d="m403.3 607.8c-1.7 1.8-2.6 2.7-2.6 2.7 0 0 0.9-0.9 2.6-2.7zm-2.6 2.7q0 0-0.1 0.1 0.1-0.1 0.1-0.1zm-0.7 0.7q0.6-0.6 0.6-0.6 0 0-0.6 0.6c-0.5 0.4-1.2 1.1-2.2 1.8 1.1-0.7 1.7-1.3 2.2-1.8zm3.3-3.4q-0.1 0-0.1-0.1c-1.7 1.8-2.6 2.7-2.6 2.7q0.1 0 0.1 0.1c0 0 0.9-0.9 2.6-2.7zm-2.6 2.7q0-0.1-0.1-0.1 0 0-0.1 0.1 0.1 0 0.1 0.1 0.1-0.1 0.1-0.1zm-0.7 0.7q0.6-0.6 0.6-0.6 0-0.1-0.1-0.1 0 0-0.6 0.6c-0.5 0.4-1.1 1.1-2.2 1.8q0 0 0.1 0.1c1-0.7 1.7-1.4 2.2-1.8zm3.2-3.5q0 0-0.1 0c-1.6 1.8-2.5 2.6-2.5 2.6q0 0.1 0 0.1c0 0 0.9-0.9 2.6-2.7zm-2.6 2.7q0 0 0-0.1-0.1 0.1-0.1 0.1 0 0.1 0 0.1 0.1-0.1 0.1-0.1zm-0.7 0.7q0.6-0.6 0.6-0.6 0 0 0-0.1 0 0-0.7 0.7c-0.4 0.4-1.1 1-2.1 1.7q0 0 0 0.1c1.1-0.7 1.7-1.4 2.2-1.8zm3.2-3.4q0-0.1 0-0.1c-1.7 1.8-2.6 2.7-2.6 2.7q0.1 0 0.1 0c0 0 0.9-0.8 2.5-2.6zm-2.5 2.6q0 0-0.1 0 0 0-0.1 0.1 0.1 0 0.1 0 0 0 0.1-0.1zm-0.8 0.8q0.7-0.7 0.7-0.7 0 0-0.1 0 0 0-0.6 0.6c-0.5 0.4-1.1 1.1-2.2 1.7q0.1 0.1 0.1 0.1c1-0.7 1.7-1.3 2.1-1.7zm3.3-3.5q-0.1 0-0.1-0.1c-1.7 1.8-2.6 2.7-2.6 2.7q0.1 0 0.1 0.1c0 0 0.9-0.9 2.6-2.7zm-2.6 2.7q0-0.1-0.1-0.1 0 0-0.1 0.1 0.1 0 0.1 0.1 0.1-0.1 0.1-0.1zm-0.7 0.7q0.6-0.6 0.6-0.6 0-0.1-0.1-0.1 0 0-0.6 0.6c-0.5 0.4-1.1 1.1-2.1 1.7q0 0.1 0 0.1c1.1-0.6 1.7-1.3 2.2-1.7zm3.2-3.5c-1.7 1.8-2.6 2.7-2.6 2.7 0 0 0.9-0.9 2.6-2.7zm-2.6 2.7q0 0-0.1 0.1 0.1-0.1 0.1-0.1zm-0.7 0.7q0.6-0.6 0.6-0.6 0 0-0.6 0.6c-0.5 0.4-1.1 1.1-2.1 1.7 1-0.6 1.6-1.3 2.1-1.7z"
                />
                <g id="&lt;Clip Group&gt;">
                  <path
                    id="&lt;Mesh&gt;"
                    class="s56"
                    d="m398.9 612.3l-1.1 0.7c-0.1 0.1-0.2 0-0.3-0.1-0.1-0.1-0.1-0.2 0.1-0.3l1-0.6z"
                  />
                </g>
              </g>
              <g id="&lt;Group&gt;" style={{ mixBlendMode: "multiply" }}>
                <path
                  id="&lt;Path&gt;"
                  class="s57"
                  d="m397.3 613.2q-0.1 0-0.2-0.1c0-0.1 0-0.2 0.1-0.3 1.9-1.2 6.1-5.5 6.1-5.6 0.1-0.1 0.2-0.1 0.3 0 0.1 0.1 0.1 0.2 0 0.3-0.1 0.2-4.2 4.5-6.2 5.7q0 0-0.1 0z"
                />
              </g>
            </g>
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <g id="&lt;Clip Group&gt;">
                  <path
                    id="&lt;Mesh&gt;"
                    class="s58"
                    d="m398.5 608.6l-1-0.7c-0.1-0.1-0.1-0.2-0.1-0.3 0.1-0.1 0.2-0.1 0.3-0.1l1 0.8z"
                  />
                </g>
                <path
                  id="&lt;Mesh&gt;"
                  class="s59"
                  d="m397.7 607.5c2 1.5 3 2.3 3 2.3 0 0-1-0.8-3-2.3zm3 2.3q0 0 0.1 0.1-0.1-0.1-0.1-0.1zm0.8 0.7q-0.7-0.6-0.7-0.6 0 0 0.7 0.6c0.4 0.4 1.2 1 2 2-0.8-1-1.6-1.6-2-2zm-3.8-3q0 0.1 0 0.1c1.9 1.5 2.9 2.3 2.9 2.3q0-0.1 0.1-0.1c0 0-1-0.8-3-2.3zm3 2.3q-0.1 0-0.1 0.1 0 0 0.1 0.1 0-0.1 0.1-0.1-0.1-0.1-0.1-0.1zm0.8 0.7q-0.7-0.6-0.7-0.6-0.1 0-0.1 0.1 0 0 0.7 0.6c0.4 0.4 1.2 1 2 2q0-0.1 0.1-0.1c-0.8-1-1.6-1.6-2-2zm-3.8-2.9q-0.1 0.1-0.1 0.1c2 1.5 2.9 2.3 2.9 2.3q0-0.1 0.1-0.1c0 0-1-0.8-2.9-2.3zm2.9 2.3q-0.1 0-0.1 0.1 0.1 0 0.1 0.1 0.1-0.1 0.1-0.1-0.1-0.1-0.1-0.1zm0.8 0.7q-0.7-0.6-0.7-0.6 0 0-0.1 0.1 0 0 0.7 0.5c0.5 0.5 1.2 1 2 2q0 0 0.1 0c-0.8-1-1.6-1.6-2-2zm-3.8-2.9q0 0 0 0.1c1.9 1.4 2.9 2.2 2.9 2.2q0 0 0 0c0 0-0.9-0.8-2.9-2.3zm2.9 2.3q0 0 0 0 0 0.1 0.1 0.1 0 0 0 0 0-0.1-0.1-0.1zm0.8 0.6q-0.7-0.5-0.7-0.5 0 0 0 0 0 0 0.7 0.6c0.4 0.4 1.2 1 1.9 2q0.1-0.1 0.1-0.1c-0.8-1-1.5-1.5-2-2zm-3.7-2.8q-0.1 0-0.1 0.1c2 1.4 2.9 2.2 2.9 2.2q0 0 0.1-0.1c0 0-1-0.8-2.9-2.2zm2.9 2.2q-0.1 0.1-0.1 0.1 0.1 0.1 0.1 0.1 0 0 0.1-0.1-0.1 0-0.1-0.1zm0.8 0.7q-0.7-0.6-0.7-0.6-0.1 0.1-0.1 0.1 0 0 0.7 0.6c0.5 0.4 1.2 1 1.9 1.9q0.1 0 0.1 0c-0.7-1-1.5-1.6-1.9-2zm-3.8-2.8c2 1.4 2.9 2.2 2.9 2.2 0 0-0.9-0.8-2.9-2.2zm2.9 2.2q0 0.1 0.1 0.1 0 0-0.1-0.1zm0.8 0.7q-0.7-0.6-0.7-0.6 0 0 0.7 0.6c0.4 0.4 1.2 1 1.9 1.9-0.7-0.9-1.4-1.5-1.9-1.9z"
                />
                <g id="&lt;Clip Group&gt;">
                  <path
                    id="&lt;Mesh&gt;"
                    class="s60"
                    d="m402.7 611.5l0.8 1c0 0.1 0 0.2-0.1 0.3-0.1 0.1-0.2 0-0.3-0.1l-0.7-0.9z"
                  />
                </g>
              </g>
              <g id="&lt;Group&gt;" style={{ mixBlendMode: "multiply" }}>
                <path
                  id="&lt;Path&gt;"
                  class="s61"
                  d="m403.5 613.2q-0.1 0-0.2-0.1c-1.3-1.8-6.1-5.5-6.2-5.5-0.1-0.1-0.1-0.2 0-0.3 0.1-0.1 0.2-0.2 0.3-0.1 0.2 0.2 4.9 3.8 6.3 5.6 0 0.1 0 0.3-0.1 0.3q0 0.1-0.1 0.1z"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="Button-Bottom">
          <path
            id="&lt;Mesh&gt;"
            class="s62"
            d="m377.4 728.9q2.2 0 4.3 0 0.1-2.5 0.1-5.1-2.2 0-4.4-0.1 0 2.6 0 5.2zm0-5.2q2.2 0.1 4.4 0.1 0-0.6 0-1.1-2.2 0-4.3-0.1 0 0.6-0.1 1.1zm0.1-1.1q2.1 0.1 4.3 0.1 0-0.5 0-1.1-2.2 0-4.3 0 0 0.5 0 1zm0-1q2.1 0 4.3 0 0-2.3 0.1-4.6-2.2 0-4.4 0 0 2.3 0 4.6zm4.2 7.3q0.7 0 1.3 0 0.1-2.5 0.1-5.1-0.7 0-1.3 0 0 2.6-0.1 5.1zm0.1-5.1q0.6 0 1.3 0c0-0.4 2.5-0.7 2.6-1.1-0.5 0-3.5 0-3.9 0q0 0.5 0 1.1zm0-1.1c0.4 0 3.4 0 3.9 0 0-0.3-2.6-0.7-2.6-1.1q-0.6 0-1.3 0 0 0.6 0 1.1zm0-1.1q0.7 0 1.3 0 0-2.3 0-4.6-0.6 0-1.2 0-0.1 2.3-0.1 4.6zm1.2 7.3q18.3 0.2 36.6 0.4 0-2.6 0-5.1-18.2-0.2-36.5-0.4 0 2.6-0.1 5.1zm0.1-5.1q18.3 0.2 36.5 0.4c0-0.4-4.5-0.8-4.5-1.2-12.1-0.1-17.3-0.2-29.4-0.3-0.1 0.4-2.6 0.7-2.6 1.1zm2.6-1.1c12.1 0.1 17.3 0.2 29.4 0.3 0-0.3 4.5-0.6 4.5-1q-18.2-0.2-36.5-0.4c0 0.4 2.6 0.8 2.6 1.1zm-2.6-1.1q18.3 0.2 36.5 0.4 0.1-2.3 0.1-4.6-18.3-0.2-36.6-0.4 0 2.3 0 4.6zm36.5 7.7q0.9 0 1.8 0 0-2.6 0-5.1-0.9 0-1.8 0 0 2.5 0 5.1zm0-5.1q0.9 0 1.8 0 0-0.6 0-1.1c-0.6 0-5.7-0.1-6.3-0.1 0 0.4 4.5 0.8 4.5 1.2zm-4.5-1.2c0.6 0 5.7 0.1 6.3 0.1q0-0.6 0-1.1-0.9 0-1.8 0c0 0.4-4.5 0.7-4.5 1zm4.5-1q0.9 0 1.8 0 0.1-2.3 0.1-4.6-0.9 0-1.8 0 0 2.3-0.1 4.6zm1.8 7.3q1.8 0 3.6 0.1 0.1-2.6 0.1-5.2-1.9 0-3.7 0 0 2.5 0 5.1zm0-5.1q1.8 0 3.7 0 0-0.5 0-1.1-1.8 0-3.7 0 0 0.5 0 1.1zm0-1.1q1.9 0 3.7 0 0-0.5 0-1-1.8-0.1-3.7-0.1 0 0.5 0 1.1zm0-1.1q1.9 0 3.7 0.1 0-2.3 0.1-4.6-1.9-0.1-3.7-0.1 0 2.3-0.1 4.6z"
          />
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              class="s63"
              d="m428.7 723.9c0 15.2-12.3 27.5-27.5 27.5-15.2 0-27.6-12.3-27.6-27.5 0-15.3 12.4-27.6 27.6-27.6 15.2 0 27.5 12.3 27.5 27.6z"
            />
            <g id="&lt;Clip Group&gt;">
              <g id="&lt;Group&gt;">
                <path
                  id="&lt;Path&gt;"
                  class="s14"
                  d="m414.7 722.6c0 7.9-6.3 14.3-14.2 14.3-7.9 0-14.2-6.4-14.2-14.3 0-7.8 6.3-14.2 14.2-14.2 7.9 0 14.2 6.4 14.2 14.2z"
                />
              </g>
              <g id="&lt;Group&gt;">
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s14"
                    d="m414.7 722.6c0 7.9-6.3 14.3-14.2 14.3-7.9 0-14.2-6.4-14.2-14.3 0-7.8 6.3-14.2 14.2-14.2 7.9 0 14.2 6.4 14.2 14.2z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s64"
                    d="m414.6 722.6c0 7.8-6.3 14.2-14.1 14.2-7.8 0-14.1-6.4-14.1-14.2 0-7.8 6.3-14.1 14.1-14.1 7.8 0 14.1 6.3 14.1 14.1z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s65"
                    d="m414.6 722.6c0 7.8-6.3 14.1-14.1 14.1-7.8 0-14.1-6.3-14.1-14.1 0-7.7 6.3-14 14.1-14 7.8 0 14.1 6.3 14.1 14z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s66"
                    d="m414.5 722.6c0 7.8-6.3 14-14 14-7.7 0-14-6.2-14-14 0-7.7 6.3-13.9 14-13.9 7.7 0 14 6.2 14 13.9z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s67"
                    d="m414.4 722.6c0 7.7-6.2 13.9-13.9 13.9-7.7 0-13.9-6.2-13.9-13.9 0-7.6 6.2-13.9 13.9-13.9 7.7 0 13.9 6.3 13.9 13.9z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s68"
                    d="m414.3 722.6c0 7.7-6.2 13.8-13.8 13.8-7.6 0-13.8-6.1-13.8-13.8 0-7.6 6.2-13.8 13.8-13.8 7.6 0 13.8 6.2 13.8 13.8z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s69"
                    d="m414.2 722.6c0 7.6-6.1 13.8-13.7 13.8-7.6 0-13.7-6.2-13.7-13.8 0-7.5 6.1-13.7 13.7-13.7 7.6 0 13.7 6.2 13.7 13.7z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s70"
                    d="m414.1 722.6c0 7.6-6.1 13.7-13.6 13.7-7.5 0-13.6-6.1-13.6-13.7 0-7.5 6.1-13.6 13.6-13.6 7.5 0 13.6 6.1 13.6 13.6z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s71"
                    d="m414.1 722.6c0 7.5-6.1 13.6-13.6 13.6-7.5 0-13.6-6.1-13.6-13.6 0-7.4 6.1-13.5 13.6-13.5 7.5 0 13.6 6.1 13.6 13.5z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s72"
                    d="m414 722.6c0 7.5-6.1 13.5-13.5 13.5-7.4 0-13.5-6-13.5-13.5 0-7.4 6.1-13.4 13.5-13.4 7.4 0 13.5 6 13.5 13.4z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s73"
                    d="m413.9 722.6c0 7.4-6 13.4-13.4 13.4-7.4 0-13.4-6-13.4-13.4 0-7.4 6-13.3 13.4-13.3 7.4 0 13.4 5.9 13.4 13.3z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s74"
                    d="m413.8 722.6c0 7.4-6 13.3-13.3 13.3-7.3 0-13.3-5.9-13.3-13.3 0-7.3 6-13.3 13.3-13.3 7.3 0 13.3 6 13.3 13.3z"
                  />
                </g>
                <path
                  id="&lt;Path&gt;"
                  class="s75"
                  d="m413.7 722.6c0 7.3-5.9 13.3-13.2 13.3-7.3 0-13.2-6-13.2-13.3 0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2z"
                />
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s76"
                    d="m413.5 722.6c0 7.2-5.8 13-13 13-7.2 0-13-5.8-13-13 0-7.1 5.8-12.9 13-12.9 7.2 0 13 5.8 13 12.9z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s77"
                    d="m413.2 722.6c0 7-5.7 12.7-12.7 12.7-7 0-12.7-5.7-12.7-12.7 0-7 5.7-12.7 12.7-12.7 7 0 12.7 5.7 12.7 12.7z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s78"
                    d="m412.9 722.6c0 6.9-5.5 12.5-12.4 12.5-6.9 0-12.4-5.6-12.4-12.5 0-6.8 5.5-12.4 12.4-12.4 6.9 0 12.4 5.6 12.4 12.4z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s79"
                    d="m412.7 722.6c0 6.8-5.5 12.2-12.2 12.2-6.7 0-12.2-5.4-12.2-12.2 0-6.7 5.5-12.1 12.2-12.1 6.7 0 12.2 5.4 12.2 12.1z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s80"
                    d="m412.4 722.6c0 6.6-5.3 11.9-11.9 11.9-6.6 0-11.9-5.3-11.9-11.9 0-6.5 5.3-11.9 11.9-11.9 6.6 0 11.9 5.4 11.9 11.9z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s81"
                    d="m412.1 722.6c0 6.5-5.2 11.7-11.6 11.7-6.4 0-11.6-5.2-11.6-11.7 0-6.4 5.2-11.6 11.6-11.6 6.4 0 11.6 5.2 11.6 11.6z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s82"
                    d="m411.9 722.6c0 6.3-5.1 11.4-11.4 11.4-6.3 0-11.4-5.1-11.4-11.4 0-6.2 5.1-11.3 11.4-11.3 6.3 0 11.4 5.1 11.4 11.3z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s83"
                    d="m411.6 722.6c0 6.2-5 11.1-11.1 11.1-6.1 0-11.1-4.9-11.1-11.1 0-6.1 5-11.1 11.1-11.1 6.1 0 11.1 5 11.1 11.1z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s84"
                    d="m411.3 722.6c0 6-4.8 10.9-10.8 10.9-6 0-10.8-4.9-10.8-10.9 0-5.9 4.8-10.8 10.8-10.8 6 0 10.8 4.9 10.8 10.8z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s85"
                    d="m411.1 722.6c0 5.9-4.8 10.6-10.6 10.6-5.8 0-10.6-4.7-10.6-10.6 0-5.8 4.8-10.5 10.6-10.5 5.8 0 10.6 4.7 10.6 10.5z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s86"
                    d="m410.8 722.6c0 5.7-4.6 10.3-10.3 10.3-5.7 0-10.3-4.6-10.3-10.3 0-5.7 4.6-10.3 10.3-10.3 5.7 0 10.3 4.6 10.3 10.3z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s14"
                    d="m410.5 722.6c0 5.6-4.5 10.1-10 10.1-5.5 0-10-4.5-10-10.1 0-5.5 4.5-10 10-10 5.5 0 10 4.5 10 10z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s38"
                    d="m410 722.6c0 5.3-4.3 9.5-9.5 9.5-5.2 0-9.5-4.2-9.5-9.5 0-5.2 4.3-9.4 9.5-9.4 5.2 0 9.5 4.2 9.5 9.4z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s39"
                    d="m409.4 722.6c0 5-4 8.9-8.9 8.9-4.9 0-8.9-3.9-8.9-8.9 0-4.9 4-8.9 8.9-8.9 4.9 0 8.9 4 8.9 8.9z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s40"
                    d="m408.8 722.6c0 4.6-3.7 8.4-8.3 8.4-4.6 0-8.3-3.8-8.3-8.4 0-4.6 3.7-8.3 8.3-8.3 4.6 0 8.3 3.7 8.3 8.3z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s41"
                    d="m408.3 722.6c0 4.3-3.5 7.8-7.8 7.8-4.3 0-7.8-3.5-7.8-7.8 0-4.3 3.5-7.7 7.8-7.7 4.3 0 7.8 3.4 7.8 7.7z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s42"
                    d="m407.7 722.6c0 4-3.2 7.2-7.2 7.2-4 0-7.2-3.2-7.2-7.2 0-3.9 3.2-7.2 7.2-7.2 4 0 7.2 3.3 7.2 7.2z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s43"
                    d="m407.1 722.6c0 3.7-2.9 6.7-6.6 6.7-3.7 0-6.6-3-6.6-6.7 0-3.6 2.9-6.6 6.6-6.6 3.7 0 6.6 3 6.6 6.6z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s44"
                    d="m406.6 722.6c0 3.4-2.8 6.1-6.1 6.1-3.3 0-6.1-2.7-6.1-6.1 0-3.3 2.8-6 6.1-6 3.3 0 6.1 2.7 6.1 6z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s45"
                    d="m406 722.6c0 3.1-2.5 5.5-5.5 5.5-3 0-5.5-2.4-5.5-5.5 0-3 2.5-5.5 5.5-5.5 3 0 5.5 2.5 5.5 5.5z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s46"
                    d="m405.4 722.6c0 2.8-2.2 5-4.9 5-2.7 0-4.9-2.2-4.9-5 0-2.7 2.2-4.9 4.9-4.9 2.7 0 4.9 2.2 4.9 4.9z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s47"
                    d="m404.9 722.6c0 2.4-2 4.4-4.4 4.4-2.4 0-4.4-2-4.4-4.4 0-2.4 2-4.3 4.4-4.3 2.4 0 4.4 1.9 4.4 4.3z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s48"
                    d="m404.3 722.6c0 2.1-1.7 3.8-3.8 3.8-2.1 0-3.8-1.7-3.8-3.8 0-2.1 1.7-3.7 3.8-3.7 2.1 0 3.8 1.6 3.8 3.7z"
                  />
                </g>
                <g id="&lt;Group&gt;">
                  <path
                    id="&lt;Path&gt;"
                    class="s49"
                    d="m403.7 722.6c0 1.8-1.4 3.3-3.2 3.3-1.8 0-3.2-1.5-3.2-3.3 0-1.7 1.4-3.2 3.2-3.2 1.8 0 3.2 1.5 3.2 3.2z"
                  />
                </g>
              </g>
            </g>
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <g id="&lt;Group&gt;" style={{ mixBlendMode: "multiply" }}>
                  <path
                    id="&lt;Path&gt;"
                    class="s87"
                    d="m398.8 720.5c0 0.9-0.7 1.6-1.5 1.6-0.9 0-1.6-0.7-1.6-1.6 0-0.8 0.7-1.5 1.6-1.5 0.8 0 1.5 0.7 1.5 1.5z"
                  />
                </g>
                <g id="&lt;Group&gt;" style={{ mixBlendMode: "multiply" }}>
                  <path
                    id="&lt;Path&gt;"
                    class="s88"
                    d="m405.3 720.5c0 0.9-0.7 1.6-1.6 1.6-0.8 0-1.5-0.7-1.5-1.6 0-0.8 0.7-1.5 1.5-1.5 0.9 0 1.6 0.7 1.6 1.5z"
                  />
                </g>
              </g>
              <g id="&lt;Group&gt;">
                <g id="&lt;Group&gt;" style={{ mixBlendMode: "multiply" }}>
                  <path
                    id="&lt;Path&gt;"
                    class="s89"
                    d="m398.8 726.1c0 0.8-0.7 1.5-1.5 1.5-0.9 0-1.6-0.7-1.6-1.5 0-0.9 0.7-1.6 1.6-1.6 0.8 0 1.5 0.7 1.5 1.6z"
                  />
                </g>
                <g id="&lt;Group&gt;" style={{ mixBlendMode: "multiply" }}>
                  <path
                    id="&lt;Path&gt;"
                    class="s90"
                    d="m405.3 726.1c0 0.8-0.7 1.5-1.6 1.5-0.8 0-1.5-0.7-1.5-1.5 0-0.9 0.7-1.6 1.5-1.6 0.9 0 1.6 0.7 1.6 1.6z"
                  />
                </g>
              </g>
            </g>
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <g id="&lt;Clip Group&gt;">
                  <path
                    id="&lt;Mesh&gt;"
                    class="s91"
                    d="m402.1 721.6l0.9-1c0-0.1 0.2-0.1 0.3 0 0.1 0.1 0.1 0.2 0 0.3l-0.8 1z"
                  />
                </g>
                <path
                  id="&lt;Mesh&gt;"
                  class="s92"
                  d="m403.3 720.9c-1.7 1.9-2.6 2.7-2.6 2.7 0 0 0.9-0.8 2.6-2.7zm-2.6 2.7q0 0.1-0.1 0.1 0.1 0 0.1-0.1zm-0.7 0.8q0.6-0.7 0.6-0.7 0 0-0.6 0.7c-0.5 0.4-1.2 1-2.2 1.7 1.1-0.7 1.7-1.3 2.2-1.7zm3.3-3.5q-0.1 0-0.1-0.1c-1.7 1.9-2.6 2.7-2.6 2.7q0.1 0.1 0.1 0.1c0 0 0.9-0.8 2.6-2.7zm-2.6 2.7q0 0-0.1-0.1 0 0.1-0.1 0.1 0.1 0.1 0.1 0.1 0.1 0 0.1-0.1zm-0.7 0.8q0.6-0.7 0.6-0.7 0 0-0.1-0.1 0 0-0.6 0.7c-0.5 0.4-1.1 1-2.2 1.7q0 0.1 0.1 0.1c1-0.7 1.7-1.3 2.2-1.7zm3.2-3.6q0 0-0.1 0c-1.6 1.8-2.5 2.7-2.5 2.7q0 0 0 0c0 0 0.9-0.8 2.6-2.7zm-2.6 2.7q0 0 0 0-0.1 0-0.1 0.1 0 0 0 0 0.1 0 0.1-0.1zm-0.7 0.8q0.6-0.7 0.6-0.7 0 0 0 0 0 0-0.7 0.6c-0.4 0.4-1.1 1.1-2.1 1.7q0 0.1 0 0.1c1.1-0.7 1.7-1.3 2.2-1.7zm3.2-3.5q0 0 0-0.1c-1.7 1.9-2.6 2.7-2.6 2.7q0.1 0 0.1 0.1c0 0 0.9-0.9 2.5-2.7zm-2.5 2.7q0-0.1-0.1-0.1 0 0.1-0.1 0.1 0.1 0 0.1 0.1 0-0.1 0.1-0.1zm-0.8 0.7q0.7-0.6 0.7-0.6 0-0.1-0.1-0.1 0 0-0.6 0.6c-0.5 0.5-1.1 1.1-2.2 1.8q0.1 0 0.1 0c1-0.6 1.7-1.3 2.1-1.7zm3.3-3.5q-0.1 0-0.1 0c-1.7 1.8-2.6 2.6-2.6 2.6q0.1 0.1 0.1 0.1c0 0 0.9-0.8 2.6-2.7zm-2.6 2.7q0 0-0.1-0.1 0 0.1-0.1 0.1 0.1 0.1 0.1 0.1 0.1 0 0.1-0.1zm-0.7 0.7q0.6-0.6 0.6-0.6 0 0-0.1-0.1 0 0-0.6 0.7c-0.5 0.4-1.1 1-2.1 1.7q0 0 0 0.1c1.1-0.7 1.7-1.3 2.2-1.8zm3.2-3.4v-0.1c-1.7 1.9-2.6 2.7-2.6 2.7 0 0 0.9-0.8 2.6-2.6zm-2.6 2.6q0 0.1-0.1 0.1 0.1 0 0.1-0.1zm-0.7 0.8q0.6-0.7 0.6-0.7 0 0-0.6 0.6c-0.5 0.4-1.1 1.1-2.1 1.8 1-0.7 1.6-1.3 2.1-1.7z"
                />
                <g id="&lt;Clip Group&gt;">
                  <path
                    id="&lt;Mesh&gt;"
                    class="s93"
                    d="m398.9 725.4l-1.1 0.7c-0.1 0.1-0.2 0.1-0.3 0-0.1-0.1-0.1-0.3 0.1-0.3l1-0.7z"
                  />
                </g>
              </g>
              <g id="&lt;Group&gt;" style={{ mixBlendMode: "multiply" }}>
                <path
                  id="&lt;Path&gt;"
                  class="s94"
                  d="m397.3 726.3q-0.1 0-0.2-0.1c0-0.1 0-0.2 0.1-0.3 1.9-1.1 6.1-5.5 6.1-5.6 0.1 0 0.2 0 0.3 0 0.1 0.1 0.1 0.3 0 0.3-0.1 0.2-4.2 4.5-6.2 5.7q0 0-0.1 0z"
                />
              </g>
            </g>
            <g id="&lt;Group&gt;">
              <g id="&lt;Group&gt;">
                <g id="&lt;Clip Group&gt;">
                  <path
                    id="&lt;Mesh&gt;"
                    class="s95"
                    d="m398.5 721.7l-1-0.7c-0.1-0.1-0.1-0.2-0.1-0.3 0.1-0.1 0.2-0.1 0.3 0l1 0.7z"
                  />
                </g>
                <path
                  id="&lt;Mesh&gt;"
                  class="s96"
                  d="m397.7 720.7c2 1.4 3 2.2 3 2.2 0 0-1-0.8-3-2.2zm3 2.2q0 0.1 0.1 0.1-0.1 0-0.1-0.1zm0.8 0.7q-0.7-0.6-0.7-0.6 0 0 0.7 0.6c0.4 0.4 1.2 1 2 2-0.8-1-1.6-1.6-2-2zm-3.8-2.9q0 0 0 0.1c1.9 1.4 2.9 2.2 2.9 2.2q0 0 0.1-0.1c0 0-1-0.8-3-2.2zm3 2.2q-0.1 0.1-0.1 0.1 0 0.1 0.1 0.1 0 0 0.1-0.1-0.1 0-0.1-0.1zm0.8 0.7q-0.7-0.6-0.7-0.6-0.1 0.1-0.1 0.1 0 0 0.7 0.6c0.4 0.4 1.2 1 2 2q0-0.1 0.1-0.1c-0.8-1-1.6-1.6-2-2zm-3.8-2.8q-0.1 0-0.1 0c2 1.5 2.9 2.3 2.9 2.3q0 0 0.1-0.1c0 0-1-0.8-2.9-2.2zm2.9 2.2q-0.1 0.1-0.1 0.1 0.1 0 0.1 0.1 0.1-0.1 0.1-0.1-0.1 0-0.1-0.1zm0.8 0.7q-0.7-0.6-0.7-0.6 0 0-0.1 0.1 0 0 0.7 0.6c0.5 0.4 1.2 1 2 1.9q0 0 0.1 0c-0.8-1-1.6-1.6-2-2zm-3.8-2.9q0 0.1 0 0.1c1.9 1.4 2.9 2.2 2.9 2.2q0 0 0 0c0 0-0.9-0.8-2.9-2.3zm2.9 2.3q0 0 0 0 0 0.1 0.1 0.1 0 0 0 0 0-0.1-0.1-0.1zm0.8 0.7q-0.7-0.6-0.7-0.6 0 0 0 0 0 0 0.7 0.6c0.4 0.4 1.2 1 1.9 2q0.1 0 0.1-0.1c-0.8-0.9-1.5-1.5-2-1.9zm-3.7-2.9q-0.1 0.1-0.1 0.1c2 1.4 2.9 2.2 2.9 2.2q0 0 0.1-0.1c0 0-1-0.8-2.9-2.2zm2.9 2.2q-0.1 0.1-0.1 0.1 0.1 0.1 0.1 0.1 0 0 0.1-0.1-0.1 0-0.1-0.1zm0.8 0.7q-0.7-0.6-0.7-0.6-0.1 0.1-0.1 0.1 0 0 0.7 0.6c0.5 0.4 1.2 1 1.9 2q0.1-0.1 0.1-0.1c-0.7-1-1.5-1.6-1.9-2zm-3.8-2.8c2 1.5 2.9 2.3 2.9 2.3v-0.1c0 0-0.9-0.8-2.9-2.2zm2.9 2.2v0.1q0 0 0.1 0 0 0-0.1-0.1zm0.8 0.7q-0.7-0.6-0.7-0.6 0 0 0.7 0.6c0.4 0.4 1.2 1 1.9 2-0.7-1-1.4-1.6-1.9-2z"
                />
                <g id="&lt;Clip Group&gt;">
                  <path
                    id="&lt;Mesh&gt;"
                    class="s97"
                    d="m402.7 724.6l0.8 1c0 0.1 0 0.2-0.1 0.3-0.1 0.1-0.2 0.1-0.3 0l-0.7-1z"
                  />
                </g>
              </g>
              <g id="&lt;Group&gt;" style={{ mixBlendMode: "multiply" }}>
                <path
                  id="&lt;Path&gt;"
                  class="s98"
                  d="m403.5 726.3q-0.1 0-0.2-0.1c-1.3-1.8-6.1-5.5-6.2-5.5-0.1-0.1-0.1-0.2 0-0.3 0.1-0.1 0.2-0.1 0.3-0.1 0.2 0.2 4.9 3.8 6.3 5.7 0 0 0 0.2-0.1 0.3q0 0-0.1 0z"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
      <g id="&lt;Group&gt; copy 4">
        {/* <g id="shadow-2" style={{ mixBlendMode: "overlay" }}>
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Compound Path&gt;"
              fill-rule="evenodd"
              class="s99"
              d="m16.2 817.6c2.5-50.9 4.8-101.9 4.8-132.2 0-58.9 22.2-223.4 25-243.6 6.9-48.6 15-95.9 21.6-122.3 0.9-3.7 1.8-8.7 2.8-12.3 5.2-18.9 10.8-33.9 15.7-47.7 7.7-21.6 13.4-36.9 14.7-39.3 2.5-4.4 8.4-10.6 13.8-8.1 4-14.7 35.5-17.1 71.7-31.5 21.6-8.5 59.6-25.8 88.3-38.7 6.1-4.8 22.7-30.8 32.8-38 3.9-2.8 8.1-5.4 9.6-4 0.4 0.4-17.6 15.3-6 64 3.6 15.1 10.9 25.9 17.1 49.7 13.7 53.3 35.2 132.5 47.4 179.7 8.3 32 17 67.1 24.4 95.9 7.5-28.8 15.8-60.8 24.1-92.7 18.9-73.1 38-146.4 47.8-182.9 2.2-8.3 4-14.7 5.1-18.8 0.8-2.9 1.8-10.4 3.4-16.9q0.2-1.1 0.5-2.2 0.2-0.7 0.4-1.3 0.1-0.2 0.1-0.3 0.3-0.7 0.5-1.4 0-0.1 0.1-0.2c1-2.6 2.2-4.7 3.7-5.5q-0.2-0.7-0.3-1.3 0-0.8 0.2-1.5c0.5-1.5 3.2-15.4 3.6-19 1.9-31.1-10.4-45.1-9.2-45.3 1.7-0.4 3.2-0.3 4.4-0.1 3.2 0.6 7.1 3.6 10.5 6.5 6.4 5.3 11.5 11.6 17.4 19.8 4 5.5 8.2 10.7 10.4 13.3q1.4 1.7 3.5 2.5c3.9 1.6 9.5 4.3 12.7 5.8 11.4 5.2 20.2 8.7 35.5 15.4 16.1 7.1 34.5 15.9 51.1 21.1 38.9 12.2 58.2 17.4 60.7 27.6 4.9-1 8.7 2.5 11.5 5.6 3.6 3.9 5.1 11.3 9.2 21.9 4.8 12.6 8.8 23.3 12.3 33.4 12.4 35.7 18.5 63.6 31.1 137 3.5 20.1 28.6 213.5 28.8 284.7 0 19.6 2.6 70.4 5.2 123.2zm622.6-78.2c0 0-3.8-40.8-3.8-40.9-3.1-35.1-12.1-144.9-12.5-149.9-0.2-2.1 0.6-27 0.2-24.8-11.3 74.8-5.9 124.6 16.1 215.6zm-477.6 5.5c8.6-34.3 11.3-56 17.4-82 8.4-36 5.6-96.5-1.3-148.3 2 32.3-1.8 75.2-5.4 116.4-3.6 42.3-7 83-10.7 113.9z"
            />
          </g>
        </g> */}
        <g id="shadow" style={{ mixBlendMode: "overlay" }}>
          <g id="&lt;Group&gt;">
            <g clip-path="url(#cp1)">
              <path
                id="&lt;Compound Path&gt;"
                fill-rule="evenodd"
                class="s100"
                d="m16.2 819.6c2.5-50.9 4.8-101.9 4.8-132.2 0-58.9 22.2-223.4 25-243.6 6.9-48.6 15-95.9 21.6-122.3 0.9-3.7 1.8-8.7 2.8-12.3 5.2-18.9 10.8-33.9 15.7-47.7 7.7-21.6 13.4-36.9 14.7-39.3 2.5-4.4 8.4-10.6 13.8-8.1 4-14.7 35.5-17.1 71.7-31.5 21.6-8.5 59.6-25.8 88.3-38.7 6.1-4.8 22.7-30.8 32.8-38 3.9-2.8 8.1-5.4 9.6-4 0.4 0.4-17.6 15.3-6 64 3.6 15.1 10.9 25.9 17.1 49.7 13.7 53.3 35.2 132.5 47.4 179.7 8.3 32 17 67.1 24.4 95.9 7.5-28.8 15.8-60.8 24.1-92.7 18.9-73.1 38-146.4 47.8-182.9 2.2-8.3 4-14.7 5.1-18.8 0.8-2.9 1.8-10.4 3.4-16.9q0.2-1.1 0.5-2.2 0.2-0.7 0.4-1.3 0.1-0.2 0.1-0.3 0.3-0.7 0.5-1.4 0-0.1 0.1-0.2c1-2.6 2.2-4.7 3.7-5.5q-0.2-0.7-0.3-1.3 0-0.8 0.2-1.5c0.5-1.5 3.2-15.4 3.6-19 1.9-31.1-10.4-45.1-9.2-45.3 1.7-0.4 3.2-0.3 4.4-0.1 3.2 0.6 7.1 3.6 10.5 6.5 6.4 5.3 11.5 11.6 17.4 19.8 4 5.5 8.2 10.7 10.4 13.3q1.4 1.7 3.5 2.5c3.9 1.6 9.5 4.3 12.7 5.8 11.4 5.2 20.2 8.7 35.5 15.4 16.1 7.1 34.5 15.9 51.1 21.1 38.9 12.2 58.2 17.4 60.7 27.6 4.9-1 8.7 2.5 11.5 5.6 3.6 3.9 5.1 11.3 9.2 21.9 4.8 12.6 8.8 23.3 12.3 33.4 12.4 35.7 18.5 63.6 31.1 137 3.5 20.1 28.6 213.5 28.8 284.7 0 19.6 2.6 70.4 5.2 123.2zm622.6-78.2c0 0-3.8-40.8-3.8-40.9-3.1-35.1-12.1-144.9-12.5-149.9-0.2-2.1 0.6-27 0.2-24.8-11.3 74.8-5.9 124.6 16.1 215.6zm-477.6 5.5c8.6-34.3 11.3-56 17.4-82 8.4-36 5.6-96.5-1.3-148.3 2 32.3-1.8 75.2-5.4 116.4-3.6 42.3-7 83-10.7 113.9z"
              />
              <use id="Background" href="#img1" x="-218" y="-80" />
            </g>
          </g>
        </g>
        {/* <g id="suit-full" style={{ mixBlendMode: "multiply" }}></g> */}
      </g>
    </svg>
  );
}

export default MySVGComponent;
