import  { useEffect, useState } from 'react'

const useReviewData = () => {
    const [reviewData, setReviewData] = useState()
    useEffect(()=>{
        fetch('../../public/reviews.json')
        .then(res=>res.json())
        .then(data => setReviewData(data))
    },[])
    console.log(reviewData)
  return reviewData
}

export default useReviewData