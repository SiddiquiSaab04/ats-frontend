import {useState} from "react";

 const usePagination =  () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [search, setSearch] = useState("");

    return {
        page,
        limit,
        search,
        setPage,
        setLimit,
        setSearch,
    };
};

export {usePagination}