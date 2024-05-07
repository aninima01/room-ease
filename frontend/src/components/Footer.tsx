import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-800 py-10 ">
      <div className="container mx-auto flex justify-between items-centre">
        <span className="text-3xl text-white font-bold tracking-tight">
          ROOM-EASE
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms Of Service</p>
          <p className="cursor-pointer">Contact Us</p>
          <p>New Delhi, India</p>
          <p>Delhi 10001</p>
          <p>Email: info@musicschool.com</p>
          <p>Phone: (123) 456-7890</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
