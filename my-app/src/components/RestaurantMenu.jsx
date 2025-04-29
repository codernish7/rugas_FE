import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'



const RestaurantMenu = () => {

  const param= useParams()

  const {resId}=param

  useEffect(()=>{
    getMenuItems()
  },[])

  const getMenuItems=async()=>{
    const menuData= await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=`+resId)

    const menuCard = await menuData.json()

    console.log('menu card-------------------------------------',menuCard)
  }
  return (
    <div>RestaurantMenu</div>
  )
}

export default RestaurantMenu