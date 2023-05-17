import React from 'react'

export default function(props) {

    const wishlistItems = props.wishlistNames.map((item) => {
        return (
            <li key={item}>{item}</li>
        )
    })
    function showWishlist() {
        const wishList = document.getElementById('wishlist')
        wishList.classList.toggle('show')
    }

    function hideWishlist() {
        const wishList = document.getElementById('wishlist')
        wishList.classList.remove("show");
    }

    return (
        <header id="header">
            <img src='./src/assets/logo.png' width="250"/>
            <div id="wishlist-button" onClick={showWishlist} className="wishlist-button">Visa önskelista</div>
            <div id="wishlist" className="wishlist"> 
                <div className="wishlist-header">
                    <h4>Önskelista</h4>
                    <span className="wishlist-close-button wishlist-button" onClick={hideWishlist}>Stäng</span>
                </div>
                <h5>Namn:</h5>
                <ul>{wishlistItems}</ul> 
                <div className="total-price">
                    <strong>Totalt pris: {props.wishlistPrice} SEK</strong>
                </div>
            </div>
        </header>
    )
}