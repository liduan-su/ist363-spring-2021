import Link from 'next/link'
import styles from './button.module.scss'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)

export default function Button({label,href,type}) {

    let buttonClasses = cx({
        btn: true,
        primary: type === 'primary',
        secondary: type === 'secondary'
    })

    return (
        <Link href={href}>
            <a className={buttonClasses}>{label}</a>
        </Link>
    )
}