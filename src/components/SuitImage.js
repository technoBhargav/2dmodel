import React from "react";

function SuitImage(props) {
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
    <div className="relative">
      <img className="w-100" src={backgroundImageUrl} alt="img" />
      <img className="upperImage" src="/suitImage.png" alt="aa" />
    </div>
  );
}

export default SuitImage;
