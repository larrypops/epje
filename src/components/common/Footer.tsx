import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-11 h-11 rounded-lg overflow-hidden shadow-sm ring-1 ring-white/10">
                <Image
                  src="/images/logo.jpg"
                  alt="Logo EPJE Construction"
                  width={44}
                  height={44}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tighter leading-none">EPJE</span>
                <span className="text-[10px] font-semibold text-brand-orange uppercase tracking-widest leading-normal">Construction</span>
              </div>
            </Link>
            <p className="text-brand-secondary text-sm leading-relaxed max-w-xs">
              Votre partenaire de confiance pour la construction, la rénovation et les finitions haut de gamme au Cameroun.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-blue transition-colors duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-display font-bold text-lg">Liens Rapides</h4>
            <ul className="space-y-4">
              {[
                { name: "Accueil", href: "/" },
                { name: "Services", href: "/services" },
                { name: "À Propos", href: "/about" },
                { name: "Contact", href: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-brand-secondary hover:text-brand-orange transition-colors duration-300 flex items-center gap-2 text-sm group">
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-display font-bold text-lg">Nos Services</h4>
            <ul className="space-y-4 text-sm text-brand-secondary">
              <li>Construction de Bâtiments</li>
              <li>Rénovation & Réhabilitation</li>
              <li>Architecture & Études</li>
              <li>Carrelage Professionnel</li>
              <li>Vente & Location Immobilière</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-display font-bold text-lg">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors duration-300 shrink-0">
                  <Phone size={18} className="text-brand-orange" />
                </div>
                <div className="flex flex-col text-sm">
                  <span className="text-white font-medium">+237 694 538 117</span>
                  <span className="text-brand-secondary text-xs">+237 653 483 397</span>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors duration-300 shrink-0">
                  <Mail size={18} className="text-brand-orange" />
                </div>
                <div className="text-sm">
                  <span className="text-white font-medium break-all">epjeconstruction@gmail.com</span>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors duration-300 shrink-0">
                  <MapPin size={18} className="text-brand-orange" />
                </div>
                <div className="text-sm">
                  <span className="text-white font-medium">Douala / Yaoundé, Cameroun</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-brand-secondary text-xs">© {currentYear} EPJE Construction. Tous droits réservés.</p>
          <div className="flex items-center gap-8 text-xs text-brand-secondary">
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Conditions Générales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
