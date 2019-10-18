import React from 'react'

const Footer = () => {

    const getYear = () => {
        return new Date().getFullYear()
    }

    return (
        <div className="footer">
            © {getYear()} Recipe Finder by Tom Holmes 
        </div>
    )
}

export default Footer;