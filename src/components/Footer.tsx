import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">VENITHA & CO</h3>
            <p className="text-sm opacity-90">
              Chaque thé raconte une histoire de nature, de savoir-faire, et d'authenticité.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="opacity-90 hover:opacity-100 transition-opacity">
                  Nos Thés
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-90 hover:opacity-100 transition-opacity">
                  Notre Histoire
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Informations</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/legal" className="opacity-90 hover:opacity-100 transition-opacity">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link to="/terms" className="opacity-90 hover:opacity-100 transition-opacity">
                  CGV
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="opacity-90 hover:opacity-100 transition-opacity">
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 opacity-90">
                <Mail className="h-4 w-4" />
                <span>contact@venithaco.com</span>
              </li>
              <li className="flex items-center gap-2 opacity-90">
                <Phone className="h-4 w-4" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-2 opacity-90">
                <MapPin className="h-4 w-4" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} VENITHA & CO. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
