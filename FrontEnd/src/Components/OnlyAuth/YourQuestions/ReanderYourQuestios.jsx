import React, { useContext, useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import axios from "../../../Axios/Axios";
import { AppSate } from "../../../App";

function ReanderYourQuestios({ Element, usequestins }) {
  const { user } = useContext(AppSate);
  const [show, setShow] = useState(false);

  async function HandleRemoveQuestion(questionid) {
    const userid = user.userid;
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.delete(
        `/questions/delete/${userid}`,

        {
          headers: {
            Authorization: "Bearer " + token,
          },
          data: { questionid },
        }
      );
      alert("complite");
      usequestins();
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      alert("Failed to delete the answers. Please try again.");
    }
  }
  return (
    <div className="flex justify-between ">
      <li
        class="w-full bg-gray-100 p-3 rounded-md cursor-pointer hover:bg-slate-100 border-fuchsia-200"
        onClick={() => setShow(!show)}
      >
        <b className="text-blue-950">{Element.title}</b>

        {show && (
          <div className="flex space-x-20">
            <li class=" bg-gray-100 p-3 rounded-md">{Element.description}</li>
            <small className="mx-6">
              Created : {Element.created_at.slice(0, 10)}
            </small>
          </div>
        )}
      </li>
      <div
        className="mr-4 cursor-pointer hover:text-red-600"
        onClick={() => HandleRemoveQuestion(Element.questionid)}
      >
        <DeleteForeverIcon />
      </div>
    </div>
  );
}

export default ReanderYourQuestios;
