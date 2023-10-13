import React, { Component } from "react";
import "./Options.scss";

class OptionsComponent extends Component {
  constructor() {
    super();
    this.state = {
      activeOptionIndex: 0, // Set the initial active option
    };
  }

  handleOptionClick = (index) => {
    this.setState({ activeOptionIndex: index });
  };

  render() {
    const options = [
      {
        backgroundURL:
          "https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg",
        iconClass: "fas fa-walking",
        mainText: "Blonkisoaz",
        subText: "Omuke trughte a otufta",
      },
      {
        backgroundURL:
          "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
        iconClass: "fas fa-snowflake",
        mainText: "Oretemauw",
        subText: "Omuke trughte a otufta",
      },
      {
        backgroundURL:
          "https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg",
        iconClass: "fas fa-tree",
        mainText: "Iteresuselle",
        subText: "Omuke trughte a otufta",
      },
      {
        backgroundURL:
          "https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg",
        iconClass: "fas fa-tint",
        mainText: "Idiepe",
        subText: "Omuke trughte a otufta",
      },
      {
        backgroundURL:
          "https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg",
        iconClass: "fas fa-sun",
        mainText: "Inatethi",
        subText: "Omuke trughte a otufta",
      },
    ];

    return (
      <div className="options">
        {options.map((option, index) => (
          <div
            key={index}
            className={option ${
              index === this.state.activeOptionIndex ? "active" : ""
            }}
            style={{ "--optionBackground": url(${option.backgroundURL}) }}
            onClick={() => this.handleOptionClick(index)}
          >
            <div className="shadow"></div>
            <div className="label">
              <div className="icon">
                <i className={option.iconClass}></i>
              </div>
              <div className="info">
                <div className="main">{option.mainText}</div>
                <div className="sub">{option.subText}</div>
              </div>
            </div>
          </div>
        ))}
        <a
          href="http://victorofvalencia-blog.tumblr.com"
          target="_blank"
          className="credit"
        >
          Photos from Victor of Valencia on tumblr
        </a>
      </div>
    );
  }
}

export default OptionsComponent;