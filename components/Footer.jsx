import {UilFacebook, UilGithub, UilInstagram} from "@iconscout/react-unicons"
import css from '../styles/Footer.module.css'

export default function Footer(params) {
    return(
       <div className={css.container}>
          <span>All RIGHTS RESERVED</span>
          <div className={css.social}>
            <UilFacebook size={40}/>
            <UilGithub size={40}/>
            <UilInstagram size={40}/>
          </div>
          <br />
        
       </div>
    )
};
