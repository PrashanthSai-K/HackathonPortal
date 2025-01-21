import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const handleLogout = () => {
  localStorage.removeItem("token");
  setTimeout(() => {
    window.location.replace("/");
  }, 2000);
};

const backendUrl = "https://w2tpzms2-4500.inc1.devtunnels.ms/api";

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
    if (error.response.status === 401) {
      toast.error(error.response.data.message);
      
      handleLogout();
    }
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
    if (error.response.status === 401) {
      toast.error(error.response.data.message);
      handleLogout();
    }
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
    if (error.response.status === 401) {
      toast.error(error.response.data.message);
      handleLogout();
    }
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
    if (error.response.status === 401) {
      toast.error(error.response.data.message);
      handleLogout();
    }
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
    if (error.response.status === 401) {
      toast.error(error.response.data.message);
      // handleLogout();
      console.log(error);

    }
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
    if (error.response.status === 401) {
      toast.error(error.response.data.message);
      handleLogout();
    }
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

export const updateLogout = async () => {
  try {
    const response = await userPostRequest("/updateLogout");

    if (response.status === 201) {
      console.log(response.data.message);
    } else {
      console.log("Failed to update logout:", response.data.message);
    }
  } catch (error) {
    console.error("Error updating logout information:", error);
  }
};
