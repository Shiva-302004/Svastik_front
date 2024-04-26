
import { useRecoilValue } from "recoil"
import "./styles/menu.css"
import { menuAtom } from "../stateMannagement"
import { useNavigate } from "react-router-dom";

export const Menu = ()=>{
    const menuClick = useRecoilValue(menuAtom);
    const navigate = useNavigate();
    return (
        <div className={`${(!menuClick)?"menu":"active menu"}`} >
            <div className="flex flex-col text-white space-x-4 space-y-6 pt-12 pb-6 rounded-b-lg h-screen shadow-lg shadow-slate-600 bg-slate-500">
                <button onClick={()=>navigate("/dashboard")} className="flex justify-start pl-4 hover:text-yellow-800">Menu</button>
                <button className="flex justify-start hover:text-yellow-800">About</button>
                <button className="flex justify-start hover:text-yellow-800">Contact</button>
                <button className="flex justify-start hover:text-yellow-800">Product</button>
                <button className="flex justify-start hover:text-yellow-800">Accessories</button>
                <button className="flex justify-start hover:text-yellow-800">Buy</button>
            </div>
        </div>
    )
}