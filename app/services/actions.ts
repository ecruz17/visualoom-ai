import { Generation } from "@/interfaces/Generation";
import axios from "axios";

const apiUrl = 'https://3gjy9o13n7.execute-api.us-east-1.amazonaws.com/dev/imageGenerator?prompt=';

export const generateImage = async (prompt: string) => { 
  const noSpacesPrompt = prompt.replace(/\s+/g, '');
  const response = await axios.get(apiUrl + noSpacesPrompt);
  const backRes: Generation = response.data;
  return backRes;
}
