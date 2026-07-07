import React from "react";
import Template from "../components/layouts/template/Template";
import JobTable from "../components/ui/job/JobTable";
const JobPage: React.FC = () => {
    return (
        <Template>
            <JobTable />
        </Template>
    );
};

export default JobPage;