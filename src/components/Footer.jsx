import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white text-center py-4 mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} ClickAble — All rights reserved. | Powered by NYIT
      </p>
    </footer>
  );
};

export default Footer;
