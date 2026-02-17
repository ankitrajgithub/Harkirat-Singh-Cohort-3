import {useState, useEffect} from "react";

export function NotificationBell(){

    const [notificationCount,setNotificationCount]=useState(1);

    useEffect(()=>{
        const interval=setInterval(()=>{
            setNotificationCount(notificationCount=>notificationCount+1);
        },1000);
        return ()=>clearInterval(interval);
    },[]);

    useEffect(()=>{
        console.log("Notification Count has been updated to : "+notificationCount);
    },[notificationCount]);

    return (
        <div>
            <div style={{backgroundColor:"red", height:40, width:40, borderRadius:20}}>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", fontSize:35}}>
                    {notificationCount}
                </div>
            </div>
            <img style={{height:40, width:40, borderRadius:10}} src={"https://static.vecteezy.com/system/resources/thumbnails/022/151/493/small_2x/bell-notification-icon-symbol-image-illustration-of-the-alarm-alert-symbol-in-eps-10-vector.jpg"}></img>
        </div>
    )
}