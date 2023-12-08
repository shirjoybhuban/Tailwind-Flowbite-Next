import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const logoutUser = async () => {
    try {
        cookies.remove("shipSimpleToken");
        cookies.remove("authStatus");
        return true;
    } catch (error) {
        return false;
    }
};

const axiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_API_URL}`,
});

export const token = cookies.get("shipSimpleToken");

axiosInstance.interceptors.response.use(
    function (response) {
        if (!token) {
            logoutUser();
            return Promise.reject("user is logged out");
        }
        return response;
    },
    function (error) {
        // status will be unavailable if server is down
        const status = error.response ? error.response.status : -1;
        if (!error.response) {
            console.error("Hush backend might be down");
        }
        switch (status) {
            case 401:
                console.error("401 error: unauthorised access", error ? error.response : error);
                // logoutUser();
                break;
            case 403:
                //Todo : show a popup to user explaining that he doesn't have suffiicient privileges to see the resource
                console.error(
                    "403 error: forbidden access",
                    error ? error.response : error
                );
                // logoutUser();
                break;
            default:
                break;
        }
        return Promise.reject(error);
    }
);
axiosInstance.defaults.headers.common["Authorization"] = "Bearer" + " " + token;
export default axiosInstance;
