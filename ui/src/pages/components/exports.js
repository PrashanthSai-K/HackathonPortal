import axios from "axios";

const backendUrl = "https://w2tpzms2-4500.inc1.devtunnels.ms/api"

export const userGetRequest = async (url) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${backendUrl}${url}`, {
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
    const response = await axios.get(`${backendUrl}${url}`, {
      headers: {
        Authorization: `${token}`,
      },
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const adminPostRequest = async (url, data, headers = {}) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${backendUrl}${url}`, data, {
      headers: {
        Authorization: `${token}`,
        ...headers
      },
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const adminPutRequest = async (url, data) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.put(`${backendUrl}${url}`, data, {
      headers: {
        Authorization: `${token}`,
      },
      withCredentials: true,
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

export const userPutRequest = async (url, data) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.put(`${backendUrl}${url}`, data, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};


export const deBounce = (fn, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), timeout);
  };
};