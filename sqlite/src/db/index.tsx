import { useEffect, useState } from "react";

export default function Query(){
    const [data, setData] = useState(null);
    useEffect(()=>{
        fetch("/prisma")
        .then((res)=>res.json())
        .then((data)=> setData(data.elem));
    },[])

    return <>
        <p>{!data ? "Loading..." : data}</p>
    </>
}