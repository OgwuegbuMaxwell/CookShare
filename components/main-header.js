import Link from "next/link";
import logoImage from '@/assets/logo.png'
import Image from "next/image";

import classes from './main-header.module.css'

export default function MainHeader() {
    return(
        <header className={classes.header}>
            <Link className={classes.logo} href="">
                <Image width={30} height={30} src={logoImage.src} alt="A plate with food on it"/>
                {/* <img src={logoImage.src} alt="A plate with food on it"/> */}
                CookShare
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                        <Link href="/community">Foodies Community</Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
  
}