import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import '../styles/index.scss'
import Header from './header'
import Footer from './footer'

const Layout = props => {
    return (
        <main>
            <div className="layout-container">
                <Header />
                <div className="container">
                    {props.children}
                </div>

            </div>
            <Footer />
        </main>
    )
}

export default Layout
