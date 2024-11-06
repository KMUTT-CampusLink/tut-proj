import { useQuery } from "@tanstack/react-query";
import { fetchIds } from "./api";

export const useIds = () => {
  return useQuery({
    queryKey: ["files-data"],
    queryFn: fetchIds,
    refetchOnWindowFocus: false,
  });
};
