import React from "react";
import { useApplications } from "../../../hooks/application/application";
import type { Application } from "../../../interfaces/application";
import Table from "../../reusable/tables/Table";
import { usePagination } from "../../../hooks/pagination/pagination";
const ApplicationTable: React.FC = () => {
    const pagination = usePagination()
    const { data, isLoading } = useApplications(pagination.search, pagination.page, pagination.limit);
    return (
        <Table
            data={data?.applications ?? []}
            columns={[
                {
                    name: "Title",
                    selector: (row: Application) => <span className="font-medium"> {row.userName}</span>,
                },
                {
                    name: "Location",
                    selector: (row: Application) => row.location,
                },
                {
                    name: "Email",
                    selector: (row: Application) => row.email,
                },
                {
                    name: "Phone",
                    selector: (row: Application) => row.phone,
                },
                {
                    name: "Job Type",
                    selector: (row: Application) => row.job.jobType,
                    cell: (row: Application) => {
                        const statusColors: Record<string, string> = {
                            FULL_TIME: "bg-green-500 text-green-50",
                            PART_TIME: "bg-rose-500 text-rose-50",
                            CONTRACT: "bg-rose-500 text-rose-50",
                            INTERNSHIP: "bg-blue-500 text-blue-50",
                            FREELANCE: "bg-blue-500 text-blue-50",
                            HYBRID: "bg-lavender/30 text-indigo-700",
                            REMOTE: "bg-teal-500 text-teal-50",
                        };
                        const colorClass = statusColors[row.job.jobType] || "bg-gray-100 text-gray-800";
                        return (
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider ${colorClass}`}>
                                {row.job.jobType}
                            </span>
                        );
                    },
                },
                {
                    name: "Status",
                    selector: (row: Application) => row.status,
                    cell: (row: Application) => {
                        const statusColors: Record<string, string> = {
                            PENDING: "bg-green-500 text-green-50",
                            SHORTLISTED: "bg-lavender/300 text-indigo-700",
                            ACCEPTED: "bg-green-500 text-green-50",
                            REJECTED: "bg-rose-500 text-rose-50",
                            APPLIED: "bg-blue-500 text-blue-50",
                            INTERVIEW: "bg-amber-300 text-amber-50",
                            OFFERED: "bg-emerald-500 text-emerald-50",
                            DECLINED: "bg-rose-500 text-rose-50",
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

export default ApplicationTable;


