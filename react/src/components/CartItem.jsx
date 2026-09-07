import "./CartItem.css"

const CartItem = ({product, quantity , removeItem, increaseQuantity, decreaseQuantity }) => {
  const remove = () => {
    removeItem(product.id)
  };
  const increase = () =>{
    increaseQuantity(product.id)
  };
  const decrease = () =>{
    decreaseQuantity(product.id)
  }
  return (
    <div className="cart-item">
      <img src={product.image} alt={product.name} />
      <div>
      <h3>{product.name}</h3>
        <p>${product.priceCents}</p>
        <p>Quantity: {quantity}</p>
        <button onClick={remove}>Remove</button>
        <div>
         <button onClick={increase}>+</button>
         <span>{quantity}</span>
         <button onClick={decrease}>-</button>
         </div>
      </div>
    </div>
  )
}

export default CartItem;