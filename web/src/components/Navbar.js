import { LockClosedIcon, MenuIcon, BellIcon } from "@heroicons/react/solid";
import { Link, useHistory } from "react-router-dom";
import ExploreDropdown from "./Dropdowns/exploreDropdown";
import NotificationDropdown from "./Dropdowns/NotificationDropdown";
import UserDropdown from "./Dropdowns/UserDropdown";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../Redux/Action/authentication";
export default function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authreducer.user);
  const loading = useSelector((state) => state.authreducer.loading);
  const history = useHistory();

  const handleLogout = () => {
    console.log("inside the logout function");
    dispatch(Logout());
  };
  return (
    <div
      className="fixed top-0 w-screen bg-white
    "
    >
      <div className="px-14 border    flex justify-between items-center">
        <Link to="/"> <img src="newLogo.png" alt="logo" className="h-14" /></Link>
       
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
            <ExploreDropdown />
          </ul>
          {!loading && user !== null ? (
            <>
              {" "}
              {user.role === "broker" ? (
                <ul>
                  <NotificationDropdown />
                </ul>
              ) : null}
              {user.role === "broker" || user.role ==="seller" ? (
                <>
                  <button onClick={() => history.push("/login")}>
                    <LockClosedIcon className="h-5 text-gray-500" />
                  </button>
                  <ul>
                    <UserDropdown />
                  </ul>{" "}
                </>
              ) : (
                <span style={{ cursor: "pointer" }} onClick={handleLogout}>
                  Logout
                </span>
              )}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
