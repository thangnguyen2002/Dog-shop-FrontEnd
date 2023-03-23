import { useContext, useState } from "react";
import { CartContext } from "../Contexts/CardContext";
import "./dogs.css"

const DogsCard = (props) => {
    const {id, name, breed, description, price, imageUrl} = props
    const {addToCart, setTotal} = useContext(CartContext)
    const [isAdded, setAdded] = useState(false)
    const handleClick = () => {
        setAdded(true)
        const newItems = {
            name: name,
            price: price,
            imageUrl: imageUrl,
        }
        // reacjs ko push dc, nen push nhu sau, khi nhan vao se them con cho' vao myCart
        addToCart((item) => [...item, newItems]) //spread operator:giu lai n~ cai đã add vào rồi mà ko bị biến mất, gtri muốn thêm vào là newItems
        setTotal((total) => (total += Number(price))) //+= se coi la string nen chuyen sang number
    }
    return ( 
        <>
        <section className="dogs">
            <div className="row">
                <div className="dogs-info">
                    <p>{name}</p>
                    <p>{breed}</p>
                </div>
                <div className="dogs-img-container">
                    <img src={imageUrl} alt={`picture of: ${name}`} className="dog-img" />
                </div>
            </div>
            <div className="dogs-desc">{description}</div>
            <div className="dogs-price">{price}$</div>
            {isAdded ? ( //conditional statement dựa vào biến state này
                <button disabled className="dogs-btn-disabled">ADDED</button>
            ) : (
                <button className="dogs-btn" onClick={handleClick}>ADD TO CART</button>
            )}
        </section>
        </>
     );
}
 
export default DogsCard
