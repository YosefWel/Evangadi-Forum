import React, { useState } from "react";
import SingleQuestion from "../SingleQuestion/SingleQuestion";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
function ReanderAllQuestion({ element, fetchAllQuestions }) {
  const [showcomment, setcomment] = useState(false);
  const [click, setclick] = useState([]);
  return (
    <>
      <div
        aria-label="card 2"
        tabindex="0"
        className="w-3/6 mx-auto  shadow-2xl p-5"
      >
        <div className="flex items-center border-b border-gray-200 p-6 my-5 ">
          <div className="">
            <Stack direction="row" spacing={2}>
              <Avatar sx={{ bgcolor: deepPurple[500] }}>
                {element.username.slice(0, 1)}
              </Avatar>
            </Stack>
            <p
              tabindex="0"
              className="focus:outline-none text-sm leading-normal  text-gray-500"
            >
              {element.username}
            </p>
          </div>

          <div className="flex items-start justify-between w-full">
            <div className="pl-3 w-full">
              <p
                tabindex="0"
                className="focus:outline-none text-xl ml-6 font-medium leading-5 text-gray-800"
              >
                {element.title}
              </p>
            </div>
          </div>
        </div>
        <div className="px-2">
          <p
            tabindex="0"
            className="focus:outline-none text-sm leading-5 py-4 text-gray-600"
          >
            {element.description}
          </p>
          <div tabindex="0" className="focus:outline-none flex">
            <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">
              Total Answer {element.total_answers}
            </div>
            <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">
              {element.created_at.slice(0, 10)}
            </div>
            <div
              onClick={() => {
                setcomment(!showcomment);
                setclick(element);
              }}
              className="hover:bg-sky-700 hover:text-white hover:cursor-pointer py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100"
            >
              Give Answer
            </div>
          </div>
        </div>
        {showcomment && (
          <SingleQuestion
            element={click}
            fetchAllQuestions={fetchAllQuestions}
          />
        )}
      </div>
    </>
  );
}

export default ReanderAllQuestion;
