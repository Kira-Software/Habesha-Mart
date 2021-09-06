import { useDispatch } from "react-redux";
import { getSelectedItem } from "../Redux/Action/itemstuff";
import { Link } from "react-router-dom";

const handleItemChange = (id) => {
  localStorage.setItem("detailId", id);
  window.location.reload(false);
};

export default function Product(props) {
  const dispatch = useDispatch();

  const setId = (id, category) => {
    dispatch(getSelectedItem(id));
    localStorage.setItem("S_Id", id);
    localStorage.setItem("Category", category);
  };
  return (
    <div className=" w-56 mt-6 hover:shadow-sm  flex justify-center">
      <div>
        <img
          src={props.img}
          alt="product_img"
          className="w-full h-40 rounded-t-lg"
          onClick={() => handleItemChange(props.id)}
        />
        <div className="px-4 py-2 space-y-2 ">
          <div className="text-lg font-bold text-center text-gray-800">
            {props.name}
          </div>
          <div className="text-sm font-semibold text-center text-gray-500">
            {props.description}
          </div>
          <div className="text-sm font-semibold text-center text-gray-800">
            {props.itemtype}
          </div>{" "}
          {props.id ? (
            <Link to="/item">
              <button
                className="bg-red-900 text-white font-semibold rounded-3xl border px-4 py-1"
                //onClick={() => handleItemChange(props.id)}
                onClick={() => setId(props.id, props.category)}
              >
                Detail
              </button>
            </Link>
          ) : null}
          <div className="flex justify-center">
            {" "}
            <img src="star.png" alt="star" />
          </div>
        </div>
      </div>
    </div>
  );
}
