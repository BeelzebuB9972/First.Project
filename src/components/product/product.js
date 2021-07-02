import './product.css'
import PriceCard from './price_card'
import ProdImgCarousel from './prod_img_carousel'

let Product = ()=>{
    return (
        <div className="container">
            <div className="row">
                <div className="col-5"><ProdImgCarousel/></div>
                <div className="col-3">
                    <p>Category</p>
                    <p>Name</p>
                    <p>Links</p>
                    <ul>
                        <li>Vendor</li>
                        <li>Category</li>
                    </ul>
                </div>
                <div className="col-4"><PriceCard/></div>
            </div>
        </div>
    )
}

export default Product
