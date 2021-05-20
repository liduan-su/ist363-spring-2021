import className from 'classnames/bind'

import Style from './row.module.scss';

let cx = className.bind(Style)

export default function Row({children, justifyContentCenter,}) {

    const rowClasses = cx ({
        row : true,
        ['justify-content-center']: justifyContentCenter
    })

    return (
        <div className={rowClasses}>
            {children}
        </div>
    )
}