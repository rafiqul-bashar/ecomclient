
import { useNavigate } from 'react-router-dom'

export default function Protected({ children,user }) {
    console.log(user);
    const navigate = useNavigate()
    if(!user){
        return navigate("/auth")
    }
    else {
        return children
    }
}
