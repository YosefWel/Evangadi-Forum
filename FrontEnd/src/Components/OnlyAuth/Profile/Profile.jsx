import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../../Axios/Axios";
import { FaRegEdit } from "react-icons/fa";
import Modal from "react-modal";
import "./profile.css";
import AuthNav from "../AuthNav/AuthNav";
import Footer from "../../Footer/Footer";

function Profile() {
  const [op, seto] = useState(false);
  const { userid } = useParams(); // Use useParams directly in the component body
  const [UserProfile, setUserProfile] = useState({});
  const [firstname, setfname] = useState("");
  const [lastname, setlname] = useState("");
  const [email, setEmail] = useState("");

  async function userData() {
    try {
      const response = await axios.get(`/users/userdata/` + userid);
      setUserProfile(response.data);
      setfname(response.data.firstname);
      setlname(response.data.lastname);
      setEmail(response.data.email);
    } catch (error) {
      console.log("Error:", error);
      alert("Fetching user data failed. Please try again.");
    }
  }

  useEffect(() => {
    userData();
  }, [userid]); // Add userid as a dependency to the useEffect
  async function HandleUpdate(e) {
    e.preventDefault();
    if (!firstname || !lastname || !email) {
      return alert("Provide All Data ");
    }
    try {
      await axios.put(`/users/update/${userid}`, {
        firstname,
        lastname,
        email,
      });
      alert(" data Updated.");
      userData();
      seto(false);
    } catch (error) {
      console.log("Error:", error);
      alert(" data failed. Please try again.");
    }
  }
  return (
    <>
      <AuthNav user={UserProfile} />
      <div className="max-w-lg mx-auto mt-6 mb-10 bg-slate-200 rounded-lg shadow-md p-5 ">
        <img
          className="w-32 h-32 rounded-full mx-auto"
          src="https://picsum.photos/200"
          alt="Profile picture"
        />
        <h2 className="text-center text-2xl font-semibold mt-3">
          {UserProfile.username}
        </h2>
        <p className="text-center text-gray-600 mt-1">
          <b> Name : {UserProfile.firstname}</b> <b> {UserProfile.lastname}</b>
        </p>
        <div className="flex justify-center mt-5">
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
            Email : {UserProfile.email}
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
            User Id : {userid}
          </a>
        </div>
        <div className="mt-5">
          <div className="flex ">
            <h3 className="text-xl font-semibold p-3">Update Your Profile</h3>
            <FaRegEdit
              size={32}
              className="hover:text-blue-800 cursor-pointer"
              onClick={() => seto(true)}
            />
          </div>
          <p className="text-gray-600 mt-2">
            <b>{UserProfile.firstname}</b> <b> {UserProfile.lastname}</b> You
            Can Update Your Profiles You can Update You Full name email.
          </p>
        </div>

        <Modal isOpen={op} className="modal">
          <form action="submit" method="put" onSubmit={HandleUpdate}>
            <div>
              <label class="block text-2xl font-semibold text-black p-2">
                First Name
              </label>

              <input
                onChange={(e) => setfname(e.target.value)}
                type="text"
                value={firstname}
                class="mt-1 p-3 w-full bg-slate-200 rounded-md border-gray-200 shadow-sm sm:text-lg"
              />

              <label class="block text-2xl font-semibold text-black p-2">
                Last Name
              </label>

              <input
                onChange={(e) => setlname(e.target.value)}
                type="text"
                value={lastname}
                class="mt-1 p-3 w-full bg-slate-200 rounded-md border-gray-200 shadow-sm sm:text-lg"
              />

              <label class="block text-2xl font-semibold text-black p-2">
                Email
              </label>

              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
                class="my-3 p-3 w-full bg-slate-200 rounded-md border-gray-200 shadow-sm sm:text-lg"
              />
              <div>
                <button
                  type="submit"
                  className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                >
                  Update
                </button>

                {/* Border */}

                <button
                  onClick={() => seto(false)}
                  className="inline-block mx-5 rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </Modal>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
