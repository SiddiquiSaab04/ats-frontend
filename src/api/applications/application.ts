import AxiosInstance from "../index";
import type { ApplicationPagination } from "../../interfaces/application";


export const getAllApplications = async (page: number, limit: number, search: string): Promise<ApplicationPagination> => {
    const res = await AxiosInstance.get(`/application?page=${page}&limit=${limit}&search=${search}`);
    console.log(res.data.applications.data);
    return {
        applications: res.data.applications?.data || [],
        pagination: {
            page: res.data.applications?.pagination?.currentPage ?? 1,
            limit: res.data.applications?.pagination?.limit ?? limit,
            totalRecords: res.data.applications?.pagination?.totalRecords ?? 0,
            totalPages: res.data.applications?.pagination?.totalPages ?? 1,
            hasPrevPage: res.data.applications?.pagination?.hasPreviousPage ?? false,
            hasNextPage: res.data.applications?.pagination?.hasNextPage ?? false,
        }
    };
};