import React from "react";
import { useJobs } from "../../../hooks/job/job";
import type { Job } from "../../../interfaces/job";
import Table from "../../reusable/tables/Table";
import { usePagination } from "../../../hooks/pagination/pagination";
const JobTable: React.FC = () => {
    const pagination = usePagination()
    const { data, isLoading } = useJobs(pagination.search, pagination.page, pagination.limit);
    return (
        <Table
            data={data?.data ?? []}
            columns={[
                {
                    name: "Title",
                    selector: (row: Job) => row.title,
                },
                {
                    name: "Location",
                    selector: (row: Job) => row.location,
                },
                {
                    name: "Salary",
                    selector: (row: Job) => row.salary,
                },
                {
                    name: "Company",
                    selector: (row: Job) => row.company?.name ?? "N/A",
                },
                {
                    name: "Job Type",
                    selector: (row: Job) => row.jobType,
                    cell: (row: Job) => {
                            const statusColors: Record<string, string> = {
                              FULL_TIME: "bg-green-500 text-green-50",
                              PART_TIME: "bg-rose-500 text-rose-50",
                              CONTRACT: "bg-rose-500 text-rose-50",
                              INTERNSHIP: "bg-blue-500 text-blue-50",
                              FREELANCE: "bg-blue-500 text-blue-50",
                              HYBRID : "bg-lavender/30 text-indigo-700",
                              REMOTE: "bg-teal-500 text-teal-50",
                            };
                            const colorClass = statusColors[row.jobType] || "bg-gray-100 text-gray-800";
                            return (
                              <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider ${colorClass}`}>
                                {row.jobType}
                              </span>
                            );
                          },
                },
                {
                    name: "Status",
                    selector: (row: Job) => row.status,
                    cell: (row: Job) => {
                            const statusColors: Record<string, string> = {
                              OPEN: "bg-green-500 text-green-50",
                              CLOSED: "bg-rose-500 text-rose-50",
                              EXPIRED: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300",
                              
                            };
                            const colorClass = statusColors[row.status] || "bg-gray-100 text-gray-800";
                            return (
                              <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider ${colorClass}`}>
                                {row.status}
                              </span>
                            );
                          },
                },
            ]}
            // actions={[
            //     {
            //         label: "Edit",
            //         onClick: (row: Job) => {
            //             console.log(row);
            //         },
            //     },
            //     {
            //         label: "Delete",
            //         onClick: (row: Job) => {
            //             console.log(row);
            //         },
            //     },
            // ]}
            loading={isLoading}
            page={pagination.page}
            perPage={pagination.limit}
            totalRows={data?.pagination?.totalRecords}
            onPageChange={pagination.setPage}
            onPerPageChange={(newLimit) => {
                pagination.setLimit(newLimit);
                pagination.setPage(1);
            }}
        />
    );
};

export default JobTable;