import { useQuery } from "@tanstack/react-query";
import { getAllJobs } from "../../api/jobs/jobs";
import type { Job } from "../../interfaces/job";

const useJobs = () => {
    return useQuery<Job[]>({
        queryKey: ["jobs"],
        queryFn: getAllJobs,
    });
};

export  {useJobs};
