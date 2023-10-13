import React from "react";
import "./Contact.scss"; // Import your external CSS file

class ContactUs extends React.Component {
  render() {
    return (
      <div className="contact-us">
        <form action="#">
          <label htmlFor="customerName">
            NAME
            <em>&#x2a;</em>
          </label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            required=""
          />

          <label htmlFor="customerEmail">
            EMAIL
            <em>&#x2a;</em>
          </label>
          <input
            type="email"
            id="customerEmail"
            name="customerEmail"
            required=""
          />

          <label htmlFor="customerPhone">PHONE</label>
          <input
            type="tel"
            id="customerPhone"
            name="customerPhone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />

          <label htmlFor="orderNumber">ORDER NUMBER</label>
          <input type="text" id="orderNumber" name="orderNumber" />

          <label htmlFor="customerNote">
            YOUR MESSAGE
            <em>&#x2a;</em>
          </label>
          <textarea
            rows="4"
            id="customerNote"
            name="customerNote"
            required=""
          ></textarea>

          <h3>Please provide all the information about your issue you can.</h3>

          <label htmlFor="spamProtection">
            SPAM PROTECTION
            <em>&#x2a;</em>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;What day comes before July 11th?
            </span>
          </label>
          <input type="text" id="spamProtection" name="spamProtection" />

          <button id="customerOrder">SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default ContactUs;
