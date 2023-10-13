import React from "react";
import "./Footer.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";

const Footer = () => {
  return (
    <div className="foot">
      <div className="footer">
        <div className="footer_heading">
          <div className="footer_subheading">
            <div className="footer_header">ABOUT</div>
            <div className="about">
              My name is Vikash Kumar. I am from Gaya Bihar, India. I have
              completed my B.Tech from Lovely Professional University, punjab. I
              have also completed Internship in L&T Technology Services, Mysore,
              Karnataka. Where i have done several projects. I also have done
              several projects in college time in various programming languages,
              which shows that i am versatile with any technology. But i love to
              work as frontend developer with latest Reactjs technology using
              redux and more tehcnology.
            </div>
          </div>
          <div>
            <div>
              <div className="footer_header">CATEGORIES</div>
              <div className="content">
                <div className="footer_item">UI Design</div>
                <div className="footer_item">PHP</div>
                <div className="footer_item">JAVA</div>
                <div className="footer_item">Android</div>
                <div className="footer_item">Templates</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="footer_header">QUICK LINKS</div>
              <div className="content">
                <div className="footer_item">Contact Us</div>
                <div className="footer_item">Contribute</div>
                <div className="footer_item">Privacy Policy</div>
                <div className="footer_item">Sitemap</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom_head">
          Copyright © 2017 All Rights Reserved by Scanfcode.
        </div>
        <div className="bottom_items">
          <div className="bottom_item">
            <FacebookRoundedIcon fontSize="small" />
          </div>
          <div className="bottom_item ">
            <TwitterIcon fontSize="small" />
          </div>
          <div className="bottom_item">
            <LinkedInIcon fontSize="small" />
          </div>
          <div className="bottom_item">
            <LanguageIcon fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
