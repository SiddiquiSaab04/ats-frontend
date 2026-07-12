import React from "react";
import Table from "../../reusable/tables/Table";
import { usePagination } from "../../../hooks/pagination/pagination";
import { useAllUsers } from "../../../hooks/users/user";
import type { User } from "../../../interfaces/user";
import moment from "moment";
const UserTable: React.FC = () => {
    const pagination = usePagination()
    const { data, isLoading } = useAllUsers();
    console.log(data)
    return (
        <Table
            data={data ?? []}
            columns={[
                {
                    name: "Name",
                    selector: (row: User) => <span className="font-medium"> {row.name}</span>,
                },
                {
                    name: "Email",
                    selector: (row: User) => row.email,
                },
                {
                    name: "Role",
                    selector: (row: User) => row.role,
                    cell: (row: User) => {
                        const statusColors: Record<string, string> = {
                            ADMIN: "bg-green-500 text-green-50",
                            RECRUITER: "bg-rose-500 text-rose-50",
                            CANDIDATE: "bg-lavender/30 text-indigo-700",
                        };
                        const colorClass = statusColors[row.role] || "bg-gray-100 text-gray-800";
                        return (
                            <span className={`px-2.5 py-0.5 w-24 text-center rounded-full text-xs font-semibold uppercase tracking-wider ${colorClass}`}>
                                {row.role}
                            </span>
                        );
                    },
                },
                {
                    name: "Created At",
                    selector: (row: User) => moment(row.createdAt).format("DD-MMMM-YY"),
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
            // page={pagination.page}
            // perPage={pagination.limit}
            // totalRows={data?.pagination?.totalRecords}
            // onPageChange={pagination.setPage}
            // onPerPageChange={(newLimit) => {
            //     pagination.setLimit(newLimit);
            //     pagination.setPage(1);
            // }}
        />
    );
};

export default UserTable;


