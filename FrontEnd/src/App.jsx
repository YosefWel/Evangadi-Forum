import React, { useEffect, useState, createContext } from "react";
import Home from "./Components/Home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import OnlyAuth from "./Components/OnlyAuth/OnlyAuth";
import Landing from "./Components/Landing_page/Landing";
import axios from "./Axios/Axios";
import HaveaQuestion from "./Components/OnlyAuth/HaveaQuestion/HaveaQuestion";
import ViewAllQuestions from "./Components/OnlyAuth/ViewAllQuestions/ViewAllQuestions";
import SingleQuestion from "./Components/OnlyAuth/SingleQuestion/SingleQuestion";
import Profile from "./Components/OnlyAuth/Profile/Profile";
import LoginSignup from "./Components/Auth/LoginSignup";
import Search from "./Components/OnlyAuth/Search/Search";
import YourQuestions from "./Components/OnlyAuth/YourQuestions/YourQuestions";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import { ToastContainer } from "react-toastify";
export const AppSate = createContext();
function App() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
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
  useEffect(() => {
    checkUser();
  }, [token]);

  return (
    <AppSate.Provider value={{ user, setUser, checkUser }}>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route path="/" element={<Home />} />
          <Route path="/Authentication" element={<LoginSignup />} />
          <Route path="/only" element={<OnlyAuth />} />
        </Route>
        <Route path="/HaveaQuestion" element={<HaveaQuestion />} />
        <Route path="/ViewAllQuestions" element={<ViewAllQuestions />} />
        <Route path="/Profile/:userid" element={<Profile />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/YourQuestions" element={<YourQuestions />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer theme="dark" />
    </AppSate.Provider>
  );
}

export default App;
