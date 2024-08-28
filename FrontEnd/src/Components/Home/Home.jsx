"use client";
import Header from "../Header/Header";
import bg from "../../images/image_bg.jpg";
import "./home.css";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { easeInOut, easeOut, motion } from "framer-motion";
import About from "./About/About";
import { useEffect, useContext } from "react";
import { AppSate } from "../../App";
export default function App() {
  const { user, setUser } = useContext(AppSate);
  const navigate = useNavigate();
  const navigation = [
    { name: "About", href: "#" },
    { name: "What We Offer", href: "#" },
    { name: "Our Mission", href: "#" },
    { name: "Official Website", href: "#" },
  ];

  useEffect(() => {
    user ? localStorage.removeItem("token") : "";
  }, []);

  return (
    <>
      <Header navigation={navigation} RightText={"Sign in"} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.85, ease: "easeInOut" }}
      >
        <section className="grid mt-5  gap-8 md:grid-cols-2 md:items-center md:text-left">
          <div className="sm:max-xl:bg-black">
            <img className="" src={bg} alt="" />
          </div>
          <div>
            <h1 className="mb-3 py-7 text-4xl font-bold tracking-tight sm:text-6xl text-gradin">
              <TypeAnimation
                sequence={[
                  "Evangadi Forum",
                  1000,
                  "OPen To Everyone",
                  1000,
                  "Ask a Question",
                  1000,
                  "Share Your Knowledge",
                  1000,
                  "Connect With Others",
                  1000,
                  "Join The Community",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </h1>
            <p className="mt-6 text-balance font-medium leading-8 text-gray-600">
              Evangadi Forum is open to everyone. Whether you're looking to ask
              a question, share your knowledge, or connect with others, we
              invite you to join our community. Together, we can create a
              vibrant and supportive environment where everyone can thrive.
            </p>
            <div className="mt-4 flex text-center ">
              <Link
                to={"/Authentication"}
                className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join Community
              </Link>
            </div>
          </div>
        </section>
      </motion.div>
      <About />\{" "}
    </>
  );
}
