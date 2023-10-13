import React from "react";
import "./Service.css";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

const Service = () => {
  return (
    <div className="service-container">
      <div className="service-cards">
        <div className="service-card">
          <div className="category">
            <div className="type">Free</div>
            <div className="monthly-rate">
              <div className="rate">₹0</div>
              <div className="monthly">/month</div>
            </div>
          </div>
          <div className="features">
            <div>
              <CheckIcon /> Single User
            </div>
            <div>
              <CheckIcon /> Unlimited Public Projects
            </div>
            <div>
              <CheckIcon /> 5GB Storage
            </div>
            <div>
              <CheckIcon /> Community Access
            </div>
            <div className="cross">
              <ClearIcon /> Unlimited Private Projects
            </div>
            <div className="cross">
              <ClearIcon /> Dedicated Phone Support
            </div>
            <div className="cross">
              <ClearIcon /> Free Subdomain
            </div>
            <div className="cross">
              <ClearIcon /> Monthly Status Reports
            </div>
          </div>
          <div>
            <button className="service-button">BUTTON</button>
          </div>
        </div>
        <div className="service-card">
          <div className="category">
            <div className="type">Free</div>
            <div className="monthly-rate">
              <div className="rate">₹267 </div>
              <div className="monthly"> /month</div>
            </div>
          </div>
          <div className="features">
            <div>
              <CheckIcon /> Single User
            </div>
            <div>
              <CheckIcon /> 5GB Storage
            </div>
            <div>
              <CheckIcon /> Unlimited Public Projects
            </div>
            <div>
              <CheckIcon /> Community Access
            </div>
            <div>
              <CheckIcon /> Unlimited Private Projects
            </div>
            <div>
              <CheckIcon /> Dedicated Phone Support
            </div>
            <div>
              <CheckIcon /> Free Subdomain
            </div>
            <div className="cross">
              <ClearIcon /> Monthly Status Reports
            </div>
          </div>
          <div>
            <button className="service-button">BUTTON</button>
          </div>
        </div>
        <div className="service-card">
          <div className="category">
            <div className="type">Free</div>
            <div className="monthly-rate">
              <div className="rate">₹732</div>
              <div className="monthly">/month</div>
            </div>
          </div>
          <div className="features">
            <div>
              <CheckIcon /> Single User
            </div>
            <div>
              <CheckIcon /> 5GB Storage
            </div>
            <div>
              <CheckIcon /> Unlimited Public Projects
            </div>
            <div>
              <CheckIcon /> Community Access
            </div>
            <div>
              <CheckIcon /> Unlimited Private Projects
            </div>
            <div>
              <CheckIcon /> Dedicated Phone Support
            </div>
            <div>
              <CheckIcon /> Free Subdomain
            </div>
            <div>
              <CheckIcon /> Monthly Status Reports
            </div>
          </div>
          <div>
            <button className="service-button">BUTTON</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
