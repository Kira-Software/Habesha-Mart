export default function ItemListCat(props) {
  return (
    <div className="flex ">
      <div className=" cursor-pointer">
        <img src={props.img} alt="home" className="h-14 w-14 rounded-full" />
        <div className="text-sm font-semibold text-center text-gray-800">
          {props.label}
        </div>
      </div>
    </div>
  );
}
