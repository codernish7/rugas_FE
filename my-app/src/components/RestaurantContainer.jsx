import { useEffect, useState } from "react"



const Search =({listOfRestaurants,setFilter})=>{
  const [search,setSearch]=useState('')
  console.log(search)
  return (
    <div className='search-field'>
    <input placeholder='search' value={search} onChange={(e)=>setSearch(e.target.value)}></input>
    <button onClick={()=>setFilter(listOfRestaurants.filter((items)=>items?.info?.name.toLowerCase().includes(search.toLowerCase())))}>Search</button>
    </div>
  )
}

const Filter =({listOfRestaurants,setFilter})=>{
  const [click,setClick]=useState(false)
  return <>
    <button className="filter-button" onClick={()=>{
      setClick(true)
      setFilter(listOfRestaurants.filter((items)=>items?.info?.avgRating>4.3))
      }}>Filter</button>
   {click? <button className="filter-button" onClick={()=>{
      setClick(false)
      setFilter(listOfRestaurants)}}>Reset Filter</button>:<></>}
  </>
}


const RestaurantCard=({listOfRestaurants})=>{

  

  if(listOfRestaurants.length === 0) {
    return (
      <div className='shimmerParent'>
        {[...Array(10)].map((_, index) => (
          <div key={index} className="shimmerUI"></div>
        ))}
      </div>
    )
  }
  
    return ( 
      <>
      
    {listOfRestaurants.map((items)=>{
      return (
        <div key={items?.info?.id} className='restaurant-card'>
       <div className='res-imageContainer'>
         <img className='food-img' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${items?.info?.cloudinaryImageId}`} alt="food" />
       </div>
       <div className='information'>
         <div className='desc'>
         <p>{items?.info?.name}</p>
         <p>{items?.info?.cuisines.join(', ')}</p>
         <p>{items?.info?.sla?.deliveryTime} minutes</p>
         <p>{items?.info?.avgRating}</p>
         </div>
       </div>
     </div>
      )
    })}
     </>
    )
   }

  
   
const RestaurantContainer =()=>{
  const [listOfRestaurants, setRestaurants]=useState([])
  const [filterData, setFilter]=useState([])
  const getData = async() =>{
    
    const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)

    const result = await response.json()
    
    console.log(result)

    console.log(result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    setRestaurants(result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
    setFilter(result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  useEffect(()=>{
   getData()
  },[])
     return(
        <>
        <div className="controls-container">
        <Search listOfRestaurants={listOfRestaurants} setFilter={setFilter}/>
        <Filter listOfRestaurants={listOfRestaurants} setFilter={setFilter}/>
      </div>
     <div className='restaurant-container'>
       <RestaurantCard listOfRestaurants={filterData}/>
       
     </div>
     </>
     )
   }

export default RestaurantContainer