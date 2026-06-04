import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:8080/api/",
    withCredentials: true
});


//  attach access token in every request
API.interceptors.request.use((req) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});


// handle token expire

const PUBLIC_ROUTES = ["/login", "/register", "/refresh"];

API.interceptors.response.use((response) => response,
    async (error) => {
        const originalRequest = error.config;

        // skip public APIs
        if (PUBLIC_ROUTES.some(route => originalRequest.url.includes(route))) {
            return Promise.reject(error);
        }


        // only handle 401
        if (error.response?.status !== 401) {
            return Promise.reject(error);
        }

        // prevent infinite loop
        if (originalRequest._retry) {
            return Promise.reject(error);
        }

       
        if (originalRequest._retry) {
            return Promise.reject(error);
        }

        originalRequest._retry = true;

        try {
            // Call refresh API
            const refreshResponse = await axios.get(
                "http://localhost:8080/api/refresh",
                { withCredentials: true }
            );

            const newAccessToken = refreshResponse.data.accessToken;

            // Save new token
            localStorage.setItem("accessToken", newAccessToken);

            // Update failed request
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

            //  Retry original request
            return API(originalRequest);

        } catch (refreshError) {
            //  Refresh failed → logout user
            localStorage.removeItem("accessToken");
            window.location.href = "/login";

            return Promise.reject(refreshError);
        }
    }
);


export default API
