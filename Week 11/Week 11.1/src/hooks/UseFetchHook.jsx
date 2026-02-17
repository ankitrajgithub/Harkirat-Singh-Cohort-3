import {useState, useEffect} from 'react';

export function usePostTitle(){
    const [post,setPost]=useState({});

    async function getPosts(){
        const response=await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const json=await response.json();
        setPost(json);
    }

    useEffect(()=>{
        getPosts();
    },[])

    return {
        post:post.title
    };
}

export function useFetch(url,retryTime){
    const [data,setData]=useState({});
    const [loading,setLoading]=useState(true);

    async function getPosts(){
        setLoading(true);
        const response=await fetch(url);
        const json=await response.json();
        setData(json);
        setLoading(false);
    }

    useEffect(()=>{
        getPosts();
    },[url]);

    useEffect(()=>{
        const timer=setInterval(getPosts,retryTime*1000);
        return ()=>clearInterval(timer);
    },[url]);

    return {
        data:data,
        loading:loading
    };
}