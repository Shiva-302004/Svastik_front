import React, { useEffect, useState } from 'react'
import { Appbar } from '../components/Appbar'
import { loginAtom } from '../stateMannagement';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [cart, setcart] = useState([])
    // const [message,setmessage]=useState("")
    const setLogin = useSetRecoilState(loginAtom);
    const navigate = useNavigate();
    useEffect(()=>{
        // get userValidate is better than this
        if(localStorage.getItem("token")){
            setLogin(true);
        }
        else{
            setLogin(false);
            navigate("/");
        }
    },[localStorage.getItem("token")])
    const handleMinus=(id)=>{
        fetch("http://localhost:3000/api/v1/user/cart/removefromcart",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":localStorage.getItem("token")
                },
                body:JSON.stringify({DroneId:id})

            }).then(res=>res.json()).then((data)=>{
                console.log(data)
                if(data.success){
                    setcart(data.data)
                }else{
                    const arr=cart.map((item)=>{
                        if(item.DroneId===data.data.DroneId){
                            return data.data
                        }
                        else{
                            return item
                        }
                    })
                    setcart(arr)
                }

            })
    }
    useEffect(() => {
        if(localStorage.getItem("token")){
            fetch("http://localhost:3000/api/v1/user/cart/getcart", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem("token")
                }
            }).then(res => res.json()).then((data) => {
                console.log(data)
                if(data.success && data.data.length > 0){
                    setcart(data.data)
                }
    
            })
        }
    }, [localStorage.getItem("token")])
    const handlePlus=(id)=>{
        if(localStorage.getItem("token")){
            fetch("http://localhost:3000/api/v1/user/cart/addtocart",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":localStorage.getItem("token")
                },
                body:JSON.stringify({DroneId:id})

            }).then(res=>res.json()).then((data)=>{

                    console.log(data)
                    const arr=cart.map((item)=>{
                        if(item.DroneId===data.data.DroneId){
                            return data.data
                        }else{
                            return item
                        }
                    })
                    setcart(arr)

            })
        } 
    }

    return (
        <div>
            <Appbar />
            <div className=' flex flex-col justify-center items-center w-[100vw] h-fit  pt-16'>
                <div className='pt-14 text-2xl uppercase font-bold'>Your Cart</div>
                <div className='divvv flex flex-col justify-center items-center  w-[96vw] h-[65vh] md:w-[90vw] md:h-[60vh] lg:w-[60vw] border  rounded-lg mt-12 ' style={{boxShadow:" 4px 4px 1px grey"}}>
                    {cart.length===0?<div>NOTHING IS PRESENT</div>:
                    cart.map((item) => {
                        return <div key={item._id} className=" flex w-[89vw] h-[30vh] md:w-[85vw] md:h-[20vh] lg:w-[55vw] border border-slate-400 mt-2 rounded-lg">
                            <div className='w-[40%] h-[90%] flex justify-center items-center border m-2'>pic</div>
                            <div className='ml-2 md:ml-4 mt-6 flex flex-col md:mt-2'>
                                <div>{item.Title}</div>
                                <div className='flex mt-3 '>
                                    <button className='bg-blue-400 p-[1px] h-5 text-[14px] w-4 hover:bg-blue-200 rounded-md' onClick={()=>handlePlus(item.DroneId)}>+</button>
                                    <span className='px-2 pb-[2px] text-[18px]'>{item.Count}</span>
                                    <button className='bg-blue-400 p-[1px] h-5 text-[14px] w-4 hover:bg-blue-200 rounded-md' onClick={()=>handleMinus(item.DroneId)}>-</button>
                                </div>
                                <div className='flex flex-col md:flex-row mt-2'>

                                <div className='mt-3 md:mt-1 text-sm'>Price: {item.Price/item.Count}</div>
                                <div className='mt-3 md:mt-1 md:ml-8 text-sm'>Total Amount: {item.Price}</div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cart