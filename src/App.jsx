import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Content from './Content'
import Footer from './Footer'
import './App.css'

function App() {
  const [wishlistItems, setWishlistItems] = React.useState([])
  const [wishlistTotalPrice, setWishListTotalPrice] = React.useState(0)
  function showWishListOnAdd() {
    const wishList = document.getElementById('wishlist')
    wishList.classList.add('show')
  }
  function addToWishlist(name, price) {
    setWishlistItems(prevWishlistItems => {
      return[...prevWishlistItems, name]
    })
    setWishListTotalPrice(wishlistTotalPrice + price)
    showWishListOnAdd()
  }
  return (
    <>
    <Header wishlistNames={wishlistItems} wishlistPrice={wishlistTotalPrice}/>
    <Hero />
    <Content wishlistFunction={addToWishlist}/>
    <Footer />
    </>
  )
}

export default App
