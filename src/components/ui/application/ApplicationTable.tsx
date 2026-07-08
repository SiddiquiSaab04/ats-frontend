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
                    selector: (row: Application) => row.userName,
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
                },
                {
                    name: "Status",
                    selector: (row: Application) => row.status,
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