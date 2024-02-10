import { useContext } from 'react'
import { PriceContext } from './CartPage'

const Subtotal = () => {

    const{updatedPrice} = useContext(PriceContext);

  return (
    <div className='d-flex justify-content-between py-3'>
        <div className="sub-total">
            <p>SUBTOTAL:</p>
            <p>SHIPPING:</p>
        </div>
        <div className="shipping text-end">
            <p className="price">
                ${updatedPrice}.00
            </p>
            <p>FREE</p>
        </div>
    </div>
  )
}

export default Subtotal
