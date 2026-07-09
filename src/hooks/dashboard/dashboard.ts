import { useQuery } from "@tanstack/react-query";
import { getDashboardStats } from "../../api/dashboard/stats";
import { getAnalyticsForCandidate, getAnalyticsForRecruiter, getAnalyticsForAdmin } from "../../api/dashboard/analytics";
import type { dashboardStats, dashboardAnalytics }
    from "../../interfaces/dashboard";
import type { RootState }
    from "../../store/store";
import { useSelector } from "react-redux";

const userRole = (state: RootState) => state.auth.user?.role;
const role = useSelector(userRole);

const useDashboardStats = () => {
    return useQuery<dashboardStats>({
        queryKey: ["dashboardStats"],
        queryFn: () => getDashboardStats()
    });
};


const useDashboardAnalytics = () => {
    if (role === "CANDIDATE") {
        return useDashboardAnalyticsForCandidate();
    }
    if (role === "RECRUITER") {
        return useDashboardAnalyticsForRecruiter();
    }
    if (role === "ADMIN") {
        return useDashboardAnalyticsForAdmin();
    }
}

const useDashboardAnalyticsForCandidate = () => {
    return useQuery<dashboardAnalytics>({
        queryKey: ["dashboardAnalyticsForCandidate"],
        queryFn: () => getAnalyticsForCandidate()
    });
};

const useDashboardAnalyticsForRecruiter = () => {
    return useQuery<dashboardAnalytics>({
        queryKey: ["dashboardAnalyticsForRecruiter"],
        queryFn: () => getAnalyticsForRecruiter()
    });
};

const useDashboardAnalyticsForAdmin = () => {
    return useQuery<dashboardAnalytics>({
        queryKey: ["dashboardAnalyticsForAdmin"],
        queryFn: () => getAnalyticsForAdmin()
    });
};

export {
    useDashboardStats,
    useDashboardAnalyticsForCandidate,
    useDashboardAnalyticsForRecruiter,
    useDashboardAnalyticsForAdmin,
    useDashboardAnalytics
};
