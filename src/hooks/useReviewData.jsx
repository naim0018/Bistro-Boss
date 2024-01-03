import { useQueries } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react";


const useReviewData = () => {
  const [review,setReview] = useState();
  const { data, error, isLoading, isPending } = useQueries({
    queryKey: ['review'], // Correct: Wrap the single string in an array
    queryFn: async () => {
      const res = await axios.get('https://bistro-boss-server-nu-snowy.vercel.app/review');
      return res.data;
    },
  });
  if(data !== review)
  {
    setReview(data)
  }
  return { review, error, isLoading, isPending };
};

export default useReviewData;