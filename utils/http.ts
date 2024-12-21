"use server"
import axios from "axios";


const http = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        "Content-Type": "application/json",
    }
}) 

export default http;