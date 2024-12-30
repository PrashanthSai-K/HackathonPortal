import axios from "axios";

const backendUrl = "https://mklcwgkh-4500.inc1.devtunnels.ms/api"

export const userGetRequest = async (url) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${backendUrl}${url}`,{
      headers: {
        Authorization: `${token}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const adminGetRequest = async (url) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${backendUrl}${url}`,{
      headers: {
        Authorization: `${token}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const adminPostRequest = async (url, data) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${backendUrl}${url}`, data, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const userPostRequest = async (url, data) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${backendUrl}${url}`, data, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};


