import { Generation } from "@/interfaces/Generation";
import axios from "axios";

const apiUrl = 'https://dgxhimhvak.execute-api.us-east-1.amazonaws.com/Dev/imageGeneratorAPI?prompt=';
// const testUrl = 'https://picsum.photos/id/';

export const generateImage = async (prompt: string) => { 
  const response = await axios.get(apiUrl + prompt);
  const backRes: Generation = response.data;
  return backRes;
}
