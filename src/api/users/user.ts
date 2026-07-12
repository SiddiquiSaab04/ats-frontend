import AxiosInstance from "../index";

export const getAllUsers = async () => {
    const res = await AxiosInstance.get("/users");
    console.log(res.data.data.users);
    return res.data.data.users;
}   