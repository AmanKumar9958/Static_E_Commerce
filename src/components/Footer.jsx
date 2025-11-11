import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-primary mt-16" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-heading font-bold mb-4">Store Info</h2>
                        <address className="not-italic space-y-1 text-sm text-body">
                            <p>SKS Mart - Barbigha</p>
                            <p>1st Floor, Jagdamba Market</p>
                            <p>Near HP Petrol Pump</p>
                            <p>Barbigha, Sheikhpura, Bihar</p>
                        </address>
                    </div>
                    <div>
                        <h2 className="text-heading font-bold mb-4">Navigate</h2>
                        <ul className="space-y-2 text-sm text-body">
                            <li><Link to="/" className="hover:underline hover:text-heading transition-colors">Home</Link></li>
                            <li><Link to="/collection" className="hover:underline hover:text-heading transition-colors">Collection</Link></li>
                            <li><Link to="/about" className="hover:underline hover:text-heading transition-colors">About</Link></li>
                            <li><Link to="/contact" className="hover:underline hover:text-heading transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-heading font-bold mb-4">Contact</h2>
                        <ul className="space-y-2 text-sm text-body">
                            <li><a href="tel:+919022791121" className="hover:underline hover:text-heading transition-colors">+91 90227 91121 (WhatsApp)</a></li>
                            <li><a href="https://wa.me/919022791121" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-heading transition-colors">Chat on WhatsApp</a></li>
                            <li><a href="mailto:info@sksmart.example" className="hover:underline hover:text-heading transition-colors">info@sksmart.example</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-heading font-bold mb-4">Hours</h2>
                        <ul className="space-y-1 text-sm text-body">
                            <li>Mon - Sat: 9:00 AM - 8:30 PM</li>
                            <li>Sunday: 10:00 AM - 2:00 PM</li>
                            <li className="text-xs opacity-80">(Hours may vary on holidays)</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 pt-6 border-t border-heading/30 text-center text-xs text-body/80">
                    <p>&copy; {new Date().getFullYear()} SKS Mart - Barbigha. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
