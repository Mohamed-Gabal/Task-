import Link from "next/link";

const FooterLinks = {
  company: [
    { name: "My Account", href: "/myAccount" },
    { name: "FAQs", href: "/fAQs" },
    { name: "Categories", href: "/categories" },
    { name: "All Products", href: "/allProducts" },
  ],
  help: [
    { name: "Refund Policy", href: "/refundPolicy" },
    { name: "About Us", href: "/aboutUs" },
    { name: "Cancellation Policy ", href: "/cancellationPolicy" },
    { name: "Terms and Conditions", href: "/termsConditions" },
    { name: "Privacy Policy", href: "/privaCyPolicy" },
  ],
  resources: [
    { name: "Free eBooks", href: "/ebooks" },
    { name: "Development Tutorial", href: "/tutorial" },
    { name: "How to - Blog", href: "/blog" },
    { name: "Youtube Playlist", href: "/youtube" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-[#BE968E] text-white mt-16 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4 cursor-pointer text-white flex items-center">
              <img src="/logo.png" alt="Logo" />
            </h3>
            <p className="text-[#FFFFFFB2] text-sm leading-relaxed">
              Ipsam in eos qui consequatur ab cum maxime.Soluta dolor quae Ipsam
              in eos qui consequatur ab .Soluta dolor quae Ipsam in eos
              quconsequatur ab cum maxime.Soluta dolor quae
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-[#FFFFFFB2] text-sm">
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
            <h4 className="font-semibold mb-4">Policies</h4>
            <ul className="space-y-2 text-[#FFFFFFB2] text-sm">
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
            <h4 className="font-semibold mb-4">Send Email</h4>
            <div>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 mb-4 text-sm text-gray-800 rounded-lg focus:outline-none"
              />
              <button className="w-full bg-white text-[#BE968E] font-semibold py-2 rounded-lg hover:bg-gray-200 transition">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
