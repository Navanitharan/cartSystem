import { useContext, useEffect } from "react"
import { PriceContext } from "./CartPage"

const Productcard = ({product}) => {

    const {updatePricefun} = useContext(PriceContext)

  return (
    <div className="productdetails col-62 d-flex px-3">
       <div className="product-info col-6 d-flex">
            <div className="product-img col-3 mx-3" >
                <img style={{width:"100%"}}  src={product.thumbnail}/>
            </div>

            <div className="product-desc col-7">
                    <p>{product.title}</p>
                    <p>{product.description}</p>
            </div>
        </div>

        <div style={{height:"200px"}} className="product-pricing col-6 d-block py-3 text-end">
            <div className="product-price d-flex gap-5 justify-content-end mb-3 ">
            <select name="Quantity" onChange={(e)=>{updatePricefun(e.target.value,product.price,product.id)}}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
            </select>
            <p>${product.price}.00</p>
            </div>
            <div className="remove-btn p-3">
                <input className="remove-btn" type="button" value="Remove"/>
            </div>
        </div>
    </div>
  )
}

export default Productcard
