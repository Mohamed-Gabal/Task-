import { Home, Grid3x3, Info, Mail, HelpCircle, ShoppingBag, Bell, Heart, ChevronDown, User } from "lucide-react";

const NavLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Our Category", href: "/category", icon: Grid3x3 },
  { name: "About Us", href: "/about", icon: Info },
  { name: "Contact Us", href: "/contact", icon: Mail },
  { name: "FAQs", href: "/faqs", icon: HelpCircle },
];

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🐱</span>
              </div>
              <span className="text-xl font-semibold text-gray-800">
                TinyTales
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NavLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center gap-3">
            {/* Shopping Bag */}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <ShoppingBag className="w-5 h-5 text-gray-700" />
            </button>

            {/* Notifications */}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <Bell className="w-5 h-5 text-gray-700" />
            </button>

            {/* Favorites */}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <Heart className="w-5 h-5 text-gray-700" />
            </button>

            {/* Language Selector */}
            <button className="flex items-center gap-1 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <span className="text-sm font-medium text-gray-700">EN</span>
              <ChevronDown className="w-4 h-4 text-gray-700" />
            </button>

            {/* User Profile */}
            <button className="flex items-center gap-1 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
              <User className="w-5 h-5 text-gray-700" />
              <ChevronDown className="w-4 h-4 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Demo Content */}
      <div className="bg-gray-50 py-8 text-center">
        <p className="text-gray-500 text-sm">Demo: Click any navigation item</p>
      </div>
    </header>
  );
};

export default Navbar;