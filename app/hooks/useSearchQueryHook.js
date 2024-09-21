"use client"
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResults } from "../Store/SearchSlice.js";
const useSearchQueryHook = () => {
   
    const searchQuery = useSelector((state) => state.search.searchQuery);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            try {
               
                const response = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${searchQuery}`);
                console.log("response", response);
                dispatch(setSearchResults(response.data));
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [searchQuery, dispatch])
    return searchQuery;
}

export default useSearchQueryHook;
