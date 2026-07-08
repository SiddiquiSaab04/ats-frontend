import AxiosInstance from "../index";
import type { JobPagination } from "../../interfaces/job";

export const getAllJobs = async (page: number, limit: number, search: string): Promise<JobPagination> => {
    const res = await AxiosInstance.get(`/job?page=${page}&limit=${limit}&search=${search}`);
    
    return {
        data: res.data.data || [],
        pagination: {
            page: res.data.pagination?.currentPage ?? 1,
            limit: res.data.pagination?.limit ?? limit,
            totalRecords: res.data.pagination?.totalRecords ?? 0,
            totalPages: res.data.pagination?.totalPages ?? 1,
            hasPrevPage: res.data.pagination?.hasPreviousPage ?? false,
            hasNextPage: res.data.pagination?.hasNextPage ?? false,
        }
    };
};