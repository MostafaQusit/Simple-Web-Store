import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <h4 className="mb-3">Created By WE Instructor: Eng. Mostafa Ahmed </h4>
            <Link to="mailto:mostafahmedqusit@gmail.com" className="btn btn-light"> Contact Us </Link>
        </footer>
    )
}

export default Footer