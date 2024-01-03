import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import  {  useState } from 'react'

const useMenuData = () => {
  const [datalist, setDatalist] = useState();

  const { data, error, isError, isLoading } = useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      const res = await axios.get('https://bistro-boss-server-nu-snowy.vercel.app/product');
      return res.data;
    },
  });
  if (data !== datalist) {
    setDatalist(data);
  }

  return { datalist, error, isError, isLoading };
};

export default useMenuData