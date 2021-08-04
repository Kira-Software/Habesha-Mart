export default function Items(props) {
  return (
    <div className=" hover:shadow-xl mr-4 ring-1 ring-yellow-300 mt-8 justify-center px-2 py-2 border rounded-3xl w-52">
      <div>
        <img src={props.image} alt="search-result" className="h-56" />
        <div className=" mt-4 font-semibold text-lg text-gray-700">
          Monstera Dk Var (L)
        </div>
        <img src="star.png" alt="rate" />
        <div className="flex items-center justify-between mt-4">
          <div>
            <div className="text-sm font-semibold text-gray-500">price</div>
            <div className=" font-bold text-gray-800">$ 400.00</div>
          </div>
          <div className="px-3 font-semibold text-sm py-1 border rounded-lg">
            nahom101
          </div>
        </div>
      </div>
    </div>
  );
}
