import React from "react";
import Sidebar from "./Sidebar";
import { BsTelephoneInbound } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { FaRegEnvelopeOpen } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="about_container">
      <Sidebar />
      <div className="about_wrapper">
        <div className="about_content">
          <div className="contact_content">
            <h4 className="reach_out">REACH OUT TO ME VIA:</h4>
            <br />
            <br />
            <div className="contact_phone">
              <div className="phone_icon">
                <BsTelephoneInbound fontSize={25} className="font_icon" />
              </div>
              <div className="phone_number">+358 417 043 707</div>
            </div>
            <div className="contact_phone">
              <div className="phone_whatsapp_icon">
                <BsWhatsapp
                  fontSize={25}
                  className="font_icon"
                  color="lightGreen"
                />
              </div>
              <div className="phone_whatsapp_number">+358 417 043 707</div>
            </div>
            <div className="contact_phone">
              <div className="email_icon">
                <FaRegEnvelopeOpen fontSize={25} className="font_icon" />
              </div>
              <div className="email_contact">matthewutti@outlook.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
