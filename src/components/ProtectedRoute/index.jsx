import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCurrentToken } from "../../features/auth/auth.slice"


function ProtectedRoute() {
    const location = useLocation()
    /* Global state */
    const token = useSelector(selectCurrentToken)

    return (
        token
            ? <Outlet />
            : <Navigate to='/' state={{ from: location }} replace />
    )
}

export default ProtectedRoute