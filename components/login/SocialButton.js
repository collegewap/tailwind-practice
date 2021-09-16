import React from "react";

const SocialButton = ({ icon }) => {
  return (
    <div className="rounded-full social-button bg-white flex justify-center items-center">
      <img src={icon.src} className="w-6 h-6" />
    </div>
  );
};

export default SocialButton;
