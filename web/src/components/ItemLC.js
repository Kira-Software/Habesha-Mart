import { StarIcon } from "@heroicons/react/solid";

export default function ItemLS(props) {
  return (
    <div class="w-56 h-56 my-4  mx-2   relative">
      <div
        class="absolute inset-0 rounded-sm bg-cover bg-center z-0"
        style={{
          backgroundImage: ` url(${props.img})`,
        }}
      ></div>
      <div class=" bg-gray-900 bg-opacity-60   opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-around items-center   font-semibold">
        <div className="space-y-6 ">
          <div className="text-3xl text-white font-bold">Home one x</div>
          <div className="flex space-x-4">
            <div className="flex space-x-1 items-center ">
              <div className="text-xl font-bold text-white">4.6</div>
              <StarIcon className="h-6 text-yellow-300" />
            </div>
            <button className="hover:bg-gray-100 hover:bg-opacity-50 text-white font-semibold rounded-3xl border px-4 py-1">
              view Item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
