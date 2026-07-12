import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../api/users/user";
import type { User } from "../../interfaces/user";

const useAllUsers = () => {
    return useQuery<User[]>({   
        queryKey: ["allUsers"],
        queryFn: () => getAllUsers()
    });
};

export {
    useAllUsers
};
