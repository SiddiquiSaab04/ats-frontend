import AxiosInstance from "../index";
import type { dashboardStats } from "../../interfaces/dashboard";

export const getDashboardStats = async (): Promise<dashboardStats[]> => {
    const res = await AxiosInstance.get('/stats');
    console.log(res.data.data);
    return res.data.data;
};