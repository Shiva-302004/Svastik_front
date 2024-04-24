import {  useEffect, useState } from "react";
import { ItemComp } from "./ItemComp";
import axios from "axios";

export function AllDrone() {
    const [Drones , setDrones] = useState([{
        "_id": "123456789",
        "Title": "Comming Soon",
        "Description": "Comming Soon",
        "Price": "Comming Soon",
        "Image": "Comming Soon",
        "Video": "Comming Soon",
    }]);
    useEffect(()=>{
        const fetch = async () =>{
            const response = await axios("http://localhost:3000/api/v1/drone/");
            // console.log(response.data.Drone.length)
            if(response.data.Drone.length > 0){
                setDrones(response.data.Drone);
            }
        }
        fetch();
    },[])
    return <>
        {Drones.map(drone => {
            return <ItemComp key={drone._id} id={drone._id} title={drone.Title} price={drone.Price} quantity={123} image={drone.Image} description={drone.Description}/>
        })}

    </>
}