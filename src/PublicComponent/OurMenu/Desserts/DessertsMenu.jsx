
import useMenuData from '../../../hooks/useMenuData'
import Menu from '../../Common/Menu'

const DessertsMenu = () => {
    const {datalist , error ,isLoading } = useMenuData()
    if(isLoading){
      <p>Loading</p>
    }
    
    if(error){
      console.log(error.message)
    }

    console.log(datalist)
    const desserts = datalist?.filter(item => item.category == "dessert")
    console.log(desserts)
  return (
    <div className='grid md:grid-cols-2 gap-5 container mx-auto my-20'>
        {
            desserts?.slice(0,4).map(item=> <Menu key={item._id} item={item}/>)
        }
    </div>
  )
}

export default DessertsMenu