import { useEffect, useState } from "react";

export default function Query(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch("/prisma")
        .then((res)=>res.json())
        .then((data)=>{
            data.elem.map((e:any)=>{
                setData(
                    e.title
                )
            })
            console.log(data.elem)
            // setData(data.elem)
        });
    },[])

    return <>
        <p>{!data[0].title ? "Loading..." : data[0].title}</p>
    </>
}