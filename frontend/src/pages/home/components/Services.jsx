import React from "react";
import CashStackIcon from "../../../components/icon/CashStackIcon";
import HeadsetIcon from "../../../components/icon/HeadsetIcon";
import TruckIcon from "../../../components/icon/TruckIcon";
import WalletIcon from "../../../components/icon/WalletIcon";

const data = [
  {
    title: "Free Shipping",
    description: "For all orders only in local",
    icon: <TruckIcon />,
  },
  {
    title: "Money Gurantee",
    description: "30 days money back",
    icon: <CashStackIcon />,
  },
  {
    title: "Online Support 24/7",
    description: "Technical Support 24/7",
    icon: <HeadsetIcon />,
  },
  {
    title: "Secure Payment",
    description: "All cards accepted",
    icon: <WalletIcon />,
  },
];

const Services = () => (
  <div className="py-5">
    <div className="container rounded-default bg-gradient p-5">
      <div className="row g-2">
        {data?.map((d) => (
          <div
            className="col col-sm-12 col-md-6 col-lg-3 d-flex "
            key={d?.title}
          >
            {d?.icon}
            <div className="px-2">
              <h5 className="fw-bold text-white mb-0">{d?.title}</h5>
              <p className="text-asset2 mb-0">{d?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Services;
