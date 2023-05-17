import React from 'react'
import ProductCards from './ProductCards'

export default function (props) {
    return (
        <main>
            <div className="products">
                <ProductCards wishlistFunction={props.wishlistFunction}/>
            </div>
            <div className="page-description">
                <h3>En kort SEO-relaterad beskrivningstext med en massa värdeord som google tycker om mugg, vit, mugg med märke etc. </h3>
                <p> 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae vitae, quibusdam commodi nemo nisi dolores! Ea necessitatibus reiciendis animi atque culpa accusamus
                    error illum nostrum veniam ab quasi, iusto tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Alias qui laboriosam, quos dicta sequi distinctio enim magni delectus ea eum unde hic adipisci illo impedit sit culpa vel consectetur! 
                    Ullam sequi praesentium fugiat eveniet porro iure nisi eum alias aperiam. Architecto consectetur perferendis consequatur enim obcaecati nisi ipsa iusto? 
                    Adipisci!
                </p>
            </div>
        </main>
    )
}