
import { Navigate,Outlet } from 'react-router'

export default function ProtectedRoute({user,children}) {
    if(!user){
        return <Navigate to="/auth"/>
    } else {
        return <Outlet/>
    }
}
