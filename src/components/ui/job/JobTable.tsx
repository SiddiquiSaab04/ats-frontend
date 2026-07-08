import React from "react";
import { useJobs } from "../../../hooks/job/job";
import type { Job } from "../../../interfaces/job";
import Table from "../../reusable/tables/Table";
import { usePagination } from "../../../hooks/pagination/pagination";
const JobPage: React.FC = () => {
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
                },
                {
                    name: "Status",
                    selector: (row: Job) => row.status,
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

export default JobPage;