import Link from "next/link";
import logoImage from '@/assets/logo.png'
import Image from "next/image";

import classes from './main-header.module.css'
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link/nav-link";

export default function MainHeader() {
    

    return(
        <>
            <MainHeaderBackground/>
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image width={30} height={30} priority src={logoImage.src} alt="A plate with food on it"/>
                    {/* <img src={logoImage.src} alt="A plate with food on it"/> */}
                    CookShare
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li> <NavLink href="/meals"> Browse Meals </NavLink>  </li>
                        <li> <NavLink href="/community"> Foodies Community </NavLink> </li>
                    </ul>
                </nav>

            </header>
        </>
    )
  
}