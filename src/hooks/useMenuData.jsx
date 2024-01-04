import { useQuery } from '@tanstack/react-query';
import axios from 'axios';



const useMenuData =async () => {
// const [menu,setMenu] = useState();

  const {data ,isLoading, isError} = useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      const {data} = await axios.get('../../public/menu.json');
      return data;
    },
  });
  
 
console.log(data)
  return {data,isLoading, isError};
};

export default useMenuData