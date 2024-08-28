import React, { useEffect } from "react";
import mission from "../../../images/About_bg.png";
import Aso from "aos";
function Mission() {
  useEffect(() => {
    Aso.init();
  }, []);
  return (
    <section
      className="pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16 "
      data-aos="fade-right"
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h2 className="text-3xl font-bold leading-tight text-gradin dark:text-white sm:text-4xl lg:text-5xl">
              Our Mission <br className="block sm:hidden" />
            </h2>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
              Community Building Education and Professional Development Cultural
              Preservation Networking Empowerment:
            </p>
          </div>

          <div
            className="relative"
            data-aos="zoom-in-left"
            data-aos-duration="1500"
            data-aos-easing="linear"
          >
            <img
              className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
              alt=""
            />

            <img
              className="relative w-full pt-9 xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              src={mission}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
