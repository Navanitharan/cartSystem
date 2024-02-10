import { useContext } from "react"
import { PriceContext } from "./CartPage"

const TotalPrice = () => {

    const {updatedPrice} = useContext(PriceContext)

  return (
    <div className="d-flex justify-content-between py-3">
      <p>TOTAL:</p>
      <div className="totalprice text-end">
        <p>${updatedPrice}.00</p>
        <p>Get Daily Cash With Nespola Card</p>
      </div>
    </div>
  )
}

export default TotalPrice
