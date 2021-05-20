import styles from './footer.module.scss'
import Row from './row'
import Col from './col'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.flexRow}>
                <li>
                    <Link href="https://facebook.com/starbucks">
                        <a>
                            <Image 
                                src="/images/facebook.svg"
                                width={36}
                                height={36}
                                alt="Facebook Logo"
                            />
                        </a>
                    </Link>
                    
                </li>
                <li>
                    <Link href="https://instagram.com/starbucks">
                        <a>
                            <Image 
                                src="/images/instagram.svg"
                                width={36}
                                height={36}
                                alt="Instagram Logo"
                            />
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="https://twitter.com/starbucks/">
                        <a>
                            <Image 
                                src="/images/twitter.svg"
                                width={36}
                                height={36}
                                alt="Twitter Logo"
                            />
                        </a>
                    </Link>
                </li>
            </ul>
            <p>Copyright 2021 Starbucks, Inc. All rights reserved</p>
            <ul className={styles.flexRow}>
                <li>
                    <Link href="/privacy-policy">
                        <a>Privacy Policy</a>
                    </Link>
                </li>
                <li>
                <Link href="/terms-of-service">
                        <a>Terms of Service</a>
                    </Link>
                </li>
            </ul>
        </footer>
    )
}