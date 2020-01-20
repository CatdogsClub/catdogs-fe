import React from 'react'
import Nav from '../components/nav'
import Foot from '../components/foot'
import css from '../styles/global.less'

const Gif = () => {
    return [
        <Nav />,
        <div className={css.main}>this is gif</div>,
        <Foot />
    ]
}

export default Gif