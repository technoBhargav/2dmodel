import React from "react";
import "./suit.css";

function MySVGComponent(props) {
  const { design } = props.design;
  let backgroundImageUrl;
  let backgroundImageUrl1 =
    "https://www.hockerty.com/dimg/lining/default/173_big.jpg";

  switch (design) {
    case "d1":
      backgroundImageUrl =
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/894_huge.jpg";
      break;
    case "d2":
      backgroundImageUrl =
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/141_huge.jpg";
      break;
    case "d3":
      backgroundImageUrl =
        "https://www.hockerty.com/dimg/fabric/suit/2251_huge.jpg";
      break;
    case "d4":
      backgroundImageUrl =
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/3322_huge.jpg";
      break;
    case "d5":
      backgroundImageUrl =
        "https://www.hockerty.com/dimg/fabric/suit/3328_huge.jpg";
      break;
    case "d6":
      backgroundImageUrl =
        "https://www.hockerty.com/dimg/fabric/suit/3163_huge.jpg";
      break;
    default:
      backgroundImageUrl =
        "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/894_huge.jpg";
  }
  return (
    <div className="relative">
      <svg
        id="Layer_2"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1081 1081"
      >
        <defs>
          <clipPath clipPathUnits="userSpaceOnUse" id="cp2">
            <path
              transform="translate(0.5 0.5)"
              d="M459,145s-6,16-3,38,32,234,36,252,15,63,15,63,30,68,33,82,34,113,38,138l4,18,42-252s35-222,38-248,7-80,7-88l-2-7S515,134,459,145Z"
            />
          </clipPath>
          <image
            width="1000"
            height="1000"
            id="img2"
            href={backgroundImageUrl1}
          />
        </defs>
        <rect className="cls-3" x="0.5" y="0.5" width="1080" height="1080" />
        <g clipPath="url(#cp2)">
          <path
            className="cls-4"
            d="M459,145s-6,16-3,38,32,234,36,252,15,63,15,63,30,68,33,82,34,113,38,138l4,18,42-252s35-222,38-248,7-80,7-88l-2-7S515,134,459,145Z"
            transform="translate(0.5 0.5)"
          />
          <use id="Background" href="#img2" x="0" y="0" />
        </g>
      </svg>
      <img className="aaaa" src="/Cutout4.png" alt="aas" />
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1081 1081"
      >
        <defs>
          <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
            <path
              transform="translate(0.5 0.5)"
              d="M469.5,109.5s-14,43,10,119c16,80,53,244,53,244l32,117s88-404,93-421,11-47,0-67c17,18,26,36,36,46s30,22,73,32c42,13,115,36,115,36s-28,133-39,225c-12,95-22,182-31,215-2,28,3,196,3,196l1,45h-487l-24-3s29-99,24-194-14-207-37-262c-10-51-35-211-35-211s58.78862-21.08215,123-46C446.5,154.5,469.5,109.5,469.5,109.5Z"
            />
          </clipPath>
          <image
            width="1000"
            height="1000"
            id="img1"
            href={backgroundImageUrl}
          />
        </defs>
        <g clipPath="url(#cp1)">
          <path
            className="cls-1"
            d="M469.5,109.5s-14,43,10,119c16,80,53,244,53,244l32,117s88-404,93-421,11-47,0-67c17,18,26,36,36,46s30,22,73,32c42,13,115,36,115,36s-28,133-39,225c-12,95-22,182-31,215-2,28,3,196,3,196l1,45h-487l-24-3s29-99,24-194-14-207-37-262c-10-51-35-211-35-211s58.78862-21.08215,123-46C446.5,154.5,469.5,109.5,469.5,109.5Z"
            transform="translate(0.5 0.5)"
          />
          <use id="Background" href="#img1" x="0" y="0" />
        </g>
        <rect className="cls-2" x="0.5" y="0.5" width="1080" height="1080" />
      </svg>
      <img className="aaa" src="/Cutout2.png" alt="aas" />
    </div>
  );
}

export default MySVGComponent;
