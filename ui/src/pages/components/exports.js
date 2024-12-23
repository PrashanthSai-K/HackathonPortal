
import axios from "axios";

const backendUrl = "http://localhost:4500/api"

export const userGetRequest = async(url ) => {
    try{
        const response = await axios.get(`${backendUrl}${url}`);
        return response
    }catch(error){
        throw error
    }
}

export const adminGetRequest = async(url) => {
    try{
        const response = await axios.get(`${backendUrl}${url}`);
        return response
    }catch(error){
        throw error
    }
}

export const adminPostRequest = async(url, data) => {
    try{
        const response = await axios.get(`${backendUrl}${url}`, data);
        return response
    }catch(error){
        throw error
    }
}

export const userPostRequest = async(url, data) => {
    try{
        console.log(`${backendUrl}${url}`);
        const response = await axios.post(`${backendUrl}${url}`, data);
        return response
    }catch(error){
        throw error
    }
}