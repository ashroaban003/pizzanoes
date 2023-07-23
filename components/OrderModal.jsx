import { Modal, useMantineTheme } from "@mantine/core";
import css from '../styles/Order.module.css'
import { useState } from "react";
import { createOrder } from "../lib/orderHandler";
import toast,{ Toaster } from "react-hot-toast";
import { useStore } from "../store/store";
import { useRouter } from "next/router";

export default function OrderModal({opened,setopen,paymentmet}) {
    const theme=useMantineTheme();
    const router = useRouter();
    const [FormData,setFormData] = useState({})

    const resetcart=useStore((state)=> state.resetCart)

    const handleInput =(e) =>{
        setFormData({...FormData,[e.target.name]:e.target.value});
    }
    const total = typeof window !== 'undefined' && localStorage.getItem('total')
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const id=await createOrder({...FormData, total,paymentmet})
        toast.success("Order placed")
        resetcart();
        {
            typeof window !== "undefined" && localStorage.setItem('order', id)
        }
       // console.log('order created',id);
       router.push(`/order/${id}`)
    }
    
    return(
        <Modal
        overlayColor={theme.colorScheme==='dark' ? theme.colors.dark[9]: theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        opened={opened}
        onClose={() =>setopen(null)}
        >
            <form action="" className={css.formcon} onSubmit={handleSubmit}>
                <input onChange={handleInput} type="text" name="name" required placeholder="Name"/>
                <input onChange={handleInput} type="text" name="phone" required placeholder="phone number"/>
                <textarea onChange={handleInput} name="address" placeholder="Address" rows={3}></textarea>

                <span>
                    you will pay <span>$ {total}</span> on delivery
                </span>

                <button type="submit" className="btn">Place Order</button>
            </form>
            <Toaster/>
        </Modal>
    )
};
