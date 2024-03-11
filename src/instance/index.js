import axios from "axios";
import { jwtDecode } from "jwt-decode";

const token = localStorage?.getItem("token")

if (token) {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        window.localStorage.clear();
        window.location.reload();
    }
}

const instance = axios.create({
    baseURL: "http://192.168.100.3:8080/user/",
    headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
        Authorization: `Bearer ${token}`,
    },
});

export default instance