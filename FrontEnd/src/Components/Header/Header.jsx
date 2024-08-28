"use client";

import React from "react";
import "./header.css";
import EvangadiLogo from "../../images/Evangadi_Logo.png";
import { Link, useNavigate } from "react-router-dom";
function Header({ navigation, RightText }) {
  // const navigate = useNavigate();
  return (
    <div>
      <div className="custom_style_for_header inset-x-0 top-0 z-5 shadow-md">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div class="flex lg:flex-1 ">
            <Link to="/" class="-m-1.5 p-1.5  ">
              <img class="h-8 w-auto " src={EvangadiLogo} alt="" />
            </Link>
          </div>
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <img alt="" src="" className="h-8 w-auto" />
            </a>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 link_style_custom"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className=" lg:flex lg:flex-1 lg:justify-end">
            <Link
              to={"/Authentication"}
              className="text-sm font-semibold leading-6 text-gray-900 hover:underline duration-150"
            >
              {RightText}
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
