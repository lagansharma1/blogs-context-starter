import { createContext, useState } from "react";
import { baseUrl } from "../../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [loading , setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages ,setTotalPages ] = useState(null);

    async function fetchBlogPosts(page = 1 ,tag = null , category){
        setLoading(true)
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`;
        }
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
            setPage(data.page)
        }
        catch(error){
            console.log('Error in Featching data');
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }
    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }

    const value = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}