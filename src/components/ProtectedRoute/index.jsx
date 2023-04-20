import { Navigate } from "react-router"
import { useSelector } from "react-redux"


function ProtectedRoute({ children }) {
 const { user } = useSelector(
        (state) => state.auth)

    if (!user) {
        return <Navigate to="/login" />
    }

  return children
}

export default ProtectedRoute