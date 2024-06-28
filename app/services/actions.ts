import { Generation } from "@/interfaces/Generation";
import axios from "axios";

const apiUrl = 'https://dgxhimhvak.execute-api.us-east-1.amazonaws.com/Dev/imageGeneratorAPI?prompt=';

export const generateImage = async (prompt: string) => { 
  const noSpacesPrompt = prompt.replace(/\s+/g, '');
  const response = await axios.get(apiUrl + noSpacesPrompt);
  const backRes: Generation = response.data;
  return backRes;
}
