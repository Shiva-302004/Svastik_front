import { Appbar } from "../components/Appbar"
import { Svastik } from "../components/Svastik";
import video from "../assets/video/video1.mp4"
import { useSetRecoilState } from "recoil";
import { menuAtom, profileAtom } from "../stateMannagement";
import { AllDrone } from "../components/AllDrone";
import { Footer } from "../components/Footer";

export const LandingPage = ({login})=>{
    const setMenuClick = useSetRecoilState(menuAtom);
    const setProfileClick = useSetRecoilState(profileAtom);
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