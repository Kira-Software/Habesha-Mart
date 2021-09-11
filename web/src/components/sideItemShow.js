import { useEffect } from "react";

import { getSelectedItem } from "../Redux/Action/itemstuff";
import { useDispatch, useSelector } from "react-redux";
import { getComment } from "../Redux/Action/comment";
export default function SideItemShow(props) {
  const dispatch = useDispatch();

  const handleItemChange = (id, category) => {
    console.log(
      "the comming id and category respectively are",
      id,
      "and ",
      category
    );
    dispatch(getSelectedItem(id));
    localStorage.setItem("S_Id", id);
    localStorage.setItem("Category", category);
    dispatch(getComment(id));
    //window.location.reload(false);
    // window.onbeforeunload = function () {
    window.scrollTo(0, 0);
    //}
  };
  return (
    <div className="flex shadow-sm hover:shadow-md space-x-3">
      <div className="h-32 w-32  bg-secondary">
        <img
          src={`http://localhost:9000/${props.image}`}
          alt="more"
          className="h-32"
        />
      </div>

      <div className="w-64 space-y-2">
        <div className="font-bold text-primary text-lg capitalize">
          {props.name}
        </div>
        <div className="text-sm text-gray-500 ">{props.description}</div>
        <div>
          <img src="star.png" alt="star" />
        </div>
        <button
          className="bg-gray-200 text-black font-semibold rounded-3xl border px-4 py-1"
          onClick={() => handleItemChange(props.id, props.category)}
        >
          Show Item
        </button>
      </div>
    </div>
  );
}
