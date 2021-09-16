import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../../Redux/Action/itemstuff.js";
import { getAllUser } from "../../Redux/Action/authentication";

// components

import CardStats from "./../Cards/CardStats.js";

export default function HeaderStats() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.item.items);
  const loadingitem = useSelector((state) => state.item.loadingitem);
  const alluser = useSelector((state) => state.authreducer.alluser);
  const loading = useSelector((state) => state.authreducer.loading);

  useEffect(() => {
    //  dispatch(getLoggedIn());
    dispatch(getItem());
    dispatch(getAllUser());

    // dispatch(getRequest());
    //console.log("the value of items is ", items);
  }, []);

  return (
    <>
      {/* Header */}
      <div className="relative bg-primary md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Items"
                  statTitle={!loadingitem ? items.data.length : null}
                  // statArrow="up"
                  // statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="all items posted"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Total USERS"
                  statTitle={!loading ? alluser.data.length : null}
                  //{!loading ? alluser.data : null}
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-user"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Sellers"
                  statTitle={!loading ? alluser.sellerlist.length : null}
                  //"924"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="brokers"
                  statTitle={!loading ? alluser.brokerlist.length : null}
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-users"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
             
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4" style={{marginTop:10}}>
                <CardStats
                  statSubtitle="Class Customers"
                  statTitle={!loading ? alluser.classCustomerlist.length : null}
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-users"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
