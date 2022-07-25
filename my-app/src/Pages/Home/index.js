// import React from "react"
import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from '../../global/constants'
import Edit from "./Components/Edit";
import List from "./Components/List";

// import Item from './Pages/Home/Components'
import "./index.css";

async function fetchData(setData){
    const res = await fetch(API_GET_DATA)
    const { data } = await res.json()
    setData(data)
}

async function fetchSetData(data){
    await fetch(API_GET_DATA,{
        method: "PUT",
        headers: {
            "Content-type":'application/json'
        },
        body:JSON.stringify({data})
    })
}


const Home = () => {
    const [data, setData] = useState([]);
    const submitData = useRef(false)

    useEffect(()=>{
        if(!submitData.current){
            return
        }
        fetchSetData(data)
            .then(data => submitData.current = false)
    }, [data])
    
    useEffect(()=>{
        fetchData(setData)
    },[])

    return (
        <div className="app">
        <Edit add={setData} status={submitData}/>
        <List listData={data} del={setData} status={submitData}/>
        </div>
    );
};
export default Home;
