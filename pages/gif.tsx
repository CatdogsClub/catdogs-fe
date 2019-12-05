import React from 'react'
import Nav from '../components/nav'
import css from '../styles/global.scss'

const Gif = () => {
    return [
        <Nav />,
        <div className={css.title}>this is gif</div>
    ]
}

export default Gif