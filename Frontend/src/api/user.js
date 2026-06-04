import API from "./axios";

// login
export const loginUser = async (data) => {
    const res = await API.post("/login", data);
    return res.data;
};

// register
export const registerUser = async (data) => {
    const res = await API.post("/register", data);
    return res.data;
}


// logout 
export const logoutUser = async () => {
    await API.post("/logout");

}

