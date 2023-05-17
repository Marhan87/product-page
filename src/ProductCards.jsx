import React from 'react'
import products from './assets/products.json'


export default function ProductCards(props) {

    const productContent = products.map((product) => {
        const [hiddenInfo, setHiddenInfo] = React.useState(false)
            function toggleInfo(){
                setHiddenInfo( !hiddenInfo);
                console.log(hiddenInfo);
            }
        return (
            <div key={product.id} className="product-card">
                <p className="product-title"><strong>{product.name}</strong></p>
                <img src={product.pictureUrl}/>
                <p>{product.description}</p>
                <strong className="price">{product.discountPrice ? <span className="discount-price">{product.discountPrice}<span className="line-through">{product.price}</span></span> : product.price}</strong>
                
                <div id="showInfo" className="show-info-toggle" onClick={toggleInfo}>{hiddenInfo ? 'Dölj info ↑' : 'Visa info ↓'}</div>
                 <ul id="product-info" className={hiddenInfo ? "product-info show-info": "product-info" }>
                    {product.info.map((infoItem) => {
                       return( <li key={infoItem}>{infoItem}</li> )
                    })}
                </ul>
                <button onClick={ () => props.wishlistFunction(product.name, product.discountPrice ? product.discountPrice : product.price)}>Add to wishlist</button>
            </div>
        )
    })
    return (
        productContent
    )
}