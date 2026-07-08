import { useQuery } from "@tanstack/react-query";
import { getAllApplications } from "../../api/applications/application";
import type { ApplicationPagination } from "../../interfaces/application";

const useApplications = (search: string, page: number, limit: number) => {
    return useQuery<ApplicationPagination>({
        queryKey: ["applications", search, page, limit],
        queryFn: () => getAllApplications(page, limit, search),
    });
};

export { useApplications };