import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react';

const footerLinks = {
  menu: [
    { name: 'Birthday Cakes', href: '/menu?category=birthday-cakes' },
    { name: 'Wedding Cakes', href: '/menu?category=wedding-cakes' },
    { name: 'Cupcakes', href: '/menu?category=cupcakes' },
    { name: 'Pastries', href: '/menu?category=pastries' },
    { name: 'Specials', href: '/menu?category=specials' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Custom Orders', href: '/custom-orders' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Allergen Notice', href: '/allergens' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-xl font-bold">
                  {"O'R"}
                </span>
              </div>
              <div>
                <h2 className="font-serif text-xl font-bold leading-tight">
                  {"O'Rich"}
                </h2>
                <p className="text-xs opacity-80 -mt-1">
                  Cakes & Pastries
                </p>
              </div>
            </Link>
            <p className="text-sm opacity-90 leading-relaxed">
              Sweet Moments, Baked Fresh. Serving Ilorin and Kwara State with 
              premium cakes and pastries for all your special occasions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Our Menu</h3>
            <ul className="space-y-3">
              {footerLinks.menu.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=9+Shalom+House+Oke+Odo+Tanke+Ilorin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>9, Shalom House, Oke Odo, Tanke, Ilorin, Kwara State</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:08108180906"
                  className="flex items-center gap-3 text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span>08108180906</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:orichcakes@gmail.com"
                  className="flex items-center gap-3 text-sm opacity-90 hover:opacity-100 transition-opacity"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span>orichcakes@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-90">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <span>7:00 AM - 6:00 PM Daily</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="opacity-80">
            &copy; {currentYear} {"O'Rich Cakes & Pastries"}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
