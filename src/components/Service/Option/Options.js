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
          "https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg",
        iconClass: "fas fa-walking",
        mainText: "Website Development",
        subText: "Used to make any website",
      },
      {
        backgroundURL:
          "https://www.moveoapps.com/blog/wp-content/uploads/2020/07/web-application-development-process.png",
        iconClass: "fas fa-snowflake",
        mainText: "Web Application Development",
        subText: "We can make Web Application",
      },
      {
        backgroundURL:
          "https://www.socialchamp.io/wp-content/uploads/2022/01/Free-Social-Media-Management-Tools.png",
        iconClass: "fas fa-tree",
        mainText: "Social media Development",
        subText: "We can manage Social media",
      },
      {
        backgroundURL:
          "https://xiologics.com/wp-content/uploads/2020/02/branding-solutions.jpeg",
        iconClass: "fas fa-tint",
        mainText: "Brand Development",
        subText: "We can develope Branding",
      },
      {
        backgroundURL:
          "https://i.pcmag.com/imagery/roundups/03yy022DDsenwhBBYdxvwDi-3..v1593631883.jpg",
        iconClass: "fas fa-sun",
        mainText: "Cloud Storage Solution",
        subText: "We can use as Storage",
      },
    ];

    return (
      <div className="options">
        {options.map((option, index) => (
          <div
            key={index}
            className={`option ${
              index === this.state.activeOptionIndex ? "active" : ""
            }`}
            style={{ "--optionBackground": `url(${option.backgroundURL})` }}
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
      </div>
    );
  }
}

export default OptionsComponent;
