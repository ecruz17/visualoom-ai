import { useQuery } from "@tanstack/react-query";
import { generateImage } from "@/app/services/actions";

export const useGenerated = (prompt: string) => {

  const imageQuery = useQuery({
    queryKey: ['generatedImage', prompt],
    queryFn: () => generateImage(prompt),
    enabled: false
  });

  return imageQuery;
}
