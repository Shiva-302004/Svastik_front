import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import video from "../assets/video/video3.mp4"
import { useSetRecoilState } from "recoil";
import { loginAtom } from "../stateMannagement";
import { BackendURL } from "../config";

export function Signup(){
    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const setLogin = useSetRecoilState(loginAtom);

    const navigate = useNavigate();

    return <div className="h-screen w-full">
        {/* desktop */}
        <div className="max-sm:hidden bg-white h-screen justify-center grid grid-cols-2">
            <div className="flex flex-col justify-center">
                <div className="flex w-full justify-end">
                    <div className="w-80 bg-blue-500 text-center h-[540px] shadow-2xl rounded-l-2xl shadow-blue-700">
                    <video className="h-full w-full object-cover rounded-l-2xl" loop autoPlay muted src={video}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <div className="border bg-white w-80 text-center p-2 h-[540px] px-4 shadow-2xl rounded-r-2xl shadow-slate-700">
                    <Heading label={"Sign Up"}/>
                    <SubHeading label={"Enter your infromation to create an account"}/>
                    <InputBox onChange={ e => setName(e.target.value)}label={"Name"} placeholder={"Enter your name"} type={"text"}/>
                    <InputBox onChange={ e => setEmail(e.target.value)} label={"Email"} placeholder={"Enter your email"} type={"email"}/>
                    <InputBox onChange={ e => setPassword(e.target.value)} label={"Password"} placeholder={"Password"} type={"password"}/>
                    <div className="w-full flex justify-center">
                        <div className="pt-3 w-28">
                            <Button onPress={async ()=>{
                                const response = await axios.post(`${BackendURL}user/signup`,{
                                    UserName: Email,
                                    Name: Name,
                                    Password:Password
                                });
                                if(response.data.message === "user created successfully"){
                                    localStorage.setItem("token", response.data.token);
                                    localStorage.setItem("userName", response.data.UserName);
                                    setLogin(true);
                                    navigate("/dashboard")
                                }
                                else{
                                    alert(response.data.message);
                                }
                            }} label={"Sign up"}/>
                        </div>
                    </div>
                    <BottomWarning label={"Allready have an account?"} linkText={"Sign in"} to={"/user/signin"}/>
                </div>
            </div>
        </div>
        {/* mobile  */}
        <div className="max-sm:flex hidden bg-white h-screen justify-center">
            <div className="flex flex-col justify-top mt-28">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 shadow-lg shadow-slate-800">
                    <Heading label={"Sign Up"}/>
                    <SubHeading label={"Enter your infromation to create an account"}/>
                    <InputBox onChange={ e => setName(e.target.value)}label={"Name"} placeholder={"Jhon"} type={"text"}/>
                    <InputBox onChange={ e => setEmail(e.target.value)} label={"Email"} placeholder={"abc@gmail.com"} type={"email"}/>
                    <InputBox onChange={ e => setPassword(e.target.value)} label={"Password"} placeholder={"********"} type={"password"}/>
                    <div className="w-full flex justify-center">
                        <div className="pt-3 w-28">
                            <Button onPress={async ()=>{
                                const response = await axios.post(`${BackendURL}user/signup`,{
                                    UserName: Email,
                                    Name: Name,
                                    Password:Password
                                });
                                if(response.data.message === "user created successfully"){
                                    localStorage.setItem("token", response.data.token);
                                    localStorage.setItem("userName", response.data.UserName);
                                    setLogin(true);
                                    navigate("/dashboard")
                                }
                                else{
                                    alert(response.data.message);
                                }
                            }} label={"Sign up"}/>
                        </div>
                    </div>
                    <BottomWarning label={"Allready have an account?"} linkText={"Sign in"} to={"/user/signin"}/>
                </div>
            </div>
        </div>
    </div>
}