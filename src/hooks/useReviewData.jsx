import  { useEffect, useState } from 'react'

const useReviewData = () => {
    const [reviewData, setReviewData] = useState()
    useEffect(()=>{
        fetch('../../public/reviews.json')
        .then(res=>res.json())
        .then(data => setReviewData(data))
    },[])
  return reviewData
}

export default useReviewData