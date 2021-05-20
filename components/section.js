import Style from './section.module.scss'
import Heading from './heading'

export default function Section ({children, title,}) {
    return (
        <section className={Style.section}>
            <Heading type="h2">{title}</Heading>
            {children}
        </section>
    )
}