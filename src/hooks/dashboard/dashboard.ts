import { useQuery } from "@tanstack/react-query";
import { getDashboardStats } from "../../api/dashboard/stats";
import type { dashboardStats } from "../../interfaces/dashboard";

const useDashboardStats = () => {
    return useQuery<dashboardStats>({
        queryKey: ["dashboardStats"],
        queryFn: () => getDashboardStats(),
    });
};

export { useDashboardStats };