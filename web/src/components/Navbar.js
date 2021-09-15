import { LockClosedIcon, MenuIcon, BellIcon } from "@heroicons/react/solid";
import { useHistory } from "react-router-dom";
import ExploreDropdown from "./Dropdowns/exploreDropdown";
import NotificationDropdown from "./Dropdowns/NotificationDropdown";
import UserDropdown from "./Dropdowns/UserDropdown";
export default function Navbar() {
  const history = useHistory();
  return (
    <div
      className="fixed top-0 w-screen bg-white
    "
    >
      <div className="px-14 border    flex justify-between items-center">
        <a href="/">
          <img src="newLogo.png" alt="logo" className="h-14" />
        </a>

        <div className="flex space-x-4 items-center">
          <button
            className="outline-none"
            onClick={() => {
              history.push("/search");
            }}
          >
            <i className="fas fa-search text-gray-500"></i>
          </button>
          <ul>
            <NotificationDropdown />
          </ul>
          <ul>
            <ExploreDropdown />
          </ul>
          <button onClick={() => history.push("/login")}>
            <LockClosedIcon className="h-5 text-gray-500" />
          </button>
          <ul>
            <UserDropdown />
          </ul>
        </div>
      </div>
    </div>
  );
}
