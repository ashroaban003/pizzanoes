
import Layout from "../components/Layout";
import { useStore } from "../store/store";
import css from '../styles/Cart.module.css'
import Image from 'next/image'
import { urlFor } from '../lib/client'
import { useState } from "react";
import OrderModal from "../components/OrderModal";

export default function Cart(params) {
    const CartData = useStore((state)=>state.cart)
    const removepizza=useStore((state)=>state.removePizza)
    const [paymentmet,setPaymentmet]=useState(null);
    const handleRemove=(i)=>{
        removepizza(i);
    }
    const total= () => CartData.pizzas.reduce((a,b)=>a+ b.quantity*b.price,0)
    const handledelivery=()=>{
           setPaymentmet(0);
           typeof Window !=='undefined' && localStorage.setItem('total',total());
    }
    return(
        <Layout>
            
            <div className={css.container}>
                 <div className={css.details}>
                    <table className={css.table}>
                         <thead>
                            <th>Pizza</th>
                            <th>Name</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                           

                         </thead>

                         <tbody className={css.tbody}>
                            {CartData.pizzas.length>0 &&
                                CartData.pizzas.map((pizza,i)=>{
                                    const src=urlFor(pizza.image).url()
                                    return(
                                        <tr key={i} >
                                          <td  className={css.imagetd}>
                                            <Image
                                            loader={()=> src}
                                            src={src}
                                            alt=""
                                            objectFit="cover"
                                            width={84}
                                            height={84}/>
                                           </td>
                                           <td>
                                             {pizza.name}
                                           </td>
                                           <td>
                                              {
                                                pizza.size===0?
                                                "Small":
                                                pizza.size===1?
                                                "Medium":
                                                "Large"
                                              }
                                           </td>
                                           <td>
                                            {pizza.price}
                                           </td>
                                           <td>
                                            {pizza.quantity}
                                           </td>
                                           <td>
                                            {pizza.price * pizza.quantity}
                                           </td>
                                           <td
                                           style={{
                                            color:"var(--themeRed)",
                                            cursor: "pointer"
                                        }}
                                        onClick={()=>handleRemove(i)}
                                           >x</td>
                                        </tr>
                                    )                                
                                })
                            }
                         </tbody>
                    </table>
                 </div>
                 <div className={css.cart}>
                    <span>Cart</span>
                    <div className={css.cartdetail}>
                        <div>
                        <span>Items</span>
                        <span>{CartData.pizzas.length}</span>
                        </div>
                        <div>
                        <span>Total</span>
                        <span>$ {total()}</span>
                        </div>
                    </div>
                    <div className={css.button}>
                        <button className="btn" onClick={handledelivery}>Pay on Delivery</button>
                        <button className="btn">pay now</button>
                    </div>
                 </div>
            </div>
            <OrderModal
            opened={paymentmet===0}
            setopen={setPaymentmet}
            paymentmet={paymentmet}
            />
        </Layout>
    )
};
