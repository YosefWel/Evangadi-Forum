import React, { useEffect, useState, useContext } from "react";
import axios from "../../../Axios/Axios";
import { Link } from "react-router-dom";
import ReanderAllQuestion from "./ReanderAllQuestion";
import AuthNav from "../AuthNav/AuthNav";
import { AppSate } from "../../../App";
import Footer from "../../Footer/Footer";

function ViewAllQuestions() {
  const { user } = useContext(AppSate);
  const token = localStorage.getItem("token");
  const [questions, setQuestions] = useState([]); // Renamed for consistency
  const [questionid, seQuestionId] = useState({});
  async function fetchAllQuestions() {
    try {
      const response = await axios.get("/questions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Ensure response.data is an array

      setQuestions(response.data);
    } catch (error) {
      console.log("Error fetching questions: ", error);
    }
  }
  useEffect(() => {
    fetchAllQuestions();
  }, [questionid]);
  return (
    <>
      <AuthNav user={user} />
      <div className="h-full my-12  ">
        <div className="mx-auto min-w-fit">
          {questions.map((element) => (
            <ReanderAllQuestion
              element={element}
              fetchAllQuestions={fetchAllQuestions}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ViewAllQuestions;
