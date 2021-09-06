import { ClockIcon } from "@heroicons/react/solid";

export default function Comment() {
  return (
    <div className=" px-2  mt-8 flex  justify-center">
      <div className="flex w-full ml-24   space-x-5">
        <img src="pro3.jpg" alt="propic" className="h-14 w-14 rounded-full " />
        <div className="px-2">
          <div className="text-sm text-primary font-bold">John Doe</div>
          <div className="text-sm w-3/4 py-1 text-gray-600 bg-gray-50 px-2 rounded-md font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            atque obcaecati, natus architecto ad dolor..
          </div>
          <div className="flex items-center space-x-1">
            <ClockIcon className="h-4 text-gray-400" />{" "}
            <div className="text-sm font-semibold  ">3h ago</div>
          </div>
        </div>
      </div>
    </div>
  );
}
