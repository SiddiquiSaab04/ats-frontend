import { useQuery } from "@tanstack/react-query";
import { getDashboardStats } from "../../api/dashboard/stats";
import { getAnalyticsForCandidate, getAnalyticsForRecruiter, getAnalyticsForAdmin } from "../../api/dashboard/analytics";
import type { dashboardStats , dashboardAnalytics } from "../../interfaces/dashboard";

const useDashboardStats = () => {
    return useQuery<dashboardStats>({
        queryKey: ["dashboardStats"],
        queryFn: () => getDashboardStats(),
    });
};

const useDashboardAnalyticsForCandidate = () => {
    return useQuery<dashboardAnalytics>({
        queryKey: ["dashboardAnalyticsForCandidate"],
        queryFn: () => getAnalyticsForCandidate(),
    });
};

const useDashboardAnalyticsForRecruiter = () => {
    return useQuery<dashboardAnalytics>({
        queryKey: ["dashboardAnalyticsForRecruiter"],
        queryFn: () => getAnalyticsForRecruiter(),
    });
};

const useDashboardAnalyticsForAdmin = () => {
    return useQuery<dashboardAnalytics>({
        queryKey: ["dashboardAnalyticsForAdmin"],
        queryFn: () => getAnalyticsForAdmin(),
    });
};

export { useDashboardStats, useDashboardAnalyticsForCandidate, useDashboardAnalyticsForRecruiter, useDashboardAnalyticsForAdmin };