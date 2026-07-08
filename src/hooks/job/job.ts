import { useQuery } from "@tanstack/react-query";
import { getAllJobs } from "../../api/jobs/jobs";
import type { JobPagination } from "../../interfaces/job";

const useJobs = (search: string, page: number, limit: number) => {
    return useQuery<JobPagination>({
        queryKey: ["jobs", search, page, limit],
        queryFn: () => getAllJobs(page, limit, search),
    });
};

export { useJobs };
