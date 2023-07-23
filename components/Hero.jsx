import css from '../styles/Hero.module.css'
import Image from 'next/image'
import Cherry from '../assets/Cherry.png'
import HeroImage from '../assets/HeroImage.png'
// import Pizzal from '../assets/P1.jpg'

export default function Hero(params) {
    return(
        <div className={css.container}>
            <div className={css.left}>
            <div className={css.cherry}>
                <span>More than faster</span>
                <Image src={Cherry} alt="" width={40} height={25} />
            </div>
            <div className={css.heroText}>
                <span>Be the Fastest</span>
                <span>In delevering</span>
                <span>
                    Your <span style={{color: "var(--themeRed)"}}>Pizza</span>
                </span>
            </div>
            <span className={css.minitext}>
                Our Mission is to provide good pizzas to fill your tummy 
                and free delivery.
            </span>

            <button className={ `btn ${css.btn}`}>Get Started</button>
            </div>

            {/* rightside */}
            <div className={css.right}>
                <div className={css.imageContainer}>
                    <Image src={HeroImage} alt="" size={10} />
                </div>

                {/* <div className={css.Pizza}>
                    <div>
                    <Image src={Pizzal} alt="" width={450} height={370} objectFit="cover"
                    layout='intrinsic'/> </div>
                    <div className={css.details}>
                          <span>Italian Pizza</span>
                          <span> <span style={{color: "var(--themeRed)"}}>$</span> 6.54</span>
                    </div>
                </div> */}
            </div>
        </div>
    )
};
