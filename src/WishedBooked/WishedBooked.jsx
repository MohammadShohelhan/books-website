import React, { useEffect, useState } from 'react'
import { getWishListStr } from '../Utility/addToWishList'

const WishedBooked = () => {

  const wishList = getWishListStr()
  console.log(wishList)

  const [available,setAvailable]=useState([]);

  useEffect(()=>{
    fetch('../booksData.json')
    .then((res)=>res.json())
    .then(data=>setAvailable(data) )

  
  },[])

 
  // const haveData = available.filter(book=>book.bookId === )

  return (
    <div>WishedBooked</div>
  )
}

export default WishedBooked