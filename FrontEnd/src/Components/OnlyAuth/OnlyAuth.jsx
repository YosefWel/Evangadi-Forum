import axios from "../../Axios/Axios";
import { useContext, useEffect, useState } from "react";
import RenderAll from "./RenderAll";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import setting from "../../images/usersetting.svg";
import note from "../../images/notes-icon.svg";
import question from "../../images/question.svg";
import search from "../../images/search.svg";
import YourQuestion from "../../images/Yourquestion.svg";
import logout from "../../images/logout.svg";
import "./Only.css";
import AuthNav from "./AuthNav/AuthNav";
import Tippy from "@tippyjs/react";

export default function OnlyAuth() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [user1, setUser] = useState({});
  const [data, setData] = useState({});

  async function checkUser() {
    try {
      const { data } = await axios.get("/users/check", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUser(data);
    } catch (error) {
      navigate("/Auth");
    }
  }

  async function alldata() {
    try {
      const response = await axios.get("/users/count");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    checkUser();
    alldata();
  }, []);
  return (
    <div div className="bg-white bg">
      <AuthNav user={user1} />
      <div className="my-5">
        <RenderAll data={data} />

        <div className="container relative z-40 mx-auto mt-12">
          <div className="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
            <Link
              to={`/Profile/${user1.userid}`}
              className="block w-1/2 py-10 text-center border lg:w-1/4"
            >
              <div>
                <img className="block mx-auto h-28" src={setting} alt="" />

                <p className="pt-4  mx-auto text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-4">
                  Profile
                </p>
              </div>
            </Link>

            <Link
              to={"/ViewAllQuestions"}
              className="block w-1/2 py-10 text-center border lg:w-1/4"
            >
              <div>
                <img src={note} className="block mx-auto h-28" />

                <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                  View All Question
                </p>
              </div>
            </Link>

            <Link
              to={"/HaveaQuestion"}
              className="block w-1/2 py-10 text-center border lg:w-1/4"
            >
              <div>
                <img src={question} className="block mx-auto h-28" />

                <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                  Have Question ?
                </p>
              </div>
            </Link>

            <Link
              to={"/Search"}
              className="block w-1/2 py-10 text-center border lg:w-1/4"
            >
              <div>
                <img src={search} className="block mx-auto h-28" />

                <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                  Search Question
                </p>
              </div>
            </Link>

            <Link
              to={"/YourQuestions"}
              className="block w-1/2 py-10 text-center border lg:w-1/4"
            >
              <div>
                <img src={YourQuestion} className="block mx-auto h-28" />

                <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                  Your Questions
                </p>
              </div>
            </Link>

            <Link
              to={"/"}
              className="block w-1/2 py-10 text-center border lg:w-1/4"
            >
              <div>
                <img src={logout} className="block mx-auto  h-28" />

                <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                  Logout
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
