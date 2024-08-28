import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "../../../Axios/Axios";
import Avatar from "@mui/material/Avatar";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { AppSate } from "../../../App";
import { deepOrange, deepPurple } from "@mui/material/colors";
import "react-toastify/dist/ReactToastify.css";

function SingleQuestion({ element, fetchAllQuestions }) {
  const { user } = useContext(AppSate);
  const Answer = useRef();
  const [showAnswer, setShowAnswer] = useState([]);
  const [error, seterror] = useState(false);
  const token = localStorage.getItem("token");

  async function handleSubmit() {
    const title = Answer.current.value;

    if (!title) {
      return alert("Please provide all required fields");
    }

    try {
      await axios.post(
        "/answers",
        {
          questionid: element.questionid,
          answer: title,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      alert("Question posted successfully");
      fetchAllQuestions();
      Answer.current.value = "";
      answerdata();
    } catch (error) {
      console.error(error.response.data);
      alert("Error posting question");
    }
  }

  async function answerdata() {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        `/answers/Answers/${element.questionid}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setShowAnswer(response.data);
    } catch (error) {
      console.error(error.response.data);
      alert("Error");
    }
  }

  async function handleDeleteAnswersByUser(questionid) {
    const userid = user.userid;
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.delete(
        `/answers/delete/${userid}`,

        {
          headers: {
            Authorization: "Bearer " + token,
          },
          data: { questionid },
        }
      );
      answerdata();
      fetchAllQuestions();
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      alert("Failed to delete the answers. Please try again.");
    }
  }

  useEffect(() => {
    answerdata();
  }, [element]);

  return (
    <>
      <div className="overflow-y-auto h-auto mt-3  transition duration-300 delay-300">
        {showAnswer.map((element) => {
          return (
            <div className="relative border-l-violet-400  border-2 flex justify-between ">
              <div className="md:flex items-center md:space-x-4 mb-1">
                <Avatar>{element.username.slice(0, 1)}</Avatar>
                <div className="text-slate-500 ml-14 p-2">
                  <p className="text-slate-900 font-bold">{element.username}</p>
                  {element.answer}
                </div>
              </div>
              <div>
                {user?.userid == element.userid && (
                  <DeleteForeverIcon
                    style={{ fontSize: 40 }}
                    className="text-right px-2 w-44"
                    onClick={() =>
                      handleDeleteAnswersByUser(element.questionid)
                    }
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full md:w-full px-3 mb-2 mt-2">
        <textarea
          className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
          placeholder="Type Your Comment"
          ref={Answer}
        ></textarea>
        <div className="w-full md:w-full flex items-start px-3">
          <div className="py-3">
            <button
              onClick={handleSubmit}
              className="hover:bg-green-700 bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:text-white"
            >
              Post Answer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleQuestion;
