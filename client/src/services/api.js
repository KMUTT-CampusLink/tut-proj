import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export const fetchIds = async () => {
  return instance.get("/video/fetch").then((res) => res.data);
};

export const uploadFiles = async (form_data) => {
  return instance.postForm("/video/upload", form_data).then((res) => res.data);
};
