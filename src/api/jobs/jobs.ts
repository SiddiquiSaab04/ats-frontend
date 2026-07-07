import AxiosInstance from "../index";

export const getAllJobs = async () => {
    const res = await AxiosInstance.get("/job");
    console.log("hello" ,res.data.data);
    return res.data.data;
};