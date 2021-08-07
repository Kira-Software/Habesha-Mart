export default function SideItemShow(props) {
  return (
    <div className="flex mt-2 space-x-5 border rounded-xl px-2 py-1">
      <img src={props.image} alt="leftitem" className="h-24" />
      <div className="">
        <div className="text-lg font-semibold text-gray-600">Lorem ipsum</div>
        <div className="text-sm text-gray-500 ">
          Lorem ipsum dolor sit amet consectr adipisicing
          <span className="text-blue-500"> more...</span>
        </div>
        <div className="mt-2">
          <span className="text-lg font-semibold text-gray-600">Price: </span>
          <span className=" font-semibold text-gray-500">$ 400.00</span>
        </div>
      </div>
    </div>
  );
}
