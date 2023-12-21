
import useMenuData from '../../../hooks/useMenuData'
import Menu from '../../Common/Menu'

const DessertsMenu = () => {
    const data = useMenuData()
    const desserts = data?.filter(item => item.category == "dessert")
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