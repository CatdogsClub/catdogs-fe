import React from 'react'

const Foot = () => (
    <footer>
        <a href="http://beian.miit.gov.cn" target="_blank">蜀ICP备19040521号-1</a>
        <style jsx>{`
            footer {
                height: 200px;
                background-color: #333;
                padding: 80px;
                box-sizing: border-box;
                text-align: center;
            }
            a {
                color: #fff;
                text-decoration: none;
                font-size: 13px;
            }
        `}</style>
    </footer>
)

export default Foot