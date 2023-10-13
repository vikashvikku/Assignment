import React from "react";
import "./ServicePage.css";
import Service from "./ServiceType/Service";
import OptionsComponent from "./Option/Options";
// import ExpandedService from "./ExpandedService/ExpandedService";

const ServicePage = () => {
  return (
    <div className="service-page">
      <Service />
      {/* <ExpandedService /> */}
      <OptionsComponent />
    </div>
  );
};

export default ServicePage;
