import React from "react";

import PeopleIcon from "@mui/icons-material/People";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import RateReviewIcon from "@mui/icons-material/RateReview";
function RenderAll({ data }) {
  return (
    <>
      <div class="mt-2 flex flex-wrap justify-center items-center gap-4">
        <div class="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80">
          <div class="flex flex-row items-center justify-center">
            <PeopleIcon Size={60} />

            <span class="font-bold text-gray-600"> {data.userCount} + </span>
          </div>

          <div class="mt-2 text-sm text-gray-400">users</div>
        </div>

        <div
          href="#"
          class="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
        >
          <div class="flex flex-row items-center justify-center">
            <LiveHelpIcon />
            <span class="font-bold text-gray-600">
              {" "}
              {data.questionCount} +{" "}
            </span>
          </div>

          <div class="mt-2 text-sm text-gray-400">Questions</div>
        </div>

        <div
          href="#"
          class="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
        >
          <div class="flex flex-row items-center justify-center">
            <RateReviewIcon />

            <span class="font-bold text-gray-600"> {data.answersCount} </span>
          </div>

          <div class="mt-2 text-sm text-gray-400">Answers</div>
        </div>
      </div>
    </>
  );
}

export default RenderAll;
