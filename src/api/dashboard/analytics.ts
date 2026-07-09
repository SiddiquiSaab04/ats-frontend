import AxiosInstance from "../index";
import type { dashboardAnalytics } from "../../interfaces/dashboard";

export const getAnalyticsForCandidate = async (): Promise<dashboardAnalytics> => {
    const res = await AxiosInstance.get("/analytics/candidate");
    console.log(res.data.data);
    return res.data.data;
}