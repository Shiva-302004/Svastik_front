

import { useNavigate } from "react-router-dom";
import image from "../assets/logo1.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { Menu } from "./Menu";
import { Profile } from "./Profile";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { loginAtom, menuAtom, profileAtom } from "../stateMannagement";


export const Appbar = ()=>{
    const login = useRecoilValue(loginAtom)
    const setLogin = useSetRecoilState(loginAtom);
    const [menuClick, setMenuClick] = useRecoilState(menuAtom); 
    const [profileClick, setProfileClick] = useRecoilState(profileAtom); 
    const navigate = useNavigate();
    if(login === false){
        return (
            <div className="fixed bg-gray-800 w-full z-50">
                <div className="max-sm:hidden w-full shadow-lg p-2 grid grid-cols-12 w-100%">
                    <div className=" col-span-1 flex flex-col justify-center">
                        <img className="ml-3 h-[35px] w-[65px]" src={image} alt="" />
                    </div>
                    <div className="col-span-8">
                        <div className="flex justify-end h-full text-white font-semibold max-md:font-bold max-md:text-[12px] max-lg:text-sm">
                            <button onClick={()=>navigate("/dashboard")} className="max-md:ml-2 ml-8 mr-2 hover:text-yellow-800">Home</button>
                            <button className="max-md:ml-2 ml-8 mr-2 hover:text-yellow-800">About</button>
                            <button className="max-md:ml-2 ml-8 mr-2 hover:text-yellow-800">Contact</button>
                            <button className="max-md:ml-2 ml-8 mr-2 hover:text-yellow-800">Product</button>
                            <button className="max-md:ml-2 ml-8 mr-2 hover:text-yellow-800">Accessories</button>
                        </div>
                    </div>
                    <div className=" col-span-2">
                        <div className="grid grid-cols-2 h-full max-md:text-[12px] max-lg:text-sm text-blue-500">
                            <div className=" flex justify-center">
                                <button className="hover:text-blue-800 hover:underline">Help</button>
                            </div>
                            <div className=" flex justify-center">
                                <button onClick={()=>{
                                    navigate("/user/signup");
                                }} className="hover:text-blue-800 hover:underline">Register</button>
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-1">
                        <div className="flex flex-col justify-center  h-full">
                            <div className=" flex flex-col  justify-center">
                                <button className="max-md:text-[8px] max-lg:text-[10px] text-sm text-white font-semibold bg-blue-500 hover:bg-blue-800 hover:text-yellow-800 border h-full max-md:rounded-md rounded-lg max-md:pt-0 max-md:pb-0 max-md:pl-1 max-md:pr-1 p-2">Buy</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                {/* mobile view */}
                <div className="max-sm:grid hidden w-full shadow-lg p-2 pb-4  grid-cols-5">
                    <Menu />
                    <div className=" col-span-1">
                        <div className=" flex flex-col  justify-center h-full">
                            <div className="flex justify">
                                <button onClick={()=>{
                                    setMenuClick(!menuClick);
                                }} className="text-2xl text-black font-bold hover:text-yellow-800 ml-4"><RxHamburgerMenu /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 flex flex-col justify-center">
                        <div className="flex">
                            <img className="h-[30px] w-[60px]" src={image} alt="" />
                        </div>
                    </div>
                    <div className=" col-span-1">
                        <div className="grid grid-cols-2 h-full max-md:text-[12px] max-lg:text-sm text-blue-500">
                            <div className=" flex justify-center">
                                <button onClick={()=>{
                                    navigate("/user/signup");
                                }} className="hover:text-blue-800 hover:underline">Register</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="fixed bg-gray-800 w-full z-50">
                <Profile />
                <div className="max-sm:hidden w-full shadow-lg p-2 grid grid-cols-12 w-100%">
                    <div className=" col-span-1 flex flex-col justify-center">
                        <img className="ml-3 h-[35px] w-[65px]" src={image} alt="" />
                    </div>
                    <div className="col-span-8">
                        <div className="flex justify-end h-full text-white font-semibold max-md:font-bold max-md:text-[12px] max-lg:text-sm">
                            <button onClick={()=>navigate("/dashboard")} className="max-md:ml-2 ml-8 mr-2 hover:text-yellow-800">Home</button>
                            <button className="max-md:ml-2 ml-8 mr-2 hover:text-yellow-800">About</button>
                            <button className="max-md:ml-2 ml-8 mr-2 hover:text-yellow-800">Contact</button>
                            <button className="max-md:ml-2 ml-8 mr-2 hover:text-yellow-800">Product</button>
                            <button className="max-md:ml-2 ml-8 mr-2 hover:text-yellow-800">Accessories</button>
                        </div>
                    </div>
                    <div className=" col-span-1">
                        <div className="grid grid-cols-1 h-full max-md:text-[12px] max-lg:text-sm text-blue-500">
                            <div className=" flex justify-center">
                                <button className="hover:text-blue-800 hover:underline">Help</button>
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-1">
                    <div className="grid grid-cols-1 h-full max-md:text-[12px] max-lg:text-sm text-white mr-2">
                                <div className=" flex justify-center">
                                    <button onClick={()=>{
                                        localStorage.clear();
                                        setLogin(false);
                                        navigate("/");
                                    }} className="hover:text-blue-800 hover:underline">Log Out</button>
                                </div>
                            </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex justify-center h-full max-md:text-[12px] max-lg:text-sm text-blue-500">
                            <div className=" flex justify-center h-[40px] w-[40px] rounded-full bg-slate-500">
                                <button onClick={()=>{
                                    setProfileClick(!profileClick);
                                }} className="hover:text-blue-800 hover:underline h-full w-full"><span className="text-white font-bold">{localStorage.getItem("userName")?localStorage.getItem("userName")[0]:"D"}</span></button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile view */}
                <div className="max-sm:grid hidden w-full shadow-lg p-2  grid-cols-5">
                    <Menu />
                    <Profile />
                    <div className=" col-span-1">
                        <div className=" flex flex-col  justify-center h-full">
                            <div className="flex justify">
                                <button onClick={()=>{
                                    setMenuClick(!menuClick);
                                }} className="text-2xl text-black font-bold hover:text-yellow-800 ml-4"><RxHamburgerMenu /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 flex flex-col justify-center">
                        <div className="flex">
                            <img className="h-[30px] w-[60px]" src={image} alt="" />
                        </div>
                    </div>
                    <div className=" col-span-1">
                    <div className=" col-span-1">
                        <div className="flex justify-end h-full max-md:text-[12px] max-lg:text-sm text-blue-500">
                            <div className=" flex justify-center h-[40px] w-[40px] rounded-full bg-slate-500">
                                <button onClick={()=>{
                                    setProfileClick(!profileClick);
                                }} className="hover:text-blue-800 hover:underline h-full w-full"><span className="text-white font-bold">D</span></button>
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}