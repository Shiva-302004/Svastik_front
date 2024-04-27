import { Appbar } from "../components/Appbar"
import { Svastik } from "../components/Svastik";
import video from "../assets/video/video1.mp4"
import { useSetRecoilState } from "recoil";
import { loginAtom, menuAtom, profileAtom } from "../stateMannagement";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AllDrone } from "../components/AllDrone";
import { Footer } from "../components/Footer";

export const Dashboard = ()=>{
    const setMenuClick = useSetRecoilState(menuAtom);
    const setProfileClick = useSetRecoilState(profileAtom);
    const navigate = useNavigate();
    const setLogin = useSetRecoilState(loginAtom);
    
    useEffect(()=>{
        // get userValidate is better than this
        if(localStorage.getItem("token")){
            setLogin(true);
        }
        else{
            setLogin(false);
            navigate("/");
        }
    },[])
    return(
        <div className="w-100% ">
            <Appbar />
            <div className="w-full" onClick={()=>{
                setMenuClick(false);
                setProfileClick(false);
            }}>
                <div className="h-screen w-full bg-white">
                    <div className="h-[84%] max-md:h-[80%] w-full">
                        <Svastik />
                        {/* <VideoPlayer /> */}
                        <video autoPlay muted loop src={video} className="h-full w-full object-cover" />
                    </div>
                    <div className="h-[16%] max-md:h-[20%] w-full bg-slate-600 grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1">
                        <div className="h-full  flex flex-col justify-center">
                            <div className="flex justify-center text-white text-1xl">Trusted Brand</div>
                        </div>
                        <div className="h-full  flex flex-col justify-center">
                            <div className="flex justify-center text-white text-1xl">Deliver All Across India</div>
                        </div>
                        <div className="h-full  flex flex-col justify-center">
                            <div className="flex justify-center text-white text-1xl">Quick Services</div>
                        </div>
                        <div className="h-full  flex flex-col justify-center">
                            <div className="flex justify-center text-white text-1xl">Custmor Support</div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-gray-200 ">
                    <div className="pl-2 text-3xl font-semibold text-gray-700 py-4 flex justify-center">Product</div>
                    <AllDrone />
                </div>
                <div className="h-screen w-full bg-gray-500">
                    <div className="pl-2 text-3xl font-semibold  text-gray-700 bg-gray-200  py-4 flex justify-center">About</div>
                </div>
            </div>
            <div>
             <Footer />
            </div>
        </div>
    )
}
