import Link from 'next/link'

const FooterLinks = {
    company: [
        { name: "About", href: "/about" },
        { name: "Features", href: "/features" },
        { name: "Works", href: "/works" },
        { name: "Career", href: "/career" },
    ],
    help: [
        { name: "Customer Support", href: "/support" },
        { name: "Delivery Details", href: "/delivery" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
    ],
    resources: [
        { name: "Free eBooks", href: "/ebooks" },
        { name: "Development Tutorial", href: "/tutorial" },
        { name: "How to - Blog", href: "/blog" },
        { name: "Youtube Playlist", href: "/youtube" },
    ],
}

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-16 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-bold text-xl mb-4">SHOP.CO</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We have clothes that suits your style and which you're proud to
                            wear. From women to men.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            {FooterLinks.company.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="hover:text-white transition"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Help</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            {FooterLinks.help.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="hover:text-white transition"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}

                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            {FooterLinks.resources.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="hover:text-white transition"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; 2024 SHOP.CO. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer