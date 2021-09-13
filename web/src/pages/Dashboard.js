import React from "react";

// components

import CardItems from "../components/Cards/CardItems.js";
import CardSellers from "../components/Cards/CardSellers.js";
import CardRequests from "../components/Cards/CardRequests";
import CardBrokers from "../components/Cards/CardBrokers.js";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardItems />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSellers />
        </div>
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardRequests />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBrokers />
        </div>
      </div>
    </>
  );
}
