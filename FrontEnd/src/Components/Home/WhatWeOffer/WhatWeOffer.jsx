import React from "react";
import Aso from "aos";

function WhatWeOffer() {
  Aso.init();

  return (
    <div>
      <div class="bg-gray-100 min-h-screen py-20">
        <div class="container mx-auto pt-12">
          <h1 class="text-4xl font-bold text-gradin text-center mb-16">
            What We Offer
          </h1>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              class="bg-white rounded-lg shadow-lg p-8"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h2 class="text-xl font-bold text-orange-600 mb-4">
                Discussion Boards
              </h2>
              <img
                src="https://img.freepik.com/free-vector/flat-people-business-training-illustration_23-2148921811.jpg?t=st=1722321673~exp=1722325273~hmac=b3d94a0e80219ad984dd1c7716b4a3fde871845469452cf451edd99ac799914c&w=826"
                alt=""
              />
              <p class="text-gray-700">
                Engage in discussions on a wide range of topics, from technology
                and science to arts and culture. Our forums are organized to
                make it easy for you to find and participate in conversations
                that interest you.
              </p>
            </div>
            <div
              class="bg-white rounded-lg shadow-lg p-8"
              data-aos="zoom-in-down"
            >
              <h2 class="text-xl font-bold text-orange-600 mb-4">
                Knowledge Sharing
              </h2>
              <div className="min-h-56">
                <img
                  className="min-h-52"
                  src="https://img.freepik.com/premium-vector/successful-teamwork-employees-collaborating-workspace-woman-sitting-desk-with-laptop-generating-ideas_102902-5723.jpg?w=826"
                  alt=""
                />
              </div>
              <p class="text-gray-700">
                Share your knowledge and expertise with the community by
                answering questions and contributing to discussions. Your
                insights can help others learn and grow.
              </p>
            </div>
            <div
              class="bg-white rounded-lg shadow-lg p-8"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h2 class="text-xl font-bold text-orange-600 mb-4">
                Networking Opportunities
              </h2>
              <img
                src="https://img.freepik.com/free-vector/people-networking-through-technology_53876-26649.jpg?t=st=1722322401~exp=1722326001~hmac=1c64d56af314d26ea521e6ef4c13b1e4103c0175f2e4492e808fd7ed9581e15e&w=826"
                alt=""
              />
              <p class="text-gray-700">
                Connect with other members who share your interests and goals.
                Build relationships, collaborate on projects, and expand your
                professional network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeOffer;
