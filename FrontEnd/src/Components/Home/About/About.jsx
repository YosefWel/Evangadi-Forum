import React from "react";
import WhatWeOffer from "../WhatWeOffer/WhatWeOffer";
import Mission from "../Mission/Mission";
import Aos from "aos";
function About() {
  Aos.init();
  return (
    <>
      <div className="flex justify-center items-center min-h-96 bg-fixed bg-Bg-images bg-cover">
        <div class="sm:w-2/3 p-5 ">
          <div class="text" data-aos="fade-up" data-aos-duration="3000">
            <span class="text-white font-extrabold border-b-2 border-indigo-600 uppercase">
              About us
            </span>
            <h2 class="my-4 font-bold text-white text-3xl  sm:text-4xl ">
              About <span class="text-gradin">Evangadi</span>
            </h2>
            <p
              class="text-white text-xl
"
            >
              No matter what stage of life you are in, whether you’re just
              starting elementary school or being promoted to CEO of a Fortune
              500 company, you have much to offer to those who are trying to
              follow in your footsteps. Wheather you are willing to share your
              knowledge or you are just looking to meet mentors of your own,
              please start by joining the network here.
            </p>
          </div>
        </div>
      </div>
      <Mission />
      <WhatWeOffer />
    </>
  );
}

export default About;
