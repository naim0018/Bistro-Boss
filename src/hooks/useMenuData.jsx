import  { useEffect, useState } from 'react'

const useMenuData = () => {
    const [datalist,setDatalist] = useState();

    useEffect(()=>{
        fetch('../../public/menu.json')
        .then(res=> res.json())
        .then(data => setDatalist(data))
    },[])
    console.log(datalist);
  return datalist;
}

export default useMenuData