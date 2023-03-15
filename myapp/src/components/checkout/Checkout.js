import "./checkout.css";
import React, {useState} from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {collection, addDoc, getFirestore} from 'firebase/firestore'

const Checkout = () => {
  const { cart, quantity, total, clearCart } = useContext(CartContext);
  
  const carrito=[]
  cart.map((prod)=>{
   return carrito.push({title:prod.title, price:prod.price,quantity:prod.quantity,subtotal:prod.subtotal})
  })
  const summary ={ total:total, quantity:quantity}

  const initialOrder = {
      name:'',
      email:'',
      address:'',
      city:'',
      state:'',
      zipcode:'',
    }
  //  const initialOrder={
  //     buyer:{
  //       name:'',
  //       email:'',
  //       address:'',
  //       city:'',
  //       state:'',
  //       zipcode:'',
  //     },
  //     items:[],
  //     total :0,
  //     quantity:0
  //  }
  
  const [order, setOrder] = useState(initialOrder)
  const [id, setId] = useState();
  
  const sendOrder = (e) => {
    setOrder({
      ...order, [e.target.name]:e.target.value,
      Aitems:carrito,
      Asummary:summary
      // total :total,
      // quantity: quantity,}
    }
    )
  }

  const guardarDatos = (e) => {
    e.preventDefault();
    const db =getFirestore();
    const formCollection= collection(db, 'checkOut')
    addDoc(formCollection, order).then((snapshot)=>{
    setOrder(initialOrder)
    setId(snapshot.id)
    clearCart()
    })
  }
  

  return (
    <div className="row">
       {typeof id !== 'undefined' ? (
       <div className='envio'>
        <h4>El formulario se ha enviado con el id:</h4>
        <br/>
        <h3><strong>{id}</strong></h3>
      </div>
      ) : (
        ''
      )}
      <div className="col-lg-6">
        <div className="box-element">
          <form className="form-check" onSubmit={guardarDatos}>
            <div>
              <div className="form-field">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name.."
                  onChange={sendOrder}
                  value={order.name}
                />
              </div>
              <div className="form-field">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Email.."
                  onChange={sendOrder}
                  value={order.email}
                />
              </div>
            </div>
            <div id="shipping-info">
              <hr />
              <p>Shipping Information:</p>
              <hr />
              <div className="form-field">
                <input
                  className="form-control"
                  type="text"
                  name="address"
                  placeholder="Address.."
                  onChange={sendOrder}
                  value={order.address}
                />
              </div>
              <div className="form-field">
                <input
                  className="form-control"
                  type="text"
                  name="city"
                  placeholder="City.."
                  onChange={sendOrder}
                  value={order.city}
                />
              </div>
              <div className="form-field">
                <input
                  className="form-control"
                  type="text"
                  name="state"
                  placeholder="State.."
                  onChange={sendOrder}
                  value={order.state}
                />
              </div>
              <div className="form-field">
                <input
                  className="form-control"
                  type="text"
                  name="zipcode"
                  placeholder="Zip code.."
                  onChange={sendOrder}
                  value={order.zipcode}
                />
              </div>
            </div>

            <hr />
            <input
              id="form-button"
              className="btn btn-secondary me-md-2"
              type="submit"
              value="Continue"
            
            />
          </form>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="box-element-2">
          <h5>Order Summary</h5>
          <hr />
          <div>
            <div className="item-box">
              {cart.map((prod) => (
                <div key={prod.id} className="cart-row">
                  <div style={{ flex: "1" }}>
                    <img className="row-image" src={prod.url} alt={prod.title} />
                  </div>
                  <div style={{ flex: "2" }}>
                    <p>{prod.title}</p>
                  </div>
                  <div style={{ flex: "1" }}>
                    <p>${prod.price}</p>
                  </div>
                  <div style={{ flex: "1" }}>
                    <p>x {prod.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="quant-total">
              <h5>Items: {quantity}</h5>
              <h5>Total: ${total}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
