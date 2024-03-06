import { useContext, useEffect } from "react"
import { PriceContext } from "./CartPage"

  

const ProductDetails = () => {

    const {products,setUpdatePrice, cartItems, setCartItems } = useContext(PriceContext);

    useEffect(() => {
        
        const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
        
        setUpdatePrice(totalPrice);

        products.map((product)=>{
            setCartItems(cartItems,
                cartItems[product.id]={quantity:1,price:product.price,totalPrice:product.price}
                
                );
        })

    }, []);


  return (
    <div >

       {
        products.map((product)=>{
          return(<Productcard product={product} key={product.id}></Productcard>);
         })
       }
    </div>
  )
}

export default ProductDetails
