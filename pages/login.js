import React from "react";
import loginSideImage from "../assets/images/login-side.jpeg";
import Input from "../components/login/Input";
import Label from "../components/login/Label";
import SocialButton from "../components/login/SocialButton";

import GoogleIcon from "../assets/icons/Google_icon.svg";
import AppleIcon from "../assets/icons/Apple_icon.svg";
import FBIcon from "../assets/icons/FB_icon.svg";
import TwitterIcon from "../assets/icons/Twitter_icon.svg";

const login = () => {
  return (
    <div className="flex flex-row mx-32 my-2 login-bg rounded-2xl overflow-hidden">
      <div className="w-6/12">
        <img src={loginSideImage.src} className="h-full object-cover" />
      </div>
      <div className="w-6/12">
        <div className="mx-24 my-12">
          <h1 className="text-4xl mb-2">Log In</h1>
          <p className="text-label">
            New user?{" "}
            <a href="#" className="text-blue-login">
              Create an account
            </a>
          </p>
          <div className="my-8">
            <Label label="Email" />
            <Input placeholder="John@example.com" />
          </div>
          <div className="my-8">
            <Label label="Password" />
            <Input placeholder="********" type="password" />
          </div>
          <div className="my-8">
            <div className="flex">
              <div className="relative text-label cursor-pointer">
                <div className="inline-block bg-blue-login w-9 h-5 rounded-full"></div>
                <div className="inline-block bg-white w-4 h-4 rounded-full absolute right-0.5 top-0.5 "></div>
              </div>
              <div className="pl-4 text-label">Stay signed in</div>
            </div>
          </div>
          <button className="py-3.5 px-4 bg-blue-login text-white rounded-lg text-lg w-full">
            LOG IN
          </button>

          <div className="flex my-12">
            <div className="h-0.5 w-3/6 bg-black opacity-20 self-center"></div>
            <div className="mx-2.5">OR</div>
            <div className="h-0.5 w-3/6 bg-black opacity-20 self-center"></div>
          </div>

          <div className="flex justify-between cursor-pointer">
            <SocialButton icon={GoogleIcon} />
            <SocialButton icon={FBIcon} />
            <SocialButton icon={TwitterIcon} />
            <SocialButton icon={AppleIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
