import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from './AuthProvider'


const ProtectedRoute = ({ children }) => {
    const { user, loading, access_token } = useContext(AuthContext)
    if (loading) {
        return <h1>loading...</h1>
    }

    if (!user && !loading) {
        return <Navigate to="/login" replace={true} />
    }

    return children;
};
export default ProtectedRoute;