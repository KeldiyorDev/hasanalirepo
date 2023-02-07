import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
        // "Authorization": "Bearer " + localStorage.getItem("token");
        'Content-Type': "application/x-www-form-urlencoded"
    }
});

export const urlFile = "http://localhost:8080/";
