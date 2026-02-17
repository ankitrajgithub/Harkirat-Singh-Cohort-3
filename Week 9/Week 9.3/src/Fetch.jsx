import {useState,useEffect} from 'react';

export function Fetch(){

    const [currentTab,setCurrentTab]=useState(0);
    const [tabData,setTabData]=useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        console.log("Current Tab is "+currentTab);
    },[currentTab]);

    useEffect(()=>{
        if (currentTab == 0) return;
        setLoading(true);
        try{
            fetch('https://jsonplaceholder.typicode.com/todos/'+currentTab)
            .then(async res=>{
                const json=await res.json();
                setTabData(json);
                setLoading(false);
            })
        }catch(err){
            console.log(err);
        }
    },[currentTab]);

    return (
        <div>
            <button onClick={()=>setCurrentTab(1)} style={{color : currentTab==1 ? "red" : "black"}}>Todo #1</button>
            <button onClick={()=>setCurrentTab(2)} style={{color : currentTab==2 ? "red" : "black"}}>Todo #2</button>
            <button onClick={()=>setCurrentTab(3)} style={{color : currentTab==3 ? "red" : "black"}}>Todo #3</button>
            <button onClick={()=>setCurrentTab(4)} style={{color : currentTab==4 ? "red" : "black"}}>Todo #4</button>
            <div>{loading ? "Loading..." : tabData.title}</div>
        </div>
    )
}