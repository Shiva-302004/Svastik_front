import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BackendURL } from "../config";
import img from "../image/vision.png"

export const ItemComp = ({title,price,description, quantity, id})=>{
    const handleclick=(id)=>{
        fetch(`${BackendURL}user/cart/addtocart`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":localStorage.getItem("token")
            },
            body:JSON.stringify({DroneId:id})
        }).then(res=>res.json()).then((data)=>{
            console.log(data)
        })
    }
    return (
        <div className=" bg-white mb-8 border ">
            <div className="grid grid-cols-5 max-md:grid-cols-1 grid-cols-reverse ">
                <div className="col-span-3  max-md:order-2">
                    <div className="md:h-[20%] border grid grid-cols-2 max-md:grid-cols-1 ">
                        <Link className=" font-bold text-4xl p-2" to={`/item?id=${id}`}>{title}</Link>
                        <div className=" text-2xl text-slate-600 p-2 h-full flex flex-col justify-end">{price} Rs</div>
                    </div>
                    <div className="md:h-[60%] text-slate-500 p-4">{description}</div>
                    <div className="grid grid-cols-3 text-sm pt-2 pb-2 ">
                        <div className="flex justify-center"><button className="text-blue-500 hover:text-red-800 p-2">More</button></div>
                        <div className="flex justify-center"><button className="pl-4 pr-4 pt-2 pb-2 rounded-2xl bg-slate-700 hover:bg-blue-700 text-white" onClick={()=>handleclick(id)}>Add to cart</button></div>
                        <div className="flex justify-center"><button className="pl-4 pr-4 pt-2 pb-2 rounded-2xl bg-slate-700 hover:bg-blue-700 text-white">Buy Now</button></div>
                    </div>
                </div>
                <div className="col-span-2  max-md:order-1 border-l max-md:border-b">
                    <div className=" h-[90%]">
                        <img src={img} alt="" className=" h-full w-full" />
                    </div>
                    <div className="max-md:hidden  h-[10%] flex flex-col justify-end">
                        <div className="flex">
                            <div className="flex flex-col justify-center p-2 text-sm">{(quantity > 10)?"limited stock":`${quantity} left`}</div>
                            <Butt />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

function Butt (){
    const [color , setColor] = useState(0);
    useEffect(()=>{
        const data = setInterval(()=>{
            if(color > 1){
                setColor(0);
            }
            else{
                setColor(color+1);
            }
        },500)
        return ()=>{
            clearInterval(data);
        }
    },[color])
    return (
        <div className={`flex flex-col justify-center ml-2 mr-2 p-2  rounded-lg ${(color===0)?"bg-red-700":"bg-green-700"}`}>HURRY</div>
    )
}