import React,{useEffect,useState} from 'react'
import Banner from '../../components/Guest/Home/Banner'
import Breadcrumb from '../../components/Guest/Home/Breadcrumb'
import MenuItems from '../../components/Guest/Home/MenuItems'
import axios from 'axios'

const Home = () => {

  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("")
  const [products, setProducts] = useState([])

  useEffect(()=>{
    axios.post("http://localhost:3000/api/guest/getCategories").then(res=>{
      setCategories(res.data)
      setActiveCategory(res.data[0].categoryName)
    }).catch(error=>{console.log(error)})
  },[])

  useEffect(()=>{
    //Get Products
    axios.post("http://localhost:3000/api/guest/getProducts",{category:activeCategory}).then(res=>{
      setProducts(res.data)
    }).catch(error=>{console.log(error)})

  },[activeCategory])

  return (
    <>
      <Banner/>
      <Breadcrumb>
        <ul className='d-flex mb-0 homeCategory'>
          {categories.map(category => (
            <li key={category._id} onClick={()=>{ setActiveCategory(category.categoryName) }} className={activeCategory == category.categoryName ? 'active' : ''}>
              {category.categoryName}
            </li>
          ))}
        </ul>
      </Breadcrumb>
      <MenuItems products={products}/>
    </>
  )
}

export default Home