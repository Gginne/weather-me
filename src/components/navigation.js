import React from 'react'
import Link from 'gatsby-link'

const Navigation = () => {
    return (
        <div className="container">
            <nav className="white grey-text">
            <div className="row">
                <div className="col s4 m4 l4">
                    <Link to='/'>Current</Link> 
                </div>
                <div className="col s4 m4 l4">
                    <Link to='/forecast'>Forecast</Link>
                </div>
                <div className="col s4 m4 l4">
                    <Link to='/search'>Search</Link>
                </div>
            </div>
            </nav>
        </div>
        
    )
}

export default Navigation
