import Link from 'next/link'
import { urlFor } from '../lib/client'
import css from '../styles/Menu.module.css'
import Image from 'next/image'

export default function Menu({pizzas}) {
    return(
       <div className={css.container}>
            <div className={css.heading}>
                <span>OUR MENU</span>
                <span>Menu That Always</span>
                <span>Make you Fall In Love</span>
            </div>

            {/* pizzas */}
            <div className={css.menu}>
            {pizzas.map((pizza,id)=> {
                const src=urlFor(pizza.image).url()
                return(
                    <Link href={`./pizza/${pizza.slug.current}`} key={id}>
                    <div className={css.pizza} key={id}>
                            <div className={css.imagewrap}>
                                   <Image loader= {()=>src}  src={src} alt=''
                                   objectFit='cover' layout='fill'/>
                            </div>

                            <span>{pizza.name}</span>
                            <span><span style={{color: 'var(--themeRed)'}}>$</span> {pizza.price[1]}</span>
                        
                    </div></Link>

                )
            })}
       </div>
       </div>
    )
};
