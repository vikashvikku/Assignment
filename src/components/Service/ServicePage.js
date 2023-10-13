import React from "react";
import "./ServicePage.css";
import Service from "./ServiceType/Service";
import ExpandedService from "./ExpandedService/ExpandedService";

const ServicePage = () => {
  return (
    <div className="service-page">
      <Service />
      <ExpandedService />
    </div>
  );
};

export default ServicePage;
