import React from 'react';

function Footer() {
    const today = new Date();
    return (
        <footer className="bg-gray-900 text-gray-300 text-lg font-semibold tracking-wider">
            <div className="footer-container flex flex-col items-center p-3 md:flex-row-reverse md:w-11/12 md:mx-auto md:justify-between">
                <p>
                    <a href="#hero">Back To Top</a>
                </p>
                <p className="">DenisWritesCode &#169; {today.getFullYear()}</p>
            </div>
        </footer>
    );
}

export default Footer;
