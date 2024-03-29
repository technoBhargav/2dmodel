import React from "react";

function SuitImage(props) {
  const { design } = props;
  let backgroundImageUrl;

  switch (design) {
    case "d1":
      backgroundImageUrl = "/suits/BlackTexture.png";
      break;
    case "d2":
      backgroundImageUrl = "/suits/BlueTexture.png";
      break;
    case "d3":
      backgroundImageUrl = "/suits/GreenTexture.png";
      break;
    // case "d4":
    //   backgroundImageUrl =
    //     "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/3322_huge_c300.jpg";
    //   break;
    // case "d5":
    //   backgroundImageUrl =
    //     "https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/3328_huge_c300.jpg";
    //   break;
    // case "d6":
    //   backgroundImageUrl =
    //     "https://www.hockerty.com/dimg/fabric/suit/3163_huge.jpg";
    //   break;
    default:
      backgroundImageUrl = "/suits/BlackTexture.png";
  }
  return (
    <div className="relative">
      <img className="w-100" src={backgroundImageUrl} alt="img" />
      <img className="upperImage" src="/suitImage.png" alt="aa" />
    </div>
  );
}

export default SuitImage;
