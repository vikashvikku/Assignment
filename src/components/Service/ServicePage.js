import React from "react";
import "./ServicePage.css";
import Service from "./ServiceType/Service";
import OptionsComponent from "./Option/Options";

const ServicePage = () => {
  return (
    <div className="service-page">
      <Service />
      <OptionsComponent />
    </div>
  );
};

export default ServicePage;
