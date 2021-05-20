import styles from './header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import ButtonUI from './buttonui'
import NavOverlay from './NavOverlay'
import { useState } from 'react'

export default function Header() {

    const [isMenuVisable, setIsMenuVisable] = useState(false);

    return (
        <header className={styles.header}>
            <Link href="/">
                <a>
                    <Image 
                        src='/images/starbucks-logo.svg'
                        width={100}
                        height={100}
                        alt='Starbucks Logo'
                    />
                </a>
            </Link>
            <ButtonUI 
                icon="menu" 
                clickHandler = {() => {setIsMenuVisable(true)}}
            />
            {
                isMenuVisable && <NavOverlay closeClickHandler={() => {setIsMenuVisable(false)}} />
            }
        </header>
    )
}