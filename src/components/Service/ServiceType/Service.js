import React from "react";
import "./Service.css";
import CheckIcon from "@mui/icons-material/Check";
// import CloseIcon from "@mui/icons-material/Close";
import ClearIcon from "@mui/icons-material/Clear";

const Service = () => {
  return (
    <div className="service-container">
      <div className="service-cards">
        <div className="service-card">
          <div className="category">
            <div className="type">Free</div>
            <div className="monthly-rate">
              <div className="rate">₹23</div>
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
            <div>
              <ClearIcon /> Unlimited Private Projects
            </div>
            <div>
              <ClearIcon /> Dedicated Phone Support
            </div>
            <div>
              <ClearIcon /> Free Subdomain
            </div>
            <div>
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
              <div className="rate">₹23 </div>
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
            <div>
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
              <div className="rate">₹23</div>
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
