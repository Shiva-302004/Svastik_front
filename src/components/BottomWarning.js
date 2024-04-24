import { Link } from "react-router-dom";


export function BottomWarning({label,linkText ,to}){
    return(
        <div className="flex justify-center text-sm py-2">
            <div>
                {label}
            </div>
            <Link className="pointer cursor-pointer underline pl-1 hover:text-blue-500" to={to}>
                {linkText}
            </Link>
        </div>
    )
}
