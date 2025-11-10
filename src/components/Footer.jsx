import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="mt-16 bg-white border-t border-zinc-200 text-zinc-700">
            <div className="container-max mx-auto px-4 sm:px-6 py-10 grid gap-10 md:grid-cols-4">
                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold text-zinc-900">SKS Mart</h2>
                    <p className="text-sm mt-3 leading-relaxed">Local store in Barbigha offering quality fabrics, school uniforms, ready-made garments and footwear for the whole family.</p>
                </div>
                {/* Links */}
                <nav aria-label="Footer navigation">
                    <h3 className="font-semibold text-zinc-900 mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        {[
                        { to: '/', label: 'Home' },
                        { to: '/collection', label: 'Collection' },
                        { to: '/about', label: 'About' },
                        { to: '/contact', label: 'Contact' },
                        ].map(l => (
                        <li key={l.to}>
                            <Link
                            to={l.to}
                            className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
                            >{l.label}</Link>
                        </li>
                        ))}
                    </ul>
                </nav>
                {/* Contact */}
                <div>
                    <h3 className="font-semibold text-zinc-900 mb-3">Contact</h3>
                    <ul className="space-y-2 text-sm">
                        <li>1st Floor, Jagdamba Market, Near Durga Mandir,</li>
                        <li>Purani Sahar, Barbigha, Sheikhpura, Bihar - 811101</li>
                        <li>Phone: <a href="tel:+919022791121" className="hover:text-primary">9022791121</a></li>
                        <li>Email: <a href="mailto:sksmart2021brb@gmail.com" className="hover:text-primary">sksmart2021brb@gmail.com</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-zinc-200 py-4 text-center text-xs text-zinc-500">
                <p>&copy; {new Date().getFullYear()} SKS Mart. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
