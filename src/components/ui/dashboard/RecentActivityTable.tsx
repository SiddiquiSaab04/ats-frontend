import React from "react";
import Table from "../../reusable/tables/Table";
import { useDashboardAnalyticsForCandidate } from "../../../hooks/dashboard/dashboard";
import type { recentActivity } from "../../../interfaces/dashboard";

const RecentActivity: React.FC = () => {
  const { data: analytics, isLoading } = useDashboardAnalyticsForCandidate();
  
  const activities = analytics?.recentActivity ?? [];

  const columns = [
    {
      name: "Job Title",
      selector: (row: recentActivity) => row.jobTitle,
      sortable: true,
      cell: (row: recentActivity) => (
        <span className="font-semibold text-gray-800 dark:text-gray-800">
          {row.jobTitle}
        </span>
      ),
    },
    {
      name: "Company",
      selector: (row: recentActivity) => row.companyName,
      sortable: true,
      cell: (row: recentActivity) => (
        <span className="text-gray-600 dark:text-gray-800">
          {row.companyName}
        </span>
      ),
    },
    {
      name: "Applied Date",
      selector: (row: recentActivity) => row.appliedAt,
      sortable: true,
      cell: (row: recentActivity) => (
        <span className="text-gray-500 dark:text-gray-800">
          {row.appliedAt}
        </span>
      ),
    },
    {
      name: "Status",
      selector: (row: recentActivity) => row.status,
      sortable: true,
      cell: (row: recentActivity) => {
        const statusColors: Record<string, string> = {
          APPLIED: "bg-lavender/30 text-indigo-700",
          SHORTLISTED: "bg-green-500 text-green-50",
          INTERVIEW: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
          OFFERED: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
          ACCEPTED: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
          REJECTED: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300",
          DECLINED: "bg-zinc-100 text-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-400",
        };
        const colorClass = statusColors[row.status] || "bg-gray-100 text-gray-800";
        return (
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider ${colorClass}`}>
            {row.status}
          </span>
        );
      },
    },
  ];

  return (
    <div className="flex flex-col p-6 bg-white/30 rounded-xl border border-indigo-300">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-indigo-700 dark:text-lavender">
          Recent Activities
        </h3>
        <span className="text-xs text-indigo-500 bg-lavender/30 dark:bg-lavender/30 px-2.5 py-1 rounded-full font-medium">
          {activities.length} total
        </span>
      </div>

      <Table
        data={activities}
        columns={columns}
        loading={isLoading}
        perPage={10}
        totalRows={activities.length}
      />
    </div>
  );
};

export default RecentActivity;
