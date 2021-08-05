import React from 'react'
import { Link } from 'react-router-dom'


export default function Pagenotfound() {
    return (
        <div className="py-5 text-center">
            <h1 className="display-1">404 ERROR</h1>
            <h3>This is Page it Not Available...</h3>
            <Link to="/assets/js/about">know about us</Link>
        </div>
    )
}