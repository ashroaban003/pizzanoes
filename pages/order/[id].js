import { client } from "../../lib/client";
import Layout from "../../components/Layout";
import css from '../../styles/Order.module.css'
import {UilBill, UilBox} from '@iconscout/react-unicons'
import Image from 'next/image'
import cooking from '../../assets/cooking.png'
import Onway from '../../assets/onway.png'
import spinner from '../../assets/spinner.svg'
import { useEffect } from "react";

export const getServerSideProps =async({params})=>{
    const query=`*[_type == 'Order' && _id == '${params.id}']`;

    const order=await client.fetch(query);
    return{
        props: {
            order: order[0]
        }
    }
}
export default function Orders({ order}){

   useEffect(()=>{
      if(order.status>3){
         localStorage.clear();
      }
   },[order])
       return(
         <Layout>
              <div className={css.container}>
                 <span className={css.heading}></span>
                 <div className={css.details}>
                    <div>
                        <span>Order Id</span>
                        <span>{order._id}</span>
                    </div>
                    <div>
                        <span>Customer name</span>
                        <span>{order.name}</span>
                    </div>
                    <div>
                        <span>Phone</span>
                        <span>{Orders.phone}</span>
                    </div>
                    <div>
                        <span>Method</span>
                        <span>
                            {
                                order.method===0 ?'cash on delivery':'online delivery'
                            }
                        </span>
                    </div>
                    <div>
                        <span>Total</span>
                        <span>{order.total}</span>
                    </div>
                 </div>
                 <div className={css.statuscon}>

                    <div className={css.status}>
                         <UilBill width={50} height={50}/>
                         <span>Payment</span>
                         {order.method===0 ?
                              ( <span className={css.pending}>On Delivery</span>):
                              (<span className={css.pending}>Completed</span>)  
                        }
                    </div>

                    <div className={css.status}>
                          <Image src={cooking} alt="" width={50} height={50}/>
                          <span>Cooking</span>
                          {order.status===1  &&
                             <div className={css.spinner}>
                                <Image src={spinner} alt=""/>
                             </div>
                          }
                          {order.status>1  &&
                             <span className={css.completed}>Completed</span>
                          }
                    </div>

                    <div className={css.status}>
                          <Image src={Onway} alt="" width={50} height={50}/>
                          <span>Onway</span>
                          {order.status===2  &&
                             <div className={css.spinner}>
                                <Image src={spinner} alt=""/>
                             </div>
                          }
                          {order.status>2  &&
                             <span className={css.completed}>Arrived</span>
                          }
                    </div>

                    <div className={css.status}>
                          <UilBox width={50} height={50}/>
                          <span>Delivered</span>
                          {order.status===3  &&
                             <div className={css.spinner}>
                                <Image src={spinner} alt=""/>
                             </div>
                          }
                          {order.status>3  &&
                             <span className={css.completed}>completed</span>
                          }
                    </div>
                 </div>
              </div>
         </Layout>
       )
}