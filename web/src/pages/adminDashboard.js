import {
  CogIcon,
  FilterIcon,
  PaperAirplaneIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import Navbar from "../components/Navbar";

export default function AdminDashboard() {
  return (
    <div>
      <div
        className="w-1/5  h-screen px-4 py-2"
        style={{
          backgroundColor: "rgb(12, 20, 30)",
        }}
      >
        <div className="flex space-x-2 items-center py-2 border-b">
          <PaperAirplaneIcon className="h-5 text-white" />
          <div className="font-semibold text-white">Dashboard</div>
        </div>
        <ul className="mt-4 space-y-2 px-2">
          <li className="flex items-center space-x-2">
            <ShoppingBagIcon className="h-5 text-white" />
            <div className="font-semibold text-white">Items</div>
          </li>
          <li className="flex items-center space-x-2">
            <FilterIcon className="h-5 text-white" />
            <div className="font-semibold text-white">Report</div>
          </li>
          <li className="flex items-center space-x-2">
            <UserCircleIcon className="h-5 text-white" />
            <div className="font-semibold text-white">Brokers</div>
          </li>
          <li className="flex items-center space-x-2">
            <UsersIcon className="h-5 text-white" />
            <div className="font-semibold text-white">Sellers</div>
          </li>
          <li className="flex items-center space-x-2">
            <CogIcon className="h-5 text-white" />
            <div className="font-semibold text-white">conf</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
