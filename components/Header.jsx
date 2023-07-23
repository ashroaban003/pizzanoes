import css from '../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../assets/Logo.png'
import {UilShoppingBag,UilReceipt}  from '@iconscout/react-unicons'
import Link from 'next/link'
import { useStore } from '../store/store'
import { useEffect, useState } from 'react'

export default function Header(params) {
  const [Order, setOrder]=useState("");
  //state in terminal
  const state = useStore((state)=>state)
 useEffect(()=>{
        setOrder(localStorage.getItem("order"))
 },[])
  const item = useStore((state)=>state.cart.pizzas.length)
    return(
      <div className={css.header}>
        <Link href={'/'}>
           <div className={css.logo}>
               {/* <Image src={Logo} alt='' width={50} height={50}/> */}
               <span style={{color: "var(--themeRed)"}}> Pizzanoes</span>
           </div></Link>
           <ul className={css.menu}>
            <li>
              <Link href= "../">Home</Link></li>
            <li>Menu</li>
            <li>Contact</li>
           </ul>
            
           <div className={css.rightside}>
              <Link href='/cart'>
                <div className={css.cart}>
                    <UilShoppingBag size={35} color="#2E2E2E"/>
                    <div className={css.badge}>{item}</div>
                </div>
                </Link>   
                { Order &&(
                         <Link href={`/order/${Order}`}>
                         <div className={css.cart}>
                             <UilReceipt size={35} color="#2E2E2E"/>
                             {Order!= "" && <div className={css.badge}>1</div>}
                         </div>
                         </Link>   
                )
                }
           </div>
      </div>
    )
};
