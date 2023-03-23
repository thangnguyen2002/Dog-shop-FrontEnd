import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Contexts/CardContext";
import "./cart.css"

const Cart = () => {
    const {myCart, total, addToCart, setTotal} = useContext(CartContext) //vi khi them cho' no' se vao myCart nen mk lay myCart, myCart la 1 array
    const handleCheckout = () => {
        addToCart([{}]) //cac item se thanh rong
        setTotal(0) //total price set ve 0
    }
    const navigate = useNavigate() //cach dieu huong trang khi click, link ko dung dc truong hop nay
    const handleHome = () => {
        navigate("/")
    }

    return ( 
        <>
            <section className="cart-container"> 
                <div className="cart-header">CHECKOUT: </div>
                <div className="cart-items">
                    {myCart.slice(1).map((item) => {
                        return (
                            <div className="cart-item">
                                <img src={item.imageUrl} className="cart-item-img" alt="error" />
                                {item.name} : {item.price}$
                            </div>
                        )
                    })}
                    <div className="cart-total">Total: {total}$</div>
                </div>
                <div className="row">
                    <button className="cart-checkout" onClick={handleCheckout}>DONE</button>
                    <button className="cart-backhome" onClick={handleHome}>RETURN HOME</button>
                </div>
            </section>
        </>
     );
}
 
export default Cart;