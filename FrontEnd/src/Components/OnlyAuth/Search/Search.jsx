import React, { useEffect, useState } from "react";
import AuthNav from "../AuthNav/AuthNav";
import { AppSate } from "../../../App";
import { useContext } from "react";
import Footer from "../../Footer/Footer";
import axios from "../../../Axios/Axios";
import SingleQuestion from "../SingleQuestion/SingleQuestion";
import Modal from "react-modal";
import ReanderAllQuestion from "../ViewAllQuestions/ReanderAllQuestion";

function Search() {
  const { user } = useContext(AppSate);
  const [title, setTitle] = useState(""); // For storing the search query
  const [searchResults, setSearchResults] = useState([]); // For storing search results
  const [error, setError] = useState(""); // For storing error messages
  const [dropdownVisible, setDropdownVisible] = useState(false); // For controlling dropdown visibility
  const token = localStorage.getItem("token");
  const [search, searchItem] = useState([]);
  const [op, seto] = useState(false);

  // Function to handle search input change
  const handleSearch = async (e) => {
    const searchQuery = e.target.value;
    setTitle(searchQuery);

    if (searchQuery.length === 0) {
      setSearchResults([]);
      setDropdownVisible(false);
      return;
    }

    try {
      const response = await axios.get(
        `/questions/search/${encodeURIComponent(searchQuery)}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSearchResults(response.data.questions);
      setError("");
      setDropdownVisible(true);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      setError(error.response ? error.response.data.message : error.message);
      setSearchResults([]);
      setDropdownVisible(false);
    }
  };

  return (
    <>
      <AuthNav user={user} />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 h-screen mt-6">
        <div className="relative isolate overflow-hidden bg-white px-6 py-20 text-center sm:px-16 sm:shadow-sm">
          <div className="flex">
            <p className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Search for questions
            </p>
            <div class="relative flex justify-center items-center">
              <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
              <img
                src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
                class="rounded-full h-28 w-28"
              />
            </div>
          </div>
          <div className="relative mx-auto mt-8">
            <input
              id="search-bar"
              value={title}
              onChange={handleSearch}
              placeholder="Type your keyword here"
              className="px-6 py-2 w-full rounded-md outline-none bg-white border border-gray-300 shadow-md"
            />

            {dropdownVisible && searchResults.length > 0 && (
              <ul className="absolute bg-white border border-gray-300 mt-1 rounded-md w-full max-h-60 overflow-auto shadow-lg">
                {searchResults.map((question) => (
                  <li
                    key={question.questionid}
                    onClick={() => {
                      searchItem(question);
                      seto(true);
                    }}
                    className="p-4 border-b border-gray-200 cursor-pointer"
                  >
                    <h3 className="font-bold">{question.title}</h3>
                    <p>{question.content}</p>
                    <p className="text-sm text-gray-500">
                      Asked by {question.username} on{" "}
                      {new Date(question.created_at).toLocaleDateString()}
                    </p>
                  </li>
                ))}
              </ul>
            )}

            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>
      </div>

      <Footer />
      <>
        <Modal isOpen={op} className="modal1">
          <b
            className="text-left p-2 fixed text-red-600 cursor-pointer	"
            onClick={() => seto(false)}
          >
            X
          </b>
          <ReanderAllQuestion element={search} />
        </Modal>
      </>
    </>
  );
}

export default Search;
