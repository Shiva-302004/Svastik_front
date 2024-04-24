
import { useRecoilValue, useSetRecoilState } from "recoil"
import "./styles/Profile.css"
import { loginAtom, profileAtom } from "../stateMannagement"
import { Link, useNavigate } from "react-router-dom"

export const Profile = ()=>{
    const navigate = useNavigate();
    const setLogin = useSetRecoilState(loginAtom);
    const profileClick = useRecoilValue(profileAtom);
    const setProfileClick = useSetRecoilState(profileAtom);
    return(
        <div className={`${(!profileClick)?"profile":"profile profileActive"}`}>
            <div className="flex flex-col text-white space-x-4 space-y-6 pl-8 pr-8 pt-12 pb-6 rounded-bl-lg shadow-lg shadow-slate-600 bg-slate-500">
                <button className="flex justify-start pl-4 hover:text-yellow-800">Profile</button>
                <Link className="flex justify-start hover:text-yellow-800" to="/cart">Cart</Link>
                <button className="flex justify-start hover:text-yellow-800">Order</button>
                <button onClick={()=>{
                    localStorage.clear();
                    setLogin(false);
                    navigate("/");
                    setProfileClick(!profileClick);
                }} className="flex justify-start hover:text-yellow-800">Log Out</button>
            </div>
        </div>
    )
}