import AxiosInstance from "../index";

export const getAllUsers = async () => {
    const res = await AxiosInstance.get("/user");
    console.log(res.data.users);
    return res.data.users;
}   