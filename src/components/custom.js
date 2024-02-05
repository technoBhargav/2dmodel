import React, { Component } from "react";

class Custom extends Component {
  render() {
    return (
      <div className="card">
        <div className="container">
          <h4>
            <b>Design</b>
          </h4>
          <div className="grid-container">
            <div
              className="grid-item"
              style={{
                backgroundImage: 'url("/suits/BlackTexture.png")',
                height: "20px",
                borderRadius: "10px",
                cursor: "pointer",
                margin: "5px 5px 5px 5px",
              }}
              onClick={() => {
                this.props.changeDesign("d1");
              }}
            ></div>

            <div
              className="grid-item"
              style={{
                backgroundImage: 'url("/suits/BlueTexture.png")',
                height: "20px",
                borderRadius: "10px",
                cursor: "pointer",
                margin: "5px 5px 5px 5px",
              }}
              onClick={() => {
                this.props.changeDesign("d2");
              }}
            ></div>

            <div
              className="grid-item"
              style={{
                backgroundImage: 'url("/suits/GreenTexture.png")',
                height: "20px",
                borderRadius: "10px",
                margin: "5px 5px 5px 5px",
              }}
              onClick={() => {
                this.props.changeDesign("d3");
              }}
            ></div>

            {/* <div
              className="grid-item"
              style={{
                backgroundImage:
                  'url("https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/3322_huge_c300.jpg")',
                height: "20px",
                borderRadius: "10px",
                cursor:"pointer",
                margin: "5px 5px 5px 5px",
              }}
              onClick={() => {
                this.props.changeDesign("d4");
              }}
            ></div>

            <div
              className="grid-item"
              style={{
                backgroundImage:
                  'url("https://d2w9m16hs9jc37.cloudfront.net/dimg/fabric/suit/3328_huge_c300.jpg")',
                height: "20px",
                borderRadius: "10px",
                cursor:'pointer',
                margin: "5px 5px 5px 5px",
              }}
              onClick={() => {
                this.props.changeDesign("d5");
              }}
            ></div>

            <div
              className="grid-item"
              style={{
                backgroundImage:
                  'url("https://www.hockerty.com/dimg/fabric/suit/3163_huge.jpg")',
                height: "20px",
                borderRadius: "10px",
                cursor:'pointer',
                margin: "5px 5px 5px 5px",
              }}
              onClick={() => {
                this.props.changeDesign("d6");
              }}
            ></div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Custom;
