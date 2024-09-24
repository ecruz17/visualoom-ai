import { Generation } from "@/interfaces/Generation";
import axios, { AxiosError } from "axios";

const apiUrl = 'https://3gjy9o13n7.execute-api.us-east-1.amazonaws.com/dev/imageGenerator?prompt=';

export const generateImage = async (prompt: string) => { 
  try {
    const response: Generation = await axios.get(apiUrl + encodeURIComponent(prompt));
    return response;
  } catch (error: unknown) {
    //@ts-ignore
    return (error.response.data);
  }
}
