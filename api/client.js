import axios from "axios";
import { backendUrl } from "../constants";

export const axiosClient = axios.create({
  baseURL: backendUrl,
});

export async function resolver(axiosResponse) {
  try {
    const response = await axiosResponse;

    if (response?.status === 200 || response?.status === 201) {
      return response;
    }
    return response;
  } catch (error) {
    console.log(error);
    return new Error(error);
  }
}
