import { useQuery } from "@tanstack/react-query";
import { getDashboardStats } from "../../api/dashboard/stats";
import { getAnalyticsForCandidate } from "../../api/dashboard/analytics";
import type { dashboardStats , dashboardAnalytics } from "../../interfaces/dashboard";

const useDashboardStats = () => {
    return useQuery<dashboardStats>({
        queryKey: ["dashboardStats"],
        queryFn: () => getDashboardStats(),
    });
};

const useDashboardAnalytics = () => {
    return useQuery<dashboardAnalytics>({
        queryKey: ["dashboardAnalytics"],
        queryFn: () => getAnalyticsForCandidate(),
    });
};

export { useDashboardStats, useDashboardAnalytics };