import React from "react";
import { useJobs } from "../../../hooks/job/job";
import type { Job } from "../../../interfaces/job";
import Table from "../../reusable/tables/Table";
const JobPage: React.FC = () => {
    const { data, isLoading } = useJobs();
    return (
         <Table
            data={data as Job[]}
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
        />
    );
};

export default JobPage;