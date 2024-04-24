import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const ItemComp = ({title,price,description, quantity, id})=>{
    const handleclick=(id)=>{
        fetch("http://localhost:3000/api/v1/user/cart/addtocart",{
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
        <div className="border bg-white mb-8">
            <div className="grid grid-cols-5">
                <div className="col-span-3 border">
                    <div className="grid grid-cols-2 border">
                        <Link className="border font-bold text-4xl p-2" to={`/item?id=${id}`}>{title}</Link>
                        <div className="border text-2xl text-slate-600 p-2 h-full flex flex-col justify-end">{price} Rs</div>
                    </div>
                    <div className="border h-80 text-slate-500 p-4">{description}</div>
                    <div className="grid grid-cols-3 text-sm pt-2 pb-2">
                        <div className="flex justify-center"><button className="text-blue-500 hover:text-red-800 p-2">More</button></div>
                        <div className="flex justify-center"><button className="pl-4 pr-4 pt-2 pb-2 rounded-2xl bg-slate-700 hover:bg-blue-700 text-white" onClick={()=>handleclick(id)}>Add to cart</button></div>
                        <div className="flex justify-center"><button className="pl-4 pr-4 pt-2 pb-2 rounded-2xl bg-slate-700 hover:bg-blue-700 text-white">Buy Now</button></div>
                    </div>
                </div>
                <div className="col-span-2 border">
                    <div className="border h-[90%]">
                        pic
                        <img src="" alt="" />
                    </div>
                    <div className="border h-[10%] flex flex-col justify-end">
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
        <div className={`flex flex-col justify-center ml-2 mr-2 p-2 border rounded-lg ${(color===0)?"bg-red-700":"bg-green-700"}`}>HURRY</div>
    )
}