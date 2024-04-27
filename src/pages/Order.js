import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { loginAtom, menuAtom, profileAtom } from '../stateMannagement';
import { Appbar } from '../components/Appbar';
import Card from '../components/Card';
import "../components/styles/Profile.css"
import { BackendURL } from '../config';
import { Footer } from '../components/Footer';
const Order = () => {
    const setLogin = useSetRecoilState(loginAtom);
    const navigate = useNavigate();
    const [order, setorder] = useState([])
    const setMenuClick = useSetRecoilState(menuAtom);
    const setProfileClick = useSetRecoilState(profileAtom);
    useEffect(() => {
        // get userValidate is better than this
        if (localStorage.getItem("token")) {
            setLogin(true);
        }
        else {
            setLogin(false);
            navigate("/");
        }
    }, [setLogin, navigate])
    useEffect(()=>{
        fetch(`${BackendURL}order/getorder`,{
            headers:{
                "Content-Type":"application/json",
                "Authorization":localStorage.getItem("token")
            }
        }).then(res=>res.json()).then((data)=>{
            console.log(data)
            setorder(data.data)
        })
    },[])
    return (
        <div>
            <Appbar />
            <div onClick={()=>{
            setMenuClick(false);
            setProfileClick(false);
            }}>
                <div className=' flex flex-col justify-center items-center w-[100vw] h-fit  pt-16'>
                    <div className='pt-14 text-2xl uppercase font-bold'>Your Orders</div>
                    <div className='divvv flex flex-col  items-center  w-[96vw] h-[700px] md:w-[90vw] md:h-[60vh] lg:w-[60vw] border  rounded-lg mt-12 mb-10  p-2 overflow-y-scroll hi' style={{ boxShadow: " 4px 4px 1px grey" }}>
                        {order.length === 0 ? <div className='mt-12 capitalize font-bold'>You have not ordered anything yet</div> :
                            order.map((item) => {
                                return <Card Name={item.Name} OrderId={item.OrderId} address={item.address} phoneNo={item.phoneNo} pincode={item.pincode} product={item.product} referenceNo={item.referenceNo} status={item.status}/>
                            }
                            )
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Order