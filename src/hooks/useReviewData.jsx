import { useQueries } from "@tanstack/react-query"
import axios from "axios"



const useReviewData = () => {
  
  const { data, error, isLoading, isPending } = useQueries({
    queryKey: ['review'], 
    queryFn: async () => {
      const res = await axios.get('../../public/reviews.json');
      return res.data;
    },
  });
  console.log(data)
  return { data, error, isLoading, isPending };
};

export default useReviewData;