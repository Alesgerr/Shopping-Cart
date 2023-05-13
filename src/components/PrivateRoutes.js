// import { Navigate, useLocation } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function PrivateRoutes({children}){
//    const { user } = useAuth()
//    const location = useLocation()
//    if(!user) {
//       return <Navigate to='/auth/login' state={{
//          return_url: location.pathname + location.search 
//       }}/>
//    } 
//    return children
// }