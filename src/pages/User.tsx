import React from "react";
import Template from "../components/layouts/template/Template";
import UserTable from "../components/ui/user/UserTable";
const UserPage: React.FC = () => {
    return (
        <Template>
            <UserTable />
        </Template>
    );
};

export default UserPage;