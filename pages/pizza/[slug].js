import Layout from "../../components/Layout";
import { client } from "../../lib/client";
import css from '../../styles/Slug.module.css';
import Image from 'next/image'
import { urlFor } from '../../lib/client'
import leftarrow from '../../assets/arrowleft.png'
import rightarrow from '../../assets/arrowright.png'
import { useState } from "react";
import { useStore } from "../../store/store";
import toast,{ Toaster } from "react-hot-toast";

export default function Pizza({pizza}) {
    const src= urlFor(pizza.image).url();
    const [number,setnumber] =useState(1);
    const [Size, setSize]=useState(1);

    //handle num
    const handlenum = (type)=>{
      type==="r"
      ? setnumber((n)=>n+1)
      :number ===1 
      ? null
      :setnumber((n)=>n-1);
    };

    //add to cart function
    const addPizza=useStore((state)=>state.addPizza)
    const addToCart=()=>{
        addPizza({...pizza,price: pizza.price[Size],quantity: number,size: Size})
        toast.success("Added to cart")
    }
    return(
        <Layout>
           <div className={css.container}>
              <div className={css.imagewrap}>
                 <Image
                 loader={()=>src}
                 alt=""
                 src={src} layout='fill' unoptimized objectFit="cover"
                 />
              </div>
            <div className={css.right}>
                <span>{pizza.name}</span>
                <span>{pizza.detail}</span>

                <span><span style={{color: 'var(--themeRed)'}}>$</span> {pizza.price[Size]}</span>
               <div className={css.size}>
                <span>size</span>
                <div className={css.sizevar}>
                    <div
                    onClick={()=> setSize(0)}
                    className={Size===0 ? css.selected : ''}
                    >Small</div>
                    <div
                      onClick={()=> setSize(1)}
                      className={Size===1 ? css.selected : ''}
                    >Medium</div>
                    <div
                      onClick={()=> setSize(2)}
                      className={Size===2 ? css.selected : ''}
                    >Large</div>
                </div>
               </div>

               <div className={css.quantity}>
                    <span>Quantity</span>
                    <div className={css.counter}>
                         <Image src={leftarrow}
                         height={20}
                         width={20}
                         alt=""
                         objectFit="contain"
                         onClick={()=>handlenum("l")}/>

                         <span>{number}</span>
                         
                         <Image src={rightarrow}
                         height={20}
                         width={20}
                         alt=""
                         objectFit="contain"
                         onClick={()=>handlenum("r")}/>
                    </div>
               </div>

               <div className={`btn ${css.btn}`} onClick={addToCart}>
                Add to cart
               </div>
               </div>  
               <Toaster/>
           </div>
        </Layout>
    )
};

//deFault next function that statically pre-render all static components
export async function getStaticPaths(){
    const paths = await client.fetch(
        `*[_type=="Pizza" && defined(slug.current)][].slug.current`
    );

    return{
        paths: paths.map((slug)=>({params: {slug}})),
        fallback: 'blocking',
    }
}

export async function getStaticProps(context){
    const {slug=""} = context.params;
    const pizza = await client.fetch(
        `*[_type=="Pizza" && slug.current == '${slug}'][0]`
    );
    return{
        props: {
            pizza,
        },
    };
}
