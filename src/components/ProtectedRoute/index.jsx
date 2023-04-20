import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect } from "react"


function ProtectedRoute({ children }) {

 const { user, isSuccess } = useSelector(
        (state) => state.auth)

const navigate = useNavigate()

    useEffect(()=>{
        if (user === null || !isSuccess) {
            return navigate('/login')
        }
    }, [user, isSuccess, navigate])

  return children
}

export default ProtectedRoute