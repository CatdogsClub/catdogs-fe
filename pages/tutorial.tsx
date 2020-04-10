import React from 'react'
import Nav from '../components/nav'
import Foot from '../components/foot'
import css from '../styles/global.less'

const Tutorial = () => {
    return [
        <Nav />,
        <div className={css.main}>this is Tutorial</div>,
        <Foot />
    ]
}

export default Tutorial 