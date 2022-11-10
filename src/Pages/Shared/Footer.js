import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-300 text-content">
      <div>
        <p className="font-bold">
          DMB AKASH PHOTOGRAPHY <br />
          Providing reliable tech since 2020
        </p>
        <p>Copyright © 2022 - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a>
            <FaTwitter className="text-2xl" />
          </a>
          <a>
            <FaYoutube className="text-2xl" />
          </a>
          <a>
            <FaFacebook className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
