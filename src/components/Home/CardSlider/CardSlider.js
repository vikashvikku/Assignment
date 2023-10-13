import React, { useState } from "react";
import "./CardSlider.css";
import { TbArrowForwardUp } from "react-icons/tb";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const CardSlider = () => {
  const [flip1, setflip1] = useState(true);
  const [flip2, setflip2] = useState(true);
  const [flip3, setflip3] = useState(true);

  const handleChange = () => {
    setflip1(false);
  };
  const handleChange2 = () => {
    setflip3(false);
  };

  const handleChangeOriginal = () => {
    setflip1(true);
  };
  const handleChangeOriginal2 = () => {
    setflip3(true);
  };

  const handleClick = () => {
    setflip2(!flip2);
  };

  const myStyle = {
    backgroundImage:
      "url('https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg')",
    height: "4rem",
    fontSize: "10px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="Slider-container">
      <div className="slider-header">This is our awesome team</div>
      <div className="slider-subheader">
        PRESENT YOUR TEAM IN AN INTERESTING WAY
      </div>

      <div className="cardSlider">
        <div
          className="cards"
          onMouseOver={handleChange}
          onMouseOut={handleChangeOriginal}
        >
          {flip1 === true ? (
            <>
              <div style={myStyle}>
                <img
                  src="https://static.india.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-18-at-7.48.15-PM.jpeg"
                  alt="img"
                  className="cardImage"
                />
              </div>
              <div className="name">Vikash Kumar</div>
              <div className="position"> CEO</div>
              <div className="bio">
                I am frontend develoer Lamborghini Mercy Your chick she so
                thirsty I'm in that two seat Lambo
              </div>
              <div className="rotation">
                <div>
                  <TbArrowForwardUp /> Auto rotation
                </div>
              </div>
            </>
          ) : (
            <div className="flipped">
              <div className="flipped-heading">
                "To be or not to be, this is my awesome motto!"
              </div>
              <div className="jd">Job Description</div>
              <div className="description">
                Web design, Adobe Photoshop, HTML5, CSS3, Corel and many
                others...
              </div>
              <div className="count">
                <div>
                  <div>125</div>
                  <div>Followers</div>
                </div>
                <div>
                  <div>138</div>
                  <div>Following</div>
                </div>
                <div>
                  <div>27</div>
                  <div>Projects</div>
                </div>
              </div>
              <div className="social-media">
                <div>
                  <FacebookRoundedIcon />
                </div>
                <div>
                  <InstagramIcon />
                </div>
                <div>
                  <TwitterIcon />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="cards">
          {flip2 === true ? (
            <>
              <div style={myStyle}>
                <img
                  src="https://static.india.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-18-at-7.48.15-PM.jpeg"
                  alt="img"
                  className="cardImage"
                />
              </div>
              <div className="name">Vikash Kumar</div>
              <div className="position"> CEO</div>
              <div className="bio">
                I am frontend develoer Lamborghini Mercy Your chick she so
                thirsty I'm in that two seat Lambo
              </div>
              <div className="rotation">
                <div onClick={handleClick}>
                  <TbArrowForwardUp /> manual
                </div>
              </div>
            </>
          ) : (
            <div className="flipped">
              <div className="flipped-items">
                <div className="flipped-heading">
                  "To be or not to be, this is my awesome motto!"
                </div>
                <div className="jd">Job Description</div>
                <div className="description">
                  Web design, Adobe Photoshop, HTML5, CSS3, Corel and many
                  others...
                </div>
                <div className="count">
                  <div>
                    <div> 235</div>
                    <div> Followers</div>
                  </div>
                  <div>
                    <div>114</div>
                    <div>Following</div>
                  </div>
                  <div>
                    <div>34</div>
                    <div>Projects</div>
                  </div>
                </div>
                <div className="social-media manual">
                  <div className="flipped-rotation">
                    <div onClick={handleClick}>
                      <TbArrowForwardUp /> Back
                    </div>
                  </div>
                  <div>
                    <FacebookRoundedIcon />
                  </div>
                  <div>
                    <InstagramIcon />
                  </div>
                  <div>
                    <TwitterIcon />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className="cards"
          onMouseOver={handleChange2}
          onMouseOut={handleChangeOriginal2}
        >
          {flip3 === true ? (
            <>
              <div style={myStyle}>
                <img
                  src="https://static.india.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-07-18-at-7.48.15-PM.jpeg"
                  alt="img"
                  className="cardImage"
                />
              </div>
              <div className="name">Vikash Kumar</div>
              <div className="position"> CEO</div>
              <div className="bio">
                I am frontend develoer Lamborghini Mercy Your chick she so
                thirsty I'm in that two seat Lambo
              </div>
              <div className="rotation">
                <div>
                  <TbArrowForwardUp /> Automatic
                </div>
              </div>
            </>
          ) : (
            <div className="flipped">
              <div className="flipped-heading">
                "To be or not to be, this is my awesome motto!"
              </div>
              <div className="jd">Job Description</div>
              <div className="description">
                Web design, Adobe Photoshop, HTML5, CSS3, Corel and many
                others...
              </div>
              <div className="count">
                <div>
                  <div>342</div>
                  <div>Followers</div>
                </div>
                <div>
                  <div>573</div>
                  <div>Following</div>
                </div>
                <div>
                  <div>82</div>
                  <div>Projects</div>
                </div>
              </div>
              <div className="social-media">
                <div>
                  <FacebookRoundedIcon />
                </div>
                <div>
                  <InstagramIcon />
                </div>
                <div>
                  <TwitterIcon />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
