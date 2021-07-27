import { LockClosedIcon, MenuIcon } from "@heroicons/react/solid";
import { useHistory } from "react-router-dom";
export default function Home() {
  const history = useHistory();
  return (
    <div className="mx-14 pt-2">
      <div className="flex justify-between items-center">
        <img src="lo.png" alt="logo" className="h-12" />
        <div className="flex">
          <button className="flex items-center">
            <MenuIcon className="h-6 mr-1 text-gray-800" />
            <span className="font-semibold">Explore</span>
          </button>
          <button className="ml-6" onClick={() => history.push("/login")}>
            <LockClosedIcon className="h-6 text-gray-800" />
          </button>
        </div>
      </div>
    </div>
  );
}
