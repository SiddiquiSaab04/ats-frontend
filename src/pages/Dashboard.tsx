import React from "react";
import Template from "../components/layouts/template/Template";
import StatsCard from "../components/ui/dashboard/Stats";
import MonthlyApplications from "../components/ui/dashboard/charts/MonthlyApplications";
import Rating from "../components/ui/dashboard/charts/Rating";

const Dashboard: React.FC = () => {
  return (
    <Template styleClass="space-y-5">
      <StatsCard />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        <div className="lg:col-span-3">
          <MonthlyApplications />
        </div>

        <div className="lg:col-span-2">
          <Rating />
        </div>
      </div>
    </Template>
  );
};

export default Dashboard;