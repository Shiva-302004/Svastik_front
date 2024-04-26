import { Appbar } from "../components/Appbar"
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { PiCurrencyInrBold } from "react-icons/pi";
import { loginAtom, menuAtom, profileAtom } from "../stateMannagement";
import { useSetRecoilState } from "recoil";
import { BackendURL } from "../config";
import img from "../image/vision.png"

export const SingleItem = ()=>{
    // const id  = "6622d2404596713cd79cecd7";
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id') || "";
    const navigate = useNavigate();
    const [drone , setDrone] = useState({});
    const setLogin = useSetRecoilState(loginAtom);
    const setMenuClick = useSetRecoilState(menuAtom);
    const setProfileClick = useSetRecoilState(profileAtom);
    useEffect(()=>{
        // get userValidate is better than this
        if(localStorage.getItem("token")){
            setLogin(true);
        }
        else{
            setLogin(false);
        }
    },[])

    useEffect(()=>{
        const getdata = async ()=>{
            try{
                const response = await axios.get(`${BackendURL}drone/item/${id}`,{
                    headers:{
                        "Authorization":localStorage.getItem("token")
                    }
                })
                console.log(response.data.Drone[0])
                setDrone(response.data.Drone[0]);
            }catch(e){
                navigate("/");
            }
        }
        getdata();
    },[id])

    const handleclick=(id)=>{
        console.log("hii")
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

    return(
        <div className="w-100%" >
            <Appbar />
            <div className="pt-20" onClick={()=>{
            setMenuClick(false);
            setProfileClick(false);
        }}>
                <div className="grid grid-cols-5 max-md:grid-cols-1 md:m-4 w-full pb-2">
                    <div className="col-span-3 md:border-r h-[600px] max-md:h-[400px] w-full">
                        <img src={img} alt="loading" className="max-md:border-b h-full w-full"/>
                    </div>
                    <div className="col-span-2 ml-4 pt-8">
                        <div className="font-bold text-4xl">{drone.Title}</div>
                        <div className="font-semibold text-1xl mt-8 text-slate-600">{drone.Description}</div>
                        <div className="text-2xl font-bold flex mt-10">{drone.Price} 
                            <div className="flex flex-col justify-center"><PiCurrencyInrBold  /></div>
                        </div>
                        <button onClick={()=>handleclick(id)} className="bg-slate-300 border px-4 py-2 rounded-md mt-6 hover:border-black active:bg-slate-400">Add To Cart</button>
                    </div>
                </div>
                <div className="border-t pt-4">Review</div>
            </div>
            <div>
             <Footer />
            </div>
        </div>
    )
}