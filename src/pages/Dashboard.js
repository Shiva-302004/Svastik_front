import { Appbar } from "../components/Appbar"
import { Svastik } from "../components/Svastik";
import video from "../assets/video/video1.mp4"
import { useSetRecoilState } from "recoil";
import { loginAtom, menuAtom, profileAtom } from "../stateMannagement";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ItemComp } from "../components/ItemComp";
import { AllDrone } from "../components/AllDrone";
import { Footer } from "../components/Footer";

export const Dashboard = ({login})=>{
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
                <div className="h-[84%] w-full">
                    <Svastik />
                    {/* <VideoPlayer /> */}
                    <video autoPlay muted loop src={video} className="h-full w-full object-cover" />
                </div>
                <div className="h-[16%] w-full bg-slate-600">2</div>
                </div>
                <div className="h-screen w-full bg-slate-500">About</div>
                <div className="w-full bg-gray-700 ">
                    <div className="ml-2 text-4xl font-bold text-white py-4">Product</div>
                    <AllDrone />
                </div>
            </div>
            <div>
             <Footer />
            </div>
        </div>
    )
}
