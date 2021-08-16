export default function Product(props) {
  return (
    <div className=" w-56 mt-6 hover:shadow-sm  flex justify-center">
      <div>
        <img
          src={props.img}
          alt="product_img"
          className="w-full h-40 rounded-t-lg"
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
          </div>
          <div className="flex justify-center">
            {" "}
            <img src="star.png" alt="star" />
          </div>
        </div>
      </div>
    </div>
  );
}
