import css from '../styles/Services.module.css'
import Image from 'next/image'
import sl from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'

export default function Services() {
    return(
        <div className={css.back}>
        <div className={css.heading}>
            <span>WHAT WE SERVE</span>
            <span> Your Favourite Food</span>
            <span> Delivery Partner</span>
        </div>

        {/* images? */}
          <div className={css.services}>
             <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={sl} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <span style={{color: "black",fontSize:"1.4rem"}}>Easy to Order</span>
                <span>user-friendly website and reliable</span>
             </div>
             <div className={css.feature}>
                <div className={css.ImageWrapper}>
                    <Image src={s2} alt="" objectFit='cover' layout='intrinsic'/>
                </div>
                <span style={{color: "black",fontSize:"1.4rem"}}>Faster Delevery</span>
                <span>User friendly employess and no tips,please</span>

             </div>
             <div className={css.feature}>
                <div className={`${css.ImageWrapper} ${css.hygiene}`}>
                    <Image src={s3} alt="" objectFit='cover' layout='intrinsic'/>
                </div>
                <span style={{color: "black",fontSize:"1.4rem"}}>Great quality</span>
                <span>our pizza are made in hygine environment and even halal</span>
             </div>
          </div>

        </div>
    )
};
