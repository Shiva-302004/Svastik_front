import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import video from "../assets/video/video2.mp4"
import { useSetRecoilState } from "recoil";
import { loginAtom } from "../stateMannagement";
import axios from "axios";
import { BackendURL } from "../config";

export function Signin(){
    const [Email , setEmail] = useState("")
    const [Password , setPassword] = useState("")
    const setLogin = useSetRecoilState(loginAtom);
    const navigate = useNavigate();

    return <div className="h-screen w-full">
        {/* desktop */}
        <div className="max-sm:hidden bg-white h-screen justify-center grid grid-cols-2">
            <div className="flex flex-col justify-center">
                <div className="w-full flex justify-end">
                    <div className="w-80 bg-blue-500 text-center h-[450px] shadow-2xl rounded-l-2xl shadow-blue-700">
                    <video className="h-full w-full object-cover rounded-l-2xl" loop autoPlay muted src={video}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="w-80 bg-white text-center p-2 h-[450px] px-4  shadow-2xl rounded-r-2xl shadow-slate-700">
                    <Heading label={"Sign in"}/>
                    <SubHeading label={"Enter your credentials to access your account"}/>
                    <InputBox onChange={ e => setEmail(e.target.value)} label={"Email"} placeholder={"Enter your email"} type="email"/>
                    <InputBox onChange={ e => setPassword(e.target.value)} label={"Password"} placeholder={"Password"} type="password"/>
                    <div className="w-full flex justify-center">
                        <div className="pt-4 w-28">
                            <Button onPress={async ()=>{
                                const response = await axios.post(`${BackendURL}user/signin`,{
                                    UserName: Email,
                                    Password:Password
                                });
                                console.log(response.data);
                                if(response.data.response === "user login successfully"){
                                    localStorage.setItem("token", response.data.token);
                                    localStorage.setItem("userName", response.data.UserName);
                                    setLogin(true);
                                    navigate("/dashboard")
                                }
                                else{
                                    alert(response.data.response);
                                }
                            }} label={"Sign in"} />
                        </div>
                    </div>
                    <BottomWarning label={"New User?"} linkText={"Sign up"} to={"/user/signup"}/>
                </div>
            </div>
        </div>
        {/* mobile */}
        <div className="max-sm:flex hidden bg-white h-screen justify-center ">
            <div className="flex flex-col justify-top mt-28">
                <div className="rounded-lg w-80 bg-white text-center p-2 h-max px-4 shadow-lg shadow-slate-800">
                    <Heading label={"Sign in"}/>
                    <SubHeading label={"Enter your credentials to access your account"}/>
                    <InputBox onChange={ e => setEmail(e.target.value)} label={"Email"} placeholder={"abc@gmail.com"} type="email"/>
                    <InputBox onChange={ e => setPassword(e.target.value)} label={"Password"} placeholder={"******"} type="password"/>
                    <div className="w-full flex justify-center">
                        <div className="pt-4 w-28">
                            <Button onPress={async ()=>{
                                const response = await axios.post(`${BackendURL}user/signin`,{
                                    UserName: Email,
                                    Password:Password
                                });
                                console.log(response.data);
                                if(response.data.response === "user login successfully"){
                                    localStorage.setItem("token", response.data.token);
                                    localStorage.setItem("userName", response.data.UserName);
                                    setLogin(true);
                                    navigate("/dashboard")
                                }
                                else{
                                    alert(response.data.response);
                                }
                            }} label={"Sign in"} />
                        </div>
                    </div>
                    <BottomWarning label={"New User?"} linkText={"Sign up"} to={"/user/signup"}/>
                </div>
            </div>
        </div>
    </div>
}
