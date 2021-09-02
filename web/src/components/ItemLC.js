import { StarIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { getSelectedItem } from "../Redux/Action/itemstuff";
import { useDispatch } from "react-redux";
export default function ItemLS(props) {
  const dispatch = useDispatch();

  const handleId = (id,category) => {
    dispatch(getSelectedItem(id));
    localStorage.setItem("S_Id", id);
    localStorage.setItem("Category",category)
  };
  return (
    <div class="w-56 h-56 my-4  mx-2   relative">
      <div
        class="absolute inset-0 rounded-sm bg-cover bg-center z-0"
        // style={{
        //   backgroundImage: ` url(${props.img})`,
        // }}
      >
        <img src={props.img} />
      </div>
      <div class=" bg-gray-900 bg-opacity-60   opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-around items-center   font-semibold">
        <div className="space-y-6 ">
          <div className="text-3xl text-white font-bold">{props.name}</div>
          <div className="flex space-x-4">
            <div className="flex space-x-1 items-center ">
              <div className="text-xl font-bold text-white">4.6</div>
              <StarIcon className="h-6 text-yellow-300" />
            </div>
            <button onClick={() => handleId(props.id,props.category)}>
              <Link
                to="/item"
                className="hover:bg-gray-100 hover:bg-opacity-50 text-white font-semibold rounded-3xl border px-4 py-1"
              >
                view Item
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
