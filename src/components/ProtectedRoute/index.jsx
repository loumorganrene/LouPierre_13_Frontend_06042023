import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCurrentToken } from "../../features/auth/auth.slice"


function ProtectedRoute() {

    const token = useSelector(selectCurrentToken)
    console.log(token)
    const location = useLocation()
    console.log(location)

    return (
        token
            ? <Outlet />
            : <Navigate to='/login' state={{ from: location }} replace />
    )
}

export default ProtectedRoute