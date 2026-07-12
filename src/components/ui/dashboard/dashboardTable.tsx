import React from "react";
import Table from "../../reusable/tables/Table";

interface GenericTableProps {
  title: string;
  data: any[];
  isLoading?: boolean;
}

const DashboardTable: React.FC<GenericTableProps> = ({ title, data, isLoading }) => {
  const items = data || [];
  
  const columns = items.length > 0 ? Object.keys(items[0]).map((key) => {
    return {
      name: key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()),
      selector: (row: any) => row[key],
      sortable: true,
      cell: (row: any) => {
        if (key.toLowerCase() === "status") {
          const statusColors: Record<string, string> = {
            APPLIED: "bg-indigo-100 text-indigo-700",
            SHORTLISTED: "bg-emerald-100 text-emerald-700",
            INTERVIEW: "bg-amber-100 text-amber-700",
            OFFERED: "bg-fuchsia-100 text-fuchsia-700",
            ACCEPTED: "bg-teal-100 text-teal-700",
            REJECTED: "bg-rose-100 text-rose-700",
            DECLINED: "bg-zinc-100 text-zinc-700",
          };
          const colorClass = statusColors[row[key]] || "bg-gray-100 text-gray-800";
          return (
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${colorClass}`}>
              {row[key]}
            </span>
          );
        }
        return (
          <span className="text-gray-600 font-medium">
            {row[key]}
          </span>
        );
      },
    };
  }) : [];

  return (
    <div className="flex flex-col p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-800">
          {title}
        </h3>
        <div className="px-3 py-1 border border-gray-200 rounded-full text-xs font-medium text-gray-500 cursor-pointer hover:bg-gray-50">
          Export ▾
        </div>
      </div>

      <Table
        data={items}
        columns={columns}
        loading={isLoading as boolean}
        perPage={10}
        totalRows={items.length}
      />
    </div>
  );
};

export default DashboardTable;
