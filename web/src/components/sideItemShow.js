export default function SideItemShow(props) {
  return (
    <div className="flex shadow-sm hover:shadow-md space-x-3">
      <div className="h-32 w-32  bg-secondary">
        <img src="j_one.png" alt="more" className="h-32" />
      </div>

      <div className="w-64 space-y-2">
        <div className="font-bold text-primary text-lg capitalize">
          Jacket Red-x10
        </div>
        <div className="text-sm text-gray-500 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
          atque obcaecati, natus architecto ad dolor..
        </div>
        <div>
          <img src="star.png" alt="star" />
        </div>
      </div>
    </div>
  );
}
