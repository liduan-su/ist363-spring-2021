import styles from './footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            Copyright Information Goes Here.
        </footer>
    )
}