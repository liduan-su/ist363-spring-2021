import Image from "next/image"
import styles from './buttonui.module.scss'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)

export default function ButtonUI({icon, clickHandler}) {

    let buttonClasses = cx({
        btnui: true,
        close : icon === 'close'
    })

    return (
        <button 
            className={buttonClasses}
            onClick={clickHandler}
        >
            <Image  
                src = {`/images/icon-${icon}.svg`}
                width = {50}
                height = {50}
                alt={`${icon} icon`}
            />
        </button>
    )
}