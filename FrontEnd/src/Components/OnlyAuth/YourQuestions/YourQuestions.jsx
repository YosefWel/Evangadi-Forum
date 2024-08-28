import React, { useContext, useEffect, useState } from "react";
import axios from "../../../Axios/Axios";
import ReanderYourQuestios from "./ReanderYourQuestios";
import AuthNav from "../AuthNav/AuthNav";
function YourQuestions() {
  const token = localStorage.getItem("token");
  const [userQ, setUserQ] = useState([]);

  const [user, setUser] = useState({});

  async function checkUser() {
    try {
      const { data } = await axios.get("/users/check", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUser(data);
    } catch (error) {
      navigate("/");
    }
  }

  async function usequestins() {
    try {
      const { data } = await axios.get(
        `/questions/userquestion/${user.userid}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setUserQ(data.questions);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    checkUser();

    usequestins();
  }, [user.userid]);
  return (
    <>
      <AuthNav user={user} />
      {userQ.length > 0 ? (
        <>
          <h2 class="flex gap-3 items-center m-auto text-lg font-bold md:flex-col md:gap-2">
            Your Question
          </h2>
          <div class="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1 p-4 mt-16 overflow-y-visible">
            <ul class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
              {userQ.map((Element) => (
                <ReanderYourQuestios
                  Element={Element}
                  usequestins={usequestins}
                />
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="my-24 text-2xl text-center">
          <h1 className="py-10"> You Don't have Any Post 😊</h1>
          <h1 className="text-2xl text-center ">Question not Found</h1>
        </div>
      )}
    </>
  );
}

export default YourQuestions;
