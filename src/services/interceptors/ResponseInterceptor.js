import axios from "axios";
// import { useContext } from "react";
import { useNavigate } from "react-router-dom"
// import { AuthContext } from "../../contexts/Auth";

export function ResponseInterceptor() {
    let navigate = useNavigate();
    // const { handleLogout } = useContext(AuthContext)
    const handleLogout = () => { } //add Handle Logout using context
    setupInterceptors(navigate, handleLogout);
    return;
}

const setupInterceptors = (navigate, handleLogout) => {
    axios.interceptors.response.use(
        function (response) {
            // Do something with response data
            return response;
        },
        function (error) {
            // Do something with response error
            if (error.response) {
                switch (error.response.status) {
                    case 403 || 401:
                        handleLogout()
                        navigate('/login')
                        break
                    default: return
                }
            }
            return Promise.reject(error);
        }
    );
};

export default setupInterceptors;