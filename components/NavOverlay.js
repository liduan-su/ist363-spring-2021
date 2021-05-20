import styles from './navoverlay.module.scss'
import ButtonUI from './buttonui'
import { motion } from "framer-motion"

export default function NavOverlay({closeClickHandler}) {

    const variants = {
        hidden: { x: "100%" },
        visible: { x: 0 },
    }

    return (
        <motion.div 
            className={styles.nav_overlay}
            initial="hidden"
            animate= "visible"
            variants={variants}
        > 
            <ButtonUI 
                icon='close'
                clickHandler={closeClickHandler}
            />
            Nav Overlay content goes here
        </motion.div>
    )
}