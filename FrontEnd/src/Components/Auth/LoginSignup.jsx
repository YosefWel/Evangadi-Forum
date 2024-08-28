import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Header from "../Header/Header";
import axios from "../../Axios/Axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./LoginSignup.module.css";

function LoginSignup() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordLoginRef = useRef();
  const usernameRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailSignupRef = useRef();
  const passwordSignupRef = useRef();

  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const [passwordLogin, setPasswordLogin] = useState("");
  const [passwordSignup, setPasswordSignup] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const [signupErrorMessage, setSignupErrorMessage] = useState("");

  // Toggle between login and signup forms
  const handleLoginLinkClick = (e) => {
    e.preventDefault();
    setIsLoginVisible(false);
  };

  const handleSignupLinkClick = (e) => {
    e.preventDefault();
    setIsLoginVisible(true);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  // Handle login form submission
  async function handleLoginSubmit(e) {
    e.preventDefault();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordLoginRef.current.value;
    if (!emailValue || !passwordValue) {
      setLoginErrorMessage("Please Enter Email and Password");
      return;
    }
    try {
      const { data } = await axios.post("/users/login", {
        email: emailValue,
        password: passwordValue,
      });
      alert("Successfully logged in.");
      navigate("/only");
      localStorage.setItem("token", data.token);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
      } else {
        alert("Something went wrong. Please try again later.");
      }
    }
  }

  // Handle signup form submission
  async function handleSignupSubmit(e) {
    e.preventDefault();

    const usernameValue = usernameRef.current.value;
    const firstValue = firstNameRef.current.value;
    const lastValue = lastNameRef.current.value;
    const emailSignupValue = emailSignupRef.current.value;
    const passwordSignupValue = passwordSignupRef.current.value;
    if (
      !usernameValue ||
      !firstValue ||
      !lastValue ||
      !emailSignupValue ||
      !passwordSignupValue
    ) {
      setSignupErrorMessage("All fields are required");
      return;
    }
    try {
      await axios.post("/users/register", {
        username: usernameValue,
        firstname: firstValue,
        lastname: lastValue,
        email: emailSignupValue,
        password: passwordSignupValue,
      });
      toast.success("The user has successfully registered");
      navigate("/Authentication");
      usernameRef.current.value = "";
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      emailSignupRef.current.value = "";
      passwordSignupRef.current.value = "";
      setIsLoginVisible(true);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data.message);
      } else {
        alert("Something went wrong. Please try again later.");
      }
    }
  }

  const navigation = [{ name: "", href: "#" }];

  return (
    <>
      <Header navigation={navigation} RightText={"Home"} />
      <div className={styles.mainContainer}>
        <div className={styles.middlePart}>
          {isLoginVisible ? (
            <div className={`${styles.loginForm} `}>
              <h3>Login to your account</h3>
              <span>
                <p>
                  Don’t have an account?{" "}
                  <Link onClick={handleLoginLinkClick} to="">
                    Create a new account
                  </Link>
                </p>
              </span>
              <div className={styles.loginFormOnly}>
                <div
                  style={{
                    color: "red",
                    textAlign: "center",
                  }}
                >
                  {loginErrorMessage}
                </div>
                <form action="" onSubmit={handleLoginSubmit}>
                  <div className={styles.password}>
                    <input
                      ref={emailRef}
                      type="email"
                      placeholder="Email address"
                    />
                  </div>

                  <div className={styles.password}>
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      ref={passwordLoginRef}
                      value={passwordLogin}
                      onChange={(e) => setPasswordLogin(e.target.value)}
                      placeholder="Password"
                    />
                    <span
                      className={styles.password_toggle_icon}
                      onClick={togglePasswordVisibility}
                    >
                      {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                  <div>
                    <Link>Forgot password?</Link>
                  </div>
                  <div>
                    <button type="submit" className={styles.loginButton}>
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className={`${styles.signForm} `}>
              <h3>Join the network</h3>
              <span>
                <p>
                  Already have an account?
                  <Link onClick={handleSignupLinkClick} to="">
                    Sign in
                  </Link>
                </p>
              </span>
              <div>
                <div
                  style={{
                    color: "red",
                    textAlign: "center",
                    paddingBottom: "5px",
                  }}
                >
                  {signupErrorMessage}
                </div>
                <form action="" onSubmit={handleSignupSubmit}>
                  <div className={styles.same}>
                    <input
                      ref={usernameRef}
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div className={styles.field} style={{ border: "none" }}>
                    <input
                      ref={firstNameRef}
                      type="text"
                      placeholder="First name"
                    />
                    <input
                      ref={lastNameRef}
                      type="text"
                      placeholder="Last name"
                    />
                  </div>
                  <div className={styles.same}>
                    <input
                      ref={emailSignupRef}
                      type="email"
                      placeholder="Email address"
                    />
                  </div>

                  <div className={styles.same}>
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      ref={passwordSignupRef}
                      value={passwordSignup}
                      onChange={(e) => setPasswordSignup(e.target.value)}
                      placeholder="Password"
                    />
                    <span
                      className={styles.password_toggle_icon}
                      onClick={togglePasswordVisibility}
                    >
                      {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>

                  <h4 className={styles.agree}>
                    I agree to the <Link>privacy policy</Link> and
                    <Link>terms of service</Link>.
                  </h4>
                  <button type="submit" className={styles.join}>
                    Agree and Join
                  </button>
                  <h4>
                    <Link
                      onClick={handleSignupLinkClick}
                      className={styles.account}
                    >
                      Already have an account?
                    </Link>
                  </h4>
                </form>
              </div>
            </div>
          )}
          <div className={styles.about}>
            <h3>About</h3>
            <h1>Evangadi Networks</h1>
            <p>
              No matter what stage of life you are in, whether you’re just
              starting elementary school or being promoted to CEO of a Fortune
              500 company, you have much to offer to those who are trying to
              follow in your footsteps.
            </p>
            <p>
              Whether you are willing to share your knowledge or you are just
              looking to meet mentors of your own, please start by joining the
              network here.
            </p>

            <button className={styles.howBtn}>HOW IT WORKS</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginSignup;
